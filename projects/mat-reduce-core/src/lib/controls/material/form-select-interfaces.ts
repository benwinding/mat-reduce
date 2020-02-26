// tslint:disable: ban-types

export interface FormSelectObjectInterface {
  selectionObjects: Object[];
  selectionKey: string;
  compareObject: (l1: {}, l2: {}) => boolean;
  displayWith: (o: Object) => string;
}
