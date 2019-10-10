import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-date',
  template: `
    <mat-form-field [appearance]="appearance" class="full-width">
      <input
        matInput
        (focus)="picker.open()"
        [min]="minDate"
        [matDatepicker]="picker"
        [disabled]="disabled"
        [placeholder]="placeholder"
        [(ngModel)]="value"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
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

  ngOnInit() {
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
    // console.log('form-date: CheckValueIsValid()', {
    //   newValue,
    //   currentValue: this.value
    // });
    const newValue = this.value;
    let newDate = newValue;
    if (typeof newValue === 'string' || !newValue) {
      newDate = new Date(newValue);
    }
    if (this.isAfterToday) {
      const today = new Date();
      const isAfterToday = this.isNewDateAfterThis(newDate, today);
      if (!isAfterToday) {
        return 'Date must be after today\'s date';
      }
    }
    if (this.AfterDate) {
      const isAfterDate = this.isNewDateAfterThis(newDate, this.AfterDate);
      if (!isAfterDate) {
        return 'Date must be after date: ' + this.AfterDate.toDateString();
      }
    }
    return null;
  }

  private isNewDateAfterThis(newDate: Date, thisDate: Date) {
    const thisSeconds = thisDate.getTime();
    const newSeconds = newDate.getTime();
    const isAfter = thisSeconds < newSeconds;
    return isAfter;
  }
}
