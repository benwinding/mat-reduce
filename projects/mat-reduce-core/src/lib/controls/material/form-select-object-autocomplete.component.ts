import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
import { Observable } from 'rxjs';
import { takeUntil, startWith, map, filter } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-select-object-autocomplete',
  template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <input
        type="text"
        matInput
        [placeholder]="placeholder"
        [formControl]="internalControl"
        [matAutocomplete]="auto"
        appExtMatAutocompleteTriggerEnforceSelection
      />
      <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayWith">
        <mat-option
          *ngFor="let option of filteredOptions | async"
          [value]="option"
        >
          {{ displayWith(option) }}
        </mat-option>
      </mat-autocomplete>
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
      useExisting: forwardRef(() => LibFormSelectObjectAutoCompleteComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormSelectObjectAutoCompleteComponent),
      multi: true
    }
  ]
})
// tslint:disable: ban-types
export class LibFormSelectObjectAutoCompleteComponent extends FormBase<Object> implements OnInit {
  @Input()
  selectionObjects: Object[];
  @Input()
  selectionKey: string;
  @Input()
  displayWith: (val: Object) => string = this.defaultDisplayWith;

  filteredOptions: Observable<Object[]>;

  writeValue(newVal: Object) {
    this.value = newVal || {};
  }

  ngOnInit() {
    this.filteredOptions = this.internalControl.valueChanges.pipe(
      takeUntil(this._destroyed),
      startWith(''),
      filter(v => typeof v === 'string'),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): Object[] {
    const filterValue = value.toLowerCase();

    return (this.selectionObjects || [])
      .filter(option => !!option)
      .filter(option => this.displayWith(option).toLowerCase().includes(filterValue));
  }

  private defaultDisplayWith(option: Object) {
    return 'set [displayWith]="..." ' + JSON.stringify(option);
  }
}
