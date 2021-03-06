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

export function TransformSelectionsPipe(
  control: FormSelectObjectInterface,
  $inputOptions: Observable<Object[]>
) {
  return $inputOptions.pipe(
    filter((a) => !!a),
    map((options) =>
      options.map((option) => {
        const labelString = TransformOptionToLabel(control, option);
        let selectionValue = option;
        if (!!control.selectionValue) {
          selectionValue = option[control.selectionValue];
        }
        const oNew: OptionKeyValue = {
          value: selectionValue,
          label: labelString,
        };
        return oNew;
      })
    )
  );
}

export function TransformSelectedToLabel(
  c: FormSelectObjectInterface,
  selectedValue: Object
): string {
  let selectedItem = selectedValue;
  if (c.selectionValue) {
    const options = c.$optionsInput.getValue();
    selectedItem = options.find((s) => s[c.selectionValue] === selectedValue);
  }
  return TransformOptionToLabel(c, selectedItem);
}

export function TransformOptionToLabel(
  c: FormSelectObjectInterface,
  option: Object
): string {
  if (!option || typeof option !== 'object') {
    return '-';
  }
  if (typeof c.selectionKey === 'string') {
    return option[c.selectionKey];
  }
  if (typeof c.displayWith === 'function') {
    return c.displayWith(option);
  }
  console.warn(
    'sorry couldnt generate label, either missing selectionKey or displayWith function',
    {
      control: c,
      selectedItem: option,
      option,
    }
  );
  return '--';
}
