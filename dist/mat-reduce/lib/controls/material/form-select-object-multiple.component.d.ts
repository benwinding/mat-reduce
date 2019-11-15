import { FormBase } from '../form-base-class';
declare function compareObject(l1: {}, l2: {}): boolean;
export declare class LibFormSelectObjectMultipleComponent extends FormBase<Object> {
    selectionObjects: Object[];
    selectionKey: string;
    compareObject: typeof compareObject;
}
export {};
