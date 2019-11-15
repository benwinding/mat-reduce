import { OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { FormBase } from '../form-base-class';
import { Tag } from '../material/Tag';
import { FormControlTypeSafe, FormBuilderTypedService } from '../../services/form-builder-typed.service';
import { Assignee, User } from './form-assignee.models';
export declare class LibFormAssigneeSelectorComponent extends FormBase<Assignee> implements OnInit, OnDestroy {
    private fb;
    currentUser: User;
    contractorsList: Tag[];
    staffList: Tag[];
    selectImportTypeControl: FormControlTypeSafe<string>;
    selectItemContractorControl: FormControlTypeSafe<Tag>;
    selectItemStaffControl: FormControlTypeSafe<Tag>;
    assigneeTypes: string[];
    hideSelectContractor: boolean;
    hideSelectStaff: boolean;
    destroyed: Subject<{}>;
    constructor(fb: FormBuilderTypedService);
    makeLogPipe(logString: string): import("rxjs/internal/types").UnaryFunction<import("rxjs/internal/Observable").Observable<{}>, import("rxjs/internal/Observable").Observable<{}>>;
    checkStatus(control: FormControl, disabled: boolean): void;
    ngOnInit(): Promise<void>;
    ngOnDestroy(): Promise<void>;
    readonly selectedImportType: string;
    handleSelectedSingleStaff(selected: Tag): Promise<void>;
    handleSelectedSingleContractor(selected: Tag): Promise<void>;
    handleSelectedMyDetails(): Promise<void>;
}
