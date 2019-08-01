import { NgModule } from '@angular/core';
import {
  MatSnackBarModule,
  MatInputModule,
  MatSlideToggleModule,
  MatChipsModule,
  MatCardModule,
  MatButtonModule,
  MatBadgeModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatIconModule,
  MatSelectModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppFormSelectObjectMultipleComponent } from './form-select-object-multiple.component';
import { AppFormToggleComponent } from './form-toggle.component';
import { AppFormTextClearableComponent } from './form-text-clearable.component';
import { AppFormTextDisabledComponent } from './form-text-disabled.component';
import { AppFormTextIconsComponent } from './form-text-icons.component';
import { AppFormTextPasswordComponent } from './form-text-password.component';
import { AppFormTextComponent } from './form-text.component';
import { AppFormTextAreaDisabledComponent } from './form-textarea-disabled.component';
import { AppFormTextAreaComponent } from './form-textarea.component';
import { AppFormToggleReversedComponent } from './form-toggle-reversed.component';
import { AppFormSelectObjectComponent } from './form-select-object.component';
import { AppFormSelectStringComponent } from './form-select-string.component';
import { AppFormTagMultipleComponent } from './form-tag-multiple.component';
import { AppFormTagSingleComponent } from './form-tag-single.component';

const exported = [
  AppFormSelectObjectMultipleComponent,
  AppFormSelectObjectComponent,
  AppFormSelectStringComponent,
  AppFormTagMultipleComponent,
  AppFormTagSingleComponent,
  AppFormTextClearableComponent,
  AppFormTextDisabledComponent,
  AppFormTextIconsComponent,
  AppFormTextPasswordComponent,
  AppFormTextComponent,
  AppFormTextAreaDisabledComponent,
  AppFormTextAreaComponent,
  AppFormToggleReversedComponent,
  AppFormToggleComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatInputModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  exports: [...exported],
  declarations: [...exported],
  providers: []
})
export class MatReduceFormsUsingMaterialModule {}
