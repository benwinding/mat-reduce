/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
import { FormBuilderTypedService } from '../../services/form-builder-typed.service';
import { takeUntil } from 'rxjs/operators';
var LibFormTextAreaDisabledComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LibFormTextAreaDisabledComponent, _super);
    function LibFormTextAreaDisabledComponent(fb) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.rows = 4;
        _this.disabledControl = _this.fb.control({
            value: '',
            disabled: true
        });
        return _this;
    }
    /**
     * @return {?}
     */
    LibFormTextAreaDisabledComponent.prototype.ngOnInit = /**
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
    LibFormTextAreaDisabledComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-textarea-disabled',
                    template: "\n    <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n      <textarea\n        matInput\n        [rows]=\"rows\"\n        [placeholder]=\"placeholder\"\n        [formControl]=\"disabledControl\"\n        [name]=\"autoCompleteObscureName\"\n        autocomplete=\"dontcompleteme\"\n      ></textarea>\n    </mat-form-field>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormTextAreaDisabledComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormTextAreaDisabledComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .full-width {\n        width: 100%;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    LibFormTextAreaDisabledComponent.ctorParameters = function () { return [
        { type: FormBuilderTypedService }
    ]; };
    LibFormTextAreaDisabledComponent.propDecorators = {
        rows: [{ type: Input }]
    };
    return LibFormTextAreaDisabledComponent;
}(FormBase));
export { LibFormTextAreaDisabledComponent };
if (false) {
    /** @type {?} */
    LibFormTextAreaDisabledComponent.prototype.rows;
    /** @type {?} */
    LibFormTextAreaDisabledComponent.prototype.disabledControl;
    /**
     * @type {?}
     * @private
     */
    LibFormTextAreaDisabledComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS10ZXh0YXJlYS1kaXNhYmxlZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtcmVkdWNlLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL21hdGVyaWFsL2Zvcm0tdGV4dGFyZWEtZGlzYWJsZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUVMLHVCQUF1QixFQUN4QixNQUFNLDJDQUEyQyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQW1Dc0QsNERBQWdCO0lBT3BFLDBDQUFvQixFQUEyQjtRQUEvQyxZQUNFLGlCQUFPLFNBS1I7UUFObUIsUUFBRSxHQUFGLEVBQUUsQ0FBeUI7UUFKL0MsVUFBSSxHQUFHLENBQUMsQ0FBQztRQU1QLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQVM7WUFDN0MsS0FBSyxFQUFFLEVBQUU7WUFDVCxRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQzs7SUFDTCxDQUFDOzs7O0lBRUQsbURBQVE7OztJQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWTthQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNoQyxTQUFTOzs7UUFBQztZQUNULEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUQsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOztnQkF6REYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUUsMlZBV1Q7b0JBUUQsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLGdDQUFnQyxFQUFoQyxDQUFnQyxFQUFDOzRCQUMvRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsZ0NBQWdDLEVBQWhDLENBQWdDLEVBQUM7NEJBQy9ELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOzZCQWpCQyw0REFJQztpQkFjSjs7OztnQkF0Q0MsdUJBQXVCOzs7dUJBeUN0QixLQUFLOztJQXFCUix1Q0FBQztDQUFBLEFBMURELENBbUNzRCxRQUFRLEdBdUI3RDtTQXZCWSxnQ0FBZ0M7OztJQUUzQyxnREFDUzs7SUFFVCwyREFBNkM7Ozs7O0lBRWpDLDhDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRm9ybUJhc2UgfSBmcm9tICcuLi9mb3JtLWJhc2UtY2xhc3MnO1xyXG5pbXBvcnQge1xyXG4gIEZvcm1Db250cm9sVHlwZVNhZmUsXHJcbiAgRm9ybUJ1aWxkZXJUeXBlZFNlcnZpY2VcclxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtLWJ1aWxkZXItdHlwZWQuc2VydmljZSc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2Zvcm0tdGV4dGFyZWEtZGlzYWJsZWQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bWF0LWZvcm0tZmllbGQgW2FwcGVhcmFuY2VdPVwiYXBwZWFyYW5jZVwiIGNsYXNzPVwiZnVsbC13aWR0aFwiPlxyXG4gICAgICA8dGV4dGFyZWFcclxuICAgICAgICBtYXRJbnB1dFxyXG4gICAgICAgIFtyb3dzXT1cInJvd3NcIlxyXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImRpc2FibGVkQ29udHJvbFwiXHJcbiAgICAgICAgW25hbWVdPVwiYXV0b0NvbXBsZXRlT2JzY3VyZU5hbWVcIlxyXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cImRvbnRjb21wbGV0ZW1lXCJcclxuICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5mdWxsLXdpZHRoIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMaWJGb3JtVGV4dEFyZWFEaXNhYmxlZENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMaWJGb3JtVGV4dEFyZWFEaXNhYmxlZENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGliRm9ybVRleHRBcmVhRGlzYWJsZWRDb21wb25lbnQgZXh0ZW5kcyBGb3JtQmFzZTxzdHJpbmc+XHJcbiAgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgcm93cyA9IDQ7XHJcblxyXG4gIGRpc2FibGVkQ29udHJvbDogRm9ybUNvbnRyb2xUeXBlU2FmZTxzdHJpbmc+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlclR5cGVkU2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuZGlzYWJsZWRDb250cm9sID0gdGhpcy5mYi5jb250cm9sPHN0cmluZz4oe1xyXG4gICAgICB2YWx1ZTogJycsXHJcbiAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5kaXNhYmxlZENvbnRyb2wuc2V0VmFsdWUodGhpcy5pbnRlcm5hbENvbnRyb2wudmFsdWUpO1xyXG4gICAgdGhpcy5pbnRlcm5hbENvbnRyb2wudmFsdWVDaGFuZ2VzXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmludGVybmFsQ29udHJvbC52YWx1ZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=