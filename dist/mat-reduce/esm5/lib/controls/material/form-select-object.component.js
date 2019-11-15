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
var LibFormSelectObjectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LibFormSelectObjectComponent, _super);
    function LibFormSelectObjectComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.compareObject = compareObject;
        return _this;
    }
    /**
     * @param {?} newVal
     * @return {?}
     */
    LibFormSelectObjectComponent.prototype.writeValue = /**
     * @param {?} newVal
     * @return {?}
     */
    function (newVal) {
        this.value = newVal || {};
    };
    LibFormSelectObjectComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-select-object',
                    template: "\n    <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n      <mat-select\n        [formControl]=\"this.internalControl\"\n        [placeholder]=\"placeholder\"\n        [compareWith]=\"compareObject\"\n      >\n        <mat-option\n          *ngFor=\"let selectionObject of selectionObjects\"\n          [value]=\"selectionObject\"\n        >\n          {{ selectionObject[selectionKey] }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormSelectObjectComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormSelectObjectComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .full-width {\n        width: 100%;\n        padding-bottom: 15px;\n      }\n    "]
                }] }
    ];
    LibFormSelectObjectComponent.propDecorators = {
        selectionObjects: [{ type: Input }],
        selectionKey: [{ type: Input }]
    };
    return LibFormSelectObjectComponent;
}(FormBase));
export { LibFormSelectObjectComponent };
if (false) {
    /** @type {?} */
    LibFormSelectObjectComponent.prototype.selectionObjects;
    /** @type {?} */
    LibFormSelectObjectComponent.prototype.selectionKey;
    /** @type {?} */
    LibFormSelectObjectComponent.prototype.compareObject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1zZWxlY3Qtb2JqZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC1yZWR1Y2UvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvbWF0ZXJpYWwvZm9ybS1zZWxlY3Qtb2JqZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7O0FBRTlDLFNBQVMsYUFBYSxDQUFDLEVBQU0sRUFBRSxFQUFNO0lBQ25DLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDZCxPQUFPLEtBQUssQ0FBQztLQUNkOztRQUNHLEtBQUs7O1FBQUUsS0FBSztJQUNoQixJQUFJO1FBQ0YsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0IsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDNUI7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCxJQUFJLEtBQUssS0FBSyxLQUFLLEVBQUU7UUFDbkIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVEO0lBd0NrRCx3REFBZ0I7SUF4Q2xFO1FBQUEscUVBbURDO1FBTEMsbUJBQWEsR0FBRyxhQUFhLENBQUM7O0lBS2hDLENBQUM7Ozs7O0lBSEMsaURBQVU7Ozs7SUFBVixVQUFXLE1BQWM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7O2dCQWxERixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxnZUFlVDtvQkFTRCxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsNEJBQTRCLEVBQTVCLENBQTRCLEVBQUM7NEJBQzNELEtBQUssRUFBRSxJQUFJO3lCQUNaO3dCQUNEOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSw0QkFBNEIsRUFBNUIsQ0FBNEIsRUFBQzs0QkFDM0QsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7NkJBbEJDLDJGQUtDO2lCQWNKOzs7bUNBRUUsS0FBSzsrQkFFTCxLQUFLOztJQVFSLG1DQUFDO0NBQUEsQUFuREQsQ0F3Q2tELFFBQVEsR0FXekQ7U0FYWSw0QkFBNEI7OztJQUN2Qyx3REFDMkI7O0lBQzNCLG9EQUNxQjs7SUFFckIscURBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZvcm1CYXNlIH0gZnJvbSAnLi4vZm9ybS1iYXNlLWNsYXNzJztcclxuXHJcbmZ1bmN0aW9uIGNvbXBhcmVPYmplY3QobDE6IHt9LCBsMjoge30pIHtcclxuICBpZiAoIWwxIHx8ICFsMikge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBsZXQganNvbjEsIGpzb24yO1xyXG4gIHRyeSB7XHJcbiAgICBqc29uMSA9IEpTT04uc3RyaW5naWZ5KGwxKTtcclxuICAgIGpzb24yID0gSlNPTi5zdHJpbmdpZnkobDIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlmIChqc29uMSAhPT0ganNvbjIpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2Zvcm0tc2VsZWN0LW9iamVjdCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxtYXQtZm9ybS1maWVsZCBbYXBwZWFyYW5jZV09XCJhcHBlYXJhbmNlXCIgY2xhc3M9XCJmdWxsLXdpZHRoXCI+XHJcbiAgICAgIDxtYXQtc2VsZWN0XHJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cInRoaXMuaW50ZXJuYWxDb250cm9sXCJcclxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIFtjb21wYXJlV2l0aF09XCJjb21wYXJlT2JqZWN0XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uXHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgc2VsZWN0aW9uT2JqZWN0IG9mIHNlbGVjdGlvbk9iamVjdHNcIlxyXG4gICAgICAgICAgW3ZhbHVlXT1cInNlbGVjdGlvbk9iamVjdFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3sgc2VsZWN0aW9uT2JqZWN0W3NlbGVjdGlvbktleV0gfX1cclxuICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmZ1bGwtd2lkdGgge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExpYkZvcm1TZWxlY3RPYmplY3RDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybVNlbGVjdE9iamVjdENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGliRm9ybVNlbGVjdE9iamVjdENvbXBvbmVudCBleHRlbmRzIEZvcm1CYXNlPE9iamVjdD4ge1xyXG4gIEBJbnB1dCgpXHJcbiAgc2VsZWN0aW9uT2JqZWN0czogT2JqZWN0W107XHJcbiAgQElucHV0KClcclxuICBzZWxlY3Rpb25LZXk6IHN0cmluZztcclxuXHJcbiAgY29tcGFyZU9iamVjdCA9IGNvbXBhcmVPYmplY3Q7XHJcblxyXG4gIHdyaXRlVmFsdWUobmV3VmFsOiBPYmplY3QpIHtcclxuICAgIHRoaXMudmFsdWUgPSBuZXdWYWwgfHwge307XHJcbiAgfVxyXG59XHJcbiJdfQ==