import {
  ControlValueAccessor,
  FormControl,
  Validator,
  ValidatorFn
} from '@angular/forms';
import { Subject } from 'rxjs';
import { OnDestroy, OnInit, Input, Directive } from '@angular/core';
import { takeUntil, auditTime, take } from 'rxjs/operators';
import { ConvertToTitleCase } from '../utils/case-helper';
import { v4 as uuidv4 } from 'uuid';

@Directive()
export class FormBase<T>
  implements OnInit, OnDestroy, ControlValueAccessor, Validator {
  internalControl: FormControl = new FormControl();

  autoCompleteObscureName: string;
  autoCompleteText = 'no';

  disabled = false;
  validationError: string;
  _validators: ValidatorFn;

  _value: T;

  @Input()
  appearance: 'outline' | 'fill' | 'standard';
  @Input()
  allowAutoComplete: boolean;
  @Input()
  formControlName: string;
  @Input()
  placeholder: string;
  @Input()
  debug = false;
  @Input()
  name: string = 'default-name';

  $nginit = new Subject();
  $ngdestroy = new Subject();

  _destroyed = new Subject();

  constructor() {
    this.$nginit.pipe(take(1)).subscribe(() => this._init());
    this.$ngdestroy.pipe(take(1)).subscribe(() => this._destroy());
  }

  ngOnInit() {
    this.$nginit.next()
  }

  ngOnDestroy() {
    this.$ngdestroy.next()
  }

  private _init() {
    this._destroyed.next();
    if (this.allowAutoComplete) {
      this.autoCompleteObscureName = this.formControlName || this.name;
      this.autoCompleteText = 'yes';
    } else {
      this.autoCompleteObscureName = uuidv4();
    }
    this.internalControl.valueChanges
      .pipe(takeUntil(this._destroyed))
      .pipe(auditTime(100))
      .subscribe(() => {
        this._value = this.internalControl.value;
        this.onChange(this._value);
        this.onTouched();
        // console.log('form-base-class: valueChanges', {val: this._value});
      });

    if (!this.placeholder) {
      const nameParsed = ConvertToTitleCase(this.formControlName + '');
      this.placeholder = nameParsed;
    }
  }

  private _destroy() {
    this._destroyed.next();
  }

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.internalControl.setValue(val);
  }

  writeValue(value: any): void {
    this.value = value;
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
    console.log('form-base-class: setDisabledState()', { isDisabled });
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

  onChange(inputValue) {
    this.validationError = this.CheckValueIsValid();
    if (this.validationError) {
      this.propagateOnChange(this.value);
    } else {
      this.propagateOnChange(inputValue);
    }
  }

  CheckValueIsValid(): string {
    return null;
  }
}
