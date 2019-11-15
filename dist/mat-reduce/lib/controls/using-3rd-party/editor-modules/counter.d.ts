import 'quill';
import { Subject } from 'rxjs';
export interface QuillCounterConfig {
    container: string;
    units: 'words' | 'chars' | 'kb';
}
export interface QuillInstance {
    on: any;
    getText: any;
    root: any;
}
export default class Counter {
    quill: QuillInstance;
    options: QuillCounterConfig;
    updateTrigger: Subject<{}>;
    constructor(quill: any, options: any);
    calculate(): any;
}
