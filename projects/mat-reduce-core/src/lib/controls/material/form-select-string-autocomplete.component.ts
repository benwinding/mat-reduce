import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
import { Observable } from 'rxjs';
import { startWith, map, takeUntil } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-select-string-autocomplete',
  template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <autocomplete-drop-down-arrow></autocomplete-drop-down-arrow>
      <input
        type="text"
        matInput
        [placeholder]="placeholder"
        [formControl]="internalControl"
        [matAutocomplete]="auto"
        ExtMatAutocompleteTriggerEnforceSelectionDirective
      />
      <mat-autocomplete #auto="matAutocomplete">
        <mat-option
          *ngFor="let option of filteredOptions | async"
          [value]="option"
        >
          {{ option }}
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
      useExisting: forwardRef(() => LibFormSelectStringAutoCompleteComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormSelectStringAutoCompleteComponent),
      multi: true
    }
  ]
})
export class LibFormSelectStringAutoCompleteComponent extends FormBase<string> implements OnInit {
  @Input()
  selections: string[];

  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.internalControl.valueChanges.pipe(
      takeUntil(this._destroyed),
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return (this.selections || []).filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
