/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
export class LibFormTimeComponent extends FormBase {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS10aW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC1yZWR1Y2UvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvdXNpbmctM3JkLXBhcnR5L2Zvcm0tdGltZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBNEQ5QyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsUUFBZ0I7SUExRDFEOztRQTRERSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztJQWFuQixDQUFDOzs7WUF6RUEsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNEJUO2dCQUNELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixFQUFDO3dCQUNuRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsRUFBQzt3QkFDbkQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7eUJBRUM7Ozs7Ozs7Ozs7S0FVQzthQUVKOzs7MEJBRUUsS0FBSztxQkFFTCxLQUFLO2tCQUVMLEtBQUs7a0JBRUwsS0FBSzswQkFFTCxLQUFLO3lCQUVMLEtBQUs7dUJBRUwsS0FBSzs7OztJQVpOLDJDQUNpQjs7SUFDakIsc0NBQ2U7O0lBQ2YsbUNBQ1k7O0lBQ1osbUNBQ1k7O0lBQ1osMkNBQ29COztJQUNwQiwwQ0FDbUI7O0lBQ25CLHdDQUNrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRm9ybUJhc2UgfSBmcm9tICcuLi9mb3JtLWJhc2UtY2xhc3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZm9ybS10aW1lJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIFthcHBlYXJhbmNlXT1cImFwcGVhcmFuY2VcIiBjbGFzcz1cImZ1bGwtd2lkdGhcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgbWF0SW5wdXRcclxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwiaW50ZXJuYWxDb250cm9sXCJcclxuICAgICAgICBbbmd4VGltZXBpY2tlcl09XCJwaWNrZXJcIlxyXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgICAgW2Zvcm1hdF09XCJmb3JtYXRcIlxyXG4gICAgICAgIFttaW5dPVwibWluXCJcclxuICAgICAgICBbbWF4XT1cIm1heFwiXHJcbiAgICAgICAgW25hbWVdPVwiYXV0b0NvbXBsZXRlT2JzY3VyZU5hbWVcIlxyXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgLz5cclxuICAgICAgPG1hdC1pY29uXHJcbiAgICAgICAgbWF0U3VmZml4XHJcbiAgICAgICAgY2xhc3M9XCJoYXMtcG9pbnRlclwiXHJcbiAgICAgICAgW2NsYXNzLmlzLWdyZXldPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIChjbGljayk9XCJwaWNrZXIub3BlbigpXCJcclxuICAgICAgPlxyXG4gICAgICAgIGFjY2Vzc190aW1lXHJcbiAgICAgIDwvbWF0LWljb24+XHJcbiAgICAgIDxuZ3gtbWF0ZXJpYWwtdGltZXBpY2tlclxyXG4gICAgICAgICNwaWNrZXJcclxuICAgICAgICBbZGVmYXVsdFRpbWVdPVwiZGVmYXVsdFRpbWVcIlxyXG4gICAgICAgIFttaW51dGVzR2FwXT1cIm1pbnV0ZXNHYXBcIlxyXG4gICAgICAgIEVTQz1cInRydWVcIlxyXG4gICAgICA+PC9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlcj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExpYkZvcm1UaW1lQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExpYkZvcm1UaW1lQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuaXMtZ3JleSB7XHJcbiAgICAgICAgY29sb3I6ICNhYWE7XHJcbiAgICAgIH1cclxuICAgICAgLmhhcy1wb2ludGVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmZ1bGwtd2lkdGgge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGliRm9ybVRpbWVDb21wb25lbnQgZXh0ZW5kcyBGb3JtQmFzZTxzdHJpbmc+IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIHBsYWNlaG9sZGVyID0gJyc7XHJcbiAgQElucHV0KClcclxuICBmb3JtYXQ6IG51bWJlcjsgLy8gMTIgb3IgMjRcclxuICBASW5wdXQoKVxyXG4gIG1pbjogc3RyaW5nOyAvLyAxMjowMCBBTVxyXG4gIEBJbnB1dCgpXHJcbiAgbWF4OiBzdHJpbmc7IC8vIDEyOjAwIEFNXHJcbiAgQElucHV0KClcclxuICBkZWZhdWx0VGltZTogc3RyaW5nOyAvLyAxMjowMCBBTVxyXG4gIEBJbnB1dCgpXHJcbiAgbWludXRlc0dhcDogbnVtYmVyOyAvLyAxIC0+IDYwXHJcbiAgQElucHV0KClcclxuICByZXF1aXJlZDogYm9vbGVhbjtcclxufVxyXG4iXX0=