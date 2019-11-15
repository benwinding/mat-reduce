/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
var LibFormNumberComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LibFormNumberComponent, _super);
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
export { LibFormNumberComponent };
if (false) {
    /** @type {?} */
    LibFormNumberComponent.prototype.min;
    /** @type {?} */
    LibFormNumberComponent.prototype.max;
    /** @type {?} */
    LibFormNumberComponent.prototype.step;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1udW1iZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXJlZHVjZS8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9tYXRlcmlhbC9mb3JtLW51bWJlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5QztJQXNDNEMsa0RBQWdCO0lBdEM1RDtRQUFBLHFFQTZDQztRQUxDLFNBQUcsR0FBRyxDQUFDLENBQUM7UUFFUixTQUFHLEdBQUcsR0FBRyxDQUFDO1FBRVYsVUFBSSxHQUFHLENBQUMsQ0FBQzs7SUFDWCxDQUFDOztnQkE3Q0EsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLHFaQWNUO29CQVFELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSxzQkFBc0IsRUFBdEIsQ0FBc0IsRUFBQzs0QkFDckQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLHNCQUFzQixFQUF0QixDQUFzQixFQUFDOzRCQUNyRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs2QkFqQkMsNERBSUM7aUJBY0o7OztzQkFFRSxLQUFLO3NCQUVMLEtBQUs7dUJBRUwsS0FBSzs7SUFFUiw2QkFBQztDQUFBLEFBN0NELENBc0M0QyxRQUFRLEdBT25EO1NBUFksc0JBQXNCOzs7SUFDakMscUNBQ1E7O0lBQ1IscUNBQ1U7O0lBQ1Ysc0NBQ1MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZvcm1CYXNlIH0gZnJvbSAnLi4vZm9ybS1iYXNlLWNsYXNzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2Zvcm0tbnVtYmVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIFthcHBlYXJhbmNlXT1cImFwcGVhcmFuY2VcIiBjbGFzcz1cImZ1bGwtd2lkdGhcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgbWF0SW5wdXRcclxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICBbbWluXT1cIm1pblwiXHJcbiAgICAgICAgW21heF09XCJtYXhcIlxyXG4gICAgICAgIFtzdGVwXT1cInN0ZXBcIlxyXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImludGVybmFsQ29udHJvbFwiXHJcbiAgICAgICAgW25hbWVdPVwiYXV0b0NvbXBsZXRlT2JzY3VyZU5hbWVcIlxyXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cImRvbnRjb21wbGV0ZW1lXCJcclxuICAgICAgLz5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmZ1bGwtd2lkdGgge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExpYkZvcm1OdW1iZXJDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybU51bWJlckNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGliRm9ybU51bWJlckNvbXBvbmVudCBleHRlbmRzIEZvcm1CYXNlPG51bWJlcj4gaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgbWluID0gMDtcclxuICBASW5wdXQoKVxyXG4gIG1heCA9IDEwMDtcclxuICBASW5wdXQoKVxyXG4gIHN0ZXAgPSAxO1xyXG59XHJcbiJdfQ==