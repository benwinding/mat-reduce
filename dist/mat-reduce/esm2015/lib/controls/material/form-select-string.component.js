/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
export class LibFormSelectStringComponent extends FormBase {
}
LibFormSelectStringComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-select-string',
                template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <mat-select
        [formControl]="this.internalControl"
        [placeholder]="placeholder"
      >
        <mat-option *ngFor="let selection of selections" [value]="selection">
          {{ selection }}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormSelectStringComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormSelectStringComponent)),
                        multi: true
                    }
                ],
                styles: [`
      .full-width {
        width: 100%;
        padding-bottom: 15px;
      }
    `]
            }] }
];
LibFormSelectStringComponent.propDecorators = {
    selections: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LibFormSelectStringComponent.prototype.selections;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1zZWxlY3Qtc3RyaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC1yZWR1Y2UvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvbWF0ZXJpYWwvZm9ybS1zZWxlY3Qtc3RyaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBc0M5QyxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsUUFBZ0I7OztZQXBDakUsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7O0dBV1Q7Z0JBU0QsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsNEJBQTRCLEVBQUM7d0JBQzNELEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxhQUFhO3dCQUN0QixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLDRCQUE0QixFQUFDO3dCQUMzRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjt5QkFsQkM7Ozs7O0tBS0M7YUFjSjs7O3lCQUVFLEtBQUs7Ozs7SUFBTixrREFDcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRm9ybUJhc2UgfSBmcm9tICcuLi9mb3JtLWJhc2UtY2xhc3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZm9ybS1zZWxlY3Qtc3RyaW5nJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIFthcHBlYXJhbmNlXT1cImFwcGVhcmFuY2VcIiBjbGFzcz1cImZ1bGwtd2lkdGhcIj5cclxuICAgICAgPG1hdC1zZWxlY3RcclxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwidGhpcy5pbnRlcm5hbENvbnRyb2xcIlxyXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgID5cclxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc2VsZWN0aW9uIG9mIHNlbGVjdGlvbnNcIiBbdmFsdWVdPVwic2VsZWN0aW9uXCI+XHJcbiAgICAgICAgICB7eyBzZWxlY3Rpb24gfX1cclxuICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmZ1bGwtd2lkdGgge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExpYkZvcm1TZWxlY3RTdHJpbmdDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybVNlbGVjdFN0cmluZ0NvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGliRm9ybVNlbGVjdFN0cmluZ0NvbXBvbmVudCBleHRlbmRzIEZvcm1CYXNlPHN0cmluZz4ge1xyXG4gIEBJbnB1dCgpXHJcbiAgc2VsZWN0aW9uczogc3RyaW5nW107XHJcbn1cclxuIl19