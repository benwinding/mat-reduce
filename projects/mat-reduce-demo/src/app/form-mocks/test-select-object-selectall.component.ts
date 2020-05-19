import { Component } from '@angular/core';
import { of, Observable } from 'rxjs';

import { FormControl, FormGroup } from '@angular/forms';
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

    <h3>Multiple (Object) SelectAll</h3>
    <form-select-object-multiple
      placeholder="Select a friend!"
      [formControl]="control"
      [selectionObjects]="selectChoices$ | async"
      [compareObject]="compareObject"
      [displayWith]="displayWith"
      [hasSelectAll]="true"
      selectionKey="name"
      selectionValue="id"
    >
    </form-select-object-multiple>
    <pre>{{ { 'control.value': control?.value } | json }}</pre>
  `
})
export class TestSelectObjectSelectAllComponent {
  formControlEnabled = new FormControl(true);

  selectChoices$: Observable<Tag[]> = of(friendObjectArray);

  control = new FormControl(friendObjectArray.slice(0, 2).map(c => c.id));

  public compareObject = (l, r) => l === r;
  public displayWith2 = o => `${o.name} +++ ${o.id}`;

  constructor() {
    this.formControlEnabled.valueChanges.subscribe(isEnabled => {
      if (isEnabled) {
        this.control.enable();
      } else {
        this.control.disable();
      }
    });
    this.control.valueChanges.subscribe(value => {
      console.log({ value });
    });
  }

  displayWith(obj: Tag) {
    if (!obj) {
      return '-';
    }
    return obj.name + ' | (' + obj.id + ')';
  }
}
