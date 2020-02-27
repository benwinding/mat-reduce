import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {
  compareObjectDefault,
  OptionKeyValue,
  TransformSelectionsPipe,
  TransformToLabel
} from '../../utils';
import { FormSelectObjectInterface } from './form-select-interfaces';
import { debounceTime, map, tap, takeUntil, delay } from 'rxjs/operators';

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
          <div *ngIf="this.$selectedLabel | async as selectedLabel">
            {{ selectedLabel }}
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
export class LibFormSelectObjectMultipleComponent extends FormBase<Object[]>
  implements OnInit, FormSelectObjectInterface {
  @Input()
  set selectionObjects(newObjects: Object[]) {
    this.$optionsInput.next(newObjects);
  }
  @Input()
  hasSelectAll: boolean;
  @Input()
  selectionKey: string;
  @Input()
  compareObject = compareObjectDefault;
  @Input()
  displayWith: (o: Object) => string;

  $selectedLabel: Observable<string>;
  $options: Observable<OptionKeyValue[]>;

  private $optionsInput = new BehaviorSubject<Object[]>([]);
  private $selectedValues = new BehaviorSubject<Object[]>([]);

  ngOnInit() {
    this.$options = TransformSelectionsPipe(this, this.$optionsInput);
    this.internalControl.valueChanges
      .pipe(debounceTime(100), takeUntil(this._destroyed))
      .subscribe(selected => {
        this.$selectedValues.next(selected);
      });
    this.$selectedLabel = this.$selectedValues.pipe(
      map(items => this.generateLabel(this, items))
    );
  }

  onClickSelectAll() {
    const allValues = this.$optionsInput.getValue();
    this.writeValue(allValues);
  }

  private generateLabel(c: FormSelectObjectInterface, selected: Object[]) {
    if (!Array.isArray(selected) || !selected.length) {
      console.log('form-select-object-multiple generateLabel()', {
        selected,
        c
      });
      return '...';
    }
    let label = TransformToLabel(c, selected[0]);
    const remaining = selected.length - 1;
    if (remaining === 1) {
      label = `${label} (${remaining} other)`;
    }
    if (remaining > 1) {
      label = `${label} (${remaining} others)`;
    }
    console.log('form-select-object-multiple generateLabel()', {
      selected,
      label
    });
    return label;
  }
}
