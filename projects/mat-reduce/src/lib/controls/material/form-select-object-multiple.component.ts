import { Component, forwardRef, Input, OnInit, OnDestroy } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';

function compareObject(l1: {}, l2: {}) {
  if (!l1 || !l2) {
    return false;
  }
  let json1, json2;
  try {
    json1 = JSON.stringify(l1);
    json2 = JSON.stringify(l2);
  } catch (error) {
    return false;
  }
  if (json1 !== json2) {
    return false;
  }
  return true;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-select-object-multiple',
  template: `
    <mat-form-field class="full-width">
      <mat-select
        [formControl]="this.internalControl"
        [placeholder]="placeholder"
        [compareWith]="compareObject"
        multiple
      >
        <mat-select-trigger>
          <div *ngIf="this.internalControl.value as selected">
            {{ selected?.length ? selected[0][selectionKey] : '' }}
            <span
              *ngIf="this.internalControl.value?.length > 1"
              class="example-additional-selection"
            >
              (+{{ selected.length - 1 }}
              {{ selected?.length === 2 ? 'other' : 'others' }})
            </span>
          </div>
        </mat-select-trigger>
        <mat-option
          *ngFor="let selectionObject of selectionObjects"
          [value]="selectionObject"
        >
          {{ selectionObject[selectionKey] }}
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
      useExisting: forwardRef(() => LibFormSelectObjectMultipleComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormSelectObjectMultipleComponent),
      multi: true
    }
  ]
})
export class LibFormSelectObjectMultipleComponent extends FormBase<Object> {
  @Input()
  selectionObjects: Object[];
  @Input()
  selectionKey: string;

  compareObject = compareObject;
}
