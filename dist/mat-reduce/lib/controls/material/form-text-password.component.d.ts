import { OnInit } from '@angular/core';
import { FormBase } from '../form-base-class';
export declare class LibFormTextPasswordComponent extends FormBase<string> implements OnInit {
    maxlength: number;
    readonly inputType: "password" | "text";
    hidePassword: boolean;
    toggleHide(): void;
}
