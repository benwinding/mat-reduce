import { __awaiter, __generator, __extends, __assign, __spread } from 'tslib';
import { Component, Inject, ViewChild, Injectable, Input, forwardRef, ViewEncapsulation, NgModule, EventEmitter, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatInputModule, MatCardModule, MatIconModule, MatButtonModule, MatDatepickerModule, MatSnackBar, MatAutocompleteTrigger, MatSnackBarModule, MatSlideToggleModule, MatChipsModule, MatBadgeModule, MatDialogModule, MatAutocompleteModule, MatFormFieldModule, MatSelectModule, MatCheckboxModule, MatTooltipModule, MatProgressSpinnerModule } from '@angular/material';
import { take, takeUntil, auditTime, debounceTime, distinctUntilChanged, tap, delay, startWith, map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FormControl, FormArray, FormGroup, FormBuilder, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDatetimeModule, MatDatetimepickerModule } from '@mat-datetimepicker/core';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { QuillModule } from 'ngx-quill';
import { Subject, pipe } from 'rxjs';
import { v4, v1 } from 'uuid';
import { SignaturePadModule } from 'angular2-signaturepad';
import * as QuillNamespace from 'quill';
import { ImageDrop } from 'quill-image-drop-module';
import ImageCompress from 'quill-image-compress';
import ImageResize from 'quill-image-resize-module';
import { htmlEditButton } from 'quill-html-edit-button';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ConfirmationDialogData() { }
if (false) {
    /** @type {?} */
    ConfirmationDialogData.prototype.message;
    /** @type {?|undefined} */
    ConfirmationDialogData.prototype.okIcon;
    /** @type {?|undefined} */
    ConfirmationDialogData.prototype.okLabel;
}
var AppConfirmationDialogComponent = /** @class */ (function () {
    function AppConfirmationDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.message = data.message;
        this.okIcon = data.okIcon ? data.okIcon : 'done';
        this.okLabel = data.okLabel ? data.okLabel : 'Ok';
    }
    /**
     * @return {?}
     */
    AppConfirmationDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.okButton && this.okButton.focus) {
            this.okButton.focus();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    AppConfirmationDialogComponent.prototype.onClickCancel = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        this.dialogRef.close(false);
    };
    /**
     * @return {?}
     */
    AppConfirmationDialogComponent.prototype.onSubmitOk = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close(true);
    };
    AppConfirmationDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-confirmation-dialog',
                    template: "\n    <p class=\"title is-centered\">Confirm</p>\n    <p class=\"subtitle is-centered\">{{ message }}</p>\n    <form (submit)=\"onSubmitOk()\" class=\"buttons\">\n      <button #okButton mat-raised-button color=\"primary\" type=\"submit\">\n        <mat-icon>{{ okIcon }}</mat-icon>\n        <span>{{ okLabel }}</span>\n      </button>\n      <button mat-raised-button color=\"white\" (click)=\"onClickCancel($event)\">\n        <mat-icon>cancel</mat-icon>\n        <span>Cancel</span>\n      </button>\n    </form>\n  ",
                    styles: ["\n      .title {\n        font-size: 1.8em;\n        margin: 0px;\n      }\n      .subtitle {\n        color: grey;\n        margin: 0px;\n        font-size: 1.4em;\n      }\n      .buttons {\n        display: flex;\n        justify-content: center;\n        margin-top: 10px;\n      }\n      button {\n        margin-left: 10px;\n        margin-right: 10px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    AppConfirmationDialogComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    AppConfirmationDialogComponent.propDecorators = {
        okButton: [{ type: ViewChild, args: ['okButton', (/** @type {?} */ ({})),] }]
    };
    return AppConfirmationDialogComponent;
}());
if (false) {
    /** @type {?} */
    AppConfirmationDialogComponent.prototype.okButton;
    /** @type {?} */
    AppConfirmationDialogComponent.prototype.message;
    /** @type {?} */
    AppConfirmationDialogComponent.prototype.okIcon;
    /** @type {?} */
    AppConfirmationDialogComponent.prototype.okLabel;
    /** @type {?} */
    AppConfirmationDialogComponent.prototype.dialogRef;
    /** @type {?} */
    AppConfirmationDialogComponent.prototype.data;
}
var ConfirmationService = /** @class */ (function () {
    function ConfirmationService(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?} confirmationMessage
     * @param {?=} okLabel
     * @param {?=} okIcon
     * @return {?}
     */
    ConfirmationService.prototype.AskConfirm = /**
     * @param {?} confirmationMessage
     * @param {?=} okLabel
     * @param {?=} okIcon
     * @return {?}
     */
    function (confirmationMessage, okLabel, okIcon) {
        return __awaiter(this, void 0, void 0, function () {
            var data, dialogRef, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = (/** @type {?} */ ({
                            message: confirmationMessage,
                            okIcon: okIcon,
                            okLabel: okLabel
                        }));
                        dialogRef = this.dialog.open(AppConfirmationDialogComponent, {
                            width: '300px',
                            hasBackdrop: true,
                            disableClose: false,
                            data: data
                        });
                        return [4 /*yield*/, dialogRef
                                .afterClosed()
                                .pipe(take(1))
                                .toPromise()];
                    case 1:
                        result = _a.sent();
                        console.log("Confirmation-Service: AskConfirm=" + !!result);
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ConfirmationService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConfirmationService.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    return ConfirmationService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfirmationService.prototype.dialog;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormControlWithLabel = /** @class */ (function (_super) {
    __extends(FormControlWithLabel, _super);
    function FormControlWithLabel(value, validators, label) {
        var _this = _super.call(this, value, validators) || this;
        _this.label = label;
        return _this;
    }
    return FormControlWithLabel;
}(FormControl));
if (false) {
    /** @type {?} */
    FormControlWithLabel.prototype.label;
}
var FormArrayWithLabel = /** @class */ (function (_super) {
    __extends(FormArrayWithLabel, _super);
    function FormArrayWithLabel(value, validators, label) {
        var _this = _super.call(this, value, validators) || this;
        _this.label = label;
        return _this;
    }
    return FormArrayWithLabel;
}(FormArray));
if (false) {
    /** @type {?} */
    FormArrayWithLabel.prototype.label;
}
/**
 * @abstract
 * @template T
 */
var  /**
 * @abstract
 * @template T
 */
FormGroupTypeSafe = /** @class */ (function (_super) {
    __extends(FormGroupTypeSafe, _super);
    function FormGroupTypeSafe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    FormGroupTypeSafe.prototype.setValue = /**
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
        _super.prototype.setValue.call(this, newValue);
    };
    return FormGroupTypeSafe;
}(FormGroup));
if (false) {
    /** @type {?} */
    FormGroupTypeSafe.prototype.value;
    /** @type {?} */
    FormGroupTypeSafe.prototype.label;
    /**
     * @abstract
     * @param {?} propertyFunction
     * @return {?}
     */
    FormGroupTypeSafe.prototype.getSafe = function (propertyFunction) { };
    /**
     * @abstract
     * @param {?} propertyFunction
     * @param {?} control
     * @return {?}
     */
    FormGroupTypeSafe.prototype.setControlSafe = function (propertyFunction, control) { };
}
/**
 * @abstract
 * @template T
 */
var  /**
 * @abstract
 * @template T
 */
FormArrayTypeSafe = /** @class */ (function (_super) {
    __extends(FormArrayTypeSafe, _super);
    function FormArrayTypeSafe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    FormArrayTypeSafe.prototype.at = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return (/** @type {?} */ (_super.prototype.at.call(this, index)));
    };
    return FormArrayTypeSafe;
}(FormArray));
if (false) {
    /** @type {?} */
    FormArrayTypeSafe.prototype.value;
}
/**
 * @abstract
 * @template T
 */
var  /**
 * @abstract
 * @template T
 */
FormControlTypeSafe = /** @class */ (function (_super) {
    __extends(FormControlTypeSafe, _super);
    function FormControlTypeSafe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    FormControlTypeSafe.prototype.setValue = /**
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
        _super.prototype.setValue.call(this, newValue);
    };
    return FormControlTypeSafe;
}(FormControl));
if (false) {
    /** @type {?} */
    FormControlTypeSafe.prototype.value;
    /** @type {?} */
    FormControlTypeSafe.prototype.valueChanges;
}
var FormBuilderTypedService = /** @class */ (function (_super) {
    __extends(FormBuilderTypedService, _super);
    function FormBuilderTypedService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @template T
     * @param {?=} formState
     * @param {?=} validatorOrOpts
     * @param {?=} asyncValidator
     * @return {?}
     */
    FormBuilderTypedService.prototype.control = /**
     * @template T
     * @param {?=} formState
     * @param {?=} validatorOrOpts
     * @param {?=} asyncValidator
     * @return {?}
     */
    function (formState, validatorOrOpts, asyncValidator) {
        /** @type {?} */
        var control = (/** @type {?} */ (_super.prototype.control.call(this, formState, validatorOrOpts, asyncValidator)));
        return control;
    };
    /**
     * @template T
     * @param {?} controlsConfig
     * @param {?=} extra
     * @return {?}
     */
    FormBuilderTypedService.prototype.array = /**
     * @template T
     * @param {?} controlsConfig
     * @param {?=} extra
     * @return {?}
     */
    function (controlsConfig, extra) {
        /** @type {?} */
        var arr = (/** @type {?} */ (_super.prototype.array.call(this, controlsConfig, extra)));
        return arr;
    };
    // override group to be type safe
    // override group to be type safe
    /**
     * @template T
     * @param {?} controlsConfig
     * @param {?=} extra
     * @return {?}
     */
    FormBuilderTypedService.prototype.group = 
    // override group to be type safe
    /**
     * @template T
     * @param {?} controlsConfig
     * @param {?=} extra
     * @return {?}
     */
    function (controlsConfig, extra) {
        /*NOTE the return FormGroupTypeSafe<T> */
        /*NOTE the return FormGroupTypeSafe<T> */
        // instantiate group from angular type
        /** @type {?} */
        var gr = (/** @type {?} */ (_super.prototype.group.call(this, controlsConfig, extra)));
        if (extra) {
            gr.label = extra['label'];
        }
        /** @type {?} */
        var getPropertyName = (/**
         * @param {?} propertyFunction
         * @return {?}
         */
        function (propertyFunction) {
            //  https://github.com/dsherret/ts-nameof - helped me with the code below, THANX!!!!
            // propertyFunction.toString() sample value:
            //   function(x) { return x.hero.address.postcode;}
            // we need the 'hero.address.postcode'
            // for gr.get('hero.address.postcode') function
            /** @type {?} */
            var properties = propertyFunction
                .toString()
                .split('.')
                .splice(1);
            /** @type {?} */
            var r = properties.join('.');
            return r;
        });
        if (gr) {
            // implement getSafe method
            gr.getSafe = (/**
             * @param {?} propertyFunction
             * @return {?}
             */
            function (propertyFunction) {
                /** @type {?} */
                var getStr = getPropertyName(propertyFunction);
                // console.log(getStr);
                /** @type {?} */
                var p = (/** @type {?} */ (gr.get(getStr)));
                return p;
            });
            // implement setControlSafe
            gr.setControlSafe = (/**
             * @param {?} propertyFunction
             * @param {?} control
             * @return {?}
             */
            function (propertyFunction, control) {
                /** @type {?} */
                var getStr = getPropertyName(propertyFunction);
                // console.log(getStr);
                gr.setControl(getStr, control);
            });
        }
        return gr;
    };
    FormBuilderTypedService.decorators = [
        { type: Injectable }
    ];
    return FormBuilderTypedService;
}(FormBuilder));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} input
 * @return {?}
 */
function ConvertToTitleCase(input) {
    /** @type {?} */
    var capitalsWithSpaces = input.replace(/([A-Z])/g, ' $1').trim();
    /** @type {?} */
    var underscoresToSpaces = capitalsWithSpaces.replace(/_/g, ' ');
    return underscoresToSpaces
        .split(' ')
        .map((/**
     * @param {?} p
     * @return {?}
     */
    function (p) { return p.charAt(0).toUpperCase() + p.substr(1).toLowerCase(); }))
        .join(' ');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var FormBase = /** @class */ (function () {
    function FormBase() {
        var _this = this;
        this.internalControl = new FormControl();
        this._destroyed = new Subject();
        this.disabled = false;
        this.debug = false;
        this.propagateOnChange = (/**
         * @return {?}
         */
        function () { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
        // Garrentee that init and destroy are called
        // even if ngOnInit() or ngOnDestroy() are overriden
        /** @type {?} */
        var originalOnDestroy = this.ngOnDestroy;
        this.ngOnDestroy = (/**
         * @return {?}
         */
        function () {
            _this.destroy();
            originalOnDestroy.apply(_this);
        });
        /** @type {?} */
        var originalOnInit = this.ngOnInit;
        this.ngOnInit = (/**
         * @return {?}
         */
        function () {
            _this.init();
            originalOnInit.apply(_this);
        });
    }
    /**
     * @return {?}
     */
    FormBase.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    FormBase.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    FormBase.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._destroyed.next();
        if (!this.allowAutoComplete) {
            this.autoCompleteObscureName = v4();
        }
        this.internalControl.valueChanges
            .pipe(takeUntil(this._destroyed))
            .pipe(auditTime(100))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this._value = _this.internalControl.value;
            _this.onChange(_this._value);
            _this.onTouched();
            // console.log('form-base-class: valueChanges', {val: this._value});
        }));
        if (!this.placeholder) {
            /** @type {?} */
            var nameParsed = ConvertToTitleCase(this.formControlName + '');
            this.placeholder = nameParsed;
        }
    };
    /**
     * @return {?}
     */
    FormBase.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next();
    };
    Object.defineProperty(FormBase.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._value = val;
            this.internalControl.setValue(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    FormBase.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FormBase.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateOnChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FormBase.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    FormBase.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        var _this = this;
        this.disabled = isDisabled;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (isDisabled) {
                _this.internalControl.disable();
            }
            else {
                _this.internalControl.enable();
            }
        }));
    };
    /**
     * @param {?} c
     * @return {?}
     */
    FormBase.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        /** @type {?} */
        var errors = c.errors;
        /** @type {?} */
        var value = c.value;
        // console.log('form-base-class: validate()', { errors, value });
        this.internalControl.setValidators(c.validator);
        return !this.validationError
            ? null
            : {
                validationError: {
                    valid: false
                }
            };
    };
    /**
     * @private
     * @param {?} inputValue
     * @return {?}
     */
    FormBase.prototype.onChange = /**
     * @private
     * @param {?} inputValue
     * @return {?}
     */
    function (inputValue) {
        this.validationError = this.CheckValueIsValid();
        if (this.validationError) {
            this.propagateOnChange(this.value);
        }
        else {
            this.propagateOnChange(inputValue);
        }
    };
    /**
     * @return {?}
     */
    FormBase.prototype.CheckValueIsValid = /**
     * @return {?}
     */
    function () {
        return null;
    };
    FormBase.propDecorators = {
        appearance: [{ type: Input }],
        allowAutoComplete: [{ type: Input }],
        formControlName: [{ type: Input }],
        placeholder: [{ type: Input }],
        debug: [{ type: Input }]
    };
    return FormBase;
}());
if (false) {
    /** @type {?} */
    FormBase.prototype.internalControl;
    /** @type {?} */
    FormBase.prototype.autoCompleteObscureName;
    /** @type {?} */
    FormBase.prototype._destroyed;
    /** @type {?} */
    FormBase.prototype.disabled;
    /** @type {?} */
    FormBase.prototype.validationError;
    /** @type {?} */
    FormBase.prototype._validators;
    /** @type {?} */
    FormBase.prototype._value;
    /** @type {?} */
    FormBase.prototype.appearance;
    /** @type {?} */
    FormBase.prototype.allowAutoComplete;
    /** @type {?} */
    FormBase.prototype.formControlName;
    /** @type {?} */
    FormBase.prototype.placeholder;
    /** @type {?} */
    FormBase.prototype.debug;
    /** @type {?} */
    FormBase.prototype.propagateOnChange;
    /** @type {?} */
    FormBase.prototype.onTouched;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibFormColorComponent = /** @class */ (function (_super) {
    __extends(LibFormColorComponent, _super);
    function LibFormColorComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultColor = '#42d742';
        return _this;
    }
    /**
     * @return {?}
     */
    LibFormColorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.value) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.value = _this.defaultColor;
            }));
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    LibFormColorComponent.prototype.onClickClear = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        this.value = '';
    };
    LibFormColorComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-color',
                    template: "\n    <mat-form-field [appearance]=\"appearance\" class=\"full-width m-top\">\n      <span [class.txt-grey]=\"disabled\">\n        {{ placeholder }}\n      </span>\n      <input\n        matInput\n        [hidden]=\"true\"\n        [formControl]=\"internalControl\"\n        [name]=\"autoCompleteObscureName\"\n        autocomplete=\"dontcompleteme\"\n      />\n      <mat-card\n        *ngIf=\"!disabled\"\n        [cpOutputFormat]=\"'hex'\"\n        class=\"box has-pointer\"\n        [style.background]=\"value\"\n        [(colorPicker)]=\"value\"\n        [cpPosition]=\"'top'\"\n      >\n        <div class=\"flex-space-between\">\n          <span>\n            {{ value ? value : 'click to pick color' }}\n          </span>\n          <button\n            mat-mini-fab\n            (click)=\"onClickClear($event)\"\n            [disabled]=\"disabled\"\n            matTooltip=\"Clear current color\"\n            class=\"bg-white close-btn\"\n          >\n            <mat-icon class=\"txt-black\">\n              clear\n            </mat-icon>\n          </button>\n        </div>\n      </mat-card>\n      <mat-card\n        *ngIf=\"disabled\"\n        class=\"box\"\n        [style.background]=\"value\"\n      >\n        <div class=\"flex-space-between\">\n          <span>\n            {{ value ? value : 'click to pick color' }}\n          </span>\n          <span>\n          </span>\n        </div>\n      </mat-card>\n    </mat-form-field>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormColorComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormColorComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .close-btn {\n        position: absolute;\n        right: -4px;\n        top: -4px;\n        transform: scale(0.6);\n      }\n      .m-top {\n        margin-top: -20px;\n      }\n      .bg-white {\n        background-color: white !important;\n      }\n      .txt-black {\n        color: black;\n      }\n      .txt-grey {\n        color: grey;\n      }\n      .full-width {\n        width: 100%;\n      }\n      .box {\n        max-width: 200px;\n      }\n      .has-pointer {\n        cursor: pointer;\n      }\n      .flex-space-between {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n      }\n    "]
                }] }
    ];
    LibFormColorComponent.propDecorators = {
        defaultColor: [{ type: Input }]
    };
    return LibFormColorComponent;
}(FormBase));
if (false) {
    /** @type {?} */
    LibFormColorComponent.prototype.defaultColor;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SimpleLog = /** @class */ (function () {
    function SimpleLog(debug) {
        this.debug = debug;
    }
    Object.defineProperty(SimpleLog.prototype, "log", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.debug) {
                return (/**
                 * @param {...?} any
                 * @return {?}
                 */
                function () {
                    var any = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        any[_i] = arguments[_i];
                    }
                });
            }
            /** @type {?} */
            var boundLogFn = console.log.bind(console, 'mat-reduce:: ');
            return boundLogFn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleLog.prototype, "warn", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.debug) {
                return (/**
                 * @param {...?} any
                 * @return {?}
                 */
                function () {
                    var any = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        any[_i] = arguments[_i];
                    }
                });
            }
            /** @type {?} */
            var boundLogFn = console.warn.bind(console, 'mat-reduce:: ');
            return boundLogFn;
        },
        enumerable: true,
        configurable: true
    });
    return SimpleLog;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SimpleLog.prototype.debug;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibFormDateComponent = /** @class */ (function (_super) {
    __extends(LibFormDateComponent, _super);
    function LibFormDateComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.placeholder = '';
        return _this;
    }
    /**
     * @return {?}
     */
    LibFormDateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.logger = new SimpleLog(this.debug);
    };
    Object.defineProperty(LibFormDateComponent.prototype, "minDate", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.AfterDate) {
                return this.AfterDate;
            }
            if (this.isAfterToday) {
                return new Date();
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LibFormDateComponent.prototype.CheckValueIsValid = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var formValue = this.value;
        /** @type {?} */
        var formDate = formValue;
        if (typeof formValue === 'string' || !formValue) {
            formDate = new Date(formValue);
        }
        this.logger.log('form-date: CheckValueIsValid()', {
            formValue: formValue,
            formDate: formDate,
            isAfterToday: this.isAfterToday,
            isAfterDate: this.AfterDate
        });
        if (this.isAfterToday) {
            /** @type {?} */
            var todaysDate = new Date();
            /** @type {?} */
            var isAfterToday = this.isNewDateAfterThis(formDate, todaysDate);
            if (!isAfterToday) {
                return 'Date must be after today\'s date';
            }
        }
        if (this.AfterDate) {
            /** @type {?} */
            var isAfterDate = this.isNewDateAfterThis(formDate, this.AfterDate);
            if (!isAfterDate) {
                return 'Date must be after date: ' + this.AfterDate.toDateString();
            }
        }
        return null;
    };
    /**
     * @private
     * @param {?} formDate
     * @param {?} afterDate
     * @return {?}
     */
    LibFormDateComponent.prototype.isNewDateAfterThis = /**
     * @private
     * @param {?} formDate
     * @param {?} afterDate
     * @return {?}
     */
    function (formDate, afterDate) {
        this.logger.log('form-date: isNewDateAfterThis()', {
            formDate: formDate,
            afterDate: afterDate
        });
        if (!formDate || typeof formDate.getTime !== 'function') {
            console.error('the form control value is not a valid Date', { formDate: formDate });
            throw new Error();
        }
        if (!afterDate || typeof afterDate.getTime !== 'function') {
            console.error('AfterDate is not a valid Date', { afterDate: afterDate });
            throw new Error();
        }
        /** @type {?} */
        var afterSeconds = afterDate.getTime();
        /** @type {?} */
        var formSeconds = formDate.getTime();
        /** @type {?} */
        var isAfter = afterSeconds < formSeconds;
        this.logger.log('form-date: isNewDateAfterThis()', {
            afterSeconds: afterSeconds,
            formSeconds: formSeconds,
            isAfter: isAfter
        });
        return isAfter;
    };
    LibFormDateComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-date',
                    template: "\n    <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n      <input\n        matInput\n        (focus)=\"picker.open()\"\n        [min]=\"minDate\"\n        [matDatepicker]=\"picker\"\n        [disabled]=\"disabled\"\n        [placeholder]=\"placeholder\"\n        [(ngModel)]=\"value\"\n        [name]=\"autoCompleteObscureName\"\n        autocomplete=\"dontcompleteme\"\n      />\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormDateComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormDateComponent; })),
                            multi: true
                        }
                    ]
                }] }
    ];
    LibFormDateComponent.propDecorators = {
        placeholder: [{ type: Input }],
        isAfterToday: [{ type: Input }],
        AfterDate: [{ type: Input }]
    };
    return LibFormDateComponent;
}(FormBase));
if (false) {
    /** @type {?} */
    LibFormDateComponent.prototype.placeholder;
    /** @type {?} */
    LibFormDateComponent.prototype.isAfterToday;
    /** @type {?} */
    LibFormDateComponent.prototype.AfterDate;
    /** @type {?} */
    LibFormDateComponent.prototype.logger;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibFormTimeComponent = /** @class */ (function (_super) {
    __extends(LibFormTimeComponent, _super);
    function LibFormTimeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.placeholder = '';
        return _this;
    }
    LibFormTimeComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-time',
                    template: "\n    <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n      <input\n        matInput\n        [formControl]=\"internalControl\"\n        [ngxTimepicker]=\"picker\"\n        [placeholder]=\"placeholder\"\n        [format]=\"format\"\n        [min]=\"min\"\n        [max]=\"max\"\n        [name]=\"autoCompleteObscureName\"\n        autocomplete=\"false\"\n      />\n      <mat-icon\n        matSuffix\n        class=\"has-pointer\"\n        [class.is-grey]=\"disabled\"\n        (click)=\"picker.open()\"\n      >\n        access_time\n      </mat-icon>\n      <ngx-material-timepicker\n        #picker\n        [defaultTime]=\"defaultTime\"\n        [minutesGap]=\"minutesGap\"\n        ESC=\"true\"\n      ></ngx-material-timepicker>\n    </mat-form-field>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormTimeComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormTimeComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .is-grey {\n        color: #aaa;\n      }\n      .has-pointer {\n        cursor: pointer;\n      }\n      .full-width {\n        width: 100%;\n      }\n    "]
                }] }
    ];
    LibFormTimeComponent.propDecorators = {
        placeholder: [{ type: Input }],
        format: [{ type: Input }],
        min: [{ type: Input }],
        max: [{ type: Input }],
        defaultTime: [{ type: Input }],
        minutesGap: [{ type: Input }],
        required: [{ type: Input }]
    };
    return LibFormTimeComponent;
}(FormBase));
if (false) {
    /** @type {?} */
    LibFormTimeComponent.prototype.placeholder;
    /** @type {?} */
    LibFormTimeComponent.prototype.format;
    /** @type {?} */
    LibFormTimeComponent.prototype.min;
    /** @type {?} */
    LibFormTimeComponent.prototype.max;
    /** @type {?} */
    LibFormTimeComponent.prototype.defaultTime;
    /** @type {?} */
    LibFormTimeComponent.prototype.minutesGap;
    /** @type {?} */
    LibFormTimeComponent.prototype.required;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibFormSignatureComponent = /** @class */ (function (_super) {
    __extends(LibFormSignatureComponent, _super);
    function LibFormSignatureComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.placeholder = 'Sign Here';
        _this.blankImageSrc = 'https://i.imgur.com/4StmpUT.png';
        _this.signaturePadOptions = {
            minWidth: 2,
            canvasWidth: 400,
            canvasHeight: 200
        };
        return _this;
    }
    /**
     * @return {?}
     */
    LibFormSignatureComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.autoCompleteObscureName = v1();
    };
    /**
     * @return {?}
     */
    LibFormSignatureComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateWidthToParent();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    LibFormSignatureComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.setSignatureToPad();
    };
    /**
     * @return {?}
     */
    LibFormSignatureComponent.prototype.updateWidthToParent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pad = this.signaturePad.nativeElement;
        if (!pad) {
            return;
        }
        /** @type {?} */
        var containerWidth = this.container.nativeElement.clientWidth;
        if (containerWidth < 600) {
            /** @type {?} */
            var marginLeftAndRight = 20 * 2;
            pad.set('canvasWidth', containerWidth - marginLeftAndRight - 10);
        }
    };
    /**
     * @return {?}
     */
    LibFormSignatureComponent.prototype.setSignatureToPad = /**
     * @return {?}
     */
    function () {
        // Set current signature from control
        /** @type {?} */
        var currentSignature = this.value;
        if (!this.signaturePad || !currentSignature) {
            return;
        }
        /** @type {?} */
        var pad = this.signaturePad.nativeElement;
        pad.fromDataURL(currentSignature);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    LibFormSignatureComponent.prototype.drawComplete = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!e) {
            return;
        }
        /** @type {?} */
        var imgData = e.toDataURL();
        this.value = imgData;
    };
    LibFormSignatureComponent.decorators = [
        { type: Component, args: [{
                    selector: 'form-signature',
                    template: "\n    <h3>{{ placeholder }}</h3>\n    <div #container class=\"signature-container\">\n      <div class=\"signature-border\" [class.disabled-border]=\"disabled\">\n        <signature-pad\n          #signaturePad\n          [hidden]=\"disabled\"\n          [options]=\"signaturePadOptions\"\n          (onEndEvent)=\"drawComplete(signaturePad)\"\n        ></signature-pad>\n        <img [hidden]=\"!disabled\" [src]=\"this.value || blankImageSrc\" />\n      </div>\n    </div>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormSignatureComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormSignatureComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      h3 {\n        display: inline-block;\n        margin-bottom: 0;\n      }\n      .signature-container {\n        display: inline-block;\n        width: 100%;\n      }\n      .signature-border {\n        display: inline-block;\n        border: 1px #777 solid;\n        margin: 20px;\n        height: 200px;\n      }\n      .disabled-border {\n        border: 2px #aaa dotted;\n      }\n      img {\n        height: 100%;\n      }\n    "]
                }] }
    ];
    LibFormSignatureComponent.propDecorators = {
        placeholder: [{ type: Input }],
        signaturePad: [{ type: ViewChild, args: ['signaturePad', (/** @type {?} */ ({ static: false })),] }],
        container: [{ type: ViewChild, args: ['container',] }]
    };
    return LibFormSignatureComponent;
}(FormBase));
if (false) {
    /** @type {?} */
    LibFormSignatureComponent.prototype.placeholder;
    /** @type {?} */
    LibFormSignatureComponent.prototype.blankImageSrc;
    /** @type {?} */
    LibFormSignatureComponent.prototype.signaturePadOptions;
    /** @type {?} */
    LibFormSignatureComponent.prototype.signaturePad;
    /** @type {?} */
    LibFormSignatureComponent.prototype.container;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function QuillCounterConfig() { }
if (false) {
    /** @type {?} */
    QuillCounterConfig.prototype.container;
    /** @type {?} */
    QuillCounterConfig.prototype.units;
}
/**
 * @record
 */
function QuillInstance() { }
if (false) {
    /** @type {?} */
    QuillInstance.prototype.on;
    /** @type {?} */
    QuillInstance.prototype.getText;
    /** @type {?} */
    QuillInstance.prototype.root;
}
var Counter = /** @class */ (function () {
    function Counter(quill, options) {
        var _this = this;
        this.updateTrigger = new Subject();
        this.quill = quill;
        this.options = options;
        /** @type {?} */
        var container = document.querySelector(this.options.container);
        this.quill.on('text-change', (/**
         * @return {?}
         */
        function () {
            _this.updateTrigger.next();
        }));
        this.updateTrigger.pipe(debounceTime(2000)).subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var length = _this.calculate();
            container.innerHTML = length + ' ' + _this.options.units;
            // console.log('form-html-editor: updating counter =' + container.innerHTML);
        }));
    }
    /**
     * @return {?}
     */
    Counter.prototype.calculate = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var text = this.quill.getText().trim();
        if (this.options.units === 'words') {
            return !text ? 0 : text.split(/\s+/).length;
        }
        if (this.options.units === 'kb') {
            /** @type {?} */
            var html = this.quill.root.innerHTML;
            return Math.round(html.length / 1024);
        }
        return text.length;
    };
    return Counter;
}());
if (false) {
    /** @type {?} */
    Counter.prototype.quill;
    /** @type {?} */
    Counter.prototype.options;
    /** @type {?} */
    Counter.prototype.updateTrigger;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} Quill
 * @return {?}
 */
function AddQuillInlineStyles(Quill) {
    // configure Quill to use inline styles so the email's format properly
    /** @type {?} */
    var DirectionAttribute = Quill.import('attributors/attribute/direction');
    Quill.register(DirectionAttribute, true);
    /** @type {?} */
    var AlignClass = Quill.import('attributors/class/align');
    Quill.register(AlignClass, true);
    /** @type {?} */
    var BackgroundClass = Quill.import('attributors/class/background');
    Quill.register(BackgroundClass, true);
    /** @type {?} */
    var ColorClass = Quill.import('attributors/class/color');
    Quill.register(ColorClass, true);
    /** @type {?} */
    var DirectionClass = Quill.import('attributors/class/direction');
    Quill.register(DirectionClass, true);
    /** @type {?} */
    var FontClass = Quill.import('attributors/class/font');
    Quill.register(FontClass, true);
    /** @type {?} */
    var SizeClass = Quill.import('attributors/class/size');
    Quill.register(SizeClass, true);
    /** @type {?} */
    var AlignStyle = Quill.import('attributors/style/align');
    Quill.register(AlignStyle, true);
    /** @type {?} */
    var BackgroundStyle = Quill.import('attributors/style/background');
    Quill.register(BackgroundStyle, true);
    /** @type {?} */
    var ColorStyle = Quill.import('attributors/style/color');
    Quill.register(ColorStyle, true);
    /** @type {?} */
    var DirectionStyle = Quill.import('attributors/style/direction');
    Quill.register(DirectionStyle, true);
    /** @type {?} */
    var FontStyle = Quill.import('attributors/style/font');
    Quill.register(FontStyle, true);
    /** @type {?} */
    var SizeStyle = Quill.import('attributors/style/size');
    Quill.register(SizeStyle, true);
    // create new Quill instance after...
    /** @type {?} */
    var BaseImageFormat = Quill.import('formats/image');
    /** @type {?} */
    var ImageFormatAttributesList = ['alt', 'height', 'width', 'style'];
    var ImageFormat = /** @class */ (function (_super) {
        __extends(ImageFormat, _super);
        function ImageFormat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} domNode
         * @return {?}
         */
        ImageFormat.formats = /**
         * @param {?} domNode
         * @return {?}
         */
        function (domNode) {
            return ImageFormatAttributesList.reduce((/**
             * @param {?} formats
             * @param {?} attribute
             * @return {?}
             */
            function (formats, attribute) {
                if (domNode.hasAttribute(attribute)) {
                    formats[attribute] = domNode.getAttribute(attribute);
                }
                return formats;
            }), {});
        };
        /**
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        ImageFormat.prototype.format = /**
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        function (name, value) {
            if (ImageFormatAttributesList.indexOf(name) > -1) {
                if (value) {
                    this.domNode.setAttribute(name, value);
                }
                else {
                    this.domNode.removeAttribute(name);
                }
            }
            else {
                _super.prototype.format.call(this, name, value);
            }
        };
        return ImageFormat;
    }(BaseImageFormat));
    Quill.register(ImageFormat, true);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var Quill = QuillNamespace;
AddQuillInlineStyles(Quill);
Quill.register('modules/htmlEditButton', htmlEditButton);
Quill.register('modules/counter', Counter);
Quill.register('modules/counterChars', Counter);
Quill.register('modules/counterKiloBytes', Counter);
Quill.register('modules/imageDrop', ImageDrop);
Quill.register('modules/imageCompress', ImageCompress);
Quill.register('modules/imageResize', ImageResize);
var LibFormQuillEditorComponent = /** @class */ (function (_super) {
    __extends(LibFormQuillEditorComponent, _super);
    function LibFormQuillEditorComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.quillModules = {};
        _this.maxImageWidth = 2000;
        _this.placeholder = 'Input content here...';
        _this.quillModulesUsed = {};
        _this.onContentChanged = new Subject();
        _this.destroyed = new Subject();
        return _this;
    }
    /**
     * @return {?}
     */
    LibFormQuillEditorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.logger = new SimpleLog(this.debug);
        /** @type {?} */
        var quillModulesDefaults = {
            toolbar: '#toolbar',
            counter: (/** @type {?} */ ({ container: '#counter', units: 'words' })),
            counterChars: (/** @type {?} */ ({ container: '#counterChars', units: 'chars' })),
            counterKiloBytes: (/** @type {?} */ ({ container: '#counterKiloBytes', units: 'kb' })),
            imageDrop: true,
            imageCompress: {
                quality: 0.7,
                maxWidth: 1200
            },
            clipboard: {
                matchVisual: false
            },
            imageResize: true
        };
        this.quillModulesUsed = __assign({}, quillModulesDefaults, this.quillModules);
        this.onContentChanged
            .pipe(debounceTime(1000), takeUntil(this.destroyed), distinctUntilChanged())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var htmlValue = event.html || '<p></p>';
            _this.logger.log('LibFormQuillEditorComponent:', { htmlValue: htmlValue, event: event });
            _this.writeValue(htmlValue);
        }));
    };
    /**
     * @return {?}
     */
    LibFormQuillEditorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed.next();
    };
    LibFormQuillEditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'form-quill-editor',
                    template: "\n    <div [class.editor-disabled]=\"disabled\">\n      <quill-editor\n        (onContentChanged)=\"onContentChanged.next($event)\"\n        [ngModel]=\"value\"\n        [modules]=\"quillModulesUsed\"\n        [disabled]=\"disabled\"\n        [placeholder]=\"placeholder\"\n      >\n        <div quill-editor-toolbar>\n          <span class=\"ql-formats\">\n            <select class=\"ql-font\">\n              <option selected></option>\n              <option value=\"serif\"></option>\n              <option value=\"monospace\"></option>\n            </select>\n            <select class=\"ql-header\">\n              <option value=\"1\"></option>\n              <option value=\"2\"></option>\n              <option value=\"3\"></option>\n              <option value=\"4\"></option>\n              <option value=\"5\"></option>\n              <option value=\"6\"></option>\n              <option selected></option>\n            </select>\n          </span>\n          <span class=\"ql-formats\">\n            <button class=\"ql-bold\"></button>\n            <button class=\"ql-italic\"></button>\n            <button class=\"ql-underline\"></button>\n            <button class=\"ql-strike\"></button>\n          </span>\n          <span class=\"ql-formats\">\n            <select class=\"ql-color\"></select>\n            <select class=\"ql-background\"></select>\n          </span>\n          <span class=\"ql-formats\">\n            <button class=\"ql-list\" value=\"ordered\"></button>\n            <button class=\"ql-list\" value=\"bullet\"></button>\n            <select class=\"ql-align\">\n              <option selected></option>\n              <option value=\"center\"></option>\n              <option value=\"right\"></option>\n              <option value=\"justify\"></option>\n            </select>\n          </span>\n          <span class=\"ql-formats\">\n            <button class=\"ql-link\"></button>\n            <button class=\"ql-image\"></button>\n          </span>\n          <span class=\"ql-formats font12px\">\n            <div id=\"counter\"></div>\n          </span>\n          <span class=\"ql-formats font12px\">\n            <div id=\"counterChars\"></div>\n          </span>\n          <span class=\"ql-formats font12px\">\n            <div id=\"counterKiloBytes\"></div>\n          </span>\n        </div>\n      </quill-editor>\n    </div>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormQuillEditorComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormQuillEditorComponent; })),
                            multi: true
                        }
                    ],
                    encapsulation: ViewEncapsulation.None,
                    styles: ["\n      .font12px {\n        font-size: 12px;\n      }\n      .editor-disabled {\n        filter: contrast(0.4) brightness(1.5);\n      }\n      .ql-editor {\n        white-space: normal !important;\n      }\n    ", "/*!\n * Quill Editor v1.3.7\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */.ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative}.ql-container.ql-disabled .ql-tooltip{visibility:hidden}.ql-container.ql-disabled .ql-editor ul[data-checked]>li::before{pointer-events:none}.ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.ql-clipboard p{margin:0;padding:0}.ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:0;overflow-y:auto;padding:12px 15px;-o-tab-size:4;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.ql-editor>*{cursor:text}.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre,.ql-editor ul{margin:0;padding:0;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol,.ql-editor ul{padding-left:1.5em}.ql-editor ol>li,.ql-editor ul>li{list-style-type:none}.ql-editor ul>li::before{content:'\\2022'}.ql-editor ul[data-checked=false],.ql-editor ul[data-checked=true]{pointer-events:none}.ql-editor ul[data-checked=false]>li *,.ql-editor ul[data-checked=true]>li *{pointer-events:all}.ql-editor ul[data-checked=false]>li::before,.ql-editor ul[data-checked=true]>li::before{color:#777;cursor:pointer;pointer-events:all}.ql-editor ul[data-checked=true]>li::before{content:'\\2611'}.ql-editor ul[data-checked=false]>li::before{content:'\\2610'}.ql-editor li::before{display:inline-block;white-space:nowrap;width:1.2em}.ql-editor li:not(.ql-direction-rtl)::before{margin-left:-1.5em;margin-right:.3em;text-align:right}.ql-editor li.ql-direction-rtl::before{margin-left:.3em;margin-right:-1.5em}.ql-editor ol li:not(.ql-direction-rtl),.ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.ql-editor ol li.ql-direction-rtl,.ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.ql-editor ol li:before{content:counter(list-0,decimal) '. '}.ql-editor ol li.ql-indent-1{counter-increment:list-1;counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) '. '}.ql-editor ol li.ql-indent-2{counter-increment:list-2;counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) '. '}.ql-editor ol li.ql-indent-3{counter-increment:list-3;counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) '. '}.ql-editor ol li.ql-indent-4{counter-increment:list-4;counter-reset:list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) '. '}.ql-editor ol li.ql-indent-5{counter-increment:list-5;counter-reset:list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) '. '}.ql-editor ol li.ql-indent-6{counter-increment:list-6;counter-reset:list-7 list-8 list-9}.ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) '. '}.ql-editor ol li.ql-indent-7{counter-increment:list-7;counter-reset:list-8 list-9}.ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) '. '}.ql-editor ol li.ql-indent-8{counter-increment:list-8;counter-reset:list-9}.ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) '. '}.ql-editor ol li.ql-indent-9{counter-increment:list-9}.ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) '. '}.ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.ql-editor .ql-video{display:block;max-width:100%}.ql-editor .ql-video.ql-align-center{margin:0 auto}.ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.ql-editor .ql-bg-black{background-color:#000}.ql-editor .ql-bg-red{background-color:#e60000}.ql-editor .ql-bg-orange{background-color:#f90}.ql-editor .ql-bg-yellow{background-color:#ff0}.ql-editor .ql-bg-green{background-color:#008a00}.ql-editor .ql-bg-blue{background-color:#06c}.ql-editor .ql-bg-purple{background-color:#93f}.ql-editor .ql-color-white{color:#fff}.ql-editor .ql-color-red{color:#e60000}.ql-editor .ql-color-orange{color:#f90}.ql-editor .ql-color-yellow{color:#ff0}.ql-editor .ql-color-green{color:#008a00}.ql-editor .ql-color-blue{color:#06c}.ql-editor .ql-color-purple{color:#93f}.ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.ql-editor .ql-size-small{font-size:.75em}.ql-editor .ql-size-large{font-size:1.5em}.ql-editor .ql-size-huge{font-size:2.5em}.ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.ql-editor .ql-align-center{text-align:center}.ql-editor .ql-align-justify{text-align:justify}.ql-editor .ql-align-right{text-align:right}.ql-editor.ql-blank::before{color:rgba(0,0,0,.6);content:attr(data-placeholder);font-style:italic;left:15px;pointer-events:none;position:absolute;right:15px}.ql-snow .ql-toolbar:after,.ql-snow.ql-toolbar:after{clear:both;content:'';display:table}.ql-snow .ql-toolbar button,.ql-snow.ql-toolbar button{background:0 0;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.ql-snow .ql-toolbar button svg,.ql-snow.ql-toolbar button svg{float:left;height:100%}.ql-snow .ql-toolbar button:active:hover,.ql-snow.ql-toolbar button:active:hover{outline:0}.ql-snow .ql-toolbar input.ql-image[type=file],.ql-snow.ql-toolbar input.ql-image[type=file]{display:none}.ql-snow .ql-toolbar .ql-picker-item.ql-selected,.ql-snow .ql-toolbar .ql-picker-item:hover,.ql-snow .ql-toolbar .ql-picker-label.ql-active,.ql-snow .ql-toolbar .ql-picker-label:hover,.ql-snow .ql-toolbar button.ql-active,.ql-snow .ql-toolbar button:focus,.ql-snow .ql-toolbar button:hover,.ql-snow.ql-toolbar .ql-picker-item.ql-selected,.ql-snow.ql-toolbar .ql-picker-item:hover,.ql-snow.ql-toolbar .ql-picker-label.ql-active,.ql-snow.ql-toolbar .ql-picker-label:hover,.ql-snow.ql-toolbar button.ql-active,.ql-snow.ql-toolbar button:focus,.ql-snow.ql-toolbar button:hover{color:#06c}.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:focus .ql-fill,.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover .ql-fill,.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:focus .ql-fill,.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover .ql-fill,.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill{fill:#06c}.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow .ql-toolbar button.ql-active .ql-stroke,.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar button:focus .ql-stroke,.ql-snow .ql-toolbar button:focus .ql-stroke-miter,.ql-snow .ql-toolbar button:hover .ql-stroke,.ql-snow .ql-toolbar button:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow.ql-toolbar button.ql-active .ql-stroke,.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar button:focus .ql-stroke,.ql-snow.ql-toolbar button:focus .ql-stroke-miter,.ql-snow.ql-toolbar button:hover .ql-stroke,.ql-snow.ql-toolbar button:hover .ql-stroke-miter{stroke:#06c}@media (pointer:coarse){.ql-snow .ql-toolbar button:hover:not(.ql-active),.ql-snow.ql-toolbar button:hover:not(.ql-active){color:#444}.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#444}}.ql-snow,.ql-snow *{box-sizing:border-box}.ql-snow .ql-hidden{display:none}.ql-snow .ql-out-bottom,.ql-snow .ql-out-top{visibility:hidden}.ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none;line-height:26px}.ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.ql-snow .ql-formats{display:inline-block;vertical-align:middle}.ql-snow .ql-formats:after{clear:both;content:'';display:table}.ql-snow .ql-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ql-snow .ql-stroke-miter{fill:none;stroke:#444;stroke-miterlimit:10;stroke-width:2}.ql-snow .ql-fill,.ql-snow .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-empty{fill:none}.ql-snow .ql-even{fill-rule:evenodd}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1}.ql-snow .ql-transparent{opacity:.4}.ql-snow .ql-direction svg:last-child{display:none}.ql-snow .ql-direction.ql-active svg:last-child{display:inline}.ql-snow .ql-direction.ql-active svg:first-child{display:none}.ql-snow .ql-editor h1{font-size:2em}.ql-snow .ql-editor h2{font-size:1.5em}.ql-snow .ql-editor h3{font-size:1.17em}.ql-snow .ql-editor h4{font-size:1em}.ql-snow .ql-editor h5{font-size:.83em}.ql-snow .ql-editor h6{font-size:.67em}.ql-snow .ql-editor a{text-decoration:underline}.ql-snow .ql-editor blockquote{border-left:4px solid #ccc;margin-bottom:5px;margin-top:5px;padding-left:16px}.ql-snow .ql-editor code,.ql-snow .ql-editor pre{background-color:#f0f0f0;border-radius:3px}.ql-snow .ql-editor pre{white-space:pre-wrap;margin-bottom:5px;margin-top:5px;padding:5px 10px}.ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.ql-snow .ql-editor pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}.ql-snow .ql-editor img{max-width:100%}.ql-snow .ql-picker{color:#444;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.ql-snow .ql-picker-label::before{display:inline-block;line-height:22px}.ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#ccc;z-index:2}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.ql-snow .ql-color-picker,.ql-snow .ql-icon-picker{width:28px}.ql-snow .ql-color-picker .ql-picker-label,.ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-label svg,.ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before{content:attr(data-label)}.ql-snow .ql-picker.ql-header{width:98px}.ql-snow .ql-picker.ql-header .ql-picker-item::before,.ql-snow .ql-picker.ql-header .ql-picker-label::before{content:'Normal'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before{content:'Heading 1'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before{content:'Heading 2'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before{content:'Heading 3'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before{content:'Heading 4'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before{content:'Heading 5'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before{content:'Heading 6'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before{font-size:2em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before{font-size:1.5em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before{font-size:1.17em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before{font-size:1em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before{font-size:.83em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before{font-size:.67em}.ql-snow .ql-picker.ql-font{width:108px}.ql-snow .ql-picker.ql-font .ql-picker-item::before,.ql-snow .ql-picker.ql-font .ql-picker-label::before{content:'Sans Serif'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before{content:'Serif'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before{content:'Monospace'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before{font-family:Georgia,Times New Roman,serif}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before{font-family:Monaco,Courier New,monospace}.ql-snow .ql-picker.ql-size{width:98px}.ql-snow .ql-picker.ql-size .ql-picker-item::before,.ql-snow .ql-picker.ql-size .ql-picker-label::before{content:'Normal'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before{content:'Small'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before{content:'Large'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before{content:'Huge'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before{font-size:10px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before{font-size:18px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before{font-size:32px}.ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.ql-toolbar.ql-snow{border:1px solid #ccc;box-sizing:border-box;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;padding:8px}.ql-toolbar.ql-snow .ql-formats{margin-right:15px}.ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:rgba(0,0,0,.2) 0 2px 8px}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label,.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#ccc}.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0}.ql-snow .ql-tooltip{background-color:#fff;border:1px solid #ccc;box-shadow:0 0 5px #ddd;color:#444;padding:5px 12px;white-space:nowrap}.ql-snow .ql-tooltip::before{content:\"Visit URL:\";line-height:26px;margin-right:8px}.ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #ccc;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.ql-snow .ql-tooltip a.ql-action::after{border-right:1px solid #ccc;content:'Edit';margin-left:16px;padding-right:8px}.ql-snow .ql-tooltip a.ql-remove::before{content:'Remove';margin-left:8px}.ql-snow .ql-tooltip.ql-editing a.ql-preview,.ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.ql-snow .ql-tooltip.ql-editing a.ql-action::after{border-right:0;content:'Save';padding-right:0}.ql-snow .ql-tooltip[data-mode=link]::before{content:\"Enter link:\"}.ql-snow .ql-tooltip[data-mode=formula]::before{content:\"Enter formula:\"}.ql-snow .ql-tooltip[data-mode=video]::before{content:\"Enter video:\"}.ql-snow a{color:#06c}.ql-container.ql-snow{border:1px solid #ccc}", "/*!\n * Quill Editor v1.3.7\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */.ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative}.ql-container.ql-disabled .ql-tooltip{visibility:hidden}.ql-container.ql-disabled .ql-editor ul[data-checked]>li::before{pointer-events:none}.ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.ql-clipboard p{margin:0;padding:0}.ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:0;overflow-y:auto;padding:12px 15px;-o-tab-size:4;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.ql-editor>*{cursor:text}.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre,.ql-editor ul{margin:0;padding:0;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol,.ql-editor ul{padding-left:1.5em}.ql-editor ol>li,.ql-editor ul>li{list-style-type:none}.ql-editor ul>li::before{content:'\\2022'}.ql-editor ul[data-checked=false],.ql-editor ul[data-checked=true]{pointer-events:none}.ql-editor ul[data-checked=false]>li *,.ql-editor ul[data-checked=true]>li *{pointer-events:all}.ql-editor ul[data-checked=false]>li::before,.ql-editor ul[data-checked=true]>li::before{color:#777;cursor:pointer;pointer-events:all}.ql-editor ul[data-checked=true]>li::before{content:'\\2611'}.ql-editor ul[data-checked=false]>li::before{content:'\\2610'}.ql-editor li::before{display:inline-block;white-space:nowrap;width:1.2em}.ql-editor li:not(.ql-direction-rtl)::before{margin-left:-1.5em;margin-right:.3em;text-align:right}.ql-editor li.ql-direction-rtl::before{margin-left:.3em;margin-right:-1.5em}.ql-editor ol li:not(.ql-direction-rtl),.ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.ql-editor ol li.ql-direction-rtl,.ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.ql-editor ol li:before{content:counter(list-0,decimal) '. '}.ql-editor ol li.ql-indent-1{counter-increment:list-1;counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) '. '}.ql-editor ol li.ql-indent-2{counter-increment:list-2;counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) '. '}.ql-editor ol li.ql-indent-3{counter-increment:list-3;counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) '. '}.ql-editor ol li.ql-indent-4{counter-increment:list-4;counter-reset:list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) '. '}.ql-editor ol li.ql-indent-5{counter-increment:list-5;counter-reset:list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) '. '}.ql-editor ol li.ql-indent-6{counter-increment:list-6;counter-reset:list-7 list-8 list-9}.ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) '. '}.ql-editor ol li.ql-indent-7{counter-increment:list-7;counter-reset:list-8 list-9}.ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) '. '}.ql-editor ol li.ql-indent-8{counter-increment:list-8;counter-reset:list-9}.ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) '. '}.ql-editor ol li.ql-indent-9{counter-increment:list-9}.ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) '. '}.ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.ql-editor .ql-video{display:block;max-width:100%}.ql-editor .ql-video.ql-align-center{margin:0 auto}.ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.ql-editor .ql-bg-black{background-color:#000}.ql-editor .ql-bg-red{background-color:#e60000}.ql-editor .ql-bg-orange{background-color:#f90}.ql-editor .ql-bg-yellow{background-color:#ff0}.ql-editor .ql-bg-green{background-color:#008a00}.ql-editor .ql-bg-blue{background-color:#06c}.ql-editor .ql-bg-purple{background-color:#93f}.ql-editor .ql-color-white{color:#fff}.ql-editor .ql-color-red{color:#e60000}.ql-editor .ql-color-orange{color:#f90}.ql-editor .ql-color-yellow{color:#ff0}.ql-editor .ql-color-green{color:#008a00}.ql-editor .ql-color-blue{color:#06c}.ql-editor .ql-color-purple{color:#93f}.ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.ql-editor .ql-size-small{font-size:.75em}.ql-editor .ql-size-large{font-size:1.5em}.ql-editor .ql-size-huge{font-size:2.5em}.ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.ql-editor .ql-align-center{text-align:center}.ql-editor .ql-align-justify{text-align:justify}.ql-editor .ql-align-right{text-align:right}.ql-editor.ql-blank::before{color:rgba(0,0,0,.6);content:attr(data-placeholder);font-style:italic;left:15px;pointer-events:none;position:absolute;right:15px}.ql-bubble .ql-toolbar:after,.ql-bubble.ql-toolbar:after{clear:both;content:'';display:table}.ql-bubble .ql-toolbar button,.ql-bubble.ql-toolbar button{background:0 0;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.ql-bubble .ql-toolbar button svg,.ql-bubble.ql-toolbar button svg{float:left;height:100%}.ql-bubble .ql-toolbar button:active:hover,.ql-bubble.ql-toolbar button:active:hover{outline:0}.ql-bubble .ql-toolbar input.ql-image[type=file],.ql-bubble.ql-toolbar input.ql-image[type=file]{display:none}.ql-bubble .ql-toolbar .ql-picker-item.ql-selected,.ql-bubble .ql-toolbar .ql-picker-item:hover,.ql-bubble .ql-toolbar .ql-picker-label.ql-active,.ql-bubble .ql-toolbar .ql-picker-label:hover,.ql-bubble .ql-toolbar button.ql-active,.ql-bubble .ql-toolbar button:focus,.ql-bubble .ql-toolbar button:hover,.ql-bubble.ql-toolbar .ql-picker-item.ql-selected,.ql-bubble.ql-toolbar .ql-picker-item:hover,.ql-bubble.ql-toolbar .ql-picker-label.ql-active,.ql-bubble.ql-toolbar .ql-picker-label:hover,.ql-bubble.ql-toolbar button.ql-active,.ql-bubble.ql-toolbar button:focus,.ql-bubble.ql-toolbar button:hover{color:#fff}.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-fill,.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-fill,.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-bubble .ql-toolbar button.ql-active .ql-fill,.ql-bubble .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-bubble .ql-toolbar button:focus .ql-fill,.ql-bubble .ql-toolbar button:focus .ql-stroke.ql-fill,.ql-bubble .ql-toolbar button:hover .ql-fill,.ql-bubble .ql-toolbar button:hover .ql-stroke.ql-fill,.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-fill,.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-fill,.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-bubble.ql-toolbar button.ql-active .ql-fill,.ql-bubble.ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-bubble.ql-toolbar button:focus .ql-fill,.ql-bubble.ql-toolbar button:focus .ql-stroke.ql-fill,.ql-bubble.ql-toolbar button:hover .ql-fill,.ql-bubble.ql-toolbar button:hover .ql-stroke.ql-fill{fill:#fff}.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-bubble .ql-toolbar button.ql-active .ql-stroke,.ql-bubble .ql-toolbar button.ql-active .ql-stroke-miter,.ql-bubble .ql-toolbar button:focus .ql-stroke,.ql-bubble .ql-toolbar button:focus .ql-stroke-miter,.ql-bubble .ql-toolbar button:hover .ql-stroke,.ql-bubble .ql-toolbar button:hover .ql-stroke-miter,.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-bubble.ql-toolbar button.ql-active .ql-stroke,.ql-bubble.ql-toolbar button.ql-active .ql-stroke-miter,.ql-bubble.ql-toolbar button:focus .ql-stroke,.ql-bubble.ql-toolbar button:focus .ql-stroke-miter,.ql-bubble.ql-toolbar button:hover .ql-stroke,.ql-bubble.ql-toolbar button:hover .ql-stroke-miter{stroke:#fff}@media (pointer:coarse){.ql-bubble .ql-toolbar button:hover:not(.ql-active),.ql-bubble.ql-toolbar button:hover:not(.ql-active){color:#ccc}.ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#ccc}.ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#ccc}}.ql-bubble,.ql-bubble *{box-sizing:border-box}.ql-bubble .ql-hidden{display:none}.ql-bubble .ql-out-bottom,.ql-bubble .ql-out-top{visibility:hidden}.ql-bubble .ql-tooltip{position:absolute;transform:translateY(10px)}.ql-bubble .ql-tooltip a{cursor:pointer;text-decoration:none}.ql-bubble .ql-tooltip.ql-flip{transform:translateY(-10px)}.ql-bubble .ql-formats{display:inline-block;vertical-align:middle}.ql-bubble .ql-formats:after{clear:both;content:'';display:table}.ql-bubble .ql-stroke{fill:none;stroke:#ccc;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ql-bubble .ql-stroke-miter{fill:none;stroke:#ccc;stroke-miterlimit:10;stroke-width:2}.ql-bubble .ql-fill,.ql-bubble .ql-stroke.ql-fill{fill:#ccc}.ql-bubble .ql-empty{fill:none}.ql-bubble .ql-even{fill-rule:evenodd}.ql-bubble .ql-stroke.ql-thin,.ql-bubble .ql-thin{stroke-width:1}.ql-bubble .ql-transparent{opacity:.4}.ql-bubble .ql-direction svg:last-child{display:none}.ql-bubble .ql-direction.ql-active svg:last-child{display:inline}.ql-bubble .ql-direction.ql-active svg:first-child{display:none}.ql-bubble .ql-editor h1{font-size:2em}.ql-bubble .ql-editor h2{font-size:1.5em}.ql-bubble .ql-editor h3{font-size:1.17em}.ql-bubble .ql-editor h4{font-size:1em}.ql-bubble .ql-editor h5{font-size:.83em}.ql-bubble .ql-editor h6{font-size:.67em}.ql-bubble .ql-editor a{text-decoration:underline}.ql-bubble .ql-editor blockquote{border-left:4px solid #ccc;margin-bottom:5px;margin-top:5px;padding-left:16px}.ql-bubble .ql-editor code,.ql-bubble .ql-editor pre{background-color:#f0f0f0;border-radius:3px}.ql-bubble .ql-editor pre{white-space:pre-wrap;margin-bottom:5px;margin-top:5px;padding:5px 10px}.ql-bubble .ql-editor code{font-size:85%;padding:2px 4px}.ql-bubble .ql-editor pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}.ql-bubble .ql-editor img{max-width:100%}.ql-bubble .ql-picker{color:#ccc;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.ql-bubble .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.ql-bubble .ql-picker-label::before{display:inline-block;line-height:22px}.ql-bubble .ql-picker-options{background-color:#444;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.ql-bubble .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.ql-bubble .ql-picker.ql-expanded .ql-picker-label{color:#777;z-index:2}.ql-bubble .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#777}.ql-bubble .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#777}.ql-bubble .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.ql-bubble .ql-color-picker,.ql-bubble .ql-icon-picker{width:28px}.ql-bubble .ql-color-picker .ql-picker-label,.ql-bubble .ql-icon-picker .ql-picker-label{padding:2px 4px}.ql-bubble .ql-color-picker .ql-picker-label svg,.ql-bubble .ql-icon-picker .ql-picker-label svg{right:4px}.ql-bubble .ql-icon-picker .ql-picker-options{padding:4px 0}.ql-bubble .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.ql-bubble .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.ql-bubble .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.ql-bubble .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ql-bubble .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,.ql-bubble .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,.ql-bubble .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,.ql-bubble .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before,.ql-bubble .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before{content:attr(data-label)}.ql-bubble .ql-picker.ql-header{width:98px}.ql-bubble .ql-picker.ql-header .ql-picker-item::before,.ql-bubble .ql-picker.ql-header .ql-picker-label::before{content:'Normal'}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before{content:'Heading 1'}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before{content:'Heading 2'}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before{content:'Heading 3'}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before{content:'Heading 4'}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before{content:'Heading 5'}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before{content:'Heading 6'}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before{font-size:2em}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before{font-size:1.5em}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before{font-size:1.17em}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before{font-size:1em}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before{font-size:.83em}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before{font-size:.67em}.ql-bubble .ql-picker.ql-font{width:108px}.ql-bubble .ql-picker.ql-font .ql-picker-item::before,.ql-bubble .ql-picker.ql-font .ql-picker-label::before{content:'Sans Serif'}.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=serif]::before,.ql-bubble .ql-picker.ql-font .ql-picker-label[data-value=serif]::before{content:'Serif'}.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before,.ql-bubble .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before{content:'Monospace'}.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=serif]::before{font-family:Georgia,Times New Roman,serif}.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before{font-family:Monaco,Courier New,monospace}.ql-bubble .ql-picker.ql-size{width:98px}.ql-bubble .ql-picker.ql-size .ql-picker-item::before,.ql-bubble .ql-picker.ql-size .ql-picker-label::before{content:'Normal'}.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=small]::before,.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=small]::before{content:'Small'}.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=large]::before,.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=large]::before{content:'Large'}.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=huge]::before,.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=huge]::before{content:'Huge'}.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=small]::before{font-size:10px}.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=large]::before{font-size:18px}.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=huge]::before{font-size:32px}.ql-bubble .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.ql-bubble .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.ql-bubble .ql-toolbar .ql-formats{margin:8px 12px 8px 0}.ql-bubble .ql-toolbar .ql-formats:first-child{margin-left:12px}.ql-bubble .ql-color-picker svg{margin:1px}.ql-bubble .ql-color-picker .ql-picker-item.ql-selected,.ql-bubble .ql-color-picker .ql-picker-item:hover{border-color:#fff}.ql-bubble .ql-tooltip{background-color:#444;border-radius:25px;color:#fff}.ql-bubble .ql-tooltip-arrow{border-left:6px solid transparent;border-right:6px solid transparent;content:\" \";display:block;left:50%;margin-left:-6px;position:absolute}.ql-bubble .ql-tooltip:not(.ql-flip) .ql-tooltip-arrow{border-bottom:6px solid #444;top:-6px}.ql-bubble .ql-tooltip.ql-flip .ql-tooltip-arrow{border-top:6px solid #444;bottom:-6px}.ql-bubble .ql-tooltip.ql-editing .ql-tooltip-editor{display:block}.ql-bubble .ql-tooltip.ql-editing .ql-formats{visibility:hidden}.ql-bubble .ql-tooltip-editor{display:none}.ql-bubble .ql-tooltip-editor input[type=text]{background:0 0;border:none;color:#fff;font-size:13px;height:100%;outline:0;padding:10px 20px;position:absolute;width:100%}.ql-bubble .ql-tooltip-editor a{top:10px;position:absolute;right:20px}.ql-bubble .ql-tooltip-editor a:before{color:#ccc;content:\"\\D7\";font-size:16px;font-weight:700}.ql-container.ql-bubble:not(.ql-disabled) a{position:relative;white-space:nowrap}.ql-container.ql-bubble:not(.ql-disabled) a::before{background-color:#444;border-radius:15px;top:-5px;font-size:12px;color:#fff;content:attr(href);font-weight:400;overflow:hidden;padding:5px 15px;text-decoration:none;z-index:1}.ql-container.ql-bubble:not(.ql-disabled) a::after{border-top:6px solid #444;border-left:6px solid transparent;border-right:6px solid transparent;top:0;content:\" \";height:0;width:0}.ql-container.ql-bubble:not(.ql-disabled) a::after,.ql-container.ql-bubble:not(.ql-disabled) a::before{left:0;margin-left:50%;position:absolute;transform:translate(-50%,-100%);transition:visibility .2s;visibility:hidden}.ql-container.ql-bubble:not(.ql-disabled) a:hover::after,.ql-container.ql-bubble:not(.ql-disabled) a:hover::before{visibility:visible}"]
                }] }
    ];
    LibFormQuillEditorComponent.propDecorators = {
        quillModules: [{ type: Input }],
        maxImageWidth: [{ type: Input }],
        placeholder: [{ type: Input }]
    };
    return LibFormQuillEditorComponent;
}(FormBase));
if (false) {
    /** @type {?} */
    LibFormQuillEditorComponent.prototype.quillModules;
    /** @type {?} */
    LibFormQuillEditorComponent.prototype.maxImageWidth;
    /** @type {?} */
    LibFormQuillEditorComponent.prototype.placeholder;
    /** @type {?} */
    LibFormQuillEditorComponent.prototype.quillModulesUsed;
    /** @type {?} */
    LibFormQuillEditorComponent.prototype.onContentChanged;
    /** @type {?} */
    LibFormQuillEditorComponent.prototype.destroyed;
    /** @type {?} */
    LibFormQuillEditorComponent.prototype.logger;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var exportedModules = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDatetimeModule,
    MatDatetimepickerModule
];
/** @type {?} */
var exported = [
    LibFormColorComponent,
    LibFormDateComponent,
    LibFormTimeComponent,
    LibFormSignatureComponent,
    LibFormQuillEditorComponent
];
var MatReduceFormsUsing3rdPartyModule = /** @class */ (function () {
    function MatReduceFormsUsing3rdPartyModule() {
    }
    MatReduceFormsUsing3rdPartyModule.decorators = [
        { type: NgModule, args: [{
                    imports: __spread(exportedModules, [
                        CommonModule,
                        SignaturePadModule,
                        ColorPickerModule,
                        QuillModule,
                        NgxMaterialTimepickerModule
                    ]),
                    exports: __spread(exported, exportedModules),
                    declarations: __spread(exported),
                    providers: []
                },] }
    ];
    return MatReduceFormsUsing3rdPartyModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} l1
 * @param {?} l2
 * @return {?}
 */
function compareObject(l1, l2) {
    if (!l1 || !l2) {
        return false;
    }
    /** @type {?} */
    var json1;
    /** @type {?} */
    var json2;
    try {
        json1 = JSON.stringify(l1);
        json2 = JSON.stringify(l2);
    }
    catch (error) {
        return false;
    }
    if (json1 !== json2) {
        return false;
    }
    return true;
}
var LibFormSelectObjectMultipleComponent = /** @class */ (function (_super) {
    __extends(LibFormSelectObjectMultipleComponent, _super);
    function LibFormSelectObjectMultipleComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.compareObject = compareObject;
        return _this;
    }
    LibFormSelectObjectMultipleComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-select-object-multiple',
                    template: "\n    <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n      <mat-select\n        [formControl]=\"this.internalControl\"\n        [placeholder]=\"placeholder\"\n        [compareWith]=\"compareObject\"\n        multiple\n      >\n        <mat-select-trigger>\n          <div *ngIf=\"this.internalControl.value as selected\">\n            {{ selected?.length ? selected[0][selectionKey] : '' }}\n            <span\n              *ngIf=\"this.internalControl.value?.length > 1\"\n              class=\"example-additional-selection\"\n            >\n              (+{{ selected.length - 1 }}\n              {{ selected?.length === 2 ? 'other' : 'others' }})\n            </span>\n          </div>\n        </mat-select-trigger>\n        <mat-option\n          *ngFor=\"let selectionObject of selectionObjects\"\n          [value]=\"selectionObject\"\n        >\n          {{ selectionObject[selectionKey] }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormSelectObjectMultipleComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormSelectObjectMultipleComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .full-width {\n        width: 100%;\n        padding-bottom: 15px;\n      }\n    "]
                }] }
    ];
    LibFormSelectObjectMultipleComponent.propDecorators = {
        selectionObjects: [{ type: Input }],
        selectionKey: [{ type: Input }]
    };
    return LibFormSelectObjectMultipleComponent;
}(FormBase));
if (false) {
    /** @type {?} */
    LibFormSelectObjectMultipleComponent.prototype.selectionObjects;
    /** @type {?} */
    LibFormSelectObjectMultipleComponent.prototype.selectionKey;
    /** @type {?} */
    LibFormSelectObjectMultipleComponent.prototype.compareObject;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibFormToggleComponent = /** @class */ (function (_super) {
    __extends(LibFormToggleComponent, _super);
    function LibFormToggleComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.yes = 'Yes';
        _this.no = 'No';
        return _this;
    }
    LibFormToggleComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-toggle',
                    template: "\n    <div class=\"full-width\">\n      <mat-slide-toggle\n        [formControl]=\"internalControl\"\n        [name]=\"autoCompleteObscureName\"\n        autocomplete=\"dontcompleteme\"\n      >\n        {{ placeholder }} ({{ value ? yes : no }})\n      </mat-slide-toggle>\n    </div>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormToggleComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormToggleComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .full-width {\n        width: 100%;\n        padding-bottom: 15px;\n      }\n    "]
                }] }
    ];
    LibFormToggleComponent.propDecorators = {
        yes: [{ type: Input }],
        no: [{ type: Input }]
    };
    return LibFormToggleComponent;
}(FormBase));
if (false) {
    /** @type {?} */
    LibFormToggleComponent.prototype.yes;
    /** @type {?} */
    LibFormToggleComponent.prototype.no;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibFormTextClearableComponent = /** @class */ (function (_super) {
    __extends(LibFormTextClearableComponent, _super);
    function LibFormTextClearableComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.locked = true;
        return _this;
    }
    /**
     * @return {?}
     */
    LibFormTextClearableComponent.prototype.onClickEditLock = /**
     * @return {?}
     */
    function () {
        this.locked = !this.locked;
        /** @type {?} */
        var isEditabled = !this.locked && !this.disabled;
        if (isEditabled) {
            this.internalControl.enable();
        }
        else {
            this.internalControl.disable();
        }
    };
    LibFormTextClearableComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-text-clearable',
                    template: "\n    <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n      <input\n        *ngIf=\"!disabled && !locked\"\n        matInput\n        [placeholder]=\"placeholder\"\n        [formControl]=\"internalControl\"\n        [name]=\"autoCompleteObscureName\"\n        [maxlength]=\"maxlength\"\n        autocomplete=\"dontcompleteme\"\n      />\n      <input\n        *ngIf=\"disabled || locked\"\n        matInput\n        [disabled]=\"true\"\n        [value]=\"value\"\n        [name]=\"autoCompleteObscureName\"\n        autocomplete=\"dontcompleteme\"\n      />\n      <mat-icon\n        matSuffix\n        class=\"has-pointer\"\n        *ngIf=\"!disabled\"\n        (click)=\"onClickEditLock()\"\n      >\n        {{ locked ? 'edit' : 'locked' }}\n      </mat-icon>\n      <mat-icon matSuffix *ngIf=\"disabled\" class=\"is-grey\">\n        edit\n      </mat-icon>\n    </mat-form-field>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormTextClearableComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormTextClearableComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .is-grey {\n        color: grey;\n      }\n    "]
                }] }
    ];
    LibFormTextClearableComponent.propDecorators = {
        locked: [{ type: Input }],
        maxlength: [{ type: Input }]
    };
    return LibFormTextClearableComponent;
}(FormBase));
if (false) {
    /** @type {?} */
    LibFormTextClearableComponent.prototype.locked;
    /** @type {?} */
    LibFormTextClearableComponent.prototype.maxlength;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibFormTextDisabledComponent = /** @class */ (function (_super) {
    __extends(LibFormTextDisabledComponent, _super);
    function LibFormTextDisabledComponent(fb) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.disabledControl = _this.fb.control({
            value: '',
            disabled: true
        });
        return _this;
    }
    /**
     * @return {?}
     */
    LibFormTextDisabledComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.disabledControl.setValue(this.internalControl.value);
        this.internalControl.valueChanges
            .pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.disabledControl.setValue(_this.internalControl.value);
        }));
    };
    LibFormTextDisabledComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-text-disabled',
                    template: "\n    <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n      <input\n        matInput\n        [placeholder]=\"placeholder\"\n        [formControl]=\"disabledControl\"\n        [name]=\"autoCompleteObscureName\"\n        autocomplete=\"dontcompleteme\"\n      />\n    </mat-form-field>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormTextDisabledComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormTextDisabledComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .full-width {\n        width: 100%;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    LibFormTextDisabledComponent.ctorParameters = function () { return [
        { type: FormBuilderTypedService }
    ]; };
    return LibFormTextDisabledComponent;
}(FormBase));
if (false) {
    /** @type {?} */
    LibFormTextDisabledComponent.prototype.disabledControl;
    /**
     * @type {?}
     * @private
     */
    LibFormTextDisabledComponent.prototype.fb;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibFormTextIconsComponent = /** @class */ (function (_super) {
    __extends(LibFormTextIconsComponent, _super);
    function LibFormTextIconsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clearable = true;
        _this.prefixIcon = 'search';
        return _this;
    }
    /**
     * @return {?}
     */
    LibFormTextIconsComponent.prototype.onClickClear = /**
     * @return {?}
     */
    function () {
        this.internalControl.reset();
    };
    LibFormTextIconsComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-text-icons',
                    template: "\n    <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n      <mat-icon matPrefix class=\"has-pointer\" *ngIf=\"prefixIcon\">\n        {{ prefixIcon }}\n      </mat-icon>\n      <input\n        matInput\n        [formControl]=\"internalControl\"\n        [maxlength]=\"maxlength\"\n        [placeholder]=\"placeholder\"\n        [name]=\"autoCompleteObscureName\"\n        autocomplete=\"dontcompleteme\"\n      />\n      <mat-icon\n        matSuffix\n        class=\"has-pointer\"\n        *ngIf=\"!disabled && clearable\"\n        (click)=\"onClickClear()\"\n      >\n        clear\n      </mat-icon>\n    </mat-form-field>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormTextIconsComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormTextIconsComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .is-grey {\n        color: grey;\n      }\n    "]
                }] }
    ];
    LibFormTextIconsComponent.propDecorators = {
        maxlength: [{ type: Input }],
        clearable: [{ type: Input }],
        prefixIcon: [{ type: Input }]
    };
    return LibFormTextIconsComponent;
}(FormBase));
if (false) {
    /** @type {?} */
    LibFormTextIconsComponent.prototype.maxlength;
    /** @type {?} */
    LibFormTextIconsComponent.prototype.clearable;
    /** @type {?} */
    LibFormTextIconsComponent.prototype.prefixIcon;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibFormTextPasswordComponent = /** @class */ (function (_super) {
    __extends(LibFormTextPasswordComponent, _super);
    function LibFormTextPasswordComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hidePassword = true;
        return _this;
    }
    Object.defineProperty(LibFormTextPasswordComponent.prototype, "inputType", {
        get: /**
         * @return {?}
         */
        function () {
            return this.hidePassword ? 'password' : 'text';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LibFormTextPasswordComponent.prototype.toggleHide = /**
     * @return {?}
     */
    function () {
        this.hidePassword = !this.hidePassword;
    };
    LibFormTextPasswordComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-text-password',
                    template: "\n    <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n      <input\n        matInput\n        [placeholder]=\"placeholder\"\n        [maxlength]=\"maxlength\"\n        [formControl]=\"internalControl\"\n        [name]=\"autoCompleteObscureName\"\n        autocomplete=\"dontcompleteme\"\n        [type]=\"inputType\"\n      />\n      <mat-icon matSuffix (click)=\"toggleHide()\">{{\n        hidePassword ? 'visibility_off' : 'visibility'\n      }}</mat-icon>\n    </mat-form-field>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormTextPasswordComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormTextPasswordComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .full-width {\n        width: 100%;\n      }\n    "]
                }] }
    ];
    LibFormTextPasswordComponent.propDecorators = {
        maxlength: [{ type: Input }]
    };
    return LibFormTextPasswordComponent;
}(FormBase));
if (false) {
    /** @type {?} */
    LibFormTextPasswordComponent.prototype.maxlength;
    /** @type {?} */
    LibFormTextPasswordComponent.prototype.hidePassword;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibFormTextComponent = /** @class */ (function (_super) {
    __extends(LibFormTextComponent, _super);
    function LibFormTextComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LibFormTextComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-text',
                    template: "\n    <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n      <input\n        matInput\n        [placeholder]=\"placeholder\"\n        [maxlength]=\"maxlength\"\n        [formControl]=\"internalControl\"\n        [name]=\"autoCompleteObscureName\"\n        autocomplete=\"dontcompleteme\"\n      />\n    </mat-form-field>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormTextComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormTextComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .full-width {\n        width: 100%;\n      }\n    "]
                }] }
    ];
    LibFormTextComponent.propDecorators = {
        maxlength: [{ type: Input }]
    };
    return LibFormTextComponent;
}(FormBase));
if (false) {
    /** @type {?} */
    LibFormTextComponent.prototype.maxlength;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibFormTextAreaDisabledComponent = /** @class */ (function (_super) {
    __extends(LibFormTextAreaDisabledComponent, _super);
    function LibFormTextAreaDisabledComponent(fb) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.rows = 4;
        _this.disabledControl = _this.fb.control({
            value: '',
            disabled: true
        });
        return _this;
    }
    /**
     * @return {?}
     */
    LibFormTextAreaDisabledComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.disabledControl.setValue(this.internalControl.value);
        this.internalControl.valueChanges
            .pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.disabledControl.setValue(_this.internalControl.value);
        }));
    };
    LibFormTextAreaDisabledComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-textarea-disabled',
                    template: "\n    <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n      <textarea\n        matInput\n        [rows]=\"rows\"\n        [placeholder]=\"placeholder\"\n        [formControl]=\"disabledControl\"\n        [name]=\"autoCompleteObscureName\"\n        autocomplete=\"dontcompleteme\"\n      ></textarea>\n    </mat-form-field>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormTextAreaDisabledComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormTextAreaDisabledComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .full-width {\n        width: 100%;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    LibFormTextAreaDisabledComponent.ctorParameters = function () { return [
        { type: FormBuilderTypedService }
    ]; };
    LibFormTextAreaDisabledComponent.propDecorators = {
        rows: [{ type: Input }]
    };
    return LibFormTextAreaDisabledComponent;
}(FormBase));
if (false) {
    /** @type {?} */
    LibFormTextAreaDisabledComponent.prototype.rows;
    /** @type {?} */
    LibFormTextAreaDisabledComponent.prototype.disabledControl;
    /**
     * @type {?}
     * @private
     */
    LibFormTextAreaDisabledComponent.prototype.fb;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibFormTextAreaComponent = /** @class */ (function (_super) {
    __extends(LibFormTextAreaComponent, _super);
    function LibFormTextAreaComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rows = 4;
        return _this;
    }
    LibFormTextAreaComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-textarea',
                    template: "\n    <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n      <textarea\n        matInput\n        [rows]=\"rows\"\n        [placeholder]=\"placeholder\"\n        [maxlength]=\"maxlength\"\n        [formControl]=\"internalControl\"\n        [name]=\"autoCompleteObscureName\"\n        autocomplete=\"dontcompleteme\"\n      ></textarea>\n    </mat-form-field>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormTextAreaComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormTextAreaComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .full-width {\n        width: 100%;\n      }\n    "]
                }] }
    ];
    LibFormTextAreaComponent.propDecorators = {
        rows: [{ type: Input }],
        maxlength: [{ type: Input }]
    };
    return LibFormTextAreaComponent;
}(FormBase));
if (false) {
    /** @type {?} */
    LibFormTextAreaComponent.prototype.rows;
    /** @type {?} */
    LibFormTextAreaComponent.prototype.maxlength;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibFormToggleReversedComponent = /** @class */ (function (_super) {
    __extends(LibFormToggleReversedComponent, _super);
    function LibFormToggleReversedComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.yes = 'Yes';
        _this.no = 'No';
        _this.reversedControl = new FormControl();
        return _this;
    }
    /**
     * @return {?}
     */
    LibFormToggleReversedComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.reversedControl.valueChanges
            .pipe(takeUntil(this._destroyed), debounceTime(100))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (_this.lockControl) {
                return;
            }
            _this.value = !value;
            // console.log('reversedControl.valueChanges', { thisValue: this.value });
        }));
        this.internalControl.valueChanges
            .pipe(takeUntil(this._destroyed), debounceTime(100), tap((/**
         * @return {?}
         */
        function () { return (_this.lockControl = true); })), delay(100), tap((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return _this.reversedControl.setValue(!value); })), delay(100), tap((/**
         * @return {?}
         */
        function () { return (_this.lockControl = false); })))
            .subscribe((/**
         * @return {?}
         */
        function () {
            // console.log('reversedControl.valueChanges', { thisValue: this.value });
        }));
        this.internalControl.statusChanges
            .pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.disabled) {
                _this.reversedControl.disable();
            }
            else {
                _this.reversedControl.enable();
            }
        }));
    };
    LibFormToggleReversedComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-toggle-reversed',
                    template: "\n    <div class=\"full-width\">\n      <mat-slide-toggle\n        [formControl]=\"reversedControl\"\n        [name]=\"autoCompleteObscureName\"\n        autocomplete=\"dontcompleteme\"\n      >\n        <div class=\"flex-center\">\n          <ng-content></ng-content>\n          <span>{{ placeholder }}</span>\n          <span>({{ value ? yes : no }})</span>\n        </div>\n      </mat-slide-toggle>\n    </div>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormToggleReversedComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormToggleReversedComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      span {\n        margin: 2px;\n      }\n      .full-width {\n        width: 100%;\n        padding-bottom: 15px;\n      }\n      .flex-center {\n        display: flex;\n        align-items: center;\n      }\n    "]
                }] }
    ];
    LibFormToggleReversedComponent.propDecorators = {
        yes: [{ type: Input }],
        no: [{ type: Input }]
    };
    return LibFormToggleReversedComponent;
}(FormBase));
if (false) {
    /** @type {?} */
    LibFormToggleReversedComponent.prototype.yes;
    /** @type {?} */
    LibFormToggleReversedComponent.prototype.no;
    /** @type {?} */
    LibFormToggleReversedComponent.prototype.reversedControl;
    /**
     * @type {?}
     * @private
     */
    LibFormToggleReversedComponent.prototype.lockControl;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} l1
 * @param {?} l2
 * @return {?}
 */
function compareObject$1(l1, l2) {
    if (!l1 || !l2) {
        return false;
    }
    /** @type {?} */
    var json1;
    /** @type {?} */
    var json2;
    try {
        json1 = JSON.stringify(l1);
        json2 = JSON.stringify(l2);
    }
    catch (error) {
        return false;
    }
    if (json1 !== json2) {
        return false;
    }
    return true;
}
var LibFormSelectObjectComponent = /** @class */ (function (_super) {
    __extends(LibFormSelectObjectComponent, _super);
    function LibFormSelectObjectComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.compareObject = compareObject$1;
        return _this;
    }
    /**
     * @param {?} newVal
     * @return {?}
     */
    LibFormSelectObjectComponent.prototype.writeValue = /**
     * @param {?} newVal
     * @return {?}
     */
    function (newVal) {
        this.value = newVal || {};
    };
    LibFormSelectObjectComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-select-object',
                    template: "\n    <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n      <mat-select\n        [formControl]=\"this.internalControl\"\n        [placeholder]=\"placeholder\"\n        [compareWith]=\"compareObject\"\n      >\n        <mat-option\n          *ngFor=\"let selectionObject of selectionObjects\"\n          [value]=\"selectionObject\"\n        >\n          {{ selectionObject[selectionKey] }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormSelectObjectComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormSelectObjectComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .full-width {\n        width: 100%;\n        padding-bottom: 15px;\n      }\n    "]
                }] }
    ];
    LibFormSelectObjectComponent.propDecorators = {
        selectionObjects: [{ type: Input }],
        selectionKey: [{ type: Input }]
    };
    return LibFormSelectObjectComponent;
}(FormBase));
if (false) {
    /** @type {?} */
    LibFormSelectObjectComponent.prototype.selectionObjects;
    /** @type {?} */
    LibFormSelectObjectComponent.prototype.selectionKey;
    /** @type {?} */
    LibFormSelectObjectComponent.prototype.compareObject;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibFormSelectStringComponent = /** @class */ (function (_super) {
    __extends(LibFormSelectStringComponent, _super);
    function LibFormSelectStringComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LibFormSelectStringComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-select-string',
                    template: "\n    <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n      <mat-select\n        [formControl]=\"this.internalControl\"\n        [placeholder]=\"placeholder\"\n      >\n        <mat-option *ngFor=\"let selection of selections\" [value]=\"selection\">\n          {{ selection }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormSelectStringComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormSelectStringComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .full-width {\n        width: 100%;\n        padding-bottom: 15px;\n      }\n    "]
                }] }
    ];
    LibFormSelectStringComponent.propDecorators = {
        selections: [{ type: Input }]
    };
    return LibFormSelectStringComponent;
}(FormBase));
if (false) {
    /** @type {?} */
    LibFormSelectStringComponent.prototype.selections;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibFormTagMultipleComponent = /** @class */ (function (_super) {
    __extends(LibFormTagMultipleComponent, _super);
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
        return __awaiter(this, void 0, void 0, function () {
            var value, inputTrimmed, found, newTag;
            return __generator(this, function (_a) {
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
        var selectedTag = __spread((this.choices || [])).filter((/**
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
        return __awaiter(this, void 0, void 0, function () {
            var newTagId, newTag;
            return __generator(this, function (_a) {
                newTagId = v1();
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
        var currentValue = __spread((this.value || []));
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibFormTagSingleComponent = /** @class */ (function (_super) {
    __extends(LibFormTagSingleComponent, _super);
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
        return __awaiter(this, void 0, void 0, function () {
            var value, inputTrimmed, found, confirmed, newTag;
            return __generator(this, function (_a) {
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
        var selectedTag = __spread((this.choices || [])).filter((/**
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
        return __awaiter(this, void 0, void 0, function () {
            var newTagId, newTag;
            return __generator(this, function (_a) {
                newTagId = v1();
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibFormNumberComponent = /** @class */ (function (_super) {
    __extends(LibFormNumberComponent, _super);
    function LibFormNumberComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.min = 0;
        _this.max = 100;
        _this.step = 1;
        return _this;
    }
    LibFormNumberComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-number',
                    template: "\n    <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n      <input\n        matInput\n        type=\"number\"\n        [min]=\"min\"\n        [max]=\"max\"\n        [step]=\"step\"\n        [placeholder]=\"placeholder\"\n        [formControl]=\"internalControl\"\n        [name]=\"autoCompleteObscureName\"\n        autocomplete=\"dontcompleteme\"\n      />\n    </mat-form-field>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormNumberComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormNumberComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .full-width {\n        width: 100%;\n      }\n    "]
                }] }
    ];
    LibFormNumberComponent.propDecorators = {
        min: [{ type: Input }],
        max: [{ type: Input }],
        step: [{ type: Input }]
    };
    return LibFormNumberComponent;
}(FormBase));
if (false) {
    /** @type {?} */
    LibFormNumberComponent.prototype.min;
    /** @type {?} */
    LibFormNumberComponent.prototype.max;
    /** @type {?} */
    LibFormNumberComponent.prototype.step;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibFormSelectStringMultipleComponent = /** @class */ (function (_super) {
    __extends(LibFormSelectStringMultipleComponent, _super);
    function LibFormSelectStringMultipleComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LibFormSelectStringMultipleComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-select-string-multiple',
                    template: "\n    <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n      <mat-select\n        [formControl]=\"this.internalControl\"\n        [placeholder]=\"placeholder\"\n        multiple\n      >\n        <mat-select-trigger>\n          <div *ngIf=\"this.internalControl.value as selected\">\n            {{ selected?.length ? selected[0] : '' }}\n            <span\n              *ngIf=\"this.internalControl.value?.length > 1\"\n              class=\"example-additional-selection\"\n            >\n              (+{{ selected.length - 1 }}\n              {{ selected?.length === 2 ? 'other' : 'others' }})\n            </span>\n          </div>\n        </mat-select-trigger>\n        <mat-option *ngFor=\"let selection of selections\" [value]=\"selection\">\n          {{ selection }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormSelectStringMultipleComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormSelectStringMultipleComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .full-width {\n        width: 100%;\n        padding-bottom: 15px;\n      }\n    "]
                }] }
    ];
    LibFormSelectStringMultipleComponent.propDecorators = {
        selections: [{ type: Input }]
    };
    return LibFormSelectStringMultipleComponent;
}(FormBase));
if (false) {
    /** @type {?} */
    LibFormSelectStringMultipleComponent.prototype.selections;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var exportedModules$1 = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatInputModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatProgressSpinnerModule
];
/** @type {?} */
var exported$1 = [
    LibFormNumberComponent,
    LibFormSelectObjectComponent,
    LibFormSelectObjectMultipleComponent,
    LibFormSelectStringComponent,
    LibFormSelectStringMultipleComponent,
    LibFormTagMultipleComponent,
    LibFormTagSingleComponent,
    LibFormTextAreaComponent,
    LibFormTextAreaDisabledComponent,
    LibFormTextClearableComponent,
    LibFormTextComponent,
    LibFormTextDisabledComponent,
    LibFormTextIconsComponent,
    LibFormTextPasswordComponent,
    LibFormToggleComponent,
    LibFormToggleReversedComponent,
];
var MatReduceFormsUsingMaterialModule = /** @class */ (function () {
    function MatReduceFormsUsingMaterialModule() {
    }
    MatReduceFormsUsingMaterialModule.decorators = [
        { type: NgModule, args: [{
                    imports: __spread(exportedModules$1),
                    exports: __spread(exported$1, exportedModules$1),
                    declarations: __spread(exported$1),
                    providers: []
                },] }
    ];
    return MatReduceFormsUsingMaterialModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Assignee() { }
if (false) {
    /** @type {?|undefined} */
    Assignee.prototype.selected_tag;
    /** @type {?|undefined} */
    Assignee.prototype.selected_obj;
    /** @type {?|undefined} */
    Assignee.prototype.assignee_id;
    /** @type {?} */
    Assignee.prototype.type;
    /** @type {?} */
    Assignee.prototype.name;
    /** @type {?} */
    Assignee.prototype.email;
    /** @type {?|undefined} */
    Assignee.prototype.mobile;
}
/** @enum {string} */
var AssigneeType = {
    contractor: 'Contractor',
    staffMember: 'Staff Member',
    myDetails: 'My Details',
};
/**
 * @record
 */
function User() { }
if (false) {
    /** @type {?|undefined} */
    User.prototype.id;
    /** @type {?} */
    User.prototype.Email;
    /* Skipping unnamed member:
    'First Name': string;*/
    /* Skipping unnamed member:
    'Last Name': string;*/
    /** @type {?} */
    User.prototype.Phone;
}
/**
 * @record
 */
function StaffMember() { }
if (false) {
    /** @type {?|undefined} */
    StaffMember.prototype.id;
    /** @type {?|undefined} */
    StaffMember.prototype.name;
    /** @type {?|undefined} */
    StaffMember.prototype.email;
    /** @type {?|undefined} */
    StaffMember.prototype.phone;
}
/**
 * @record
 */
function Contractor() { }
if (false) {
    /** @type {?|undefined} */
    Contractor.prototype.id;
    /** @type {?|undefined} */
    Contractor.prototype.contactsArray;
}
/**
 * @record
 */
function Contact() { }
if (false) {
    /** @type {?} */
    Contact.prototype.id;
    /** @type {?|undefined} */
    Contact.prototype.name;
    /** @type {?|undefined} */
    Contact.prototype.email;
    /** @type {?|undefined} */
    Contact.prototype.phone;
}
/**
 * @return {?}
 */
function blankContact() {
    return {
        id: '',
        name: '',
        email: '',
        phone: '',
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} c
 * @return {?}
 */
function GetFirstContact(c) {
    if (!c) {
        /** @type {?} */
        var blank_1 = blankContact();
        blank_1.name = 'NO CONTRACTOR FOUND';
        return blank_1;
    }
    if (c.contactsArray && !!c.contactsArray.length) {
        return c.contactsArray[0];
    }
    /** @type {?} */
    var blank = blankContact();
    blank.name = 'NO CONTACT FOUND';
    return blank;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibFormAssigneeSelectorComponent = /** @class */ (function (_super) {
    __extends(LibFormAssigneeSelectorComponent, _super);
    function LibFormAssigneeSelectorComponent(fb) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.assigneeTypes = Object.keys(AssigneeType).map((/**
         * @param {?} k
         * @return {?}
         */
        function (k) { return AssigneeType[k]; }));
        _this.hideSelectContractor = true;
        _this.hideSelectStaff = true;
        _this.destroyed = new Subject();
        _this.selectImportTypeControl = _this.fb.control();
        _this.selectItemContractorControl = _this.fb.control();
        _this.selectItemStaffControl = _this.fb.control();
        return _this;
    }
    /**
     * @param {?} logString
     * @return {?}
     */
    LibFormAssigneeSelectorComponent.prototype.makeLogPipe = /**
     * @param {?} logString
     * @return {?}
     */
    function (logString) {
        return pipe(takeUntil(this.destroyed), auditTime(300), tap((/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return console.log('assignee-selector: ', logString, { val: val }); })));
    };
    /**
     * @param {?} control
     * @param {?} disabled
     * @return {?}
     */
    LibFormAssigneeSelectorComponent.prototype.checkStatus = /**
     * @param {?} control
     * @param {?} disabled
     * @return {?}
     */
    function (control, disabled) {
        if (disabled && !control.disabled) {
            control.disable();
        }
        if (!disabled && control.disabled) {
            control.enable();
        }
    };
    /**
     * @return {?}
     */
    LibFormAssigneeSelectorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentValue;
            var _this = this;
            return __generator(this, function (_a) {
                // Check if main control has been disabled/enabled
                this.internalControl.statusChanges
                    .pipe(this.makeLogPipe('control.statusChanges'))
                    .subscribe((/**
                 * @param {?} newVal
                 * @return {?}
                 */
                function (newVal) {
                    /** @type {?} */
                    var disabled = newVal === 'DISABLED';
                    _this.checkStatus(_this.selectImportTypeControl, disabled);
                    _this.checkStatus(_this.selectItemStaffControl, disabled);
                    _this.checkStatus(_this.selectItemContractorControl, disabled);
                }));
                // Check if import type has changed
                this.selectImportTypeControl.valueChanges
                    .pipe(this.makeLogPipe('selectImportTypeControl.valueChanges'))
                    .subscribe((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) {
                    if (val === AssigneeType.myDetails) {
                        return _this.handleSelectedMyDetails();
                    }
                    if (val === AssigneeType.contractor) {
                        _this.hideSelectContractor = false;
                        _this.hideSelectStaff = true;
                    }
                    if (val === AssigneeType.staffMember) {
                        _this.hideSelectStaff = false;
                        _this.hideSelectContractor = true;
                    }
                }));
                // Check if selectItemContractorControl has changed
                this.selectItemContractorControl.valueChanges
                    .pipe(this.makeLogPipe('selectItemContractorControl.valueChanges'))
                    .subscribe((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.handleSelectedSingleContractor(val)];
                    });
                }); }));
                // Check if selectItemStaffControl has changed
                this.selectItemStaffControl.valueChanges
                    .pipe(this.makeLogPipe('selectItemStaffControl.valueChanges'))
                    .subscribe((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.handleSelectedSingleStaff(val)];
                    });
                }); }));
                currentValue = this.value;
                if (currentValue) {
                    this.selectImportTypeControl.patchValue(currentValue.type);
                    if (currentValue.type === AssigneeType.contractor) {
                        this.selectItemContractorControl.patchValue(currentValue.selected_tag);
                    }
                    if (currentValue.type === AssigneeType.staffMember) {
                        this.selectItemStaffControl.patchValue(currentValue.selected_tag);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * @return {?}
     */
    LibFormAssigneeSelectorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.destroyed.next();
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(LibFormAssigneeSelectorComponent.prototype, "selectedImportType", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectImportTypeControl.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} selected
     * @return {?}
     */
    LibFormAssigneeSelectorComponent.prototype.handleSelectedSingleStaff = /**
     * @param {?} selected
     * @return {?}
     */
    function (selected) {
        return __awaiter(this, void 0, void 0, function () {
            var staffMember, newAssignee;
            return __generator(this, function (_a) {
                if (!selected) {
                    console.warn('assignee-selector: no staff selected', { selected: selected });
                    return [2 /*return*/];
                }
                staffMember = (/** @type {?} */ (selected.obj));
                newAssignee = {
                    selected_tag: selected,
                    assignee_id: selected.id,
                    type: AssigneeType.staffMember,
                    name: staffMember.name,
                    email: staffMember.email,
                    mobile: staffMember.phone
                };
                console.log('assignee-selector: handleSelectedSingleStaff', {
                    selected: selected,
                    newAssignee: newAssignee
                });
                this.value = newAssignee;
                return [2 /*return*/];
            });
        });
    };
    /**
     * @param {?} selected
     * @return {?}
     */
    LibFormAssigneeSelectorComponent.prototype.handleSelectedSingleContractor = /**
     * @param {?} selected
     * @return {?}
     */
    function (selected) {
        return __awaiter(this, void 0, void 0, function () {
            var contractor, contact, newAssignee;
            return __generator(this, function (_a) {
                if (!selected) {
                    console.warn('assignee-selector: no contractor selected', { selected: selected });
                    return [2 /*return*/];
                }
                contractor = (/** @type {?} */ (selected.obj));
                contact = GetFirstContact(contractor);
                newAssignee = {
                    selected_tag: selected,
                    assignee_id: selected.id,
                    type: AssigneeType.contractor,
                    name: contact.name,
                    email: contact.email,
                    mobile: contact.phone
                };
                this.value = newAssignee;
                console.log('assignee-selector: handleSelectedSingleContractor', {
                    this_value: this.value,
                    selected: selected,
                    newAssignee: newAssignee
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * @return {?}
     */
    LibFormAssigneeSelectorComponent.prototype.handleSelectedMyDetails = /**
     * @return {?}
     */
    function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, newAssignee;
            return __generator(this, function (_a) {
                this.hideSelectStaff = true;
                this.hideSelectContractor = true;
                user = this.currentUser;
                console.log('assignee-selector: handleSelectedMyDetails() importing my details', {
                    user: user
                });
                newAssignee = {
                    selected_obj: user,
                    assignee_id: user.id,
                    type: AssigneeType.myDetails,
                    name: user['First Name'] + ' ' + user['Last Name'],
                    email: user.Email || '',
                    mobile: user.Phone || ''
                };
                this.value = newAssignee;
                console.log('assignee-selector: handleSelectedMyDetails() newAssignee', {
                    newAssignee: newAssignee
                });
                return [2 /*return*/];
            });
        });
    };
    LibFormAssigneeSelectorComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-assignee-selector',
                    template: "\n    <mat-card>\n      <div class=\"import\">\n        <form-select-string\n          [formControl]=\"this.selectImportTypeControl\"\n          [selections]=\"this.assigneeTypes\"\n          placeholder=\"Assignee Type\"\n        >\n        </form-select-string>\n        <form-tag-single\n          placeholder=\"Select Contractor\"\n          [hidden]=\"this.hideSelectContractor\"\n          [formControl]=\"this.selectItemContractorControl\"\n          [choices]=\"contractorsList\"\n          [customValues]=\"false\"\n        >\n        </form-tag-single>\n\n        <form-tag-single\n          placeholder=\"Select Staff Member\"\n          [hidden]=\"this.hideSelectStaff\"\n          [formControl]=\"this.selectItemStaffControl\"\n          [choices]=\"staffList\"\n          [customValues]=\"false\"\n        >\n        </form-tag-single>\n      </div>\n      <div *ngIf=\"!(this.value && this.value.name)\">\n        Please select an assignee\n      </div>\n      <div *ngIf=\"this.value as selectedAssignee\">\n        <h3>Selected Assignee:</h3>\n        <div class=\"assignee\">\n          <p>\n            Name: <strong>{{ selectedAssignee.name }}</strong>\n          </p>\n          <p>\n            Email: <strong>{{ selectedAssignee.email }}</strong>\n          </p>\n          <p>\n            Phone: <strong>{{ selectedAssignee.mobile }}</strong>\n          </p>\n        </div>\n      </div>\n    </mat-card>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormAssigneeSelectorComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormAssigneeSelectorComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .import {\n        display: grid;\n        grid-template-columns: 100%;\n        grid-gap: 2%;\n        margin-bottom: 10px;\n      }\n      .assignee p {\n        margin: 0;\n      }\n      .assignee h3 {\n        margin: 0;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    LibFormAssigneeSelectorComponent.ctorParameters = function () { return [
        { type: FormBuilderTypedService }
    ]; };
    LibFormAssigneeSelectorComponent.propDecorators = {
        currentUser: [{ type: Input }],
        contractorsList: [{ type: Input }],
        staffList: [{ type: Input }]
    };
    return LibFormAssigneeSelectorComponent;
}(FormBase));
if (false) {
    /** @type {?} */
    LibFormAssigneeSelectorComponent.prototype.currentUser;
    /** @type {?} */
    LibFormAssigneeSelectorComponent.prototype.contractorsList;
    /** @type {?} */
    LibFormAssigneeSelectorComponent.prototype.staffList;
    /** @type {?} */
    LibFormAssigneeSelectorComponent.prototype.selectImportTypeControl;
    /** @type {?} */
    LibFormAssigneeSelectorComponent.prototype.selectItemContractorControl;
    /** @type {?} */
    LibFormAssigneeSelectorComponent.prototype.selectItemStaffControl;
    /** @type {?} */
    LibFormAssigneeSelectorComponent.prototype.assigneeTypes;
    /** @type {?} */
    LibFormAssigneeSelectorComponent.prototype.hideSelectContractor;
    /** @type {?} */
    LibFormAssigneeSelectorComponent.prototype.hideSelectStaff;
    /** @type {?} */
    LibFormAssigneeSelectorComponent.prototype.destroyed;
    /**
     * @type {?}
     * @private
     */
    LibFormAssigneeSelectorComponent.prototype.fb;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var exportedModules$2 = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatReduceFormsUsingMaterialModule
];
/** @type {?} */
var exported$2 = [LibFormAssigneeSelectorComponent];
var MatReduceFormsComposedModule = /** @class */ (function () {
    function MatReduceFormsComposedModule() {
    }
    MatReduceFormsComposedModule.decorators = [
        { type: NgModule, args: [{
                    imports: __spread(exportedModules$2),
                    exports: __spread(exported$2, exportedModules$2),
                    declarations: __spread(exported$2),
                    providers: []
                },] }
    ];
    return MatReduceFormsComposedModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var exportedModules$3 = [
    MatReduceFormsUsing3rdPartyModule,
    MatReduceFormsUsingMaterialModule,
    MatReduceFormsComposedModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
];
var MatReduceModule = /** @class */ (function () {
    function MatReduceModule() {
    }
    MatReduceModule.decorators = [
        { type: NgModule, args: [{
                    entryComponents: [AppConfirmationDialogComponent],
                    declarations: [AppConfirmationDialogComponent],
                    exports: __spread(exportedModules$3),
                    imports: __spread([MatIconModule], exportedModules$3),
                    providers: [ConfirmationService, FormBuilderTypedService]
                },] }
    ];
    return MatReduceModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Tag() { }
if (false) {
    /** @type {?} */
    Tag.prototype.id;
    /** @type {?} */
    Tag.prototype.name;
    /** @type {?|undefined} */
    Tag.prototype.obj;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function TagObject() { }
if (false) {
    /** @type {?} */
    TagObject.prototype.id;
    /** @type {?|undefined} */
    TagObject.prototype.fileicon;
    /** @type {?|undefined} */
    TagObject.prototype.imageurl;
    /** @type {?} */
    TagObject.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FormArrayTypeSafe, FormArrayWithLabel, FormBase, FormBuilderTypedService, FormControlTypeSafe, FormControlWithLabel, FormGroupTypeSafe, MatReduceModule, AppConfirmationDialogComponent as ɵa, ConfirmationService as ɵb, MatReduceFormsComposedModule as ɵba, LibFormAssigneeSelectorComponent as ɵbb, MatReduceFormsUsing3rdPartyModule as ɵc, LibFormColorComponent as ɵd, FormBase as ɵe, LibFormDateComponent as ɵf, LibFormTimeComponent as ɵg, LibFormSignatureComponent as ɵh, LibFormQuillEditorComponent as ɵi, MatReduceFormsUsingMaterialModule as ɵj, LibFormNumberComponent as ɵk, LibFormSelectObjectComponent as ɵl, LibFormSelectObjectMultipleComponent as ɵm, LibFormSelectStringComponent as ɵn, LibFormSelectStringMultipleComponent as ɵo, LibFormTagMultipleComponent as ɵp, LibFormTagSingleComponent as ɵq, LibFormTextAreaComponent as ɵr, LibFormTextAreaDisabledComponent as ɵs, LibFormTextClearableComponent as ɵt, LibFormTextComponent as ɵu, LibFormTextDisabledComponent as ɵv, LibFormTextIconsComponent as ɵw, LibFormTextPasswordComponent as ɵx, LibFormToggleComponent as ɵy, LibFormToggleReversedComponent as ɵz };
//# sourceMappingURL=mat-reduce.js.map
