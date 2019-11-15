import { OnDestroy, OnInit } from '@angular/core';
import { FormBase } from '../form-base-class';
import { Subject } from 'rxjs';
import { SimpleLog } from '../../utils/logger';
export declare class LibFormQuillEditorComponent extends FormBase<string> implements OnDestroy, OnInit {
    quillModules: any;
    maxImageWidth: number;
    placeholder: string;
    quillModulesUsed: any;
    onContentChanged: Subject<{}>;
    destroyed: Subject<{}>;
    logger: SimpleLog;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
