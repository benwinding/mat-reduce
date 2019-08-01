import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from './form-base-class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-toggle',
  template: `
    <div class="full-width">
      <mat-slide-toggle
        [formControl]="internalControl"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
      >
        {{ placeholder }} ({{ value ? yes : no }})
      </mat-slide-toggle>
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
      useExisting: forwardRef(() => AppFormToggleComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AppFormToggleComponent),
      multi: true
    }
  ]
})
export class AppFormToggleComponent extends FormBase<string> {
  @Input()
  yes = 'Yes';
  @Input()
  no = 'No';
}
