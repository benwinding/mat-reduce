import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-textarea',
  template: `
    <mat-form-field class="full-width">
      <textarea
        matInput
        [rows]="rows"
        [placeholder]="placeholder"
        [maxlength]="maxlength"
        [formControl]="internalControl"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
      ></textarea>
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
      useExisting: forwardRef(() => LibFormTextAreaComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormTextAreaComponent),
      multi: true
    }
  ]
})
export class LibFormTextAreaComponent extends FormBase<string> {
  @Input()
  rows = 4;
  @Input()
  maxlength: number;
}
