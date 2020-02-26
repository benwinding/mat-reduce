import { pipe, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FormSelectObjectInterface } from '../controls/material/form-select-interfaces';
// tslint:disable: ban-types

export function compareObjectDefault(l1: {}, l2: {}): boolean {
  if (!l1 || !l2) {
    return false;
  }
  let json1: string;
  let json2: string;
  try {
    json1 = JSON.stringify(l1);
    json2 = JSON.stringify(l2);
  } catch (error) {
    return false;
  }
  if (json1 !== json2) {
    return false;
  }
  return true;
}

export interface OptionKeyValue {
  label: string;
  value: Object;
}

export function TransformSelectionsPipe(control: FormSelectObjectInterface, $inputOptions: Observable<Object[]>) {
  return $inputOptions.pipe(
    filter(a => !!a),
    map(options =>
      options.map(o => {
        const labelString = TransformToLabel(control, o);
        const oNew: OptionKeyValue = {
          value: o,
          label: labelString
        };
        return oNew;
      })
    )
  );
}

export function TransformToLabel(control: FormSelectObjectInterface, o: Object): string {
  if (!o || typeof o !== 'object') {
    return '-';
  }
  if (typeof control.selectionKey === 'string') {
    return o[control.selectionKey];
  }
  if (typeof control.displayWith === 'function') {
    return control.displayWith(o);
  }
  return '-';
}
