// tslint:disable: ban-types

export interface FormSelectObjectInterface {
  selectionObjects: Object[];
  selectionKey: string;
  selectionValue: string;
  compareObject: (l1: {}, l2: {}) => boolean;
  displayWith: (o: Object) => string;
}
