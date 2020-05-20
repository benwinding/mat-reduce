import { Component } from '@angular/core';
import { of, Observable } from 'rxjs';

import { FormControl, FormGroup } from '@angular/forms';
import { Tag } from '../from-mat-reduce-core';
import { delay } from 'rxjs/operators';

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

@Component({
  template: `
    <h1>form-select-object-autocomplete Testing</h1>

    <form-toggle
      [formControl]="formControlEnabled"
      placeholder="Form Enabled"
    ></form-toggle>

    <h3>Single Autocomplete (Object)</h3>
    <form-select-object-autocomplete
      placeholder="Select a friend!"
      [formControl]="testControlAutoComplete"
      [selectionObjects]="selectChoices$ | async"
      [displayWith]="displayWith"
    >
    </form-select-object-autocomplete>
    <pre>{{ { 'control.value': testControlAutoComplete?.value } | json }}</pre>

    <h3>Single Autocomplete (Object) not-found</h3>
    <form-select-object-autocomplete
      placeholder="Select a friend!"
      [formControl]="testControlAutoCompleteNA"
      [selectionObjects]="selectChoices$ | async"
      [displayWith]="displayWith"
    >
    </form-select-object-autocomplete>
    <pre>{{ { 'control.value': testControlAutoComplete?.value } | json }}</pre>

    <h3>Single Autocomplete (string) not-found</h3>
    <form-select-string-autocomplete
      placeholder="Select a friend!"
      [formControl]="testControlAutoCompleteNA"
      [selections]="selectChoiceStrings$ | async"
    >
    </form-select-string-autocomplete>
    <pre>{{ { 'control.value': testControlAutoComplete?.value } | json }}</pre>
  `
})
export class TestSelectObjectAutocompleteComponent {
  formControlEnabled = new FormControl(true);

  selectChoices$: Observable<Tag[]> = of(friendObjectArray).pipe(delay(1000));
  selectChoiceStrings$: Observable<string[]> = of(friendObjectArray.map(a => a.name)).pipe(delay(1000));

  testControlAutoComplete = new FormControl(friendObjectArray[0]);
  testControlAutoCompleteNA = new FormControl('-');

  public compareObject = (l, r) => l.name === r.name;
  public displayWith2 = o => `${o.name} +++ ${o.id}`;

  constructor() {
    this.formControlEnabled.valueChanges.subscribe(isEnabled => {
      if (isEnabled) {
        this.testControlAutoComplete.enable();
      } else {
        this.testControlAutoComplete.disable();
      }
    });
    this.testControlAutoComplete.valueChanges.subscribe(value => {
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
