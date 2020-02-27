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

    <h3>Multiple (Object)</h3>
    <form [formGroup]="group">
      <form-select-object-multiple
        placeholder="Select a friend!"
        formControlName="friend"
        [selectionObjects]="selectChoices$ | async"
        [compareObject]="compareObject"
        [displayWith]="displayWith"
        [hasSelectAll]="true"
        selectionKey="name"
      >
      </form-select-object-multiple>
      <form-select-object-multiple
        placeholder="Select another friend!"
        formControlName="friend2"
        [selectionObjects]="selectChoices$ | async"
        [compareObject]="compareObject"
        [displayWith]="displayWith2"
        [hasSelectAll]="true"
        selectionKey="name"
      >
      </form-select-object-multiple>
    </form>
    <pre>{{ { 'control.value': group?.value } | json }}</pre>
  `
})
export class TestSelectObjectGroupedComponent {
  formControlEnabled = new FormControl(true);

  selectChoices$: Observable<Tag[]> = of(friendObjectArray);

  group = new FormGroup({
    friend: new FormControl(),
    friend2: new FormControl()
  });

  public compareObject = (l, r) => l.name === r.name;
  public displayWith2 = o => `${o.name} +++ ${o.id}`;

  constructor() {
    this.formControlEnabled.valueChanges.subscribe(isEnabled => {
      if (isEnabled) {
        this.group.enable();
      } else {
        this.group.disable();
      }
    });
    this.group.valueChanges.subscribe(value => {
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
