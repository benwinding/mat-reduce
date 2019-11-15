import { OnInit } from '@angular/core';
import { FormBase } from '../form-base-class';
export declare class LibFormColorComponent extends FormBase<string> implements OnInit {
    defaultColor: string;
    ngOnInit(): void;
    onClickClear(e: Event): void;
}
