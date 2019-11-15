/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { Input } from '@angular/core';
import { takeUntil, auditTime } from 'rxjs/operators';
import { ConvertToTitleCase } from '../utils/case-helper';
import { v4 as uuidv4 } from 'uuid';
/**
 * @template T
 */
export class FormBase {
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
            this.autoCompleteObscureName = uuidv4();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1iYXNlLWNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXJlZHVjZS8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9mb3JtLWJhc2UtY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBd0IsV0FBVyxFQUFzQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFxQixLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsRUFBRSxJQUFJLE1BQU0sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUVuQyxNQUFNLE9BQU8sUUFBUTtJQXVCbkI7UUFyQkEsb0JBQWUsR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUVqRCxlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUUzQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBZWpCLFVBQUssR0FBRyxLQUFLLENBQUM7UUEyRGQsc0JBQWlCOzs7UUFBUSxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQUM7UUFLbEMsY0FBUzs7O1FBQVEsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUFDOzs7O2NBM0RsQixpQkFBaUIsR0FBRyxJQUFJLENBQUMsV0FBVztRQUMxQyxJQUFJLENBQUMsV0FBVzs7O1FBQUcsR0FBRyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUEsQ0FBQzs7Y0FDSSxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVE7UUFDcEMsSUFBSSxDQUFDLFFBQVE7OztRQUFHLEdBQUcs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QUMsZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ2hELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDTCxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7eUJBbEhBLEtBQUs7Z0NBRUwsS0FBSzs4QkFFTCxLQUFLOzBCQUVMLEtBQUs7b0JBRUwsS0FBSzs7OztJQWxCTixtQ0FBaUQ7O0lBQ2pELDJDQUFnQzs7SUFDaEMsOEJBQTJCOztJQUUzQiw0QkFBaUI7O0lBQ2pCLG1DQUF3Qjs7SUFDeEIsK0JBQXlCOztJQUV6QiwwQkFBVTs7SUFFViw4QkFDNEM7O0lBQzVDLHFDQUMyQjs7SUFDM0IsbUNBQ3dCOztJQUN4QiwrQkFDb0I7O0lBQ3BCLHlCQUNjOztJQTJEZCxxQ0FBa0M7O0lBS2xDLDZCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9yLCBWYWxpZGF0b3JGbiwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdGFrZVVudGlsLCBhdWRpdFRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENvbnZlcnRUb1RpdGxlQ2FzZSB9IGZyb20gJy4uL3V0aWxzL2Nhc2UtaGVscGVyJztcclxuaW1wb3J0IHt2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtQmFzZTxUPlxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBWYWxpZGF0b3Ige1xyXG4gIGludGVybmFsQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcclxuICBhdXRvQ29tcGxldGVPYnNjdXJlTmFtZTogc3RyaW5nO1xyXG4gIF9kZXN0cm95ZWQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIHZhbGlkYXRpb25FcnJvcjogc3RyaW5nO1xyXG4gIF92YWxpZGF0b3JzOiBWYWxpZGF0b3JGbjtcclxuXHJcbiAgX3ZhbHVlOiBUO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGFwcGVhcmFuY2U6ICdvdXRsaW5lJyB8ICdmaWxsJyB8ICdzdGFuZGFyZCc7XHJcbiAgQElucHV0KClcclxuICBhbGxvd0F1dG9Db21wbGV0ZTogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIGZvcm1Db250cm9sTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGRlYnVnID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gR2FycmVudGVlIHRoYXQgaW5pdCBhbmQgZGVzdHJveSBhcmUgY2FsbGVkXHJcbiAgICAvLyBldmVuIGlmIG5nT25Jbml0KCkgb3IgbmdPbkRlc3Ryb3koKSBhcmUgb3ZlcnJpZGVuXHJcbiAgICBjb25zdCBvcmlnaW5hbE9uRGVzdHJveSA9IHRoaXMubmdPbkRlc3Ryb3k7XHJcbiAgICB0aGlzLm5nT25EZXN0cm95ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgb3JpZ2luYWxPbkRlc3Ryb3kuYXBwbHkodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb3JpZ2luYWxPbkluaXQgPSB0aGlzLm5nT25Jbml0O1xyXG4gICAgdGhpcy5uZ09uSW5pdCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgIG9yaWdpbmFsT25Jbml0LmFwcGx5KHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7fVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQoKTtcclxuICAgIGlmICghdGhpcy5hbGxvd0F1dG9Db21wbGV0ZSkge1xyXG4gICAgICB0aGlzLmF1dG9Db21wbGV0ZU9ic2N1cmVOYW1lID0gdXVpZHY0KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmludGVybmFsQ29udHJvbC52YWx1ZUNoYW5nZXNcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpXHJcbiAgICAgIC5waXBlKGF1ZGl0VGltZSgxMDApKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuaW50ZXJuYWxDb250cm9sLnZhbHVlO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5fdmFsdWUpO1xyXG4gICAgICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2Zvcm0tYmFzZS1jbGFzczogdmFsdWVDaGFuZ2VzJywge3ZhbDogdGhpcy5fdmFsdWV9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgaWYgKCF0aGlzLnBsYWNlaG9sZGVyKSB7XHJcbiAgICAgIGNvbnN0IG5hbWVQYXJzZWQgPSBDb252ZXJ0VG9UaXRsZUNhc2UodGhpcy5mb3JtQ29udHJvbE5hbWUgKyAnJyk7XHJcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSBuYW1lUGFyc2VkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuX2Rlc3Ryb3llZC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgdmFsdWUodmFsKSB7XHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbDtcclxuICAgIHRoaXMuaW50ZXJuYWxDb250cm9sLnNldFZhbHVlKHZhbCk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHByb3BhZ2F0ZU9uQ2hhbmdlOiBhbnkgPSAoKSA9PiB7fTtcclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMucHJvcGFnYXRlT25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIG9uVG91Y2hlZDogYW55ID0gKCkgPT4ge307XHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmIChpc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgdGhpcy5pbnRlcm5hbENvbnRyb2wuZGlzYWJsZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaW50ZXJuYWxDb250cm9sLmVuYWJsZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB2YWxpZGF0ZShjOiBGb3JtQ29udHJvbCkge1xyXG4gICAgY29uc3QgZXJyb3JzID0gYy5lcnJvcnM7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGMudmFsdWU7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnZm9ybS1iYXNlLWNsYXNzOiB2YWxpZGF0ZSgpJywgeyBlcnJvcnMsIHZhbHVlIH0pO1xyXG4gICAgdGhpcy5pbnRlcm5hbENvbnRyb2wuc2V0VmFsaWRhdG9ycyhjLnZhbGlkYXRvcik7XHJcbiAgICByZXR1cm4gIXRoaXMudmFsaWRhdGlvbkVycm9yXHJcbiAgICAgID8gbnVsbFxyXG4gICAgICA6IHtcclxuICAgICAgICAgIHZhbGlkYXRpb25FcnJvcjoge1xyXG4gICAgICAgICAgICB2YWxpZDogZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNoYW5nZShpbnB1dFZhbHVlKSB7XHJcbiAgICB0aGlzLnZhbGlkYXRpb25FcnJvciA9IHRoaXMuQ2hlY2tWYWx1ZUlzVmFsaWQoKTtcclxuICAgIGlmICh0aGlzLnZhbGlkYXRpb25FcnJvcikge1xyXG4gICAgICB0aGlzLnByb3BhZ2F0ZU9uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wcm9wYWdhdGVPbkNoYW5nZShpbnB1dFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIENoZWNrVmFsdWVJc1ZhbGlkKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIl19