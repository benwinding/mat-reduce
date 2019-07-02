// tslint:disable: variable-name
import { ControlValueAccessor, FormControl, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';
import { OnDestroy, OnInit, Input } from '@angular/core';

import {v1 as uuidv1 } from 'uuid';
import { FormBuilderTypedService, FormControlTypeSafe } from '../services/form-builder-typed.service';

export class FormBase<T>
  implements OnInit, OnDestroy, ControlValueAccessor, Validator {
  internalControl: FormControlTypeSafe<T>;
  internalControlSubscription: Subscription;
  autoCompleteObscureName: string;

  disabled = false;
  validationError: string;

  @Input()
  placeholder: string;

  _value: T;

  constructor() {
    const fb = new FormBuilderTypedService();
    this.internalControl = fb.control<T>();
    // Garrentee that init and destroy are called
    // even if ngOnInit() or ngOnDestroy() are overriden
    const originalOnDestroy = this.ngOnDestroy;
    this.ngOnDestroy = () => {
      this.destroy();
      originalOnDestroy.apply(this);
    };
    const originalOnInit = this.ngOnInit;
    this.ngOnInit = () => {
      this.init();
      originalOnInit.apply(this);
    };
  }

  ngOnInit() {}

  ngOnDestroy() {}

  init() {
    this.autoCompleteObscureName = uuidv1();
    this.internalControlSubscription = this.internalControl.valueChanges.subscribe(
      () => {
        this._value = this.internalControl.value;
        this.onChange(this._value);
        this.onTouched();
        // console.log('form-base-class: valueChanges', {val: this._value});
      }
    );
  }

  destroy() {
    this.internalControlSubscription.unsubscribe();
  }

  get value() {
    return this._value;
  }

  set value(val) {
    this.internalControl.setValue(val);
  }

  writeValue(value: any): void {
    if (value) {
      this.value = value;
    }
  }

  propagateOnChange: any = () => {};
  registerOnChange(fn: any): void {
    this.propagateOnChange = fn;
  }

  onTouched: any = () => {};
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    setTimeout(() => {
      if (isDisabled) {
        this.internalControl.disable();
      } else {
        this.internalControl.enable();
      }
    });
  }

  public validate(c: FormControl) {
    const errors = c.errors;
    const value = c.value;
    // console.log('form-base-class: validate()', { errors, value });
    this.internalControl.setValidators(c.validator);
    return !this.validationError
      ? null
      : {
          validationError: {
            valid: false
          }
        };
  }

  private onChange(inputValue) {
    this.validationError = this.CheckValueIsValid(inputValue);
    if (this.validationError) {
      this.propagateOnChange(this.value);
    } else {
      this.propagateOnChange(inputValue);
    }
  }

  CheckValueIsValid(inputValue: T): string {
    return null;
  }
}
