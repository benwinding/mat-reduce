import { Component } from '@angular/core';
import { of, Observable } from 'rxjs';

import { v1 as uuidv1 } from 'uuid';
import { FormControl } from '@angular/forms';
import { Tag } from '../forms/Tag';

function makeTag(name): Tag {
  return {
    name,
    id: uuidv1()
  };
}

const friendArray = [makeTag('Frank'), makeTag('Albert'), makeTag('John')];

@Component({
  selector: 'app-test-tags',
  template: `
    <mat-checkbox [formControl]="formControlCustomValues"
      >Custom Values ({{
        formControlCustomValues.value ? 'Yes' : 'No'
      }})</mat-checkbox
    >
    <mat-checkbox [formControl]="formControlRemovable"
      >Removable ({{ formControlRemovable.value ? 'Yes' : 'No' }})</mat-checkbox
    >
    <mat-checkbox [formControl]="formControlEnabled"
      >Form Enabled ({{ formControlEnabled.value ? 'Yes' : 'No' }})</mat-checkbox
    >

    <h1>Single</h1>

    <form-tag-single
      [customValues]="formControlCustomValues.value"
      [removable]="formControlRemovable.value"
      [formControl]="tagControlSingle"
      [choices]="selectChoices$ | async"
      placeholder="Select One Friend"
    >
    </form-tag-single>

    <h3>Form Value</h3>
    <pre>
      {{ tagControlSingle.value | json }}
    </pre
    >

    <h1>Multiple</h1>

    <form-tag-multiple
      [customValues]="formControlCustomValues.value"
      [removable]="formControlRemovable.value"
      [formControl]="tagControlMultiple"
      [choices]="selectChoices$ | async"
      placeholder="Select Many Friends"
    >
    </form-tag-multiple>

    <h3>Form Value</h3>
    <pre>
      {{ tagControlMultiple.value | json }}
    </pre
    >
  `
})
export class TestTagsComponent {
  formControlCustomValues = new FormControl();
  formControlRemovable = new FormControl(true);
  formControlEnabled = new FormControl(true);

  tagControlSingle = new FormControl(friendArray[0]);
  tagControlMultiple = new FormControl([friendArray[1]]);

  selectChoices$: Observable<Tag[]> = of(friendArray);

  constructor() {
    this.formControlEnabled.valueChanges.subscribe((isEnabled) => {
      if (isEnabled) {
        this.tagControlSingle.enable();
        this.tagControlMultiple.enable();
      } else {
        this.tagControlSingle.disable();
        this.tagControlMultiple.disable();
      }
    });
  }
}
