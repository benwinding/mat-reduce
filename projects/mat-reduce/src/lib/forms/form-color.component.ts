import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from './form-base-class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-color',
  template: `
    <mat-form-field class="full-width">
      <h5>
        {{placeholder}}
      </h5>
      <input
        matInput
        [hidden]="true"
        [formControl]="internalControl"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
      />
      <mat-card
        [cpOutputFormat]="'hex'"
        class="box"
        [style.background]="value"
        [(colorPicker)]="value"
        [cpPosition]="'right'"
      >
        <div class="flex-space-between">
          <span>
            {{ value ? value : 'click to pick color' }}
          </span>
          <button
            mat-mini-fab
            (click)="onClickClear($event)"
            matTooltip="Clear current color"
            class="is-white"
          >
            <mat-icon class="is-black">
              clear
            </mat-icon>
          </button>
        </div>
      </mat-card>
    </mat-form-field>
  `,
  styles: [
    `
      .is-white {
        background: white;
      }
      .is-black {
        color: black;
      }
      .full-width {
        width: 100%;
      }
      .box {
        max-width: 200px;
        cursor: pointer;
      }
      .flex-space-between {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppFormColorComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AppFormColorComponent),
      multi: true
    }
  ]
})
export class AppFormColorComponent extends FormBase<string> implements OnInit {
  @Input()
  placeholder = '';
  @Input()
  defaultColor = '#42d742';

  ngOnInit() {
    if (!this.value) {
      setTimeout(() => {
        this.value = this.defaultColor;
      });
    }
  }

  onClickClear(e: Event) {
    e.stopPropagation();
    this.value = '';
  }
}
