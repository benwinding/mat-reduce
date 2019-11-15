/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable: variable-name
import { Component, EventEmitter, forwardRef, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { MatAutocomplete, MatSnackBar, MatAutocompleteTrigger } from '@angular/material';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ConfirmationService } from '../../dialogs/app-confirmation.component';
import { FormBase } from '../form-base-class';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { v1 as uuidv1 } from 'uuid';
import { SimpleLog } from '../../utils/logger';
export class LibFormTagSingleComponent extends FormBase {
    /**
     * @param {?} confirm
     * @param {?} snack
     */
    constructor(confirm, snack) {
        super();
        this.confirm = confirm;
        this.snack = snack;
        this.filterStrategy = 'all';
        this.removable = true;
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
    get selectedTag() {
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
        this.checkExists(this.choices, 'this.selectChoices$');
        this.logger = new SimpleLog(this.debug);
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
        this.value = newVal;
    }
    /**
     * @private
     * @return {?}
     */
    getChoicesMinusSelected() {
        /** @type {?} */
        const selectedTagName = this.selectedTag ? this.selectedTag.name : '';
        /** @type {?} */
        const alreadySelectedSet = new Set([selectedTagName]);
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
     * @param {?} val
     * @param {?} name
     * @return {?}
     */
    checkExists(val, name) {
        if (val == null) {
            throw new Error(name + ' has not been defined');
        }
    }
    /**
     * @param {?} tagToRemove
     * @return {?}
     */
    removeTagChip(tagToRemove) {
        this.logger.log('removeTagChip', { tagToRemove });
        this.matAutocompleteTrigger.closePanel();
        this.value = null;
        this.inputTextControl.setValue(null);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    addFromTextInput(event) {
        return tslib_1.__awaiter(this, void 0, void 0, /** @this {!LibFormTagSingleComponent} */ function* () {
            /** @type {?} */
            const value = event.value;
            /** @type {?} */
            const inputTrimmed = (value || '').trim();
            if (!inputTrimmed) {
                this.resetTextInput();
                return;
            }
            this.logger.log('addFromTextInput', { value: event.value });
            // Add fruit only when MatAutocomplete is not open
            // To make sure this does not conflict with OptionSelected Event
            /** @type {?} */
            const found = this.choices.find((/**
             * @param {?} c
             * @return {?}
             */
            c => c.name === inputTrimmed));
            if (found) {
                this.logger.log('addFromTextInput() found match, adding that instead of making new tag');
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
                this.logger.log('addFromTextInput() unable to add custom values...');
                return;
            }
            this.resetTextInput();
            /** @type {?} */
            const confirmed = yield this.confirm.AskConfirm(`Are you sure you want to add: "${inputTrimmed}" to the global list?`);
            if (!confirmed) {
                this.logger.log('addFromTextInput() not confirmed, nothing changed...');
                this.notify('Nothing added globally');
                return;
            }
            /** @type {?} */
            const newTag = yield this.makeNewTag(inputTrimmed);
            this.addedNewTag.emit(newTag);
            this.choices.push(newTag);
            this.addedTagToInternalValue(newTag);
            this.notify(`Adding "${newTag.name}" to the global list...`);
            this.logger.log('addFromTextInput() added new tag', { newTag, confirmed });
        });
    }
    /**
     * @return {?}
     */
    resetTextInput() {
        // Reset the input value
        this.textInput.nativeElement.value = '';
        this.inputTextControl.setValue('');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    optionSelectedFromList(event) {
        this.logger.log('optionSelectedFromList()', {
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
            this.logger.warn('optionSelectedFromList() not sure how autocomplete selected something not in the list...');
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
        return tslib_1.__awaiter(this, void 0, void 0, /** @this {!LibFormTagSingleComponent} */ function* () {
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
        this.value = newTag;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    focusOnEnter(e) {
        if (e.keyCode === 13) {
            this.logger.log('enter key pressed', { key: e.key, code: e.keyCode });
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
}
LibFormTagSingleComponent.decorators = [
    { type: Component, args: [{
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
          autocomplete="dontcompleteme"
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
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTagSingleComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTagSingleComponent)),
                        multi: true
                    }
                ],
                styles: [`
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
    `]
            }] }
];
/** @nocollapse */
LibFormTagSingleComponent.ctorParameters = () => [
    { type: ConfirmationService },
    { type: MatSnackBar }
];
LibFormTagSingleComponent.propDecorators = {
    choices: [{ type: Input }],
    customValues: [{ type: Input }],
    filterStrategy: [{ type: Input }],
    removable: [{ type: Input }],
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
    LibFormTagSingleComponent.prototype._choices;
    /** @type {?} */
    LibFormTagSingleComponent.prototype.customValues;
    /** @type {?} */
    LibFormTagSingleComponent.prototype.filterStrategy;
    /** @type {?} */
    LibFormTagSingleComponent.prototype.removable;
    /** @type {?} */
    LibFormTagSingleComponent.prototype.addedNewTag;
    /** @type {?} */
    LibFormTagSingleComponent.prototype.visible;
    /** @type {?} */
    LibFormTagSingleComponent.prototype.selectable;
    /** @type {?} */
    LibFormTagSingleComponent.prototype.addOnBlur;
    /** @type {?} */
    LibFormTagSingleComponent.prototype.separatorKeysCodes;
    /** @type {?} */
    LibFormTagSingleComponent.prototype.inputTextControl;
    /** @type {?} */
    LibFormTagSingleComponent.prototype.filteredTagNames$;
    /** @type {?} */
    LibFormTagSingleComponent.prototype.textInput;
    /** @type {?} */
    LibFormTagSingleComponent.prototype.matAutocompleteTrigger;
    /** @type {?} */
    LibFormTagSingleComponent.prototype.matAutocomplete;
    /** @type {?} */
    LibFormTagSingleComponent.prototype.destroyed;
    /** @type {?} */
    LibFormTagSingleComponent.prototype.logger;
    /**
     * @type {?}
     * @private
     */
    LibFormTagSingleComponent.prototype.confirm;
    /**
     * @type {?}
     * @private
     */
    LibFormTagSingleComponent.prototype.snack;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS10YWctc2luZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC1yZWR1Y2UvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvbWF0ZXJpYWwvZm9ybS10YWctc2luZ2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxlQUFlLEVBR2YsV0FBVyxFQUNYLHNCQUFzQixFQUN2QixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0UsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXJELE9BQU8sRUFBRSxFQUFFLElBQUksTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQXNGL0MsTUFBTSxPQUFPLHlCQUEwQixTQUFRLFFBQWE7Ozs7O0lBNEMxRCxZQUNVLE9BQTRCLEVBQzVCLEtBQWtCO1FBRTFCLEtBQUssRUFBRSxDQUFDO1FBSEEsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQTlCbkIsbUJBQWMsR0FBd0IsS0FB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QUFTLFNBQUMsV0FBVyxFQUFFLG1CQUFBLEVBQUUsRUFBTztxQ0FDaEMsU0FBUyxTQUFDLFdBQVcsRUFBRSxtQkFBQSxFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBRSxFQUFPOzhCQUU5RCxTQUFTLFNBQUMsTUFBTSxFQUFFLG1CQUFBLEVBQUUsRUFBTzs7Ozs7OztJQW5DNUIsNkNBQXdCOztJQVl4QixpREFBK0I7O0lBQy9CLG1EQUFxRDs7SUFDckQsOENBQTBCOztJQUMxQixnREFBZ0Q7O0lBVWhELDRDQUFlOztJQUNmLCtDQUFrQjs7SUFDbEIsOENBQWlCOztJQUNqQix1REFBOEM7O0lBQzlDLHFEQUFxQzs7SUFDckMsc0RBQXdDOztJQUV4Qyw4Q0FBMkU7O0lBQzNFLDJEQUMrQzs7SUFDL0Msb0RBQ2lDOztJQUVqQyw4Q0FBZ0M7O0lBQ2hDLDJDQUFrQjs7Ozs7SUFHaEIsNENBQW9DOzs7OztJQUNwQywwQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTogdmFyaWFibGUtbmFtZVxyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgRWxlbWVudFJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIE1hdEF1dG9jb21wbGV0ZSxcclxuICBNYXRBdXRvY29tcGxldGVTZWxlY3RlZEV2ZW50LFxyXG4gIE1hdENoaXBJbnB1dEV2ZW50LFxyXG4gIE1hdFNuYWNrQmFyLFxyXG4gIE1hdEF1dG9jb21wbGV0ZVRyaWdnZXJcclxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZGlhbG9ncy9hcHAtY29uZmlybWF0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1CYXNlIH0gZnJvbSAnLi4vZm9ybS1iYXNlLWNsYXNzJztcclxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi9UYWcnO1xyXG5pbXBvcnQgeyBDT01NQSwgRU5URVIgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5cclxuaW1wb3J0IHsgdjEgYXMgdXVpZHYxIH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7IFNpbXBsZUxvZyB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdmb3JtLXRhZy1zaW5nbGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bWF0LWZvcm0tZmllbGQgW2FwcGVhcmFuY2VdPVwiYXBwZWFyYW5jZVwiIGNsYXNzPVwiZnVsbC13aWR0aFwiPlxyXG4gICAgICA8bWF0LWNoaXAtbGlzdCAjY2hpcExpc3QgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XHJcbiAgICAgICAgPG1hdC1jaGlwXHJcbiAgICAgICAgICAqbmdJZj1cInNlbGVjdGVkVGFnIGFzIHRhZ1wiXHJcbiAgICAgICAgICBbc2VsZWN0YWJsZV09XCJzZWxlY3RhYmxlXCJcclxuICAgICAgICAgIFtyZW1vdmFibGVdPVwicmVtb3ZhYmxlXCJcclxuICAgICAgICAgIChyZW1vdmVkKT1cInJlbW92ZVRhZ0NoaXAodGFnKVwiXHJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt7IHRhZy5uYW1lIH19XHJcbiAgICAgICAgICA8bWF0LWljb24gbWF0Q2hpcFJlbW92ZSAqbmdJZj1cInJlbW92YWJsZSAmJiAhZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICA+Y2FuY2VsPC9tYXQtaWNvblxyXG4gICAgICAgICAgPlxyXG4gICAgICAgIDwvbWF0LWNoaXA+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgI3RleHRJbnB1dFxyXG4gICAgICAgICAgW25hbWVdPVwiYXV0b0NvbXBsZXRlT2JzY3VyZU5hbWVcIlxyXG4gICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZG9udGNvbXBsZXRlbWVcIlxyXG4gICAgICAgICAgW2Zvcm1Db250cm9sXT1cImlucHV0VGV4dENvbnRyb2xcIlxyXG4gICAgICAgICAgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvXCJcclxuICAgICAgICAgIFttYXRDaGlwSW5wdXRGb3JdPVwiY2hpcExpc3RcIlxyXG4gICAgICAgICAgW21hdENoaXBJbnB1dFNlcGFyYXRvcktleUNvZGVzXT1cInNlcGFyYXRvcktleXNDb2Rlc1wiXHJcbiAgICAgICAgICBbbWF0Q2hpcElucHV0QWRkT25CbHVyXT1cImFkZE9uQmx1clwiXHJcbiAgICAgICAgICAobWF0Q2hpcElucHV0VG9rZW5FbmQpPVwiYWRkRnJvbVRleHRJbnB1dCgkZXZlbnQpXCJcclxuICAgICAgICAgIChrZXlkb3duKT1cImZvY3VzT25FbnRlcigkZXZlbnQpXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtYXQtaWNvblxyXG4gICAgICAgICAgY2xhc3M9XCJpcy1ncmV5IHIxNVwiXHJcbiAgICAgICAgICBtYXRUb29sdGlwPVwiQWRkIGEgc2luZ2xlIHRhZyBoZXJlLCB5b3UgY2FuIG1hbmFnZSBhbGwgeW91ciB0YWdzIHVzaW5nIHRoZSB0YWcgbGlzdCBlZGl0b3IgaW4gdGhlIHNldHRpbmdzIG1lbnVcIlxyXG4gICAgICAgICAgbWF0QmFkZ2U9XCIxXCJcclxuICAgICAgICAgIG1hdFN1ZmZpeFxyXG4gICAgICAgICAgPmxvY2FsX29mZmVyPC9tYXQtaWNvblxyXG4gICAgICAgID5cclxuICAgICAgPC9tYXQtY2hpcC1saXN0PlxyXG4gICAgICA8bWF0LWF1dG9jb21wbGV0ZVxyXG4gICAgICAgICNhdXRvPVwibWF0QXV0b2NvbXBsZXRlXCJcclxuICAgICAgICAob3B0aW9uU2VsZWN0ZWQpPVwib3B0aW9uU2VsZWN0ZWRGcm9tTGlzdCgkZXZlbnQpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uXHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgY2hvaWNlTmFtZSBvZiBmaWx0ZXJlZFRhZ05hbWVzJCB8IGFzeW5jXCJcclxuICAgICAgICAgIFt2YWx1ZV09XCJjaG9pY2VOYW1lXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7eyBjaG9pY2VOYW1lIH19XHJcbiAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICA8L21hdC1hdXRvY29tcGxldGU+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5mdWxsLXdpZHRoIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAuaXMtZ3JleSB7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgIH1cclxuICAgICAgLnIxNSB7XHJcbiAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgICAgbWF0LWljb24gc3BhbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FmYzViMDAwO1xyXG4gICAgICAgIHJpZ2h0OiAxcHggIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMaWJGb3JtVGFnU2luZ2xlQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExpYkZvcm1UYWdTaW5nbGVDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpYkZvcm1UYWdTaW5nbGVDb21wb25lbnQgZXh0ZW5kcyBGb3JtQmFzZTxUYWc+XHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgLy8gRVhURVJOQUwgQVBJXHJcbiAgcHJpdmF0ZSBfY2hvaWNlczogVGFnW107XHJcbiAgQElucHV0KClcclxuICBzZXQgY2hvaWNlcyhuZXdDaG9pY2VzKSB7XHJcbiAgICBpZiAoIW5ld0Nob2ljZXMpIHtcclxuICAgICAgbmV3Q2hvaWNlcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fY2hvaWNlcyA9IG5ld0Nob2ljZXM7XHJcbiAgICB0aGlzLmlucHV0VGV4dENvbnRyb2wucGF0Y2hWYWx1ZSh0aGlzLmlucHV0VGV4dENvbnRyb2wudmFsdWUpO1xyXG4gIH1cclxuICBnZXQgY2hvaWNlcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9jaG9pY2VzO1xyXG4gIH1cclxuICBASW5wdXQoKSBjdXN0b21WYWx1ZXM6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZmlsdGVyU3RyYXRlZ3k6ICdhbGwnIHwgJ2JlZ2lubmluZycgPSAnYWxsJztcclxuICBASW5wdXQoKSByZW1vdmFibGUgPSB0cnVlO1xyXG4gIEBPdXRwdXQoKSBhZGRlZE5ld1RhZyA9IG5ldyBFdmVudEVtaXR0ZXI8VGFnPigpO1xyXG5cclxuICAvLyBJTlRFUk5BTFxyXG5cclxuICBnZXQgc2VsZWN0ZWRUYWcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICB9XHJcbiAgZ2V0IGNob2ljZXNTdHJpbmdzKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLmNob2ljZXMubWFwKHQgPT4gKCEhdCA/IHQubmFtZSA6ICcnKSk7XHJcbiAgfVxyXG4gIHZpc2libGUgPSB0cnVlO1xyXG4gIHNlbGVjdGFibGUgPSB0cnVlO1xyXG4gIGFkZE9uQmx1ciA9IHRydWU7XHJcbiAgc2VwYXJhdG9yS2V5c0NvZGVzOiBudW1iZXJbXSA9IFtFTlRFUiwgQ09NTUFdO1xyXG4gIGlucHV0VGV4dENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcclxuICBmaWx0ZXJlZFRhZ05hbWVzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3RleHRJbnB1dCcsIHt9IGFzIGFueSkgdGV4dElucHV0OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoJ3RleHRJbnB1dCcsIHsgcmVhZDogTWF0QXV0b2NvbXBsZXRlVHJpZ2dlciB9IGFzIGFueSlcclxuICBtYXRBdXRvY29tcGxldGVUcmlnZ2VyOiBNYXRBdXRvY29tcGxldGVUcmlnZ2VyO1xyXG4gIEBWaWV3Q2hpbGQoJ2F1dG8nLCB7fSBhcyBhbnkpXHJcbiAgbWF0QXV0b2NvbXBsZXRlOiBNYXRBdXRvY29tcGxldGU7XHJcblxyXG4gIGRlc3Ryb3llZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgbG9nZ2VyOiBTaW1wbGVMb2c7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjb25maXJtOiBDb25maXJtYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzbmFjazogTWF0U25hY2tCYXJcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuY2hlY2tFeGlzdHModGhpcy5jaG9pY2VzLCAndGhpcy5zZWxlY3RDaG9pY2VzJCcpO1xyXG4gICAgdGhpcy5sb2dnZXIgPSBuZXcgU2ltcGxlTG9nKHRoaXMuZGVidWcpO1xyXG5cclxuICAgIHRoaXMuZmlsdGVyZWRUYWdOYW1lcyQgPSB0aGlzLmlucHV0VGV4dENvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoXHJcbiAgICAgIHN0YXJ0V2l0aChudWxsKSxcclxuICAgICAgbWFwKCh0YWdOYW1lOiBzdHJpbmcgfCBudWxsKSA9PlxyXG4gICAgICAgIHRhZ05hbWUgPyB0aGlzLl9maWx0ZXIodGFnTmFtZSkgOiB0aGlzLmdldENob2ljZXNNaW51c1NlbGVjdGVkKClcclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5kZXN0cm95ZWQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZShuZXdWYWw6IFRhZykge1xyXG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q2hvaWNlc01pbnVzU2VsZWN0ZWQoKTogc3RyaW5nW10ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRUYWdOYW1lID0gdGhpcy5zZWxlY3RlZFRhZyA/IHRoaXMuc2VsZWN0ZWRUYWcubmFtZSA6ICcnO1xyXG4gICAgY29uc3QgYWxyZWFkeVNlbGVjdGVkU2V0ID0gbmV3IFNldChbc2VsZWN0ZWRUYWdOYW1lXSk7XHJcbiAgICByZXR1cm4gdGhpcy5jaG9pY2VzU3RyaW5ncy5maWx0ZXIoXHJcbiAgICAgIGNob2ljZSA9PiAhYWxyZWFkeVNlbGVjdGVkU2V0LmhhcyhjaG9pY2UpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZmlsdGVyKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XHJcbiAgICBjb25zdCBjaG9pY2VzID0gdGhpcy5nZXRDaG9pY2VzTWludXNTZWxlY3RlZCgpO1xyXG4gICAgaWYgKHRoaXMuZmlsdGVyU3RyYXRlZ3kgPT09ICdhbGwnKSB7XHJcbiAgICAgIHJldHVybiBfZmlsdGVyQWxsKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gX2ZpbHRlckJlZ2lubmluZygpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gX2ZpbHRlckFsbCgpOiBzdHJpbmdbXSB7XHJcbiAgICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgcmV0dXJuIGNob2ljZXMuZmlsdGVyKGNob2ljZSA9PlxyXG4gICAgICAgIChjaG9pY2UgKyAnJykudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIF9maWx0ZXJCZWdpbm5pbmcoKTogc3RyaW5nW10ge1xyXG4gICAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHJldHVybiBjaG9pY2VzLmZpbHRlcihcclxuICAgICAgICBjaG9pY2UgPT4gKGNob2ljZSArICcnKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyVmFsdWUpID09PSAwXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0V4aXN0cyh2YWwsIG5hbWUpIHtcclxuICAgIGlmICh2YWwgPT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobmFtZSArICcgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZVRhZ0NoaXAodGFnVG9SZW1vdmU6IFRhZykge1xyXG4gICAgdGhpcy5sb2dnZXIubG9nKCdyZW1vdmVUYWdDaGlwJywgeyB0YWdUb1JlbW92ZSB9KTtcclxuICAgIHRoaXMubWF0QXV0b2NvbXBsZXRlVHJpZ2dlci5jbG9zZVBhbmVsKCk7XHJcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgIHRoaXMuaW5wdXRUZXh0Q29udHJvbC5zZXRWYWx1ZShudWxsKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGFkZEZyb21UZXh0SW5wdXQoZXZlbnQ6IE1hdENoaXBJbnB1dEV2ZW50KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnZhbHVlO1xyXG4gICAgY29uc3QgaW5wdXRUcmltbWVkID0gKHZhbHVlIHx8ICcnKS50cmltKCk7XHJcbiAgICBpZiAoIWlucHV0VHJpbW1lZCkge1xyXG4gICAgICB0aGlzLnJlc2V0VGV4dElucHV0KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMubG9nZ2VyLmxvZygnYWRkRnJvbVRleHRJbnB1dCcsIHsgdmFsdWU6IGV2ZW50LnZhbHVlIH0pO1xyXG4gICAgLy8gQWRkIGZydWl0IG9ubHkgd2hlbiBNYXRBdXRvY29tcGxldGUgaXMgbm90IG9wZW5cclxuICAgIC8vIFRvIG1ha2Ugc3VyZSB0aGlzIGRvZXMgbm90IGNvbmZsaWN0IHdpdGggT3B0aW9uU2VsZWN0ZWQgRXZlbnRcclxuICAgIGNvbnN0IGZvdW5kID0gdGhpcy5jaG9pY2VzLmZpbmQoYyA9PiBjLm5hbWUgPT09IGlucHV0VHJpbW1lZCk7XHJcbiAgICBpZiAoZm91bmQpIHtcclxuICAgICAgdGhpcy5sb2dnZXIubG9nKCdhZGRGcm9tVGV4dElucHV0KCkgZm91bmQgbWF0Y2gsIGFkZGluZyB0aGF0IGluc3RlYWQgb2YgbWFraW5nIG5ldyB0YWcnKTtcclxuICAgICAgdGhpcy5hZGRlZFRhZ1RvSW50ZXJuYWxWYWx1ZShmb3VuZCk7XHJcbiAgICAgIHRoaXMucmVzZXRUZXh0SW5wdXQoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLmN1c3RvbVZhbHVlcyAmJiB0aGlzLm1hdEF1dG9jb21wbGV0ZS5pc09wZW4pIHtcclxuICAgICAgLy8gdGhpcy5yZXNldFRleHRJbnB1dCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuY3VzdG9tVmFsdWVzKSB7XHJcbiAgICAgIHRoaXMucmVzZXRUZXh0SW5wdXQoKTtcclxuICAgICAgdGhpcy5zbmFjay5vcGVuKCdNdXN0IHNlbGVjdCBpdGVtIGZyb20gbGlzdCcsICdDbG9zZScsIHtcclxuICAgICAgICBkdXJhdGlvbjogMzAwMCxcclxuICAgICAgICBob3Jpem9udGFsUG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICAgIHZlcnRpY2FsUG9zaXRpb246ICdib3R0b20nXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmxvZ2dlci5sb2coJ2FkZEZyb21UZXh0SW5wdXQoKSB1bmFibGUgdG8gYWRkIGN1c3RvbSB2YWx1ZXMuLi4nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZXNldFRleHRJbnB1dCgpO1xyXG4gICAgY29uc3QgY29uZmlybWVkID0gYXdhaXQgdGhpcy5jb25maXJtLkFza0NvbmZpcm0oXHJcbiAgICAgIGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gYWRkOiBcIiR7aW5wdXRUcmltbWVkfVwiIHRvIHRoZSBnbG9iYWwgbGlzdD9gXHJcbiAgICApO1xyXG4gICAgaWYgKCFjb25maXJtZWQpIHtcclxuICAgICAgdGhpcy5sb2dnZXIubG9nKCdhZGRGcm9tVGV4dElucHV0KCkgbm90IGNvbmZpcm1lZCwgbm90aGluZyBjaGFuZ2VkLi4uJyk7XHJcbiAgICAgIHRoaXMubm90aWZ5KCdOb3RoaW5nIGFkZGVkIGdsb2JhbGx5Jyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld1RhZyA9IGF3YWl0IHRoaXMubWFrZU5ld1RhZyhpbnB1dFRyaW1tZWQpO1xyXG4gICAgdGhpcy5hZGRlZE5ld1RhZy5lbWl0KG5ld1RhZyk7XHJcbiAgICB0aGlzLmNob2ljZXMucHVzaChuZXdUYWcpO1xyXG4gICAgdGhpcy5hZGRlZFRhZ1RvSW50ZXJuYWxWYWx1ZShuZXdUYWcpO1xyXG4gICAgdGhpcy5ub3RpZnkoYEFkZGluZyBcIiR7bmV3VGFnLm5hbWV9XCIgdG8gdGhlIGdsb2JhbCBsaXN0Li4uYCk7XHJcbiAgICB0aGlzLmxvZ2dlci5sb2coJ2FkZEZyb21UZXh0SW5wdXQoKSBhZGRlZCBuZXcgdGFnJywgeyBuZXdUYWcsIGNvbmZpcm1lZCB9KTtcclxuICB9XHJcblxyXG4gIHJlc2V0VGV4dElucHV0KCkge1xyXG4gICAgLy8gUmVzZXQgdGhlIGlucHV0IHZhbHVlXHJcbiAgICB0aGlzLnRleHRJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgICB0aGlzLmlucHV0VGV4dENvbnRyb2wuc2V0VmFsdWUoJycpO1xyXG4gIH1cclxuXHJcbiAgb3B0aW9uU2VsZWN0ZWRGcm9tTGlzdChldmVudDogTWF0QXV0b2NvbXBsZXRlU2VsZWN0ZWRFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2dnZXIubG9nKCdvcHRpb25TZWxlY3RlZEZyb21MaXN0KCknLCB7XHJcbiAgICAgIGV2ZW50LFxyXG4gICAgICB2YWx1ZTogZXZlbnQub3B0aW9uLnZpZXdWYWx1ZVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBhdXRvQ29tcGxldGVWYWx1ZSA9IGV2ZW50Lm9wdGlvbi52aWV3VmFsdWU7XHJcbiAgICBjb25zdCBzZWxlY3RlZFRhZyA9IFsuLi4odGhpcy5jaG9pY2VzIHx8IFtdKV1cclxuICAgICAgLmZpbHRlcih0YWcgPT4gdGFnLm5hbWUgPT09IGF1dG9Db21wbGV0ZVZhbHVlKVxyXG4gICAgICAucG9wKCk7XHJcbiAgICBpZiAoIXNlbGVjdGVkVGFnKSB7XHJcbiAgICAgIHRoaXMubG9nZ2VyLndhcm4oXHJcbiAgICAgICAgJ29wdGlvblNlbGVjdGVkRnJvbUxpc3QoKSBub3Qgc3VyZSBob3cgYXV0b2NvbXBsZXRlIHNlbGVjdGVkIHNvbWV0aGluZyBub3QgaW4gdGhlIGxpc3QuLi4nXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuYWRkZWRUYWdUb0ludGVybmFsVmFsdWUoc2VsZWN0ZWRUYWcpO1xyXG4gICAgdGhpcy50ZXh0SW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgdGhpcy50ZXh0SW5wdXQubmF0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgICB0aGlzLmlucHV0VGV4dENvbnRyb2wuc2V0VmFsdWUobnVsbCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBtYWtlTmV3VGFnKG5hbWUpOiBQcm9taXNlPFRhZz4ge1xyXG4gICAgY29uc3QgbmV3VGFnSWQgPSB1dWlkdjEoKTtcclxuICAgIGNvbnN0IG5ld1RhZzogVGFnID0ge1xyXG4gICAgICBpZDogbmV3VGFnSWQsXHJcbiAgICAgIG5hbWU6IG5hbWUudHJpbSgpXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG5ld1RhZztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkZWRUYWdUb0ludGVybmFsVmFsdWUobmV3VGFnOiBUYWcpIHtcclxuICAgIHRoaXMudmFsdWUgPSBuZXdUYWc7XHJcbiAgfVxyXG5cclxuICBmb2N1c09uRW50ZXIoZTogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgdGhpcy5sb2dnZXIubG9nKCdlbnRlciBrZXkgcHJlc3NlZCcsIHsga2V5OiBlLmtleSwgY29kZTogZS5rZXlDb2RlIH0pO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnRleHRJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5pbnB1dFRleHRDb250cm9sLmRpc2FibGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5wdXRUZXh0Q29udHJvbC5lbmFibGUoKTtcclxuICAgIH1cclxuICAgIHN1cGVyLnNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZCk7XHJcbiAgfVxyXG5cclxuICBub3RpZnkobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNuYWNrLm9wZW4obWVzc2FnZSwgJ0Nsb3NlJywge1xyXG4gICAgICBkdXJhdGlvbjogMzAwMCxcclxuICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uOiAnY2VudGVyJyxcclxuICAgICAgdmVydGljYWxQb3NpdGlvbjogJ2JvdHRvbSdcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=