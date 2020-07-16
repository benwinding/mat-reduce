import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  template: `
    <h1>form-color Testing</h1>

    <form-toggle
      [formControl]="formControlEnabled"
      placeholder="Form Enabled"
    ></form-toggle>

    <pre>
      {{'formValue: ' + testControl.value}}
    </pre>

    <form-color
      placeholder="Test Colors!"
      [formControl]="testControl"
    >
    </form-color>
  `
})
export class TestColorComponent {
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
