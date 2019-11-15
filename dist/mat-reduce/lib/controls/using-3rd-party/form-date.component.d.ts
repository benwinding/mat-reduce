import { OnInit } from '@angular/core';
import { FormBase } from '../form-base-class';
import { SimpleLog } from '../../utils/logger';
export declare class LibFormDateComponent extends FormBase<Date> implements OnInit {
    placeholder: string;
    isAfterToday: boolean;
    AfterDate: Date;
    logger: SimpleLog;
    ngOnInit(): void;
    readonly minDate: Date;
    CheckValueIsValid(): string;
    private isNewDateAfterThis;
}
