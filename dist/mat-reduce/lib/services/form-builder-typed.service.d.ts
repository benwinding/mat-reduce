import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, AbstractControlOptions, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
export declare class FormControlWithLabel extends FormControl {
    label: string;
    constructor(value: any, validators: any, label: string);
}
export declare class FormArrayWithLabel extends FormArray {
    label: string;
    constructor(value: any, validators: any, label: string);
}
export declare type FormGroupControlsOf<T> = {
    [P in keyof T]: FormControl | FormGroup | FormArray | FormControlWithLabel;
};
export declare abstract class FormGroupTypeSafe<T> extends FormGroup {
    value: T;
    label: string;
    setValue(newValue: T): void;
    abstract getSafe(propertyFunction: (typeVal: T) => any): AbstractControl;
    abstract setControlSafe(propertyFunction: (typeVal: T) => any, control: AbstractControl): void;
}
export declare abstract class FormArrayTypeSafe<T> extends FormArray {
    value: T[];
    at(index: number): FormControlTypeSafe<T> | FormGroupTypeSafe<T>;
}
export declare abstract class FormControlTypeSafe<T> extends FormControl {
    value: T;
    valueChanges: Observable<T>;
    setValue(newValue: T): void;
}
export declare class FormBuilderTypedService extends FormBuilder {
    control<T>(formState?: any, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null): FormControlTypeSafe<T>;
    array<T>(controlsConfig: FormGroupControlsOf<T>[] | FormGroupTypeSafe<T>[] | FormControlTypeSafe<T>[], extra?: {
        [key: string]: any;
    } | null): FormArrayTypeSafe<T>;
    group<T>(controlsConfig: FormGroupControlsOf<T>, extra?: {
        [key: string]: any;
    } | null): FormGroupTypeSafe<T>;
}
