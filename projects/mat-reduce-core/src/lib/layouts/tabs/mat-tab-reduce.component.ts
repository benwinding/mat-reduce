import { Component, ViewChild, TemplateRef, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mat-tab-reduce',
  template: `
    <ng-template matTabContent>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class MatTabReduceComponent {
  @Input()
  label: string;
  @Input()
  icon: string;
  @ViewChild(TemplateRef, {static: false}) template: TemplateRef<any>;
}
