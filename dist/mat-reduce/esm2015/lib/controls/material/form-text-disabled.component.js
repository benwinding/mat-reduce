/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
import { FormBuilderTypedService } from '../../services/form-builder-typed.service';
import { takeUntil } from 'rxjs/operators';
export class LibFormTextDisabledComponent extends FormBase {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        super();
        this.fb = fb;
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
LibFormTextDisabledComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-text-disabled',
                template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <input
        matInput
        [placeholder]="placeholder"
        [formControl]="disabledControl"
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
                        () => LibFormTextDisabledComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTextDisabledComponent)),
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
LibFormTextDisabledComponent.ctorParameters = () => [
    { type: FormBuilderTypedService }
];
if (false) {
    /** @type {?} */
    LibFormTextDisabledComponent.prototype.disabledControl;
    /**
     * @type {?}
     * @private
     */
    LibFormTextDisabledComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS10ZXh0LWRpc2FibGVkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC1yZWR1Y2UvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvbWF0ZXJpYWwvZm9ybS10ZXh0LWRpc2FibGVkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUVMLHVCQUF1QixFQUN4QixNQUFNLDJDQUEyQyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQW9DM0MsTUFBTSxPQUFPLDRCQUE2QixTQUFRLFFBQWdCOzs7O0lBSWhFLFlBQW9CLEVBQTJCO1FBQzdDLEtBQUssRUFBRSxDQUFDO1FBRFUsT0FBRSxHQUFGLEVBQUUsQ0FBeUI7UUFFN0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBUztZQUM3QyxLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWTthQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNoQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVELENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7O1lBckRGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7O0dBVVQ7Z0JBUUQsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsNEJBQTRCLEVBQUM7d0JBQzNELEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxhQUFhO3dCQUN0QixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLDRCQUE0QixFQUFDO3dCQUMzRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjt5QkFqQkM7Ozs7S0FJQzthQWNKOzs7O1lBckNDLHVCQUF1Qjs7OztJQXdDdkIsdURBQTZDOzs7OztJQUVqQywwQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBGb3JtQmFzZSB9IGZyb20gJy4uL2Zvcm0tYmFzZS1jbGFzcyc7XHJcbmltcG9ydCB7XHJcbiAgRm9ybUNvbnRyb2xUeXBlU2FmZSxcclxuICBGb3JtQnVpbGRlclR5cGVkU2VydmljZVxyXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm0tYnVpbGRlci10eXBlZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZm9ybS10ZXh0LWRpc2FibGVkJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIFthcHBlYXJhbmNlXT1cImFwcGVhcmFuY2VcIiBjbGFzcz1cImZ1bGwtd2lkdGhcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgbWF0SW5wdXRcclxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJkaXNhYmxlZENvbnRyb2xcIlxyXG4gICAgICAgIFtuYW1lXT1cImF1dG9Db21wbGV0ZU9ic2N1cmVOYW1lXCJcclxuICAgICAgICBhdXRvY29tcGxldGU9XCJkb250Y29tcGxldGVtZVwiXHJcbiAgICAgIC8+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5mdWxsLXdpZHRoIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMaWJGb3JtVGV4dERpc2FibGVkQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExpYkZvcm1UZXh0RGlzYWJsZWRDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpYkZvcm1UZXh0RGlzYWJsZWRDb21wb25lbnQgZXh0ZW5kcyBGb3JtQmFzZTxzdHJpbmc+XHJcbiAgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGRpc2FibGVkQ29udHJvbDogRm9ybUNvbnRyb2xUeXBlU2FmZTxzdHJpbmc+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlclR5cGVkU2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuZGlzYWJsZWRDb250cm9sID0gdGhpcy5mYi5jb250cm9sPHN0cmluZz4oe1xyXG4gICAgICB2YWx1ZTogJycsXHJcbiAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5kaXNhYmxlZENvbnRyb2wuc2V0VmFsdWUodGhpcy5pbnRlcm5hbENvbnRyb2wudmFsdWUpO1xyXG4gICAgdGhpcy5pbnRlcm5hbENvbnRyb2wudmFsdWVDaGFuZ2VzXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmludGVybmFsQ29udHJvbC52YWx1ZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=