/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild, forwardRef } from '@angular/core';
import { FormBase } from '../form-base-class';
import { v1 as uuidv1 } from 'uuid';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
export class LibFormSignatureComponent extends FormBase {
    constructor() {
        super(...arguments);
        this.placeholder = 'Sign Here';
        this.blankImageSrc = 'https://i.imgur.com/4StmpUT.png';
        this.signaturePadOptions = {
            minWidth: 2,
            canvasWidth: 400,
            canvasHeight: 200
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.autoCompleteObscureName = uuidv1();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.updateWidthToParent();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        this.setSignatureToPad();
    }
    /**
     * @return {?}
     */
    updateWidthToParent() {
        /** @type {?} */
        const pad = this.signaturePad.nativeElement;
        if (!pad) {
            return;
        }
        /** @type {?} */
        const containerWidth = this.container.nativeElement.clientWidth;
        if (containerWidth < 600) {
            /** @type {?} */
            const marginLeftAndRight = 20 * 2;
            pad.set('canvasWidth', containerWidth - marginLeftAndRight - 10);
        }
    }
    /**
     * @return {?}
     */
    setSignatureToPad() {
        // Set current signature from control
        /** @type {?} */
        const currentSignature = this.value;
        if (!this.signaturePad || !currentSignature) {
            return;
        }
        /** @type {?} */
        const pad = this.signaturePad.nativeElement;
        pad.fromDataURL(currentSignature);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    drawComplete(e) {
        if (!e) {
            return;
        }
        /** @type {?} */
        const imgData = e.toDataURL();
        this.value = imgData;
    }
}
LibFormSignatureComponent.decorators = [
    { type: Component, args: [{
                selector: 'form-signature',
                template: `
    <h3>{{ placeholder }}</h3>
    <div #container class="signature-container">
      <div class="signature-border" [class.disabled-border]="disabled">
        <signature-pad
          #signaturePad
          [hidden]="disabled"
          [options]="signaturePadOptions"
          (onEndEvent)="drawComplete(signaturePad)"
        ></signature-pad>
        <img [hidden]="!disabled" [src]="this.value || blankImageSrc" />
      </div>
    </div>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormSignatureComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormSignatureComponent)),
                        multi: true
                    }
                ],
                styles: [`
      h3 {
        display: inline-block;
        margin-bottom: 0;
      }
      .signature-container {
        display: inline-block;
        width: 100%;
      }
      .signature-border {
        display: inline-block;
        border: 1px #777 solid;
        margin: 20px;
        height: 200px;
      }
      .disabled-border {
        border: 2px #aaa dotted;
      }
      img {
        height: 100%;
      }
    `]
            }] }
];
LibFormSignatureComponent.propDecorators = {
    placeholder: [{ type: Input }],
    signaturePad: [{ type: ViewChild, args: ['signaturePad', (/** @type {?} */ ({ static: false })),] }],
    container: [{ type: ViewChild, args: ['container',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1zaWduYXR1cmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXJlZHVjZS8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy91c2luZy0zcmQtcGFydHkvZm9ybS1zaWduYXR1cmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxNQUFNLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBdURsRSxNQUFNLE9BQU8seUJBQTBCLFNBQVEsUUFBZ0I7SUFyRC9EOztRQXdERSxnQkFBVyxHQUFHLFdBQVcsQ0FBQztRQUUxQixrQkFBYSxHQUFHLGlDQUFpQyxDQUFDO1FBRWxELHdCQUFtQixHQUFHO1lBQ3BCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsV0FBVyxFQUFFLEdBQUc7WUFDaEIsWUFBWSxFQUFFLEdBQUc7U0FDbEIsQ0FBQztJQWtESixDQUFDOzs7O0lBN0NDLFFBQVE7UUFDTixJQUFJLENBQUMsdUJBQXVCLEdBQUcsTUFBTSxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxtQkFBbUI7O2NBQ1gsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYTtRQUMzQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTztTQUNSOztjQUNLLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxXQUFXO1FBQy9ELElBQUksY0FBYyxHQUFHLEdBQUcsRUFBRTs7a0JBQ2xCLGtCQUFrQixHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxHQUFHLENBQ0wsYUFBYSxFQUNiLGNBQWMsR0FBRyxrQkFBa0IsR0FBRyxFQUFFLENBQ3pDLENBQUM7U0FDSDtJQUNILENBQUM7Ozs7SUFFRCxpQkFBaUI7OztjQUVULGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDM0MsT0FBTztTQUNSOztjQUNLLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWE7UUFDM0MsR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ04sT0FBTztTQUNSOztjQUNLLE9BQU8sR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO0lBQ3ZCLENBQUM7OztZQWpIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O0dBYVQ7Z0JBeUJELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixFQUFDO3dCQUN4RCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyx5QkFBeUIsRUFBQzt3QkFDeEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7eUJBbENDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FxQkM7YUFjSjs7OzBCQUdFLEtBQUs7MkJBVUwsU0FBUyxTQUFDLGNBQWMsRUFBRSxtQkFBQSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBTzt3QkFFbEQsU0FBUyxTQUFDLFdBQVc7Ozs7SUFadEIsZ0RBQzBCOztJQUUxQixrREFBa0Q7O0lBRWxELHdEQUlFOztJQUNGLGlEQUN1Qzs7SUFDdkMsOENBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgZm9yd2FyZFJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTaWduYXR1cmVQYWQgfSBmcm9tICdhbmd1bGFyMi1zaWduYXR1cmVwYWQvc2lnbmF0dXJlLXBhZCc7XHJcbmltcG9ydCB7IEZvcm1CYXNlIH0gZnJvbSAnLi4vZm9ybS1iYXNlLWNsYXNzJztcclxuXHJcbmltcG9ydCB7IHYxIGFzIHV1aWR2MSB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgTkdfVkFMSURBVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm9ybS1zaWduYXR1cmUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8aDM+e3sgcGxhY2Vob2xkZXIgfX08L2gzPlxyXG4gICAgPGRpdiAjY29udGFpbmVyIGNsYXNzPVwic2lnbmF0dXJlLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2lnbmF0dXJlLWJvcmRlclwiIFtjbGFzcy5kaXNhYmxlZC1ib3JkZXJdPVwiZGlzYWJsZWRcIj5cclxuICAgICAgICA8c2lnbmF0dXJlLXBhZFxyXG4gICAgICAgICAgI3NpZ25hdHVyZVBhZFxyXG4gICAgICAgICAgW2hpZGRlbl09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICBbb3B0aW9uc109XCJzaWduYXR1cmVQYWRPcHRpb25zXCJcclxuICAgICAgICAgIChvbkVuZEV2ZW50KT1cImRyYXdDb21wbGV0ZShzaWduYXR1cmVQYWQpXCJcclxuICAgICAgICA+PC9zaWduYXR1cmUtcGFkPlxyXG4gICAgICAgIDxpbWcgW2hpZGRlbl09XCIhZGlzYWJsZWRcIiBbc3JjXT1cInRoaXMudmFsdWUgfHwgYmxhbmtJbWFnZVNyY1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgaDMge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5zaWduYXR1cmUtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLnNpZ25hdHVyZS1ib3JkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBib3JkZXI6IDFweCAjNzc3IHNvbGlkO1xyXG4gICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5kaXNhYmxlZC1ib3JkZXIge1xyXG4gICAgICAgIGJvcmRlcjogMnB4ICNhYWEgZG90dGVkO1xyXG4gICAgICB9XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExpYkZvcm1TaWduYXR1cmVDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybVNpZ25hdHVyZUNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGliRm9ybVNpZ25hdHVyZUNvbXBvbmVudCBleHRlbmRzIEZvcm1CYXNlPHN0cmluZz5cclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KClcclxuICBwbGFjZWhvbGRlciA9ICdTaWduIEhlcmUnO1xyXG5cclxuICBibGFua0ltYWdlU3JjID0gJ2h0dHBzOi8vaS5pbWd1ci5jb20vNFN0bXBVVC5wbmcnO1xyXG5cclxuICBzaWduYXR1cmVQYWRPcHRpb25zID0ge1xyXG4gICAgbWluV2lkdGg6IDIsXHJcbiAgICBjYW52YXNXaWR0aDogNDAwLFxyXG4gICAgY2FudmFzSGVpZ2h0OiAyMDBcclxuICB9O1xyXG4gIEBWaWV3Q2hpbGQoJ3NpZ25hdHVyZVBhZCcsIHsgc3RhdGljOiBmYWxzZSB9IGFzIGFueSlcclxuICBzaWduYXR1cmVQYWQ6IEVsZW1lbnRSZWY8U2lnbmF0dXJlUGFkPjtcclxuICBAVmlld0NoaWxkKCdjb250YWluZXInKSBjb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYXV0b0NvbXBsZXRlT2JzY3VyZU5hbWUgPSB1dWlkdjEoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMudXBkYXRlV2lkdGhUb1BhcmVudCgpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLnNldFNpZ25hdHVyZVRvUGFkKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVXaWR0aFRvUGFyZW50KCkge1xyXG4gICAgY29uc3QgcGFkID0gdGhpcy5zaWduYXR1cmVQYWQubmF0aXZlRWxlbWVudDtcclxuICAgIGlmICghcGFkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgIGlmIChjb250YWluZXJXaWR0aCA8IDYwMCkge1xyXG4gICAgICBjb25zdCBtYXJnaW5MZWZ0QW5kUmlnaHQgPSAyMCAqIDI7XHJcbiAgICAgIHBhZC5zZXQoXHJcbiAgICAgICAgJ2NhbnZhc1dpZHRoJyxcclxuICAgICAgICBjb250YWluZXJXaWR0aCAtIG1hcmdpbkxlZnRBbmRSaWdodCAtIDEwXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTaWduYXR1cmVUb1BhZCgpIHtcclxuICAgIC8vIFNldCBjdXJyZW50IHNpZ25hdHVyZSBmcm9tIGNvbnRyb2xcclxuICAgIGNvbnN0IGN1cnJlbnRTaWduYXR1cmUgPSB0aGlzLnZhbHVlO1xyXG4gICAgaWYgKCF0aGlzLnNpZ25hdHVyZVBhZCB8fCAhY3VycmVudFNpZ25hdHVyZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYWQgPSB0aGlzLnNpZ25hdHVyZVBhZC5uYXRpdmVFbGVtZW50O1xyXG4gICAgcGFkLmZyb21EYXRhVVJMKGN1cnJlbnRTaWduYXR1cmUpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0NvbXBsZXRlKGUpIHtcclxuICAgIGlmICghZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbWdEYXRhID0gZS50b0RhdGFVUkwoKTtcclxuICAgIHRoaXMudmFsdWUgPSBpbWdEYXRhO1xyXG4gIH1cclxufVxyXG4iXX0=