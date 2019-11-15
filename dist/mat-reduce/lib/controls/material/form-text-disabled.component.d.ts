import { OnInit } from '@angular/core';
import { FormBase } from '../form-base-class';
import { FormControlTypeSafe, FormBuilderTypedService } from '../../services/form-builder-typed.service';
export declare class LibFormTextDisabledComponent extends FormBase<string> implements OnInit {
    private fb;
    disabledControl: FormControlTypeSafe<string>;
    constructor(fb: FormBuilderTypedService);
    ngOnInit(): void;
}
