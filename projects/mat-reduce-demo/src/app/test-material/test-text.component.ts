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
    <pre>{{ testControl.value }}</pre>

    <h5>Password (maxlength=8)</h5>
    <form-text-password
      placeholder="Password please"
      [formControl]="testControl2"
      [maxlength]="8"
    >
    </form-text-password>

    <h5>Value</h5>
    <pre>{{ testControl2.value }}</pre>

    <h5>Phone Number</h5>
    <form-phone
      placeholder="Phone Number"
      [formControl]="testControl3"
    >
    </form-phone>

    <h5>Value</h5>
    <pre>{{ testControl3.value }}</pre>
  `,
})
export class TestTextComponent {
  formControlEnabled = new FormControl(true);

  testControl = new FormControl();
  testControl2 = new FormControl();
  testControl3 = new FormControl();

  constructor() {
    this.formControlEnabled.valueChanges.subscribe((isEnabled) => {
      if (isEnabled) {
        this.testControl.enable();
        this.testControl2.enable();
        this.testControl3.enable();
      } else {
        this.testControl.disable();
        this.testControl2.disable();
        this.testControl3.disable();
      }
    });
  }
}
