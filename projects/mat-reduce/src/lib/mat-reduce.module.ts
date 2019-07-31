import { NgModule } from '@angular/core';
import {
  AppConfirmationDialogComponent,
  ConfirmationService
} from './dialogs/app-confirmation.component';
import { AppFormTagSingleComponent } from './forms/form-tag-single.component';
import { AppFormTagMultipleComponent } from './forms/form-tag-multiple.component';
import { AppFormSelectStringComponent } from './forms/form-select-string.component';
import { AppFormSelectObjectComponent } from './forms/form-select-object.component';
import { AppFormAssigneeSelectorComponent } from './forms-composed/form-assignee-selector.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorPickerModule } from 'ngx-color-picker';

import {
  MatSnackBarModule,
  MatInputModule,
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
  MatProgressSpinnerModule,
  MatSlideToggleModule
} from '@angular/material';
import { FormBuilderTypedService } from './services/form-builder-typed.service';
import { AppFormToggleComponent } from './forms/form-toggle.component';
import { AppFormTextClearableComponent } from './forms/form-text-clearable.component';
import { AppFormTextDisabledComponent } from './forms/form-text-disabled.component';
import { AppFormTextIconsComponent } from './forms/form-text-icons.component';
import { AppFormTextPasswordComponent } from './forms/form-text-password.component';
import { AppFormTextComponent } from './forms/form-text.component';
import { AppFormTextAreaDisabledComponent } from './forms/form-textarea-disabled.component';
import { AppFormTextAreaComponent } from './forms/form-textarea.component';
import { AppFormColorComponent } from './forms/form-color.component';

const exported = [
  AppFormTagSingleComponent,
  AppFormTagMultipleComponent,
  AppFormSelectStringComponent,
  AppFormSelectObjectComponent,
  AppFormToggleComponent,
  AppFormColorComponent,

  AppFormTextClearableComponent,
  AppFormTextDisabledComponent,
  AppFormTextIconsComponent,
  AppFormTextPasswordComponent,
  AppFormTextComponent,
  AppFormTextAreaDisabledComponent,
  AppFormTextAreaComponent,

  AppFormAssigneeSelectorComponent
];

@NgModule({
  entryComponents: [AppConfirmationDialogComponent],
  declarations: [...exported, AppConfirmationDialogComponent],
  exports: [...exported],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
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
    MatProgressSpinnerModule,

    ColorPickerModule
  ],
  providers: [ConfirmationService, FormBuilderTypedService]
})
export class MatReduceModule {}
