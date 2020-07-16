import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { QuillModule } from 'ngx-quill';

import { CommonModule } from '@angular/common';
import { LibFormQuillEditorComponent } from './form-quill-editor.component';

const exportedModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MatCardModule,
];

const exported = [
  LibFormQuillEditorComponent,
];

@NgModule({
  imports: [
    ...exportedModules,
    CommonModule,
    QuillModule.forRoot()
  ],
  exports: [...exported, ...exportedModules],
  declarations: [...exported],
  providers: [
  ]
})
export class MatReduceQuillEditorModule {}
