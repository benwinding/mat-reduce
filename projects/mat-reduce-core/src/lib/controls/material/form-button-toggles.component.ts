import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
import { BehaviorSubject } from 'rxjs';
import { tryGetJsonString } from '../../utils/try-get-json';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-button-toggles',
  template: `
    <div class="full-width">
      <p>{{ placeholder }}</p>
      <mat-button-toggle-group [name]="name">
        <mat-button-toggle
          *ngFor="let option of ($optionsWithChecked | async)"
          [checked]="option.selected"
          (change)="onSelectionChange(option)"
          >{{ option.label }}</mat-button-toggle
        >
      </mat-button-toggle-group>
    </div>
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
      useExisting: forwardRef(() => LibFormButtonToggleComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormButtonToggleComponent),
      multi: true,
    },
  ],
})
export class LibFormButtonToggleComponent extends FormBase<any> {
  @Input()
  set options(opts: ValueLabel[]) {
    if (!Array.isArray(opts)) {
      return;
    }

    const converted = opts.map((o: ValueLabelWithSelected) => {
      o.selected = ValuesMatch(o.value, this.value);
      return o;
    });
    this.$optionsWithChecked.next(converted);
  }

  $optionsWithChecked = new BehaviorSubject<ValueLabelWithSelected[]>([]);

  constructor() {
    super();
  }

  onSelectionChange(option: ValueLabelWithSelected) {
    const opts = this.$optionsWithChecked.getValue();
    opts.map(o => o.selected = false);
    option.selected = true;
    this.$optionsWithChecked.next([...opts]);
    const selectedVal = opts.find(v => v.selected);
    this.writeValue(selectedVal && selectedVal.value);
  }
}

function ValuesMatch(val1: any, val2: any) {
  return tryGetJsonString(val1) === tryGetJsonString(val2);
}

export interface ValueLabel {
  value: any;
  label: string;
}

interface ValueLabelWithSelected extends ValueLabel {
  selected: boolean;
}
