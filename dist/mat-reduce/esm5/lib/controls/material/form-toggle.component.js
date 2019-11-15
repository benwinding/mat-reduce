/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
var LibFormToggleComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LibFormToggleComponent, _super);
    function LibFormToggleComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.yes = 'Yes';
        _this.no = 'No';
        return _this;
    }
    LibFormToggleComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-toggle',
                    template: "\n    <div class=\"full-width\">\n      <mat-slide-toggle\n        [formControl]=\"internalControl\"\n        [name]=\"autoCompleteObscureName\"\n        autocomplete=\"dontcompleteme\"\n      >\n        {{ placeholder }} ({{ value ? yes : no }})\n      </mat-slide-toggle>\n    </div>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormToggleComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormToggleComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .full-width {\n        width: 100%;\n        padding-bottom: 15px;\n      }\n    "]
                }] }
    ];
    LibFormToggleComponent.propDecorators = {
        yes: [{ type: Input }],
        no: [{ type: Input }]
    };
    return LibFormToggleComponent;
}(FormBase));
export { LibFormToggleComponent };
if (false) {
    /** @type {?} */
    LibFormToggleComponent.prototype.yes;
    /** @type {?} */
    LibFormToggleComponent.prototype.no;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS10b2dnbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXJlZHVjZS8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9tYXRlcmlhbC9mb3JtLXRvZ2dsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5QztJQW1DNEMsa0RBQWdCO0lBbkM1RDtRQUFBLHFFQXdDQztRQUhDLFNBQUcsR0FBRyxLQUFLLENBQUM7UUFFWixRQUFFLEdBQUcsSUFBSSxDQUFDOztJQUNaLENBQUM7O2dCQXhDQSxTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsbVNBVVQ7b0JBU0QsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLHNCQUFzQixFQUF0QixDQUFzQixFQUFDOzRCQUNyRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsc0JBQXNCLEVBQXRCLENBQXNCLEVBQUM7NEJBQ3JELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOzZCQWxCQywyRkFLQztpQkFjSjs7O3NCQUVFLEtBQUs7cUJBRUwsS0FBSzs7SUFFUiw2QkFBQztDQUFBLEFBeENELENBbUM0QyxRQUFRLEdBS25EO1NBTFksc0JBQXNCOzs7SUFDakMscUNBQ1k7O0lBQ1osb0NBQ1UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBGb3JtQmFzZSB9IGZyb20gJy4uL2Zvcm0tYmFzZS1jbGFzcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdmb3JtLXRvZ2dsZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsLXdpZHRoXCI+XHJcbiAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlXHJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImludGVybmFsQ29udHJvbFwiXHJcbiAgICAgICAgW25hbWVdPVwiYXV0b0NvbXBsZXRlT2JzY3VyZU5hbWVcIlxyXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cImRvbnRjb21wbGV0ZW1lXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt7IHBsYWNlaG9sZGVyIH19ICh7eyB2YWx1ZSA/IHllcyA6IG5vIH19KVxyXG4gICAgICA8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuZnVsbC13aWR0aCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybVRvZ2dsZUNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMaWJGb3JtVG9nZ2xlQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWJGb3JtVG9nZ2xlQ29tcG9uZW50IGV4dGVuZHMgRm9ybUJhc2U8c3RyaW5nPiB7XHJcbiAgQElucHV0KClcclxuICB5ZXMgPSAnWWVzJztcclxuICBASW5wdXQoKVxyXG4gIG5vID0gJ05vJztcclxufVxyXG4iXX0=