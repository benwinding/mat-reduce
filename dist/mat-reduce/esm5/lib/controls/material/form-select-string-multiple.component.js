/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
var LibFormSelectStringMultipleComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LibFormSelectStringMultipleComponent, _super);
    function LibFormSelectStringMultipleComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LibFormSelectStringMultipleComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-select-string-multiple',
                    template: "\n    <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n      <mat-select\n        [formControl]=\"this.internalControl\"\n        [placeholder]=\"placeholder\"\n        multiple\n      >\n        <mat-select-trigger>\n          <div *ngIf=\"this.internalControl.value as selected\">\n            {{ selected?.length ? selected[0] : '' }}\n            <span\n              *ngIf=\"this.internalControl.value?.length > 1\"\n              class=\"example-additional-selection\"\n            >\n              (+{{ selected.length - 1 }}\n              {{ selected?.length === 2 ? 'other' : 'others' }})\n            </span>\n          </div>\n        </mat-select-trigger>\n        <mat-option *ngFor=\"let selection of selections\" [value]=\"selection\">\n          {{ selection }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormSelectStringMultipleComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormSelectStringMultipleComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .full-width {\n        width: 100%;\n        padding-bottom: 15px;\n      }\n    "]
                }] }
    ];
    LibFormSelectStringMultipleComponent.propDecorators = {
        selections: [{ type: Input }]
    };
    return LibFormSelectStringMultipleComponent;
}(FormBase));
export { LibFormSelectStringMultipleComponent };
if (false) {
    /** @type {?} */
    LibFormSelectStringMultipleComponent.prototype.selections;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1zZWxlY3Qtc3RyaW5nLW11bHRpcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC1yZWR1Y2UvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvbWF0ZXJpYWwvZm9ybS1zZWxlY3Qtc3RyaW5nLW11bHRpcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5QztJQWlEMEQsZ0VBQWtCO0lBakQ1RTs7SUFvREEsQ0FBQzs7Z0JBcERBLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsUUFBUSxFQUFFLHEyQkF3QlQ7b0JBU0QsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLG9DQUFvQyxFQUFwQyxDQUFvQyxFQUFDOzRCQUNuRSxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsb0NBQW9DLEVBQXBDLENBQW9DLEVBQUM7NEJBQ25FLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOzZCQWxCQywyRkFLQztpQkFjSjs7OzZCQUVFLEtBQUs7O0lBRVIsMkNBQUM7Q0FBQSxBQXBERCxDQWlEMEQsUUFBUSxHQUdqRTtTQUhZLG9DQUFvQzs7O0lBQy9DLDBEQUNxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBGb3JtQmFzZSB9IGZyb20gJy4uL2Zvcm0tYmFzZS1jbGFzcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdmb3JtLXNlbGVjdC1zdHJpbmctbXVsdGlwbGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bWF0LWZvcm0tZmllbGQgW2FwcGVhcmFuY2VdPVwiYXBwZWFyYW5jZVwiIGNsYXNzPVwiZnVsbC13aWR0aFwiPlxyXG4gICAgICA8bWF0LXNlbGVjdFxyXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJ0aGlzLmludGVybmFsQ29udHJvbFwiXHJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgICBtdWx0aXBsZVxyXG4gICAgICA+XHJcbiAgICAgICAgPG1hdC1zZWxlY3QtdHJpZ2dlcj5cclxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJ0aGlzLmludGVybmFsQ29udHJvbC52YWx1ZSBhcyBzZWxlY3RlZFwiPlxyXG4gICAgICAgICAgICB7eyBzZWxlY3RlZD8ubGVuZ3RoID8gc2VsZWN0ZWRbMF0gOiAnJyB9fVxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICpuZ0lmPVwidGhpcy5pbnRlcm5hbENvbnRyb2wudmFsdWU/Lmxlbmd0aCA+IDFcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1hZGRpdGlvbmFsLXNlbGVjdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAoK3t7IHNlbGVjdGVkLmxlbmd0aCAtIDEgfX1cclxuICAgICAgICAgICAgICB7eyBzZWxlY3RlZD8ubGVuZ3RoID09PSAyID8gJ290aGVyJyA6ICdvdGhlcnMnIH19KVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21hdC1zZWxlY3QtdHJpZ2dlcj5cclxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc2VsZWN0aW9uIG9mIHNlbGVjdGlvbnNcIiBbdmFsdWVdPVwic2VsZWN0aW9uXCI+XHJcbiAgICAgICAgICB7eyBzZWxlY3Rpb24gfX1cclxuICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmZ1bGwtd2lkdGgge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExpYkZvcm1TZWxlY3RTdHJpbmdNdWx0aXBsZUNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMaWJGb3JtU2VsZWN0U3RyaW5nTXVsdGlwbGVDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpYkZvcm1TZWxlY3RTdHJpbmdNdWx0aXBsZUNvbXBvbmVudCBleHRlbmRzIEZvcm1CYXNlPHN0cmluZ1tdPiB7XHJcbiAgQElucHV0KClcclxuICBzZWxlY3Rpb25zOiBzdHJpbmdbXTtcclxufVxyXG4iXX0=