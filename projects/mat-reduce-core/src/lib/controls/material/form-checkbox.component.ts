import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-checkbox',
  template: `
    <div class="full-width">
      <mat-checkbox
        [formControl]="internalControl"
        [name]="name"
      >
        {{ placeholder }} ({{ value ? yes : no }})
      </mat-checkbox>
    </div>
  `,
  styles: [
    `
      .full-width {
        width: 100%;
        padding-bottom: 15px;
      }
    `
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LibFormCheckboxComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormCheckboxComponent),
      multi: true
    }
  ]
})
export class LibFormCheckboxComponent extends FormBase<string> {
  @Input()
  yes = 'Yes';
  @Input()
  no = 'No';
}
