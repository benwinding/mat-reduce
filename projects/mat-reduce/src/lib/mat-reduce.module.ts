import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatReduceQuillEditorModule } from './quill-editor/quill-editor.module';
import { MatReduceCoreModule } from './from-no-quill';

const exportedModules = [
  CommonModule,
  MatReduceCoreModule,
  MatReduceQuillEditorModule
];

@NgModule({
  entryComponents: [],
  declarations: [],
  imports: [...exportedModules],
  exports: [...exportedModules],
  providers: []
})
export class MatReduceModule {}
