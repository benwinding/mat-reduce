import { NgModule } from '@angular/core';
import {
  MatDatetimepickerModule,
  MatNativeDatetimeModule
} from '@mat-datetimepicker/core';
import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { LibFormColorComponent } from './form-color.component';
import { LibFormDateComponent } from './form-date.component';
import { LibFormTimeComponent } from './form-time.component';
import { CommonModule } from '@angular/common';
import { SignaturePadModule } from 'angular2-signaturepad';
import { LibFormSignatureComponent } from './form-signature.component';
import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive';
import { LibFormPhoneComponent } from './form-phone.component';

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
  LibFormPhoneComponent
];

@NgModule({
  imports: [
    CommonModule,
    SignaturePadModule,
    ColorPickerModule,
    NgxMaterialTimepickerModule,
    NgxCleaveDirectiveModule,
    ...exportedModules,
  ],
  exports: [...exported, ...exportedModules],
  declarations: [...exported],
  providers: []
})
export class MatReduceFormsUsing3rdPartyModule {}
