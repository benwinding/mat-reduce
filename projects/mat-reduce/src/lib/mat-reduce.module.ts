import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatReduceQuillEditorModule } from './quill-editor/quill-editor.module';
import { MatReduceCoreModule } from './from-core';

const exportedModules = [MatReduceQuillEditorModule];

@NgModule({
  entryComponents: [],
  declarations: [],
  imports: [CommonModule, MatReduceCoreModule, ...exportedModules],
  exports: [...exportedModules],
  providers: [],
})
export class MatReduceModule {}
