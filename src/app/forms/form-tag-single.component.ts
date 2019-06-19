import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger
} from '@angular/material';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { auditTime, map, mergeMap, startWith, take } from 'rxjs/operators';
import { ConfirmationService } from '../dialogs/app-confirmation.component';
import { FormBase } from './form-base-class';
import { Tag } from './Tag';

const uuidv1 = require('uuid/v1');

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-tag-single',
  template: `
    <mat-form-field class="full-width">
      <input
        #textInput
        matInput
        type="text"
        (keyup)="preventEnterKey($event)"
        (keydown)="preventEnterKey($event)"
        [placeholder]="placeholder"
        [formControl]="inputTextControl"
        [matAutocomplete]="auto"
        [name]="autoCompleteObscureName"
      />
      <button
        *ngIf="textInput.nativeElement.focused"
        class="add-icon"
        mat-mini-fab
        matSuffix
        color="primary"
        matTooltip="Add tag to global taglist"
      >
        <mat-icon>add_circle</mat-icon>
      </button>
      <mat-icon
        class="is-grey r15"
        matTooltip="Add a single tag here, you can manage all your tags using the tag list editor in the settings menu"
        matBadge="1"
        matSuffix
        >local_offer</mat-icon
      >
      <mat-autocomplete
        #auto="matAutocomplete"
        (optionSelected)="onOptionSelected($event)"
      >
        <mat-option
          *ngFor="let tag of this.filteredTags$ | async"
          [value]="tag.name"
        >
          {{ tag.name }}
        </mat-option>
      </mat-autocomplete>
    </mat-form-field>
  `,
  styles: [
    `
      .add-icon {
        position: absolute;
        right: 43px;
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
    `
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppFormTagSingleComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AppFormTagSingleComponent),
      multi: true
    }
  ]
})
export class AppFormTagSingleComponent extends FormBase<Tag>
  implements OnInit, OnDestroy {
  @Input()
  placeholder = '';

  filteredTags$: Observable<Tag[]>;
  choicesArr: Tag[];

  inputTextControl = new FormControl();

  // Subscriptions
  subscriptionTags: Subscription;

  @ViewChild('auto')
  matAutocomplete: MatAutocomplete;

  // Variables Passed into this component
  @Input() selectChoices$: Observable<Tag[]>;
  @Input() customValues: boolean;
  @Output() addedNewTag = new EventEmitter<Tag>();
  @Output() selected = new EventEmitter<Tag>();

  constructor(private confirm: ConfirmationService) {
    super();
  }

  checkExists(val, name) {
    if (val == null) {
      throw new Error(name + ' has not been defined');
    }
  }

  ngOnInit() {
    this.checkExists(this.selectChoices$, 'this.selectChoices$');

    this.internalControl.valueChanges.pipe(take(1)).subscribe(() => {
      if (this.value && this.value.hasOwnProperty('name')) {
        this.inputTextControl.setValue(this.value.name);
      }
    });

    // this.inputTextControl.valueChanges.subscribe(() => {
    // })
    //  selectChoices resolves (once)
    this.filteredTags$ = this.selectChoices$.pipe(
      mergeMap(selectChoicesArr => {
        console.log('form-tag-single: NewChoices', { selectChoicesArr });
        this.choicesArr = selectChoicesArr;

        // set the tags filtering pipe
        return this.inputTextControl.valueChanges.pipe(
          auditTime(300),
          startWith(null),
          map((keyboardInput: string) => {
            // Filter based on the input value
            if (!keyboardInput) {
              return selectChoicesArr;
            }
            return selectChoicesArr.filter(val => {
              if (!val.name && !val.name.length) {
                return false;
              }
              const valLower = val.name.toLowerCase();
              const keyLower = (keyboardInput + '').toLowerCase();
              if (valLower.includes(keyLower)) {
                return true;
              }
              return false;
            });
          })
        );
      })
    );
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.inputTextControl.disable();
    } else {
      this.inputTextControl.enable();
    }
    super.setDisabledState(isDisabled);
  }

  preventEnterKey(e: KeyboardEvent) {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  }

  resetTag() {
    this.inputTextControl.setValidators(this.internalControl.validator);
    this.inputTextControl.setValue(null);
    this.value = null;
    console.log('form-tag-single: resetTag');
  }

  setTag(newTag: Tag) {
    this.value = newTag;
    this.inputTextControl.patchValue(newTag.name);
    this.selected.emit(newTag);
  }

  selectTag($event) {
    console.log($event);
  }

  async onBlur() {
    const input = this.inputTextControl.value;
    console.log('form-tag-single: onBlur()', {
      inputValue: input,
      autocompleteValue: this.matAutocomplete
    });
    const hasInput = !!input;
    // no input
    if (!hasInput) {
      this.resetTag();
      return;
    }
    const inputTrimmed = input ? input.trim() : '';
    const matchedTag = this.choicesArr
      .filter(v => v.name.toLowerCase() === inputTrimmed.toLowerCase())
      .pop();

    if (matchedTag) {
      this.setTag(matchedTag);
      return;
    }
    if (!this.customValues) {
      this.resetTag();
      return;
    }
    // can add custom
    const newTag = await this.getMakeNewTag(inputTrimmed);
    if (newTag) {
      this.addedNewTag.emit(newTag);
      this.setTag(newTag);
    } else {
      this.resetTag();
    }
  }

  onSelectionChange(e: MatAutocompleteSelectedEvent) {
    const selectedTagName = e.option.value;
    console.log('form-tag-single: onSelectionChange()', { selectedTagName });
    const selectedTag = this.choicesArr
      .filter(tag => tag.name === selectedTagName)
      .pop();
    if (!selectedTag) {
      this.resetTag();
      return;
    }
    this.setTag(selectedTag);
  }

  onOptionSelected($event) {
    console.log('form-tag-single: onOptionSelected()', { $event });
  }

  async getMakeNewTag(name): Promise<Tag> {
    // tslint:disable-next-line:max-line-length
    const isConfirmed = await this.confirm.AskConfirm(
      `The Tag - '${name}' will be added to the global list - Continue?`
    );
    if (isConfirmed) {
      const newTagId = uuidv1();
      const newTag: Tag = {
        id: newTagId,
        name: name.trim()
      };
      return newTag;
    } else {
      return null;
    }
  }
}
