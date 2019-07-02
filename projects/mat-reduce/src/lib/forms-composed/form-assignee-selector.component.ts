import { Component, Input, OnDestroy, OnInit, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { Subject, pipe } from 'rxjs';
import { FormBase } from '../forms/form-base-class';
import { Tag } from '../forms/Tag';
import { takeUntil, auditTime, tap } from 'rxjs/operators';
import {
  FormControlTypeSafe,
  FormBuilderTypedService
} from '../services/form-builder-typed.service';
import {
  Assignee,
  AssigneeType,
  User,
  StaffMember,
  Contractor
} from './form-assignee.models';
import { GetFirstContact } from './contact-helper';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-assignee-selector',
  template: `
    <mat-card>
      <div class="import">
        <form-select-string
          [formControl]="this.selectImportTypeControl"
          [selections]="this.assigneeTypes"
          placeholder="Assignee Type"
        >
        </form-select-string>
        <form-tag-single
          placeholder="Select Contractor"
          [hidden]="this.hideSelectContractor"
          [formControl]="this.selectItemContractorControl"
          [choices]="contractorsList"
          [customValues]="false"
        >
        </form-tag-single>

        <form-tag-single
          placeholder="Select Staff Member"
          [hidden]="this.hideSelectStaff"
          [formControl]="this.selectItemStaffControl"
          [choices]="staffList"
          [customValues]="false"
        >
        </form-tag-single>
      </div>
      <div *ngIf="!(this.value && this.value.name)">
        Please select an assignee
      </div>
      <div *ngIf="this.value as selectedAssignee">
        <h3>Selected Assignee:</h3>
        <div class="assignee">
          <p>
            Name: <strong>{{ selectedAssignee.name }}</strong>
          </p>
          <p>
            Email: <strong>{{ selectedAssignee.email }}</strong>
          </p>
          <p>
            Phone: <strong>{{ selectedAssignee.mobile }}</strong>
          </p>
        </div>
      </div>
    </mat-card>
  `,
  styles: [
    `
      .import {
        display: grid;
        grid-template-columns: 100%;
        grid-gap: 2%;
        margin-bottom: 10px;
      }
      .assignee p {
        margin: 0;
      }
      .assignee h3 {
        margin: 0;
      }
    `
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppFormAssigneeSelectorComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AppFormAssigneeSelectorComponent),
      multi: true
    }
  ]
})
export class AppFormAssigneeSelectorComponent extends FormBase<Assignee>
  implements OnInit, OnDestroy {
  @Input()
  currentUser: User;
  @Input()
  contractorsList: Tag[];
  @Input()
  staffList: Tag[];

  selectImportTypeControl: FormControlTypeSafe<string>;
  selectItemContractorControl: FormControlTypeSafe<Tag>;
  selectItemStaffControl: FormControlTypeSafe<Tag>;

  assigneeTypes: string[] = Object.keys(AssigneeType).map(k => AssigneeType[k]);

  hideSelectContractor = true;
  hideSelectStaff = true;

  destroyed = new Subject();

  constructor(private fb: FormBuilderTypedService) {
    super();
    this.selectImportTypeControl = this.fb.control<AssigneeType>();
    this.selectItemContractorControl = this.fb.control<Tag>();
    this.selectItemStaffControl = this.fb.control<Tag>();
  }

  makeLogPipe(logString: string) {
    return pipe(
      takeUntil(this.destroyed),
      auditTime(300),
      tap(val => console.log('assignee-selector: ', logString, { val }))
    );
  }

  checkStatus(control: FormControl, disabled: boolean) {
    if (disabled && !control.disabled) {
      control.disable();
    }
    if (!disabled && control.disabled) {
      control.enable();
    }
  }

  async ngOnInit() {
    // Check if main control has been disabled/enabled
    this.internalControl.statusChanges
      .pipe(this.makeLogPipe('control.statusChanges'))
      .subscribe(newVal => {
        const disabled = newVal === 'DISABLED';
        this.checkStatus(this.selectImportTypeControl, disabled);
        this.checkStatus(this.selectItemStaffControl, disabled);
        this.checkStatus(this.selectItemContractorControl, disabled);
      });
    // Check if import type has changed
    this.selectImportTypeControl.valueChanges
      .pipe(this.makeLogPipe('selectImportTypeControl.valueChanges'))
      .subscribe(val => {
        if (val === AssigneeType.myDetails) {
          return this.handleSelectedMyDetails();
        }
        if (val === AssigneeType.contractor) {
          this.hideSelectContractor = false;
          this.hideSelectStaff = true;
        }
        if (val === AssigneeType.staffMember) {
          this.hideSelectStaff = false;
          this.hideSelectContractor = true;
        }
      });
    // Check if selectItemContractorControl has changed
    this.selectItemContractorControl.valueChanges
      .pipe(this.makeLogPipe('selectItemContractorControl.valueChanges'))
      .subscribe(async (val: Tag) => {
        return this.handleSelectedSingleContractor(val);
      });
    // Check if selectItemStaffControl has changed
    this.selectItemStaffControl.valueChanges
      .pipe(this.makeLogPipe('selectItemStaffControl.valueChanges'))
      .subscribe(async (val: Tag) => {
        return this.handleSelectedSingleStaff(val);
      });
    const currentValue = this.value;
    if (currentValue) {
      this.selectImportTypeControl.patchValue(currentValue.type);
      if (currentValue.type === AssigneeType.contractor) {
        this.selectItemContractorControl.patchValue(currentValue.selected_tag);
      }
      if (currentValue.type === AssigneeType.staffMember) {
        this.selectItemStaffControl.patchValue(currentValue.selected_tag);
      }
    }
  }

  async ngOnDestroy() {
    this.destroyed.next();
  }

  get selectedImportType() {
    return this.selectImportTypeControl.value;
  }

  async handleSelectedSingleStaff(selected: Tag) {
    if (!selected) {
      console.warn('assignee-selector: no staff selected', { selected });
      return;
    }
    const staffMember = selected.obj as StaffMember;
    const newAssignee: Assignee = {
      selected_tag: selected,
      assignee_id: selected.id,
      type: AssigneeType.staffMember,
      name: staffMember.name,
      email: staffMember.email,
      mobile: staffMember.phone
    };
    console.log('assignee-selector: handleSelectedSingleStaff', {
      selected,
      newAssignee
    });
    this.value = newAssignee;
  }

  async handleSelectedSingleContractor(selected: Tag) {
    if (!selected) {
      console.warn('assignee-selector: no contractor selected', { selected });
      return;
    }
    const contractor = selected.obj as Contractor;
    const contact = GetFirstContact(contractor);
    const newAssignee: Assignee = {
      selected_tag: selected,
      assignee_id: selected.id,
      type: AssigneeType.contractor,
      name: contact.name,
      email: contact.email,
      mobile: contact.phone
    };
    this.value = newAssignee;
    console.log('assignee-selector: handleSelectedSingleContractor', {
      this_value: this.value,
      selected,
      newAssignee
    });
  }

  async handleSelectedMyDetails() {
    this.hideSelectStaff = true;
    this.hideSelectContractor = true;
    const user = this.currentUser;
    console.log(
      'assignee-selector: handleSelectedMyDetails() importing my details',
      {
        user
      }
    );
    const newAssignee: Assignee = {
      selected_obj: user,
      assignee_id: user.id,
      type: AssigneeType.myDetails,
      name: user['First Name'] + ' ' + user['Last Name'],
      email: user.Email || '',
      mobile: user.Phone || ''
    };
    this.value = newAssignee;
    console.log('assignee-selector: handleSelectedMyDetails() newAssignee', {
      newAssignee
    });
  }
}
