import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppFormTagSingleComponent } from "./forms/form-tag-single.component";
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
  MatProgressSpinnerModule
} from "@angular/material";
import { CommonModule } from '@angular/common';

@NgModule({
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
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
