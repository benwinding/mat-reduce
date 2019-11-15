/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
var LibFormTimeComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LibFormTimeComponent, _super);
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
export { LibFormTimeComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS10aW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC1yZWR1Y2UvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvdXNpbmctM3JkLXBhcnR5L2Zvcm0tdGltZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5QztJQTBEMEMsZ0RBQWdCO0lBMUQxRDtRQUFBLHFFQXlFQztRQWJDLGlCQUFXLEdBQUcsRUFBRSxDQUFDOztJQWFuQixDQUFDOztnQkF6RUEsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLDh3QkE0QlQ7b0JBQ0QsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLG9CQUFvQixFQUFwQixDQUFvQixFQUFDOzRCQUNuRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsb0JBQW9CLEVBQXBCLENBQW9CLEVBQUM7NEJBQ25ELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOzZCQUVDLHNLQVVDO2lCQUVKOzs7OEJBRUUsS0FBSzt5QkFFTCxLQUFLO3NCQUVMLEtBQUs7c0JBRUwsS0FBSzs4QkFFTCxLQUFLOzZCQUVMLEtBQUs7MkJBRUwsS0FBSzs7SUFFUiwyQkFBQztDQUFBLEFBekVELENBMEQwQyxRQUFRLEdBZWpEO1NBZlksb0JBQW9COzs7SUFDL0IsMkNBQ2lCOztJQUNqQixzQ0FDZTs7SUFDZixtQ0FDWTs7SUFDWixtQ0FDWTs7SUFDWiwyQ0FDb0I7O0lBQ3BCLDBDQUNtQjs7SUFDbkIsd0NBQ2tCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBGb3JtQmFzZSB9IGZyb20gJy4uL2Zvcm0tYmFzZS1jbGFzcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdmb3JtLXRpbWUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bWF0LWZvcm0tZmllbGQgW2FwcGVhcmFuY2VdPVwiYXBwZWFyYW5jZVwiIGNsYXNzPVwiZnVsbC13aWR0aFwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBtYXRJbnB1dFxyXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJpbnRlcm5hbENvbnRyb2xcIlxyXG4gICAgICAgIFtuZ3hUaW1lcGlja2VyXT1cInBpY2tlclwiXHJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgICBbZm9ybWF0XT1cImZvcm1hdFwiXHJcbiAgICAgICAgW21pbl09XCJtaW5cIlxyXG4gICAgICAgIFttYXhdPVwibWF4XCJcclxuICAgICAgICBbbmFtZV09XCJhdXRvQ29tcGxldGVPYnNjdXJlTmFtZVwiXHJcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAvPlxyXG4gICAgICA8bWF0LWljb25cclxuICAgICAgICBtYXRTdWZmaXhcclxuICAgICAgICBjbGFzcz1cImhhcy1wb2ludGVyXCJcclxuICAgICAgICBbY2xhc3MuaXMtZ3JleV09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgKGNsaWNrKT1cInBpY2tlci5vcGVuKClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgYWNjZXNzX3RpbWVcclxuICAgICAgPC9tYXQtaWNvbj5cclxuICAgICAgPG5neC1tYXRlcmlhbC10aW1lcGlja2VyXHJcbiAgICAgICAgI3BpY2tlclxyXG4gICAgICAgIFtkZWZhdWx0VGltZV09XCJkZWZhdWx0VGltZVwiXHJcbiAgICAgICAgW21pbnV0ZXNHYXBdPVwibWludXRlc0dhcFwiXHJcbiAgICAgICAgRVNDPVwidHJ1ZVwiXHJcbiAgICAgID48L25neC1tYXRlcmlhbC10aW1lcGlja2VyPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybVRpbWVDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybVRpbWVDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5pcy1ncmV5IHtcclxuICAgICAgICBjb2xvcjogI2FhYTtcclxuICAgICAgfVxyXG4gICAgICAuaGFzLXBvaW50ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuZnVsbC13aWR0aCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWJGb3JtVGltZUNvbXBvbmVudCBleHRlbmRzIEZvcm1CYXNlPHN0cmluZz4gaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgcGxhY2Vob2xkZXIgPSAnJztcclxuICBASW5wdXQoKVxyXG4gIGZvcm1hdDogbnVtYmVyOyAvLyAxMiBvciAyNFxyXG4gIEBJbnB1dCgpXHJcbiAgbWluOiBzdHJpbmc7IC8vIDEyOjAwIEFNXHJcbiAgQElucHV0KClcclxuICBtYXg6IHN0cmluZzsgLy8gMTI6MDAgQU1cclxuICBASW5wdXQoKVxyXG4gIGRlZmF1bHRUaW1lOiBzdHJpbmc7IC8vIDEyOjAwIEFNXHJcbiAgQElucHV0KClcclxuICBtaW51dGVzR2FwOiBudW1iZXI7IC8vIDEgLT4gNjBcclxuICBASW5wdXQoKVxyXG4gIHJlcXVpcmVkOiBib29sZWFuO1xyXG59XHJcbiJdfQ==