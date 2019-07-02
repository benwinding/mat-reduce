import { Component } from '@angular/core';
import { of, Observable } from 'rxjs';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-test-select',
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
  `
})
export class TestTextComponent {
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
