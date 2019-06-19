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
  MatBadgeModule
} from "@angular/material";
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppFormTagSingleComponent } from './forms/form-tag-single.component';

@NgModule({
  entryComponents: [
    AppConfirmationDialogComponent
  ],
  declarations: [
    AppComponent,
    AppFormTagSingleComponent,
    AppFormTagMultipleComponent,
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
    MatBadgeModule,
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
