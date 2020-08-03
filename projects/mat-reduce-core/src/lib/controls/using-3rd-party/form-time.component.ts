import {
  Component,
  forwardRef,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-time',
  template: `
    <mat-form-field [appearance]="appearance" class="form-time-full-width">
      <input
        matInput
        [formControl]="internalControl"
        [ngxTimepicker]="picker"
        [placeholder]="placeholder"
        [format]="format"
        [min]="min"
        [max]="max"
        [name]="autoCompleteObscureName"
        autocomplete="false"
      />
      <mat-icon
        matSuffix
        class="form-time-has-pointer"
        [class.form-time-is-grey]="disabled"
        (click)="disabled ? null : picker.open()"
      >
        access_time
      </mat-icon>
      <ngx-material-timepicker
        #picker
        [defaultTime]="defaultTime"
        [minutesGap]="minutesGap"
        [ESC]="true"
      ></ngx-material-timepicker>
    </mat-form-field>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LibFormTimeComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormTimeComponent),
      multi: true,
    },
  ],
  styles: [
    `
      .form-time-is-grey {
        color: #aaa;
      }
      .form-time-has-pointer {
        cursor: pointer;
      }
      .form-time-full-width {
        width: 100%;
      }
      .timepicker-backdrop-overlay {
        z-index: 1000 !important;
      }
      .timepicker-overlay {
        z-index: 1000 !important;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class LibFormTimeComponent extends FormBase<string> implements OnInit {
  @Input()
  placeholder = '';
  @Input()
  format: number; // 12 or 24
  @Input()
  min: string; // 12:00 AM
  @Input()
  max: string; // 12:00 AM
  @Input()
  defaultTime: string; // 12:00 AM
  @Input()
  minutesGap: number; // 1 -> 60
  @Input()
  required: boolean;
}
