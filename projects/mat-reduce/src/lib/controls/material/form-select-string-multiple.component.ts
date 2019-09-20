import { Component, forwardRef, Input, OnInit, OnDestroy } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-select-string-multiple',
  template: `
    <mat-form-field class="full-width">
      <mat-select
        [formControl]="this.internalControl"
        [placeholder]="placeholder"
        multiple
      >
        <mat-select-trigger>
          <div *ngIf="this.internalControl.value as selected">
            {{ selected?.length ? selected[0] : '' }}
            <span
              *ngIf="this.internalControl.value?.length > 1"
              class="example-additional-selection"
            >
              (+{{ selected.length - 1 }}
              {{ selected?.length === 2 ? 'other' : 'others' }})
            </span>
          </div>
        </mat-select-trigger>
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
      useExisting: forwardRef(() => LibFormSelectStringMultipleComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormSelectStringMultipleComponent),
      multi: true
    }
  ]
})
export class LibFormSelectStringMultipleComponent extends FormBase<string[]> {
  @Input()
  selections: string[];
}
