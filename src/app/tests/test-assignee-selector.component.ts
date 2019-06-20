import { Component } from '@angular/core';
import { of, Observable } from 'rxjs';

import { v1 as uuidv1 } from 'uuid';
import { FormControl } from '@angular/forms';
import { Tag } from '../forms/Tag';
import { FormControlTypeSafe } from '../services/form-builder-typed.service';
import { Assignee, Contractor, StaffMember, User, blankContact } from '../forms-composed/form-assignee.models';

function makeStaff(staffName): StaffMember {
  return {
    id: uuidv1(),
    name: staffName,
    email: staffName + '@example.com',
    phone: '2194818482',
  };
}

function makeContractor(contractorsName: string): Contractor {
  return {
    id: uuidv1(),
    contactsArray: [
      {...blankContact(),
        name: contractorsName,
        phone: '123142125125',
        email: contractorsName.replace(' ', '.').toLowerCase() + '@example.com'
      },
    ]
  };
}

const contractorsList = [
  makeContractor('David Franklin'),
  makeContractor('Sam Degan'),
  makeContractor('Phillip Smithford'),
];
const staffList = [
  makeStaff('Abigale Waterford'),
  makeStaff('Fred Goodman'),
];
const currentUser: User = {
  id: '02184184y81y2481284',
  Email: 'string',
  'First Name': 'string',
  'Last Name': 'string',
  Phone: 'string',
};

@Component({
  selector: 'app-test-assignee-selector',
  template: `
    <mat-checkbox [formControl]="formControlEnabled"
      >Form Enabled ({{ formControlEnabled.value ? 'Yes' : 'No' }})</mat-checkbox
    >
    <h1>Assignee Selector</h1>
    <form-assignee-selector
      [contractorsList]="contractorsList$ | async"
      [staffList]="staffList$ | async"
      [currentUser]="currentUser$ | async"
    >
    </form-assignee-selector>
  `
})
export class TestAssigneeComponent {
  formControlEnabled = new FormControl(false);
  assigneeSelectorControl = new FormControlTypeSafe<Assignee>();

  contractorsList$: Observable<Contractor[]> = of(contractorsList);
  staffList$: Observable<StaffMember[]> = of(staffList);
  currentUser$: Observable<User> = of(currentUser);
}
