import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatReduceNoQuillModule } from './mat-reduce-no-quill.module';
import { MatReduceQuillEditorModule } from './controls';

const exportedModules = [
  CommonModule,
  MatReduceNoQuillModule,
  MatReduceQuillEditorModule
];

@NgModule({
  entryComponents: [],
  declarations: [],
  exports: [...exportedModules],
  imports: [...exportedModules],
  providers: []
})
export class MatReduceModule {}
