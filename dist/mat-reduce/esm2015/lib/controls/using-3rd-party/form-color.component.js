/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
export class LibFormColorComponent extends FormBase {
    constructor() {
        super(...arguments);
        this.defaultColor = '#42d742';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.value) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.value = this.defaultColor;
            }));
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClickClear(e) {
        e.stopPropagation();
        this.value = '';
    }
}
LibFormColorComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-color',
                template: `
    <mat-form-field [appearance]="appearance" class="full-width m-top">
      <span [class.txt-grey]="disabled">
        {{ placeholder }}
      </span>
      <input
        matInput
        [hidden]="true"
        [formControl]="internalControl"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
      />
      <mat-card
        *ngIf="!disabled"
        [cpOutputFormat]="'hex'"
        class="box has-pointer"
        [style.background]="value"
        [(colorPicker)]="value"
        [cpPosition]="'top'"
      >
        <div class="flex-space-between">
          <span>
            {{ value ? value : 'click to pick color' }}
          </span>
          <button
            mat-mini-fab
            (click)="onClickClear($event)"
            [disabled]="disabled"
            matTooltip="Clear current color"
            class="bg-white close-btn"
          >
            <mat-icon class="txt-black">
              clear
            </mat-icon>
          </button>
        </div>
      </mat-card>
      <mat-card
        *ngIf="disabled"
        class="box"
        [style.background]="value"
      >
        <div class="flex-space-between">
          <span>
            {{ value ? value : 'click to pick color' }}
          </span>
          <span>
          </span>
        </div>
      </mat-card>
    </mat-form-field>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormColorComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormColorComponent)),
                        multi: true
                    }
                ],
                styles: [`
      .close-btn {
        position: absolute;
        right: -4px;
        top: -4px;
        transform: scale(0.6);
      }
      .m-top {
        margin-top: -20px;
      }
      .bg-white {
        background-color: white !important;
      }
      .txt-black {
        color: black;
      }
      .txt-grey {
        color: grey;
      }
      .full-width {
        width: 100%;
      }
      .box {
        max-width: 200px;
      }
      .has-pointer {
        cursor: pointer;
      }
      .flex-space-between {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `]
            }] }
];
LibFormColorComponent.propDecorators = {
    defaultColor: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LibFormColorComponent.prototype.defaultColor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb2xvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtcmVkdWNlLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL3VzaW5nLTNyZC1wYXJ0eS9mb3JtLWNvbG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUEwRzlDLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxRQUFnQjtJQXhHM0Q7O1FBMEdFLGlCQUFZLEdBQUcsU0FBUyxDQUFDO0lBYzNCLENBQUM7Ozs7SUFaQyxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2pDLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxDQUFRO1FBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7WUF2SEYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtRFQ7Z0JBcUNELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixFQUFDO3dCQUNwRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsRUFBQzt3QkFDcEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7eUJBOUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FpQ0M7YUFjSjs7OzJCQUVFLEtBQUs7Ozs7SUFBTiw2Q0FDeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZvcm1CYXNlIH0gZnJvbSAnLi4vZm9ybS1iYXNlLWNsYXNzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2Zvcm0tY29sb3InLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bWF0LWZvcm0tZmllbGQgW2FwcGVhcmFuY2VdPVwiYXBwZWFyYW5jZVwiIGNsYXNzPVwiZnVsbC13aWR0aCBtLXRvcFwiPlxyXG4gICAgICA8c3BhbiBbY2xhc3MudHh0LWdyZXldPVwiZGlzYWJsZWRcIj5cclxuICAgICAgICB7eyBwbGFjZWhvbGRlciB9fVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIG1hdElucHV0XHJcbiAgICAgICAgW2hpZGRlbl09XCJ0cnVlXCJcclxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwiaW50ZXJuYWxDb250cm9sXCJcclxuICAgICAgICBbbmFtZV09XCJhdXRvQ29tcGxldGVPYnNjdXJlTmFtZVwiXHJcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwiZG9udGNvbXBsZXRlbWVcIlxyXG4gICAgICAvPlxyXG4gICAgICA8bWF0LWNhcmRcclxuICAgICAgICAqbmdJZj1cIiFkaXNhYmxlZFwiXHJcbiAgICAgICAgW2NwT3V0cHV0Rm9ybWF0XT1cIidoZXgnXCJcclxuICAgICAgICBjbGFzcz1cImJveCBoYXMtcG9pbnRlclwiXHJcbiAgICAgICAgW3N0eWxlLmJhY2tncm91bmRdPVwidmFsdWVcIlxyXG4gICAgICAgIFsoY29sb3JQaWNrZXIpXT1cInZhbHVlXCJcclxuICAgICAgICBbY3BQb3NpdGlvbl09XCIndG9wJ1wiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1zcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAge3sgdmFsdWUgPyB2YWx1ZSA6ICdjbGljayB0byBwaWNrIGNvbG9yJyB9fVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBtYXQtbWluaS1mYWJcclxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2tDbGVhcigkZXZlbnQpXCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICAgICAgbWF0VG9vbHRpcD1cIkNsZWFyIGN1cnJlbnQgY29sb3JcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImJnLXdoaXRlIGNsb3NlLWJ0blwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cInR4dC1ibGFja1wiPlxyXG4gICAgICAgICAgICAgIGNsZWFyXHJcbiAgICAgICAgICAgIDwvbWF0LWljb24+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYXQtY2FyZD5cclxuICAgICAgPG1hdC1jYXJkXHJcbiAgICAgICAgKm5nSWY9XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgY2xhc3M9XCJib3hcIlxyXG4gICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kXT1cInZhbHVlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LXNwYWNlLWJldHdlZW5cIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICB7eyB2YWx1ZSA/IHZhbHVlIDogJ2NsaWNrIHRvIHBpY2sgY29sb3InIH19XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYXQtY2FyZD5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmNsb3NlLWJ0biB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAtNHB4O1xyXG4gICAgICAgIHRvcDogLTRweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XHJcbiAgICAgIH1cclxuICAgICAgLm0tdG9wIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgICAgfVxyXG4gICAgICAuYmctd2hpdGUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLnR4dC1ibGFjayB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICB9XHJcbiAgICAgIC50eHQtZ3JleSB7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgIH1cclxuICAgICAgLmZ1bGwtd2lkdGgge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5ib3gge1xyXG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmhhcy1wb2ludGVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmZsZXgtc3BhY2UtYmV0d2VlbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMaWJGb3JtQ29sb3JDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybUNvbG9yQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWJGb3JtQ29sb3JDb21wb25lbnQgZXh0ZW5kcyBGb3JtQmFzZTxzdHJpbmc+IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIGRlZmF1bHRDb2xvciA9ICcjNDJkNzQyJztcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZGVmYXVsdENvbG9yO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xpY2tDbGVhcihlOiBFdmVudCkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMudmFsdWUgPSAnJztcclxuICB9XHJcbn1cclxuIl19