import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-back-btn',
  template: `
    <a id="btn-back" mat-raised-button color="accent" (click)="browserBack()">
      <mat-icon>arrow_back</mat-icon>
      Back
    </a>
  `,
  styles: [
    `
      #btn-back {
        margin-bottom: 15px;
      }
    `
  ]
})
export class AppBtnBackComponent {
  browserBack() {
    // console.log('AppBtnBackComponent, browserBack()', {history: window.history});
    window.history.back();
  }
}
