import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
import { SimpleLog } from '../../utils';
import { take } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-date',
  template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <input
        matInput
        ngDefaultControl
        (focus)="picker.open()"
        [min]="minDate"
        [matDatepicker]="picker"
        [disabled]="disabled"
        [placeholder]="placeholder"
        [(ngModel)]="value"
        [name]="autoCompleteObscureName"
        [autocomplete]="autoCompleteText"
      />
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LibFormDateComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormDateComponent),
      multi: true
    }
  ]
})
export class LibFormDateComponent extends FormBase<Date> implements OnInit {
  @Input()
  placeholder = '';
  @Input()
  isAfterToday: boolean;
  @Input()
  AfterDate: Date;

  logger: SimpleLog;

  constructor() {
    super();
    this.$nginit.pipe(take(1)).subscribe(() => this.init());
  }

  async init() {
    this.logger = new SimpleLog(this.debug);
  }

  get minDate() {
    if (this.AfterDate) {
      return this.AfterDate;
    }
    if (this.isAfterToday) {
      return new Date();
    }
    return null;
  }

  CheckValueIsValid(): string {
    const formValue = this.value;
    let formDate = formValue;
    if (typeof formValue === 'string' || !formValue) {
      formDate = new Date(formValue);
    }
    this.logger.log('form-date: CheckValueIsValid()', {
      formValue,
      formDate,
      isAfterToday: this.isAfterToday,
      isAfterDate: this.AfterDate
    });
    if (this.isAfterToday) {
      const todaysDate = new Date();
      const isAfterToday = this.isNewDateAfterThis(formDate, todaysDate);
      if (!isAfterToday) {
        return 'Date must be after today\'s date';
      }
    }
    if (this.AfterDate) {
      const isAfterDate = this.isNewDateAfterThis(formDate, this.AfterDate);
      if (!isAfterDate) {
        return 'Date must be after date: ' + this.AfterDate.toDateString();
      }
    }
    return null;
  }

  private isNewDateAfterThis(formDate: Date, afterDate: Date) {
    this.logger.log('form-date: isNewDateAfterThis()', {
      formDate,
      afterDate
    });
    if (!formDate || typeof formDate.getTime !== 'function') {
      console.error('the form control value is not a valid Date', { formDate });
      throw new Error();
    }
    if (!afterDate || typeof afterDate.getTime !== 'function') {
      console.error('AfterDate is not a valid Date', { afterDate });
      throw new Error();
    }
    const afterSeconds = afterDate.getTime();
    const formSeconds = formDate.getTime();
    const isAfter = afterSeconds < formSeconds;
    this.logger.log('form-date: isNewDateAfterThis()', {
      afterSeconds,
      formSeconds,
      isAfter
    });
    return isAfter;
  }
}
