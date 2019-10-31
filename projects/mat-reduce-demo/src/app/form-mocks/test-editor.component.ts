import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { map } from 'rxjs/operators';

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
      [quillModules]="{ htmlEditButton: {} }"
    >
    </form-quill-editor>

    <h5>Value</h5>
    <pre>{{ testControl.value }}</pre>

    <h5>HTML RENDERED</h5>
    <p [innerHTML]="testControl.value"></p>
  `
})
export class TestEditorComponent {
  formControlEnabled = new FormControl(true);

  testControl = new FormControl();

  trustedHTML: Observable<SafeHtml>;

  constructor(private ds: DomSanitizer) {
    this.formControlEnabled.valueChanges.subscribe(isEnabled => {
      if (isEnabled) {
        this.testControl.enable();
      } else {
        this.testControl.disable();
      }
    });

    this.trustedHTML = this.formControlEnabled.valueChanges
      .pipe
      // map(value => this.ds.bypassSecurityTrustHtml(value))
      ();
  }
}
