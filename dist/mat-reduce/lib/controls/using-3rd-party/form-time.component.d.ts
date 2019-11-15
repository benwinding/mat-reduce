import { OnInit } from '@angular/core';
import { FormBase } from '../form-base-class';
export declare class LibFormTimeComponent extends FormBase<string> implements OnInit {
    placeholder: string;
    format: number;
    min: string;
    max: string;
    defaultTime: string;
    minutesGap: number;
    required: boolean;
}
