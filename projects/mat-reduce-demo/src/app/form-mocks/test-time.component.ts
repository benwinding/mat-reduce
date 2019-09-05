import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  template: `
    <h1>form-text Testing</h1>

    <form-toggle
      [formControl]="formControlEnabled"
      placeholder="Form Enabled"
    ></form-toggle>

    <form-time
      *ngIf="loaded"
      [formControl]="testControl"
      placeholder="Select A Time!"
    >
    </form-time>

    <pre>
      {{ testControl.value }}
    </pre
    >
  `
})
export class TestTimeComponent {
  formControlEnabled = new FormControl(true);
  loaded = false;

  testControl = new FormControl();
  testSignControl = new FormControl();

  constructor() {
    this.formControlEnabled.valueChanges.subscribe(isEnabled => {
      if (isEnabled) {
        this.testControl.enable();
        setTimeout(() => {
          this.loaded = true;
        }, 1000);
      } else {
        this.testControl.disable();
      }
    });
  }
}
