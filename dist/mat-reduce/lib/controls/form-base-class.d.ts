import { ControlValueAccessor, FormControl, Validator, ValidatorFn } from '@angular/forms';
import { Subject } from 'rxjs';
import { OnDestroy, OnInit } from '@angular/core';
export declare class FormBase<T> implements OnInit, OnDestroy, ControlValueAccessor, Validator {
    internalControl: FormControl;
    autoCompleteObscureName: string;
    _destroyed: Subject<{}>;
    disabled: boolean;
    validationError: string;
    _validators: ValidatorFn;
    _value: T;
    appearance: 'outline' | 'fill' | 'standard';
    allowAutoComplete: boolean;
    formControlName: string;
    placeholder: string;
    debug: boolean;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    init(): void;
    destroy(): void;
    value: T;
    writeValue(value: any): void;
    propagateOnChange: any;
    registerOnChange(fn: any): void;
    onTouched: any;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    validate(c: FormControl): {
        validationError: {
            valid: boolean;
        };
    };
    private onChange;
    CheckValueIsValid(): string;
}
