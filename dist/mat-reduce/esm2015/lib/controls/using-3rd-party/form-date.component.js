/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
import { SimpleLog } from '../../utils/logger';
export class LibFormDateComponent extends FormBase {
    constructor() {
        super(...arguments);
        this.placeholder = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.logger = new SimpleLog(this.debug);
    }
    /**
     * @return {?}
     */
    get minDate() {
        if (this.AfterDate) {
            return this.AfterDate;
        }
        if (this.isAfterToday) {
            return new Date();
        }
        return null;
    }
    /**
     * @return {?}
     */
    CheckValueIsValid() {
        /** @type {?} */
        const formValue = this.value;
        /** @type {?} */
        let formDate = formValue;
        if (typeof formValue === 'string' || !formValue) {
            formDate = new Date(formValue);
        }
        this.logger.log('form-date: CheckValueIsValid()', {
            formValue,
            formDate,
            isAfterToday: this.isAfterToday,
            isAfterDate: this.AfterDate
        });
        if (this.isAfterToday) {
            /** @type {?} */
            const todaysDate = new Date();
            /** @type {?} */
            const isAfterToday = this.isNewDateAfterThis(formDate, todaysDate);
            if (!isAfterToday) {
                return 'Date must be after today\'s date';
            }
        }
        if (this.AfterDate) {
            /** @type {?} */
            const isAfterDate = this.isNewDateAfterThis(formDate, this.AfterDate);
            if (!isAfterDate) {
                return 'Date must be after date: ' + this.AfterDate.toDateString();
            }
        }
        return null;
    }
    /**
     * @private
     * @param {?} formDate
     * @param {?} afterDate
     * @return {?}
     */
    isNewDateAfterThis(formDate, afterDate) {
        this.logger.log('form-date: isNewDateAfterThis()', {
            formDate,
            afterDate
        });
        if (!formDate || typeof formDate.getTime !== 'function') {
            console.error('the form control value is not a valid Date', { formDate });
            throw new Error();
        }
        if (!afterDate || typeof afterDate.getTime !== 'function') {
            console.error('AfterDate is not a valid Date', { afterDate });
            throw new Error();
        }
        /** @type {?} */
        const afterSeconds = afterDate.getTime();
        /** @type {?} */
        const formSeconds = formDate.getTime();
        /** @type {?} */
        const isAfter = afterSeconds < formSeconds;
        this.logger.log('form-date: isNewDateAfterThis()', {
            afterSeconds,
            formSeconds,
            isAfter
        });
        return isAfter;
    }
}
LibFormDateComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-date',
                template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <input
        matInput
        (focus)="picker.open()"
        [min]="minDate"
        [matDatepicker]="picker"
        [disabled]="disabled"
        [placeholder]="placeholder"
        [(ngModel)]="value"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
      />
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormDateComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormDateComponent)),
                        multi: true
                    }
                ]
            }] }
];
LibFormDateComponent.propDecorators = {
    placeholder: [{ type: Input }],
    isAfterToday: [{ type: Input }],
    AfterDate: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LibFormDateComponent.prototype.placeholder;
    /** @type {?} */
    LibFormDateComponent.prototype.isAfterToday;
    /** @type {?} */
    LibFormDateComponent.prototype.AfterDate;
    /** @type {?} */
    LibFormDateComponent.prototype.logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1kYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC1yZWR1Y2UvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvdXNpbmctM3JkLXBhcnR5L2Zvcm0tZGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQW1DL0MsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFFBQWM7SUFqQ3hEOztRQW1DRSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztJQXlFbkIsQ0FBQzs7OztJQWpFQyxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDO1NBQ25CO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsaUJBQWlCOztjQUNULFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSzs7WUFDeEIsUUFBUSxHQUFHLFNBQVM7UUFDeEIsSUFBSSxPQUFPLFNBQVMsS0FBSyxRQUFRLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDL0MsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEVBQUU7WUFDaEQsU0FBUztZQUNULFFBQVE7WUFDUixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTs7a0JBQ2YsVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFOztrQkFDdkIsWUFBWSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO1lBQ2xFLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ2pCLE9BQU8sa0NBQWtDLENBQUM7YUFDM0M7U0FDRjtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTs7a0JBQ1osV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNyRSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNoQixPQUFPLDJCQUEyQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDcEU7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7OztJQUVPLGtCQUFrQixDQUFDLFFBQWMsRUFBRSxTQUFlO1FBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxFQUFFO1lBQ2pELFFBQVE7WUFDUixTQUFTO1NBQ1YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLFFBQVEsQ0FBQyxPQUFPLEtBQUssVUFBVSxFQUFFO1lBQ3ZELE9BQU8sQ0FBQyxLQUFLLENBQUMsNENBQTRDLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzFFLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksQ0FBQyxTQUFTLElBQUksT0FBTyxTQUFTLENBQUMsT0FBTyxLQUFLLFVBQVUsRUFBRTtZQUN6RCxPQUFPLENBQUMsS0FBSyxDQUFDLCtCQUErQixFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUM5RCxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7U0FDbkI7O2NBQ0ssWUFBWSxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUU7O2NBQ2xDLFdBQVcsR0FBRyxRQUFRLENBQUMsT0FBTyxFQUFFOztjQUNoQyxPQUFPLEdBQUcsWUFBWSxHQUFHLFdBQVc7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUU7WUFDakQsWUFBWTtZQUNaLFdBQVc7WUFDWCxPQUFPO1NBQ1IsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7O1lBM0dGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztHQWdCVDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsRUFBQzt3QkFDbkQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGFBQWE7d0JBQ3RCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLEVBQUM7d0JBQ25ELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0Y7OzswQkFFRSxLQUFLOzJCQUVMLEtBQUs7d0JBRUwsS0FBSzs7OztJQUpOLDJDQUNpQjs7SUFDakIsNENBQ3NCOztJQUN0Qix5Q0FDZ0I7O0lBRWhCLHNDQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRm9ybUJhc2UgfSBmcm9tICcuLi9mb3JtLWJhc2UtY2xhc3MnO1xyXG5pbXBvcnQgeyBTaW1wbGVMb2cgfSBmcm9tICcuLi8uLi91dGlscy9sb2dnZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZm9ybS1kYXRlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIFthcHBlYXJhbmNlXT1cImFwcGVhcmFuY2VcIiBjbGFzcz1cImZ1bGwtd2lkdGhcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgbWF0SW5wdXRcclxuICAgICAgICAoZm9jdXMpPVwicGlja2VyLm9wZW4oKVwiXHJcbiAgICAgICAgW21pbl09XCJtaW5EYXRlXCJcclxuICAgICAgICBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIlxyXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcclxuICAgICAgICBbbmFtZV09XCJhdXRvQ29tcGxldGVPYnNjdXJlTmFtZVwiXHJcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwiZG9udGNvbXBsZXRlbWVcIlxyXG4gICAgICAvPlxyXG4gICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxyXG4gICAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybURhdGVDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybURhdGVDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpYkZvcm1EYXRlQ29tcG9uZW50IGV4dGVuZHMgRm9ybUJhc2U8RGF0ZT4gaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgcGxhY2Vob2xkZXIgPSAnJztcclxuICBASW5wdXQoKVxyXG4gIGlzQWZ0ZXJUb2RheTogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIEFmdGVyRGF0ZTogRGF0ZTtcclxuXHJcbiAgbG9nZ2VyOiBTaW1wbGVMb2c7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5sb2dnZXIgPSBuZXcgU2ltcGxlTG9nKHRoaXMuZGVidWcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1pbkRhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5BZnRlckRhdGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuQWZ0ZXJEYXRlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaXNBZnRlclRvZGF5KSB7XHJcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBDaGVja1ZhbHVlSXNWYWxpZCgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgZm9ybVZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgIGxldCBmb3JtRGF0ZSA9IGZvcm1WYWx1ZTtcclxuICAgIGlmICh0eXBlb2YgZm9ybVZhbHVlID09PSAnc3RyaW5nJyB8fCAhZm9ybVZhbHVlKSB7XHJcbiAgICAgIGZvcm1EYXRlID0gbmV3IERhdGUoZm9ybVZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMubG9nZ2VyLmxvZygnZm9ybS1kYXRlOiBDaGVja1ZhbHVlSXNWYWxpZCgpJywge1xyXG4gICAgICBmb3JtVmFsdWUsXHJcbiAgICAgIGZvcm1EYXRlLFxyXG4gICAgICBpc0FmdGVyVG9kYXk6IHRoaXMuaXNBZnRlclRvZGF5LFxyXG4gICAgICBpc0FmdGVyRGF0ZTogdGhpcy5BZnRlckRhdGVcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMuaXNBZnRlclRvZGF5KSB7XHJcbiAgICAgIGNvbnN0IHRvZGF5c0RhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBjb25zdCBpc0FmdGVyVG9kYXkgPSB0aGlzLmlzTmV3RGF0ZUFmdGVyVGhpcyhmb3JtRGF0ZSwgdG9kYXlzRGF0ZSk7XHJcbiAgICAgIGlmICghaXNBZnRlclRvZGF5KSB7XHJcbiAgICAgICAgcmV0dXJuICdEYXRlIG11c3QgYmUgYWZ0ZXIgdG9kYXlcXCdzIGRhdGUnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5BZnRlckRhdGUpIHtcclxuICAgICAgY29uc3QgaXNBZnRlckRhdGUgPSB0aGlzLmlzTmV3RGF0ZUFmdGVyVGhpcyhmb3JtRGF0ZSwgdGhpcy5BZnRlckRhdGUpO1xyXG4gICAgICBpZiAoIWlzQWZ0ZXJEYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuICdEYXRlIG11c3QgYmUgYWZ0ZXIgZGF0ZTogJyArIHRoaXMuQWZ0ZXJEYXRlLnRvRGF0ZVN0cmluZygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNOZXdEYXRlQWZ0ZXJUaGlzKGZvcm1EYXRlOiBEYXRlLCBhZnRlckRhdGU6IERhdGUpIHtcclxuICAgIHRoaXMubG9nZ2VyLmxvZygnZm9ybS1kYXRlOiBpc05ld0RhdGVBZnRlclRoaXMoKScsIHtcclxuICAgICAgZm9ybURhdGUsXHJcbiAgICAgIGFmdGVyRGF0ZVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIWZvcm1EYXRlIHx8IHR5cGVvZiBmb3JtRGF0ZS5nZXRUaW1lICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3RoZSBmb3JtIGNvbnRyb2wgdmFsdWUgaXMgbm90IGEgdmFsaWQgRGF0ZScsIHsgZm9ybURhdGUgfSk7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFhZnRlckRhdGUgfHwgdHlwZW9mIGFmdGVyRGF0ZS5nZXRUaW1lICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FmdGVyRGF0ZSBpcyBub3QgYSB2YWxpZCBEYXRlJywgeyBhZnRlckRhdGUgfSk7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYWZ0ZXJTZWNvbmRzID0gYWZ0ZXJEYXRlLmdldFRpbWUoKTtcclxuICAgIGNvbnN0IGZvcm1TZWNvbmRzID0gZm9ybURhdGUuZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgaXNBZnRlciA9IGFmdGVyU2Vjb25kcyA8IGZvcm1TZWNvbmRzO1xyXG4gICAgdGhpcy5sb2dnZXIubG9nKCdmb3JtLWRhdGU6IGlzTmV3RGF0ZUFmdGVyVGhpcygpJywge1xyXG4gICAgICBhZnRlclNlY29uZHMsXHJcbiAgICAgIGZvcm1TZWNvbmRzLFxyXG4gICAgICBpc0FmdGVyXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBpc0FmdGVyO1xyXG4gIH1cclxufVxyXG4iXX0=