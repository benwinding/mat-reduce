import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-text-icons',
  template: `
    <mat-form-field class="full-width">
      <mat-icon matPrefix class="has-pointer" *ngIf="prefixIcon">
        {{ prefixIcon }}
      </mat-icon>
      <input
        matInput
        [formControl]="internalControl"
        [placeholder]="placeholder"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
      />
      <mat-icon
        matSuffix
        class="has-pointer"
        *ngIf="!disabled && clearable"
        (click)="onClickClear()"
      >
        clear
      </mat-icon>
    </mat-form-field>
  `,
  styles: [
    `
      .is-grey {
        color: grey;
      }
    `
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LibFormTextIconsComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormTextIconsComponent),
      multi: true
    }
  ]
})
export class LibFormTextIconsComponent extends FormBase<string> {

  @Input()
  clearable = true;
  @Input()
  prefixIcon = 'search';

  onClickClear() {
    this.internalControl.reset();
  }
}
