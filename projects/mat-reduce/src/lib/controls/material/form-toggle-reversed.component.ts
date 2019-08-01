import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-toggle-reversed',
  template: `
    <div class="full-width">
      <mat-slide-toggle
        [(ngModel)]="valueReveresed"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
      >
        <div class="flex-center">
          <ng-content></ng-content>
          <span>{{ placeholder }}</span>
          <span>({{ value ? yes : no }})</span>
        </div>
      </mat-slide-toggle>
    </div>
  `,
  styles: [
    `
      span {
        margin: 2px;
      }
      .full-width {
        width: 100%;
        padding-bottom: 15px;
      }
      .flex-center {
        display: flex;
        align-items: center;
      }
    `
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppFormToggleReversedComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AppFormToggleReversedComponent),
      multi: true
    }
  ]
})
export class AppFormToggleReversedComponent extends FormBase<boolean> {
  @Input()
  yes = 'Yes';
  @Input()
  no = 'No';

  get valueReveresed() {
    return !this.value;
  }
  set valueReveresed(reversedValue) {
    this.value = !reversedValue;
  }
}
