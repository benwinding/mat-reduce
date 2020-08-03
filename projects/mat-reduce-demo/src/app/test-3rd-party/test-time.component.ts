import { MatDialog } from '@angular/material/dialog';
import { Component, ViewChild, TemplateRef } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

@Component({
  template: `
    <h1>form-time Testing</h1>

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

    <h4>Value</h4>
    <pre>
    {{ testControl.value }}
  </pre
    >
    <div style="width: 400px;">
      <form-time
        *ngIf="loaded"
        [formControl]="testControlRequired"
        placeholder="Select Time! (Required)"
      >
      </form-time>
    </div>
    <h4>Value</h4>
    <pre>
    {{ testControlRequired.value }}
  </pre
    >

    <button mat-raised-button color="primary" (click)="onClickDialog()">
      Launch Dialog
    </button>

    <ng-template #clickDialogTemplate>
      <form-time
        placeholder="Select Time!"
      >
      </form-time>
    </ng-template>
  `,
})
export class TestTimeComponent {
  formControlEnabled = new FormControl(true);
  loaded = false;

  testControl = new FormControl('');
  testControlRequired = new FormControl('', Validators.required);
  testSignControl = new FormControl();

  @ViewChild('clickDialogTemplate')
  clickDialogTemplate: TemplateRef<HTMLElement>;

  constructor(
    private dialog: MatDialog
  ) {
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

  onClickDialog() {
    this.dialog.open(this.clickDialogTemplate);
  }
}
