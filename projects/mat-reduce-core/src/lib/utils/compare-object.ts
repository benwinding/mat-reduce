import { pipe, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
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

export function TransformSelections(
  $inputOptions: Observable<Object[]>,
  selectionKey: string,
  displayWith: (o: Object) => string
) {
  return $inputOptions.pipe(
    filter(a => !!a),
    map(options =>
      options.map(o => {
        let labelString = '-';
        if (selectionKey) {
          labelString = o[selectionKey];
        }
        if (displayWith) {
          labelString = displayWith(o);
        }
        const oNew: OptionKeyValue = {
          value: o,
          label: labelString
        };
        return oNew;
      })
    )
  );
}
