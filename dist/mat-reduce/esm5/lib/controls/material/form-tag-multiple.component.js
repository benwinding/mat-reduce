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
var LibFormTagMultipleComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LibFormTagMultipleComponent, _super);
    function LibFormTagMultipleComponent(snack) {
        var _this = _super.call(this) || this;
        _this.snack = snack;
        // EXTERNAL API
        _this._choices = [];
        _this.removable = true;
        _this.filterStrategy = 'all';
        _this.addedNewTag = new EventEmitter();
        _this.visible = true;
        _this.selectable = true;
        _this.addOnBlur = true;
        _this.separatorKeysCodes = [ENTER, COMMA];
        _this.inputTextControl = new FormControl();
        _this.destroyed = new Subject();
        return _this;
    }
    Object.defineProperty(LibFormTagMultipleComponent.prototype, "choices", {
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
    Object.defineProperty(LibFormTagMultipleComponent.prototype, "selectedTags", {
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
    Object.defineProperty(LibFormTagMultipleComponent.prototype, "choicesStrings", {
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
    LibFormTagMultipleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
    LibFormTagMultipleComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed.next();
    };
    /**
     * @param {?} newVal
     * @return {?}
     */
    LibFormTagMultipleComponent.prototype.writeValue = /**
     * @param {?} newVal
     * @return {?}
     */
    function (newVal) {
        this.value = newVal || [];
    };
    /**
     * @private
     * @return {?}
     */
    LibFormTagMultipleComponent.prototype.getChoicesMinusSelected = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var alreadySelectedSet = new Set(this.selectedTags.map((/**
         * @param {?} t
         * @return {?}
         */
        function (t) { return t.name; })));
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
    LibFormTagMultipleComponent.prototype._filter = /**
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
     * @return {?}
     */
    LibFormTagMultipleComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.CheckValueIsValid();
    };
    /**
     * @param {?} tagToRemove
     * @return {?}
     */
    LibFormTagMultipleComponent.prototype.removeTagChip = /**
     * @param {?} tagToRemove
     * @return {?}
     */
    function (tagToRemove) {
        this.log('removeTagChip', { tagToRemove: tagToRemove });
        this.matAutocompleteTrigger.closePanel();
        this.value = this.value.filter((/**
         * @param {?} t
         * @return {?}
         */
        function (t) { return t.id !== tagToRemove.id; }));
        this.inputTextControl.setValue(null);
        this.inputTextControl.markAsTouched();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    LibFormTagMultipleComponent.prototype.addFromTextInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var value, inputTrimmed, found, newTag;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        value = event.value;
                        inputTrimmed = (value || '').trim();
                        if (!inputTrimmed) {
                            this.resetTextInput();
                            return [2 /*return*/];
                        }
                        this.log('addFromTextInput', { value: event.value });
                        // Add fruit only when MatAutocomplete is not open
                        // To make sure this does not conflict with OptionSelected Event
                        found = this.choices.find((/**
                         * @param {?} c
                         * @return {?}
                         */
                        function (c) { return c.name === inputTrimmed; }));
                        if (found) {
                            this.log('addFromTextInput() found match, adding that instead of making new tag');
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
                            this.log('addFromTextInput() unable to add custom values...');
                            return [2 /*return*/];
                        }
                        this.resetTextInput();
                        return [4 /*yield*/, this.makeNewTag(inputTrimmed)];
                    case 1:
                        newTag = _a.sent();
                        this.addedNewTag.emit(newTag);
                        this.choices.push(newTag);
                        this.addedTagToInternalValue(newTag);
                        this.notify("Adding \"" + newTag.name + "\" to the global list...");
                        this.log('addFromTextInput() added new tag', { newTag: newTag });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    LibFormTagMultipleComponent.prototype.resetTextInput = /**
     * @return {?}
     */
    function () {
        // Reset the input value
        this.textInput.nativeElement.value = '';
        this.inputTextControl.setValue(null);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    LibFormTagMultipleComponent.prototype.optionSelectedFromList = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.log('optionSelectedFromList()', {
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
            this.warn('optionSelectedFromList() not sure how autocomplete selected something not in the list...');
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
    LibFormTagMultipleComponent.prototype.makeNewTag = /**
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
    LibFormTagMultipleComponent.prototype.addedTagToInternalValue = /**
     * @private
     * @param {?} newTag
     * @return {?}
     */
    function (newTag) {
        /** @type {?} */
        var currentValue = tslib_1.__spread((this.value || []));
        currentValue.push(newTag);
        this.value = currentValue;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    LibFormTagMultipleComponent.prototype.focusOnEnter = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        if (e.keyCode === 13) {
            this.log('enter key pressed', { key: e.key, code: e.keyCode });
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
    LibFormTagMultipleComponent.prototype.setDisabledState = /**
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
     * @return {?}
     */
    LibFormTagMultipleComponent.prototype.hasRed = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isDirty = this.inputTextControl.touched || this.inputTextControl.dirty;
        /** @type {?} */
        var isInValid = this.internalControl.invalid;
        return isDirty && isInValid;
    };
    /**
     * @param {?} message
     * @return {?}
     */
    LibFormTagMultipleComponent.prototype.notify = /**
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
    /**
     * @param {?} msg
     * @param {?=} obj
     * @return {?}
     */
    LibFormTagMultipleComponent.prototype.log = /**
     * @param {?} msg
     * @param {?=} obj
     * @return {?}
     */
    function (msg, obj) {
        if (!obj) {
            return console.log('form-tag-multiple: ', msg);
        }
        console.log('form-tag-multiple: ', msg, obj);
    };
    /**
     * @param {?} msg
     * @param {?=} obj
     * @return {?}
     */
    LibFormTagMultipleComponent.prototype.warn = /**
     * @param {?} msg
     * @param {?=} obj
     * @return {?}
     */
    function (msg, obj) {
        if (!obj) {
            return console.log('form-tag-multiple: ', msg);
        }
        console.warn('form-tag-multiple: ', msg, obj);
    };
    /**
     * @return {?}
     */
    LibFormTagMultipleComponent.prototype.CheckValueIsValid = /**
     * @return {?}
     */
    function () {
        if (!this.internalControl || !this.internalControl.validator) {
            return;
        }
        /** @type {?} */
        var validator = this.internalControl.validator((/** @type {?} */ ({})));
        /** @type {?} */
        var isRequired = validator && validator.required;
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
    };
    LibFormTagMultipleComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-tag-multiple',
                    template: "\n    <mat-form-field\n      [appearance]=\"appearance\"\n      class=\"tag-full-width\"\n      [class.form-tag-control-invalid]=\"hasRed()\"\n    >\n      <mat-chip-list #chipList [disabled]=\"disabled\">\n        <mat-chip\n          *ngFor=\"let tag of selectedTags\"\n          [selectable]=\"selectable\"\n          [disabled]=\"this.internalControl.disabled\"\n          [removable]=\"removable\"\n          (removed)=\"removeTagChip(tag)\"\n        >\n          {{ tag.name }}\n          <mat-icon\n            matChipRemove\n            *ngIf=\"removable && this.internalControl.enabled\"\n            >cancel</mat-icon\n          >\n        </mat-chip>\n        <input\n          [placeholder]=\"placeholder\"\n          #textInput\n          [name]=\"autoCompleteObscureName\"\n          autocomplete=\"dontcompleteme\"\n          [formControl]=\"inputTextControl\"\n          [matAutocomplete]=\"auto\"\n          [matChipInputFor]=\"chipList\"\n          [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n          [matChipInputAddOnBlur]=\"addOnBlur\"\n          (matChipInputTokenEnd)=\"addFromTextInput($event)\"\n          (keydown)=\"focusOnEnter($event)\"\n          (blur)=\"onBlur()\"\n        />\n        <mat-icon\n          class=\"tag-icon\"\n          matTooltip=\"Add tags here...\"\n          matBadge=\"\u221E\"\n          matSuffix\n          >local_offer</mat-icon\n        >\n      </mat-chip-list>\n      <mat-autocomplete\n        #auto=\"matAutocomplete\"\n        (optionSelected)=\"optionSelectedFromList($event)\"\n      >\n        <mat-option\n          *ngFor=\"let choiceName of filteredTagNames$ | async\"\n          [value]=\"choiceName\"\n        >\n          {{ choiceName }}\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n  ",
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormTagMultipleComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormTagMultipleComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .tag-full-width {\n        width: 100%;\n      }\n      .tag-icon {\n        color: grey;\n        right: 15px;\n      }\n      .tag-icon .mat-badge-content {\n        background-color: #afc5b000 !important;\n        right: 1px !important;\n        top: 3px !important;\n        color: white !important;\n      }\n      .form-tag-control-invalid .mat-form-field-label {\n        color: #ff4f4f !important;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    LibFormTagMultipleComponent.ctorParameters = function () { return [
        { type: MatSnackBar }
    ]; };
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
    return LibFormTagMultipleComponent;
}(FormBase));
export { LibFormTagMultipleComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS10YWctbXVsdGlwbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXJlZHVjZS8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9tYXRlcmlhbC9mb3JtLXRhZy1tdWx0aXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULFVBQVUsRUFDVixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLGVBQWUsRUFHZixXQUFXLEVBQ1gsc0JBQXNCLEVBQ3ZCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQW1CLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEcsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXJELE9BQU8sRUFBRSxFQUFFLElBQUksTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXBDO0lBNkZpRCx1REFBZTtJQTJDOUQscUNBQW9CLEtBQWtCO1FBQXRDLFlBQ0UsaUJBQU8sU0FDUjtRQUZtQixXQUFLLEdBQUwsS0FBSyxDQUFhOztRQXhDOUIsY0FBUSxHQUFVLEVBQUUsQ0FBQztRQWFwQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLG9CQUFjLEdBQXdCLEtBQUssQ0FBQztRQUMzQyxpQkFBVyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFVaEQsYUFBTyxHQUFHLElBQUksQ0FBQztR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VixLQUFLOytCQVdMLEtBQUs7NEJBQ0wsS0FBSztpQ0FDTCxLQUFLOzhCQUNMLE1BQU07NEJBaUJOLFNBQVMsU0FBQyxXQUFXLEVBQUUsbUJBQUEsRUFBRSxFQUFPO3lDQUNoQyxTQUFTLFNBQUMsV0FBVyxFQUFFLG1CQUFBLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFLEVBQU87a0NBRTlELFNBQVMsU0FBQyxNQUFNLEVBQUUsbUJBQUEsRUFBRSxFQUFPOztJQW1OOUIsa0NBQUM7Q0FBQSxBQXRWRCxDQTZGaUQsUUFBUSxHQXlQeEQ7U0F6UFksMkJBQTJCOzs7Ozs7SUFHdEMsK0NBQTZCOztJQVk3QixtREFBK0I7O0lBQy9CLGdEQUEwQjs7SUFDMUIscURBQXFEOztJQUNyRCxrREFBZ0Q7O0lBVWhELDhDQUFlOztJQUNmLGlEQUFrQjs7SUFDbEIsZ0RBQWlCOztJQUNqQix5REFBOEM7O0lBQzlDLHVEQUFxQzs7SUFDckMsd0RBQXdDOztJQUV4QyxnREFBMkU7O0lBQzNFLDZEQUMrQzs7SUFDL0Msc0RBQ2lDOztJQUVqQyxnREFBZ0M7Ozs7O0lBRXBCLDRDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOiB2YXJpYWJsZS1uYW1lXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgTWF0QXV0b2NvbXBsZXRlLFxyXG4gIE1hdEF1dG9jb21wbGV0ZVNlbGVjdGVkRXZlbnQsXHJcbiAgTWF0Q2hpcElucHV0RXZlbnQsXHJcbiAgTWF0U25hY2tCYXIsXHJcbiAgTWF0QXV0b2NvbXBsZXRlVHJpZ2dlclxyXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE5HX1ZBTElEQVRPUlMsIE5HX1ZBTFVFX0FDQ0VTU09SLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEZvcm1CYXNlIH0gZnJvbSAnLi4vZm9ybS1iYXNlLWNsYXNzJztcclxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi9UYWcnO1xyXG5pbXBvcnQgeyBDT01NQSwgRU5URVIgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5cclxuaW1wb3J0IHsgdjEgYXMgdXVpZHYxIH0gZnJvbSAndXVpZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdmb3JtLXRhZy1tdWx0aXBsZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxtYXQtZm9ybS1maWVsZFxyXG4gICAgICBbYXBwZWFyYW5jZV09XCJhcHBlYXJhbmNlXCJcclxuICAgICAgY2xhc3M9XCJ0YWctZnVsbC13aWR0aFwiXHJcbiAgICAgIFtjbGFzcy5mb3JtLXRhZy1jb250cm9sLWludmFsaWRdPVwiaGFzUmVkKClcIlxyXG4gICAgPlxyXG4gICAgICA8bWF0LWNoaXAtbGlzdCAjY2hpcExpc3QgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XHJcbiAgICAgICAgPG1hdC1jaGlwXHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgdGFnIG9mIHNlbGVjdGVkVGFnc1wiXHJcbiAgICAgICAgICBbc2VsZWN0YWJsZV09XCJzZWxlY3RhYmxlXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJ0aGlzLmludGVybmFsQ29udHJvbC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICBbcmVtb3ZhYmxlXT1cInJlbW92YWJsZVwiXHJcbiAgICAgICAgICAocmVtb3ZlZCk9XCJyZW1vdmVUYWdDaGlwKHRhZylcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt7IHRhZy5uYW1lIH19XHJcbiAgICAgICAgICA8bWF0LWljb25cclxuICAgICAgICAgICAgbWF0Q2hpcFJlbW92ZVxyXG4gICAgICAgICAgICAqbmdJZj1cInJlbW92YWJsZSAmJiB0aGlzLmludGVybmFsQ29udHJvbC5lbmFibGVkXCJcclxuICAgICAgICAgICAgPmNhbmNlbDwvbWF0LWljb25cclxuICAgICAgICAgID5cclxuICAgICAgICA8L21hdC1jaGlwPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICN0ZXh0SW5wdXRcclxuICAgICAgICAgIFtuYW1lXT1cImF1dG9Db21wbGV0ZU9ic2N1cmVOYW1lXCJcclxuICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImRvbnRjb21wbGV0ZW1lXCJcclxuICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJpbnB1dFRleHRDb250cm9sXCJcclxuICAgICAgICAgIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b1wiXHJcbiAgICAgICAgICBbbWF0Q2hpcElucHV0Rm9yXT1cImNoaXBMaXN0XCJcclxuICAgICAgICAgIFttYXRDaGlwSW5wdXRTZXBhcmF0b3JLZXlDb2Rlc109XCJzZXBhcmF0b3JLZXlzQ29kZXNcIlxyXG4gICAgICAgICAgW21hdENoaXBJbnB1dEFkZE9uQmx1cl09XCJhZGRPbkJsdXJcIlxyXG4gICAgICAgICAgKG1hdENoaXBJbnB1dFRva2VuRW5kKT1cImFkZEZyb21UZXh0SW5wdXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAoa2V5ZG93bik9XCJmb2N1c09uRW50ZXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAoYmx1cik9XCJvbkJsdXIoKVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWF0LWljb25cclxuICAgICAgICAgIGNsYXNzPVwidGFnLWljb25cIlxyXG4gICAgICAgICAgbWF0VG9vbHRpcD1cIkFkZCB0YWdzIGhlcmUuLi5cIlxyXG4gICAgICAgICAgbWF0QmFkZ2U9XCLiiJ5cIlxyXG4gICAgICAgICAgbWF0U3VmZml4XHJcbiAgICAgICAgICA+bG9jYWxfb2ZmZXI8L21hdC1pY29uXHJcbiAgICAgICAgPlxyXG4gICAgICA8L21hdC1jaGlwLWxpc3Q+XHJcbiAgICAgIDxtYXQtYXV0b2NvbXBsZXRlXHJcbiAgICAgICAgI2F1dG89XCJtYXRBdXRvY29tcGxldGVcIlxyXG4gICAgICAgIChvcHRpb25TZWxlY3RlZCk9XCJvcHRpb25TZWxlY3RlZEZyb21MaXN0KCRldmVudClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPG1hdC1vcHRpb25cclxuICAgICAgICAgICpuZ0Zvcj1cImxldCBjaG9pY2VOYW1lIG9mIGZpbHRlcmVkVGFnTmFtZXMkIHwgYXN5bmNcIlxyXG4gICAgICAgICAgW3ZhbHVlXT1cImNob2ljZU5hbWVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt7IGNob2ljZU5hbWUgfX1cclxuICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgIDwvbWF0LWF1dG9jb21wbGV0ZT5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLnRhZy1mdWxsLXdpZHRoIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAudGFnLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50YWctaWNvbiAubWF0LWJhZGdlLWNvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhZmM1YjAwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHJpZ2h0OiAxcHggIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5mb3JtLXRhZy1jb250cm9sLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgICAgICBjb2xvcjogI2ZmNGY0ZiAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybVRhZ011bHRpcGxlQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExpYkZvcm1UYWdNdWx0aXBsZUNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGliRm9ybVRhZ011bHRpcGxlQ29tcG9uZW50IGV4dGVuZHMgRm9ybUJhc2U8VGFnW10+XHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgLy8gRVhURVJOQUwgQVBJXHJcbiAgcHJpdmF0ZSBfY2hvaWNlczogVGFnW10gPSBbXTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBjaG9pY2VzKG5ld0Nob2ljZXMpIHtcclxuICAgIGlmICghbmV3Q2hvaWNlcykge1xyXG4gICAgICBuZXdDaG9pY2VzID0gW107XHJcbiAgICB9XHJcbiAgICB0aGlzLl9jaG9pY2VzID0gbmV3Q2hvaWNlcztcclxuICAgIHRoaXMuaW5wdXRUZXh0Q29udHJvbC5wYXRjaFZhbHVlKHRoaXMuaW5wdXRUZXh0Q29udHJvbC52YWx1ZSk7XHJcbiAgfVxyXG4gIGdldCBjaG9pY2VzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Nob2ljZXM7XHJcbiAgfVxyXG4gIEBJbnB1dCgpIGN1c3RvbVZhbHVlczogYm9vbGVhbjtcclxuICBASW5wdXQoKSByZW1vdmFibGUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGZpbHRlclN0cmF0ZWd5OiAnYWxsJyB8ICdiZWdpbm5pbmcnID0gJ2FsbCc7XHJcbiAgQE91dHB1dCgpIGFkZGVkTmV3VGFnID0gbmV3IEV2ZW50RW1pdHRlcjxUYWc+KCk7XHJcblxyXG4gIC8vIElOVEVSTkFMXHJcblxyXG4gIGdldCBzZWxlY3RlZFRhZ3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICB9XHJcbiAgZ2V0IGNob2ljZXNTdHJpbmdzKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLmNob2ljZXMubWFwKHQgPT4gKCEhdCA/IHQubmFtZSA6ICcnKSk7XHJcbiAgfVxyXG4gIHZpc2libGUgPSB0cnVlO1xyXG4gIHNlbGVjdGFibGUgPSB0cnVlO1xyXG4gIGFkZE9uQmx1ciA9IHRydWU7XHJcbiAgc2VwYXJhdG9yS2V5c0NvZGVzOiBudW1iZXJbXSA9IFtFTlRFUiwgQ09NTUFdO1xyXG4gIGlucHV0VGV4dENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcclxuICBmaWx0ZXJlZFRhZ05hbWVzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3RleHRJbnB1dCcsIHt9IGFzIGFueSkgdGV4dElucHV0OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoJ3RleHRJbnB1dCcsIHsgcmVhZDogTWF0QXV0b2NvbXBsZXRlVHJpZ2dlciB9IGFzIGFueSlcclxuICBtYXRBdXRvY29tcGxldGVUcmlnZ2VyOiBNYXRBdXRvY29tcGxldGVUcmlnZ2VyO1xyXG4gIEBWaWV3Q2hpbGQoJ2F1dG8nLCB7fSBhcyBhbnkpXHJcbiAgbWF0QXV0b2NvbXBsZXRlOiBNYXRBdXRvY29tcGxldGU7XHJcblxyXG4gIGRlc3Ryb3llZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc25hY2s6IE1hdFNuYWNrQmFyKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmZpbHRlcmVkVGFnTmFtZXMkID0gdGhpcy5pbnB1dFRleHRDb250cm9sLnZhbHVlQ2hhbmdlcy5waXBlKFxyXG4gICAgICBzdGFydFdpdGgobnVsbCksXHJcbiAgICAgIG1hcCgodGFnTmFtZTogc3RyaW5nIHwgbnVsbCkgPT5cclxuICAgICAgICB0YWdOYW1lID8gdGhpcy5fZmlsdGVyKHRhZ05hbWUpIDogdGhpcy5nZXRDaG9pY2VzTWludXNTZWxlY3RlZCgpXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuZGVzdHJveWVkLm5leHQoKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUobmV3VmFsOiBUYWdbXSkge1xyXG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbCB8fCBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q2hvaWNlc01pbnVzU2VsZWN0ZWQoKTogc3RyaW5nW10ge1xyXG4gICAgY29uc3QgYWxyZWFkeVNlbGVjdGVkU2V0ID0gbmV3IFNldCh0aGlzLnNlbGVjdGVkVGFncy5tYXAodCA9PiB0Lm5hbWUpKTtcclxuICAgIHJldHVybiB0aGlzLmNob2ljZXNTdHJpbmdzLmZpbHRlcihcclxuICAgICAgY2hvaWNlID0+ICFhbHJlYWR5U2VsZWN0ZWRTZXQuaGFzKGNob2ljZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9maWx0ZXIodmFsdWU6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuICAgIGNvbnN0IGNob2ljZXMgPSB0aGlzLmdldENob2ljZXNNaW51c1NlbGVjdGVkKCk7XHJcbiAgICBpZiAodGhpcy5maWx0ZXJTdHJhdGVneSA9PT0gJ2FsbCcpIHtcclxuICAgICAgcmV0dXJuIF9maWx0ZXJBbGwoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBfZmlsdGVyQmVnaW5uaW5nKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBfZmlsdGVyQWxsKCk6IHN0cmluZ1tdIHtcclxuICAgICAgY29uc3QgZmlsdGVyVmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICByZXR1cm4gY2hvaWNlcy5maWx0ZXIoY2hvaWNlID0+XHJcbiAgICAgICAgKGNob2ljZSArICcnKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlclZhbHVlKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gX2ZpbHRlckJlZ2lubmluZygpOiBzdHJpbmdbXSB7XHJcbiAgICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgcmV0dXJuIGNob2ljZXMuZmlsdGVyKFxyXG4gICAgICAgIGNob2ljZSA9PiAoY2hvaWNlICsgJycpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJWYWx1ZSkgPT09IDBcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQmx1cigpIHtcclxuICAgIHRoaXMuQ2hlY2tWYWx1ZUlzVmFsaWQoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVRhZ0NoaXAodGFnVG9SZW1vdmU6IFRhZykge1xyXG4gICAgdGhpcy5sb2coJ3JlbW92ZVRhZ0NoaXAnLCB7IHRhZ1RvUmVtb3ZlIH0pO1xyXG4gICAgdGhpcy5tYXRBdXRvY29tcGxldGVUcmlnZ2VyLmNsb3NlUGFuZWwoKTtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLmZpbHRlcih0ID0+IHQuaWQgIT09IHRhZ1RvUmVtb3ZlLmlkKTtcclxuICAgIHRoaXMuaW5wdXRUZXh0Q29udHJvbC5zZXRWYWx1ZShudWxsKTtcclxuICAgIHRoaXMuaW5wdXRUZXh0Q29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBhZGRGcm9tVGV4dElucHV0KGV2ZW50OiBNYXRDaGlwSW5wdXRFdmVudCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGlucHV0VHJpbW1lZCA9ICh2YWx1ZSB8fCAnJykudHJpbSgpO1xyXG4gICAgaWYgKCFpbnB1dFRyaW1tZWQpIHtcclxuICAgICAgdGhpcy5yZXNldFRleHRJbnB1dCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmxvZygnYWRkRnJvbVRleHRJbnB1dCcsIHsgdmFsdWU6IGV2ZW50LnZhbHVlIH0pO1xyXG4gICAgLy8gQWRkIGZydWl0IG9ubHkgd2hlbiBNYXRBdXRvY29tcGxldGUgaXMgbm90IG9wZW5cclxuICAgIC8vIFRvIG1ha2Ugc3VyZSB0aGlzIGRvZXMgbm90IGNvbmZsaWN0IHdpdGggT3B0aW9uU2VsZWN0ZWQgRXZlbnRcclxuICAgIGNvbnN0IGZvdW5kID0gdGhpcy5jaG9pY2VzLmZpbmQoYyA9PiBjLm5hbWUgPT09IGlucHV0VHJpbW1lZCk7XHJcbiAgICBpZiAoZm91bmQpIHtcclxuICAgICAgdGhpcy5sb2coJ2FkZEZyb21UZXh0SW5wdXQoKSBmb3VuZCBtYXRjaCwgYWRkaW5nIHRoYXQgaW5zdGVhZCBvZiBtYWtpbmcgbmV3IHRhZycpO1xyXG4gICAgICB0aGlzLmFkZGVkVGFnVG9JbnRlcm5hbFZhbHVlKGZvdW5kKTtcclxuICAgICAgdGhpcy5yZXNldFRleHRJbnB1dCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuY3VzdG9tVmFsdWVzICYmIHRoaXMubWF0QXV0b2NvbXBsZXRlLmlzT3Blbikge1xyXG4gICAgICAvLyB0aGlzLnJlc2V0VGV4dElucHV0KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5jdXN0b21WYWx1ZXMpIHtcclxuICAgICAgdGhpcy5yZXNldFRleHRJbnB1dCgpO1xyXG4gICAgICB0aGlzLnNuYWNrLm9wZW4oJ011c3Qgc2VsZWN0IGl0ZW0gZnJvbSBsaXN0JywgJ0Nsb3NlJywge1xyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAwLFxyXG4gICAgICAgIGhvcml6b250YWxQb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICAgICAgdmVydGljYWxQb3NpdGlvbjogJ2JvdHRvbSdcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubG9nKCdhZGRGcm9tVGV4dElucHV0KCkgdW5hYmxlIHRvIGFkZCBjdXN0b20gdmFsdWVzLi4uJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMucmVzZXRUZXh0SW5wdXQoKTtcclxuICAgIGNvbnN0IG5ld1RhZyA9IGF3YWl0IHRoaXMubWFrZU5ld1RhZyhpbnB1dFRyaW1tZWQpO1xyXG4gICAgdGhpcy5hZGRlZE5ld1RhZy5lbWl0KG5ld1RhZyk7XHJcbiAgICB0aGlzLmNob2ljZXMucHVzaChuZXdUYWcpO1xyXG4gICAgdGhpcy5hZGRlZFRhZ1RvSW50ZXJuYWxWYWx1ZShuZXdUYWcpO1xyXG4gICAgdGhpcy5ub3RpZnkoYEFkZGluZyBcIiR7bmV3VGFnLm5hbWV9XCIgdG8gdGhlIGdsb2JhbCBsaXN0Li4uYCk7XHJcbiAgICB0aGlzLmxvZygnYWRkRnJvbVRleHRJbnB1dCgpIGFkZGVkIG5ldyB0YWcnLCB7IG5ld1RhZyB9KTtcclxuICB9XHJcblxyXG4gIHJlc2V0VGV4dElucHV0KCkge1xyXG4gICAgLy8gUmVzZXQgdGhlIGlucHV0IHZhbHVlXHJcbiAgICB0aGlzLnRleHRJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgICB0aGlzLmlucHV0VGV4dENvbnRyb2wuc2V0VmFsdWUobnVsbCk7XHJcbiAgfVxyXG5cclxuICBvcHRpb25TZWxlY3RlZEZyb21MaXN0KGV2ZW50OiBNYXRBdXRvY29tcGxldGVTZWxlY3RlZEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZygnb3B0aW9uU2VsZWN0ZWRGcm9tTGlzdCgpJywge1xyXG4gICAgICBldmVudCxcclxuICAgICAgdmFsdWU6IGV2ZW50Lm9wdGlvbi52aWV3VmFsdWVcclxuICAgIH0pO1xyXG4gICAgY29uc3QgYXV0b0NvbXBsZXRlVmFsdWUgPSBldmVudC5vcHRpb24udmlld1ZhbHVlO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRUYWcgPSBbLi4uKHRoaXMuY2hvaWNlcyB8fCBbXSldXHJcbiAgICAgIC5maWx0ZXIodGFnID0+IHRhZy5uYW1lID09PSBhdXRvQ29tcGxldGVWYWx1ZSlcclxuICAgICAgLnBvcCgpO1xyXG4gICAgaWYgKCFzZWxlY3RlZFRhZykge1xyXG4gICAgICB0aGlzLndhcm4oXHJcbiAgICAgICAgJ29wdGlvblNlbGVjdGVkRnJvbUxpc3QoKSBub3Qgc3VyZSBob3cgYXV0b2NvbXBsZXRlIHNlbGVjdGVkIHNvbWV0aGluZyBub3QgaW4gdGhlIGxpc3QuLi4nXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuYWRkZWRUYWdUb0ludGVybmFsVmFsdWUoc2VsZWN0ZWRUYWcpO1xyXG4gICAgdGhpcy50ZXh0SW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgdGhpcy50ZXh0SW5wdXQubmF0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgICB0aGlzLmlucHV0VGV4dENvbnRyb2wuc2V0VmFsdWUobnVsbCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBtYWtlTmV3VGFnKG5hbWUpOiBQcm9taXNlPFRhZz4ge1xyXG4gICAgY29uc3QgbmV3VGFnSWQgPSB1dWlkdjEoKTtcclxuICAgIGNvbnN0IG5ld1RhZzogVGFnID0ge1xyXG4gICAgICBpZDogbmV3VGFnSWQsXHJcbiAgICAgIG5hbWU6IG5hbWUudHJpbSgpXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG5ld1RhZztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkZWRUYWdUb0ludGVybmFsVmFsdWUobmV3VGFnOiBUYWcpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IFsuLi4odGhpcy52YWx1ZSB8fCBbXSldO1xyXG4gICAgY3VycmVudFZhbHVlLnB1c2gobmV3VGFnKTtcclxuICAgIHRoaXMudmFsdWUgPSBjdXJyZW50VmFsdWU7XHJcbiAgfVxyXG5cclxuICBmb2N1c09uRW50ZXIoZTogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgdGhpcy5sb2coJ2VudGVyIGtleSBwcmVzc2VkJywgeyBrZXk6IGUua2V5LCBjb2RlOiBlLmtleUNvZGUgfSk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudGV4dElucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoaXNEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmlucHV0VGV4dENvbnRyb2wuZGlzYWJsZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbnB1dFRleHRDb250cm9sLmVuYWJsZSgpO1xyXG4gICAgfVxyXG4gICAgc3VwZXIuc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkKTtcclxuICB9XHJcblxyXG4gIGhhc1JlZCgpIHtcclxuICAgIGNvbnN0IGlzRGlydHkgPSB0aGlzLmlucHV0VGV4dENvbnRyb2wudG91Y2hlZCB8fCB0aGlzLmlucHV0VGV4dENvbnRyb2wuZGlydHk7XHJcbiAgICBjb25zdCBpc0luVmFsaWQgPSB0aGlzLmludGVybmFsQ29udHJvbC5pbnZhbGlkO1xyXG4gICAgcmV0dXJuIGlzRGlydHkgJiYgaXNJblZhbGlkO1xyXG4gIH1cclxuXHJcbiAgbm90aWZ5KG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgdGhpcy5zbmFjay5vcGVuKG1lc3NhZ2UsICdDbG9zZScsIHtcclxuICAgICAgZHVyYXRpb246IDMwMDAsXHJcbiAgICAgIGhvcml6b250YWxQb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICAgIHZlcnRpY2FsUG9zaXRpb246ICdib3R0b20nXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvZyhtc2c6IHN0cmluZywgb2JqPzogYW55KSB7XHJcbiAgICBpZiAoIW9iaikge1xyXG4gICAgICByZXR1cm4gY29uc29sZS5sb2coJ2Zvcm0tdGFnLW11bHRpcGxlOiAnLCBtc2cpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ2Zvcm0tdGFnLW11bHRpcGxlOiAnLCBtc2csIG9iaik7XHJcbiAgfVxyXG5cclxuICB3YXJuKG1zZzogc3RyaW5nLCBvYmo/OiBhbnkpIHtcclxuICAgIGlmICghb2JqKSB7XHJcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZygnZm9ybS10YWctbXVsdGlwbGU6ICcsIG1zZyk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLndhcm4oJ2Zvcm0tdGFnLW11bHRpcGxlOiAnLCBtc2csIG9iaik7XHJcbiAgfVxyXG5cclxuICBDaGVja1ZhbHVlSXNWYWxpZCgpIHtcclxuICAgIGlmICghdGhpcy5pbnRlcm5hbENvbnRyb2wgfHwgIXRoaXMuaW50ZXJuYWxDb250cm9sLnZhbGlkYXRvcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLmludGVybmFsQ29udHJvbC52YWxpZGF0b3Ioe30gYXMgQWJzdHJhY3RDb250cm9sKTtcclxuICAgIGNvbnN0IGlzUmVxdWlyZWQgPSB2YWxpZGF0b3IgJiYgdmFsaWRhdG9yLnJlcXVpcmVkO1xyXG4gICAgaWYgKCFpc1JlcXVpcmVkKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiAnZm9ybSB2YWx1ZSBpcyBub3QgYW4gYXJyYXknO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLnZhbHVlLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gJ2Zvcm0gdmFsdWUgaXMgcmVxdWlyZWQgYnV0IGhhcyBubyB2YWx1ZSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIl19