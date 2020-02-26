import { Component } from '@angular/core';
import { of, Observable } from 'rxjs';

import { FormControl } from '@angular/forms';
import { Tag } from '../from-mat-reduce-core';

function makeFriend(name: string): Tag {
  return {
    id: Math.random()
      .toString(32)
      .slice(2),
    name
  };
}

const friendObjectArray = [
  makeFriend('Frank'),
  makeFriend('Albert'),
  makeFriend('John')
];

const friendObjectArray2 = [makeFriend('Frank')];

@Component({
  template: `
    <h1>form-select-object Testing</h1>

    <form-toggle
      [formControl]="formControlEnabled"
      placeholder="Form Enabled"
    ></form-toggle>

    <h3>Single (Object)</h3>
    <form-select-object
      placeholder="Select a friend!"
      [formControl]="testControl"
      [selectionObjects]="selectChoices$ | async"
      selectionKey="name"
    >
    </form-select-object>
    <pre>{{ { 'control.value': testControl?.value } | json }}</pre>

    <h3>Multiple (Object)</h3>
    <form-select-object-multiple
      placeholder="Select a friend!"
      [formControl]="testControlMultiple"
      [selectionObjects]="selectChoices$ | async"
      selectionKey="name"
    >
    </form-select-object-multiple>
    <pre>{{ { 'control.value': testControlMultiple?.value } | json }}</pre>

    <h3>Single Autocomplete (Object)</h3>
    <form-select-object-autocomplete
      placeholder="Select a friend!"
      [formControl]="testControlAutoComplete"
      [selectionObjects]="selectChoices$ | async"
      [displayWith]="displayWith"
    >
    </form-select-object-autocomplete>
    <pre>{{ { 'control.value': testControlAutoComplete?.value } | json }}</pre>

    <h3>Multiple (Object)</h3>
    <form-select-object-multiple
      placeholder="Select a friend!"
      [formControl]="testControlMultiple1"
      [selectionObjects]="selectChoices$ | async"
      [compareObject]="compareObject"
      [displayWith]="displayWith2"
      [hasSelectAll]="true"
      selectionKey="name"
    >
    </form-select-object-multiple>
    <pre>{{ { 'control.value': testControlMultiple1?.value } | json }}</pre>
  `
})
export class TestSelectObjectComponent {
  formControlEnabled = new FormControl(true);

  testControl = new FormControl(friendObjectArray[0]);
  testControlMultiple = new FormControl(friendObjectArray.slice(0, 2));
  testControlMultiple1 = new FormControl(friendObjectArray2.slice(0, 1));
  testControlAutoComplete = new FormControl(friendObjectArray[0]);

  selectChoices$: Observable<Tag[]> = of(friendObjectArray);

  public compareObject = (l, r) => l.name === r.name;
  public displayWith2 = o => `${o.name} +++ ${o.id}`;

  constructor() {
    this.formControlEnabled.valueChanges.subscribe(isEnabled => {
      if (isEnabled) {
        this.testControl.enable();
        this.testControlMultiple.enable();
      } else {
        this.testControl.disable();
        this.testControlMultiple.disable();
      }
    });
  }

  displayWith(obj: Tag) {
    if (!obj) {
      return '-';
    }
    return obj.name + ' | (' + obj.id + ')';
  }
}
