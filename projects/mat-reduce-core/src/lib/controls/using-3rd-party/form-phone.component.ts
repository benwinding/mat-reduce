import {
  Component,
  forwardRef,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { FormBase } from '../form-base-class';
import { take, delay } from 'rxjs/operators';

import Cleave from 'cleave.js';
import 'cleave.js/dist/addons/cleave-phone.au.js';

@Component({
  selector: 'form-phone',
  template: `
    <mat-form-field class="full-width">
      <input
        #input
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
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormPhoneComponent),
      multi: true,
    },
  ],
})
export class LibFormPhoneComponent extends FormBase<Date> {
  @ViewChild('input', {static: false})
  input: ElementRef<HTMLInputElement>;

  cleave: any;

  constructor() {
    super();
    this.$nginit.pipe(take(1), delay(100)).subscribe(() => {
      this.onInit();
    });
    this.$ngdestroy.pipe(take(1)).subscribe(() => {
      this.onDestroy();
    });
  }

  private onInit() {
    const el = this.input.nativeElement;
    this.cleave = new Cleave(el, {
      phone: true,
      phoneRegionCode: 'AU',
    });
  }

  private onDestroy() {}
}
