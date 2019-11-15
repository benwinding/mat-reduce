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
export class LibFormSelectObjectMultipleComponent extends FormBase {
    constructor() {
        super(...arguments);
        this.compareObject = compareObject;
    }
}
LibFormSelectObjectMultipleComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-select-object-multiple',
                template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <mat-select
        [formControl]="this.internalControl"
        [placeholder]="placeholder"
        [compareWith]="compareObject"
        multiple
      >
        <mat-select-trigger>
          <div *ngIf="this.internalControl.value as selected">
            {{ selected?.length ? selected[0][selectionKey] : '' }}
            <span
              *ngIf="this.internalControl.value?.length > 1"
              class="example-additional-selection"
            >
              (+{{ selected.length - 1 }}
              {{ selected?.length === 2 ? 'other' : 'others' }})
            </span>
          </div>
        </mat-select-trigger>
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
                        () => LibFormSelectObjectMultipleComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormSelectObjectMultipleComponent)),
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
LibFormSelectObjectMultipleComponent.propDecorators = {
    selectionObjects: [{ type: Input }],
    selectionKey: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LibFormSelectObjectMultipleComponent.prototype.selectionObjects;
    /** @type {?} */
    LibFormSelectObjectMultipleComponent.prototype.selectionKey;
    /** @type {?} */
    LibFormSelectObjectMultipleComponent.prototype.compareObject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1zZWxlY3Qtb2JqZWN0LW11bHRpcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC1yZWR1Y2UvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvbWF0ZXJpYWwvZm9ybS1zZWxlY3Qtb2JqZWN0LW11bHRpcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7QUFFOUMsU0FBUyxhQUFhLENBQUMsRUFBTSxFQUFFLEVBQU07SUFDbkMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNkLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7O1FBQ0csS0FBSzs7UUFBRSxLQUFLO0lBQ2hCLElBQUk7UUFDRixLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQixLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUM1QjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUNELElBQUksS0FBSyxLQUFLLEtBQUssRUFBRTtRQUNuQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBdURELE1BQU0sT0FBTyxvQ0FBcUMsU0FBUSxRQUFnQjtJQXJEMUU7O1FBMkRFLGtCQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ2hDLENBQUM7OztZQTVEQSxTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCVDtnQkFTRCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBQzt3QkFDbkUsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGFBQWE7d0JBQ3RCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsb0NBQW9DLEVBQUM7d0JBQ25FLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO3lCQWxCQzs7Ozs7S0FLQzthQWNKOzs7K0JBRUUsS0FBSzsyQkFFTCxLQUFLOzs7O0lBRk4sZ0VBQzJCOztJQUMzQiw0REFDcUI7O0lBRXJCLDZEQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBGb3JtQmFzZSB9IGZyb20gJy4uL2Zvcm0tYmFzZS1jbGFzcyc7XHJcblxyXG5mdW5jdGlvbiBjb21wYXJlT2JqZWN0KGwxOiB7fSwgbDI6IHt9KSB7XHJcbiAgaWYgKCFsMSB8fCAhbDIpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgbGV0IGpzb24xLCBqc29uMjtcclxuICB0cnkge1xyXG4gICAganNvbjEgPSBKU09OLnN0cmluZ2lmeShsMSk7XHJcbiAgICBqc29uMiA9IEpTT04uc3RyaW5naWZ5KGwyKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAoanNvbjEgIT09IGpzb24yKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdmb3JtLXNlbGVjdC1vYmplY3QtbXVsdGlwbGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bWF0LWZvcm0tZmllbGQgW2FwcGVhcmFuY2VdPVwiYXBwZWFyYW5jZVwiIGNsYXNzPVwiZnVsbC13aWR0aFwiPlxyXG4gICAgICA8bWF0LXNlbGVjdFxyXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJ0aGlzLmludGVybmFsQ29udHJvbFwiXHJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgICBbY29tcGFyZVdpdGhdPVwiY29tcGFyZU9iamVjdFwiXHJcbiAgICAgICAgbXVsdGlwbGVcclxuICAgICAgPlxyXG4gICAgICAgIDxtYXQtc2VsZWN0LXRyaWdnZXI+XHJcbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwidGhpcy5pbnRlcm5hbENvbnRyb2wudmFsdWUgYXMgc2VsZWN0ZWRcIj5cclxuICAgICAgICAgICAge3sgc2VsZWN0ZWQ/Lmxlbmd0aCA/IHNlbGVjdGVkWzBdW3NlbGVjdGlvbktleV0gOiAnJyB9fVxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICpuZ0lmPVwidGhpcy5pbnRlcm5hbENvbnRyb2wudmFsdWU/Lmxlbmd0aCA+IDFcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1hZGRpdGlvbmFsLXNlbGVjdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAoK3t7IHNlbGVjdGVkLmxlbmd0aCAtIDEgfX1cclxuICAgICAgICAgICAgICB7eyBzZWxlY3RlZD8ubGVuZ3RoID09PSAyID8gJ290aGVyJyA6ICdvdGhlcnMnIH19KVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21hdC1zZWxlY3QtdHJpZ2dlcj5cclxuICAgICAgICA8bWF0LW9wdGlvblxyXG4gICAgICAgICAgKm5nRm9yPVwibGV0IHNlbGVjdGlvbk9iamVjdCBvZiBzZWxlY3Rpb25PYmplY3RzXCJcclxuICAgICAgICAgIFt2YWx1ZV09XCJzZWxlY3Rpb25PYmplY3RcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt7IHNlbGVjdGlvbk9iamVjdFtzZWxlY3Rpb25LZXldIH19XHJcbiAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5mdWxsLXdpZHRoIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMaWJGb3JtU2VsZWN0T2JqZWN0TXVsdGlwbGVDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybVNlbGVjdE9iamVjdE11bHRpcGxlQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWJGb3JtU2VsZWN0T2JqZWN0TXVsdGlwbGVDb21wb25lbnQgZXh0ZW5kcyBGb3JtQmFzZTxPYmplY3Q+IHtcclxuICBASW5wdXQoKVxyXG4gIHNlbGVjdGlvbk9iamVjdHM6IE9iamVjdFtdO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2VsZWN0aW9uS2V5OiBzdHJpbmc7XHJcblxyXG4gIGNvbXBhcmVPYmplY3QgPSBjb21wYXJlT2JqZWN0O1xyXG59XHJcbiJdfQ==