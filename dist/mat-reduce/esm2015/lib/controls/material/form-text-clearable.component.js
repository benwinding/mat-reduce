/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
export class LibFormTextClearableComponent extends FormBase {
    constructor() {
        super(...arguments);
        this.locked = true;
    }
    /**
     * @return {?}
     */
    onClickEditLock() {
        this.locked = !this.locked;
        /** @type {?} */
        const isEditabled = !this.locked && !this.disabled;
        if (isEditabled) {
            this.internalControl.enable();
        }
        else {
            this.internalControl.disable();
        }
    }
}
LibFormTextClearableComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-text-clearable',
                template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <input
        *ngIf="!disabled && !locked"
        matInput
        [placeholder]="placeholder"
        [formControl]="internalControl"
        [name]="autoCompleteObscureName"
        [maxlength]="maxlength"
        autocomplete="dontcompleteme"
      />
      <input
        *ngIf="disabled || locked"
        matInput
        [disabled]="true"
        [value]="value"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
      />
      <mat-icon
        matSuffix
        class="has-pointer"
        *ngIf="!disabled"
        (click)="onClickEditLock()"
      >
        {{ locked ? 'edit' : 'locked' }}
      </mat-icon>
      <mat-icon matSuffix *ngIf="disabled" class="is-grey">
        edit
      </mat-icon>
    </mat-form-field>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTextClearableComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTextClearableComponent)),
                        multi: true
                    }
                ],
                styles: [`
      .is-grey {
        color: grey;
      }
    `]
            }] }
];
LibFormTextClearableComponent.propDecorators = {
    locked: [{ type: Input }],
    maxlength: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LibFormTextClearableComponent.prototype.locked;
    /** @type {?} */
    LibFormTextClearableComponent.prototype.maxlength;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS10ZXh0LWNsZWFyYWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtcmVkdWNlLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL21hdGVyaWFsL2Zvcm0tdGV4dC1jbGVhcmFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQXlEOUMsTUFBTSxPQUFPLDZCQUE4QixTQUFRLFFBQWdCO0lBdkRuRTs7UUEwREUsV0FBTSxHQUFHLElBQUksQ0FBQztJQWFoQixDQUFDOzs7O0lBVEMsZUFBZTtRQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDOztjQUNyQixXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7UUFDbEQsSUFBSSxXQUFXLEVBQUU7WUFDZixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQy9CO2FBQU07WUFDTCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7O1lBdEVGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBK0JUO2dCQVFELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLDZCQUE2QixFQUFDO3dCQUM1RCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyw2QkFBNkIsRUFBQzt3QkFDNUQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7eUJBakJDOzs7O0tBSUM7YUFjSjs7O3FCQUdFLEtBQUs7d0JBRUwsS0FBSzs7OztJQUZOLCtDQUNjOztJQUNkLGtEQUNrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZvcm1CYXNlIH0gZnJvbSAnLi4vZm9ybS1iYXNlLWNsYXNzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2Zvcm0tdGV4dC1jbGVhcmFibGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bWF0LWZvcm0tZmllbGQgW2FwcGVhcmFuY2VdPVwiYXBwZWFyYW5jZVwiIGNsYXNzPVwiZnVsbC13aWR0aFwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICAqbmdJZj1cIiFkaXNhYmxlZCAmJiAhbG9ja2VkXCJcclxuICAgICAgICBtYXRJbnB1dFxyXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImludGVybmFsQ29udHJvbFwiXHJcbiAgICAgICAgW25hbWVdPVwiYXV0b0NvbXBsZXRlT2JzY3VyZU5hbWVcIlxyXG4gICAgICAgIFttYXhsZW5ndGhdPVwibWF4bGVuZ3RoXCJcclxuICAgICAgICBhdXRvY29tcGxldGU9XCJkb250Y29tcGxldGVtZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgICpuZ0lmPVwiZGlzYWJsZWQgfHwgbG9ja2VkXCJcclxuICAgICAgICBtYXRJbnB1dFxyXG4gICAgICAgIFtkaXNhYmxlZF09XCJ0cnVlXCJcclxuICAgICAgICBbdmFsdWVdPVwidmFsdWVcIlxyXG4gICAgICAgIFtuYW1lXT1cImF1dG9Db21wbGV0ZU9ic2N1cmVOYW1lXCJcclxuICAgICAgICBhdXRvY29tcGxldGU9XCJkb250Y29tcGxldGVtZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxtYXQtaWNvblxyXG4gICAgICAgIG1hdFN1ZmZpeFxyXG4gICAgICAgIGNsYXNzPVwiaGFzLXBvaW50ZXJcIlxyXG4gICAgICAgICpuZ0lmPVwiIWRpc2FibGVkXCJcclxuICAgICAgICAoY2xpY2spPVwib25DbGlja0VkaXRMb2NrKClcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3sgbG9ja2VkID8gJ2VkaXQnIDogJ2xvY2tlZCcgfX1cclxuICAgICAgPC9tYXQtaWNvbj5cclxuICAgICAgPG1hdC1pY29uIG1hdFN1ZmZpeCAqbmdJZj1cImRpc2FibGVkXCIgY2xhc3M9XCJpcy1ncmV5XCI+XHJcbiAgICAgICAgZWRpdFxyXG4gICAgICA8L21hdC1pY29uPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuaXMtZ3JleSB7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybVRleHRDbGVhcmFibGVDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybVRleHRDbGVhcmFibGVDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpYkZvcm1UZXh0Q2xlYXJhYmxlQ29tcG9uZW50IGV4dGVuZHMgRm9ybUJhc2U8c3RyaW5nPiB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbG9ja2VkID0gdHJ1ZTtcclxuICBASW5wdXQoKVxyXG4gIG1heGxlbmd0aDogbnVtYmVyO1xyXG5cclxuICBvbkNsaWNrRWRpdExvY2soKSB7XHJcbiAgICB0aGlzLmxvY2tlZCA9ICF0aGlzLmxvY2tlZDtcclxuICAgIGNvbnN0IGlzRWRpdGFibGVkID0gIXRoaXMubG9ja2VkICYmICF0aGlzLmRpc2FibGVkO1xyXG4gICAgaWYgKGlzRWRpdGFibGVkKSB7XHJcbiAgICAgIHRoaXMuaW50ZXJuYWxDb250cm9sLmVuYWJsZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbnRlcm5hbENvbnRyb2wuZGlzYWJsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=