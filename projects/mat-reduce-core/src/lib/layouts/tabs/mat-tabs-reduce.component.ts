import {
  AfterContentInit,
  Component,
  ContentChildren,
  forwardRef,
  QueryList,
  Input
} from '@angular/core';
import { MatTabReduceComponent } from './mat-tab-reduce.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mat-tabs-reduce',
  template: `
    <div class="btns-container" *ngIf="showNextPrev">
      <button
        mat-raised-button
        class="tab-nav-btn"
        (click)="this.onClickPagePrev($event)"
        [matTooltip]="'Previous Tab'"
        [disabled]="disabled || selectedTabIndex <= 0"
      >
        <mat-icon>arrow_back</mat-icon>
        <span>Previous Tab</span>
      </button>

      <span *ngIf="showPageNum">Page: {{ selectedTabIndex }}</span>

      <button
        mat-raised-button
        class="tab-nav-btn"
        (click)="this.onClickPageNext($event)"
        [matTooltip]="'Next Tab'"
        [disabled]="disabled || selectedTabIndex >= maxPageIndex"
      >
        <mat-icon>arrow_forward</mat-icon>
        <span>Next Tab</span>
      </button>
    </div>
    <mat-tab-group
      [(selectedIndex)]="selectedTabIndex"
      class="mat-elevation-z8"
    >
      <mat-tab *ngFor="let tab of tabs">
        <ng-template matTabLabel>
          <div class="tab-label">
            <mat-icon class="mx-1">{{tab.icon}}</mat-icon>
            <span>{{tab.label}}</span>
          </div>
        </ng-template>
        <ng-container *ngTemplateOutlet="tab.template"></ng-container>
      </mat-tab>
    </mat-tab-group>
  `,
  styles: [
    `
      .tab-nav-btn {
        background: rgb(158, 188, 210) !important;
        padding: 0px 10px;
        border-radius: 4px;
        background-color: #ddd;
        display: flex;
      }
      .btns-container {
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
      }
      .tab-label {
        display: flex;
        align-items: center;
      }
      .mx-1 {
        margin: 0 5px;
      }
    `
  ]
})
export class MatTabsReduceComponent implements AfterContentInit {
  @Input()
  selectedTabIndex = 0;
  @Input()
  disabled: boolean;
  @Input()
  showPageNum: boolean;
  @Input()
  showNextPrev: boolean;

  @ContentChildren(MatTabReduceComponent) inputTabs: QueryList<MatTabReduceComponent>;

  public tabs: MatTabReduceComponent[] = [];

  public ngAfterContentInit(): void {
    setTimeout(() => {
      this.tabs = this.inputTabs.toArray();
    });
  }

  onClickPageNext($event) {
    $event.preventDefault();
    this.selectedTabIndex++;
  }

  onClickPagePrev($event) {
    $event.preventDefault();
    this.selectedTabIndex--;
  }

  get maxPageIndex() {
    return this.tabs.length - 1;
  }
}
