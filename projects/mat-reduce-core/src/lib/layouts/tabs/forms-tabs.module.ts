import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabReduceComponent } from './mat-tab-reduce.component';
import { MatTabsReduceComponent } from './mat-tabs-reduce.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

const comps = [MatTabReduceComponent, MatTabsReduceComponent];

@NgModule({
  declarations: [...comps],
  exports: [...comps, MatTabsModule],
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class MatTabsReduceModule {}
