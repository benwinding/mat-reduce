import { Component } from '@angular/core';
import { of, Observable, Subject } from 'rxjs';

import { v1 as uuidv1 } from 'uuid';
import { FormControl, Validators } from '@angular/forms';
import { Tag } from 'projects/mat-reduce/src/lib/controls/material/Tag';

function makeTag(name): Tag {
  return {
    name,
    id: uuidv1()
  };
}

const friendArray = [
  makeTag('Frank'),
  makeTag('Rosie'),
  makeTag('Cindy'),
  makeTag('Albert'),
  makeTag('Franklin'),
  makeTag('John')
];

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

    <h1>Single</h1>

    <form-tag-single
      [debug]="true"
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

    <h1>Single Null</h1>

    <form-tag-single
      [debug]="true"
      [customValues]="formControlCustomValues.value"
      [removable]="formControlRemovable.value"
      [formControl]="tagControlSingleNull"
      [choices]="selectChoices$ | async"
      placeholder="Select One Friend"
    >
    </form-tag-single>

    <h3>Form Value</h3>
    <pre>
      {{ tagControlSingleNull.value | json }}
    </pre
    >

    <h1>Single Delayed</h1>

    <form-tag-single
      [debug]="true"
      [customValues]="formControlCustomValues.value"
      [removable]="formControlRemovable.value"
      [formControl]="tagControlSingleDelayed"
      [choices]="selectChoicesDelayed$ | async"
      placeholder="Select One Friend"
    >
    </form-tag-single>

    <h3>Form Value</h3>
    <pre>
      {{ tagControlSingleDelayed.value | json }}
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

    <h1>Multiple Required</h1>

    <form-tag-multiple
      [customValues]="formControlCustomValues.value"
      [removable]="formControlRemovable.value"
      [formControl]="tagControlMultipleRequired"
      [choices]="selectChoices$ | async"
      placeholder="* Select Many Friends"
    >
    </form-tag-multiple>
  `
})
export class TestTagsComponent {
  formControlCustomValues = new FormControl();
  formControlRemovable = new FormControl(true);
  formControlEnabled = new FormControl(true);

  tagControlSingle = new FormControl(friendArray[0]);
  tagControlSingleDelayed = new FormControl(null);
  tagControlSingleNull = new FormControl(null);
  tagControlMultiple = new FormControl([friendArray[1]]);
  tagControlMultipleRequired = new FormControl([], Validators.required);

  selectChoices$: Observable<Tag[]> = of(friendArray);
  selectChoicesDelayed$: Observable<Tag[]>;

  constructor() {
    console.log({
      tagControlMultipleRequired: this.tagControlMultipleRequired
    });
    this.formControlEnabled.valueChanges.subscribe(isEnabled => {
      if (isEnabled) {
        this.tagControlSingle.enable();
        this.tagControlSingleDelayed.enable();
        this.tagControlSingleNull.enable();
        this.tagControlMultiple.enable();
        this.tagControlMultipleRequired.enable();
      } else {
        this.tagControlSingle.disable();
        this.tagControlSingleDelayed.disable();
        this.tagControlSingleNull.disable();
        this.tagControlMultiple.disable();
        this.tagControlMultipleRequired.disable();
      }
    });

    const delayedChoices = new Subject<Tag[]>();
    this.selectChoicesDelayed$ = delayedChoices.asObservable();
    setTimeout(() => {
      delayedChoices.next([
        makeTag('Frank2'),
        makeTag('Albert2'),
        makeTag('John')
      ]);
    }, 1000);
  }
}
