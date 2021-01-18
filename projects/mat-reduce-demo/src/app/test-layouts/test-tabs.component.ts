import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  template: `
    <form-toggle
      [formControl]="formControlEnabled"
      placeholder="Form Enabled"
    ></form-toggle>
    <form-toggle
      [formControl]="showPrevNext"
      placeholder="Show Prev and Next"
    ></form-toggle>
    <form-toggle
      [formControl]="showPageNum"
      placeholder="Show Page Num"
    ></form-toggle>
    <h1>Mat-Tabs-Reduce</h1>
    <mat-tabs-reduce
      [disabled]="!formControlEnabled.value"
      [showNextPrev]="showPrevNext.value"
      [showPageNum]="showPageNum.value"
    >
      <mat-tab-reduce label="Groups" icon="people">
        <h1>Test Content</h1>
        <p>Lorem .......</p>
      </mat-tab-reduce>
      <mat-tab-reduce label="Help" icon="help">
        <h1>Test Content</h1>
        <p>Lorem .......</p>
      </mat-tab-reduce>
    </mat-tabs-reduce>
  `,
})
export class TestTabsComponent {
  formControlEnabled = new FormControl(true);
  showPrevNext = new FormControl(true);
  showPageNum = new FormControl(true);
}
