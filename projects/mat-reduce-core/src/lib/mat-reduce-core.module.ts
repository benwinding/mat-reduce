import { NgModule } from '@angular/core';
import {
  AppConfirmationDialogComponent,
  ConfirmationService
} from './dialogs/app-confirmation.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormBuilderTypedService } from './services/form-builder-typed.service';
import { MatReduceFormsUsing3rdPartyModule } from './controls/using-3rd-party/forms-3rd-party.module';
import { MatReduceFormsUsingMaterialModule } from './controls/material/forms-material.module';
import { MatReduceFormsComposedModule } from './controls/composed/forms-composed.module';
import { MatReduceLayoutModule } from './layouts/mat-reduce-layouts.module';
import { MatIconModule } from '@angular/material/icon';

const exportedModules = [
  MatReduceFormsUsing3rdPartyModule,
  MatReduceFormsUsingMaterialModule,
  MatReduceFormsComposedModule,
  MatReduceLayoutModule,
  CommonModule,
  ReactiveFormsModule,
  FormsModule
];

@NgModule({
  entryComponents: [AppConfirmationDialogComponent],
  declarations: [AppConfirmationDialogComponent],
  exports: [...exportedModules],
  imports: [MatIconModule, ...exportedModules],
  providers: [ConfirmationService, FormBuilderTypedService]
})
export class MatReduceCoreModule {}
