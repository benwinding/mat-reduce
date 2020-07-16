import { Component } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

@Component({
  template: `
    <h1>form-text Testing</h1>

    <form-toggle
      [formControl]="formControlEnabled"
      placeholder="Form Enabled"
    ></form-toggle>

    <form-date
      *ngIf="loaded"
      debug="true"
      [formControl]="AfterDateControl"
      placeholder="AfterDate"
    >
    </form-date>
    <form-date
      *ngIf="loaded"
      debug="true"
      [formControl]="testControl"
      [AfterDate]="AfterDateControl?.value"
      placeholder="Must be after [AfterDate]!"
    >
    </form-date>

    <h4>Value</h4>
    <pre *ngIf="testControl as c">
    {{ { value: c.value, valid: c.valid } | json }}
  </pre
    >
    <div style="width: 400px;">
      <form-date
        debug="true"
        *ngIf="loaded"
        [formControl]="testControlRequired"
        placeholder="Select date! (Required)"
      >
      </form-date>
    </div>
    <h4>Value</h4>
    <pre *ngIf="testControlRequired as c">
    {{ { value: c.value, valid: c.valid } | json }}
  </pre
    >
  `,
})
export class TestDateComponent {
  formControlEnabled = new FormControl(true);
  loaded = false;

  testControl = new FormControl(new Date());
  AfterDateControl = new FormControl(new Date());
  testControlRequired = new FormControl(null, Validators.required);

  constructor() {
    this.formControlEnabled.valueChanges.subscribe((isEnabled) => {
      if (isEnabled) {
        this.testControl.enable();
        this.testControlRequired.enable();
        setTimeout(() => {
          this.loaded = true;
        }, 1000);
      } else {
        this.testControlRequired.disable();
        this.testControl.disable();
      }
    });
  }
}
