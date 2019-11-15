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
var LibFormTagSingleComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LibFormTagSingleComponent, _super);
    function LibFormTagSingleComponent(confirm, snack) {
        var _this = _super.call(this) || this;
        _this.confirm = confirm;
        _this.snack = snack;
        _this.filterStrategy = 'all';
        _this.removable = true;
        _this.addedNewTag = new EventEmitter();
        _this.visible = true;
        _this.selectable = true;
        _this.addOnBlur = true;
        _this.separatorKeysCodes = [ENTER, COMMA];
        _this.inputTextControl = new FormControl();
        _this.destroyed = new Subject();
        return _this;
    }
    Object.defineProperty(LibFormTagSingleComponent.prototype, "choices", {
        get: /**
         * @return {?}
         */
        function () {
            return this._choices;
        },
        set: /**
         * @param {?} newChoices
         * @return {?}
         */
        function (newChoices) {
            if (!newChoices) {
                newChoices = [];
            }
            this._choices = newChoices;
            this.inputTextControl.patchValue(this.inputTextControl.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LibFormTagSingleComponent.prototype, "selectedTag", {
        // INTERNAL
        get: 
        // INTERNAL
        /**
         * @return {?}
         */
        function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LibFormTagSingleComponent.prototype, "choicesStrings", {
        get: /**
         * @return {?}
         */
        function () {
            return this.choices.map((/**
             * @param {?} t
             * @return {?}
             */
            function (t) { return (!!t ? t.name : ''); }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LibFormTagSingleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.checkExists(this.choices, 'this.selectChoices$');
        this.logger = new SimpleLog(this.debug);
        this.filteredTagNames$ = this.inputTextControl.valueChanges.pipe(startWith(null), map((/**
         * @param {?} tagName
         * @return {?}
         */
        function (tagName) {
            return tagName ? _this._filter(tagName) : _this.getChoicesMinusSelected();
        })));
    };
    /**
     * @return {?}
     */
    LibFormTagSingleComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed.next();
    };
    /**
     * @param {?} newVal
     * @return {?}
     */
    LibFormTagSingleComponent.prototype.writeValue = /**
     * @param {?} newVal
     * @return {?}
     */
    function (newVal) {
        this.value = newVal;
    };
    /**
     * @private
     * @return {?}
     */
    LibFormTagSingleComponent.prototype.getChoicesMinusSelected = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selectedTagName = this.selectedTag ? this.selectedTag.name : '';
        /** @type {?} */
        var alreadySelectedSet = new Set([selectedTagName]);
        return this.choicesStrings.filter((/**
         * @param {?} choice
         * @return {?}
         */
        function (choice) { return !alreadySelectedSet.has(choice); }));
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    LibFormTagSingleComponent.prototype._filter = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var choices = this.getChoicesMinusSelected();
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
            var filterValue = value.toLowerCase();
            return choices.filter((/**
             * @param {?} choice
             * @return {?}
             */
            function (choice) {
                return (choice + '').toLowerCase().includes(filterValue);
            }));
        }
        /**
         * @return {?}
         */
        function _filterBeginning() {
            /** @type {?} */
            var filterValue = value.toLowerCase();
            return choices.filter((/**
             * @param {?} choice
             * @return {?}
             */
            function (choice) { return (choice + '').toLowerCase().indexOf(filterValue) === 0; }));
        }
    };
    /**
     * @param {?} val
     * @param {?} name
     * @return {?}
     */
    LibFormTagSingleComponent.prototype.checkExists = /**
     * @param {?} val
     * @param {?} name
     * @return {?}
     */
    function (val, name) {
        if (val == null) {
            throw new Error(name + ' has not been defined');
        }
    };
    /**
     * @param {?} tagToRemove
     * @return {?}
     */
    LibFormTagSingleComponent.prototype.removeTagChip = /**
     * @param {?} tagToRemove
     * @return {?}
     */
    function (tagToRemove) {
        this.logger.log('removeTagChip', { tagToRemove: tagToRemove });
        this.matAutocompleteTrigger.closePanel();
        this.value = null;
        this.inputTextControl.setValue(null);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    LibFormTagSingleComponent.prototype.addFromTextInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var value, inputTrimmed, found, confirmed, newTag;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        value = event.value;
                        inputTrimmed = (value || '').trim();
                        if (!inputTrimmed) {
                            this.resetTextInput();
                            return [2 /*return*/];
                        }
                        this.logger.log('addFromTextInput', { value: event.value });
                        // Add fruit only when MatAutocomplete is not open
                        // To make sure this does not conflict with OptionSelected Event
                        found = this.choices.find((/**
                         * @param {?} c
                         * @return {?}
                         */
                        function (c) { return c.name === inputTrimmed; }));
                        if (found) {
                            this.logger.log('addFromTextInput() found match, adding that instead of making new tag');
                            this.addedTagToInternalValue(found);
                            this.resetTextInput();
                            return [2 /*return*/];
                        }
                        if (!this.customValues && this.matAutocomplete.isOpen) {
                            // this.resetTextInput();
                            return [2 /*return*/];
                        }
                        if (!this.customValues) {
                            this.resetTextInput();
                            this.snack.open('Must select item from list', 'Close', {
                                duration: 3000,
                                horizontalPosition: 'center',
                                verticalPosition: 'bottom'
                            });
                            this.logger.log('addFromTextInput() unable to add custom values...');
                            return [2 /*return*/];
                        }
                        this.resetTextInput();
                        return [4 /*yield*/, this.confirm.AskConfirm("Are you sure you want to add: \"" + inputTrimmed + "\" to the global list?")];
                    case 1:
                        confirmed = _a.sent();
                        if (!confirmed) {
                            this.logger.log('addFromTextInput() not confirmed, nothing changed...');
                            this.notify('Nothing added globally');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.makeNewTag(inputTrimmed)];
                    case 2:
                        newTag = _a.sent();
                        this.addedNewTag.emit(newTag);
                        this.choices.push(newTag);
                        this.addedTagToInternalValue(newTag);
                        this.notify("Adding \"" + newTag.name + "\" to the global list...");
                        this.logger.log('addFromTextInput() added new tag', { newTag: newTag, confirmed: confirmed });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    LibFormTagSingleComponent.prototype.resetTextInput = /**
     * @return {?}
     */
    function () {
        // Reset the input value
        this.textInput.nativeElement.value = '';
        this.inputTextControl.setValue('');
    };
    /**
     * @param {?} event
     * @return {?}
     */
    LibFormTagSingleComponent.prototype.optionSelectedFromList = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.logger.log('optionSelectedFromList()', {
            event: event,
            value: event.option.viewValue
        });
        /** @type {?} */
        var autoCompleteValue = event.option.viewValue;
        /** @type {?} */
        var selectedTag = tslib_1.__spread((this.choices || [])).filter((/**
         * @param {?} tag
         * @return {?}
         */
        function (tag) { return tag.name === autoCompleteValue; }))
            .pop();
        if (!selectedTag) {
            this.logger.warn('optionSelectedFromList() not sure how autocomplete selected something not in the list...');
            return;
        }
        this.addedTagToInternalValue(selectedTag);
        this.textInput.nativeElement.value = '';
        this.textInput.nativeElement.blur();
        this.inputTextControl.setValue(null);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    LibFormTagSingleComponent.prototype.makeNewTag = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var newTagId, newTag;
            return tslib_1.__generator(this, function (_a) {
                newTagId = uuidv1();
                newTag = {
                    id: newTagId,
                    name: name.trim()
                };
                return [2 /*return*/, newTag];
            });
        });
    };
    /**
     * @private
     * @param {?} newTag
     * @return {?}
     */
    LibFormTagSingleComponent.prototype.addedTagToInternalValue = /**
     * @private
     * @param {?} newTag
     * @return {?}
     */
    function (newTag) {
        this.value = newTag;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    LibFormTagSingleComponent.prototype.focusOnEnter = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        if (e.keyCode === 13) {
            this.logger.log('enter key pressed', { key: e.key, code: e.keyCode });
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.textInput.nativeElement.focus();
            }));
        }
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    LibFormTagSingleComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        if (isDisabled) {
            this.inputTextControl.disable();
        }
        else {
            this.inputTextControl.enable();
        }
        _super.prototype.setDisabledState.call(this, isDisabled);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    LibFormTagSingleComponent.prototype.notify = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.snack.open(message, 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
        });
    };
    LibFormTagSingleComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-tag-single',
                    template: "\n    <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n      <mat-chip-list #chipList [disabled]=\"disabled\">\n        <mat-chip\n          *ngIf=\"selectedTag as tag\"\n          [selectable]=\"selectable\"\n          [removable]=\"removable\"\n          (removed)=\"removeTagChip(tag)\"\n          [disabled]=\"disabled\"\n        >\n          {{ tag.name }}\n          <mat-icon matChipRemove *ngIf=\"removable && !disabled\"\n            >cancel</mat-icon\n          >\n        </mat-chip>\n        <input\n          [placeholder]=\"placeholder\"\n          #textInput\n          [name]=\"autoCompleteObscureName\"\n          autocomplete=\"dontcompleteme\"\n          [formControl]=\"inputTextControl\"\n          [matAutocomplete]=\"auto\"\n          [matChipInputFor]=\"chipList\"\n          [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n          [matChipInputAddOnBlur]=\"addOnBlur\"\n          (matChipInputTokenEnd)=\"addFromTextInput($event)\"\n          (keydown)=\"focusOnEnter($event)\"\n        />\n        <mat-icon\n          class=\"is-grey r15\"\n          matTooltip=\"Add a single tag here, you can manage all your tags using the tag list editor in the settings menu\"\n          matBadge=\"1\"\n          matSuffix\n          >local_offer</mat-icon\n        >\n      </mat-chip-list>\n      <mat-autocomplete\n        #auto=\"matAutocomplete\"\n        (optionSelected)=\"optionSelectedFromList($event)\"\n      >\n        <mat-option\n          *ngFor=\"let choiceName of filteredTagNames$ | async\"\n          [value]=\"choiceName\"\n        >\n          {{ choiceName }}\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormTagSingleComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormTagSingleComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .full-width {\n        width: 100%;\n      }\n      .is-grey {\n        color: grey;\n      }\n      .r15 {\n        right: 15px;\n      }\n      mat-icon span {\n        background-color: #afc5b000;\n        right: 1px !important;\n        top: 3px !important;\n        color: white;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    LibFormTagSingleComponent.ctorParameters = function () { return [
        { type: ConfirmationService },
        { type: MatSnackBar }
    ]; };
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
    return LibFormTagSingleComponent;
}(FormBase));
export { LibFormTagSingleComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS10YWctc2luZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC1yZWR1Y2UvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvbWF0ZXJpYWwvZm9ybS10YWctc2luZ2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxlQUFlLEVBR2YsV0FBVyxFQUNYLHNCQUFzQixFQUN2QixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0UsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXJELE9BQU8sRUFBRSxFQUFFLElBQUksTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQztJQW9GK0MscURBQWE7SUE0QzFELG1DQUNVLE9BQTRCLEVBQzVCLEtBQWtCO1FBRjVCLFlBSUUsaUJBQU8sU0FDUjtRQUpTLGFBQU8sR0FBUCxPQUFPLENBQXFCO1FBQzVCLFdBQUssR0FBTCxLQUFLLENBQWE7UUE5Qm5CLG9CQUFjLEdBQXdCLEtBQUssQ0FBQztRQUM1QyxlQUFT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QixFQUFDOzRCQUN4RCxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEseUJBQXlCLEVBQXpCLENBQXlCLEVBQUM7NEJBQ3hELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOzZCQTdCQyxxVEFnQkM7aUJBY0o7Ozs7Z0JBM0ZRLG1CQUFtQjtnQkFOMUIsV0FBVzs7OzBCQXNHVixLQUFLOytCQVdMLEtBQUs7aUNBQ0wsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLE1BQU07NEJBaUJOLFNBQVMsU0FBQyxXQUFXLEVBQUUsbUJBQUEsRUFBRSxFQUFPO3lDQUNoQyxTQUFTLFNBQUMsV0FBVyxFQUFFLG1CQUFBLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFLEVBQU87a0NBRTlELFNBQVMsU0FBQyxNQUFNLEVBQUUsbUJBQUEsRUFBRSxFQUFPOztJQTRMOUIsZ0NBQUM7Q0FBQSxBQXRURCxDQW9GK0MsUUFBUSxHQWtPdEQ7U0FsT1kseUJBQXlCOzs7Ozs7SUFHcEMsNkNBQXdCOztJQVl4QixpREFBK0I7O0lBQy9CLG1EQUFxRDs7SUFDckQsOENBQTBCOztJQUMxQixnREFBZ0Q7O0lBVWhELDRDQUFlOztJQUNmLCtDQUFrQjs7SUFDbEIsOENBQWlCOztJQUNqQix1REFBOEM7O0lBQzlDLHFEQUFxQzs7SUFDckMsc0RBQXdDOztJQUV4Qyw4Q0FBMkU7O0lBQzNFLDJEQUMrQzs7SUFDL0Msb0RBQ2lDOztJQUVqQyw4Q0FBZ0M7O0lBQ2hDLDJDQUFrQjs7Ozs7SUFHaEIsNENBQW9DOzs7OztJQUNwQywwQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTogdmFyaWFibGUtbmFtZVxyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgRWxlbWVudFJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIE1hdEF1dG9jb21wbGV0ZSxcclxuICBNYXRBdXRvY29tcGxldGVTZWxlY3RlZEV2ZW50LFxyXG4gIE1hdENoaXBJbnB1dEV2ZW50LFxyXG4gIE1hdFNuYWNrQmFyLFxyXG4gIE1hdEF1dG9jb21wbGV0ZVRyaWdnZXJcclxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZGlhbG9ncy9hcHAtY29uZmlybWF0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1CYXNlIH0gZnJvbSAnLi4vZm9ybS1iYXNlLWNsYXNzJztcclxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi9UYWcnO1xyXG5pbXBvcnQgeyBDT01NQSwgRU5URVIgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5cclxuaW1wb3J0IHsgdjEgYXMgdXVpZHYxIH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7IFNpbXBsZUxvZyB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdmb3JtLXRhZy1zaW5nbGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bWF0LWZvcm0tZmllbGQgW2FwcGVhcmFuY2VdPVwiYXBwZWFyYW5jZVwiIGNsYXNzPVwiZnVsbC13aWR0aFwiPlxyXG4gICAgICA8bWF0LWNoaXAtbGlzdCAjY2hpcExpc3QgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XHJcbiAgICAgICAgPG1hdC1jaGlwXHJcbiAgICAgICAgICAqbmdJZj1cInNlbGVjdGVkVGFnIGFzIHRhZ1wiXHJcbiAgICAgICAgICBbc2VsZWN0YWJsZV09XCJzZWxlY3RhYmxlXCJcclxuICAgICAgICAgIFtyZW1vdmFibGVdPVwicmVtb3ZhYmxlXCJcclxuICAgICAgICAgIChyZW1vdmVkKT1cInJlbW92ZVRhZ0NoaXAodGFnKVwiXHJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt7IHRhZy5uYW1lIH19XHJcbiAgICAgICAgICA8bWF0LWljb24gbWF0Q2hpcFJlbW92ZSAqbmdJZj1cInJlbW92YWJsZSAmJiAhZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICA+Y2FuY2VsPC9tYXQtaWNvblxyXG4gICAgICAgICAgPlxyXG4gICAgICAgIDwvbWF0LWNoaXA+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgI3RleHRJbnB1dFxyXG4gICAgICAgICAgW25hbWVdPVwiYXV0b0NvbXBsZXRlT2JzY3VyZU5hbWVcIlxyXG4gICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZG9udGNvbXBsZXRlbWVcIlxyXG4gICAgICAgICAgW2Zvcm1Db250cm9sXT1cImlucHV0VGV4dENvbnRyb2xcIlxyXG4gICAgICAgICAgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvXCJcclxuICAgICAgICAgIFttYXRDaGlwSW5wdXRGb3JdPVwiY2hpcExpc3RcIlxyXG4gICAgICAgICAgW21hdENoaXBJbnB1dFNlcGFyYXRvcktleUNvZGVzXT1cInNlcGFyYXRvcktleXNDb2Rlc1wiXHJcbiAgICAgICAgICBbbWF0Q2hpcElucHV0QWRkT25CbHVyXT1cImFkZE9uQmx1clwiXHJcbiAgICAgICAgICAobWF0Q2hpcElucHV0VG9rZW5FbmQpPVwiYWRkRnJvbVRleHRJbnB1dCgkZXZlbnQpXCJcclxuICAgICAgICAgIChrZXlkb3duKT1cImZvY3VzT25FbnRlcigkZXZlbnQpXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtYXQtaWNvblxyXG4gICAgICAgICAgY2xhc3M9XCJpcy1ncmV5IHIxNVwiXHJcbiAgICAgICAgICBtYXRUb29sdGlwPVwiQWRkIGEgc2luZ2xlIHRhZyBoZXJlLCB5b3UgY2FuIG1hbmFnZSBhbGwgeW91ciB0YWdzIHVzaW5nIHRoZSB0YWcgbGlzdCBlZGl0b3IgaW4gdGhlIHNldHRpbmdzIG1lbnVcIlxyXG4gICAgICAgICAgbWF0QmFkZ2U9XCIxXCJcclxuICAgICAgICAgIG1hdFN1ZmZpeFxyXG4gICAgICAgICAgPmxvY2FsX29mZmVyPC9tYXQtaWNvblxyXG4gICAgICAgID5cclxuICAgICAgPC9tYXQtY2hpcC1saXN0PlxyXG4gICAgICA8bWF0LWF1dG9jb21wbGV0ZVxyXG4gICAgICAgICNhdXRvPVwibWF0QXV0b2NvbXBsZXRlXCJcclxuICAgICAgICAob3B0aW9uU2VsZWN0ZWQpPVwib3B0aW9uU2VsZWN0ZWRGcm9tTGlzdCgkZXZlbnQpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uXHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgY2hvaWNlTmFtZSBvZiBmaWx0ZXJlZFRhZ05hbWVzJCB8IGFzeW5jXCJcclxuICAgICAgICAgIFt2YWx1ZV09XCJjaG9pY2VOYW1lXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7eyBjaG9pY2VOYW1lIH19XHJcbiAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICA8L21hdC1hdXRvY29tcGxldGU+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5mdWxsLXdpZHRoIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAuaXMtZ3JleSB7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgIH1cclxuICAgICAgLnIxNSB7XHJcbiAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgICAgbWF0LWljb24gc3BhbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FmYzViMDAwO1xyXG4gICAgICAgIHJpZ2h0OiAxcHggIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMaWJGb3JtVGFnU2luZ2xlQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExpYkZvcm1UYWdTaW5nbGVDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpYkZvcm1UYWdTaW5nbGVDb21wb25lbnQgZXh0ZW5kcyBGb3JtQmFzZTxUYWc+XHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgLy8gRVhURVJOQUwgQVBJXHJcbiAgcHJpdmF0ZSBfY2hvaWNlczogVGFnW107XHJcbiAgQElucHV0KClcclxuICBzZXQgY2hvaWNlcyhuZXdDaG9pY2VzKSB7XHJcbiAgICBpZiAoIW5ld0Nob2ljZXMpIHtcclxuICAgICAgbmV3Q2hvaWNlcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fY2hvaWNlcyA9IG5ld0Nob2ljZXM7XHJcbiAgICB0aGlzLmlucHV0VGV4dENvbnRyb2wucGF0Y2hWYWx1ZSh0aGlzLmlucHV0VGV4dENvbnRyb2wudmFsdWUpO1xyXG4gIH1cclxuICBnZXQgY2hvaWNlcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9jaG9pY2VzO1xyXG4gIH1cclxuICBASW5wdXQoKSBjdXN0b21WYWx1ZXM6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZmlsdGVyU3RyYXRlZ3k6ICdhbGwnIHwgJ2JlZ2lubmluZycgPSAnYWxsJztcclxuICBASW5wdXQoKSByZW1vdmFibGUgPSB0cnVlO1xyXG4gIEBPdXRwdXQoKSBhZGRlZE5ld1RhZyA9IG5ldyBFdmVudEVtaXR0ZXI8VGFnPigpO1xyXG5cclxuICAvLyBJTlRFUk5BTFxyXG5cclxuICBnZXQgc2VsZWN0ZWRUYWcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICB9XHJcbiAgZ2V0IGNob2ljZXNTdHJpbmdzKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLmNob2ljZXMubWFwKHQgPT4gKCEhdCA/IHQubmFtZSA6ICcnKSk7XHJcbiAgfVxyXG4gIHZpc2libGUgPSB0cnVlO1xyXG4gIHNlbGVjdGFibGUgPSB0cnVlO1xyXG4gIGFkZE9uQmx1ciA9IHRydWU7XHJcbiAgc2VwYXJhdG9yS2V5c0NvZGVzOiBudW1iZXJbXSA9IFtFTlRFUiwgQ09NTUFdO1xyXG4gIGlucHV0VGV4dENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcclxuICBmaWx0ZXJlZFRhZ05hbWVzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3RleHRJbnB1dCcsIHt9IGFzIGFueSkgdGV4dElucHV0OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoJ3RleHRJbnB1dCcsIHsgcmVhZDogTWF0QXV0b2NvbXBsZXRlVHJpZ2dlciB9IGFzIGFueSlcclxuICBtYXRBdXRvY29tcGxldGVUcmlnZ2VyOiBNYXRBdXRvY29tcGxldGVUcmlnZ2VyO1xyXG4gIEBWaWV3Q2hpbGQoJ2F1dG8nLCB7fSBhcyBhbnkpXHJcbiAgbWF0QXV0b2NvbXBsZXRlOiBNYXRBdXRvY29tcGxldGU7XHJcblxyXG4gIGRlc3Ryb3llZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgbG9nZ2VyOiBTaW1wbGVMb2c7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjb25maXJtOiBDb25maXJtYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzbmFjazogTWF0U25hY2tCYXJcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuY2hlY2tFeGlzdHModGhpcy5jaG9pY2VzLCAndGhpcy5zZWxlY3RDaG9pY2VzJCcpO1xyXG4gICAgdGhpcy5sb2dnZXIgPSBuZXcgU2ltcGxlTG9nKHRoaXMuZGVidWcpO1xyXG5cclxuICAgIHRoaXMuZmlsdGVyZWRUYWdOYW1lcyQgPSB0aGlzLmlucHV0VGV4dENvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoXHJcbiAgICAgIHN0YXJ0V2l0aChudWxsKSxcclxuICAgICAgbWFwKCh0YWdOYW1lOiBzdHJpbmcgfCBudWxsKSA9PlxyXG4gICAgICAgIHRhZ05hbWUgPyB0aGlzLl9maWx0ZXIodGFnTmFtZSkgOiB0aGlzLmdldENob2ljZXNNaW51c1NlbGVjdGVkKClcclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5kZXN0cm95ZWQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZShuZXdWYWw6IFRhZykge1xyXG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q2hvaWNlc01pbnVzU2VsZWN0ZWQoKTogc3RyaW5nW10ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRUYWdOYW1lID0gdGhpcy5zZWxlY3RlZFRhZyA/IHRoaXMuc2VsZWN0ZWRUYWcubmFtZSA6ICcnO1xyXG4gICAgY29uc3QgYWxyZWFkeVNlbGVjdGVkU2V0ID0gbmV3IFNldChbc2VsZWN0ZWRUYWdOYW1lXSk7XHJcbiAgICByZXR1cm4gdGhpcy5jaG9pY2VzU3RyaW5ncy5maWx0ZXIoXHJcbiAgICAgIGNob2ljZSA9PiAhYWxyZWFkeVNlbGVjdGVkU2V0LmhhcyhjaG9pY2UpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZmlsdGVyKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XHJcbiAgICBjb25zdCBjaG9pY2VzID0gdGhpcy5nZXRDaG9pY2VzTWludXNTZWxlY3RlZCgpO1xyXG4gICAgaWYgKHRoaXMuZmlsdGVyU3RyYXRlZ3kgPT09ICdhbGwnKSB7XHJcbiAgICAgIHJldHVybiBfZmlsdGVyQWxsKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gX2ZpbHRlckJlZ2lubmluZygpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gX2ZpbHRlckFsbCgpOiBzdHJpbmdbXSB7XHJcbiAgICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgcmV0dXJuIGNob2ljZXMuZmlsdGVyKGNob2ljZSA9PlxyXG4gICAgICAgIChjaG9pY2UgKyAnJykudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIF9maWx0ZXJCZWdpbm5pbmcoKTogc3RyaW5nW10ge1xyXG4gICAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHJldHVybiBjaG9pY2VzLmZpbHRlcihcclxuICAgICAgICBjaG9pY2UgPT4gKGNob2ljZSArICcnKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyVmFsdWUpID09PSAwXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0V4aXN0cyh2YWwsIG5hbWUpIHtcclxuICAgIGlmICh2YWwgPT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobmFtZSArICcgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZVRhZ0NoaXAodGFnVG9SZW1vdmU6IFRhZykge1xyXG4gICAgdGhpcy5sb2dnZXIubG9nKCdyZW1vdmVUYWdDaGlwJywgeyB0YWdUb1JlbW92ZSB9KTtcclxuICAgIHRoaXMubWF0QXV0b2NvbXBsZXRlVHJpZ2dlci5jbG9zZVBhbmVsKCk7XHJcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgIHRoaXMuaW5wdXRUZXh0Q29udHJvbC5zZXRWYWx1ZShudWxsKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGFkZEZyb21UZXh0SW5wdXQoZXZlbnQ6IE1hdENoaXBJbnB1dEV2ZW50KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnZhbHVlO1xyXG4gICAgY29uc3QgaW5wdXRUcmltbWVkID0gKHZhbHVlIHx8ICcnKS50cmltKCk7XHJcbiAgICBpZiAoIWlucHV0VHJpbW1lZCkge1xyXG4gICAgICB0aGlzLnJlc2V0VGV4dElucHV0KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMubG9nZ2VyLmxvZygnYWRkRnJvbVRleHRJbnB1dCcsIHsgdmFsdWU6IGV2ZW50LnZhbHVlIH0pO1xyXG4gICAgLy8gQWRkIGZydWl0IG9ubHkgd2hlbiBNYXRBdXRvY29tcGxldGUgaXMgbm90IG9wZW5cclxuICAgIC8vIFRvIG1ha2Ugc3VyZSB0aGlzIGRvZXMgbm90IGNvbmZsaWN0IHdpdGggT3B0aW9uU2VsZWN0ZWQgRXZlbnRcclxuICAgIGNvbnN0IGZvdW5kID0gdGhpcy5jaG9pY2VzLmZpbmQoYyA9PiBjLm5hbWUgPT09IGlucHV0VHJpbW1lZCk7XHJcbiAgICBpZiAoZm91bmQpIHtcclxuICAgICAgdGhpcy5sb2dnZXIubG9nKCdhZGRGcm9tVGV4dElucHV0KCkgZm91bmQgbWF0Y2gsIGFkZGluZyB0aGF0IGluc3RlYWQgb2YgbWFraW5nIG5ldyB0YWcnKTtcclxuICAgICAgdGhpcy5hZGRlZFRhZ1RvSW50ZXJuYWxWYWx1ZShmb3VuZCk7XHJcbiAgICAgIHRoaXMucmVzZXRUZXh0SW5wdXQoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLmN1c3RvbVZhbHVlcyAmJiB0aGlzLm1hdEF1dG9jb21wbGV0ZS5pc09wZW4pIHtcclxuICAgICAgLy8gdGhpcy5yZXNldFRleHRJbnB1dCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuY3VzdG9tVmFsdWVzKSB7XHJcbiAgICAgIHRoaXMucmVzZXRUZXh0SW5wdXQoKTtcclxuICAgICAgdGhpcy5zbmFjay5vcGVuKCdNdXN0IHNlbGVjdCBpdGVtIGZyb20gbGlzdCcsICdDbG9zZScsIHtcclxuICAgICAgICBkdXJhdGlvbjogMzAwMCxcclxuICAgICAgICBob3Jpem9udGFsUG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICAgIHZlcnRpY2FsUG9zaXRpb246ICdib3R0b20nXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmxvZ2dlci5sb2coJ2FkZEZyb21UZXh0SW5wdXQoKSB1bmFibGUgdG8gYWRkIGN1c3RvbSB2YWx1ZXMuLi4nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZXNldFRleHRJbnB1dCgpO1xyXG4gICAgY29uc3QgY29uZmlybWVkID0gYXdhaXQgdGhpcy5jb25maXJtLkFza0NvbmZpcm0oXHJcbiAgICAgIGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gYWRkOiBcIiR7aW5wdXRUcmltbWVkfVwiIHRvIHRoZSBnbG9iYWwgbGlzdD9gXHJcbiAgICApO1xyXG4gICAgaWYgKCFjb25maXJtZWQpIHtcclxuICAgICAgdGhpcy5sb2dnZXIubG9nKCdhZGRGcm9tVGV4dElucHV0KCkgbm90IGNvbmZpcm1lZCwgbm90aGluZyBjaGFuZ2VkLi4uJyk7XHJcbiAgICAgIHRoaXMubm90aWZ5KCdOb3RoaW5nIGFkZGVkIGdsb2JhbGx5Jyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld1RhZyA9IGF3YWl0IHRoaXMubWFrZU5ld1RhZyhpbnB1dFRyaW1tZWQpO1xyXG4gICAgdGhpcy5hZGRlZE5ld1RhZy5lbWl0KG5ld1RhZyk7XHJcbiAgICB0aGlzLmNob2ljZXMucHVzaChuZXdUYWcpO1xyXG4gICAgdGhpcy5hZGRlZFRhZ1RvSW50ZXJuYWxWYWx1ZShuZXdUYWcpO1xyXG4gICAgdGhpcy5ub3RpZnkoYEFkZGluZyBcIiR7bmV3VGFnLm5hbWV9XCIgdG8gdGhlIGdsb2JhbCBsaXN0Li4uYCk7XHJcbiAgICB0aGlzLmxvZ2dlci5sb2coJ2FkZEZyb21UZXh0SW5wdXQoKSBhZGRlZCBuZXcgdGFnJywgeyBuZXdUYWcsIGNvbmZpcm1lZCB9KTtcclxuICB9XHJcblxyXG4gIHJlc2V0VGV4dElucHV0KCkge1xyXG4gICAgLy8gUmVzZXQgdGhlIGlucHV0IHZhbHVlXHJcbiAgICB0aGlzLnRleHRJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgICB0aGlzLmlucHV0VGV4dENvbnRyb2wuc2V0VmFsdWUoJycpO1xyXG4gIH1cclxuXHJcbiAgb3B0aW9uU2VsZWN0ZWRGcm9tTGlzdChldmVudDogTWF0QXV0b2NvbXBsZXRlU2VsZWN0ZWRFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2dnZXIubG9nKCdvcHRpb25TZWxlY3RlZEZyb21MaXN0KCknLCB7XHJcbiAgICAgIGV2ZW50LFxyXG4gICAgICB2YWx1ZTogZXZlbnQub3B0aW9uLnZpZXdWYWx1ZVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBhdXRvQ29tcGxldGVWYWx1ZSA9IGV2ZW50Lm9wdGlvbi52aWV3VmFsdWU7XHJcbiAgICBjb25zdCBzZWxlY3RlZFRhZyA9IFsuLi4odGhpcy5jaG9pY2VzIHx8IFtdKV1cclxuICAgICAgLmZpbHRlcih0YWcgPT4gdGFnLm5hbWUgPT09IGF1dG9Db21wbGV0ZVZhbHVlKVxyXG4gICAgICAucG9wKCk7XHJcbiAgICBpZiAoIXNlbGVjdGVkVGFnKSB7XHJcbiAgICAgIHRoaXMubG9nZ2VyLndhcm4oXHJcbiAgICAgICAgJ29wdGlvblNlbGVjdGVkRnJvbUxpc3QoKSBub3Qgc3VyZSBob3cgYXV0b2NvbXBsZXRlIHNlbGVjdGVkIHNvbWV0aGluZyBub3QgaW4gdGhlIGxpc3QuLi4nXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuYWRkZWRUYWdUb0ludGVybmFsVmFsdWUoc2VsZWN0ZWRUYWcpO1xyXG4gICAgdGhpcy50ZXh0SW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgdGhpcy50ZXh0SW5wdXQubmF0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgICB0aGlzLmlucHV0VGV4dENvbnRyb2wuc2V0VmFsdWUobnVsbCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBtYWtlTmV3VGFnKG5hbWUpOiBQcm9taXNlPFRhZz4ge1xyXG4gICAgY29uc3QgbmV3VGFnSWQgPSB1dWlkdjEoKTtcclxuICAgIGNvbnN0IG5ld1RhZzogVGFnID0ge1xyXG4gICAgICBpZDogbmV3VGFnSWQsXHJcbiAgICAgIG5hbWU6IG5hbWUudHJpbSgpXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG5ld1RhZztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkZWRUYWdUb0ludGVybmFsVmFsdWUobmV3VGFnOiBUYWcpIHtcclxuICAgIHRoaXMudmFsdWUgPSBuZXdUYWc7XHJcbiAgfVxyXG5cclxuICBmb2N1c09uRW50ZXIoZTogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgdGhpcy5sb2dnZXIubG9nKCdlbnRlciBrZXkgcHJlc3NlZCcsIHsga2V5OiBlLmtleSwgY29kZTogZS5rZXlDb2RlIH0pO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnRleHRJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5pbnB1dFRleHRDb250cm9sLmRpc2FibGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5wdXRUZXh0Q29udHJvbC5lbmFibGUoKTtcclxuICAgIH1cclxuICAgIHN1cGVyLnNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZCk7XHJcbiAgfVxyXG5cclxuICBub3RpZnkobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNuYWNrLm9wZW4obWVzc2FnZSwgJ0Nsb3NlJywge1xyXG4gICAgICBkdXJhdGlvbjogMzAwMCxcclxuICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uOiAnY2VudGVyJyxcclxuICAgICAgdmVydGljYWxQb3NpdGlvbjogJ2JvdHRvbSdcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=