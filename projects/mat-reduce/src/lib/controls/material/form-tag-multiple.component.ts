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
  ViewEncapsulation
} from '@angular/core';
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatChipInputEvent,
  MatSnackBar,
  MatAutocompleteTrigger
} from '@angular/material';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, AbstractControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormBase } from '../form-base-class';
import { Tag } from './Tag';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { v1 as uuidv1 } from 'uuid';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-tag-multiple',
  template: `
    <mat-form-field
      class="tag-full-width"
      [class.form-tag-control-invalid]="hasRed()"
    >
      <mat-chip-list #chipList aria-label="Fruit selection">
        <mat-chip
          *ngFor="let tag of selectedTags"
          [selectable]="selectable"
          [disabled]="this.internalControl.disabled"
          [removable]="removable"
          (removed)="removeTagChip(tag)"
        >
          {{ tag.name }}
          <mat-icon
            matChipRemove
            *ngIf="removable && this.internalControl.enabled"
            >cancel</mat-icon
          >
        </mat-chip>
        <input
          [placeholder]="placeholder"
          #textInput
          [name]="autoCompleteObscureName"
          autocomplete="dontcompleteme"
          [formControl]="inputTextControl"
          [matAutocomplete]="auto"
          [matChipInputFor]="chipList"
          [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
          [matChipInputAddOnBlur]="addOnBlur"
          (matChipInputTokenEnd)="addFromTextInput($event)"
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
    `
  ],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LibFormTagMultipleComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormTagMultipleComponent),
      multi: true
    }
  ]
})
export class LibFormTagMultipleComponent extends FormBase<Tag[]>
  implements OnInit, OnDestroy {
  // EXTERNAL API
  private _choices: Tag[] = [];
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
  @Input() removable = true;
  @Output() addedNewTag = new EventEmitter<Tag>();

  // INTERNAL

  get selectedTags() {
    return this.value;
  }
  get choicesStrings(): string[] {
    return this.choices.map(t => (!!t ? t.name : ''));
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

  destroyed = new Subject<void>();

  constructor(private snack: MatSnackBar) {
    super();
  }

  ngOnInit() {
    this.filteredTagNames$ = this.inputTextControl.valueChanges.pipe(
      startWith(null),
      map((tagName: string | null) =>
        tagName ? this._filter(tagName) : this.getChoicesMinusSelected()
      )
    );
  }

  ngOnDestroy() {
    this.destroyed.next();
  }

  writeValue(newVal: Tag[]) {
    this.value = newVal || [];
  }

  private getChoicesMinusSelected(): string[] {
    const alreadySelectedSet = new Set(this.selectedTags.map(t => t.name));
    return this.choicesStrings.filter(
      choice => !alreadySelectedSet.has(choice)
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.getChoicesMinusSelected().filter(
      choice => choice.toLowerCase().indexOf(filterValue) === 0
    );
  }

  onBlur() {
    this.CheckValueIsValid();
  }

  removeTagChip(tagToRemove: Tag) {
    this.log('removeTagChip', { tagToRemove });
    this.matAutocompleteTrigger.closePanel();
    this.value = this.value.filter(t => t.id !== tagToRemove.id);
    this.inputTextControl.setValue(null);
    this.inputTextControl.markAsTouched();
  }

  async addFromTextInput(event: MatChipInputEvent): Promise<void> {
    const value = event.value;
    const inputTrimmed = (value || '').trim();
    if (!inputTrimmed) {
      this.resetTextInput();
      return;
    }
    this.log('addFromTextInput', { value: event.value });
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (this.matAutocomplete.isOpen) {
      this.resetTextInput();
      return;
    }
    if (!this.customValues) {
      this.resetTextInput();
      this.snack.open('Must select item from list', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
      this.log('addFromTextInput() unable to add custom values...');
      return;
    }
    this.resetTextInput();
    const newTag = await this.makeNewTag(inputTrimmed);
    this.addedNewTag.emit(newTag);
    this.choices.push(newTag);
    this.addedTagToInternalValue(newTag);
    this.notify(`Adding "${newTag.name}" to the global list...`);
    this.log('addFromTextInput() added new tag', { newTag });
  }

  resetTextInput() {
    // Reset the input value
    this.textInput.nativeElement.value = '';
    this.inputTextControl.setValue(null);
  }

  optionSelectedFromList(event: MatAutocompleteSelectedEvent): void {
    this.log('optionSelectedFromList()', {
      event,
      value: event.option.viewValue
    });
    const autoCompleteValue = event.option.viewValue;
    const selectedTag = [...(this.choices || [])]
      .filter(tag => tag.name === autoCompleteValue)
      .pop();
    if (!selectedTag) {
      this.warn(
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
      name: name.trim()
    };
    return newTag;
  }

  private addedTagToInternalValue(newTag: Tag) {
    const currentValue = [...(this.value || [])];
    currentValue.push(newTag);
    this.value = currentValue;
  }

  focusOnEnter(e: KeyboardEvent) {
    if (e.keyCode === 13) {
      this.log('enter key pressed', { key: e.key, code: e.keyCode });
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

  hasRed() {
    const isDirty = this.inputTextControl.touched || this.inputTextControl.dirty;
    const isInValid = this.internalControl.invalid;
    this.log('has Red:', {isDirty, isInValid, value: this.value, thisControl: this });
    return isDirty && isInValid;
  }

  notify(message: string) {
    this.snack.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  log(msg: string, obj?: any) {
    if (!obj) {
      return console.log('form-tag-multiple: ', msg);
    }
    console.log('form-tag-multiple: ', msg, obj);
  }

  warn(msg: string, obj?: any) {
    if (!obj) {
      return console.log('form-tag-multiple: ', msg);
    }
    console.warn('form-tag-multiple: ', msg, obj);
  }

  CheckValueIsValid() {
    if (!this.internalControl || !this.internalControl.validator) {
      return;
    }
    const validator = this.internalControl.validator({} as AbstractControl);
    const isRequired = validator && validator.required;
    if (!isRequired) {
      return null;
    }
    if (!Array.isArray(this.value)) {
      return 'form value is not an array';
    }
    if (!this.value.length) {
      return 'form value is required but has no value';
    }
    return null;
  }
}
