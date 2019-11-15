/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
export class LibFormTextIconsComponent extends FormBase {
    constructor() {
        super(...arguments);
        this.clearable = true;
        this.prefixIcon = 'search';
    }
    /**
     * @return {?}
     */
    onClickClear() {
        this.internalControl.reset();
    }
}
LibFormTextIconsComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-text-icons',
                template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <mat-icon matPrefix class="has-pointer" *ngIf="prefixIcon">
        {{ prefixIcon }}
      </mat-icon>
      <input
        matInput
        [formControl]="internalControl"
        [maxlength]="maxlength"
        [placeholder]="placeholder"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
      />
      <mat-icon
        matSuffix
        class="has-pointer"
        *ngIf="!disabled && clearable"
        (click)="onClickClear()"
      >
        clear
      </mat-icon>
    </mat-form-field>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTextIconsComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormTextIconsComponent)),
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
LibFormTextIconsComponent.propDecorators = {
    maxlength: [{ type: Input }],
    clearable: [{ type: Input }],
    prefixIcon: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LibFormTextIconsComponent.prototype.maxlength;
    /** @type {?} */
    LibFormTextIconsComponent.prototype.clearable;
    /** @type {?} */
    LibFormTextIconsComponent.prototype.prefixIcon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS10ZXh0LWljb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC1yZWR1Y2UvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvbWF0ZXJpYWwvZm9ybS10ZXh0LWljb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFnRDlDLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxRQUFnQjtJQTlDL0Q7O1FBa0RFLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFFakIsZUFBVSxHQUFHLFFBQVEsQ0FBQztJQUt4QixDQUFDOzs7O0lBSEMsWUFBWTtRQUNWLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7O1lBeERGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JUO2dCQVFELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixFQUFDO3dCQUN4RCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyx5QkFBeUIsRUFBQzt3QkFDeEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7eUJBakJDOzs7O0tBSUM7YUFjSjs7O3dCQUVFLEtBQUs7d0JBRUwsS0FBSzt5QkFFTCxLQUFLOzs7O0lBSk4sOENBQ2tCOztJQUNsQiw4Q0FDaUI7O0lBQ2pCLCtDQUNzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZvcm1CYXNlIH0gZnJvbSAnLi4vZm9ybS1iYXNlLWNsYXNzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2Zvcm0tdGV4dC1pY29ucycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxtYXQtZm9ybS1maWVsZCBbYXBwZWFyYW5jZV09XCJhcHBlYXJhbmNlXCIgY2xhc3M9XCJmdWxsLXdpZHRoXCI+XHJcbiAgICAgIDxtYXQtaWNvbiBtYXRQcmVmaXggY2xhc3M9XCJoYXMtcG9pbnRlclwiICpuZ0lmPVwicHJlZml4SWNvblwiPlxyXG4gICAgICAgIHt7IHByZWZpeEljb24gfX1cclxuICAgICAgPC9tYXQtaWNvbj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgbWF0SW5wdXRcclxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwiaW50ZXJuYWxDb250cm9sXCJcclxuICAgICAgICBbbWF4bGVuZ3RoXT1cIm1heGxlbmd0aFwiXHJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgICBbbmFtZV09XCJhdXRvQ29tcGxldGVPYnNjdXJlTmFtZVwiXHJcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwiZG9udGNvbXBsZXRlbWVcIlxyXG4gICAgICAvPlxyXG4gICAgICA8bWF0LWljb25cclxuICAgICAgICBtYXRTdWZmaXhcclxuICAgICAgICBjbGFzcz1cImhhcy1wb2ludGVyXCJcclxuICAgICAgICAqbmdJZj1cIiFkaXNhYmxlZCAmJiBjbGVhcmFibGVcIlxyXG4gICAgICAgIChjbGljayk9XCJvbkNsaWNrQ2xlYXIoKVwiXHJcbiAgICAgID5cclxuICAgICAgICBjbGVhclxyXG4gICAgICA8L21hdC1pY29uPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuaXMtZ3JleSB7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybVRleHRJY29uc0NvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMaWJGb3JtVGV4dEljb25zQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWJGb3JtVGV4dEljb25zQ29tcG9uZW50IGV4dGVuZHMgRm9ybUJhc2U8c3RyaW5nPiB7XHJcbiAgQElucHV0KClcclxuICBtYXhsZW5ndGg6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIGNsZWFyYWJsZSA9IHRydWU7XHJcbiAgQElucHV0KClcclxuICBwcmVmaXhJY29uID0gJ3NlYXJjaCc7XHJcblxyXG4gIG9uQ2xpY2tDbGVhcigpIHtcclxuICAgIHRoaXMuaW50ZXJuYWxDb250cm9sLnJlc2V0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==