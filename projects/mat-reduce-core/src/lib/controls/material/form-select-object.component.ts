import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
import {
  compareObjectDefault,
  TransformSelectionsPipe,
  OptionKeyValue
} from '../../utils';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormSelectObjectInterface } from './form-select-interfaces';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-select-object',
  template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <mat-select
        [formControl]="this.internalControl"
        [placeholder]="placeholder"
        [compareWith]="compareObject"
      >
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
      useExisting: forwardRef(() => LibFormSelectObjectComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormSelectObjectComponent),
      multi: true
    }
  ]
})
// tslint:disable: ban-types
export class LibFormSelectObjectComponent extends FormBase<Object>
  implements FormSelectObjectInterface {
  @Input()
  set selectionObjects(newObjects: Object[]) {
    this.$inputOptions.next(newObjects);
  }
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
    this.$options = TransformSelectionsPipe(this, this.$inputOptions);
  }

  writeValue(newVal: Object) {
    this.value = newVal || {};
  }
}
