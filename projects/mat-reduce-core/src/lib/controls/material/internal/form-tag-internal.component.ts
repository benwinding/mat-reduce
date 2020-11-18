// tslint:disable: variable-name
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormControl } from '@angular/forms';
import { Observable, Subject, BehaviorSubject, combineLatest } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { COMMA, ENTER, P } from '@angular/cdk/keycodes';

import {
  isIncludedAtBeginning,
  isIncluded,
  doesTextMatch,
} from '../../../utils/tag-helper';
import { Tag } from '../Tag';
import { MakeLogger } from '../../../utils/simple-logger';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-tag-internal',
  template: `
    <mat-form-field
      [appearance]="appearance"
      class="tag-full-width"
      [class.form-tag-control-invalid]="hasRed()"
    >
      <mat-chip-list #chipList [disabled]="disabled">
        <mat-chip
          *ngFor="let tag of $currentValue | async"
          [selectable]="true"
          [disabled]="disabled"
          [removable]="true"
          (removed)="removeTagChip(tag)"
        >
          {{ tag.name }}
          <mat-icon matChipRemove *ngIf="removable && !disabled"
            >cancel</mat-icon
          >
        </mat-chip>
        <input
          [placeholder]="placeholder"
          #textInput
          [name]="autoCompleteObscureName"
          [autocomplete]="autoCompleteText"
          [formControl]="inputTextControl"
          [matAutocomplete]="auto"
          [matChipInputFor]="chipList"
          [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
          [matChipInputAddOnBlur]="true"
          (matChipInputTokenEnd)="onTextInputBlur($event)"
          (keydown)="focusOnEnter($event)"
          (blur)="onBlur()"
        />
        <mat-icon
          class="tag-icon"
          matTooltip="Add tags here..."
          matBadge="∞"
          matSuffix
          >local_offer</mat-icon
        >
      </mat-chip-list>
      <mat-autocomplete
        #auto="matAutocomplete"
        (optionSelected)="optionSelectedFromList($event)"
      >
        <mat-option
          *ngFor="let choiceName of $filteredChoiceStrings | async"
          [value]="choiceName"
        >
          {{ choiceName }}
        </mat-option>
      </mat-autocomplete>
    </mat-form-field>
  `,
  styles: [
    `
      .tag-full-width {
        width: 100%;
      }
      .tag-icon {
        color: grey;
        right: 15px;
      }
      .tag-icon .mat-badge-content {
        background-color: #afc5b000 !important;
        right: 1px !important;
        top: 3px !important;
        color: white !important;
      }
      .form-tag-control-invalid .mat-form-field-label {
        color: #ff4f4f !important;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class LibFormTagInternalComponent implements OnInit, OnDestroy {
  // EXTERNAL API
  @Input()
  set choices(newChoices: Tag[]) {
    this.$choiceTags.next(newChoices);
  }
  @Input()
  set value(value: Tag[]) {
    this.$currentValue.next(value);
  }
  @Input() filterStrategy: 'all' | 'beginning' = 'all';
  @Input() controlRequired: boolean;
  @Input() controlInvalid: boolean;
  @Input() appearance: string;
  @Input() placeholder: string;
  @Input() autoCompleteObscureName: string;
  @Input() autoCompleteText: string;
  @Input() set disabled(isDisabled: boolean) {
    if (isDisabled) {
      this.inputTextControl.disable();
    } else {
      this.inputTextControl.enable();
    }
  }
  get disabled() {
    return this.inputTextControl.disabled;
  }
  @Input() customValues: boolean;
  @Input() removable = true;
  @Input() debug = true;

  @Output() onRemovedTag = new EventEmitter<Tag>();
  @Output() onMenuItemClicked = new EventEmitter<Tag>();
  @Output() onBlurredTextField = new EventEmitter<string>();

  // INTERNAL

  $currentValue = new BehaviorSubject<Tag[]>(null);
  $choiceTags = new BehaviorSubject<Tag[]>([]);
  $choiceStrings = new BehaviorSubject<string[]>([]);
  $filteredChoiceStrings = new BehaviorSubject<string[]>([]);

  destroyed = new Subject();
  separatorKeysCodes: number[] = [ENTER, COMMA];
  inputTextControl = new FormControl();

  @ViewChild('textInput', {} as any) textInput: ElementRef<HTMLInputElement>;
  @ViewChild('textInput', { read: MatAutocompleteTrigger } as any)
  matAutocompleteTrigger: MatAutocompleteTrigger;
  @ViewChild('auto', {} as any)
  matAutocomplete: MatAutocomplete;

  logger = MakeLogger('form-tag-internal');

  constructor(private snackbar: MatSnackBar) {
    this.$choiceTags
      .pipe(
        map((choices) => (Array.isArray(choices) ? choices : [])),
        map((choices) => choices.map((t) => (!!t ? t.name : ''))),
        takeUntil(this.destroyed)
      )
      .subscribe((choices) => this.$choiceStrings.next(choices));
    const $textChanges = this.inputTextControl.valueChanges.pipe(
      map((a) => a as string)
    );
    combineLatest([$textChanges, this.$currentValue, this.$choiceStrings])
      .pipe(
        startWith([]),
        map(([tagName]) =>
          tagName ? this._filter(tagName) : this.getChoicesMinusSelected()
        ),
        takeUntil(this.destroyed)
      )
      .subscribe((choices) => {
        this.$filteredChoiceStrings.next(choices);
      });
  }

  ngOnInit() {
    this.logger.SetEnabled(this.debug);
  }

  ngOnDestroy() {
    this.destroyed.next();
  }

  private getChoicesMinusSelected(): string[] {
    const selectedTags = this.$currentValue.getValue() || [];
    const alreadySelectedSet = new Set(selectedTags.map((t) => t.name));
    const selected = this.$choiceStrings
      .getValue()
      .filter((choice) => !alreadySelectedSet.has(choice));
    return selected;
  }

  private _filter(subStr: string): string[] {
    const choices = this.getChoicesMinusSelected();
    if (this.filterStrategy === 'all') {
      return _filterAll();
    } else {
      return _filterBeginning();
    }
    function _filterAll(): string[] {
      return choices.filter((choice) => isIncluded(choice, subStr));
    }
    function _filterBeginning(): string[] {
      return choices.filter((choice) => isIncludedAtBeginning(choice, subStr));
    }
  }

  onBlur() {
    this.logger.log('onBlur');
  }

  removeTagChip(tagToRemove: Tag) {
    this.logger.log('removeTagChip', { tagToRemove });
    this.matAutocompleteTrigger.closePanel();
    this.onRemovedTag.next(tagToRemove);
    this.resetTextInput();
  }

  notfiy(message: string) {
    this.snackbar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  async onTextInputBlur(event: MatChipInputEvent): Promise<void> {
    const value = event.value;
    const inputTrimmed = (value || '').trim();
    const ctx = this;

    function getTagMatching(name: string) {
      const choiceTags = ctx.$choiceTags.getValue() || [];
      const selectedTag = choiceTags.find((t) => doesTextMatch(t.name, name));
      return selectedTag;
    }

    function processNoCustom(): boolean {
      if (!inputTrimmed) {
        return true;
      }
      const hasSelectBoxOpen = ctx.matAutocomplete.isOpen;
      ctx.logger.log('onTextInputBlur', { inputTrimmed, hasSelectBoxOpen });
      if (!hasSelectBoxOpen) {
        ctx.notfiy('Must match item in list');
        return false;
      }
      const itemsShowing = ctx.$filteredChoiceStrings.getValue() || [];
      const has1ItemShowing = itemsShowing.length === 1;
      if (has1ItemShowing) {
        const itemShowing = itemsShowing[0];
        const selectedTag = getTagMatching(itemShowing);
        ctx.onMenuItemClicked.next(selectedTag);
        return true;
      }
      const matchAtBeginning = itemsShowing.find((str) =>
        isIncludedAtBeginning(str, inputTrimmed)
      );
      const hasMatchAtBeginning = !!matchAtBeginning;
      if (hasMatchAtBeginning) {
        const selectedTag = getTagMatching(matchAtBeginning);
        ctx.onMenuItemClicked.next(selectedTag);
        return true;
      }
      ctx.notfiy('Must match item in list');
      return false;
    }
    function processCustom(): boolean {
      if (!inputTrimmed) {
        return true;
      }
      const existsInValue = (ctx.$currentValue.getValue() || []).some((t) =>
        doesTextMatch(t.name, inputTrimmed)
      );
      if (existsInValue) {
        ctx.notfiy('Already added to list');
        return false;
      }
      const hasSelectBoxOpen = ctx.matAutocomplete.isOpen;
      ctx.logger.log('onTextInputBlur', { inputTrimmed, hasSelectBoxOpen });
      if (!hasSelectBoxOpen) {
        ctx.onBlurredTextField.next(inputTrimmed);
        return true;
      }
      const choiceTags = ctx.$choiceTags.getValue() || [];
      const selectedTag = choiceTags.find((t) =>
        doesTextMatch(t.name, inputTrimmed)
      );
      const hasExactMatch = !!selectedTag;
      if (hasExactMatch) {
        ctx.onMenuItemClicked.next(selectedTag);
        return true;
      }
      ctx.onBlurredTextField.next(inputTrimmed);
      return true;
    }
    if (this.customValues) {
      processCustom() && this.resetTextInput();
    } else {
      processNoCustom() && this.resetTextInput();
    }
  }

  resetTextInput() {
    // Reset the input value
    this.textInput.nativeElement.value = '';
    this.inputTextControl.setValue(null);
  }

  optionSelectedFromList(event: MatAutocompleteSelectedEvent): void {
    const optionText = event.option.viewValue;
    const options = this.$choiceTags.getValue() || [];
    const selectedTag = options
      .filter((tag) => doesTextMatch(tag.name, optionText))
      .pop();
    if (!selectedTag) {
      this.logger.error(
        'optionSelectedFromList() not sure how autocomplete selected something not in the list...'
      );
    }
    this.logger.log('optionSelectedFromList()', {
      event,
      optionText,
      options,
      selectedTag,
    });
    this.onMenuItemClicked.next(selectedTag);
    this.resetTextInput();
    this.textInput.nativeElement.blur();
  }

  focusOnEnter(e: KeyboardEvent) {
    if (e.keyCode === 13) {
      this.logger.log('enter key pressed', { key: e.key, code: e.keyCode });
      setTimeout(() => {
        this.textInput.nativeElement.focus();
      });
    }
  }

  hasRed() {
    const isDirty =
      this.inputTextControl.touched || this.inputTextControl.dirty;
    const isInValid = this.controlInvalid;
    return isDirty && isInValid;
  }
}
