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
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

const exported = [
  AppFormTagSingleComponent,
  AppFormTagMultipleComponent,
  AppFormSelectStringComponent,
  AppFormSelectObjectComponent,
  AppFormToggleComponent,
  AppFormAssigneeSelectorComponent
];

@NgModule({
  entryComponents: [AppConfirmationDialogComponent],
  declarations: [...exported, AppConfirmationDialogComponent],
  exports: [...exported],
  imports: [
    CommonModule,
    BrowserModule,
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
    MatProgressSpinnerModule
  ],
  providers: [ConfirmationService, FormBuilderTypedService]
})
export class MatReducedModule {}
