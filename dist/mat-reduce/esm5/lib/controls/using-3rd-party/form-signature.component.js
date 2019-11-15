/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, ViewChild, forwardRef } from '@angular/core';
import { FormBase } from '../form-base-class';
import { v1 as uuidv1 } from 'uuid';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
var LibFormSignatureComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LibFormSignatureComponent, _super);
    function LibFormSignatureComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.placeholder = 'Sign Here';
        _this.blankImageSrc = 'https://i.imgur.com/4StmpUT.png';
        _this.signaturePadOptions = {
            minWidth: 2,
            canvasWidth: 400,
            canvasHeight: 200
        };
        return _this;
    }
    /**
     * @return {?}
     */
    LibFormSignatureComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.autoCompleteObscureName = uuidv1();
    };
    /**
     * @return {?}
     */
    LibFormSignatureComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateWidthToParent();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    LibFormSignatureComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.setSignatureToPad();
    };
    /**
     * @return {?}
     */
    LibFormSignatureComponent.prototype.updateWidthToParent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pad = this.signaturePad.nativeElement;
        if (!pad) {
            return;
        }
        /** @type {?} */
        var containerWidth = this.container.nativeElement.clientWidth;
        if (containerWidth < 600) {
            /** @type {?} */
            var marginLeftAndRight = 20 * 2;
            pad.set('canvasWidth', containerWidth - marginLeftAndRight - 10);
        }
    };
    /**
     * @return {?}
     */
    LibFormSignatureComponent.prototype.setSignatureToPad = /**
     * @return {?}
     */
    function () {
        // Set current signature from control
        /** @type {?} */
        var currentSignature = this.value;
        if (!this.signaturePad || !currentSignature) {
            return;
        }
        /** @type {?} */
        var pad = this.signaturePad.nativeElement;
        pad.fromDataURL(currentSignature);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    LibFormSignatureComponent.prototype.drawComplete = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!e) {
            return;
        }
        /** @type {?} */
        var imgData = e.toDataURL();
        this.value = imgData;
    };
    LibFormSignatureComponent.decorators = [
        { type: Component, args: [{
                    selector: 'form-signature',
                    template: "\n    <h3>{{ placeholder }}</h3>\n    <div #container class=\"signature-container\">\n      <div class=\"signature-border\" [class.disabled-border]=\"disabled\">\n        <signature-pad\n          #signaturePad\n          [hidden]=\"disabled\"\n          [options]=\"signaturePadOptions\"\n          (onEndEvent)=\"drawComplete(signaturePad)\"\n        ></signature-pad>\n        <img [hidden]=\"!disabled\" [src]=\"this.value || blankImageSrc\" />\n      </div>\n    </div>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormSignatureComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormSignatureComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      h3 {\n        display: inline-block;\n        margin-bottom: 0;\n      }\n      .signature-container {\n        display: inline-block;\n        width: 100%;\n      }\n      .signature-border {\n        display: inline-block;\n        border: 1px #777 solid;\n        margin: 20px;\n        height: 200px;\n      }\n      .disabled-border {\n        border: 2px #aaa dotted;\n      }\n      img {\n        height: 100%;\n      }\n    "]
                }] }
    ];
    LibFormSignatureComponent.propDecorators = {
        placeholder: [{ type: Input }],
        signaturePad: [{ type: ViewChild, args: ['signaturePad', (/** @type {?} */ ({ static: false })),] }],
        container: [{ type: ViewChild, args: ['container',] }]
    };
    return LibFormSignatureComponent;
}(FormBase));
export { LibFormSignatureComponent };
if (false) {
    /** @type {?} */
    LibFormSignatureComponent.prototype.placeholder;
    /** @type {?} */
    LibFormSignatureComponent.prototype.blankImageSrc;
    /** @type {?} */
    LibFormSignatureComponent.prototype.signaturePadOptions;
    /** @type {?} */
    LibFormSignatureComponent.prototype.signaturePad;
    /** @type {?} */
    LibFormSignatureComponent.prototype.container;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1zaWduYXR1cmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXJlZHVjZS8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy91c2luZy0zcmQtcGFydHkvZm9ybS1zaWduYXR1cmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxFQUFFLElBQUksTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRTtJQXFEK0MscURBQWdCO0lBckQvRDtRQUFBLHFFQWtIQztRQTFEQyxpQkFBVyxHQUFHLFdBQVcsQ0FBQztRQUUxQixtQkFBYSxHQUFHLGlDQUFpQyxDQUFDO1FBRWxELHlCQUFtQixHQUFHO1lBQ3BCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsV0FBVyxFQUFFLEdBQUc7WUFDaEIsWUFBWSxFQUFFLEdBQUc7U0FDbEIsQ0FBQzs7SUFrREosQ0FBQzs7OztJQTdDQyw0Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsdUJBQXVCLEdBQUcsTUFBTSxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELG1EQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsOENBQVU7Ozs7SUFBVixVQUFXLEtBQVU7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELHVEQUFtQjs7O0lBQW5COztZQUNRLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWE7UUFDM0MsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE9BQU87U0FDUjs7WUFDSyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsV0FBVztRQUMvRCxJQUFJLGNBQWMsR0FBRyxHQUFHLEVBQUU7O2dCQUNsQixrQkFBa0IsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUNqQyxHQUFHLENBQUMsR0FBRyxDQUNMLGFBQWEsRUFDYixjQUFjLEdBQUcsa0JBQWtCLEdBQUcsRUFBRSxDQUN6QyxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7O0lBRUQscURBQWlCOzs7SUFBakI7OztZQUVRLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDM0MsT0FBTztTQUNSOztZQUNLLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWE7UUFDM0MsR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsZ0RBQVk7Ozs7SUFBWixVQUFhLENBQUM7UUFDWixJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ04sT0FBTztTQUNSOztZQUNLLE9BQU8sR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO0lBQ3ZCLENBQUM7O2dCQWpIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGdlQWFUO29CQXlCRCxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEseUJBQXlCLEVBQXpCLENBQXlCLEVBQUM7NEJBQ3hELEtBQUssRUFBRSxJQUFJO3lCQUNaO3dCQUNEOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSx5QkFBeUIsRUFBekIsQ0FBeUIsRUFBQzs0QkFDeEQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7NkJBbENDLDJiQXFCQztpQkFjSjs7OzhCQUdFLEtBQUs7K0JBVUwsU0FBUyxTQUFDLGNBQWMsRUFBRSxtQkFBQSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBTzs0QkFFbEQsU0FBUyxTQUFDLFdBQVc7O0lBK0N4QixnQ0FBQztDQUFBLEFBbEhELENBcUQrQyxRQUFRLEdBNkR0RDtTQTdEWSx5QkFBeUI7OztJQUVwQyxnREFDMEI7O0lBRTFCLGtEQUFrRDs7SUFFbEQsd0RBSUU7O0lBQ0YsaURBQ3VDOztJQUN2Qyw4Q0FBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBmb3J3YXJkUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNpZ25hdHVyZVBhZCB9IGZyb20gJ2FuZ3VsYXIyLXNpZ25hdHVyZXBhZC9zaWduYXR1cmUtcGFkJztcclxuaW1wb3J0IHsgRm9ybUJhc2UgfSBmcm9tICcuLi9mb3JtLWJhc2UtY2xhc3MnO1xyXG5cclxuaW1wb3J0IHsgdjEgYXMgdXVpZHYxIH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBOR19WQUxJREFUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmb3JtLXNpZ25hdHVyZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxoMz57eyBwbGFjZWhvbGRlciB9fTwvaDM+XHJcbiAgICA8ZGl2ICNjb250YWluZXIgY2xhc3M9XCJzaWduYXR1cmUtY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzaWduYXR1cmUtYm9yZGVyXCIgW2NsYXNzLmRpc2FibGVkLWJvcmRlcl09XCJkaXNhYmxlZFwiPlxyXG4gICAgICAgIDxzaWduYXR1cmUtcGFkXHJcbiAgICAgICAgICAjc2lnbmF0dXJlUGFkXHJcbiAgICAgICAgICBbaGlkZGVuXT1cImRpc2FibGVkXCJcclxuICAgICAgICAgIFtvcHRpb25zXT1cInNpZ25hdHVyZVBhZE9wdGlvbnNcIlxyXG4gICAgICAgICAgKG9uRW5kRXZlbnQpPVwiZHJhd0NvbXBsZXRlKHNpZ25hdHVyZVBhZClcIlxyXG4gICAgICAgID48L3NpZ25hdHVyZS1wYWQ+XHJcbiAgICAgICAgPGltZyBbaGlkZGVuXT1cIiFkaXNhYmxlZFwiIFtzcmNdPVwidGhpcy52YWx1ZSB8fCBibGFua0ltYWdlU3JjXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIH1cclxuICAgICAgLnNpZ25hdHVyZS1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAuc2lnbmF0dXJlLWJvcmRlciB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJvcmRlcjogMXB4ICM3Nzcgc29saWQ7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmRpc2FibGVkLWJvcmRlciB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggI2FhYSBkb3R0ZWQ7XHJcbiAgICAgIH1cclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybVNpZ25hdHVyZUNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMaWJGb3JtU2lnbmF0dXJlQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWJGb3JtU2lnbmF0dXJlQ29tcG9uZW50IGV4dGVuZHMgRm9ybUJhc2U8c3RyaW5nPlxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKVxyXG4gIHBsYWNlaG9sZGVyID0gJ1NpZ24gSGVyZSc7XHJcblxyXG4gIGJsYW5rSW1hZ2VTcmMgPSAnaHR0cHM6Ly9pLmltZ3VyLmNvbS80U3RtcFVULnBuZyc7XHJcblxyXG4gIHNpZ25hdHVyZVBhZE9wdGlvbnMgPSB7XHJcbiAgICBtaW5XaWR0aDogMixcclxuICAgIGNhbnZhc1dpZHRoOiA0MDAsXHJcbiAgICBjYW52YXNIZWlnaHQ6IDIwMFxyXG4gIH07XHJcbiAgQFZpZXdDaGlsZCgnc2lnbmF0dXJlUGFkJywgeyBzdGF0aWM6IGZhbHNlIH0gYXMgYW55KVxyXG4gIHNpZ25hdHVyZVBhZDogRWxlbWVudFJlZjxTaWduYXR1cmVQYWQ+O1xyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpIGNvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hdXRvQ29tcGxldGVPYnNjdXJlTmFtZSA9IHV1aWR2MSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy51cGRhdGVXaWR0aFRvUGFyZW50KCk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuc2V0U2lnbmF0dXJlVG9QYWQoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVdpZHRoVG9QYXJlbnQoKSB7XHJcbiAgICBjb25zdCBwYWQgPSB0aGlzLnNpZ25hdHVyZVBhZC5uYXRpdmVFbGVtZW50O1xyXG4gICAgaWYgKCFwYWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgaWYgKGNvbnRhaW5lcldpZHRoIDwgNjAwKSB7XHJcbiAgICAgIGNvbnN0IG1hcmdpbkxlZnRBbmRSaWdodCA9IDIwICogMjtcclxuICAgICAgcGFkLnNldChcclxuICAgICAgICAnY2FudmFzV2lkdGgnLFxyXG4gICAgICAgIGNvbnRhaW5lcldpZHRoIC0gbWFyZ2luTGVmdEFuZFJpZ2h0IC0gMTBcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFNpZ25hdHVyZVRvUGFkKCkge1xyXG4gICAgLy8gU2V0IGN1cnJlbnQgc2lnbmF0dXJlIGZyb20gY29udHJvbFxyXG4gICAgY29uc3QgY3VycmVudFNpZ25hdHVyZSA9IHRoaXMudmFsdWU7XHJcbiAgICBpZiAoIXRoaXMuc2lnbmF0dXJlUGFkIHx8ICFjdXJyZW50U2lnbmF0dXJlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHBhZCA9IHRoaXMuc2lnbmF0dXJlUGFkLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBwYWQuZnJvbURhdGFVUkwoY3VycmVudFNpZ25hdHVyZSk7XHJcbiAgfVxyXG5cclxuICBkcmF3Q29tcGxldGUoZSkge1xyXG4gICAgaWYgKCFlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGltZ0RhdGEgPSBlLnRvRGF0YVVSTCgpO1xyXG4gICAgdGhpcy52YWx1ZSA9IGltZ0RhdGE7XHJcbiAgfVxyXG59XHJcbiJdfQ==