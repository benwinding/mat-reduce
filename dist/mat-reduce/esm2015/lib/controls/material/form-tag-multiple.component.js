/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable: variable-name
import { Component, EventEmitter, forwardRef, Input, Output, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { MatAutocomplete, MatSnackBar, MatAutocompleteTrigger } from '@angular/material';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormBase } from '../form-base-class';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { v1 as uuidv1 } from 'uuid';
export class LibFormTagMultipleComponent extends FormBase {
    /**
     * @param {?} snack
     */
    constructor(snack) {
        super();
        this.snack = snack;
        // EXTERNAL API
        this._choices = [];
        this.removable = true;
        this.filterStrategy = 'all';
        this.addedNewTag = new EventEmitter();
        this.visible = true;
        this.selectable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.inputTextControl = new FormControl();
        this.destroyed = new Subject();
    }
    /**
     * @param {?} newChoices
     * @return {?}
     */
    set choices(newChoices) {
        if (!newChoices) {
            newChoices = [];
        }
        this._choices = newChoices;
        this.inputTextControl.patchValue(this.inputTextControl.value);
    }
    /**
     * @return {?}
     */
    get choices() {
        return this._choices;
    }
    // INTERNAL
    /**
     * @return {?}
     */
    get selectedTags() {
        return this.value;
    }
    /**
     * @return {?}
     */
    get choicesStrings() {
        return this.choices.map((/**
         * @param {?} t
         * @return {?}
         */
        t => (!!t ? t.name : '')));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.filteredTagNames$ = this.inputTextControl.valueChanges.pipe(startWith(null), map((/**
         * @param {?} tagName
         * @return {?}
         */
        (tagName) => tagName ? this._filter(tagName) : this.getChoicesMinusSelected())));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed.next();
    }
    /**
     * @param {?} newVal
     * @return {?}
     */
    writeValue(newVal) {
        this.value = newVal || [];
    }
    /**
     * @private
     * @return {?}
     */
    getChoicesMinusSelected() {
        /** @type {?} */
        const alreadySelectedSet = new Set(this.selectedTags.map((/**
         * @param {?} t
         * @return {?}
         */
        t => t.name)));
        return this.choicesStrings.filter((/**
         * @param {?} choice
         * @return {?}
         */
        choice => !alreadySelectedSet.has(choice)));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filter(value) {
        /** @type {?} */
        const choices = this.getChoicesMinusSelected();
        if (this.filterStrategy === 'all') {
            return _filterAll();
        }
        else {
            return _filterBeginning();
        }
        /**
         * @return {?}
         */
        function _filterAll() {
            /** @type {?} */
            const filterValue = value.toLowerCase();
            return choices.filter((/**
             * @param {?} choice
             * @return {?}
             */
            choice => (choice + '').toLowerCase().includes(filterValue)));
        }
        /**
         * @return {?}
         */
        function _filterBeginning() {
            /** @type {?} */
            const filterValue = value.toLowerCase();
            return choices.filter((/**
             * @param {?} choice
             * @return {?}
             */
            choice => (choice + '').toLowerCase().indexOf(filterValue) === 0));
        }
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.CheckValueIsValid();
    }
    /**
     * @param {?} tagToRemove
     * @return {?}
     */
    removeTagChip(tagToRemove) {
        this.log('removeTagChip', { tagToRemove });
        this.matAutocompleteTrigger.closePanel();
        this.value = this.value.filter((/**
         * @param {?} t
         * @return {?}
         */
        t => t.id !== tagToRemove.id));
        this.inputTextControl.setValue(null);
        this.inputTextControl.markAsTouched();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    addFromTextInput(event) {
        return tslib_1.__awaiter(this, void 0, void 0, /** @this {!LibFormTagMultipleComponent} */ function* () {
            /** @type {?} */
            const value = event.value;
            /** @type {?} */
            const inputTrimmed = (value || '').trim();
            if (!inputTrimmed) {
                this.resetTextInput();
                return;
            }
            this.log('addFromTextInput', { value: event.value });
            // Add fruit only when MatAutocomplete is not open
            // To make sure this does not conflict with OptionSelected Event
            /** @type {?} */
            const found = this.choices.find((/**
             * @param {?} c
             * @return {?}
             */
            c => c.name === inputTrimmed));
            if (found) {
                this.log('addFromTextInput() found match, adding that instead of making new tag');
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
                    verticalPosition: 'bottom'
                });
                this.log('addFromTextInput() unable to add custom values...');
                return;
            }
            this.resetTextInput();
            /** @type {?} */
            const newTag = yield this.makeNewTag(inputTrimmed);
            this.addedNewTag.emit(newTag);
            this.choices.push(newTag);
            this.addedTagToInternalValue(newTag);
            this.notify(`Adding "${newTag.name}" to the global list...`);
            this.log('addFromTextInput() added new tag', { newTag });
        });
    }
    /**
     * @return {?}
     */
    resetTextInput() {
        // Reset the input value
        this.textInput.nativeElement.value = '';
        this.inputTextControl.setValue(null);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    optionSelectedFromList(event) {
        this.log('optionSelectedFromList()', {
            event,
            value: event.option.viewValue
        });
        /** @type {?} */
        const autoCompleteValue = event.option.viewValue;
        /** @type {?} */
        const selectedTag = [...(this.choices || [])]
            .filter((/**
         * @param {?} tag
         * @return {?}
         */
        tag => tag.name === autoCompleteValue))
            .pop();
        if (!selectedTag) {
            this.warn('optionSelectedFromList() not sure how autocomplete selected something not in the list...');
            return;
        }
        this.addedTagToInternalValue(selectedTag);
        this.textInput.nativeElement.value = '';
        this.textInput.nativeElement.blur();
        this.inputTextControl.setValue(null);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    makeNewTag(name) {
        return tslib_1.__awaiter(this, void 0, void 0, /** @this {!LibFormTagMultipleComponent} */ function* () {
            /** @type {?} */
            const newTagId = uuidv1();
            /** @type {?} */
            const newTag = {
                id: newTagId,
                name: name.trim()
            };
            return newTag;
        });
    }
    /**
     * @private
     * @param {?} newTag
     * @return {?}
     */
    addedTagToInternalValue(newTag) {
        /** @type {?} */
        const currentValue = [...(this.value || [])];
        currentValue.push(newTag);
        this.value = currentValue;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    focusOnEnter(e) {
        if (e.keyCode === 13) {
            this.log('enter key pressed', { key: e.key, code: e.keyCode });
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.textInput.nativeElement.focus();
            }));
        }
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.inputTextControl.disable();
        }
        else {
            this.inputTextControl.enable();
        }
        super.setDisabledState(isDisabled);
    }
    /**
     * @return {?}
     */
    hasRed() {
        /** @type {?} */
        const isDirty = this.inputTextControl.touched || this.inputTextControl.dirty;
        /** @type {?} */
        const isInValid = this.internalControl.invalid;
        return isDirty && isInValid;
    }
    /**
     * @param {?} message
     * @return {?}
     */
    notify(message) {
        this.snack.open(message, 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
        });
    }
    /**
     * @param {?} msg
     * @param {?=} obj
     * @return {?}
     */
    log(msg, obj) {
        if (!obj) {
            return console.log('form-tag-multiple: ', msg);
        }
        console.log('form-tag-multiple: ', msg, obj);
    }
    /**
     * @param {?} msg
     * @param {?=} obj
     * @return {?}
     */
    warn(msg, obj) {
        if (!obj) {
            return console.log('form-tag-multiple: ', msg);
        }
        console.warn('form-tag-multiple: ', msg, obj);
    }
    /**
     * @return {?}
     */
    CheckValueIsValid() {
        if (!this.internalControl || !this.internalControl.validator) {
            return;
        }
        /** @type {?} */
        const validator = this.internalControl.validator((/** @type {?} */ ({})));
        /** @type {?} */
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
LibFormTagMultipleComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-tag-multiple',
                template: `
    <mat-form-field
      [appearance]="appearance"
      class="tag-full-width"
      [class.form-tag-control-invalid]="hasRed()"
    >
      <mat-chip-list #chipList [disabled]="disabled">
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
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTagMultipleComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTagMultipleComponent)),
                        multi: true
                    }
                ],
                styles: [`
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
    `]
            }] }
];
/** @nocollapse */
LibFormTagMultipleComponent.ctorParameters = () => [
    { type: MatSnackBar }
];
LibFormTagMultipleComponent.propDecorators = {
    choices: [{ type: Input }],
    customValues: [{ type: Input }],
    removable: [{ type: Input }],
    filterStrategy: [{ type: Input }],
    addedNewTag: [{ type: Output }],
    textInput: [{ type: ViewChild, args: ['textInput', (/** @type {?} */ ({})),] }],
    matAutocompleteTrigger: [{ type: ViewChild, args: ['textInput', (/** @type {?} */ ({ read: MatAutocompleteTrigger })),] }],
    matAutocomplete: [{ type: ViewChild, args: ['auto', (/** @type {?} */ ({})),] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    LibFormTagMultipleComponent.prototype._choices;
    /** @type {?} */
    LibFormTagMultipleComponent.prototype.customValues;
    /** @type {?} */
    LibFormTagMultipleComponent.prototype.removable;
    /** @type {?} */
    LibFormTagMultipleComponent.prototype.filterStrategy;
    /** @type {?} */
    LibFormTagMultipleComponent.prototype.addedNewTag;
    /** @type {?} */
    LibFormTagMultipleComponent.prototype.visible;
    /** @type {?} */
    LibFormTagMultipleComponent.prototype.selectable;
    /** @type {?} */
    LibFormTagMultipleComponent.prototype.addOnBlur;
    /** @type {?} */
    LibFormTagMultipleComponent.prototype.separatorKeysCodes;
    /** @type {?} */
    LibFormTagMultipleComponent.prototype.inputTextControl;
    /** @type {?} */
    LibFormTagMultipleComponent.prototype.filteredTagNames$;
    /** @type {?} */
    LibFormTagMultipleComponent.prototype.textInput;
    /** @type {?} */
    LibFormTagMultipleComponent.prototype.matAutocompleteTrigger;
    /** @type {?} */
    LibFormTagMultipleComponent.prototype.matAutocomplete;
    /** @type {?} */
    LibFormTagMultipleComponent.prototype.destroyed;
    /**
     * @type {?}
     * @private
     */
    LibFormTagMultipleComponent.prototype.snack;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS10YWctbXVsdGlwbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXJlZHVjZS8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9tYXRlcmlhbC9mb3JtLXRhZy1tdWx0aXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULFVBQVUsRUFDVixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLGVBQWUsRUFHZixXQUFXLEVBQ1gsc0JBQXNCLEVBQ3ZCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQW1CLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEcsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXJELE9BQU8sRUFBRSxFQUFFLElBQUksTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBK0ZwQyxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsUUFBZTs7OztJQTJDOUQsWUFBb0IsS0FBa0I7UUFDcEMsS0FBSyxFQUFFLENBQUM7UUFEVSxVQUFLLEdBQUwsS0FBSyxDQUFhOztRQXhDOUIsYUFBUSxHQUFVLEVBQUUsQ0FBQztRQWFwQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLG1CQUFjLEdBQXdCLEtBQUssQ0FBQztRQUMzQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFVaEQsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQix1QkFBa0IsR0FBYSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5QyxxQkFBZ0IsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBU3JDLGNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBSWhDLENBQUM7Ozs7O0lBekNELElBQ0ksT0FBTyxDQUFDLFVBQVU7UUFDcEIsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FDakI7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7O0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBUUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFDRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBb0JELFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQzlELFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFDZixHQUFHOzs7O1FBQUMsQ0FBQyxPQUFzQixFQUFFLEVBQUUsQ0FDN0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsRUFDakUsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQWE7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRU8sdUJBQXVCOztjQUN2QixrQkFBa0IsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQztRQUN0RSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTTs7OztRQUMvQixNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUMxQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sT0FBTyxDQUFDLEtBQWE7O2NBQ3JCLE9BQU8sR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUU7UUFDOUMsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLEtBQUssRUFBRTtZQUNqQyxPQUFPLFVBQVUsRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxPQUFPLGdCQUFnQixFQUFFLENBQUM7U0FDM0I7Ozs7UUFDRCxTQUFTLFVBQVU7O2tCQUNYLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQ3ZDLE9BQU8sT0FBTyxDQUFDLE1BQU07Ozs7WUFBQyxNQUFNLENBQUMsRUFBRSxDQUM3QixDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQ2xELENBQUM7UUFDSixDQUFDOzs7O1FBQ0QsU0FBUyxnQkFBZ0I7O2tCQUNqQixXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUN2QyxPQUFPLE9BQU8sQ0FBQyxNQUFNOzs7O1lBQ25CLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFDakUsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLFdBQWdCO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssV0FBVyxDQUFDLEVBQUUsRUFBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRUssZ0JBQWdCLENBQUMsS0FBd0I7OztrQkFDdkMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLOztrQkFDbkIsWUFBWSxHQUFHLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRTtZQUN6QyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNqQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3RCLE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Ozs7a0JBRy9DLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUFDO1lBQzdELElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxHQUFHLENBQUMsdUVBQXVFLENBQUMsQ0FBQztnQkFDbEYsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3RCLE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFO2dCQUNyRCx5QkFBeUI7Z0JBQ3pCLE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLDRCQUE0QixFQUFFLE9BQU8sRUFBRTtvQkFDckQsUUFBUSxFQUFFLElBQUk7b0JBQ2Qsa0JBQWtCLEVBQUUsUUFBUTtvQkFDNUIsZ0JBQWdCLEVBQUUsUUFBUTtpQkFDM0IsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxHQUFHLENBQUMsbURBQW1ELENBQUMsQ0FBQztnQkFDOUQsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDOztrQkFDaEIsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7WUFDbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxNQUFNLENBQUMsSUFBSSx5QkFBeUIsQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzNELENBQUM7S0FBQTs7OztJQUVELGNBQWM7UUFDWix3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsc0JBQXNCLENBQUMsS0FBbUM7UUFDeEQsSUFBSSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRTtZQUNuQyxLQUFLO1lBQ0wsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUztTQUM5QixDQUFDLENBQUM7O2NBQ0csaUJBQWlCLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTOztjQUMxQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQzthQUMxQyxNQUFNOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLGlCQUFpQixFQUFDO2FBQzdDLEdBQUcsRUFBRTtRQUNSLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FDUCwwRkFBMEYsQ0FDM0YsQ0FBQztZQUNGLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFSyxVQUFVLENBQUMsSUFBSTs7O2tCQUNiLFFBQVEsR0FBRyxNQUFNLEVBQUU7O2tCQUNuQixNQUFNLEdBQVE7Z0JBQ2xCLEVBQUUsRUFBRSxRQUFRO2dCQUNaLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFO2FBQ2xCO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQztLQUFBOzs7Ozs7SUFFTyx1QkFBdUIsQ0FBQyxNQUFXOztjQUNuQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM1QyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLENBQWdCO1FBQzNCLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUMvRCxVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkMsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUUsVUFBbUI7UUFDbkMsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDakM7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNoQztRQUNELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsTUFBTTs7Y0FDRSxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSzs7Y0FDdEUsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTztRQUM5QyxPQUFPLE9BQU8sSUFBSSxTQUFTLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBZTtRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFO1lBQ2hDLFFBQVEsRUFBRSxJQUFJO1lBQ2Qsa0JBQWtCLEVBQUUsUUFBUTtZQUM1QixnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELEdBQUcsQ0FBQyxHQUFXLEVBQUUsR0FBUztRQUN4QixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7O0lBRUQsSUFBSSxDQUFDLEdBQVcsRUFBRSxHQUFTO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRTtZQUM1RCxPQUFPO1NBQ1I7O2NBQ0ssU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLG1CQUFBLEVBQUUsRUFBbUIsQ0FBQzs7Y0FDakUsVUFBVSxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsUUFBUTtRQUNsRCxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM5QixPQUFPLDRCQUE0QixDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ3RCLE9BQU8seUNBQXlDLENBQUM7U0FDbEQ7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OztZQXJWRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVEVDtnQkFxQkQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLDJCQUEyQixFQUFDO3dCQUMxRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQywyQkFBMkIsRUFBQzt3QkFDMUQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7eUJBL0JDOzs7Ozs7Ozs7Ozs7Ozs7OztLQWlCQzthQWVKOzs7O1lBeEdDLFdBQVc7OztzQkE2R1YsS0FBSzsyQkFXTCxLQUFLO3dCQUNMLEtBQUs7NkJBQ0wsS0FBSzswQkFDTCxNQUFNO3dCQWlCTixTQUFTLFNBQUMsV0FBVyxFQUFFLG1CQUFBLEVBQUUsRUFBTztxQ0FDaEMsU0FBUyxTQUFDLFdBQVcsRUFBRSxtQkFBQSxFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBRSxFQUFPOzhCQUU5RCxTQUFTLFNBQUMsTUFBTSxFQUFFLG1CQUFBLEVBQUUsRUFBTzs7Ozs7OztJQW5DNUIsK0NBQTZCOztJQVk3QixtREFBK0I7O0lBQy9CLGdEQUEwQjs7SUFDMUIscURBQXFEOztJQUNyRCxrREFBZ0Q7O0lBVWhELDhDQUFlOztJQUNmLGlEQUFrQjs7SUFDbEIsZ0RBQWlCOztJQUNqQix5REFBOEM7O0lBQzlDLHVEQUFxQzs7SUFDckMsd0RBQXdDOztJQUV4QyxnREFBMkU7O0lBQzNFLDZEQUMrQzs7SUFDL0Msc0RBQ2lDOztJQUVqQyxnREFBZ0M7Ozs7O0lBRXBCLDRDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOiB2YXJpYWJsZS1uYW1lXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgTWF0QXV0b2NvbXBsZXRlLFxyXG4gIE1hdEF1dG9jb21wbGV0ZVNlbGVjdGVkRXZlbnQsXHJcbiAgTWF0Q2hpcElucHV0RXZlbnQsXHJcbiAgTWF0U25hY2tCYXIsXHJcbiAgTWF0QXV0b2NvbXBsZXRlVHJpZ2dlclxyXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE5HX1ZBTElEQVRPUlMsIE5HX1ZBTFVFX0FDQ0VTU09SLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEZvcm1CYXNlIH0gZnJvbSAnLi4vZm9ybS1iYXNlLWNsYXNzJztcclxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi9UYWcnO1xyXG5pbXBvcnQgeyBDT01NQSwgRU5URVIgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5cclxuaW1wb3J0IHsgdjEgYXMgdXVpZHYxIH0gZnJvbSAndXVpZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdmb3JtLXRhZy1tdWx0aXBsZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxtYXQtZm9ybS1maWVsZFxyXG4gICAgICBbYXBwZWFyYW5jZV09XCJhcHBlYXJhbmNlXCJcclxuICAgICAgY2xhc3M9XCJ0YWctZnVsbC13aWR0aFwiXHJcbiAgICAgIFtjbGFzcy5mb3JtLXRhZy1jb250cm9sLWludmFsaWRdPVwiaGFzUmVkKClcIlxyXG4gICAgPlxyXG4gICAgICA8bWF0LWNoaXAtbGlzdCAjY2hpcExpc3QgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XHJcbiAgICAgICAgPG1hdC1jaGlwXHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgdGFnIG9mIHNlbGVjdGVkVGFnc1wiXHJcbiAgICAgICAgICBbc2VsZWN0YWJsZV09XCJzZWxlY3RhYmxlXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJ0aGlzLmludGVybmFsQ29udHJvbC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICBbcmVtb3ZhYmxlXT1cInJlbW92YWJsZVwiXHJcbiAgICAgICAgICAocmVtb3ZlZCk9XCJyZW1vdmVUYWdDaGlwKHRhZylcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt7IHRhZy5uYW1lIH19XHJcbiAgICAgICAgICA8bWF0LWljb25cclxuICAgICAgICAgICAgbWF0Q2hpcFJlbW92ZVxyXG4gICAgICAgICAgICAqbmdJZj1cInJlbW92YWJsZSAmJiB0aGlzLmludGVybmFsQ29udHJvbC5lbmFibGVkXCJcclxuICAgICAgICAgICAgPmNhbmNlbDwvbWF0LWljb25cclxuICAgICAgICAgID5cclxuICAgICAgICA8L21hdC1jaGlwPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICN0ZXh0SW5wdXRcclxuICAgICAgICAgIFtuYW1lXT1cImF1dG9Db21wbGV0ZU9ic2N1cmVOYW1lXCJcclxuICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImRvbnRjb21wbGV0ZW1lXCJcclxuICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJpbnB1dFRleHRDb250cm9sXCJcclxuICAgICAgICAgIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b1wiXHJcbiAgICAgICAgICBbbWF0Q2hpcElucHV0Rm9yXT1cImNoaXBMaXN0XCJcclxuICAgICAgICAgIFttYXRDaGlwSW5wdXRTZXBhcmF0b3JLZXlDb2Rlc109XCJzZXBhcmF0b3JLZXlzQ29kZXNcIlxyXG4gICAgICAgICAgW21hdENoaXBJbnB1dEFkZE9uQmx1cl09XCJhZGRPbkJsdXJcIlxyXG4gICAgICAgICAgKG1hdENoaXBJbnB1dFRva2VuRW5kKT1cImFkZEZyb21UZXh0SW5wdXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAoa2V5ZG93bik9XCJmb2N1c09uRW50ZXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAoYmx1cik9XCJvbkJsdXIoKVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWF0LWljb25cclxuICAgICAgICAgIGNsYXNzPVwidGFnLWljb25cIlxyXG4gICAgICAgICAgbWF0VG9vbHRpcD1cIkFkZCB0YWdzIGhlcmUuLi5cIlxyXG4gICAgICAgICAgbWF0QmFkZ2U9XCLiiJ5cIlxyXG4gICAgICAgICAgbWF0U3VmZml4XHJcbiAgICAgICAgICA+bG9jYWxfb2ZmZXI8L21hdC1pY29uXHJcbiAgICAgICAgPlxyXG4gICAgICA8L21hdC1jaGlwLWxpc3Q+XHJcbiAgICAgIDxtYXQtYXV0b2NvbXBsZXRlXHJcbiAgICAgICAgI2F1dG89XCJtYXRBdXRvY29tcGxldGVcIlxyXG4gICAgICAgIChvcHRpb25TZWxlY3RlZCk9XCJvcHRpb25TZWxlY3RlZEZyb21MaXN0KCRldmVudClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPG1hdC1vcHRpb25cclxuICAgICAgICAgICpuZ0Zvcj1cImxldCBjaG9pY2VOYW1lIG9mIGZpbHRlcmVkVGFnTmFtZXMkIHwgYXN5bmNcIlxyXG4gICAgICAgICAgW3ZhbHVlXT1cImNob2ljZU5hbWVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt7IGNob2ljZU5hbWUgfX1cclxuICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgIDwvbWF0LWF1dG9jb21wbGV0ZT5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLnRhZy1mdWxsLXdpZHRoIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAudGFnLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50YWctaWNvbiAubWF0LWJhZGdlLWNvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhZmM1YjAwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHJpZ2h0OiAxcHggIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5mb3JtLXRhZy1jb250cm9sLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgICAgICBjb2xvcjogI2ZmNGY0ZiAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybVRhZ011bHRpcGxlQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExpYkZvcm1UYWdNdWx0aXBsZUNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGliRm9ybVRhZ011bHRpcGxlQ29tcG9uZW50IGV4dGVuZHMgRm9ybUJhc2U8VGFnW10+XHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgLy8gRVhURVJOQUwgQVBJXHJcbiAgcHJpdmF0ZSBfY2hvaWNlczogVGFnW10gPSBbXTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBjaG9pY2VzKG5ld0Nob2ljZXMpIHtcclxuICAgIGlmICghbmV3Q2hvaWNlcykge1xyXG4gICAgICBuZXdDaG9pY2VzID0gW107XHJcbiAgICB9XHJcbiAgICB0aGlzLl9jaG9pY2VzID0gbmV3Q2hvaWNlcztcclxuICAgIHRoaXMuaW5wdXRUZXh0Q29udHJvbC5wYXRjaFZhbHVlKHRoaXMuaW5wdXRUZXh0Q29udHJvbC52YWx1ZSk7XHJcbiAgfVxyXG4gIGdldCBjaG9pY2VzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Nob2ljZXM7XHJcbiAgfVxyXG4gIEBJbnB1dCgpIGN1c3RvbVZhbHVlczogYm9vbGVhbjtcclxuICBASW5wdXQoKSByZW1vdmFibGUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGZpbHRlclN0cmF0ZWd5OiAnYWxsJyB8ICdiZWdpbm5pbmcnID0gJ2FsbCc7XHJcbiAgQE91dHB1dCgpIGFkZGVkTmV3VGFnID0gbmV3IEV2ZW50RW1pdHRlcjxUYWc+KCk7XHJcblxyXG4gIC8vIElOVEVSTkFMXHJcblxyXG4gIGdldCBzZWxlY3RlZFRhZ3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICB9XHJcbiAgZ2V0IGNob2ljZXNTdHJpbmdzKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLmNob2ljZXMubWFwKHQgPT4gKCEhdCA/IHQubmFtZSA6ICcnKSk7XHJcbiAgfVxyXG4gIHZpc2libGUgPSB0cnVlO1xyXG4gIHNlbGVjdGFibGUgPSB0cnVlO1xyXG4gIGFkZE9uQmx1ciA9IHRydWU7XHJcbiAgc2VwYXJhdG9yS2V5c0NvZGVzOiBudW1iZXJbXSA9IFtFTlRFUiwgQ09NTUFdO1xyXG4gIGlucHV0VGV4dENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcclxuICBmaWx0ZXJlZFRhZ05hbWVzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3RleHRJbnB1dCcsIHt9IGFzIGFueSkgdGV4dElucHV0OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoJ3RleHRJbnB1dCcsIHsgcmVhZDogTWF0QXV0b2NvbXBsZXRlVHJpZ2dlciB9IGFzIGFueSlcclxuICBtYXRBdXRvY29tcGxldGVUcmlnZ2VyOiBNYXRBdXRvY29tcGxldGVUcmlnZ2VyO1xyXG4gIEBWaWV3Q2hpbGQoJ2F1dG8nLCB7fSBhcyBhbnkpXHJcbiAgbWF0QXV0b2NvbXBsZXRlOiBNYXRBdXRvY29tcGxldGU7XHJcblxyXG4gIGRlc3Ryb3llZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc25hY2s6IE1hdFNuYWNrQmFyKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmZpbHRlcmVkVGFnTmFtZXMkID0gdGhpcy5pbnB1dFRleHRDb250cm9sLnZhbHVlQ2hhbmdlcy5waXBlKFxyXG4gICAgICBzdGFydFdpdGgobnVsbCksXHJcbiAgICAgIG1hcCgodGFnTmFtZTogc3RyaW5nIHwgbnVsbCkgPT5cclxuICAgICAgICB0YWdOYW1lID8gdGhpcy5fZmlsdGVyKHRhZ05hbWUpIDogdGhpcy5nZXRDaG9pY2VzTWludXNTZWxlY3RlZCgpXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuZGVzdHJveWVkLm5leHQoKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUobmV3VmFsOiBUYWdbXSkge1xyXG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbCB8fCBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q2hvaWNlc01pbnVzU2VsZWN0ZWQoKTogc3RyaW5nW10ge1xyXG4gICAgY29uc3QgYWxyZWFkeVNlbGVjdGVkU2V0ID0gbmV3IFNldCh0aGlzLnNlbGVjdGVkVGFncy5tYXAodCA9PiB0Lm5hbWUpKTtcclxuICAgIHJldHVybiB0aGlzLmNob2ljZXNTdHJpbmdzLmZpbHRlcihcclxuICAgICAgY2hvaWNlID0+ICFhbHJlYWR5U2VsZWN0ZWRTZXQuaGFzKGNob2ljZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9maWx0ZXIodmFsdWU6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuICAgIGNvbnN0IGNob2ljZXMgPSB0aGlzLmdldENob2ljZXNNaW51c1NlbGVjdGVkKCk7XHJcbiAgICBpZiAodGhpcy5maWx0ZXJTdHJhdGVneSA9PT0gJ2FsbCcpIHtcclxuICAgICAgcmV0dXJuIF9maWx0ZXJBbGwoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBfZmlsdGVyQmVnaW5uaW5nKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBfZmlsdGVyQWxsKCk6IHN0cmluZ1tdIHtcclxuICAgICAgY29uc3QgZmlsdGVyVmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICByZXR1cm4gY2hvaWNlcy5maWx0ZXIoY2hvaWNlID0+XHJcbiAgICAgICAgKGNob2ljZSArICcnKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlclZhbHVlKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gX2ZpbHRlckJlZ2lubmluZygpOiBzdHJpbmdbXSB7XHJcbiAgICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgcmV0dXJuIGNob2ljZXMuZmlsdGVyKFxyXG4gICAgICAgIGNob2ljZSA9PiAoY2hvaWNlICsgJycpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJWYWx1ZSkgPT09IDBcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQmx1cigpIHtcclxuICAgIHRoaXMuQ2hlY2tWYWx1ZUlzVmFsaWQoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVRhZ0NoaXAodGFnVG9SZW1vdmU6IFRhZykge1xyXG4gICAgdGhpcy5sb2coJ3JlbW92ZVRhZ0NoaXAnLCB7IHRhZ1RvUmVtb3ZlIH0pO1xyXG4gICAgdGhpcy5tYXRBdXRvY29tcGxldGVUcmlnZ2VyLmNsb3NlUGFuZWwoKTtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLmZpbHRlcih0ID0+IHQuaWQgIT09IHRhZ1RvUmVtb3ZlLmlkKTtcclxuICAgIHRoaXMuaW5wdXRUZXh0Q29udHJvbC5zZXRWYWx1ZShudWxsKTtcclxuICAgIHRoaXMuaW5wdXRUZXh0Q29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBhZGRGcm9tVGV4dElucHV0KGV2ZW50OiBNYXRDaGlwSW5wdXRFdmVudCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGlucHV0VHJpbW1lZCA9ICh2YWx1ZSB8fCAnJykudHJpbSgpO1xyXG4gICAgaWYgKCFpbnB1dFRyaW1tZWQpIHtcclxuICAgICAgdGhpcy5yZXNldFRleHRJbnB1dCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmxvZygnYWRkRnJvbVRleHRJbnB1dCcsIHsgdmFsdWU6IGV2ZW50LnZhbHVlIH0pO1xyXG4gICAgLy8gQWRkIGZydWl0IG9ubHkgd2hlbiBNYXRBdXRvY29tcGxldGUgaXMgbm90IG9wZW5cclxuICAgIC8vIFRvIG1ha2Ugc3VyZSB0aGlzIGRvZXMgbm90IGNvbmZsaWN0IHdpdGggT3B0aW9uU2VsZWN0ZWQgRXZlbnRcclxuICAgIGNvbnN0IGZvdW5kID0gdGhpcy5jaG9pY2VzLmZpbmQoYyA9PiBjLm5hbWUgPT09IGlucHV0VHJpbW1lZCk7XHJcbiAgICBpZiAoZm91bmQpIHtcclxuICAgICAgdGhpcy5sb2coJ2FkZEZyb21UZXh0SW5wdXQoKSBmb3VuZCBtYXRjaCwgYWRkaW5nIHRoYXQgaW5zdGVhZCBvZiBtYWtpbmcgbmV3IHRhZycpO1xyXG4gICAgICB0aGlzLmFkZGVkVGFnVG9JbnRlcm5hbFZhbHVlKGZvdW5kKTtcclxuICAgICAgdGhpcy5yZXNldFRleHRJbnB1dCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuY3VzdG9tVmFsdWVzICYmIHRoaXMubWF0QXV0b2NvbXBsZXRlLmlzT3Blbikge1xyXG4gICAgICAvLyB0aGlzLnJlc2V0VGV4dElucHV0KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5jdXN0b21WYWx1ZXMpIHtcclxuICAgICAgdGhpcy5yZXNldFRleHRJbnB1dCgpO1xyXG4gICAgICB0aGlzLnNuYWNrLm9wZW4oJ011c3Qgc2VsZWN0IGl0ZW0gZnJvbSBsaXN0JywgJ0Nsb3NlJywge1xyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAwLFxyXG4gICAgICAgIGhvcml6b250YWxQb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICAgICAgdmVydGljYWxQb3NpdGlvbjogJ2JvdHRvbSdcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubG9nKCdhZGRGcm9tVGV4dElucHV0KCkgdW5hYmxlIHRvIGFkZCBjdXN0b20gdmFsdWVzLi4uJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMucmVzZXRUZXh0SW5wdXQoKTtcclxuICAgIGNvbnN0IG5ld1RhZyA9IGF3YWl0IHRoaXMubWFrZU5ld1RhZyhpbnB1dFRyaW1tZWQpO1xyXG4gICAgdGhpcy5hZGRlZE5ld1RhZy5lbWl0KG5ld1RhZyk7XHJcbiAgICB0aGlzLmNob2ljZXMucHVzaChuZXdUYWcpO1xyXG4gICAgdGhpcy5hZGRlZFRhZ1RvSW50ZXJuYWxWYWx1ZShuZXdUYWcpO1xyXG4gICAgdGhpcy5ub3RpZnkoYEFkZGluZyBcIiR7bmV3VGFnLm5hbWV9XCIgdG8gdGhlIGdsb2JhbCBsaXN0Li4uYCk7XHJcbiAgICB0aGlzLmxvZygnYWRkRnJvbVRleHRJbnB1dCgpIGFkZGVkIG5ldyB0YWcnLCB7IG5ld1RhZyB9KTtcclxuICB9XHJcblxyXG4gIHJlc2V0VGV4dElucHV0KCkge1xyXG4gICAgLy8gUmVzZXQgdGhlIGlucHV0IHZhbHVlXHJcbiAgICB0aGlzLnRleHRJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgICB0aGlzLmlucHV0VGV4dENvbnRyb2wuc2V0VmFsdWUobnVsbCk7XHJcbiAgfVxyXG5cclxuICBvcHRpb25TZWxlY3RlZEZyb21MaXN0KGV2ZW50OiBNYXRBdXRvY29tcGxldGVTZWxlY3RlZEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZygnb3B0aW9uU2VsZWN0ZWRGcm9tTGlzdCgpJywge1xyXG4gICAgICBldmVudCxcclxuICAgICAgdmFsdWU6IGV2ZW50Lm9wdGlvbi52aWV3VmFsdWVcclxuICAgIH0pO1xyXG4gICAgY29uc3QgYXV0b0NvbXBsZXRlVmFsdWUgPSBldmVudC5vcHRpb24udmlld1ZhbHVlO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRUYWcgPSBbLi4uKHRoaXMuY2hvaWNlcyB8fCBbXSldXHJcbiAgICAgIC5maWx0ZXIodGFnID0+IHRhZy5uYW1lID09PSBhdXRvQ29tcGxldGVWYWx1ZSlcclxuICAgICAgLnBvcCgpO1xyXG4gICAgaWYgKCFzZWxlY3RlZFRhZykge1xyXG4gICAgICB0aGlzLndhcm4oXHJcbiAgICAgICAgJ29wdGlvblNlbGVjdGVkRnJvbUxpc3QoKSBub3Qgc3VyZSBob3cgYXV0b2NvbXBsZXRlIHNlbGVjdGVkIHNvbWV0aGluZyBub3QgaW4gdGhlIGxpc3QuLi4nXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuYWRkZWRUYWdUb0ludGVybmFsVmFsdWUoc2VsZWN0ZWRUYWcpO1xyXG4gICAgdGhpcy50ZXh0SW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgdGhpcy50ZXh0SW5wdXQubmF0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgICB0aGlzLmlucHV0VGV4dENvbnRyb2wuc2V0VmFsdWUobnVsbCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBtYWtlTmV3VGFnKG5hbWUpOiBQcm9taXNlPFRhZz4ge1xyXG4gICAgY29uc3QgbmV3VGFnSWQgPSB1dWlkdjEoKTtcclxuICAgIGNvbnN0IG5ld1RhZzogVGFnID0ge1xyXG4gICAgICBpZDogbmV3VGFnSWQsXHJcbiAgICAgIG5hbWU6IG5hbWUudHJpbSgpXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG5ld1RhZztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkZWRUYWdUb0ludGVybmFsVmFsdWUobmV3VGFnOiBUYWcpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IFsuLi4odGhpcy52YWx1ZSB8fCBbXSldO1xyXG4gICAgY3VycmVudFZhbHVlLnB1c2gobmV3VGFnKTtcclxuICAgIHRoaXMudmFsdWUgPSBjdXJyZW50VmFsdWU7XHJcbiAgfVxyXG5cclxuICBmb2N1c09uRW50ZXIoZTogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgdGhpcy5sb2coJ2VudGVyIGtleSBwcmVzc2VkJywgeyBrZXk6IGUua2V5LCBjb2RlOiBlLmtleUNvZGUgfSk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudGV4dElucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoaXNEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmlucHV0VGV4dENvbnRyb2wuZGlzYWJsZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbnB1dFRleHRDb250cm9sLmVuYWJsZSgpO1xyXG4gICAgfVxyXG4gICAgc3VwZXIuc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkKTtcclxuICB9XHJcblxyXG4gIGhhc1JlZCgpIHtcclxuICAgIGNvbnN0IGlzRGlydHkgPSB0aGlzLmlucHV0VGV4dENvbnRyb2wudG91Y2hlZCB8fCB0aGlzLmlucHV0VGV4dENvbnRyb2wuZGlydHk7XHJcbiAgICBjb25zdCBpc0luVmFsaWQgPSB0aGlzLmludGVybmFsQ29udHJvbC5pbnZhbGlkO1xyXG4gICAgcmV0dXJuIGlzRGlydHkgJiYgaXNJblZhbGlkO1xyXG4gIH1cclxuXHJcbiAgbm90aWZ5KG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgdGhpcy5zbmFjay5vcGVuKG1lc3NhZ2UsICdDbG9zZScsIHtcclxuICAgICAgZHVyYXRpb246IDMwMDAsXHJcbiAgICAgIGhvcml6b250YWxQb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICAgIHZlcnRpY2FsUG9zaXRpb246ICdib3R0b20nXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvZyhtc2c6IHN0cmluZywgb2JqPzogYW55KSB7XHJcbiAgICBpZiAoIW9iaikge1xyXG4gICAgICByZXR1cm4gY29uc29sZS5sb2coJ2Zvcm0tdGFnLW11bHRpcGxlOiAnLCBtc2cpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ2Zvcm0tdGFnLW11bHRpcGxlOiAnLCBtc2csIG9iaik7XHJcbiAgfVxyXG5cclxuICB3YXJuKG1zZzogc3RyaW5nLCBvYmo/OiBhbnkpIHtcclxuICAgIGlmICghb2JqKSB7XHJcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZygnZm9ybS10YWctbXVsdGlwbGU6ICcsIG1zZyk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLndhcm4oJ2Zvcm0tdGFnLW11bHRpcGxlOiAnLCBtc2csIG9iaik7XHJcbiAgfVxyXG5cclxuICBDaGVja1ZhbHVlSXNWYWxpZCgpIHtcclxuICAgIGlmICghdGhpcy5pbnRlcm5hbENvbnRyb2wgfHwgIXRoaXMuaW50ZXJuYWxDb250cm9sLnZhbGlkYXRvcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLmludGVybmFsQ29udHJvbC52YWxpZGF0b3Ioe30gYXMgQWJzdHJhY3RDb250cm9sKTtcclxuICAgIGNvbnN0IGlzUmVxdWlyZWQgPSB2YWxpZGF0b3IgJiYgdmFsaWRhdG9yLnJlcXVpcmVkO1xyXG4gICAgaWYgKCFpc1JlcXVpcmVkKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiAnZm9ybSB2YWx1ZSBpcyBub3QgYW4gYXJyYXknO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLnZhbHVlLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gJ2Zvcm0gdmFsdWUgaXMgcmVxdWlyZWQgYnV0IGhhcyBubyB2YWx1ZSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIl19