import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  template: `
    <h1>form-text Testing</h1>

    <form-toggle
      [formControl]="formControlEnabled"
      placeholder="Form Enabled"
    ></form-toggle>

    <form-text
      placeholder="Type something friend!"
      [formControl]="testControl"
    >
    </form-text>

    <h5>Value</h5>
    <pre>{{testControl.value}}</pre>

    <h5>Password (maxlength=8)</h5>
    <form-text-password
      placeholder="Password please"
      [formControl]="testControl"
      maxlength="8"
    >
    </form-text-password>

    <h5>Value</h5>
    <pre>{{testControl.value}}</pre>

    <form-signature
      placeholder="Sign here!"
      [formControl]="testSignControl"
    >
    </form-signature>

    <h5>Value</h5>
    <pre>{{testSignControl.value}}</pre>
  `
})
export class TestTextComponent {
  formControlEnabled = new FormControl(true);

  testControl = new FormControl();
  testSignControl = new FormControl();

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
