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
import { LibFormNumberComponent } from './form-number.component';
import { LibFormSelectStringMultipleComponent } from './form-select-string-multiple.component';
import { LibFormSelectObjectAutoCompleteComponent } from './form-select-object-autocomplete.component';
import { LibFormSelectStringAutoCompleteComponent } from './form-select-string-autocomplete.component';
import { ExtMatAutocompleteTriggerEnforceSelectionDirective } from './appExtMatAutocompleteTriggerEnforceSelection';

const exportedModules = [
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
];

const exported = [
  LibFormNumberComponent,
  LibFormSelectObjectAutoCompleteComponent,
  LibFormSelectObjectComponent,
  LibFormSelectObjectMultipleComponent,
  LibFormSelectStringAutoCompleteComponent,
  LibFormSelectStringComponent,
  LibFormSelectStringMultipleComponent,
  LibFormTagMultipleComponent,
  LibFormTagSingleComponent,
  LibFormTextAreaComponent,
  LibFormTextAreaDisabledComponent,
  LibFormTextClearableComponent,
  LibFormTextComponent,
  LibFormTextDisabledComponent,
  LibFormTextIconsComponent,
  LibFormTextPasswordComponent,
  LibFormToggleComponent,
  LibFormToggleReversedComponent,
];

@NgModule({
  imports: [...exportedModules],
  exports: [...exported, ...exportedModules],
  declarations: [...exported, ExtMatAutocompleteTriggerEnforceSelectionDirective],
  providers: []
})
export class MatReduceFormsUsingMaterialModule {}
