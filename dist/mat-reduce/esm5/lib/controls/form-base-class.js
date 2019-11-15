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
            this.autoCompleteObscureName = uuidv4();
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
export { FormBase };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1iYXNlLWNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXJlZHVjZS8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9mb3JtLWJhc2UtY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBd0IsV0FBVyxFQUFzQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFxQixLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsRUFBRSxJQUFJLE1BQU0sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUVuQztJQXVCRTtRQUFBLGlCQWFDO1FBbENELG9CQUFlLEdBQWdCLElBQUksV0FBVyxFQUFFLENBQUM7UUFFakQsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFFM0IsYUFBUSxHQUFHLEtBQUssQ0FBQztRQWVqQixVQUFLLEdBQUcsS0FBSyxDQUFDO1FBMkRkLHNCQUFpQjs7O1FBQVEsY0FBTyxDQUFDLEVBQUM7UUFLbEMsY0FBUzs7O1FBQVEsY0FBTyxDQUFDLEVBQUM7Ozs7WUEzRGxCLGlCQUFpQixHQUFHLElBQUksQ0FBQyxXQUFXO1FBQzFDLElBQUksQ0FBQyxXQUFXOzs7UUFBRztZQUNqQixLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixpQkFBaUIsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFBLENBQUM7O1lBQ0ksY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRO1FBQ3BDLElBQUksQ0FBQyxRQUFROzs7UUFBRztZQUNkLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNaLGNBQWMs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Q0FBQzs7Ozs7O0lBRU8sMkJBQVE7Ozs7O0lBQWhCLFVBQWlCLFVBQVU7UUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNoRCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ0wsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7OztJQUVELG9DQUFpQjs7O0lBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs2QkFsSEEsS0FBSztvQ0FFTCxLQUFLO2tDQUVMLEtBQUs7OEJBRUwsS0FBSzt3QkFFTCxLQUFLOztJQTJHUixlQUFDO0NBQUEsQUEvSEQsSUErSEM7U0EvSFksUUFBUTs7O0lBRW5CLG1DQUFpRDs7SUFDakQsMkNBQWdDOztJQUNoQyw4QkFBMkI7O0lBRTNCLDRCQUFpQjs7SUFDakIsbUNBQXdCOztJQUN4QiwrQkFBeUI7O0lBRXpCLDBCQUFVOztJQUVWLDhCQUM0Qzs7SUFDNUMscUNBQzJCOztJQUMzQixtQ0FDd0I7O0lBQ3hCLCtCQUNvQjs7SUFDcEIseUJBQ2M7O0lBMkRkLHFDQUFrQzs7SUFLbEMsNkJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBWYWxpZGF0b3IsIFZhbGlkYXRvckZuLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwsIGF1ZGl0VGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ29udmVydFRvVGl0bGVDYXNlIH0gZnJvbSAnLi4vdXRpbHMvY2FzZS1oZWxwZXInO1xyXG5pbXBvcnQge3Y0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1CYXNlPFQ+XHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB7XHJcbiAgaW50ZXJuYWxDb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xyXG4gIGF1dG9Db21wbGV0ZU9ic2N1cmVOYW1lOiBzdHJpbmc7XHJcbiAgX2Rlc3Ryb3llZCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgdmFsaWRhdGlvbkVycm9yOiBzdHJpbmc7XHJcbiAgX3ZhbGlkYXRvcnM6IFZhbGlkYXRvckZuO1xyXG5cclxuICBfdmFsdWU6IFQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYXBwZWFyYW5jZTogJ291dGxpbmUnIHwgJ2ZpbGwnIHwgJ3N0YW5kYXJkJztcclxuICBASW5wdXQoKVxyXG4gIGFsbG93QXV0b0NvbXBsZXRlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgZGVidWcgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBHYXJyZW50ZWUgdGhhdCBpbml0IGFuZCBkZXN0cm95IGFyZSBjYWxsZWRcclxuICAgIC8vIGV2ZW4gaWYgbmdPbkluaXQoKSBvciBuZ09uRGVzdHJveSgpIGFyZSBvdmVycmlkZW5cclxuICAgIGNvbnN0IG9yaWdpbmFsT25EZXN0cm95ID0gdGhpcy5uZ09uRGVzdHJveTtcclxuICAgIHRoaXMubmdPbkRlc3Ryb3kgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICBvcmlnaW5hbE9uRGVzdHJveS5hcHBseSh0aGlzKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBvcmlnaW5hbE9uSW5pdCA9IHRoaXMubmdPbkluaXQ7XHJcbiAgICB0aGlzLm5nT25Jbml0ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgb3JpZ2luYWxPbkluaXQuYXBwbHkodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHt9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLl9kZXN0cm95ZWQubmV4dCgpO1xyXG4gICAgaWYgKCF0aGlzLmFsbG93QXV0b0NvbXBsZXRlKSB7XHJcbiAgICAgIHRoaXMuYXV0b0NvbXBsZXRlT2JzY3VyZU5hbWUgPSB1dWlkdjQoKTtcclxuICAgIH1cclxuICAgIHRoaXMuaW50ZXJuYWxDb250cm9sLnZhbHVlQ2hhbmdlc1xyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSlcclxuICAgICAgLnBpcGUoYXVkaXRUaW1lKDEwMCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5pbnRlcm5hbENvbnRyb2wudmFsdWU7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLl92YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZm9ybS1iYXNlLWNsYXNzOiB2YWx1ZUNoYW5nZXMnLCB7dmFsOiB0aGlzLl92YWx1ZX0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBpZiAoIXRoaXMucGxhY2Vob2xkZXIpIHtcclxuICAgICAgY29uc3QgbmFtZVBhcnNlZCA9IENvbnZlcnRUb1RpdGxlQ2FzZSh0aGlzLmZvcm1Db250cm9sTmFtZSArICcnKTtcclxuICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IG5hbWVQYXJzZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQoKTtcclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCB2YWx1ZSh2YWwpIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsO1xyXG4gICAgdGhpcy5pbnRlcm5hbENvbnRyb2wuc2V0VmFsdWUodmFsKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJvcGFnYXRlT25DaGFuZ2U6IGFueSA9ICgpID0+IHt9O1xyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9wYWdhdGVPbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgb25Ub3VjaGVkOiBhbnkgPSAoKSA9PiB7fTtcclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKGlzRGlzYWJsZWQpIHtcclxuICAgICAgICB0aGlzLmludGVybmFsQ29udHJvbC5kaXNhYmxlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pbnRlcm5hbENvbnRyb2wuZW5hYmxlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHZhbGlkYXRlKGM6IEZvcm1Db250cm9sKSB7XHJcbiAgICBjb25zdCBlcnJvcnMgPSBjLmVycm9ycztcclxuICAgIGNvbnN0IHZhbHVlID0gYy52YWx1ZTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdmb3JtLWJhc2UtY2xhc3M6IHZhbGlkYXRlKCknLCB7IGVycm9ycywgdmFsdWUgfSk7XHJcbiAgICB0aGlzLmludGVybmFsQ29udHJvbC5zZXRWYWxpZGF0b3JzKGMudmFsaWRhdG9yKTtcclxuICAgIHJldHVybiAhdGhpcy52YWxpZGF0aW9uRXJyb3JcclxuICAgICAgPyBudWxsXHJcbiAgICAgIDoge1xyXG4gICAgICAgICAgdmFsaWRhdGlvbkVycm9yOiB7XHJcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ2hhbmdlKGlucHV0VmFsdWUpIHtcclxuICAgIHRoaXMudmFsaWRhdGlvbkVycm9yID0gdGhpcy5DaGVja1ZhbHVlSXNWYWxpZCgpO1xyXG4gICAgaWYgKHRoaXMudmFsaWRhdGlvbkVycm9yKSB7XHJcbiAgICAgIHRoaXMucHJvcGFnYXRlT25DaGFuZ2UodGhpcy52YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnByb3BhZ2F0ZU9uQ2hhbmdlKGlucHV0VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQ2hlY2tWYWx1ZUlzVmFsaWQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=