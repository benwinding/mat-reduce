import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  template: `
    <h1>form-quill-editor Testing</h1>

    <form-toggle
      [formControl]="formControlEnabled"
      placeholder="Form Enabled"
    ></form-toggle>

    <form-quill-editor
      placeholder="Type some HTML friend!"
      [formControl]="testControl"
    >
    </form-quill-editor>

    <h5>Value</h5>
    <pre>{{testControl.value}}</pre>
  `
})
export class TestEditorComponent {
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
