import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-number',
  template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <input
        matInput
        type="number"
        [min]="min"
        [max]="max"
        [step]="step"
        [placeholder]="placeholder"
        [formControl]="internalControl"
        [name]="autoCompleteObscureName"
        [autocomplete]="autoCompleteText"
      />
    </mat-form-field>
  `,
  styles: [
    `
      .full-width {
        width: 100%;
      }
    `
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LibFormNumberComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormNumberComponent),
      multi: true
    }
  ]
})
export class LibFormNumberComponent extends FormBase<number> implements OnInit {
  @Input()
  min = 0;
  @Input()
  max = 100;
  @Input()
  step = 1;
}
