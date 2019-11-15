/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
import { FormBuilderTypedService } from '../../services/form-builder-typed.service';
import { takeUntil } from 'rxjs/operators';
var LibFormTextDisabledComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LibFormTextDisabledComponent, _super);
    function LibFormTextDisabledComponent(fb) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.disabledControl = _this.fb.control({
            value: '',
            disabled: true
        });
        return _this;
    }
    /**
     * @return {?}
     */
    LibFormTextDisabledComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.disabledControl.setValue(this.internalControl.value);
        this.internalControl.valueChanges
            .pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.disabledControl.setValue(_this.internalControl.value);
        }));
    };
    LibFormTextDisabledComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-text-disabled',
                    template: "\n    <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n      <input\n        matInput\n        [placeholder]=\"placeholder\"\n        [formControl]=\"disabledControl\"\n        [name]=\"autoCompleteObscureName\"\n        autocomplete=\"dontcompleteme\"\n      />\n    </mat-form-field>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormTextDisabledComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormTextDisabledComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .full-width {\n        width: 100%;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    LibFormTextDisabledComponent.ctorParameters = function () { return [
        { type: FormBuilderTypedService }
    ]; };
    return LibFormTextDisabledComponent;
}(FormBase));
export { LibFormTextDisabledComponent };
if (false) {
    /** @type {?} */
    LibFormTextDisabledComponent.prototype.disabledControl;
    /**
     * @type {?}
     * @private
     */
    LibFormTextDisabledComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS10ZXh0LWRpc2FibGVkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC1yZWR1Y2UvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvbWF0ZXJpYWwvZm9ybS10ZXh0LWRpc2FibGVkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFFTCx1QkFBdUIsRUFDeEIsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUFrQ2tELHdEQUFnQjtJQUloRSxzQ0FBb0IsRUFBMkI7UUFBL0MsWUFDRSxpQkFBTyxTQUtSO1FBTm1CLFFBQUUsR0FBRixFQUFFLENBQXlCO1FBRTdDLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQVM7WUFDN0MsS0FBSyxFQUFFLEVBQUU7WUFDVCxRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQzs7SUFDTCxDQUFDOzs7O0lBRUQsK0NBQVE7OztJQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWTthQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNoQyxTQUFTOzs7UUFBQztZQUNULEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUQsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOztnQkFyREYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUscVRBVVQ7b0JBUUQsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLDRCQUE0QixFQUE1QixDQUE0QixFQUFDOzRCQUMzRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsNEJBQTRCLEVBQTVCLENBQTRCLEVBQUM7NEJBQzNELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOzZCQWpCQyw0REFJQztpQkFjSjs7OztnQkFyQ0MsdUJBQXVCOztJQTBEekIsbUNBQUM7Q0FBQSxBQXRERCxDQWtDa0QsUUFBUSxHQW9CekQ7U0FwQlksNEJBQTRCOzs7SUFFdkMsdURBQTZDOzs7OztJQUVqQywwQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBGb3JtQmFzZSB9IGZyb20gJy4uL2Zvcm0tYmFzZS1jbGFzcyc7XHJcbmltcG9ydCB7XHJcbiAgRm9ybUNvbnRyb2xUeXBlU2FmZSxcclxuICBGb3JtQnVpbGRlclR5cGVkU2VydmljZVxyXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm0tYnVpbGRlci10eXBlZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZm9ybS10ZXh0LWRpc2FibGVkJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIFthcHBlYXJhbmNlXT1cImFwcGVhcmFuY2VcIiBjbGFzcz1cImZ1bGwtd2lkdGhcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgbWF0SW5wdXRcclxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJkaXNhYmxlZENvbnRyb2xcIlxyXG4gICAgICAgIFtuYW1lXT1cImF1dG9Db21wbGV0ZU9ic2N1cmVOYW1lXCJcclxuICAgICAgICBhdXRvY29tcGxldGU9XCJkb250Y29tcGxldGVtZVwiXHJcbiAgICAgIC8+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5mdWxsLXdpZHRoIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMaWJGb3JtVGV4dERpc2FibGVkQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExpYkZvcm1UZXh0RGlzYWJsZWRDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpYkZvcm1UZXh0RGlzYWJsZWRDb21wb25lbnQgZXh0ZW5kcyBGb3JtQmFzZTxzdHJpbmc+XHJcbiAgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGRpc2FibGVkQ29udHJvbDogRm9ybUNvbnRyb2xUeXBlU2FmZTxzdHJpbmc+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlclR5cGVkU2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuZGlzYWJsZWRDb250cm9sID0gdGhpcy5mYi5jb250cm9sPHN0cmluZz4oe1xyXG4gICAgICB2YWx1ZTogJycsXHJcbiAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5kaXNhYmxlZENvbnRyb2wuc2V0VmFsdWUodGhpcy5pbnRlcm5hbENvbnRyb2wudmFsdWUpO1xyXG4gICAgdGhpcy5pbnRlcm5hbENvbnRyb2wudmFsdWVDaGFuZ2VzXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmludGVybmFsQ29udHJvbC52YWx1ZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=