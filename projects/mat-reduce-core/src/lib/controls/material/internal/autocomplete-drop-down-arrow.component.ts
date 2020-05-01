import { Component } from '@angular/core';

@Component({
  selector: 'autocomplete-drop-down-arrow',
  template: `
    <div class="down-arrow-wrapper">
      <div class="down-arrow"></div>
    </div>
  `,
  styles: [
    `
      .down-arrow-wrapper {
        display: table-cell;
        vertical-align: middle;
        position: absolute;
        right: 0;
      }
      .down-arrow {
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid;
        margin: 0 4px;
        opacity: 0.6;
      }
    `,
  ],
})
export class AutoCompleteDropDownArrowComponent {}
