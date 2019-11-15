import { OnInit } from '@angular/core';
import { FormBase } from '../form-base-class';
export declare class LibFormNumberComponent extends FormBase<number> implements OnInit {
    min: number;
    max: number;
    step: number;
}
