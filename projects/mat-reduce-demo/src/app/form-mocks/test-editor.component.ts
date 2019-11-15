import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { map, debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  template: `
    <h1>form-quill-editor Testing</h1>

    <form-toggle
      [formControl]="formControlEnabled"
      placeholder="Form Enabled"
    ></form-toggle>

    <form-text
      appearance="outline"
      [formControl]="inputTextControl"
      placeholder="Input text to send to editor"
    >
    </form-text>

    <form-quill-editor
      placeholder="Type some HTML friend!"
      [formControl]="testControl"
      [quillModules]="{ htmlEditButton: {} }"
      [debug]="true"
    >
    </form-quill-editor>

    <h5>Value</h5>
    <pre>{{ testControl.value }}</pre>

    <h5>HTML RENDERED</h5>
    <div [innerHTML]="ds.bypassSecurityTrustHtml(testControl.value)"></div>
  `
})
export class TestEditorComponent implements OnDestroy {
  formControlEnabled = new FormControl(true);

  inputTextControl = new FormControl(
    '<strong>HELLO               </strong> werld'
  );
  testControl = new FormControl();

  destroyed = new Subject();

  constructor(public ds: DomSanitizer) {
    this.formControlEnabled.valueChanges.subscribe(isEnabled => {
      if (isEnabled) {
        this.testControl.enable();
      } else {
        this.testControl.disable();
      }
    });

    this.inputTextControl.valueChanges
      .pipe(debounceTime(500), takeUntil(this.destroyed))
      .subscribe(val => this.testControl.setValue(val));
  }

  ngOnDestroy() {
    this.destroyed.next();
  }
}
