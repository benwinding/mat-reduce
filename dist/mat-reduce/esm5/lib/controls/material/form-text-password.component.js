/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
var LibFormTextPasswordComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LibFormTextPasswordComponent, _super);
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
export { LibFormTextPasswordComponent };
if (false) {
    /** @type {?} */
    LibFormTextPasswordComponent.prototype.maxlength;
    /** @type {?} */
    LibFormTextPasswordComponent.prototype.hidePassword;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS10ZXh0LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC1yZWR1Y2UvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvbWF0ZXJpYWwvZm9ybS10ZXh0LXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlDO0lBdUNrRCx3REFBZ0I7SUF2Q2xFO1FBQUEscUVBcURDO1FBTEMsa0JBQVksR0FBRyxJQUFJLENBQUM7O0lBS3RCLENBQUM7SUFUQyxzQkFBSSxtREFBUzs7OztRQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNqRCxDQUFDOzs7T0FBQTs7OztJQUlELGlEQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3pDLENBQUM7O2dCQXBERixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSwwZkFlVDtvQkFRRCxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsNEJBQTRCLEVBQTVCLENBQTRCLEVBQUM7NEJBQzNELEtBQUssRUFBRSxJQUFJO3lCQUNaO3dCQUNEOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSw0QkFBNEIsRUFBNUIsQ0FBNEIsRUFBQzs0QkFDM0QsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7NkJBakJDLDREQUlDO2lCQWNKOzs7NEJBR0UsS0FBSzs7SUFZUixtQ0FBQztDQUFBLEFBckRELENBdUNrRCxRQUFRLEdBY3pEO1NBZFksNEJBQTRCOzs7SUFFdkMsaURBQ2tCOztJQU1sQixvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZvcm1CYXNlIH0gZnJvbSAnLi4vZm9ybS1iYXNlLWNsYXNzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2Zvcm0tdGV4dC1wYXNzd29yZCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxtYXQtZm9ybS1maWVsZCBbYXBwZWFyYW5jZV09XCJhcHBlYXJhbmNlXCIgY2xhc3M9XCJmdWxsLXdpZHRoXCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIG1hdElucHV0XHJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgICBbbWF4bGVuZ3RoXT1cIm1heGxlbmd0aFwiXHJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImludGVybmFsQ29udHJvbFwiXHJcbiAgICAgICAgW25hbWVdPVwiYXV0b0NvbXBsZXRlT2JzY3VyZU5hbWVcIlxyXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cImRvbnRjb21wbGV0ZW1lXCJcclxuICAgICAgICBbdHlwZV09XCJpbnB1dFR5cGVcIlxyXG4gICAgICAvPlxyXG4gICAgICA8bWF0LWljb24gbWF0U3VmZml4IChjbGljayk9XCJ0b2dnbGVIaWRlKClcIj57e1xyXG4gICAgICAgIGhpZGVQYXNzd29yZCA/ICd2aXNpYmlsaXR5X29mZicgOiAndmlzaWJpbGl0eSdcclxuICAgICAgfX08L21hdC1pY29uPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuZnVsbC13aWR0aCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybVRleHRQYXNzd29yZENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMaWJGb3JtVGV4dFBhc3N3b3JkQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWJGb3JtVGV4dFBhc3N3b3JkQ29tcG9uZW50IGV4dGVuZHMgRm9ybUJhc2U8c3RyaW5nPlxyXG4gIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIG1heGxlbmd0aDogbnVtYmVyO1xyXG5cclxuICBnZXQgaW5wdXRUeXBlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGlkZVBhc3N3b3JkID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0JztcclxuICB9XHJcblxyXG4gIGhpZGVQYXNzd29yZCA9IHRydWU7XHJcblxyXG4gIHRvZ2dsZUhpZGUoKSB7XHJcbiAgICB0aGlzLmhpZGVQYXNzd29yZCA9ICF0aGlzLmhpZGVQYXNzd29yZDtcclxuICB9XHJcbn1cclxuIl19