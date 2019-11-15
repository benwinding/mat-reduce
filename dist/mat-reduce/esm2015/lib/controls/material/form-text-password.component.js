/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
export class LibFormTextPasswordComponent extends FormBase {
    constructor() {
        super(...arguments);
        this.hidePassword = true;
    }
    /**
     * @return {?}
     */
    get inputType() {
        return this.hidePassword ? 'password' : 'text';
    }
    /**
     * @return {?}
     */
    toggleHide() {
        this.hidePassword = !this.hidePassword;
    }
}
LibFormTextPasswordComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-text-password',
                template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <input
        matInput
        [placeholder]="placeholder"
        [maxlength]="maxlength"
        [formControl]="internalControl"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
        [type]="inputType"
      />
      <mat-icon matSuffix (click)="toggleHide()">{{
        hidePassword ? 'visibility_off' : 'visibility'
      }}</mat-icon>
    </mat-form-field>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTextPasswordComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTextPasswordComponent)),
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
LibFormTextPasswordComponent.propDecorators = {
    maxlength: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LibFormTextPasswordComponent.prototype.maxlength;
    /** @type {?} */
    LibFormTextPasswordComponent.prototype.hidePassword;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS10ZXh0LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC1yZWR1Y2UvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvbWF0ZXJpYWwvZm9ybS10ZXh0LXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUF5QzlDLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxRQUFnQjtJQXZDbEU7O1FBZ0RFLGlCQUFZLEdBQUcsSUFBSSxDQUFDO0lBS3RCLENBQUM7Ozs7SUFUQyxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ2pELENBQUM7Ozs7SUFJRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDekMsQ0FBQzs7O1lBcERGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7R0FlVDtnQkFRRCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyw0QkFBNEIsRUFBQzt3QkFDM0QsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGFBQWE7d0JBQ3RCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsNEJBQTRCLEVBQUM7d0JBQzNELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO3lCQWpCQzs7OztLQUlDO2FBY0o7Ozt3QkFHRSxLQUFLOzs7O0lBQU4saURBQ2tCOztJQU1sQixvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZvcm1CYXNlIH0gZnJvbSAnLi4vZm9ybS1iYXNlLWNsYXNzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2Zvcm0tdGV4dC1wYXNzd29yZCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxtYXQtZm9ybS1maWVsZCBbYXBwZWFyYW5jZV09XCJhcHBlYXJhbmNlXCIgY2xhc3M9XCJmdWxsLXdpZHRoXCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIG1hdElucHV0XHJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgICBbbWF4bGVuZ3RoXT1cIm1heGxlbmd0aFwiXHJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImludGVybmFsQ29udHJvbFwiXHJcbiAgICAgICAgW25hbWVdPVwiYXV0b0NvbXBsZXRlT2JzY3VyZU5hbWVcIlxyXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cImRvbnRjb21wbGV0ZW1lXCJcclxuICAgICAgICBbdHlwZV09XCJpbnB1dFR5cGVcIlxyXG4gICAgICAvPlxyXG4gICAgICA8bWF0LWljb24gbWF0U3VmZml4IChjbGljayk9XCJ0b2dnbGVIaWRlKClcIj57e1xyXG4gICAgICAgIGhpZGVQYXNzd29yZCA/ICd2aXNpYmlsaXR5X29mZicgOiAndmlzaWJpbGl0eSdcclxuICAgICAgfX08L21hdC1pY29uPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuZnVsbC13aWR0aCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybVRleHRQYXNzd29yZENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMaWJGb3JtVGV4dFBhc3N3b3JkQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWJGb3JtVGV4dFBhc3N3b3JkQ29tcG9uZW50IGV4dGVuZHMgRm9ybUJhc2U8c3RyaW5nPlxyXG4gIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIG1heGxlbmd0aDogbnVtYmVyO1xyXG5cclxuICBnZXQgaW5wdXRUeXBlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGlkZVBhc3N3b3JkID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0JztcclxuICB9XHJcblxyXG4gIGhpZGVQYXNzd29yZCA9IHRydWU7XHJcblxyXG4gIHRvZ2dsZUhpZGUoKSB7XHJcbiAgICB0aGlzLmhpZGVQYXNzd29yZCA9ICF0aGlzLmhpZGVQYXNzd29yZDtcclxuICB9XHJcbn1cclxuIl19