import { Component, forwardRef, Input, OnInit, OnDestroy } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from './form-base-class';
import {
  FormControlTypeSafe,
  FormBuilderTypedService
} from '../services/form-builder-typed.service';
import { Subscription } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-text-disabled',
  template: `
    <mat-form-field class="full-width">
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
      useExisting: forwardRef(() => AppFormTextDisabledComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AppFormTextDisabledComponent),
      multi: true
    }
  ]
})
export class AppFormTextDisabledComponent extends FormBase<string>
  implements OnInit, OnDestroy {

  @Input()
  rows = 4;

  disabledControl: FormControlTypeSafe<string>;
  disabledControlSubscription: Subscription;

  constructor(private fb: FormBuilderTypedService) {
    super();
    this.disabledControl = this.fb.control<string>({
      value: '',
      disabled: true
    });
  }

  ngOnInit() {
    this.disabledControl.setValue(this.internalControl.value);
    this.disabledControlSubscription = this.internalControl.valueChanges.subscribe(
      () => {
        this.disabledControl.setValue(this.internalControl.value);
      }
    );
  }

  ngOnDestroy() {
    this.disabledControlSubscription.unsubscribe();
  }
}
