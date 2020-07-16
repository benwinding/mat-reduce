import { Component } from '@angular/core';
import { of, Observable } from 'rxjs';

import { FormControl } from '@angular/forms';

@Component({
  template: `
    <h1>form-number Testing</h1>

    <form-toggle
      [formControl]="formControlEnabled"
      placeholder="Form Enabled"
    ></form-toggle>

    <form-number
      placeholder="Choose a number"
      [formControl]="testControl"
    >
    </form-number>

    <h3>Value</h3>
    <pre>
    {{ testControl.value | json }}
    </pre
    >
  `
})
export class TestNumberComponent {
  formControlEnabled = new FormControl(true);

  testControl = new FormControl();

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
