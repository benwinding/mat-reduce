import { Component } from '@angular/core';
import { of, Observable, Subject } from 'rxjs';

import { v1 as uuidv1 } from 'uuid';
import { FormControl, Validators } from '@angular/forms';
import { Tag } from '../from-mat-reduce-core';

function makeTag(name): Tag {
  return {
    name,
    id: uuidv1(),
  };
}

const friendArray = [
  'Albert',
  'Alison',
  'Cindy',
  'Daniel',
  'Dilbert',
  'Dylan',
  'Frank',
  'Franklin',
  'Franky',
  'John',
  'Robert',
  'Robin',
  'Rosie',
];

@Component({
  template: `
    <h1>form-tag-strings</h1>
    <form-toggle
      [formControl]="formControlEnabled"
      placeholder="Form Enabled"
    ></form-toggle>
    <form-toggle
      [formControl]="formControlRemovable"
      placeholder="Tags Removable"
    ></form-toggle>
    <form-toggle
      [formControl]="formControlCustomValues"
      placeholder="Tags Custom Values"
    ></form-toggle>

    <h1>Multiple</h1>

    <form-tag-strings
      [disableNotification]="true"
      [customValues]="formControlCustomValues.value"
      [removable]="formControlRemovable.value"
      [formControl]="tagControlMultiple"
      [choices]="selectChoices$ | async"
      [debug]="true"
      placeholder="Select Many Friends"
    >
    </form-tag-strings>

    <h3>Form Value</h3>
    <pre>
  {{ tagControlMultiple.value | json }}
</pre>
  `,
})
export class TestTagStringsComponent {
  formControlCustomValues = new FormControl(true);
  formControlRemovable = new FormControl(true);
  formControlEnabled = new FormControl(true);

  tagControlMultiple = new FormControl([friendArray[1]]);

  selectChoices$: Observable<string[]> = of(friendArray);

  constructor() {
    this.formControlEnabled.valueChanges.subscribe((isEnabled) => {
      if (isEnabled) {
        this.tagControlMultiple.enable();
      } else {
        this.tagControlMultiple.disable();
      }
    });
  }
}
