import { Component } from '@angular/core';
import { of, Observable } from 'rxjs';

import { FormControl } from '@angular/forms';

function makeFriend(name): string {
  return name;
}

const friendArray = [
  makeFriend('Frank'),
  makeFriend('Albert'),
  makeFriend('John')
];

@Component({
  selector: 'app-test-select',
  template: `
    <h1>form-select Testing</h1>

    <form-toggle
      [formControl]="formControlEnabled"
      placeholder="Form Enabled"
    ></form-toggle>

    <form-select-string
      placeholder="Select a friend!"
      [formControl]="testControl"
      [selections]="selectChoices$ | async"
    >
    </form-select-string>
  `
})
export class TestSelectComponent {
  formControlEnabled = new FormControl(true);

  testControl = new FormControl(friendArray[0]);

  selectChoices$: Observable<string[]> = of(friendArray);

  constructor() {
    this.formControlEnabled.valueChanges.subscribe(isEnabled => {
      if (isEnabled) {
        this.testControl.enable();
      } else {
        this.testControl.disable();
      }
    });
  }
}
