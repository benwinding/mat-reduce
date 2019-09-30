import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  template: `
    <h1>form-toggle Testing</h1>

    <form-toggle
      [formControl]="formControlEnabled"
      placeholder="Form Enabled"
    ></form-toggle>

    <h3>Normal</h3>
    <form-toggle
      placeholder="Normal Toggle"
      [formControl]="testControl"
    >
    </form-toggle>

    <h5>Value</h5>
    <pre>{{testControl.value}}</pre>

    <h3>Reversed</h3>
    <form-toggle-reversed
      placeholder="Reversed Toggle"
      [formControl]="testControlR"
    >
    </form-toggle-reversed>

    <h5>Value</h5>
    <pre>{{testControlR.value}}</pre>
  `
})
export class TestTogglesComponent {
  formControlEnabled = new FormControl(true);

  testControl = new FormControl(false);
  testControlR = new FormControl(false);

  constructor() {
    this.formControlEnabled.valueChanges.subscribe(isEnabled => {
      if (isEnabled) {
        this.testControl.enable();
        this.testControlR.enable();
      } else {
        this.testControl.disable();
        this.testControlR.disable();
      }
    });
  }
}
