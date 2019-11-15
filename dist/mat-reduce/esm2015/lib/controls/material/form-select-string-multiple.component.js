/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
export class LibFormSelectStringMultipleComponent extends FormBase {
}
LibFormSelectStringMultipleComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-select-string-multiple',
                template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <mat-select
        [formControl]="this.internalControl"
        [placeholder]="placeholder"
        multiple
      >
        <mat-select-trigger>
          <div *ngIf="this.internalControl.value as selected">
            {{ selected?.length ? selected[0] : '' }}
            <span
              *ngIf="this.internalControl.value?.length > 1"
              class="example-additional-selection"
            >
              (+{{ selected.length - 1 }}
              {{ selected?.length === 2 ? 'other' : 'others' }})
            </span>
          </div>
        </mat-select-trigger>
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
                        () => LibFormSelectStringMultipleComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormSelectStringMultipleComponent)),
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
LibFormSelectStringMultipleComponent.propDecorators = {
    selections: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LibFormSelectStringMultipleComponent.prototype.selections;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1zZWxlY3Qtc3RyaW5nLW11bHRpcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC1yZWR1Y2UvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvbWF0ZXJpYWwvZm9ybS1zZWxlY3Qtc3RyaW5nLW11bHRpcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBbUQ5QyxNQUFNLE9BQU8sb0NBQXFDLFNBQVEsUUFBa0I7OztZQWpEM0UsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCVDtnQkFTRCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBQzt3QkFDbkUsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGFBQWE7d0JBQ3RCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsb0NBQW9DLEVBQUM7d0JBQ25FLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO3lCQWxCQzs7Ozs7S0FLQzthQWNKOzs7eUJBRUUsS0FBSzs7OztJQUFOLDBEQUNxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBGb3JtQmFzZSB9IGZyb20gJy4uL2Zvcm0tYmFzZS1jbGFzcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdmb3JtLXNlbGVjdC1zdHJpbmctbXVsdGlwbGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bWF0LWZvcm0tZmllbGQgW2FwcGVhcmFuY2VdPVwiYXBwZWFyYW5jZVwiIGNsYXNzPVwiZnVsbC13aWR0aFwiPlxyXG4gICAgICA8bWF0LXNlbGVjdFxyXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJ0aGlzLmludGVybmFsQ29udHJvbFwiXHJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgICBtdWx0aXBsZVxyXG4gICAgICA+XHJcbiAgICAgICAgPG1hdC1zZWxlY3QtdHJpZ2dlcj5cclxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJ0aGlzLmludGVybmFsQ29udHJvbC52YWx1ZSBhcyBzZWxlY3RlZFwiPlxyXG4gICAgICAgICAgICB7eyBzZWxlY3RlZD8ubGVuZ3RoID8gc2VsZWN0ZWRbMF0gOiAnJyB9fVxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICpuZ0lmPVwidGhpcy5pbnRlcm5hbENvbnRyb2wudmFsdWU/Lmxlbmd0aCA+IDFcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1hZGRpdGlvbmFsLXNlbGVjdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAoK3t7IHNlbGVjdGVkLmxlbmd0aCAtIDEgfX1cclxuICAgICAgICAgICAgICB7eyBzZWxlY3RlZD8ubGVuZ3RoID09PSAyID8gJ290aGVyJyA6ICdvdGhlcnMnIH19KVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21hdC1zZWxlY3QtdHJpZ2dlcj5cclxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc2VsZWN0aW9uIG9mIHNlbGVjdGlvbnNcIiBbdmFsdWVdPVwic2VsZWN0aW9uXCI+XHJcbiAgICAgICAgICB7eyBzZWxlY3Rpb24gfX1cclxuICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmZ1bGwtd2lkdGgge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExpYkZvcm1TZWxlY3RTdHJpbmdNdWx0aXBsZUNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMaWJGb3JtU2VsZWN0U3RyaW5nTXVsdGlwbGVDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpYkZvcm1TZWxlY3RTdHJpbmdNdWx0aXBsZUNvbXBvbmVudCBleHRlbmRzIEZvcm1CYXNlPHN0cmluZ1tdPiB7XHJcbiAgQElucHV0KClcclxuICBzZWxlY3Rpb25zOiBzdHJpbmdbXTtcclxufVxyXG4iXX0=