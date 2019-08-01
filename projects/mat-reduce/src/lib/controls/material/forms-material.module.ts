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

import { LibFormSelectObjectMultipleComponent } from './form-select-object-multiple.component';
import { LibFormToggleComponent } from './form-toggle.component';
import { LibFormTextClearableComponent } from './form-text-clearable.component';
import { LibFormTextDisabledComponent } from './form-text-disabled.component';
import { LibFormTextIconsComponent } from './form-text-icons.component';
import { LibFormTextPasswordComponent } from './form-text-password.component';
import { LibFormTextComponent } from './form-text.component';
import { LibFormTextAreaDisabledComponent } from './form-textarea-disabled.component';
import { LibFormTextAreaComponent } from './form-textarea.component';
import { LibFormToggleReversedComponent } from './form-toggle-reversed.component';
import { LibFormSelectObjectComponent } from './form-select-object.component';
import { LibFormSelectStringComponent } from './form-select-string.component';
import { LibFormTagMultipleComponent } from './form-tag-multiple.component';
import { LibFormTagSingleComponent } from './form-tag-single.component';

const exported = [
  LibFormSelectObjectMultipleComponent,
  LibFormSelectObjectComponent,
  LibFormSelectStringComponent,
  LibFormTagMultipleComponent,
  LibFormTagSingleComponent,
  LibFormTextClearableComponent,
  LibFormTextDisabledComponent,
  LibFormTextIconsComponent,
  LibFormTextPasswordComponent,
  LibFormTextComponent,
  LibFormTextAreaDisabledComponent,
  LibFormTextAreaComponent,
  LibFormToggleReversedComponent,
  LibFormToggleComponent,
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
