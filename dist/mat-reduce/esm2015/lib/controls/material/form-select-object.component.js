/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
/**
 * @param {?} l1
 * @param {?} l2
 * @return {?}
 */
function compareObject(l1, l2) {
    if (!l1 || !l2) {
        return false;
    }
    /** @type {?} */
    let json1;
    /** @type {?} */
    let json2;
    try {
        json1 = JSON.stringify(l1);
        json2 = JSON.stringify(l2);
    }
    catch (error) {
        return false;
    }
    if (json1 !== json2) {
        return false;
    }
    return true;
}
export class LibFormSelectObjectComponent extends FormBase {
    constructor() {
        super(...arguments);
        this.compareObject = compareObject;
    }
    /**
     * @param {?} newVal
     * @return {?}
     */
    writeValue(newVal) {
        this.value = newVal || {};
    }
}
LibFormSelectObjectComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-select-object',
                template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <mat-select
        [formControl]="this.internalControl"
        [placeholder]="placeholder"
        [compareWith]="compareObject"
      >
        <mat-option
          *ngFor="let selectionObject of selectionObjects"
          [value]="selectionObject"
        >
          {{ selectionObject[selectionKey] }}
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
                        () => LibFormSelectObjectComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormSelectObjectComponent)),
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
LibFormSelectObjectComponent.propDecorators = {
    selectionObjects: [{ type: Input }],
    selectionKey: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LibFormSelectObjectComponent.prototype.selectionObjects;
    /** @type {?} */
    LibFormSelectObjectComponent.prototype.selectionKey;
    /** @type {?} */
    LibFormSelectObjectComponent.prototype.compareObject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1zZWxlY3Qtb2JqZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC1yZWR1Y2UvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvbWF0ZXJpYWwvZm9ybS1zZWxlY3Qtb2JqZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7QUFFOUMsU0FBUyxhQUFhLENBQUMsRUFBTSxFQUFFLEVBQU07SUFDbkMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNkLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7O1FBQ0csS0FBSzs7UUFBRSxLQUFLO0lBQ2hCLElBQUk7UUFDRixLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQixLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUM1QjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUNELElBQUksS0FBSyxLQUFLLEtBQUssRUFBRTtRQUNuQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBMENELE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxRQUFnQjtJQXhDbEU7O1FBOENFLGtCQUFhLEdBQUcsYUFBYSxDQUFDO0lBS2hDLENBQUM7Ozs7O0lBSEMsVUFBVSxDQUFDLE1BQWM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7OztZQWxERixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0dBZVQ7Z0JBU0QsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsNEJBQTRCLEVBQUM7d0JBQzNELEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxhQUFhO3dCQUN0QixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLDRCQUE0QixFQUFDO3dCQUMzRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjt5QkFsQkM7Ozs7O0tBS0M7YUFjSjs7OytCQUVFLEtBQUs7MkJBRUwsS0FBSzs7OztJQUZOLHdEQUMyQjs7SUFDM0Isb0RBQ3FCOztJQUVyQixxREFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRm9ybUJhc2UgfSBmcm9tICcuLi9mb3JtLWJhc2UtY2xhc3MnO1xyXG5cclxuZnVuY3Rpb24gY29tcGFyZU9iamVjdChsMToge30sIGwyOiB7fSkge1xyXG4gIGlmICghbDEgfHwgIWwyKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGxldCBqc29uMSwganNvbjI7XHJcbiAgdHJ5IHtcclxuICAgIGpzb24xID0gSlNPTi5zdHJpbmdpZnkobDEpO1xyXG4gICAganNvbjIgPSBKU09OLnN0cmluZ2lmeShsMik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaWYgKGpzb24xICE9PSBqc29uMikge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZm9ybS1zZWxlY3Qtb2JqZWN0JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIFthcHBlYXJhbmNlXT1cImFwcGVhcmFuY2VcIiBjbGFzcz1cImZ1bGwtd2lkdGhcIj5cclxuICAgICAgPG1hdC1zZWxlY3RcclxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwidGhpcy5pbnRlcm5hbENvbnRyb2xcIlxyXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgICAgW2NvbXBhcmVXaXRoXT1cImNvbXBhcmVPYmplY3RcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPG1hdC1vcHRpb25cclxuICAgICAgICAgICpuZ0Zvcj1cImxldCBzZWxlY3Rpb25PYmplY3Qgb2Ygc2VsZWN0aW9uT2JqZWN0c1wiXHJcbiAgICAgICAgICBbdmFsdWVdPVwic2VsZWN0aW9uT2JqZWN0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7eyBzZWxlY3Rpb25PYmplY3Rbc2VsZWN0aW9uS2V5XSB9fVxyXG4gICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuZnVsbC13aWR0aCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybVNlbGVjdE9iamVjdENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMaWJGb3JtU2VsZWN0T2JqZWN0Q29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWJGb3JtU2VsZWN0T2JqZWN0Q29tcG9uZW50IGV4dGVuZHMgRm9ybUJhc2U8T2JqZWN0PiB7XHJcbiAgQElucHV0KClcclxuICBzZWxlY3Rpb25PYmplY3RzOiBPYmplY3RbXTtcclxuICBASW5wdXQoKVxyXG4gIHNlbGVjdGlvbktleTogc3RyaW5nO1xyXG5cclxuICBjb21wYXJlT2JqZWN0ID0gY29tcGFyZU9iamVjdDtcclxuXHJcbiAgd3JpdGVWYWx1ZShuZXdWYWw6IE9iamVjdCkge1xyXG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbCB8fCB7fTtcclxuICB9XHJcbn1cclxuIl19