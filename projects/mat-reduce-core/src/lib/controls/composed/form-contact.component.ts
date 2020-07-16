import { Component, Input, forwardRef, OnInit } from '@angular/core';
import { Contact } from './form-assignee.models';
import { FormBase } from '../form-base-class';
import { FormControl, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { takeUntil, take, delay } from 'rxjs/operators';
import { FormBuilderTypedService, FormGroupTypeSafe } from '../../services/form-builder-typed.service';

@Component({
  selector: 'form-contact',
  template: `
    <form [formGroup]="contactGroup">
      <form-text placeholder="Name *" formControlName="name"> </form-text>
      <form-text
        *ngIf="!emailRequired"
        placeholder="Email"
        formControlName="email"
      >
      </form-text>
      <form-text
        *ngIf="emailRequired"
        placeholder="Email *"
        formControlName="email"
      >
      </form-text>
      <form-text placeholder="Business Phone" formControlName="phone">
      </form-text>
    </form>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LibFormGroupContactComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormGroupContactComponent),
      multi: true
    }
  ]
})
export class LibFormGroupContactComponent extends FormBase<Contact> implements OnInit {
  contactGroup: FormGroupTypeSafe<Contact>;

  @Input()
  emailRequired = true;

  constructor(private fb: FormBuilderTypedService) {
    super();
    this.$nginit.pipe(take(1)).subscribe(() => this.init());
  }

  init() {
    this.contactGroup = this.fb.group<Contact>({
      id: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      phone: new FormControl()
    });
    this.contactGroup.valueChanges
      .pipe(takeUntil(this._destroyed))
      .subscribe(c => {
        this.value = c;
      });

    this.internalControl.statusChanges
      .pipe(takeUntil(this._destroyed))
      .subscribe(newVal => {
        const disabled = newVal === 'DISABLED';
        const shouldDisable = disabled && this.contactGroup.enabled;
        const shouldEnable = !disabled && !this.contactGroup.enabled;
        if (shouldDisable) {
          this.contactGroup.disable()
        }
        if (shouldEnable) {
          this.contactGroup.enable()
        }
      });
  }

  writeValue(value: Contact): void {
    this.value = value;
    this.contactGroup.patchValue(value);
  }
}
