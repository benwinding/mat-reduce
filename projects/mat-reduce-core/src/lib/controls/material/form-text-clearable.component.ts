import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-text-clearable',
  template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <input
        *ngIf="!disabled && !locked"
        matInput
        [placeholder]="placeholder"
        [formControl]="internalControl"
        [name]="autoCompleteObscureName"
        [maxlength]="maxlength"
        autocomplete="autoCompleteText"
      />
      <input
        *ngIf="disabled || locked"
        matInput
        [placeholder]="placeholder"
        [disabled]="true"
        [value]="value"
        [name]="autoCompleteObscureName"
        [autocomplete]="autoCompleteText"
      />
      <mat-icon
        matSuffix
        class="has-pointer"
        *ngIf="!disabled"
        (click)="onClickEditLock()"
      >
        {{ locked ? 'edit' : 'locked' }}
      </mat-icon>
      <mat-icon matSuffix *ngIf="disabled" class="is-grey">
        edit
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
      useExisting: forwardRef(() => LibFormTextClearableComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormTextClearableComponent),
      multi: true
    }
  ]
})
export class LibFormTextClearableComponent extends FormBase<string> {

  @Input()
  locked = true;
  @Input()
  maxlength: number;

  onClickEditLock() {
    this.locked = !this.locked;
    const isEditabled = !this.locked && !this.disabled;
    if (isEditabled) {
      this.internalControl.enable();
    } else {
      this.internalControl.disable();
    }
  }
}
