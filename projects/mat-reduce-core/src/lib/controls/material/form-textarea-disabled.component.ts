import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
import {
  FormControlTypeSafe,
  FormBuilderTypedService
} from '../../services/form-builder-typed.service';
import { takeUntil, take } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-textarea-disabled',
  template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <textarea
        matInput
        [rows]="rows"
        [placeholder]="placeholder"
        [formControl]="disabledControl"
        [name]="name"
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
      useExisting: forwardRef(() => LibFormTextAreaDisabledComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormTextAreaDisabledComponent),
      multi: true
    }
  ]
})
export class LibFormTextAreaDisabledComponent extends FormBase<string>
  implements OnInit {
  @Input()
  rows = 4;

  disabledControl: FormControlTypeSafe<string>;

  constructor(private fb: FormBuilderTypedService) {
    super();
    this.disabledControl = this.fb.control<string>({
      value: '',
      disabled: true
    });
    this.$nginit.pipe(take(1)).subscribe(() => this.init());
  }

  init() {
    this.disabledControl.setValue(this.internalControl.value);
    this.internalControl.valueChanges
      .pipe(takeUntil(this._destroyed))
      .subscribe(() => {
        this.disabledControl.setValue(this.internalControl.value);
      });
  }
}
