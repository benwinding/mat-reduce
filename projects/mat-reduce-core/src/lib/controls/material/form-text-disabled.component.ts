import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
import {
  FormControlTypeSafe,
  FormBuilderTypedService
} from '../../services/form-builder-typed.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-text-disabled',
  template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <input
        matInput
        [placeholder]="placeholder"
        [formControl]="disabledControl"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
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
      useExisting: forwardRef(() => LibFormTextDisabledComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormTextDisabledComponent),
      multi: true
    }
  ]
})
export class LibFormTextDisabledComponent extends FormBase<string>
  implements OnInit {
  disabledControl: FormControlTypeSafe<string>;

  constructor(private fb: FormBuilderTypedService) {
    super();
    this.disabledControl = this.fb.control<string>({
      value: '',
      disabled: true
    });
  }

  ngOnInit() {
    this.disabledControl.setValue(this.internalControl.value);
    this.internalControl.valueChanges
      .pipe(takeUntil(this._destroyed))
      .subscribe(() => {
        this.disabledControl.setValue(this.internalControl.value);
      });
  }
}
