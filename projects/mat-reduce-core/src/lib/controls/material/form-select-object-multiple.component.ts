import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  compareObjectDefault,
  OptionKeyValue,
  TransformSelections
} from '../../utils';
import { FormSelectObjectInterface } from './form-select-interfaces';

// tslint:disable: ban-types

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-select-object-multiple',
  template: `
    <mat-form-field [appearance]="appearance" class="full-width">
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
        <ng-container *ngIf="hasSelectAll">
          <mat-option (click)="onClickSelectAll()">
            -- Select All --
          </mat-option>
        </ng-container>
        <mat-option
          *ngFor="let option of $options | async"
          [value]="option.value"
        >
          {{ option.label }}
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
export class LibFormSelectObjectMultipleComponent extends FormBase<Object>
  implements FormSelectObjectInterface {
  @Input()
  set selectionObjects(newObjects: Object[]) {
    this.$inputOptions.next(newObjects);
  }
  @Input()
  hasSelectAll: boolean;
  @Input()
  selectionKey: string;
  @Input()
  compareObject = compareObjectDefault;
  @Input()
  displayWith: (o: Object) => string;

  $inputOptions = new BehaviorSubject<Object[]>([]);
  $options: Observable<OptionKeyValue[]>;

  constructor() {
    super();
    this.$options = TransformSelections(this, this.$inputOptions);
  }

  onClickSelectAll() {
    const allValues = this.$inputOptions.getValue();
    this.writeValue(allValues);
  }
}
