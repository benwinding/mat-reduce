/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
var LibFormTextIconsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LibFormTextIconsComponent, _super);
    function LibFormTextIconsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clearable = true;
        _this.prefixIcon = 'search';
        return _this;
    }
    /**
     * @return {?}
     */
    LibFormTextIconsComponent.prototype.onClickClear = /**
     * @return {?}
     */
    function () {
        this.internalControl.reset();
    };
    LibFormTextIconsComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-text-icons',
                    template: "\n    <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n      <mat-icon matPrefix class=\"has-pointer\" *ngIf=\"prefixIcon\">\n        {{ prefixIcon }}\n      </mat-icon>\n      <input\n        matInput\n        [formControl]=\"internalControl\"\n        [maxlength]=\"maxlength\"\n        [placeholder]=\"placeholder\"\n        [name]=\"autoCompleteObscureName\"\n        autocomplete=\"dontcompleteme\"\n      />\n      <mat-icon\n        matSuffix\n        class=\"has-pointer\"\n        *ngIf=\"!disabled && clearable\"\n        (click)=\"onClickClear()\"\n      >\n        clear\n      </mat-icon>\n    </mat-form-field>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormTextIconsComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormTextIconsComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .is-grey {\n        color: grey;\n      }\n    "]
                }] }
    ];
    LibFormTextIconsComponent.propDecorators = {
        maxlength: [{ type: Input }],
        clearable: [{ type: Input }],
        prefixIcon: [{ type: Input }]
    };
    return LibFormTextIconsComponent;
}(FormBase));
export { LibFormTextIconsComponent };
if (false) {
    /** @type {?} */
    LibFormTextIconsComponent.prototype.maxlength;
    /** @type {?} */
    LibFormTextIconsComponent.prototype.clearable;
    /** @type {?} */
    LibFormTextIconsComponent.prototype.prefixIcon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS10ZXh0LWljb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC1yZWR1Y2UvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvbWF0ZXJpYWwvZm9ybS10ZXh0LWljb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlDO0lBOEMrQyxxREFBZ0I7SUE5Qy9EO1FBQUEscUVBeURDO1FBUEMsZUFBUyxHQUFHLElBQUksQ0FBQztRQUVqQixnQkFBVSxHQUFHLFFBQVEsQ0FBQzs7SUFLeEIsQ0FBQzs7OztJQUhDLGdEQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Z0JBeERGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLHdvQkFzQlQ7b0JBUUQsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLHlCQUF5QixFQUF6QixDQUF5QixFQUFDOzRCQUN4RCxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEseUJBQXlCLEVBQXpCLENBQXlCLEVBQUM7NEJBQ3hELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOzZCQWpCQyx5REFJQztpQkFjSjs7OzRCQUVFLEtBQUs7NEJBRUwsS0FBSzs2QkFFTCxLQUFLOztJQU1SLGdDQUFDO0NBQUEsQUF6REQsQ0E4QytDLFFBQVEsR0FXdEQ7U0FYWSx5QkFBeUI7OztJQUNwQyw4Q0FDa0I7O0lBQ2xCLDhDQUNpQjs7SUFDakIsK0NBQ3NCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRm9ybUJhc2UgfSBmcm9tICcuLi9mb3JtLWJhc2UtY2xhc3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZm9ybS10ZXh0LWljb25zJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIFthcHBlYXJhbmNlXT1cImFwcGVhcmFuY2VcIiBjbGFzcz1cImZ1bGwtd2lkdGhcIj5cclxuICAgICAgPG1hdC1pY29uIG1hdFByZWZpeCBjbGFzcz1cImhhcy1wb2ludGVyXCIgKm5nSWY9XCJwcmVmaXhJY29uXCI+XHJcbiAgICAgICAge3sgcHJlZml4SWNvbiB9fVxyXG4gICAgICA8L21hdC1pY29uPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBtYXRJbnB1dFxyXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJpbnRlcm5hbENvbnRyb2xcIlxyXG4gICAgICAgIFttYXhsZW5ndGhdPVwibWF4bGVuZ3RoXCJcclxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIFtuYW1lXT1cImF1dG9Db21wbGV0ZU9ic2N1cmVOYW1lXCJcclxuICAgICAgICBhdXRvY29tcGxldGU9XCJkb250Y29tcGxldGVtZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxtYXQtaWNvblxyXG4gICAgICAgIG1hdFN1ZmZpeFxyXG4gICAgICAgIGNsYXNzPVwiaGFzLXBvaW50ZXJcIlxyXG4gICAgICAgICpuZ0lmPVwiIWRpc2FibGVkICYmIGNsZWFyYWJsZVwiXHJcbiAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2tDbGVhcigpXCJcclxuICAgICAgPlxyXG4gICAgICAgIGNsZWFyXHJcbiAgICAgIDwvbWF0LWljb24+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5pcy1ncmV5IHtcclxuICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMaWJGb3JtVGV4dEljb25zQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExpYkZvcm1UZXh0SWNvbnNDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpYkZvcm1UZXh0SWNvbnNDb21wb25lbnQgZXh0ZW5kcyBGb3JtQmFzZTxzdHJpbmc+IHtcclxuICBASW5wdXQoKVxyXG4gIG1heGxlbmd0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgY2xlYXJhYmxlID0gdHJ1ZTtcclxuICBASW5wdXQoKVxyXG4gIHByZWZpeEljb24gPSAnc2VhcmNoJztcclxuXHJcbiAgb25DbGlja0NsZWFyKCkge1xyXG4gICAgdGhpcy5pbnRlcm5hbENvbnRyb2wucmVzZXQoKTtcclxuICB9XHJcbn1cclxuIl19