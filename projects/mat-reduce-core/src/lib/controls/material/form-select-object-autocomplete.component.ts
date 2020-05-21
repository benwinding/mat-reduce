import { Component, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
import {
  Observable,
  Subject,
  BehaviorSubject,
  asyncScheduler,
  combineLatest,
} from 'rxjs';
import { takeUntil, startWith, filter, throttleTime } from 'rxjs/operators';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { SimpleLog } from '../../utils';

interface Option {
  value: any;
  label: string;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-select-object-autocomplete',
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
      <mat-autocomplete
        #auto="matAutocomplete"
        [displayWith]="displayWithInternal"
      >
        <mat-option
          *ngFor="let option of $filteredOptions | async"
          [value]="option.value"
        >
          {{ option.label }}
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
    `,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LibFormSelectObjectAutoCompleteComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormSelectObjectAutoCompleteComponent),
      multi: true,
    },
  ],
})
// tslint:disable: ban-types
export class LibFormSelectObjectAutoCompleteComponent extends FormBase<Object>
  implements OnInit {
  @Input()
  set selectionObjects(inputSelections: Object[]) {
    this.$inputOptions.next(inputSelections);
  }
  @Input()
  selectionKey: string;
  @Input()
  displayWith: (val: Object) => string;
  // tslint:disable: member-ordering
  displayWithInternal = (val: Object) => {
    if (!val) {
      return '-';
    }
    if (typeof this.displayWith === 'function') {
      return this.displayWith(val);
    }
    return this.defaultDisplayWith(val);
  };

  $inputOptions: Subject<Object[]>;
  $inputOptionsLabelled: Subject<Option[]>;
  $filteredOptions: Subject<Option[]>;

  @ViewChild(MatAutocompleteTrigger, {
    read: MatAutocompleteTrigger,
    static: true,
  })
  autoCompleteTrigger: MatAutocompleteTrigger;

  writeValue(newVal: Object) {
    this.value = newVal;
  }

  private logger: SimpleLog = new SimpleLog(false);

  constructor() {
    super();
    this.$inputOptions = new BehaviorSubject<string[]>([]);
    this.$inputOptionsLabelled = new BehaviorSubject<Option[]>([]);
    this.$filteredOptions = new BehaviorSubject<Option[]>([]);
  }

  ngOnInit() {
    this.logger = new SimpleLog(this.debug);
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
        this.$inputOptionsLabelled,
      ])
    ).subscribe(([text, inputOptions]) => {
      this.logger.log('$onInputTextChanged', { text });
      const filtered = this._filter(inputOptions, text);
      this.$filteredOptions.next(filtered);
    });
    untilDestroyed(this.$inputOptions).subscribe((inputOptions) => {
      this.logger.log('$inputOptions', { e: inputOptions });
      const labelledOptions = (inputOptions || []).map((option) => ({
        value: option,
        label: this.displayWithInternal(option),
      }));
      this.$inputOptionsLabelled.next(labelledOptions);
    });
    untilDestroyed(this.$inputOptionsLabelled).subscribe(
      (inputOptionsLabelled) => {
        this.logger.log('$inputOptionsLabelled', { inputOptionsLabelled });
      }
    );
  }

  onClickedInput(e) {
    this.logger.log('$onClickedInput', { e });
    this.autoCompleteTrigger.openPanel();
  }

  private _filter(inputOptions: Option[], value: string): Option[] {
    const filterValue = value.toLowerCase();

    const filteredOptions = (inputOptions || [])
      .filter((option) => !!option && !!option.label)
      .filter((option) => {
        return option.label.toLowerCase().includes(filterValue);
      });
    if (!filteredOptions.length) {
      return inputOptions;
    }
    return filteredOptions;
  }

  private defaultDisplayWith(option: Object) {
    return 'set [displayWith]="..." ' + JSON.stringify(option);
  }
}
