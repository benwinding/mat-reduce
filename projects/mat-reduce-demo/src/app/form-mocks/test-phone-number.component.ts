import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  template: `
    <h1>form-phone-number Testing</h1>

    <form-toggle
      [formControl]="formControlEnabled"
      placeholder="Form Enabled"
    ></form-toggle>

    <form-phone
      placeholder="Input phone number"
      phoneRegionCode="AU"
      [formControl]="testControl"
    >
    </form-phone>

    <h3>Value</h3>
    <pre>
    {{ testControl.value | json }}
    </pre
    >
  `
})
export class TestPhoneNumberComponent {
  formControlEnabled = new FormControl(true);

  testControl = new FormControl('08 1234 5678');

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
