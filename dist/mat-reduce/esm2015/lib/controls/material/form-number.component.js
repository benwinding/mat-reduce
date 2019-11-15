/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
export class LibFormNumberComponent extends FormBase {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1udW1iZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXJlZHVjZS8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9tYXRlcmlhbC9mb3JtLW51bWJlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBd0M5QyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsUUFBZ0I7SUF0QzVEOztRQXdDRSxRQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRVIsUUFBRyxHQUFHLEdBQUcsQ0FBQztRQUVWLFNBQUksR0FBRyxDQUFDLENBQUM7SUFDWCxDQUFDOzs7WUE3Q0EsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7OztHQWNUO2dCQVFELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixFQUFDO3dCQUNyRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxzQkFBc0IsRUFBQzt3QkFDckQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7eUJBakJDOzs7O0tBSUM7YUFjSjs7O2tCQUVFLEtBQUs7a0JBRUwsS0FBSzttQkFFTCxLQUFLOzs7O0lBSk4scUNBQ1E7O0lBQ1IscUNBQ1U7O0lBQ1Ysc0NBQ1MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZvcm1CYXNlIH0gZnJvbSAnLi4vZm9ybS1iYXNlLWNsYXNzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2Zvcm0tbnVtYmVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIFthcHBlYXJhbmNlXT1cImFwcGVhcmFuY2VcIiBjbGFzcz1cImZ1bGwtd2lkdGhcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgbWF0SW5wdXRcclxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICBbbWluXT1cIm1pblwiXHJcbiAgICAgICAgW21heF09XCJtYXhcIlxyXG4gICAgICAgIFtzdGVwXT1cInN0ZXBcIlxyXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImludGVybmFsQ29udHJvbFwiXHJcbiAgICAgICAgW25hbWVdPVwiYXV0b0NvbXBsZXRlT2JzY3VyZU5hbWVcIlxyXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cImRvbnRjb21wbGV0ZW1lXCJcclxuICAgICAgLz5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmZ1bGwtd2lkdGgge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExpYkZvcm1OdW1iZXJDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybU51bWJlckNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGliRm9ybU51bWJlckNvbXBvbmVudCBleHRlbmRzIEZvcm1CYXNlPG51bWJlcj4gaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgbWluID0gMDtcclxuICBASW5wdXQoKVxyXG4gIG1heCA9IDEwMDtcclxuICBASW5wdXQoKVxyXG4gIHN0ZXAgPSAxO1xyXG59XHJcbiJdfQ==