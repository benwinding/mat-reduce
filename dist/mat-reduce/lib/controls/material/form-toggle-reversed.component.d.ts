import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBase } from '../form-base-class';
export declare class LibFormToggleReversedComponent extends FormBase<boolean> implements OnInit {
    yes: string;
    no: string;
    reversedControl: FormControl;
    private lockControl;
    ngOnInit(): void;
}
