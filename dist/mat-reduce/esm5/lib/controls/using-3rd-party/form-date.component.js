/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
import { SimpleLog } from '../../utils/logger';
var LibFormDateComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LibFormDateComponent, _super);
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
export { LibFormDateComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1kYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC1yZWR1Y2UvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvdXNpbmctM3JkLXBhcnR5L2Zvcm0tZGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0M7SUFpQzBDLGdEQUFjO0lBakN4RDtRQUFBLHFFQTRHQztRQXpFQyxpQkFBVyxHQUFHLEVBQUUsQ0FBQzs7SUF5RW5CLENBQUM7Ozs7SUFqRUMsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHNCQUFJLHlDQUFPOzs7O1FBQVg7WUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUN2QjtZQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDckIsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDO2FBQ25CO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDOzs7T0FBQTs7OztJQUVELGdEQUFpQjs7O0lBQWpCOztZQUNRLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSzs7WUFDeEIsUUFBUSxHQUFHLFNBQVM7UUFDeEIsSUFBSSxPQUFPLFNBQVMsS0FBSyxRQUFRLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDL0MsUUFBUSxHQUFHLElBQUksSUFBSSxD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dGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZvcm1CYXNlIH0gZnJvbSAnLi4vZm9ybS1iYXNlLWNsYXNzJztcclxuaW1wb3J0IHsgU2ltcGxlTG9nIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2Zvcm0tZGF0ZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxtYXQtZm9ybS1maWVsZCBbYXBwZWFyYW5jZV09XCJhcHBlYXJhbmNlXCIgY2xhc3M9XCJmdWxsLXdpZHRoXCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIG1hdElucHV0XHJcbiAgICAgICAgKGZvY3VzKT1cInBpY2tlci5vcGVuKClcIlxyXG4gICAgICAgIFttaW5dPVwibWluRGF0ZVwiXHJcbiAgICAgICAgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXHJcbiAgICAgICAgW25hbWVdPVwiYXV0b0NvbXBsZXRlT2JzY3VyZU5hbWVcIlxyXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cImRvbnRjb21wbGV0ZW1lXCJcclxuICAgICAgLz5cclxuICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cclxuICAgICAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExpYkZvcm1EYXRlQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExpYkZvcm1EYXRlQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWJGb3JtRGF0ZUNvbXBvbmVudCBleHRlbmRzIEZvcm1CYXNlPERhdGU+IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIHBsYWNlaG9sZGVyID0gJyc7XHJcbiAgQElucHV0KClcclxuICBpc0FmdGVyVG9kYXk6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBBZnRlckRhdGU6IERhdGU7XHJcblxyXG4gIGxvZ2dlcjogU2ltcGxlTG9nO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMubG9nZ2VyID0gbmV3IFNpbXBsZUxvZyh0aGlzLmRlYnVnKTtcclxuICB9XHJcblxyXG4gIGdldCBtaW5EYXRlKCkge1xyXG4gICAgaWYgKHRoaXMuQWZ0ZXJEYXRlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLkFmdGVyRGF0ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlzQWZ0ZXJUb2RheSkge1xyXG4gICAgICByZXR1cm4gbmV3IERhdGUoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgQ2hlY2tWYWx1ZUlzVmFsaWQoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGZvcm1WYWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICBsZXQgZm9ybURhdGUgPSBmb3JtVmFsdWU7XHJcbiAgICBpZiAodHlwZW9mIGZvcm1WYWx1ZSA9PT0gJ3N0cmluZycgfHwgIWZvcm1WYWx1ZSkge1xyXG4gICAgICBmb3JtRGF0ZSA9IG5ldyBEYXRlKGZvcm1WYWx1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxvZ2dlci5sb2coJ2Zvcm0tZGF0ZTogQ2hlY2tWYWx1ZUlzVmFsaWQoKScsIHtcclxuICAgICAgZm9ybVZhbHVlLFxyXG4gICAgICBmb3JtRGF0ZSxcclxuICAgICAgaXNBZnRlclRvZGF5OiB0aGlzLmlzQWZ0ZXJUb2RheSxcclxuICAgICAgaXNBZnRlckRhdGU6IHRoaXMuQWZ0ZXJEYXRlXHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLmlzQWZ0ZXJUb2RheSkge1xyXG4gICAgICBjb25zdCB0b2RheXNEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgY29uc3QgaXNBZnRlclRvZGF5ID0gdGhpcy5pc05ld0RhdGVBZnRlclRoaXMoZm9ybURhdGUsIHRvZGF5c0RhdGUpO1xyXG4gICAgICBpZiAoIWlzQWZ0ZXJUb2RheSkge1xyXG4gICAgICAgIHJldHVybiAnRGF0ZSBtdXN0IGJlIGFmdGVyIHRvZGF5XFwncyBkYXRlJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuQWZ0ZXJEYXRlKSB7XHJcbiAgICAgIGNvbnN0IGlzQWZ0ZXJEYXRlID0gdGhpcy5pc05ld0RhdGVBZnRlclRoaXMoZm9ybURhdGUsIHRoaXMuQWZ0ZXJEYXRlKTtcclxuICAgICAgaWYgKCFpc0FmdGVyRGF0ZSkge1xyXG4gICAgICAgIHJldHVybiAnRGF0ZSBtdXN0IGJlIGFmdGVyIGRhdGU6ICcgKyB0aGlzLkFmdGVyRGF0ZS50b0RhdGVTdHJpbmcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzTmV3RGF0ZUFmdGVyVGhpcyhmb3JtRGF0ZTogRGF0ZSwgYWZ0ZXJEYXRlOiBEYXRlKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5sb2coJ2Zvcm0tZGF0ZTogaXNOZXdEYXRlQWZ0ZXJUaGlzKCknLCB7XHJcbiAgICAgIGZvcm1EYXRlLFxyXG4gICAgICBhZnRlckRhdGVcclxuICAgIH0pO1xyXG4gICAgaWYgKCFmb3JtRGF0ZSB8fCB0eXBlb2YgZm9ybURhdGUuZ2V0VGltZSAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCd0aGUgZm9ybSBjb250cm9sIHZhbHVlIGlzIG5vdCBhIHZhbGlkIERhdGUnLCB7IGZvcm1EYXRlIH0pO1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIH1cclxuICAgIGlmICghYWZ0ZXJEYXRlIHx8IHR5cGVvZiBhZnRlckRhdGUuZ2V0VGltZSAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdBZnRlckRhdGUgaXMgbm90IGEgdmFsaWQgRGF0ZScsIHsgYWZ0ZXJEYXRlIH0pO1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGFmdGVyU2Vjb25kcyA9IGFmdGVyRGF0ZS5nZXRUaW1lKCk7XHJcbiAgICBjb25zdCBmb3JtU2Vjb25kcyA9IGZvcm1EYXRlLmdldFRpbWUoKTtcclxuICAgIGNvbnN0IGlzQWZ0ZXIgPSBhZnRlclNlY29uZHMgPCBmb3JtU2Vjb25kcztcclxuICAgIHRoaXMubG9nZ2VyLmxvZygnZm9ybS1kYXRlOiBpc05ld0RhdGVBZnRlclRoaXMoKScsIHtcclxuICAgICAgYWZ0ZXJTZWNvbmRzLFxyXG4gICAgICBmb3JtU2Vjb25kcyxcclxuICAgICAgaXNBZnRlclxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaXNBZnRlcjtcclxuICB9XHJcbn1cclxuIl19