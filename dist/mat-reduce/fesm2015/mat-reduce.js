import { Component, Inject, ViewChild, Injectable, Input, forwardRef, ViewEncapsulation, NgModule, EventEmitter, Output } from '@angular/core';
import { __awaiter } from 'tslib';
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
class AppConfirmationDialogComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.message = data.message;
        this.okIcon = data.okIcon ? data.okIcon : 'done';
        this.okLabel = data.okLabel ? data.okLabel : 'Ok';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.okButton && this.okButton.focus) {
            this.okButton.focus();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClickCancel(e) {
        e.preventDefault();
        this.dialogRef.close(false);
    }
    /**
     * @return {?}
     */
    onSubmitOk() {
        this.dialogRef.close(true);
    }
}
AppConfirmationDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-confirmation-dialog',
                template: `
    <p class="title is-centered">Confirm</p>
    <p class="subtitle is-centered">{{ message }}</p>
    <form (submit)="onSubmitOk()" class="buttons">
      <button #okButton mat-raised-button color="primary" type="submit">
        <mat-icon>{{ okIcon }}</mat-icon>
        <span>{{ okLabel }}</span>
      </button>
      <button mat-raised-button color="white" (click)="onClickCancel($event)">
        <mat-icon>cancel</mat-icon>
        <span>Cancel</span>
      </button>
    </form>
  `,
                styles: [`
      .title {
        font-size: 1.8em;
        margin: 0px;
      }
      .subtitle {
        color: grey;
        margin: 0px;
        font-size: 1.4em;
      }
      .buttons {
        display: flex;
        justify-content: center;
        margin-top: 10px;
      }
      button {
        margin-left: 10px;
        margin-right: 10px;
      }
    `]
            }] }
];
/** @nocollapse */
AppConfirmationDialogComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
AppConfirmationDialogComponent.propDecorators = {
    okButton: [{ type: ViewChild, args: ['okButton', (/** @type {?} */ ({})),] }]
};
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
class ConfirmationService {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?} confirmationMessage
     * @param {?=} okLabel
     * @param {?=} okIcon
     * @return {?}
     */
    AskConfirm(confirmationMessage, okLabel, okIcon) {
        return __awaiter(this, void 0, void 0, /** @this {!ConfirmationService} */ function* () {
            /** @type {?} */
            const data = (/** @type {?} */ ({
                message: confirmationMessage,
                okIcon: okIcon,
                okLabel: okLabel
            }));
            /** @type {?} */
            const dialogRef = this.dialog.open(AppConfirmationDialogComponent, {
                width: '300px',
                hasBackdrop: true,
                disableClose: false,
                data: data
            });
            /** @type {?} */
            const result = yield dialogRef
                .afterClosed()
                .pipe(take(1))
                .toPromise();
            console.log(`Confirmation-Service: AskConfirm=${!!result}`);
            return result;
        });
    }
}
ConfirmationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfirmationService.ctorParameters = () => [
    { type: MatDialog }
];
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
class FormControlWithLabel extends FormControl {
    /**
     * @param {?} value
     * @param {?} validators
     * @param {?} label
     */
    constructor(value, validators, label) {
        super(value, validators);
        this.label = label;
    }
}
if (false) {
    /** @type {?} */
    FormControlWithLabel.prototype.label;
}
class FormArrayWithLabel extends FormArray {
    /**
     * @param {?} value
     * @param {?} validators
     * @param {?} label
     */
    constructor(value, validators, label) {
        super(value, validators);
        this.label = label;
    }
}
if (false) {
    /** @type {?} */
    FormArrayWithLabel.prototype.label;
}
/**
 * @abstract
 * @template T
 */
class FormGroupTypeSafe extends FormGroup {
    /**
     * @param {?} newValue
     * @return {?}
     */
    setValue(newValue) {
        super.setValue(newValue);
    }
}
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
class FormArrayTypeSafe extends FormArray {
    /**
     * @param {?} index
     * @return {?}
     */
    at(index) {
        return (/** @type {?} */ (super.at(index)));
    }
}
if (false) {
    /** @type {?} */
    FormArrayTypeSafe.prototype.value;
}
/**
 * @abstract
 * @template T
 */
class FormControlTypeSafe extends FormControl {
    /**
     * @param {?} newValue
     * @return {?}
     */
    setValue(newValue) {
        super.setValue(newValue);
    }
}
if (false) {
    /** @type {?} */
    FormControlTypeSafe.prototype.value;
    /** @type {?} */
    FormControlTypeSafe.prototype.valueChanges;
}
class FormBuilderTypedService extends FormBuilder {
    /**
     * @template T
     * @param {?=} formState
     * @param {?=} validatorOrOpts
     * @param {?=} asyncValidator
     * @return {?}
     */
    control(formState, validatorOrOpts, asyncValidator) {
        /** @type {?} */
        const control = (/** @type {?} */ (super.control(formState, validatorOrOpts, asyncValidator)));
        return control;
    }
    /**
     * @template T
     * @param {?} controlsConfig
     * @param {?=} extra
     * @return {?}
     */
    array(controlsConfig, extra) {
        /** @type {?} */
        const arr = (/** @type {?} */ (super.array(controlsConfig, extra)));
        return arr;
    }
    // override group to be type safe
    /**
     * @template T
     * @param {?} controlsConfig
     * @param {?=} extra
     * @return {?}
     */
    group(controlsConfig, extra) {
        /*NOTE the return FormGroupTypeSafe<T> */
        /*NOTE the return FormGroupTypeSafe<T> */
        // instantiate group from angular type
        /** @type {?} */
        const gr = (/** @type {?} */ (super.group(controlsConfig, extra)));
        if (extra) {
            gr.label = extra['label'];
        }
        /** @type {?} */
        const getPropertyName = (/**
         * @param {?} propertyFunction
         * @return {?}
         */
        (propertyFunction) => {
            //  https://github.com/dsherret/ts-nameof - helped me with the code below, THANX!!!!
            // propertyFunction.toString() sample value:
            //   function(x) { return x.hero.address.postcode;}
            // we need the 'hero.address.postcode'
            // for gr.get('hero.address.postcode') function
            /** @type {?} */
            const properties = propertyFunction
                .toString()
                .split('.')
                .splice(1);
            /** @type {?} */
            const r = properties.join('.');
            return r;
        });
        if (gr) {
            // implement getSafe method
            gr.getSafe = (/**
             * @param {?} propertyFunction
             * @return {?}
             */
            (propertyFunction) => {
                /** @type {?} */
                const getStr = getPropertyName(propertyFunction);
                // console.log(getStr);
                /** @type {?} */
                const p = (/** @type {?} */ (gr.get(getStr)));
                return p;
            });
            // implement setControlSafe
            gr.setControlSafe = (/**
             * @param {?} propertyFunction
             * @param {?} control
             * @return {?}
             */
            (propertyFunction, control) => {
                /** @type {?} */
                const getStr = getPropertyName(propertyFunction);
                // console.log(getStr);
                gr.setControl(getStr, control);
            });
        }
        return gr;
    }
}
FormBuilderTypedService.decorators = [
    { type: Injectable }
];

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
    const capitalsWithSpaces = input.replace(/([A-Z])/g, ' $1').trim();
    /** @type {?} */
    const underscoresToSpaces = capitalsWithSpaces.replace(/_/g, ' ');
    return underscoresToSpaces
        .split(' ')
        .map((/**
     * @param {?} p
     * @return {?}
     */
    p => p.charAt(0).toUpperCase() + p.substr(1).toLowerCase()))
        .join(' ');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class FormBase {
    constructor() {
        this.internalControl = new FormControl();
        this._destroyed = new Subject();
        this.disabled = false;
        this.debug = false;
        this.propagateOnChange = (/**
         * @return {?}
         */
        () => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        // Garrentee that init and destroy are called
        // even if ngOnInit() or ngOnDestroy() are overriden
        /** @type {?} */
        const originalOnDestroy = this.ngOnDestroy;
        this.ngOnDestroy = (/**
         * @return {?}
         */
        () => {
            this.destroy();
            originalOnDestroy.apply(this);
        });
        /** @type {?} */
        const originalOnInit = this.ngOnInit;
        this.ngOnInit = (/**
         * @return {?}
         */
        () => {
            this.init();
            originalOnInit.apply(this);
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @return {?}
     */
    init() {
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
        () => {
            this._value = this.internalControl.value;
            this.onChange(this._value);
            this.onTouched();
            // console.log('form-base-class: valueChanges', {val: this._value});
        }));
        if (!this.placeholder) {
            /** @type {?} */
            const nameParsed = ConvertToTitleCase(this.formControlName + '');
            this.placeholder = nameParsed;
        }
    }
    /**
     * @return {?}
     */
    destroy() {
        this._destroyed.next();
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set value(val) {
        this._value = val;
        this.internalControl.setValue(val);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateOnChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (isDisabled) {
                this.internalControl.disable();
            }
            else {
                this.internalControl.enable();
            }
        }));
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        /** @type {?} */
        const errors = c.errors;
        /** @type {?} */
        const value = c.value;
        // console.log('form-base-class: validate()', { errors, value });
        this.internalControl.setValidators(c.validator);
        return !this.validationError
            ? null
            : {
                validationError: {
                    valid: false
                }
            };
    }
    /**
     * @private
     * @param {?} inputValue
     * @return {?}
     */
    onChange(inputValue) {
        this.validationError = this.CheckValueIsValid();
        if (this.validationError) {
            this.propagateOnChange(this.value);
        }
        else {
            this.propagateOnChange(inputValue);
        }
    }
    /**
     * @return {?}
     */
    CheckValueIsValid() {
        return null;
    }
}
FormBase.propDecorators = {
    appearance: [{ type: Input }],
    allowAutoComplete: [{ type: Input }],
    formControlName: [{ type: Input }],
    placeholder: [{ type: Input }],
    debug: [{ type: Input }]
};
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
class LibFormColorComponent extends FormBase {
    constructor() {
        super(...arguments);
        this.defaultColor = '#42d742';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.value) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.value = this.defaultColor;
            }));
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClickClear(e) {
        e.stopPropagation();
        this.value = '';
    }
}
LibFormColorComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-color',
                template: `
    <mat-form-field [appearance]="appearance" class="full-width m-top">
      <span [class.txt-grey]="disabled">
        {{ placeholder }}
      </span>
      <input
        matInput
        [hidden]="true"
        [formControl]="internalControl"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
      />
      <mat-card
        *ngIf="!disabled"
        [cpOutputFormat]="'hex'"
        class="box has-pointer"
        [style.background]="value"
        [(colorPicker)]="value"
        [cpPosition]="'top'"
      >
        <div class="flex-space-between">
          <span>
            {{ value ? value : 'click to pick color' }}
          </span>
          <button
            mat-mini-fab
            (click)="onClickClear($event)"
            [disabled]="disabled"
            matTooltip="Clear current color"
            class="bg-white close-btn"
          >
            <mat-icon class="txt-black">
              clear
            </mat-icon>
          </button>
        </div>
      </mat-card>
      <mat-card
        *ngIf="disabled"
        class="box"
        [style.background]="value"
      >
        <div class="flex-space-between">
          <span>
            {{ value ? value : 'click to pick color' }}
          </span>
          <span>
          </span>
        </div>
      </mat-card>
    </mat-form-field>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormColorComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormColorComponent)),
                        multi: true
                    }
                ],
                styles: [`
      .close-btn {
        position: absolute;
        right: -4px;
        top: -4px;
        transform: scale(0.6);
      }
      .m-top {
        margin-top: -20px;
      }
      .bg-white {
        background-color: white !important;
      }
      .txt-black {
        color: black;
      }
      .txt-grey {
        color: grey;
      }
      .full-width {
        width: 100%;
      }
      .box {
        max-width: 200px;
      }
      .has-pointer {
        cursor: pointer;
      }
      .flex-space-between {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `]
            }] }
];
LibFormColorComponent.propDecorators = {
    defaultColor: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LibFormColorComponent.prototype.defaultColor;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SimpleLog {
    /**
     * @param {?} debug
     */
    constructor(debug) {
        this.debug = debug;
    }
    /**
     * @return {?}
     */
    get log() {
        if (!this.debug) {
            return (/**
             * @param {...?} any
             * @return {?}
             */
            (...any) => { });
        }
        /** @type {?} */
        const boundLogFn = console.log.bind(console, 'mat-reduce:: ');
        return boundLogFn;
    }
    /**
     * @return {?}
     */
    get warn() {
        if (!this.debug) {
            return (/**
             * @param {...?} any
             * @return {?}
             */
            (...any) => { });
        }
        /** @type {?} */
        const boundLogFn = console.warn.bind(console, 'mat-reduce:: ');
        return boundLogFn;
    }
}
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
class LibFormDateComponent extends FormBase {
    constructor() {
        super(...arguments);
        this.placeholder = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.logger = new SimpleLog(this.debug);
    }
    /**
     * @return {?}
     */
    get minDate() {
        if (this.AfterDate) {
            return this.AfterDate;
        }
        if (this.isAfterToday) {
            return new Date();
        }
        return null;
    }
    /**
     * @return {?}
     */
    CheckValueIsValid() {
        /** @type {?} */
        const formValue = this.value;
        /** @type {?} */
        let formDate = formValue;
        if (typeof formValue === 'string' || !formValue) {
            formDate = new Date(formValue);
        }
        this.logger.log('form-date: CheckValueIsValid()', {
            formValue,
            formDate,
            isAfterToday: this.isAfterToday,
            isAfterDate: this.AfterDate
        });
        if (this.isAfterToday) {
            /** @type {?} */
            const todaysDate = new Date();
            /** @type {?} */
            const isAfterToday = this.isNewDateAfterThis(formDate, todaysDate);
            if (!isAfterToday) {
                return 'Date must be after today\'s date';
            }
        }
        if (this.AfterDate) {
            /** @type {?} */
            const isAfterDate = this.isNewDateAfterThis(formDate, this.AfterDate);
            if (!isAfterDate) {
                return 'Date must be after date: ' + this.AfterDate.toDateString();
            }
        }
        return null;
    }
    /**
     * @private
     * @param {?} formDate
     * @param {?} afterDate
     * @return {?}
     */
    isNewDateAfterThis(formDate, afterDate) {
        this.logger.log('form-date: isNewDateAfterThis()', {
            formDate,
            afterDate
        });
        if (!formDate || typeof formDate.getTime !== 'function') {
            console.error('the form control value is not a valid Date', { formDate });
            throw new Error();
        }
        if (!afterDate || typeof afterDate.getTime !== 'function') {
            console.error('AfterDate is not a valid Date', { afterDate });
            throw new Error();
        }
        /** @type {?} */
        const afterSeconds = afterDate.getTime();
        /** @type {?} */
        const formSeconds = formDate.getTime();
        /** @type {?} */
        const isAfter = afterSeconds < formSeconds;
        this.logger.log('form-date: isNewDateAfterThis()', {
            afterSeconds,
            formSeconds,
            isAfter
        });
        return isAfter;
    }
}
LibFormDateComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-date',
                template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <input
        matInput
        (focus)="picker.open()"
        [min]="minDate"
        [matDatepicker]="picker"
        [disabled]="disabled"
        [placeholder]="placeholder"
        [(ngModel)]="value"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
      />
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormDateComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormDateComponent)),
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
class LibFormTimeComponent extends FormBase {
    constructor() {
        super(...arguments);
        this.placeholder = '';
    }
}
LibFormTimeComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-time',
                template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <input
        matInput
        [formControl]="internalControl"
        [ngxTimepicker]="picker"
        [placeholder]="placeholder"
        [format]="format"
        [min]="min"
        [max]="max"
        [name]="autoCompleteObscureName"
        autocomplete="false"
      />
      <mat-icon
        matSuffix
        class="has-pointer"
        [class.is-grey]="disabled"
        (click)="picker.open()"
      >
        access_time
      </mat-icon>
      <ngx-material-timepicker
        #picker
        [defaultTime]="defaultTime"
        [minutesGap]="minutesGap"
        ESC="true"
      ></ngx-material-timepicker>
    </mat-form-field>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTimeComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTimeComponent)),
                        multi: true
                    }
                ],
                styles: [`
      .is-grey {
        color: #aaa;
      }
      .has-pointer {
        cursor: pointer;
      }
      .full-width {
        width: 100%;
      }
    `]
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
class LibFormSignatureComponent extends FormBase {
    constructor() {
        super(...arguments);
        this.placeholder = 'Sign Here';
        this.blankImageSrc = 'https://i.imgur.com/4StmpUT.png';
        this.signaturePadOptions = {
            minWidth: 2,
            canvasWidth: 400,
            canvasHeight: 200
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.autoCompleteObscureName = v1();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.updateWidthToParent();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        this.setSignatureToPad();
    }
    /**
     * @return {?}
     */
    updateWidthToParent() {
        /** @type {?} */
        const pad = this.signaturePad.nativeElement;
        if (!pad) {
            return;
        }
        /** @type {?} */
        const containerWidth = this.container.nativeElement.clientWidth;
        if (containerWidth < 600) {
            /** @type {?} */
            const marginLeftAndRight = 20 * 2;
            pad.set('canvasWidth', containerWidth - marginLeftAndRight - 10);
        }
    }
    /**
     * @return {?}
     */
    setSignatureToPad() {
        // Set current signature from control
        /** @type {?} */
        const currentSignature = this.value;
        if (!this.signaturePad || !currentSignature) {
            return;
        }
        /** @type {?} */
        const pad = this.signaturePad.nativeElement;
        pad.fromDataURL(currentSignature);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    drawComplete(e) {
        if (!e) {
            return;
        }
        /** @type {?} */
        const imgData = e.toDataURL();
        this.value = imgData;
    }
}
LibFormSignatureComponent.decorators = [
    { type: Component, args: [{
                selector: 'form-signature',
                template: `
    <h3>{{ placeholder }}</h3>
    <div #container class="signature-container">
      <div class="signature-border" [class.disabled-border]="disabled">
        <signature-pad
          #signaturePad
          [hidden]="disabled"
          [options]="signaturePadOptions"
          (onEndEvent)="drawComplete(signaturePad)"
        ></signature-pad>
        <img [hidden]="!disabled" [src]="this.value || blankImageSrc" />
      </div>
    </div>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormSignatureComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormSignatureComponent)),
                        multi: true
                    }
                ],
                styles: [`
      h3 {
        display: inline-block;
        margin-bottom: 0;
      }
      .signature-container {
        display: inline-block;
        width: 100%;
      }
      .signature-border {
        display: inline-block;
        border: 1px #777 solid;
        margin: 20px;
        height: 200px;
      }
      .disabled-border {
        border: 2px #aaa dotted;
      }
      img {
        height: 100%;
      }
    `]
            }] }
];
LibFormSignatureComponent.propDecorators = {
    placeholder: [{ type: Input }],
    signaturePad: [{ type: ViewChild, args: ['signaturePad', (/** @type {?} */ ({ static: false })),] }],
    container: [{ type: ViewChild, args: ['container',] }]
};
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
class Counter {
    /**
     * @param {?} quill
     * @param {?} options
     */
    constructor(quill, options) {
        this.updateTrigger = new Subject();
        this.quill = quill;
        this.options = options;
        /** @type {?} */
        const container = document.querySelector(this.options.container);
        this.quill.on('text-change', (/**
         * @return {?}
         */
        () => {
            this.updateTrigger.next();
        }));
        this.updateTrigger.pipe(debounceTime(2000)).subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const length = this.calculate();
            container.innerHTML = length + ' ' + this.options.units;
            // console.log('form-html-editor: updating counter =' + container.innerHTML);
        }));
    }
    /**
     * @return {?}
     */
    calculate() {
        /** @type {?} */
        const text = this.quill.getText().trim();
        if (this.options.units === 'words') {
            return !text ? 0 : text.split(/\s+/).length;
        }
        if (this.options.units === 'kb') {
            /** @type {?} */
            const html = this.quill.root.innerHTML;
            return Math.round(html.length / 1024);
        }
        return text.length;
    }
}
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
    const DirectionAttribute = Quill.import('attributors/attribute/direction');
    Quill.register(DirectionAttribute, true);
    /** @type {?} */
    const AlignClass = Quill.import('attributors/class/align');
    Quill.register(AlignClass, true);
    /** @type {?} */
    const BackgroundClass = Quill.import('attributors/class/background');
    Quill.register(BackgroundClass, true);
    /** @type {?} */
    const ColorClass = Quill.import('attributors/class/color');
    Quill.register(ColorClass, true);
    /** @type {?} */
    const DirectionClass = Quill.import('attributors/class/direction');
    Quill.register(DirectionClass, true);
    /** @type {?} */
    const FontClass = Quill.import('attributors/class/font');
    Quill.register(FontClass, true);
    /** @type {?} */
    const SizeClass = Quill.import('attributors/class/size');
    Quill.register(SizeClass, true);
    /** @type {?} */
    const AlignStyle = Quill.import('attributors/style/align');
    Quill.register(AlignStyle, true);
    /** @type {?} */
    const BackgroundStyle = Quill.import('attributors/style/background');
    Quill.register(BackgroundStyle, true);
    /** @type {?} */
    const ColorStyle = Quill.import('attributors/style/color');
    Quill.register(ColorStyle, true);
    /** @type {?} */
    const DirectionStyle = Quill.import('attributors/style/direction');
    Quill.register(DirectionStyle, true);
    /** @type {?} */
    const FontStyle = Quill.import('attributors/style/font');
    Quill.register(FontStyle, true);
    /** @type {?} */
    const SizeStyle = Quill.import('attributors/style/size');
    Quill.register(SizeStyle, true);
    // create new Quill instance after...
    /** @type {?} */
    const BaseImageFormat = Quill.import('formats/image');
    /** @type {?} */
    const ImageFormatAttributesList = ['alt', 'height', 'width', 'style'];
    class ImageFormat extends BaseImageFormat {
        /**
         * @param {?} domNode
         * @return {?}
         */
        static formats(domNode) {
            return ImageFormatAttributesList.reduce((/**
             * @param {?} formats
             * @param {?} attribute
             * @return {?}
             */
            (formats, attribute) => {
                if (domNode.hasAttribute(attribute)) {
                    formats[attribute] = domNode.getAttribute(attribute);
                }
                return formats;
            }), {});
        }
        /**
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        format(name, value) {
            if (ImageFormatAttributesList.indexOf(name) > -1) {
                if (value) {
                    this.domNode.setAttribute(name, value);
                }
                else {
                    this.domNode.removeAttribute(name);
                }
            }
            else {
                super.format(name, value);
            }
        }
    }
    Quill.register(ImageFormat, true);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const Quill = QuillNamespace;
AddQuillInlineStyles(Quill);
Quill.register('modules/htmlEditButton', htmlEditButton);
Quill.register('modules/counter', Counter);
Quill.register('modules/counterChars', Counter);
Quill.register('modules/counterKiloBytes', Counter);
Quill.register('modules/imageDrop', ImageDrop);
Quill.register('modules/imageCompress', ImageCompress);
Quill.register('modules/imageResize', ImageResize);
class LibFormQuillEditorComponent extends FormBase {
    constructor() {
        super(...arguments);
        this.quillModules = {};
        this.maxImageWidth = 2000;
        this.placeholder = 'Input content here...';
        this.quillModulesUsed = {};
        this.onContentChanged = new Subject();
        this.destroyed = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.logger = new SimpleLog(this.debug);
        /** @type {?} */
        const quillModulesDefaults = {
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
        this.quillModulesUsed = Object.assign({}, quillModulesDefaults, this.quillModules);
        this.onContentChanged
            .pipe(debounceTime(1000), takeUntil(this.destroyed), distinctUntilChanged())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const htmlValue = event.html || '<p></p>';
            this.logger.log('LibFormQuillEditorComponent:', { htmlValue, event });
            this.writeValue(htmlValue);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed.next();
    }
}
LibFormQuillEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'form-quill-editor',
                template: `
    <div [class.editor-disabled]="disabled">
      <quill-editor
        (onContentChanged)="onContentChanged.next($event)"
        [ngModel]="value"
        [modules]="quillModulesUsed"
        [disabled]="disabled"
        [placeholder]="placeholder"
      >
        <div quill-editor-toolbar>
          <span class="ql-formats">
            <select class="ql-font">
              <option selected></option>
              <option value="serif"></option>
              <option value="monospace"></option>
            </select>
            <select class="ql-header">
              <option value="1"></option>
              <option value="2"></option>
              <option value="3"></option>
              <option value="4"></option>
              <option value="5"></option>
              <option value="6"></option>
              <option selected></option>
            </select>
          </span>
          <span class="ql-formats">
            <button class="ql-bold"></button>
            <button class="ql-italic"></button>
            <button class="ql-underline"></button>
            <button class="ql-strike"></button>
          </span>
          <span class="ql-formats">
            <select class="ql-color"></select>
            <select class="ql-background"></select>
          </span>
          <span class="ql-formats">
            <button class="ql-list" value="ordered"></button>
            <button class="ql-list" value="bullet"></button>
            <select class="ql-align">
              <option selected></option>
              <option value="center"></option>
              <option value="right"></option>
              <option value="justify"></option>
            </select>
          </span>
          <span class="ql-formats">
            <button class="ql-link"></button>
            <button class="ql-image"></button>
          </span>
          <span class="ql-formats font12px">
            <div id="counter"></div>
          </span>
          <span class="ql-formats font12px">
            <div id="counterChars"></div>
          </span>
          <span class="ql-formats font12px">
            <div id="counterKiloBytes"></div>
          </span>
        </div>
      </quill-editor>
    </div>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormQuillEditorComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormQuillEditorComponent)),
                        multi: true
                    }
                ],
                encapsulation: ViewEncapsulation.None,
                styles: [`
      .font12px {
        font-size: 12px;
      }
      .editor-disabled {
        filter: contrast(0.4) brightness(1.5);
      }
      .ql-editor {
        white-space: normal !important;
      }
    `, "/*!\n * Quill Editor v1.3.7\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */.ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative}.ql-container.ql-disabled .ql-tooltip{visibility:hidden}.ql-container.ql-disabled .ql-editor ul[data-checked]>li::before{pointer-events:none}.ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.ql-clipboard p{margin:0;padding:0}.ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:0;overflow-y:auto;padding:12px 15px;-o-tab-size:4;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.ql-editor>*{cursor:text}.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre,.ql-editor ul{margin:0;padding:0;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol,.ql-editor ul{padding-left:1.5em}.ql-editor ol>li,.ql-editor ul>li{list-style-type:none}.ql-editor ul>li::before{content:'\\2022'}.ql-editor ul[data-checked=false],.ql-editor ul[data-checked=true]{pointer-events:none}.ql-editor ul[data-checked=false]>li *,.ql-editor ul[data-checked=true]>li *{pointer-events:all}.ql-editor ul[data-checked=false]>li::before,.ql-editor ul[data-checked=true]>li::before{color:#777;cursor:pointer;pointer-events:all}.ql-editor ul[data-checked=true]>li::before{content:'\\2611'}.ql-editor ul[data-checked=false]>li::before{content:'\\2610'}.ql-editor li::before{display:inline-block;white-space:nowrap;width:1.2em}.ql-editor li:not(.ql-direction-rtl)::before{margin-left:-1.5em;margin-right:.3em;text-align:right}.ql-editor li.ql-direction-rtl::before{margin-left:.3em;margin-right:-1.5em}.ql-editor ol li:not(.ql-direction-rtl),.ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.ql-editor ol li.ql-direction-rtl,.ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.ql-editor ol li:before{content:counter(list-0,decimal) '. '}.ql-editor ol li.ql-indent-1{counter-increment:list-1;counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) '. '}.ql-editor ol li.ql-indent-2{counter-increment:list-2;counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) '. '}.ql-editor ol li.ql-indent-3{counter-increment:list-3;counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) '. '}.ql-editor ol li.ql-indent-4{counter-increment:list-4;counter-reset:list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) '. '}.ql-editor ol li.ql-indent-5{counter-increment:list-5;counter-reset:list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) '. '}.ql-editor ol li.ql-indent-6{counter-increment:list-6;counter-reset:list-7 list-8 list-9}.ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) '. '}.ql-editor ol li.ql-indent-7{counter-increment:list-7;counter-reset:list-8 list-9}.ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) '. '}.ql-editor ol li.ql-indent-8{counter-increment:list-8;counter-reset:list-9}.ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) '. '}.ql-editor ol li.ql-indent-9{counter-increment:list-9}.ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) '. '}.ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.ql-editor .ql-video{display:block;max-width:100%}.ql-editor .ql-video.ql-align-center{margin:0 auto}.ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.ql-editor .ql-bg-black{background-color:#000}.ql-editor .ql-bg-red{background-color:#e60000}.ql-editor .ql-bg-orange{background-color:#f90}.ql-editor .ql-bg-yellow{background-color:#ff0}.ql-editor .ql-bg-green{background-color:#008a00}.ql-editor .ql-bg-blue{background-color:#06c}.ql-editor .ql-bg-purple{background-color:#93f}.ql-editor .ql-color-white{color:#fff}.ql-editor .ql-color-red{color:#e60000}.ql-editor .ql-color-orange{color:#f90}.ql-editor .ql-color-yellow{color:#ff0}.ql-editor .ql-color-green{color:#008a00}.ql-editor .ql-color-blue{color:#06c}.ql-editor .ql-color-purple{color:#93f}.ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.ql-editor .ql-size-small{font-size:.75em}.ql-editor .ql-size-large{font-size:1.5em}.ql-editor .ql-size-huge{font-size:2.5em}.ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.ql-editor .ql-align-center{text-align:center}.ql-editor .ql-align-justify{text-align:justify}.ql-editor .ql-align-right{text-align:right}.ql-editor.ql-blank::before{color:rgba(0,0,0,.6);content:attr(data-placeholder);font-style:italic;left:15px;pointer-events:none;position:absolute;right:15px}.ql-snow .ql-toolbar:after,.ql-snow.ql-toolbar:after{clear:both;content:'';display:table}.ql-snow .ql-toolbar button,.ql-snow.ql-toolbar button{background:0 0;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.ql-snow .ql-toolbar button svg,.ql-snow.ql-toolbar button svg{float:left;height:100%}.ql-snow .ql-toolbar button:active:hover,.ql-snow.ql-toolbar button:active:hover{outline:0}.ql-snow .ql-toolbar input.ql-image[type=file],.ql-snow.ql-toolbar input.ql-image[type=file]{display:none}.ql-snow .ql-toolbar .ql-picker-item.ql-selected,.ql-snow .ql-toolbar .ql-picker-item:hover,.ql-snow .ql-toolbar .ql-picker-label.ql-active,.ql-snow .ql-toolbar .ql-picker-label:hover,.ql-snow .ql-toolbar button.ql-active,.ql-snow .ql-toolbar button:focus,.ql-snow .ql-toolbar button:hover,.ql-snow.ql-toolbar .ql-picker-item.ql-selected,.ql-snow.ql-toolbar .ql-picker-item:hover,.ql-snow.ql-toolbar .ql-picker-label.ql-active,.ql-snow.ql-toolbar .ql-picker-label:hover,.ql-snow.ql-toolbar button.ql-active,.ql-snow.ql-toolbar button:focus,.ql-snow.ql-toolbar button:hover{color:#06c}.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:focus .ql-fill,.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover .ql-fill,.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:focus .ql-fill,.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover .ql-fill,.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill{fill:#06c}.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow .ql-toolbar button.ql-active .ql-stroke,.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar button:focus .ql-stroke,.ql-snow .ql-toolbar button:focus .ql-stroke-miter,.ql-snow .ql-toolbar button:hover .ql-stroke,.ql-snow .ql-toolbar button:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow.ql-toolbar button.ql-active .ql-stroke,.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar button:focus .ql-stroke,.ql-snow.ql-toolbar button:focus .ql-stroke-miter,.ql-snow.ql-toolbar button:hover .ql-stroke,.ql-snow.ql-toolbar button:hover .ql-stroke-miter{stroke:#06c}@media (pointer:coarse){.ql-snow .ql-toolbar button:hover:not(.ql-active),.ql-snow.ql-toolbar button:hover:not(.ql-active){color:#444}.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#444}}.ql-snow,.ql-snow *{box-sizing:border-box}.ql-snow .ql-hidden{display:none}.ql-snow .ql-out-bottom,.ql-snow .ql-out-top{visibility:hidden}.ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none;line-height:26px}.ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.ql-snow .ql-formats{display:inline-block;vertical-align:middle}.ql-snow .ql-formats:after{clear:both;content:'';display:table}.ql-snow .ql-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ql-snow .ql-stroke-miter{fill:none;stroke:#444;stroke-miterlimit:10;stroke-width:2}.ql-snow .ql-fill,.ql-snow .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-empty{fill:none}.ql-snow .ql-even{fill-rule:evenodd}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1}.ql-snow .ql-transparent{opacity:.4}.ql-snow .ql-direction svg:last-child{display:none}.ql-snow .ql-direction.ql-active svg:last-child{display:inline}.ql-snow .ql-direction.ql-active svg:first-child{display:none}.ql-snow .ql-editor h1{font-size:2em}.ql-snow .ql-editor h2{font-size:1.5em}.ql-snow .ql-editor h3{font-size:1.17em}.ql-snow .ql-editor h4{font-size:1em}.ql-snow .ql-editor h5{font-size:.83em}.ql-snow .ql-editor h6{font-size:.67em}.ql-snow .ql-editor a{text-decoration:underline}.ql-snow .ql-editor blockquote{border-left:4px solid #ccc;margin-bottom:5px;margin-top:5px;padding-left:16px}.ql-snow .ql-editor code,.ql-snow .ql-editor pre{background-color:#f0f0f0;border-radius:3px}.ql-snow .ql-editor pre{white-space:pre-wrap;margin-bottom:5px;margin-top:5px;padding:5px 10px}.ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.ql-snow .ql-editor pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}.ql-snow .ql-editor img{max-width:100%}.ql-snow .ql-picker{color:#444;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.ql-snow .ql-picker-label::before{display:inline-block;line-height:22px}.ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#ccc;z-index:2}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.ql-snow .ql-color-picker,.ql-snow .ql-icon-picker{width:28px}.ql-snow .ql-color-picker .ql-picker-label,.ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-label svg,.ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before{content:attr(data-label)}.ql-snow .ql-picker.ql-header{width:98px}.ql-snow .ql-picker.ql-header .ql-picker-item::before,.ql-snow .ql-picker.ql-header .ql-picker-label::before{content:'Normal'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before{content:'Heading 1'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before{content:'Heading 2'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before{content:'Heading 3'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before{content:'Heading 4'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before{content:'Heading 5'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before{content:'Heading 6'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before{font-size:2em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before{font-size:1.5em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before{font-size:1.17em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before{font-size:1em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before{font-size:.83em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before{font-size:.67em}.ql-snow .ql-picker.ql-font{width:108px}.ql-snow .ql-picker.ql-font .ql-picker-item::before,.ql-snow .ql-picker.ql-font .ql-picker-label::before{content:'Sans Serif'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before{content:'Serif'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before{content:'Monospace'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before{font-family:Georgia,Times New Roman,serif}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before{font-family:Monaco,Courier New,monospace}.ql-snow .ql-picker.ql-size{width:98px}.ql-snow .ql-picker.ql-size .ql-picker-item::before,.ql-snow .ql-picker.ql-size .ql-picker-label::before{content:'Normal'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before{content:'Small'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before{content:'Large'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before{content:'Huge'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before{font-size:10px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before{font-size:18px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before{font-size:32px}.ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.ql-toolbar.ql-snow{border:1px solid #ccc;box-sizing:border-box;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;padding:8px}.ql-toolbar.ql-snow .ql-formats{margin-right:15px}.ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:rgba(0,0,0,.2) 0 2px 8px}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label,.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#ccc}.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0}.ql-snow .ql-tooltip{background-color:#fff;border:1px solid #ccc;box-shadow:0 0 5px #ddd;color:#444;padding:5px 12px;white-space:nowrap}.ql-snow .ql-tooltip::before{content:\"Visit URL:\";line-height:26px;margin-right:8px}.ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #ccc;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.ql-snow .ql-tooltip a.ql-action::after{border-right:1px solid #ccc;content:'Edit';margin-left:16px;padding-right:8px}.ql-snow .ql-tooltip a.ql-remove::before{content:'Remove';margin-left:8px}.ql-snow .ql-tooltip.ql-editing a.ql-preview,.ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.ql-snow .ql-tooltip.ql-editing a.ql-action::after{border-right:0;content:'Save';padding-right:0}.ql-snow .ql-tooltip[data-mode=link]::before{content:\"Enter link:\"}.ql-snow .ql-tooltip[data-mode=formula]::before{content:\"Enter formula:\"}.ql-snow .ql-tooltip[data-mode=video]::before{content:\"Enter video:\"}.ql-snow a{color:#06c}.ql-container.ql-snow{border:1px solid #ccc}", "/*!\n * Quill Editor v1.3.7\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */.ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative}.ql-container.ql-disabled .ql-tooltip{visibility:hidden}.ql-container.ql-disabled .ql-editor ul[data-checked]>li::before{pointer-events:none}.ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.ql-clipboard p{margin:0;padding:0}.ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:0;overflow-y:auto;padding:12px 15px;-o-tab-size:4;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.ql-editor>*{cursor:text}.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre,.ql-editor ul{margin:0;padding:0;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol,.ql-editor ul{padding-left:1.5em}.ql-editor ol>li,.ql-editor ul>li{list-style-type:none}.ql-editor ul>li::before{content:'\\2022'}.ql-editor ul[data-checked=false],.ql-editor ul[data-checked=true]{pointer-events:none}.ql-editor ul[data-checked=false]>li *,.ql-editor ul[data-checked=true]>li *{pointer-events:all}.ql-editor ul[data-checked=false]>li::before,.ql-editor ul[data-checked=true]>li::before{color:#777;cursor:pointer;pointer-events:all}.ql-editor ul[data-checked=true]>li::before{content:'\\2611'}.ql-editor ul[data-checked=false]>li::before{content:'\\2610'}.ql-editor li::before{display:inline-block;white-space:nowrap;width:1.2em}.ql-editor li:not(.ql-direction-rtl)::before{margin-left:-1.5em;margin-right:.3em;text-align:right}.ql-editor li.ql-direction-rtl::before{margin-left:.3em;margin-right:-1.5em}.ql-editor ol li:not(.ql-direction-rtl),.ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.ql-editor ol li.ql-direction-rtl,.ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.ql-editor ol li:before{content:counter(list-0,decimal) '. '}.ql-editor ol li.ql-indent-1{counter-increment:list-1;counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) '. '}.ql-editor ol li.ql-indent-2{counter-increment:list-2;counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) '. '}.ql-editor ol li.ql-indent-3{counter-increment:list-3;counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) '. '}.ql-editor ol li.ql-indent-4{counter-increment:list-4;counter-reset:list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) '. '}.ql-editor ol li.ql-indent-5{counter-increment:list-5;counter-reset:list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) '. '}.ql-editor ol li.ql-indent-6{counter-increment:list-6;counter-reset:list-7 list-8 list-9}.ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) '. '}.ql-editor ol li.ql-indent-7{counter-increment:list-7;counter-reset:list-8 list-9}.ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) '. '}.ql-editor ol li.ql-indent-8{counter-increment:list-8;counter-reset:list-9}.ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) '. '}.ql-editor ol li.ql-indent-9{counter-increment:list-9}.ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) '. '}.ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.ql-editor .ql-video{display:block;max-width:100%}.ql-editor .ql-video.ql-align-center{margin:0 auto}.ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.ql-editor .ql-bg-black{background-color:#000}.ql-editor .ql-bg-red{background-color:#e60000}.ql-editor .ql-bg-orange{background-color:#f90}.ql-editor .ql-bg-yellow{background-color:#ff0}.ql-editor .ql-bg-green{background-color:#008a00}.ql-editor .ql-bg-blue{background-color:#06c}.ql-editor .ql-bg-purple{background-color:#93f}.ql-editor .ql-color-white{color:#fff}.ql-editor .ql-color-red{color:#e60000}.ql-editor .ql-color-orange{color:#f90}.ql-editor .ql-color-yellow{color:#ff0}.ql-editor .ql-color-green{color:#008a00}.ql-editor .ql-color-blue{color:#06c}.ql-editor .ql-color-purple{color:#93f}.ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.ql-editor .ql-size-small{font-size:.75em}.ql-editor .ql-size-large{font-size:1.5em}.ql-editor .ql-size-huge{font-size:2.5em}.ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.ql-editor .ql-align-center{text-align:center}.ql-editor .ql-align-justify{text-align:justify}.ql-editor .ql-align-right{text-align:right}.ql-editor.ql-blank::before{color:rgba(0,0,0,.6);content:attr(data-placeholder);font-style:italic;left:15px;pointer-events:none;position:absolute;right:15px}.ql-bubble .ql-toolbar:after,.ql-bubble.ql-toolbar:after{clear:both;content:'';display:table}.ql-bubble .ql-toolbar button,.ql-bubble.ql-toolbar button{background:0 0;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.ql-bubble .ql-toolbar button svg,.ql-bubble.ql-toolbar button svg{float:left;height:100%}.ql-bubble .ql-toolbar button:active:hover,.ql-bubble.ql-toolbar button:active:hover{outline:0}.ql-bubble .ql-toolbar input.ql-image[type=file],.ql-bubble.ql-toolbar input.ql-image[type=file]{display:none}.ql-bubble .ql-toolbar .ql-picker-item.ql-selected,.ql-bubble .ql-toolbar .ql-picker-item:hover,.ql-bubble .ql-toolbar .ql-picker-label.ql-active,.ql-bubble .ql-toolbar .ql-picker-label:hover,.ql-bubble .ql-toolbar button.ql-active,.ql-bubble .ql-toolbar button:focus,.ql-bubble .ql-toolbar button:hover,.ql-bubble.ql-toolbar .ql-picker-item.ql-selected,.ql-bubble.ql-toolbar .ql-picker-item:hover,.ql-bubble.ql-toolbar .ql-picker-label.ql-active,.ql-bubble.ql-toolbar .ql-picker-label:hover,.ql-bubble.ql-toolbar button.ql-active,.ql-bubble.ql-toolbar button:focus,.ql-bubble.ql-toolbar button:hover{color:#fff}.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-fill,.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-fill,.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-bubble .ql-toolbar button.ql-active .ql-fill,.ql-bubble .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-bubble .ql-toolbar button:focus .ql-fill,.ql-bubble .ql-toolbar button:focus .ql-stroke.ql-fill,.ql-bubble .ql-toolbar button:hover .ql-fill,.ql-bubble .ql-toolbar button:hover .ql-stroke.ql-fill,.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-fill,.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-fill,.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-bubble.ql-toolbar button.ql-active .ql-fill,.ql-bubble.ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-bubble.ql-toolbar button:focus .ql-fill,.ql-bubble.ql-toolbar button:focus .ql-stroke.ql-fill,.ql-bubble.ql-toolbar button:hover .ql-fill,.ql-bubble.ql-toolbar button:hover .ql-stroke.ql-fill{fill:#fff}.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-bubble .ql-toolbar button.ql-active .ql-stroke,.ql-bubble .ql-toolbar button.ql-active .ql-stroke-miter,.ql-bubble .ql-toolbar button:focus .ql-stroke,.ql-bubble .ql-toolbar button:focus .ql-stroke-miter,.ql-bubble .ql-toolbar button:hover .ql-stroke,.ql-bubble .ql-toolbar button:hover .ql-stroke-miter,.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-bubble.ql-toolbar button.ql-active .ql-stroke,.ql-bubble.ql-toolbar button.ql-active .ql-stroke-miter,.ql-bubble.ql-toolbar button:focus .ql-stroke,.ql-bubble.ql-toolbar button:focus .ql-stroke-miter,.ql-bubble.ql-toolbar button:hover .ql-stroke,.ql-bubble.ql-toolbar button:hover .ql-stroke-miter{stroke:#fff}@media (pointer:coarse){.ql-bubble .ql-toolbar button:hover:not(.ql-active),.ql-bubble.ql-toolbar button:hover:not(.ql-active){color:#ccc}.ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#ccc}.ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#ccc}}.ql-bubble,.ql-bubble *{box-sizing:border-box}.ql-bubble .ql-hidden{display:none}.ql-bubble .ql-out-bottom,.ql-bubble .ql-out-top{visibility:hidden}.ql-bubble .ql-tooltip{position:absolute;transform:translateY(10px)}.ql-bubble .ql-tooltip a{cursor:pointer;text-decoration:none}.ql-bubble .ql-tooltip.ql-flip{transform:translateY(-10px)}.ql-bubble .ql-formats{display:inline-block;vertical-align:middle}.ql-bubble .ql-formats:after{clear:both;content:'';display:table}.ql-bubble .ql-stroke{fill:none;stroke:#ccc;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ql-bubble .ql-stroke-miter{fill:none;stroke:#ccc;stroke-miterlimit:10;stroke-width:2}.ql-bubble .ql-fill,.ql-bubble .ql-stroke.ql-fill{fill:#ccc}.ql-bubble .ql-empty{fill:none}.ql-bubble .ql-even{fill-rule:evenodd}.ql-bubble .ql-stroke.ql-thin,.ql-bubble .ql-thin{stroke-width:1}.ql-bubble .ql-transparent{opacity:.4}.ql-bubble .ql-direction svg:last-child{display:none}.ql-bubble .ql-direction.ql-active svg:last-child{display:inline}.ql-bubble .ql-direction.ql-active svg:first-child{display:none}.ql-bubble .ql-editor h1{font-size:2em}.ql-bubble .ql-editor h2{font-size:1.5em}.ql-bubble .ql-editor h3{font-size:1.17em}.ql-bubble .ql-editor h4{font-size:1em}.ql-bubble .ql-editor h5{font-size:.83em}.ql-bubble .ql-editor h6{font-size:.67em}.ql-bubble .ql-editor a{text-decoration:underline}.ql-bubble .ql-editor blockquote{border-left:4px solid #ccc;margin-bottom:5px;margin-top:5px;padding-left:16px}.ql-bubble .ql-editor code,.ql-bubble .ql-editor pre{background-color:#f0f0f0;border-radius:3px}.ql-bubble .ql-editor pre{white-space:pre-wrap;margin-bottom:5px;margin-top:5px;padding:5px 10px}.ql-bubble .ql-editor code{font-size:85%;padding:2px 4px}.ql-bubble .ql-editor pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}.ql-bubble .ql-editor img{max-width:100%}.ql-bubble .ql-picker{color:#ccc;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.ql-bubble .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.ql-bubble .ql-picker-label::before{display:inline-block;line-height:22px}.ql-bubble .ql-picker-options{background-color:#444;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.ql-bubble .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.ql-bubble .ql-picker.ql-expanded .ql-picker-label{color:#777;z-index:2}.ql-bubble .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#777}.ql-bubble .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#777}.ql-bubble .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.ql-bubble .ql-color-picker,.ql-bubble .ql-icon-picker{width:28px}.ql-bubble .ql-color-picker .ql-picker-label,.ql-bubble .ql-icon-picker .ql-picker-label{padding:2px 4px}.ql-bubble .ql-color-picker .ql-picker-label svg,.ql-bubble .ql-icon-picker .ql-picker-label svg{right:4px}.ql-bubble .ql-icon-picker .ql-picker-options{padding:4px 0}.ql-bubble .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.ql-bubble .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.ql-bubble .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.ql-bubble .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ql-bubble .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,.ql-bubble .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,.ql-bubble .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,.ql-bubble .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before,.ql-bubble .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before{content:attr(data-label)}.ql-bubble .ql-picker.ql-header{width:98px}.ql-bubble .ql-picker.ql-header .ql-picker-item::before,.ql-bubble .ql-picker.ql-header .ql-picker-label::before{content:'Normal'}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before{content:'Heading 1'}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before{content:'Heading 2'}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before{content:'Heading 3'}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before{content:'Heading 4'}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before{content:'Heading 5'}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before,.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before{content:'Heading 6'}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before{font-size:2em}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before{font-size:1.5em}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before{font-size:1.17em}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before{font-size:1em}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before{font-size:.83em}.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before{font-size:.67em}.ql-bubble .ql-picker.ql-font{width:108px}.ql-bubble .ql-picker.ql-font .ql-picker-item::before,.ql-bubble .ql-picker.ql-font .ql-picker-label::before{content:'Sans Serif'}.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=serif]::before,.ql-bubble .ql-picker.ql-font .ql-picker-label[data-value=serif]::before{content:'Serif'}.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before,.ql-bubble .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before{content:'Monospace'}.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=serif]::before{font-family:Georgia,Times New Roman,serif}.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before{font-family:Monaco,Courier New,monospace}.ql-bubble .ql-picker.ql-size{width:98px}.ql-bubble .ql-picker.ql-size .ql-picker-item::before,.ql-bubble .ql-picker.ql-size .ql-picker-label::before{content:'Normal'}.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=small]::before,.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=small]::before{content:'Small'}.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=large]::before,.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=large]::before{content:'Large'}.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=huge]::before,.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=huge]::before{content:'Huge'}.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=small]::before{font-size:10px}.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=large]::before{font-size:18px}.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=huge]::before{font-size:32px}.ql-bubble .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.ql-bubble .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.ql-bubble .ql-toolbar .ql-formats{margin:8px 12px 8px 0}.ql-bubble .ql-toolbar .ql-formats:first-child{margin-left:12px}.ql-bubble .ql-color-picker svg{margin:1px}.ql-bubble .ql-color-picker .ql-picker-item.ql-selected,.ql-bubble .ql-color-picker .ql-picker-item:hover{border-color:#fff}.ql-bubble .ql-tooltip{background-color:#444;border-radius:25px;color:#fff}.ql-bubble .ql-tooltip-arrow{border-left:6px solid transparent;border-right:6px solid transparent;content:\" \";display:block;left:50%;margin-left:-6px;position:absolute}.ql-bubble .ql-tooltip:not(.ql-flip) .ql-tooltip-arrow{border-bottom:6px solid #444;top:-6px}.ql-bubble .ql-tooltip.ql-flip .ql-tooltip-arrow{border-top:6px solid #444;bottom:-6px}.ql-bubble .ql-tooltip.ql-editing .ql-tooltip-editor{display:block}.ql-bubble .ql-tooltip.ql-editing .ql-formats{visibility:hidden}.ql-bubble .ql-tooltip-editor{display:none}.ql-bubble .ql-tooltip-editor input[type=text]{background:0 0;border:none;color:#fff;font-size:13px;height:100%;outline:0;padding:10px 20px;position:absolute;width:100%}.ql-bubble .ql-tooltip-editor a{top:10px;position:absolute;right:20px}.ql-bubble .ql-tooltip-editor a:before{color:#ccc;content:\"\\D7\";font-size:16px;font-weight:700}.ql-container.ql-bubble:not(.ql-disabled) a{position:relative;white-space:nowrap}.ql-container.ql-bubble:not(.ql-disabled) a::before{background-color:#444;border-radius:15px;top:-5px;font-size:12px;color:#fff;content:attr(href);font-weight:400;overflow:hidden;padding:5px 15px;text-decoration:none;z-index:1}.ql-container.ql-bubble:not(.ql-disabled) a::after{border-top:6px solid #444;border-left:6px solid transparent;border-right:6px solid transparent;top:0;content:\" \";height:0;width:0}.ql-container.ql-bubble:not(.ql-disabled) a::after,.ql-container.ql-bubble:not(.ql-disabled) a::before{left:0;margin-left:50%;position:absolute;transform:translate(-50%,-100%);transition:visibility .2s;visibility:hidden}.ql-container.ql-bubble:not(.ql-disabled) a:hover::after,.ql-container.ql-bubble:not(.ql-disabled) a:hover::before{visibility:visible}"]
            }] }
];
LibFormQuillEditorComponent.propDecorators = {
    quillModules: [{ type: Input }],
    maxImageWidth: [{ type: Input }],
    placeholder: [{ type: Input }]
};
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
const exportedModules = [
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
const exported = [
    LibFormColorComponent,
    LibFormDateComponent,
    LibFormTimeComponent,
    LibFormSignatureComponent,
    LibFormQuillEditorComponent
];
class MatReduceFormsUsing3rdPartyModule {
}
MatReduceFormsUsing3rdPartyModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ...exportedModules,
                    CommonModule,
                    SignaturePadModule,
                    ColorPickerModule,
                    QuillModule,
                    NgxMaterialTimepickerModule
                ],
                exports: [...exported, ...exportedModules],
                declarations: [...exported],
                providers: []
            },] }
];

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
    let json1;
    /** @type {?} */
    let json2;
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
class LibFormSelectObjectMultipleComponent extends FormBase {
    constructor() {
        super(...arguments);
        this.compareObject = compareObject;
    }
}
LibFormSelectObjectMultipleComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-select-object-multiple',
                template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <mat-select
        [formControl]="this.internalControl"
        [placeholder]="placeholder"
        [compareWith]="compareObject"
        multiple
      >
        <mat-select-trigger>
          <div *ngIf="this.internalControl.value as selected">
            {{ selected?.length ? selected[0][selectionKey] : '' }}
            <span
              *ngIf="this.internalControl.value?.length > 1"
              class="example-additional-selection"
            >
              (+{{ selected.length - 1 }}
              {{ selected?.length === 2 ? 'other' : 'others' }})
            </span>
          </div>
        </mat-select-trigger>
        <mat-option
          *ngFor="let selectionObject of selectionObjects"
          [value]="selectionObject"
        >
          {{ selectionObject[selectionKey] }}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormSelectObjectMultipleComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormSelectObjectMultipleComponent)),
                        multi: true
                    }
                ],
                styles: [`
      .full-width {
        width: 100%;
        padding-bottom: 15px;
      }
    `]
            }] }
];
LibFormSelectObjectMultipleComponent.propDecorators = {
    selectionObjects: [{ type: Input }],
    selectionKey: [{ type: Input }]
};
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
class LibFormToggleComponent extends FormBase {
    constructor() {
        super(...arguments);
        this.yes = 'Yes';
        this.no = 'No';
    }
}
LibFormToggleComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-toggle',
                template: `
    <div class="full-width">
      <mat-slide-toggle
        [formControl]="internalControl"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
      >
        {{ placeholder }} ({{ value ? yes : no }})
      </mat-slide-toggle>
    </div>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormToggleComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormToggleComponent)),
                        multi: true
                    }
                ],
                styles: [`
      .full-width {
        width: 100%;
        padding-bottom: 15px;
      }
    `]
            }] }
];
LibFormToggleComponent.propDecorators = {
    yes: [{ type: Input }],
    no: [{ type: Input }]
};
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
class LibFormTextClearableComponent extends FormBase {
    constructor() {
        super(...arguments);
        this.locked = true;
    }
    /**
     * @return {?}
     */
    onClickEditLock() {
        this.locked = !this.locked;
        /** @type {?} */
        const isEditabled = !this.locked && !this.disabled;
        if (isEditabled) {
            this.internalControl.enable();
        }
        else {
            this.internalControl.disable();
        }
    }
}
LibFormTextClearableComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-text-clearable',
                template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <input
        *ngIf="!disabled && !locked"
        matInput
        [placeholder]="placeholder"
        [formControl]="internalControl"
        [name]="autoCompleteObscureName"
        [maxlength]="maxlength"
        autocomplete="dontcompleteme"
      />
      <input
        *ngIf="disabled || locked"
        matInput
        [disabled]="true"
        [value]="value"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
      />
      <mat-icon
        matSuffix
        class="has-pointer"
        *ngIf="!disabled"
        (click)="onClickEditLock()"
      >
        {{ locked ? 'edit' : 'locked' }}
      </mat-icon>
      <mat-icon matSuffix *ngIf="disabled" class="is-grey">
        edit
      </mat-icon>
    </mat-form-field>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTextClearableComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTextClearableComponent)),
                        multi: true
                    }
                ],
                styles: [`
      .is-grey {
        color: grey;
      }
    `]
            }] }
];
LibFormTextClearableComponent.propDecorators = {
    locked: [{ type: Input }],
    maxlength: [{ type: Input }]
};
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
class LibFormTextDisabledComponent extends FormBase {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        super();
        this.fb = fb;
        this.disabledControl = this.fb.control({
            value: '',
            disabled: true
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.disabledControl.setValue(this.internalControl.value);
        this.internalControl.valueChanges
            .pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.disabledControl.setValue(this.internalControl.value);
        }));
    }
}
LibFormTextDisabledComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-text-disabled',
                template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <input
        matInput
        [placeholder]="placeholder"
        [formControl]="disabledControl"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
      />
    </mat-form-field>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTextDisabledComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTextDisabledComponent)),
                        multi: true
                    }
                ],
                styles: [`
      .full-width {
        width: 100%;
      }
    `]
            }] }
];
/** @nocollapse */
LibFormTextDisabledComponent.ctorParameters = () => [
    { type: FormBuilderTypedService }
];
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
class LibFormTextIconsComponent extends FormBase {
    constructor() {
        super(...arguments);
        this.clearable = true;
        this.prefixIcon = 'search';
    }
    /**
     * @return {?}
     */
    onClickClear() {
        this.internalControl.reset();
    }
}
LibFormTextIconsComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-text-icons',
                template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <mat-icon matPrefix class="has-pointer" *ngIf="prefixIcon">
        {{ prefixIcon }}
      </mat-icon>
      <input
        matInput
        [formControl]="internalControl"
        [maxlength]="maxlength"
        [placeholder]="placeholder"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
      />
      <mat-icon
        matSuffix
        class="has-pointer"
        *ngIf="!disabled && clearable"
        (click)="onClickClear()"
      >
        clear
      </mat-icon>
    </mat-form-field>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTextIconsComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTextIconsComponent)),
                        multi: true
                    }
                ],
                styles: [`
      .is-grey {
        color: grey;
      }
    `]
            }] }
];
LibFormTextIconsComponent.propDecorators = {
    maxlength: [{ type: Input }],
    clearable: [{ type: Input }],
    prefixIcon: [{ type: Input }]
};
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
class LibFormTextPasswordComponent extends FormBase {
    constructor() {
        super(...arguments);
        this.hidePassword = true;
    }
    /**
     * @return {?}
     */
    get inputType() {
        return this.hidePassword ? 'password' : 'text';
    }
    /**
     * @return {?}
     */
    toggleHide() {
        this.hidePassword = !this.hidePassword;
    }
}
LibFormTextPasswordComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-text-password',
                template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <input
        matInput
        [placeholder]="placeholder"
        [maxlength]="maxlength"
        [formControl]="internalControl"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
        [type]="inputType"
      />
      <mat-icon matSuffix (click)="toggleHide()">{{
        hidePassword ? 'visibility_off' : 'visibility'
      }}</mat-icon>
    </mat-form-field>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTextPasswordComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTextPasswordComponent)),
                        multi: true
                    }
                ],
                styles: [`
      .full-width {
        width: 100%;
      }
    `]
            }] }
];
LibFormTextPasswordComponent.propDecorators = {
    maxlength: [{ type: Input }]
};
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
class LibFormTextComponent extends FormBase {
}
LibFormTextComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-text',
                template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <input
        matInput
        [placeholder]="placeholder"
        [maxlength]="maxlength"
        [formControl]="internalControl"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
      />
    </mat-form-field>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTextComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTextComponent)),
                        multi: true
                    }
                ],
                styles: [`
      .full-width {
        width: 100%;
      }
    `]
            }] }
];
LibFormTextComponent.propDecorators = {
    maxlength: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LibFormTextComponent.prototype.maxlength;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LibFormTextAreaDisabledComponent extends FormBase {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        super();
        this.fb = fb;
        this.rows = 4;
        this.disabledControl = this.fb.control({
            value: '',
            disabled: true
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.disabledControl.setValue(this.internalControl.value);
        this.internalControl.valueChanges
            .pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.disabledControl.setValue(this.internalControl.value);
        }));
    }
}
LibFormTextAreaDisabledComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-textarea-disabled',
                template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <textarea
        matInput
        [rows]="rows"
        [placeholder]="placeholder"
        [formControl]="disabledControl"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
      ></textarea>
    </mat-form-field>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTextAreaDisabledComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTextAreaDisabledComponent)),
                        multi: true
                    }
                ],
                styles: [`
      .full-width {
        width: 100%;
      }
    `]
            }] }
];
/** @nocollapse */
LibFormTextAreaDisabledComponent.ctorParameters = () => [
    { type: FormBuilderTypedService }
];
LibFormTextAreaDisabledComponent.propDecorators = {
    rows: [{ type: Input }]
};
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
class LibFormTextAreaComponent extends FormBase {
    constructor() {
        super(...arguments);
        this.rows = 4;
    }
}
LibFormTextAreaComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-textarea',
                template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <textarea
        matInput
        [rows]="rows"
        [placeholder]="placeholder"
        [maxlength]="maxlength"
        [formControl]="internalControl"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
      ></textarea>
    </mat-form-field>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTextAreaComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTextAreaComponent)),
                        multi: true
                    }
                ],
                styles: [`
      .full-width {
        width: 100%;
      }
    `]
            }] }
];
LibFormTextAreaComponent.propDecorators = {
    rows: [{ type: Input }],
    maxlength: [{ type: Input }]
};
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
class LibFormToggleReversedComponent extends FormBase {
    constructor() {
        super(...arguments);
        this.yes = 'Yes';
        this.no = 'No';
        this.reversedControl = new FormControl();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.reversedControl.valueChanges
            .pipe(takeUntil(this._destroyed), debounceTime(100))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            if (this.lockControl) {
                return;
            }
            this.value = !value;
            // console.log('reversedControl.valueChanges', { thisValue: this.value });
        }));
        this.internalControl.valueChanges
            .pipe(takeUntil(this._destroyed), debounceTime(100), tap((/**
         * @return {?}
         */
        () => (this.lockControl = true))), delay(100), tap((/**
         * @param {?} value
         * @return {?}
         */
        value => this.reversedControl.setValue(!value))), delay(100), tap((/**
         * @return {?}
         */
        () => (this.lockControl = false))))
            .subscribe((/**
         * @return {?}
         */
        () => {
            // console.log('reversedControl.valueChanges', { thisValue: this.value });
        }));
        this.internalControl.statusChanges
            .pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        () => {
            if (this.disabled) {
                this.reversedControl.disable();
            }
            else {
                this.reversedControl.enable();
            }
        }));
    }
}
LibFormToggleReversedComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-toggle-reversed',
                template: `
    <div class="full-width">
      <mat-slide-toggle
        [formControl]="reversedControl"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
      >
        <div class="flex-center">
          <ng-content></ng-content>
          <span>{{ placeholder }}</span>
          <span>({{ value ? yes : no }})</span>
        </div>
      </mat-slide-toggle>
    </div>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormToggleReversedComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormToggleReversedComponent)),
                        multi: true
                    }
                ],
                styles: [`
      span {
        margin: 2px;
      }
      .full-width {
        width: 100%;
        padding-bottom: 15px;
      }
      .flex-center {
        display: flex;
        align-items: center;
      }
    `]
            }] }
];
LibFormToggleReversedComponent.propDecorators = {
    yes: [{ type: Input }],
    no: [{ type: Input }]
};
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
    let json1;
    /** @type {?} */
    let json2;
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
class LibFormSelectObjectComponent extends FormBase {
    constructor() {
        super(...arguments);
        this.compareObject = compareObject$1;
    }
    /**
     * @param {?} newVal
     * @return {?}
     */
    writeValue(newVal) {
        this.value = newVal || {};
    }
}
LibFormSelectObjectComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-select-object',
                template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <mat-select
        [formControl]="this.internalControl"
        [placeholder]="placeholder"
        [compareWith]="compareObject"
      >
        <mat-option
          *ngFor="let selectionObject of selectionObjects"
          [value]="selectionObject"
        >
          {{ selectionObject[selectionKey] }}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormSelectObjectComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormSelectObjectComponent)),
                        multi: true
                    }
                ],
                styles: [`
      .full-width {
        width: 100%;
        padding-bottom: 15px;
      }
    `]
            }] }
];
LibFormSelectObjectComponent.propDecorators = {
    selectionObjects: [{ type: Input }],
    selectionKey: [{ type: Input }]
};
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
class LibFormSelectStringComponent extends FormBase {
}
LibFormSelectStringComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-select-string',
                template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <mat-select
        [formControl]="this.internalControl"
        [placeholder]="placeholder"
      >
        <mat-option *ngFor="let selection of selections" [value]="selection">
          {{ selection }}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormSelectStringComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormSelectStringComponent)),
                        multi: true
                    }
                ],
                styles: [`
      .full-width {
        width: 100%;
        padding-bottom: 15px;
      }
    `]
            }] }
];
LibFormSelectStringComponent.propDecorators = {
    selections: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LibFormSelectStringComponent.prototype.selections;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LibFormTagMultipleComponent extends FormBase {
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
        return __awaiter(this, void 0, void 0, /** @this {!LibFormTagMultipleComponent} */ function* () {
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
        return __awaiter(this, void 0, void 0, /** @this {!LibFormTagMultipleComponent} */ function* () {
            /** @type {?} */
            const newTagId = v1();
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LibFormTagSingleComponent extends FormBase {
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
        return __awaiter(this, void 0, void 0, /** @this {!LibFormTagSingleComponent} */ function* () {
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
        return __awaiter(this, void 0, void 0, /** @this {!LibFormTagSingleComponent} */ function* () {
            /** @type {?} */
            const newTagId = v1();
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LibFormNumberComponent extends FormBase {
    constructor() {
        super(...arguments);
        this.min = 0;
        this.max = 100;
        this.step = 1;
    }
}
LibFormNumberComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-number',
                template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <input
        matInput
        type="number"
        [min]="min"
        [max]="max"
        [step]="step"
        [placeholder]="placeholder"
        [formControl]="internalControl"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
      />
    </mat-form-field>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormNumberComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormNumberComponent)),
                        multi: true
                    }
                ],
                styles: [`
      .full-width {
        width: 100%;
      }
    `]
            }] }
];
LibFormNumberComponent.propDecorators = {
    min: [{ type: Input }],
    max: [{ type: Input }],
    step: [{ type: Input }]
};
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
class LibFormSelectStringMultipleComponent extends FormBase {
}
LibFormSelectStringMultipleComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-select-string-multiple',
                template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <mat-select
        [formControl]="this.internalControl"
        [placeholder]="placeholder"
        multiple
      >
        <mat-select-trigger>
          <div *ngIf="this.internalControl.value as selected">
            {{ selected?.length ? selected[0] : '' }}
            <span
              *ngIf="this.internalControl.value?.length > 1"
              class="example-additional-selection"
            >
              (+{{ selected.length - 1 }}
              {{ selected?.length === 2 ? 'other' : 'others' }})
            </span>
          </div>
        </mat-select-trigger>
        <mat-option *ngFor="let selection of selections" [value]="selection">
          {{ selection }}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormSelectStringMultipleComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormSelectStringMultipleComponent)),
                        multi: true
                    }
                ],
                styles: [`
      .full-width {
        width: 100%;
        padding-bottom: 15px;
      }
    `]
            }] }
];
LibFormSelectStringMultipleComponent.propDecorators = {
    selections: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LibFormSelectStringMultipleComponent.prototype.selections;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const exportedModules$1 = [
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
const exported$1 = [
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
class MatReduceFormsUsingMaterialModule {
}
MatReduceFormsUsingMaterialModule.decorators = [
    { type: NgModule, args: [{
                imports: [...exportedModules$1],
                exports: [...exported$1, ...exportedModules$1],
                declarations: [...exported$1],
                providers: []
            },] }
];

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
const AssigneeType = {
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
        const blank = blankContact();
        blank.name = 'NO CONTRACTOR FOUND';
        return blank;
    }
    if (c.contactsArray && !!c.contactsArray.length) {
        return c.contactsArray[0];
    }
    /** @type {?} */
    const blank = blankContact();
    blank.name = 'NO CONTACT FOUND';
    return blank;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LibFormAssigneeSelectorComponent extends FormBase {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        super();
        this.fb = fb;
        this.assigneeTypes = Object.keys(AssigneeType).map((/**
         * @param {?} k
         * @return {?}
         */
        k => AssigneeType[k]));
        this.hideSelectContractor = true;
        this.hideSelectStaff = true;
        this.destroyed = new Subject();
        this.selectImportTypeControl = this.fb.control();
        this.selectItemContractorControl = this.fb.control();
        this.selectItemStaffControl = this.fb.control();
    }
    /**
     * @param {?} logString
     * @return {?}
     */
    makeLogPipe(logString) {
        return pipe(takeUntil(this.destroyed), auditTime(300), tap((/**
         * @param {?} val
         * @return {?}
         */
        val => console.log('assignee-selector: ', logString, { val }))));
    }
    /**
     * @param {?} control
     * @param {?} disabled
     * @return {?}
     */
    checkStatus(control, disabled) {
        if (disabled && !control.disabled) {
            control.disable();
        }
        if (!disabled && control.disabled) {
            control.enable();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        return __awaiter(this, void 0, void 0, /** @this {!LibFormAssigneeSelectorComponent} */ function* () {
            // Check if main control has been disabled/enabled
            this.internalControl.statusChanges
                .pipe(this.makeLogPipe('control.statusChanges'))
                .subscribe((/**
             * @param {?} newVal
             * @return {?}
             */
            newVal => {
                /** @type {?} */
                const disabled = newVal === 'DISABLED';
                this.checkStatus(this.selectImportTypeControl, disabled);
                this.checkStatus(this.selectItemStaffControl, disabled);
                this.checkStatus(this.selectItemContractorControl, disabled);
            }));
            // Check if import type has changed
            this.selectImportTypeControl.valueChanges
                .pipe(this.makeLogPipe('selectImportTypeControl.valueChanges'))
                .subscribe((/**
             * @param {?} val
             * @return {?}
             */
            val => {
                if (val === AssigneeType.myDetails) {
                    return this.handleSelectedMyDetails();
                }
                if (val === AssigneeType.contractor) {
                    this.hideSelectContractor = false;
                    this.hideSelectStaff = true;
                }
                if (val === AssigneeType.staffMember) {
                    this.hideSelectStaff = false;
                    this.hideSelectContractor = true;
                }
            }));
            // Check if selectItemContractorControl has changed
            this.selectItemContractorControl.valueChanges
                .pipe(this.makeLogPipe('selectItemContractorControl.valueChanges'))
                .subscribe((/**
             * @param {?} val
             * @return {?}
             */
            (val) => __awaiter(this, void 0, void 0, /** @this {!LibFormAssigneeSelectorComponent} */ function* () {
                return this.handleSelectedSingleContractor(val);
            })));
            // Check if selectItemStaffControl has changed
            this.selectItemStaffControl.valueChanges
                .pipe(this.makeLogPipe('selectItemStaffControl.valueChanges'))
                .subscribe((/**
             * @param {?} val
             * @return {?}
             */
            (val) => __awaiter(this, void 0, void 0, /** @this {!LibFormAssigneeSelectorComponent} */ function* () {
                return this.handleSelectedSingleStaff(val);
            })));
            /** @type {?} */
            const currentValue = this.value;
            if (currentValue) {
                this.selectImportTypeControl.patchValue(currentValue.type);
                if (currentValue.type === AssigneeType.contractor) {
                    this.selectItemContractorControl.patchValue(currentValue.selected_tag);
                }
                if (currentValue.type === AssigneeType.staffMember) {
                    this.selectItemStaffControl.patchValue(currentValue.selected_tag);
                }
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        return __awaiter(this, void 0, void 0, /** @this {!LibFormAssigneeSelectorComponent} */ function* () {
            this.destroyed.next();
        });
    }
    /**
     * @return {?}
     */
    get selectedImportType() {
        return this.selectImportTypeControl.value;
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    handleSelectedSingleStaff(selected) {
        return __awaiter(this, void 0, void 0, /** @this {!LibFormAssigneeSelectorComponent} */ function* () {
            if (!selected) {
                console.warn('assignee-selector: no staff selected', { selected });
                return;
            }
            /** @type {?} */
            const staffMember = (/** @type {?} */ (selected.obj));
            /** @type {?} */
            const newAssignee = {
                selected_tag: selected,
                assignee_id: selected.id,
                type: AssigneeType.staffMember,
                name: staffMember.name,
                email: staffMember.email,
                mobile: staffMember.phone
            };
            console.log('assignee-selector: handleSelectedSingleStaff', {
                selected,
                newAssignee
            });
            this.value = newAssignee;
        });
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    handleSelectedSingleContractor(selected) {
        return __awaiter(this, void 0, void 0, /** @this {!LibFormAssigneeSelectorComponent} */ function* () {
            if (!selected) {
                console.warn('assignee-selector: no contractor selected', { selected });
                return;
            }
            /** @type {?} */
            const contractor = (/** @type {?} */ (selected.obj));
            /** @type {?} */
            const contact = GetFirstContact(contractor);
            /** @type {?} */
            const newAssignee = {
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
                selected,
                newAssignee
            });
        });
    }
    /**
     * @return {?}
     */
    handleSelectedMyDetails() {
        return __awaiter(this, void 0, void 0, /** @this {!LibFormAssigneeSelectorComponent} */ function* () {
            this.hideSelectStaff = true;
            this.hideSelectContractor = true;
            /** @type {?} */
            const user = this.currentUser;
            console.log('assignee-selector: handleSelectedMyDetails() importing my details', {
                user
            });
            /** @type {?} */
            const newAssignee = {
                selected_obj: user,
                assignee_id: user.id,
                type: AssigneeType.myDetails,
                name: user['First Name'] + ' ' + user['Last Name'],
                email: user.Email || '',
                mobile: user.Phone || ''
            };
            this.value = newAssignee;
            console.log('assignee-selector: handleSelectedMyDetails() newAssignee', {
                newAssignee
            });
        });
    }
}
LibFormAssigneeSelectorComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-assignee-selector',
                template: `
    <mat-card>
      <div class="import">
        <form-select-string
          [formControl]="this.selectImportTypeControl"
          [selections]="this.assigneeTypes"
          placeholder="Assignee Type"
        >
        </form-select-string>
        <form-tag-single
          placeholder="Select Contractor"
          [hidden]="this.hideSelectContractor"
          [formControl]="this.selectItemContractorControl"
          [choices]="contractorsList"
          [customValues]="false"
        >
        </form-tag-single>

        <form-tag-single
          placeholder="Select Staff Member"
          [hidden]="this.hideSelectStaff"
          [formControl]="this.selectItemStaffControl"
          [choices]="staffList"
          [customValues]="false"
        >
        </form-tag-single>
      </div>
      <div *ngIf="!(this.value && this.value.name)">
        Please select an assignee
      </div>
      <div *ngIf="this.value as selectedAssignee">
        <h3>Selected Assignee:</h3>
        <div class="assignee">
          <p>
            Name: <strong>{{ selectedAssignee.name }}</strong>
          </p>
          <p>
            Email: <strong>{{ selectedAssignee.email }}</strong>
          </p>
          <p>
            Phone: <strong>{{ selectedAssignee.mobile }}</strong>
          </p>
        </div>
      </div>
    </mat-card>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormAssigneeSelectorComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormAssigneeSelectorComponent)),
                        multi: true
                    }
                ],
                styles: [`
      .import {
        display: grid;
        grid-template-columns: 100%;
        grid-gap: 2%;
        margin-bottom: 10px;
      }
      .assignee p {
        margin: 0;
      }
      .assignee h3 {
        margin: 0;
      }
    `]
            }] }
];
/** @nocollapse */
LibFormAssigneeSelectorComponent.ctorParameters = () => [
    { type: FormBuilderTypedService }
];
LibFormAssigneeSelectorComponent.propDecorators = {
    currentUser: [{ type: Input }],
    contractorsList: [{ type: Input }],
    staffList: [{ type: Input }]
};
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
const exportedModules$2 = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatReduceFormsUsingMaterialModule
];
/** @type {?} */
const exported$2 = [LibFormAssigneeSelectorComponent];
class MatReduceFormsComposedModule {
}
MatReduceFormsComposedModule.decorators = [
    { type: NgModule, args: [{
                imports: [...exportedModules$2],
                exports: [...exported$2, ...exportedModules$2],
                declarations: [...exported$2],
                providers: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const exportedModules$3 = [
    MatReduceFormsUsing3rdPartyModule,
    MatReduceFormsUsingMaterialModule,
    MatReduceFormsComposedModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
];
class MatReduceModule {
}
MatReduceModule.decorators = [
    { type: NgModule, args: [{
                entryComponents: [AppConfirmationDialogComponent],
                declarations: [AppConfirmationDialogComponent],
                exports: [...exportedModules$3],
                imports: [MatIconModule, ...exportedModules$3],
                providers: [ConfirmationService, FormBuilderTypedService]
            },] }
];

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
