/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { takeUntil, debounceTime, tap, delay } from 'rxjs/operators';
import { FormBase } from '../form-base-class';
var LibFormToggleReversedComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LibFormToggleReversedComponent, _super);
    function LibFormToggleReversedComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.yes = 'Yes';
        _this.no = 'No';
        _this.reversedControl = new FormControl();
        return _this;
    }
    /**
     * @return {?}
     */
    LibFormToggleReversedComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.reversedControl.valueChanges
            .pipe(takeUntil(this._destroyed), debounceTime(100))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (_this.lockControl) {
                return;
            }
            _this.value = !value;
            // console.log('reversedControl.valueChanges', { thisValue: this.value });
        }));
        this.internalControl.valueChanges
            .pipe(takeUntil(this._destroyed), debounceTime(100), tap((/**
         * @return {?}
         */
        function () { return (_this.lockControl = true); })), delay(100), tap((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return _this.reversedControl.setValue(!value); })), delay(100), tap((/**
         * @return {?}
         */
        function () { return (_this.lockControl = false); })))
            .subscribe((/**
         * @return {?}
         */
        function () {
            // console.log('reversedControl.valueChanges', { thisValue: this.value });
        }));
        this.internalControl.statusChanges
            .pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.disabled) {
                _this.reversedControl.disable();
            }
            else {
                _this.reversedControl.enable();
            }
        }));
    };
    LibFormToggleReversedComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-toggle-reversed',
                    template: "\n    <div class=\"full-width\">\n      <mat-slide-toggle\n        [formControl]=\"reversedControl\"\n        [name]=\"autoCompleteObscureName\"\n        autocomplete=\"dontcompleteme\"\n      >\n        <div class=\"flex-center\">\n          <ng-content></ng-content>\n          <span>{{ placeholder }}</span>\n          <span>({{ value ? yes : no }})</span>\n        </div>\n      </mat-slide-toggle>\n    </div>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormToggleReversedComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormToggleReversedComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      span {\n        margin: 2px;\n      }\n      .full-width {\n        width: 100%;\n        padding-bottom: 15px;\n      }\n      .flex-center {\n        display: flex;\n        align-items: center;\n      }\n    "]
                }] }
    ];
    LibFormToggleReversedComponent.propDecorators = {
        yes: [{ type: Input }],
        no: [{ type: Input }]
    };
    return LibFormToggleReversedComponent;
}(FormBase));
export { LibFormToggleReversedComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS10b2dnbGUtcmV2ZXJzZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXJlZHVjZS8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9tYXRlcmlhbC9mb3JtLXRvZ2dsZS1yZXZlcnNlZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlDO0lBOENvRCwwREFBaUI7SUE5Q3JFO1FBQUEscUVBK0ZDO1FBOUNDLFNBQUcsR0FBRyxLQUFLLENBQUM7UUFFWixRQUFFLEdBQUcsSUFBSSxDQUFDO1FBRVYscUJBQWUsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDOztJQTBDdEMsQ0FBQzs7OztJQXRDQyxpREFBUTs7O0lBQVI7UUFBQSxpQkFxQ0M7UUFwQ0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZO2FBQzlCLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUMxQixZQUFZLENBQUMsR0FBRyxDQUFDLENBQ2xCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUEsS0FBSztZQUNkLElBQUksS0FBSSxDQUFDLFdBQVcsRUFBRTtnQkFDcEIsT0FBTzthQUNSO1lBQ0QsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNwQiwwRUFBMEU7UUFDNUUsQ0FBQyxFQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVk7YUFDOUIsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQzFCLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsR0FBRzs7O1FBQUMsY0FBTSxPQUFBLENBQUMsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsRUFBekIsQ0FBeUIsRUFBQyxFQUNwQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQ1YsR0FBRzs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsRUFBQyxFQUNuRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQ1YsR0FBRzs7O1FBQUMsY0FBTSxPQUFBLENBQUMsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsRUFBMUIsQ0FBMEIsRUFBQyxDQUN0QzthQUNBLFNBQVM7OztRQUFDO1lBQ1QsMEVBQTBFO1FBQzVFLENBQUMsRUFBQyxDQUFDO1FBRUwsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhO2FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ2hDLFNBQVM7OztRQUFDO1lBQ1QsSUFBSSxLQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixLQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2hDO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDL0I7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7O2dCQTlGRixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSxvYUFjVDtvQkFnQkQsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLDhCQUE4QixFQUE5QixDQUE4QixFQUFDOzRCQUM3RCxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsOEJBQThCLEVBQTlCLENBQThCLEVBQUM7NEJBQzdELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOzZCQXpCQyw2TkFZQztpQkFjSjs7O3NCQUdFLEtBQUs7cUJBRUwsS0FBSzs7SUE2Q1IscUNBQUM7Q0FBQSxBQS9GRCxDQThDb0QsUUFBUSxHQWlEM0Q7U0FqRFksOEJBQThCOzs7SUFFekMsNkNBQ1k7O0lBQ1osNENBQ1U7O0lBRVYseURBQW9DOzs7OztJQUVwQyxxREFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgTkdfVkFMVUVfQUNDRVNTT1IsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwsIGRlYm91bmNlVGltZSwgdGFwLCBkZWxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgRm9ybUJhc2UgfSBmcm9tICcuLi9mb3JtLWJhc2UtY2xhc3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZm9ybS10b2dnbGUtcmV2ZXJzZWQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiZnVsbC13aWR0aFwiPlxyXG4gICAgICA8bWF0LXNsaWRlLXRvZ2dsZVxyXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJyZXZlcnNlZENvbnRyb2xcIlxyXG4gICAgICAgIFtuYW1lXT1cImF1dG9Db21wbGV0ZU9ic2N1cmVOYW1lXCJcclxuICAgICAgICBhdXRvY29tcGxldGU9XCJkb250Y29tcGxldGVtZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgICAgIDxzcGFuPnt7IHBsYWNlaG9sZGVyIH19PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+KHt7IHZhbHVlID8geWVzIDogbm8gfX0pPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgfVxyXG4gICAgICAuZnVsbC13aWR0aCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmZsZXgtY2VudGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybVRvZ2dsZVJldmVyc2VkQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExpYkZvcm1Ub2dnbGVSZXZlcnNlZENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGliRm9ybVRvZ2dsZVJldmVyc2VkQ29tcG9uZW50IGV4dGVuZHMgRm9ybUJhc2U8Ym9vbGVhbj5cclxuICBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KClcclxuICB5ZXMgPSAnWWVzJztcclxuICBASW5wdXQoKVxyXG4gIG5vID0gJ05vJztcclxuXHJcbiAgcmV2ZXJzZWRDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XHJcblxyXG4gIHByaXZhdGUgbG9ja0NvbnRyb2w6IGJvb2xlYW47XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5yZXZlcnNlZENvbnRyb2wudmFsdWVDaGFuZ2VzXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpLFxyXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9ja0NvbnRyb2wpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9ICF2YWx1ZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmV2ZXJzZWRDb250cm9sLnZhbHVlQ2hhbmdlcycsIHsgdGhpc1ZhbHVlOiB0aGlzLnZhbHVlIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLmludGVybmFsQ29udHJvbC52YWx1ZUNoYW5nZXNcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCksXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXHJcbiAgICAgICAgdGFwKCgpID0+ICh0aGlzLmxvY2tDb250cm9sID0gdHJ1ZSkpLFxyXG4gICAgICAgIGRlbGF5KDEwMCksXHJcbiAgICAgICAgdGFwKHZhbHVlID0+IHRoaXMucmV2ZXJzZWRDb250cm9sLnNldFZhbHVlKCF2YWx1ZSkpLFxyXG4gICAgICAgIGRlbGF5KDEwMCksXHJcbiAgICAgICAgdGFwKCgpID0+ICh0aGlzLmxvY2tDb250cm9sID0gZmFsc2UpKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXZlcnNlZENvbnRyb2wudmFsdWVDaGFuZ2VzJywgeyB0aGlzVmFsdWU6IHRoaXMudmFsdWUgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW50ZXJuYWxDb250cm9sLnN0YXR1c0NoYW5nZXNcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICB0aGlzLnJldmVyc2VkQ29udHJvbC5kaXNhYmxlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmV2ZXJzZWRDb250cm9sLmVuYWJsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==