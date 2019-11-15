import { FormBase } from '../form-base-class';
declare function compareObject(l1: {}, l2: {}): boolean;
export declare class LibFormSelectObjectComponent extends FormBase<Object> {
    selectionObjects: Object[];
    selectionKey: string;
    compareObject: typeof compareObject;
    writeValue(newVal: Object): void;
}
export {};
