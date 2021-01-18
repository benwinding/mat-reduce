import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsReduceModule } from './tabs/forms-tabs.module';

const exportedModules = [
  MatTabsReduceModule,
];

@NgModule({
  exports: [...exportedModules],
  imports: [CommonModule, ...exportedModules],
})
export class MatReduceLayoutModule {}
