/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
var LibFormTextClearableComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LibFormTextClearableComponent, _super);
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
export { LibFormTextClearableComponent };
if (false) {
    /** @type {?} */
    LibFormTextClearableComponent.prototype.locked;
    /** @type {?} */
    LibFormTextClearableComponent.prototype.maxlength;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS10ZXh0LWNsZWFyYWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtcmVkdWNlLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL21hdGVyaWFsL2Zvcm0tdGV4dC1jbGVhcmFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUM7SUF1RG1ELHlEQUFnQjtJQXZEbkU7UUFBQSxxRUF1RUM7UUFiQyxZQUFNLEdBQUcsSUFBSSxDQUFDOztJQWFoQixDQUFDOzs7O0lBVEMsdURBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7O1lBQ3JCLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtRQUNsRCxJQUFJLFdBQVcsRUFBRTtZQUNmLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDL0I7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEM7SUFDSCxDQUFDOztnQkF0RUYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsNDRCQStCVDtvQkFRRCxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsNkJBQTZCLEVBQTdCLENBQTZCLEVBQUM7NEJBQzVELEtBQUssRUFBRSxJQUFJO3lCQUNaO3dCQUNEOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSw2QkFBNkIsRUFBN0IsQ0FBNkIsRUFBQzs0QkFDNUQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7NkJBakJDLHlEQUlDO2lCQWNKOzs7eUJBR0UsS0FBSzs0QkFFTCxLQUFLOztJQVlSLG9DQUFDO0NBQUEsQUF2RUQsQ0F1RG1ELFFBQVEsR0FnQjFEO1NBaEJZLDZCQUE2Qjs7O0lBRXhDLCtDQUNjOztJQUNkLGtEQUNrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZvcm1CYXNlIH0gZnJvbSAnLi4vZm9ybS1iYXNlLWNsYXNzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2Zvcm0tdGV4dC1jbGVhcmFibGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bWF0LWZvcm0tZmllbGQgW2FwcGVhcmFuY2VdPVwiYXBwZWFyYW5jZVwiIGNsYXNzPVwiZnVsbC13aWR0aFwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICAqbmdJZj1cIiFkaXNhYmxlZCAmJiAhbG9ja2VkXCJcclxuICAgICAgICBtYXRJbnB1dFxyXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImludGVybmFsQ29udHJvbFwiXHJcbiAgICAgICAgW25hbWVdPVwiYXV0b0NvbXBsZXRlT2JzY3VyZU5hbWVcIlxyXG4gICAgICAgIFttYXhsZW5ndGhdPVwibWF4bGVuZ3RoXCJcclxuICAgICAgICBhdXRvY29tcGxldGU9XCJkb250Y29tcGxldGVtZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgICpuZ0lmPVwiZGlzYWJsZWQgfHwgbG9ja2VkXCJcclxuICAgICAgICBtYXRJbnB1dFxyXG4gICAgICAgIFtkaXNhYmxlZF09XCJ0cnVlXCJcclxuICAgICAgICBbdmFsdWVdPVwidmFsdWVcIlxyXG4gICAgICAgIFtuYW1lXT1cImF1dG9Db21wbGV0ZU9ic2N1cmVOYW1lXCJcclxuICAgICAgICBhdXRvY29tcGxldGU9XCJkb250Y29tcGxldGVtZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxtYXQtaWNvblxyXG4gICAgICAgIG1hdFN1ZmZpeFxyXG4gICAgICAgIGNsYXNzPVwiaGFzLXBvaW50ZXJcIlxyXG4gICAgICAgICpuZ0lmPVwiIWRpc2FibGVkXCJcclxuICAgICAgICAoY2xpY2spPVwib25DbGlja0VkaXRMb2NrKClcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3sgbG9ja2VkID8gJ2VkaXQnIDogJ2xvY2tlZCcgfX1cclxuICAgICAgPC9tYXQtaWNvbj5cclxuICAgICAgPG1hdC1pY29uIG1hdFN1ZmZpeCAqbmdJZj1cImRpc2FibGVkXCIgY2xhc3M9XCJpcy1ncmV5XCI+XHJcbiAgICAgICAgZWRpdFxyXG4gICAgICA8L21hdC1pY29uPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuaXMtZ3JleSB7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybVRleHRDbGVhcmFibGVDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybVRleHRDbGVhcmFibGVDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpYkZvcm1UZXh0Q2xlYXJhYmxlQ29tcG9uZW50IGV4dGVuZHMgRm9ybUJhc2U8c3RyaW5nPiB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbG9ja2VkID0gdHJ1ZTtcclxuICBASW5wdXQoKVxyXG4gIG1heGxlbmd0aDogbnVtYmVyO1xyXG5cclxuICBvbkNsaWNrRWRpdExvY2soKSB7XHJcbiAgICB0aGlzLmxvY2tlZCA9ICF0aGlzLmxvY2tlZDtcclxuICAgIGNvbnN0IGlzRWRpdGFibGVkID0gIXRoaXMubG9ja2VkICYmICF0aGlzLmRpc2FibGVkO1xyXG4gICAgaWYgKGlzRWRpdGFibGVkKSB7XHJcbiAgICAgIHRoaXMuaW50ZXJuYWxDb250cm9sLmVuYWJsZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbnRlcm5hbENvbnRyb2wuZGlzYWJsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=