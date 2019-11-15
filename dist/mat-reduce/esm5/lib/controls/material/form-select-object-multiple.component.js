/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
    var json1;
    /** @type {?} */
    var json2;
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
var LibFormSelectObjectMultipleComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LibFormSelectObjectMultipleComponent, _super);
    function LibFormSelectObjectMultipleComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.compareObject = compareObject;
        return _this;
    }
    LibFormSelectObjectMultipleComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-select-object-multiple',
                    template: "\n    <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n      <mat-select\n        [formControl]=\"this.internalControl\"\n        [placeholder]=\"placeholder\"\n        [compareWith]=\"compareObject\"\n        multiple\n      >\n        <mat-select-trigger>\n          <div *ngIf=\"this.internalControl.value as selected\">\n            {{ selected?.length ? selected[0][selectionKey] : '' }}\n            <span\n              *ngIf=\"this.internalControl.value?.length > 1\"\n              class=\"example-additional-selection\"\n            >\n              (+{{ selected.length - 1 }}\n              {{ selected?.length === 2 ? 'other' : 'others' }})\n            </span>\n          </div>\n        </mat-select-trigger>\n        <mat-option\n          *ngFor=\"let selectionObject of selectionObjects\"\n          [value]=\"selectionObject\"\n        >\n          {{ selectionObject[selectionKey] }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormSelectObjectMultipleComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormSelectObjectMultipleComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .full-width {\n        width: 100%;\n        padding-bottom: 15px;\n      }\n    "]
                }] }
    ];
    LibFormSelectObjectMultipleComponent.propDecorators = {
        selectionObjects: [{ type: Input }],
        selectionKey: [{ type: Input }]
    };
    return LibFormSelectObjectMultipleComponent;
}(FormBase));
export { LibFormSelectObjectMultipleComponent };
if (false) {
    /** @type {?} */
    LibFormSelectObjectMultipleComponent.prototype.selectionObjects;
    /** @type {?} */
    LibFormSelectObjectMultipleComponent.prototype.selectionKey;
    /** @type {?} */
    LibFormSelectObjectMultipleComponent.prototype.compareObject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1zZWxlY3Qtb2JqZWN0LW11bHRpcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC1yZWR1Y2UvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvbWF0ZXJpYWwvZm9ybS1zZWxlY3Qtb2JqZWN0LW11bHRpcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7O0FBRTlDLFNBQVMsYUFBYSxDQUFDLEVBQU0sRUFBRSxFQUFNO0lBQ25DLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDZCxPQUFPLEtBQUssQ0FBQztLQUNkOztRQUNHLEtBQUs7O1FBQUUsS0FBSztJQUNoQixJQUFJO1FBQ0YsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0IsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDNUI7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCxJQUFJLEtBQUssS0FBSyxLQUFLLEVBQUU7UUFDbkIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVEO0lBcUQwRCxnRUFBZ0I7SUFyRDFFO1FBQUEscUVBNERDO1FBREMsbUJBQWEsR0FBRyxhQUFhLENBQUM7O0lBQ2hDLENBQUM7O2dCQTVEQSxTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLFFBQVEsRUFBRSxrK0JBNEJUO29CQVNELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSxvQ0FBb0MsRUFBcEMsQ0FBb0MsRUFBQzs0QkFDbkUsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLG9DQUFvQyxFQUFwQyxDQUFvQyxFQUFDOzRCQUNuRSxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs2QkFsQkMsMkZBS0M7aUJBY0o7OzttQ0FFRSxLQUFLOytCQUVMLEtBQUs7O0lBSVIsMkNBQUM7Q0FBQSxBQTVERCxDQXFEMEQsUUFBUSxHQU9qRTtTQVBZLG9DQUFvQzs7O0lBQy9DLGdFQUMyQjs7SUFDM0IsNERBQ3FCOztJQUVyQiw2REFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRm9ybUJhc2UgfSBmcm9tICcuLi9mb3JtLWJhc2UtY2xhc3MnO1xyXG5cclxuZnVuY3Rpb24gY29tcGFyZU9iamVjdChsMToge30sIGwyOiB7fSkge1xyXG4gIGlmICghbDEgfHwgIWwyKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGxldCBqc29uMSwganNvbjI7XHJcbiAgdHJ5IHtcclxuICAgIGpzb24xID0gSlNPTi5zdHJpbmdpZnkobDEpO1xyXG4gICAganNvbjIgPSBKU09OLnN0cmluZ2lmeShsMik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaWYgKGpzb24xICE9PSBqc29uMikge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZm9ybS1zZWxlY3Qtb2JqZWN0LW11bHRpcGxlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIFthcHBlYXJhbmNlXT1cImFwcGVhcmFuY2VcIiBjbGFzcz1cImZ1bGwtd2lkdGhcIj5cclxuICAgICAgPG1hdC1zZWxlY3RcclxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwidGhpcy5pbnRlcm5hbENvbnRyb2xcIlxyXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgICAgW2NvbXBhcmVXaXRoXT1cImNvbXBhcmVPYmplY3RcIlxyXG4gICAgICAgIG11bHRpcGxlXHJcbiAgICAgID5cclxuICAgICAgICA8bWF0LXNlbGVjdC10cmlnZ2VyPlxyXG4gICAgICAgICAgPGRpdiAqbmdJZj1cInRoaXMuaW50ZXJuYWxDb250cm9sLnZhbHVlIGFzIHNlbGVjdGVkXCI+XHJcbiAgICAgICAgICAgIHt7IHNlbGVjdGVkPy5sZW5ndGggPyBzZWxlY3RlZFswXVtzZWxlY3Rpb25LZXldIDogJycgfX1cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAqbmdJZj1cInRoaXMuaW50ZXJuYWxDb250cm9sLnZhbHVlPy5sZW5ndGggPiAxXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtYWRkaXRpb25hbC1zZWxlY3Rpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgKCt7eyBzZWxlY3RlZC5sZW5ndGggLSAxIH19XHJcbiAgICAgICAgICAgICAge3sgc2VsZWN0ZWQ/Lmxlbmd0aCA9PT0gMiA/ICdvdGhlcicgOiAnb3RoZXJzJyB9fSlcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYXQtc2VsZWN0LXRyaWdnZXI+XHJcbiAgICAgICAgPG1hdC1vcHRpb25cclxuICAgICAgICAgICpuZ0Zvcj1cImxldCBzZWxlY3Rpb25PYmplY3Qgb2Ygc2VsZWN0aW9uT2JqZWN0c1wiXHJcbiAgICAgICAgICBbdmFsdWVdPVwic2VsZWN0aW9uT2JqZWN0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7eyBzZWxlY3Rpb25PYmplY3Rbc2VsZWN0aW9uS2V5XSB9fVxyXG4gICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuZnVsbC13aWR0aCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybVNlbGVjdE9iamVjdE11bHRpcGxlQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExpYkZvcm1TZWxlY3RPYmplY3RNdWx0aXBsZUNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGliRm9ybVNlbGVjdE9iamVjdE11bHRpcGxlQ29tcG9uZW50IGV4dGVuZHMgRm9ybUJhc2U8T2JqZWN0PiB7XHJcbiAgQElucHV0KClcclxuICBzZWxlY3Rpb25PYmplY3RzOiBPYmplY3RbXTtcclxuICBASW5wdXQoKVxyXG4gIHNlbGVjdGlvbktleTogc3RyaW5nO1xyXG5cclxuICBjb21wYXJlT2JqZWN0ID0gY29tcGFyZU9iamVjdDtcclxufVxyXG4iXX0=