/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { takeUntil, debounceTime, tap, delay } from 'rxjs/operators';
import { FormBase } from '../form-base-class';
export class LibFormToggleReversedComponent extends FormBase {
    constructor() {
        super(...arguments);
        this.yes = 'Yes';
        this.no = 'No';
        this.reversedControl = new FormControl();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.reversedControl.valueChanges
            .pipe(takeUntil(this._destroyed), debounceTime(100))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            if (this.lockControl) {
                return;
            }
            this.value = !value;
            // console.log('reversedControl.valueChanges', { thisValue: this.value });
        }));
        this.internalControl.valueChanges
            .pipe(takeUntil(this._destroyed), debounceTime(100), tap((/**
         * @return {?}
         */
        () => (this.lockControl = true))), delay(100), tap((/**
         * @param {?} value
         * @return {?}
         */
        value => this.reversedControl.setValue(!value))), delay(100), tap((/**
         * @return {?}
         */
        () => (this.lockControl = false))))
            .subscribe((/**
         * @return {?}
         */
        () => {
            // console.log('reversedControl.valueChanges', { thisValue: this.value });
        }));
        this.internalControl.statusChanges
            .pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        () => {
            if (this.disabled) {
                this.reversedControl.disable();
            }
            else {
                this.reversedControl.enable();
            }
        }));
    }
}
LibFormToggleReversedComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-toggle-reversed',
                template: `
    <div class="full-width">
      <mat-slide-toggle
        [formControl]="reversedControl"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
      >
        <div class="flex-center">
          <ng-content></ng-content>
          <span>{{ placeholder }}</span>
          <span>({{ value ? yes : no }})</span>
        </div>
      </mat-slide-toggle>
    </div>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormToggleReversedComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormToggleReversedComponent)),
                        multi: true
                    }
                ],
                styles: [`
      span {
        margin: 2px;
      }
      .full-width {
        width: 100%;
        padding-bottom: 15px;
      }
      .flex-center {
        display: flex;
        align-items: center;
      }
    `]
            }] }
];
LibFormToggleReversedComponent.propDecorators = {
    yes: [{ type: Input }],
    no: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LibFormToggleReversedComponent.prototype.yes;
    /** @type {?} */
    LibFormToggleReversedComponent.prototype.no;
    /** @type {?} */
    LibFormToggleReversedComponent.prototype.reversedControl;
    /**
     * @type {?}
     * @private
     */
    LibFormToggleReversedComponent.prototype.lockControl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS10b2dnbGUtcmV2ZXJzZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXJlZHVjZS8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9tYXRlcmlhbC9mb3JtLXRvZ2dsZS1yZXZlcnNlZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFnRDlDLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxRQUFpQjtJQTlDckU7O1FBaURFLFFBQUcsR0FBRyxLQUFLLENBQUM7UUFFWixPQUFFLEdBQUcsSUFBSSxDQUFDO1FBRVYsb0JBQWUsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0lBMEN0QyxDQUFDOzs7O0lBdENDLFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVk7YUFDOUIsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQzFCLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FDbEI7YUFDQSxTQUFTOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3BCLDBFQUEwRTtRQUM1RSxDQUFDLEVBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWTthQUM5QixJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFDMUIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixHQUFHOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEVBQUMsRUFDcEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUNWLEdBQUc7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUMsRUFDbkQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUNWLEdBQUc7OztRQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsRUFBQyxDQUN0QzthQUNBLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNkLDBFQUEwRTtRQUM1RSxDQUFDLEVBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYTthQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNoQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDaEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUMvQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7O1lBOUZGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7OztHQWNUO2dCQWdCRCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyw4QkFBOEIsRUFBQzt3QkFDN0QsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGFBQWE7d0JBQ3RCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsOEJBQThCLEVBQUM7d0JBQzdELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO3lCQXpCQzs7Ozs7Ozs7Ozs7O0tBWUM7YUFjSjs7O2tCQUdFLEtBQUs7aUJBRUwsS0FBSzs7OztJQUZOLDZDQUNZOztJQUNaLDRDQUNVOztJQUVWLHlEQUFvQzs7Ozs7SUFFcEMscURBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIE5HX1ZBTFVFX0FDQ0VTU09SLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgdGFrZVVudGlsLCBkZWJvdW5jZVRpbWUsIHRhcCwgZGVsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEZvcm1CYXNlIH0gZnJvbSAnLi4vZm9ybS1iYXNlLWNsYXNzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2Zvcm0tdG9nZ2xlLXJldmVyc2VkJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImZ1bGwtd2lkdGhcIj5cclxuICAgICAgPG1hdC1zbGlkZS10b2dnbGVcclxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwicmV2ZXJzZWRDb250cm9sXCJcclxuICAgICAgICBbbmFtZV09XCJhdXRvQ29tcGxldGVPYnNjdXJlTmFtZVwiXHJcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwiZG9udGNvbXBsZXRlbWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgICA8c3Bhbj57eyBwbGFjZWhvbGRlciB9fTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPih7eyB2YWx1ZSA/IHllcyA6IG5vIH19KTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICAgIH1cclxuICAgICAgLmZ1bGwtd2lkdGgge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5mbGV4LWNlbnRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExpYkZvcm1Ub2dnbGVSZXZlcnNlZENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMaWJGb3JtVG9nZ2xlUmV2ZXJzZWRDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpYkZvcm1Ub2dnbGVSZXZlcnNlZENvbXBvbmVudCBleHRlbmRzIEZvcm1CYXNlPGJvb2xlYW4+XHJcbiAgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgeWVzID0gJ1llcyc7XHJcbiAgQElucHV0KClcclxuICBubyA9ICdObyc7XHJcblxyXG4gIHJldmVyc2VkQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xyXG5cclxuICBwcml2YXRlIGxvY2tDb250cm9sOiBib29sZWFuO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucmV2ZXJzZWRDb250cm9sLnZhbHVlQ2hhbmdlc1xyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSxcclxuICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2tDb250cm9sKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudmFsdWUgPSAhdmFsdWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JldmVyc2VkQ29udHJvbC52YWx1ZUNoYW5nZXMnLCB7IHRoaXNWYWx1ZTogdGhpcy52YWx1ZSB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5pbnRlcm5hbENvbnRyb2wudmFsdWVDaGFuZ2VzXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpLFxyXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxyXG4gICAgICAgIHRhcCgoKSA9PiAodGhpcy5sb2NrQ29udHJvbCA9IHRydWUpKSxcclxuICAgICAgICBkZWxheSgxMDApLFxyXG4gICAgICAgIHRhcCh2YWx1ZSA9PiB0aGlzLnJldmVyc2VkQ29udHJvbC5zZXRWYWx1ZSghdmFsdWUpKSxcclxuICAgICAgICBkZWxheSgxMDApLFxyXG4gICAgICAgIHRhcCgoKSA9PiAodGhpcy5sb2NrQ29udHJvbCA9IGZhbHNlKSlcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmV2ZXJzZWRDb250cm9sLnZhbHVlQ2hhbmdlcycsIHsgdGhpc1ZhbHVlOiB0aGlzLnZhbHVlIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLmludGVybmFsQ29udHJvbC5zdGF0dXNDaGFuZ2VzXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgdGhpcy5yZXZlcnNlZENvbnRyb2wuZGlzYWJsZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJldmVyc2VkQ29udHJvbC5lbmFibGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=