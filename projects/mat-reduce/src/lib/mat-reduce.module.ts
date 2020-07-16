import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatReduceQuillEditorModule } from './quill-editor/quill-editor.module';
import { MatReduceCoreModule } from './from-core';
import { ReactiveFormsModule } from '@angular/forms';

const exportedModules = [MatReduceQuillEditorModule];

@NgModule({
  entryComponents: [],
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatReduceCoreModule,
    ...exportedModules,
  ],
  exports: [...exportedModules],
  providers: [],
})
export class MatReduceModule {}
