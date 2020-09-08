import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  AbstractControlOptions,
  AsyncValidatorFn
} from '@angular/forms';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class FormControlWithLabel extends FormControl {
  constructor(value: any, validators: any, public label: string) {
    super(value, validators);
  }
}

export class FormArrayWithLabel extends FormArray {
  constructor(value: any, validators: any, public label: string) {
    super(value, validators);
  }
}

export type FormGroupControlsOf<T> = {
  [P in keyof T]: FormControl | FormGroup | FormArray | FormControlWithLabel
};

export abstract class FormGroupTypeSafe<T> extends FormGroup {
  // give the value a custom type s
  value: T;
  valueChanges: Observable<T>;
  label: string;
  setValue(newValue: T) {
    super.setValue(newValue);
  }

  // create helper methods to achieve this syntax eg: this.form.getSafe(x => x.heroName).patchValue('Himan')
  public abstract getSafe(
    propertyFunction: (typeVal: T) => any
  ): AbstractControl;
  public abstract setControlSafe(
    propertyFunction: (typeVal: T) => any,
    control: AbstractControl
  ): void;
  // If you need more function implement declare them here but implement them on FormBuilderTypedService.group instantiation.
}

export abstract class FormArrayTypeSafe<T> extends FormArray {
  value: T[];
  valueChanges: Observable<T[]>;
  at(index: number): FormControlTypeSafe<T> | FormGroupTypeSafe<T> {
    return super.at(index) as any;
  }
}

export abstract class FormControlTypeSafe<T> extends FormControl {
  value: T;
  valueChanges: Observable<T>;
  setValue(newValue: T) {
    super.setValue(newValue);
  }
}

@Injectable()
export class FormBuilderTypedService extends FormBuilder {
  control<T>(
    formState?: any,
    validatorOrOpts?:
      | ValidatorFn
      | ValidatorFn[]
      | AbstractControlOptions
      | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ): FormControlTypeSafe<T> {
    const control = super.control(
      formState,
      validatorOrOpts,
      asyncValidator
    ) as FormControlTypeSafe<T>;
    return control;
  }
  array<T>(
    controlsConfig:
      | FormGroupControlsOf<T>[]
      | FormGroupTypeSafe<T>[]
      | FormControlTypeSafe<T>[],
    extra?: {
      [key: string]: any;
    } | null
  ): FormArrayTypeSafe<T> {
    const arr = super.array(controlsConfig, extra) as FormArrayTypeSafe<T>;

    return arr;
  }
  // override group to be type safe
  group<T>(
    controlsConfig: FormGroupControlsOf<T>,
    extra?: {
      [key: string]: any;
    } | null
  ): FormGroupTypeSafe<T> {
    /*NOTE the return FormGroupTypeSafe<T> */

    // instantiate group from angular type
    const gr = super.group(controlsConfig, extra) as FormGroupTypeSafe<T>;
    if (extra) {
      gr.label = extra['label'];
    }

    const getPropertyName = (propertyFunction: Function): string => {
      //  https://github.com/dsherret/ts-nameof - helped me with the code below, THANX!!!!
      // propertyFunction.toString() sample value:
      //   function(x) { return x.hero.address.postcode;}
      // we need the 'hero.address.postcode'
      // for gr.get('hero.address.postcode') function
      const regex = /(?:\s\=\>\s)*?(?:[\s]*return[\s]*)*?(?:[\w]*\.){1}([\w\.]*)/;
      const result = regex.exec(propertyFunction.toString());
      return result[1];
    };

    if (gr) {
      // implement getSafe method
      gr.getSafe = (propertyFunction: (typeVal: T) => any): AbstractControl => {
        const getStr = getPropertyName(propertyFunction);
        // console.log(getStr);
        const p = gr.get(getStr) as FormGroupTypeSafe<T>;
        return p;
      };

      // implement setControlSafe
      gr.setControlSafe = (
        propertyFunction: (typeVal: T) => any,
        control: AbstractControl
      ): void => {
        const getStr = getPropertyName(propertyFunction);
        // console.log(getStr);
        gr.setControl(getStr, control);
      };
    }

    return gr;
  }
}
