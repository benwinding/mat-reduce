import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppFormTagSingleComponent } from "./forms/form-tag-multiple.component";
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
  MatSnackBarModule
} from "@angular/material";
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  entryComponents: [
    AppConfirmationDialogComponent
  ],
  declarations: [
    AppComponent,
    AppFormTagSingleComponent,
    AppConfirmationDialogComponent
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
    MatButtonModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
