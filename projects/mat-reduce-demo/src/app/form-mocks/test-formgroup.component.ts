import { Component } from '@angular/core';
import { of, Observable } from 'rxjs';

import { v1 as uuidv1 } from 'uuid';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Tag } from 'projects/mat-reduce/src/core/public_api';

function makeTag(name): Tag {
  return {
    name,
    id: uuidv1()
  };
}

const friendArray = [makeTag('Frank'), makeTag('Albert'), makeTag('John')];

@Component({
  template: `
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

    <h1>Multiple Required</h1>
    <form [formGroup]="formGroup">
      <form-tag-multiple
        [customValues]="formControlCustomValues.value"
        [removable]="formControlRemovable.value"
        formControlName="tags"
        [choices]="selectChoices$ | async"
        placeholder="formControlName=tags"
      >
      </form-tag-multiple>
      <form-tag-multiple
        [customValues]="formControlCustomValues.value"
        [removable]="formControlRemovable.value"
        formControlName="tagsRequiredNull"
        [choices]="selectChoices$ | async"
        placeholder="formControlName=tagsRequiredNull"
      >
      </form-tag-multiple>
      <form-tag-multiple
        [customValues]="formControlCustomValues.value"
        [removable]="formControlRemovable.value"
        formControlName="tagsRequired"
        [choices]="selectChoices$ | async"
        placeholder="formControlName=tagsRequired"
      >
      </form-tag-multiple>
    </form>

    <h3>Form Group Value</h3>
    <pre>
      {{ formGroup.value | json }}
    </pre
    >
  `
})
export class TestFormGroupComponent {
  formControlCustomValues = new FormControl();
  formControlRemovable = new FormControl(true);
  formControlEnabled = new FormControl(true);

  formGroup = new FormGroup({
    tags: new FormControl([]),
    tagsRequiredNull: new FormControl(null, Validators.required),
    tagsRequired: new FormControl([], Validators.required)
  });

  selectChoices$: Observable<Tag[]> = of(friendArray);

  constructor() {
    console.log({ formGroup: this.formGroup });
    this.formControlEnabled.valueChanges.subscribe(isEnabled => {
      if (isEnabled) {
        this.formGroup.enable();
      } else {
        this.formGroup.disable();
      }
    });
  }
}
