/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
import { FormBuilderTypedService } from '../../services/form-builder-typed.service';
import { takeUntil } from 'rxjs/operators';
export class LibFormTextAreaDisabledComponent extends FormBase {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        super();
        this.fb = fb;
        this.rows = 4;
        this.disabledControl = this.fb.control({
            value: '',
            disabled: true
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.disabledControl.setValue(this.internalControl.value);
        this.internalControl.valueChanges
            .pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.disabledControl.setValue(this.internalControl.value);
        }));
    }
}
LibFormTextAreaDisabledComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-textarea-disabled',
                template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <textarea
        matInput
        [rows]="rows"
        [placeholder]="placeholder"
        [formControl]="disabledControl"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
      ></textarea>
    </mat-form-field>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTextAreaDisabledComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTextAreaDisabledComponent)),
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
/** @nocollapse */
LibFormTextAreaDisabledComponent.ctorParameters = () => [
    { type: FormBuilderTypedService }
];
LibFormTextAreaDisabledComponent.propDecorators = {
    rows: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS10ZXh0YXJlYS1kaXNhYmxlZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtcmVkdWNlLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL21hdGVyaWFsL2Zvcm0tdGV4dGFyZWEtZGlzYWJsZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3hCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBcUMzQyxNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsUUFBZ0I7Ozs7SUFPcEUsWUFBb0IsRUFBMkI7UUFDN0MsS0FBSyxFQUFFLENBQUM7UUFEVSxPQUFFLEdBQUYsRUFBRSxDQUF5QjtRQUovQyxTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBTVAsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBUztZQUM3QyxLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWTthQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNoQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVELENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7O1lBekRGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFOzs7Ozs7Ozs7OztHQVdUO2dCQVFELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLGdDQUFnQyxFQUFDO3dCQUMvRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBQzt3QkFDL0QsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7eUJBakJDOzs7O0tBSUM7YUFjSjs7OztZQXRDQyx1QkFBdUI7OzttQkF5Q3RCLEtBQUs7Ozs7SUFBTixnREFDUzs7SUFFVCwyREFBNkM7Ozs7O0lBRWpDLDhDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRm9ybUJhc2UgfSBmcm9tICcuLi9mb3JtLWJhc2UtY2xhc3MnO1xyXG5pbXBvcnQge1xyXG4gIEZvcm1Db250cm9sVHlwZVNhZmUsXHJcbiAgRm9ybUJ1aWxkZXJUeXBlZFNlcnZpY2VcclxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtLWJ1aWxkZXItdHlwZWQuc2VydmljZSc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2Zvcm0tdGV4dGFyZWEtZGlzYWJsZWQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bWF0LWZvcm0tZmllbGQgW2FwcGVhcmFuY2VdPVwiYXBwZWFyYW5jZVwiIGNsYXNzPVwiZnVsbC13aWR0aFwiPlxyXG4gICAgICA8dGV4dGFyZWFcclxuICAgICAgICBtYXRJbnB1dFxyXG4gICAgICAgIFtyb3dzXT1cInJvd3NcIlxyXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImRpc2FibGVkQ29udHJvbFwiXHJcbiAgICAgICAgW25hbWVdPVwiYXV0b0NvbXBsZXRlT2JzY3VyZU5hbWVcIlxyXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cImRvbnRjb21wbGV0ZW1lXCJcclxuICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5mdWxsLXdpZHRoIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMaWJGb3JtVGV4dEFyZWFEaXNhYmxlZENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMaWJGb3JtVGV4dEFyZWFEaXNhYmxlZENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGliRm9ybVRleHRBcmVhRGlzYWJsZWRDb21wb25lbnQgZXh0ZW5kcyBGb3JtQmFzZTxzdHJpbmc+XHJcbiAgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgcm93cyA9IDQ7XHJcblxyXG4gIGRpc2FibGVkQ29udHJvbDogRm9ybUNvbnRyb2xUeXBlU2FmZTxzdHJpbmc+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlclR5cGVkU2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuZGlzYWJsZWRDb250cm9sID0gdGhpcy5mYi5jb250cm9sPHN0cmluZz4oe1xyXG4gICAgICB2YWx1ZTogJycsXHJcbiAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5kaXNhYmxlZENvbnRyb2wuc2V0VmFsdWUodGhpcy5pbnRlcm5hbENvbnRyb2wudmFsdWUpO1xyXG4gICAgdGhpcy5pbnRlcm5hbENvbnRyb2wudmFsdWVDaGFuZ2VzXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmludGVybmFsQ29udHJvbC52YWx1ZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=