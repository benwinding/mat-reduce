import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-time',
  template: `
    <mat-form-field class="full-width">
      <input
        matInput
        required
        [formControl]="internalControl"
        [ngxTimepicker]="picker"
        [placeholder]="placeholder"
        [name]="autoCompleteObscureName"
        autocomplete="false"
      />
      <mat-icon matSuffix [class.is-grey]="disabled" (click)="picker.open()" >
        access_time
      </mat-icon>
      <ngx-material-timepicker #picker></ngx-material-timepicker>
    </mat-form-field>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LibFormTimeComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormTimeComponent),
      multi: true
    }
  ],
  styles: [
    `
      .is-grey {
        color: #aaa;
      }
    `
  ]
})
export class LibFormTimeComponent extends FormBase<string> implements OnInit {
  @Input()
  placeholder = '';
}
