import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Component, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
import {
  Observable,
  Subject,
  combineLatest,
  asyncScheduler,
  BehaviorSubject,
} from 'rxjs';
import { takeUntil, throttleTime, startWith, filter } from 'rxjs/operators';
import { SimpleLog } from '../../utils';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-select-string-autocomplete',
  template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <autocomplete-drop-down-arrow></autocomplete-drop-down-arrow>
      <input
        type="text"
        matInput
        [name]="autoCompleteObscureName"
        [placeholder]="placeholder"
        [formControl]="internalControl"
        [matAutocomplete]="auto"
        (click)="onClickedInput($event)"
        appExtMatAutocompleteTriggerEnforceSelection
      />
      <mat-autocomplete #auto="matAutocomplete">
        <mat-option
          *ngFor="let option of $filteredOptions | async"
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
      .display-none {
        display: none;
      }
    `,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LibFormSelectStringAutoCompleteComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormSelectStringAutoCompleteComponent),
      multi: true,
    },
  ],
})
export class LibFormSelectStringAutoCompleteComponent extends FormBase<string>
  implements OnInit {
  @Input()
  set selections(inputSelections: string[]) {
    this.$inputOptions.next(inputSelections);
  }

  $inputOptions: Subject<string[]>;
  $filteredOptions: Subject<string[]>;

  @ViewChild(MatAutocompleteTrigger, {
    read: MatAutocompleteTrigger,
    static: true,
  })
  autoCompleteTrigger: MatAutocompleteTrigger;

  private logger: SimpleLog = new SimpleLog(false);

  constructor() {
    super();
    this.$filteredOptions = new BehaviorSubject<string[]>([]);
    this.$inputOptions = new BehaviorSubject<string[]>([]);
  }

  ngOnInit() {
    this.logger = new SimpleLog(this.debug);
    this.setSubscriptions();
  }

  setSubscriptions() {
    const untilDestroyed = <T>($observable: Observable<T>) => {
      return $observable.pipe(
        takeUntil(this._destroyed),
        throttleTime(50, asyncScheduler, { leading: true, trailing: true })
      );
    };
    untilDestroyed(
      combineLatest([
        this.internalControl.valueChanges.pipe(
          startWith(''),
          filter((v) => typeof v === 'string')
        ),
        this.$inputOptions,
      ])
    ).subscribe(([text, inputOptions]) => {
      this.logger.log('$onInputTextChanged', { text });
      const filtered = this._filter(inputOptions, text);
      this.$filteredOptions.next(filtered);
    });
    untilDestroyed(this.$filteredOptions).subscribe((e) => {
      this.logger.log('$filteredOptions', { e });
    });
    untilDestroyed(this.$inputOptions).subscribe((e) => {
      this.logger.log('$inputOptions', { e });
      this.$filteredOptions.next(e);
    });
  }

  onClickedInput(e) {
    this.logger.log('$onClickedInput', { e });
    this.autoCompleteTrigger.openPanel();
  }

  private _filter(inputOptions: string[], value: string): string[] {
    const filterValue = value.toLowerCase();

    const filteredOptions = (inputOptions || []).filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
    if (!filteredOptions.length) {
      return inputOptions;
    }
    return filteredOptions;
  }
}
