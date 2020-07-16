import { Component, forwardRef, Input, OnInit, OnDestroy } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { FormBase } from '../form-base-class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-toggle',
  template: `
    <div class="full-width">
      <mat-slide-toggle
        ngDefaultControl
        [name]="name"
        [formControl]="internalControl"
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
      useExisting: forwardRef(() => LibFormToggleComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormToggleComponent),
      multi: true
    }
  ]
})
export class LibFormToggleComponent extends FormBase<boolean> implements OnInit, OnDestroy {
  @Input()
  yes = 'Yes';
  @Input()
  no = 'No';
}
