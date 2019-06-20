import { Component, forwardRef, Input, OnInit, OnDestroy } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from './form-base-class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-select-string',
  template: `
    <mat-form-field class="full-width">
      <mat-select
        [formControl]="this.internalControl"
        [placeholder]="placeholder"
      >
        <mat-option *ngFor="let selection of selections" [value]="selection">
          {{ selection }}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styles: [
    `
      .full-width {
        width: 100%;
        padding-bottom: 15px;
      }
    `
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppFormSelectStringComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AppFormSelectStringComponent),
      multi: true
    }
  ]
})
export class AppFormSelectStringComponent extends FormBase<string> {
  @Input()
  placeholder = '';
  @Input()
  selections: string[];
}
