/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
var LibFormColorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LibFormColorComponent, _super);
    function LibFormColorComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultColor = '#42d742';
        return _this;
    }
    /**
     * @return {?}
     */
    LibFormColorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.value) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.value = _this.defaultColor;
            }));
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    LibFormColorComponent.prototype.onClickClear = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        this.value = '';
    };
    LibFormColorComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-color',
                    template: "\n    <mat-form-field [appearance]=\"appearance\" class=\"full-width m-top\">\n      <span [class.txt-grey]=\"disabled\">\n        {{ placeholder }}\n      </span>\n      <input\n        matInput\n        [hidden]=\"true\"\n        [formControl]=\"internalControl\"\n        [name]=\"autoCompleteObscureName\"\n        autocomplete=\"dontcompleteme\"\n      />\n      <mat-card\n        *ngIf=\"!disabled\"\n        [cpOutputFormat]=\"'hex'\"\n        class=\"box has-pointer\"\n        [style.background]=\"value\"\n        [(colorPicker)]=\"value\"\n        [cpPosition]=\"'top'\"\n      >\n        <div class=\"flex-space-between\">\n          <span>\n            {{ value ? value : 'click to pick color' }}\n          </span>\n          <button\n            mat-mini-fab\n            (click)=\"onClickClear($event)\"\n            [disabled]=\"disabled\"\n            matTooltip=\"Clear current color\"\n            class=\"bg-white close-btn\"\n          >\n            <mat-icon class=\"txt-black\">\n              clear\n            </mat-icon>\n          </button>\n        </div>\n      </mat-card>\n      <mat-card\n        *ngIf=\"disabled\"\n        class=\"box\"\n        [style.background]=\"value\"\n      >\n        <div class=\"flex-space-between\">\n          <span>\n            {{ value ? value : 'click to pick color' }}\n          </span>\n          <span>\n          </span>\n        </div>\n      </mat-card>\n    </mat-form-field>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormColorComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormColorComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .close-btn {\n        position: absolute;\n        right: -4px;\n        top: -4px;\n        transform: scale(0.6);\n      }\n      .m-top {\n        margin-top: -20px;\n      }\n      .bg-white {\n        background-color: white !important;\n      }\n      .txt-black {\n        color: black;\n      }\n      .txt-grey {\n        color: grey;\n      }\n      .full-width {\n        width: 100%;\n      }\n      .box {\n        max-width: 200px;\n      }\n      .has-pointer {\n        cursor: pointer;\n      }\n      .flex-space-between {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n      }\n    "]
                }] }
    ];
    LibFormColorComponent.propDecorators = {
        defaultColor: [{ type: Input }]
    };
    return LibFormColorComponent;
}(FormBase));
export { LibFormColorComponent };
if (false) {
    /** @type {?} */
    LibFormColorComponent.prototype.defaultColor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb2xvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtcmVkdWNlLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL3VzaW5nLTNyZC1wYXJ0eS9mb3JtLWNvbG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlDO0lBd0cyQyxpREFBZ0I7SUF4RzNEO1FBQUEscUVBd0hDO1FBZEMsa0JBQVksR0FBRyxTQUFTLENBQUM7O0lBYzNCLENBQUM7Ozs7SUFaQyx3Q0FBUTs7O0lBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsVUFBVTs7O1lBQUM7Z0JBQ1QsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2pDLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUVELDRDQUFZOzs7O0lBQVosVUFBYSxDQUFRO1FBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDOztnQkF2SEYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLG83Q0FtRFQ7b0JBcUNELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSxxQkFBcUIsRUFBckIsQ0FBcUIsRUFBQzs0QkFDcEQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLHFCQUFxQixFQUFyQixDQUFxQixFQUFDOzRCQUNwRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs2QkE5Q0Msb3BCQWlDQztpQkFjSjs7OytCQUVFLEtBQUs7O0lBZVIsNEJBQUM7Q0FBQSxBQXhIRCxDQXdHMkMsUUFBUSxHQWdCbEQ7U0FoQlkscUJBQXFCOzs7SUFDaEMsNkNBQ3lCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBGb3JtQmFzZSB9IGZyb20gJy4uL2Zvcm0tYmFzZS1jbGFzcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdmb3JtLWNvbG9yJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIFthcHBlYXJhbmNlXT1cImFwcGVhcmFuY2VcIiBjbGFzcz1cImZ1bGwtd2lkdGggbS10b3BcIj5cclxuICAgICAgPHNwYW4gW2NsYXNzLnR4dC1ncmV5XT1cImRpc2FibGVkXCI+XHJcbiAgICAgICAge3sgcGxhY2Vob2xkZXIgfX1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBtYXRJbnB1dFxyXG4gICAgICAgIFtoaWRkZW5dPVwidHJ1ZVwiXHJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImludGVybmFsQ29udHJvbFwiXHJcbiAgICAgICAgW25hbWVdPVwiYXV0b0NvbXBsZXRlT2JzY3VyZU5hbWVcIlxyXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cImRvbnRjb21wbGV0ZW1lXCJcclxuICAgICAgLz5cclxuICAgICAgPG1hdC1jYXJkXHJcbiAgICAgICAgKm5nSWY9XCIhZGlzYWJsZWRcIlxyXG4gICAgICAgIFtjcE91dHB1dEZvcm1hdF09XCInaGV4J1wiXHJcbiAgICAgICAgY2xhc3M9XCJib3ggaGFzLXBvaW50ZXJcIlxyXG4gICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kXT1cInZhbHVlXCJcclxuICAgICAgICBbKGNvbG9yUGlja2VyKV09XCJ2YWx1ZVwiXHJcbiAgICAgICAgW2NwUG9zaXRpb25dPVwiJ3RvcCdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtc3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIHt7IHZhbHVlID8gdmFsdWUgOiAnY2xpY2sgdG8gcGljayBjb2xvcicgfX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgbWF0LW1pbmktZmFiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrQ2xlYXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgIG1hdFRvb2x0aXA9XCJDbGVhciBjdXJyZW50IGNvbG9yXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJiZy13aGl0ZSBjbG9zZS1idG5cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJ0eHQtYmxhY2tcIj5cclxuICAgICAgICAgICAgICBjbGVhclxyXG4gICAgICAgICAgICA8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWF0LWNhcmQ+XHJcbiAgICAgIDxtYXQtY2FyZFxyXG4gICAgICAgICpuZ0lmPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIGNsYXNzPVwiYm94XCJcclxuICAgICAgICBbc3R5bGUuYmFja2dyb3VuZF09XCJ2YWx1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1zcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAge3sgdmFsdWUgPyB2YWx1ZSA6ICdjbGljayB0byBwaWNrIGNvbG9yJyB9fVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWF0LWNhcmQ+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5jbG9zZS1idG4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogLTRweDtcclxuICAgICAgICB0b3A6IC00cHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xyXG4gICAgICB9XHJcbiAgICAgIC5tLXRvcCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmJnLXdoaXRlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC50eHQtYmxhY2sge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgfVxyXG4gICAgICAudHh0LWdyZXkge1xyXG4gICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICB9XHJcbiAgICAgIC5mdWxsLXdpZHRoIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAuYm94IHtcclxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5oYXMtcG9pbnRlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5mbGV4LXNwYWNlLWJldHdlZW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybUNvbG9yQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExpYkZvcm1Db2xvckNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGliRm9ybUNvbG9yQ29tcG9uZW50IGV4dGVuZHMgRm9ybUJhc2U8c3RyaW5nPiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KClcclxuICBkZWZhdWx0Q29sb3IgPSAnIzQyZDc0Mic7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKCF0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmRlZmF1bHRDb2xvcjtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrQ2xlYXIoZTogRXZlbnQpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLnZhbHVlID0gJyc7XHJcbiAgfVxyXG59XHJcbiJdfQ==