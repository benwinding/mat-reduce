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
        type="time"
        [formControl]="internalControl"
        [name]="autoCompleteObscureName"
        autocomplete="false"
      />
      <mat-icon matSuffix>
        access_time
      </mat-icon>
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
  ]
})
export class LibFormTimeComponent extends FormBase<string> implements OnInit {
  @Input()
  placeholder = '';
}
