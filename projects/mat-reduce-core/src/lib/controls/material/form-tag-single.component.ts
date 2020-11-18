// tslint:disable: variable-name
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import { ConfirmationService } from '../../dialogs/app-confirmation.component';
import { FormBase } from '../form-base-class';
import { Tag } from './Tag';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { v1 as uuidv1 } from 'uuid';
import { SimpleLog } from '../../utils';
import {
  doesTextMatch,
  isIncluded,
  isIncludedAtBeginning,
} from '../../utils/tag-helper';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-tag-single',
  template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <mat-chip-list #chipList [disabled]="disabled">
        <mat-chip
          *ngIf="selectedTag as tag"
          [selectable]="selectable"
          [removable]="removable"
          (removed)="removeTagChip(tag)"
          [disabled]="disabled"
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
          [matChipInputAddOnBlur]="addOnBlur"
          (matChipInputTokenEnd)="addFromTextInput($event)"
          (keydown)="focusOnEnter($event)"
        />
        <mat-icon
          class="is-grey r15"
          matTooltip="Add a single tag here, you can manage all your tags using the tag list editor in the settings menu"
          matBadge="1"
          matSuffix
          >local_offer</mat-icon
        >
      </mat-chip-list>
      <mat-autocomplete
        #auto="matAutocomplete"
        (optionSelected)="optionSelectedFromList($event)"
      >
        <mat-option
          *ngFor="let choiceName of filteredTagNames$ | async"
          [value]="choiceName"
        >
          {{ choiceName }}
        </mat-option>
      </mat-autocomplete>
    </mat-form-field>
  `,
  styles: [
    `
      .full-width {
        width: 100%;
      }
      .is-grey {
        color: grey;
      }
      .r15 {
        right: 15px;
      }
      mat-icon span {
        background-color: #afc5b000;
        right: 1px !important;
        top: 3px !important;
        color: white;
      }
    `,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LibFormTagSingleComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormTagSingleComponent),
      multi: true,
    },
  ],
})
export class LibFormTagSingleComponent
  extends FormBase<Tag>
  implements OnInit, OnDestroy {
  // EXTERNAL API
  private _choices: Tag[];
  @Input()
  set choices(newChoices) {
    if (!newChoices) {
      newChoices = [];
    }
    this._choices = newChoices;
    this.inputTextControl.patchValue(this.inputTextControl.value);
  }
  get choices() {
    return this._choices;
  }
  @Input() customValues: boolean;
  @Input() filterStrategy: 'all' | 'beginning' = 'all';
  @Input() removable = true;
  @Output() addedNewTag = new EventEmitter<Tag>();

  // INTERNAL

  get selectedTag() {
    return this.value;
  }
  get choicesStrings(): string[] {
    return this.choices.map((t) => (!!t ? t.name : ''));
  }
  visible = true;
  selectable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  inputTextControl = new FormControl();
  filteredTagNames$: Observable<string[]>;

  @ViewChild('textInput', {} as any) textInput: ElementRef<HTMLInputElement>;
  @ViewChild('textInput', { read: MatAutocompleteTrigger } as any)
  matAutocompleteTrigger: MatAutocompleteTrigger;
  @ViewChild('auto', {} as any)
  matAutocomplete: MatAutocomplete;

  logger: SimpleLog;

  constructor(
    private confirm: ConfirmationService,
    private snack: MatSnackBar
  ) {
    super();
    this.$nginit.pipe(take(1)).subscribe(() => this.init());
  }

  init() {
    this.checkExists(this.choices, 'this.selectChoices$');
    this.logger = new SimpleLog(this.debug);

    this.filteredTagNames$ = this.inputTextControl.valueChanges.pipe(
      startWith(null),
      map((tagName: string | null) =>
        tagName ? this._filter(tagName) : this.getChoicesMinusSelected()
      )
    );
  }

  writeValue(newVal: Tag) {
    this.value = newVal;
  }

  private getChoicesMinusSelected(): string[] {
    const selectedTagName = this.selectedTag ? this.selectedTag.name : '';
    const alreadySelectedSet = new Set([selectedTagName]);
    return this.choicesStrings.filter(
      (choice) => !alreadySelectedSet.has(choice)
    );
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

  checkExists(val, name) {
    if (val == null) {
      throw new Error(name + ' has not been defined');
    }
  }

  removeTagChip(tagToRemove: Tag) {
    this.logger.log('removeTagChip', { tagToRemove });
    this.matAutocompleteTrigger.closePanel();
    this.value = null;
    this.inputTextControl.setValue(null);
  }

  async addFromTextInput(event: MatChipInputEvent): Promise<void> {
    const value = event.value;
    const inputTrimmed = (value || '').trim();
    if (!inputTrimmed) {
      this.resetTextInput();
      return;
    }
    this.logger.log('addFromTextInput', { value: event.value });
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    const found = this.choices.find((c) => doesTextMatch(c.name, inputTrimmed));
    if (found) {
      this.logger.log(
        'addFromTextInput() found match, adding that instead of making new tag'
      );
      this.addedTagToInternalValue(found);
      this.resetTextInput();
      return;
    }
    if (!this.customValues && this.matAutocomplete.isOpen) {
      // this.resetTextInput();
      return;
    }
    if (!this.customValues) {
      this.resetTextInput();
      this.snack.open('Must select item from list', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      this.logger.log('addFromTextInput() unable to add custom values...');
      return;
    }
    this.resetTextInput();
    const confirmed = await this.confirm.AskConfirm(
      `Are you sure you want to add: "${inputTrimmed}" to the global list?`
    );
    if (!confirmed) {
      this.logger.log('addFromTextInput() not confirmed, nothing changed...');
      this.notify('Nothing added globally');
      return;
    }
    const newTag = await this.makeNewTag(inputTrimmed);
    this.addedNewTag.emit(newTag);
    this.choices.push(newTag);
    this.addedTagToInternalValue(newTag);
    this.notify(`Adding "${newTag.name}" to the global list...`);
    this.logger.log('addFromTextInput() added new tag', { newTag, confirmed });
  }

  resetTextInput() {
    // Reset the input value
    this.textInput.nativeElement.value = '';
    this.inputTextControl.setValue('');
  }

  optionSelectedFromList(event: MatAutocompleteSelectedEvent): void {
    this.logger.log('optionSelectedFromList()', {
      event,
      value: event.option.viewValue,
    });
    const autoCompleteValue = event.option.viewValue;
    const selectedTag = [...(this.choices || [])]
      .filter((tag) => doesTextMatch(tag.name, autoCompleteValue))
      .pop();
    if (!selectedTag) {
      this.logger.warn(
        'optionSelectedFromList() not sure how autocomplete selected something not in the list...'
      );
      return;
    }
    this.addedTagToInternalValue(selectedTag);
    this.textInput.nativeElement.value = '';
    this.textInput.nativeElement.blur();
    this.inputTextControl.setValue(null);
  }

  async makeNewTag(name): Promise<Tag> {
    const newTagId = uuidv1();
    const newTag: Tag = {
      id: newTagId,
      name: name.trim(),
    };
    return newTag;
  }

  private addedTagToInternalValue(newTag: Tag) {
    this.value = newTag;
  }

  focusOnEnter(e: KeyboardEvent) {
    if (e.keyCode === 13) {
      this.logger.log('enter key pressed', { key: e.key, code: e.keyCode });
      setTimeout(() => {
        this.textInput.nativeElement.focus();
      });
    }
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.inputTextControl.disable();
    } else {
      this.inputTextControl.enable();
    }
    super.setDisabledState(isDisabled);
  }

  notify(message: string) {
    this.snack.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
