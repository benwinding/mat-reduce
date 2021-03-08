import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
import { take, delay, takeUntil, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
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
        [autocomplete]="autoCompleteText"
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
          <span [style.color]="$textColor | async">
            {{ value ? value : 'click to pick color' }}
          </span>
          <button
            mat-mini-fab
            (click)="onClickClear($event)"
            [disabled]="disabled"
            matTooltip="Clear current color"
            class="bg-white close-btn"
          >
            <mat-icon class="txt-black"> clear </mat-icon>
          </button>
        </div>
      </mat-card>
      <mat-card *ngIf="disabled" class="box" [style.background]="value">
        <div class="flex-space-between">
          <span [style.color]="$textColor | async">
            {{ value ? value : 'click to pick color' }}
          </span>
          <span> </span>
        </div>
      </mat-card>
    </mat-form-field>
  `,
  styles: [
    `
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
    `,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LibFormColorComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormColorComponent),
      multi: true,
    },
  ],
})
export class LibFormColorComponent extends FormBase<string> implements OnInit {
  @Input()
  defaultColor = '#42d742';

  $textColor: Observable<string>;

  constructor() {
    super();
    this.$textColor = this.internalControl.valueChanges.pipe(
      takeUntil(this._destroyed),
      map((color) => invertColor(color))
    );
    this.$nginit.pipe(take(1), delay(1)).subscribe(() => this.init());
  }

  async init() {
    if (!this.value) {
      this.value = this.defaultColor;
    }
  }

  onClickClear(e: Event) {
    e.stopPropagation();
    this.value = '';
  }
}

/* https://stackoverflow.com/a/35970186/2419584 */

function invertColor(hex: string, bw = true) {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  if (bw) {
    // http://stackoverflow.com/a/3943023/112731
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF';
  }
  // invert color components
  const r1 = (255 - r).toString(16);
  const g1 = (255 - g).toString(16);
  const b1 = (255 - b).toString(16);
  // pad each with zeros and return
  return '#' + padZero(r1) + padZero(g1) + padZero(b1);
}

function padZero(str: string, len?: number) {
  len = len || 2;
  var zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
}
