import { NgModule } from '@angular/core';
import {
  MatDatetimepickerModule,
  MatNativeDatetimeModule
} from '@mat-datetimepicker/core';
import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatDatepickerModule,
  MatButtonModule
} from '@angular/material';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { QuillModule } from 'ngx-quill';

import { LibFormColorComponent } from './form-color.component';
import { LibFormDateComponent } from './form-date.component';
import { LibFormTimeComponent } from './form-time.component';
import { CommonModule } from '@angular/common';
import { SignaturePadModule } from 'angular2-signaturepad';
import { LibFormSignatureComponent } from './form-signature.component';
import { LibFormQuillEditorComponent } from './form-quill-editor.component';

const exportedModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDatetimeModule,
  MatDatetimepickerModule
];

const exported = [
  LibFormColorComponent,
  LibFormDateComponent,
  LibFormTimeComponent,
  LibFormSignatureComponent,
  LibFormQuillEditorComponent
];

@NgModule({
  imports: [
    ...exportedModules,
    CommonModule,
    SignaturePadModule,
    ColorPickerModule,
    QuillModule,
    NgxMaterialTimepickerModule
  ],
  exports: [...exported, ...exportedModules],
  declarations: [...exported],
  providers: []
})
export class MatReduceFormsUsing3rdPartyModule {}
