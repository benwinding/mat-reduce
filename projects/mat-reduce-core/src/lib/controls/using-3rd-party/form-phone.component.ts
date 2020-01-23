import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { FormBase } from '../form-base-class';

import 'cleave.js/dist/addons/cleave-phone.au.js';

@Component({
  selector: 'form-phone',
  template: `
    <mat-form-field class="full-width">
      <input
        [cleave]="{ phone: true, phoneRegionCode: 'AU' }"
        [placeholder]="placeholder"
        [formControl]="internalControl"
        matInput
      />
    </mat-form-field>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LibFormPhoneComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormPhoneComponent),
      multi: true
    }
  ]
})
export class LibFormPhoneComponent extends FormBase<Date> {
  @Input()
  phoneRegionCode = 'AU';
}
