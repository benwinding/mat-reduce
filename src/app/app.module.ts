import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppFormTagMultipleComponent } from "./forms/form-tag-multiple.component";
import {
  AppConfirmationDialogComponent,
  ConfirmationService
} from "./dialogs/app-confirmation.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {
  MatAutocompleteModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatBadgeModule,
  MatCardModule,
  MatSelectModule
} from "@angular/material";
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppFormTagSingleComponent } from './forms/form-tag-single.component';
import { FormBuilderTypedService } from './services/form-builder-typed.service';
import { AppFormSelectStringComponent } from './forms/form-select-string.component';
import { AppFormSelectObjectComponent } from './forms/form-select-object.component';
import { AppFormAssigneeSelectorComponent } from './forms-composed/form-assignee-selector.component';
import { TestTagsComponent } from './tests/tags.component';
import { TestAssigneeComponent } from './tests/test-assignee-selector.component';
import { TestSelectComponent } from './tests/select.component';

@NgModule({
  entryComponents: [
    AppConfirmationDialogComponent
  ],
  declarations: [
    AppComponent,
    AppFormTagSingleComponent,
    AppFormTagMultipleComponent,
    AppFormSelectStringComponent,
    AppFormSelectObjectComponent,
    AppFormAssigneeSelectorComponent,
    AppConfirmationDialogComponent,

    // Test components
    TestTagsComponent,
    TestAssigneeComponent,
    TestSelectComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
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
    MatProgressSpinnerModule
  ],
  providers: [ConfirmationService, FormBuilderTypedService],
  bootstrap: [AppComponent]
})
export class AppModule {}
