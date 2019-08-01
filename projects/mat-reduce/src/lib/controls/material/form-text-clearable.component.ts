import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-text-clearable',
  template: `
    <mat-form-field class="full-width">
      <input
        *ngIf="!disabled && !locked"
        matInput
        [placeholder]="placeholder"
        [formControl]="internalControl"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
      />
      <input
        *ngIf="disabled || locked"
        matInput
        [disabled]="true"
        [value]="value"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
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
      useExisting: forwardRef(() => AppFormTextClearableComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AppFormTextClearableComponent),
      multi: true
    }
  ]
})
export class AppFormTextClearableComponent extends FormBase<string> {

  @Input()
  locked = true;

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
