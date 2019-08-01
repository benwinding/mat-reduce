import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatIconModule } from '@angular/material';

import { MatReduceFormsUsingMaterialModule } from '../material/forms-material.module';
import { AppFormAssigneeSelectorComponent } from './form-assignee-selector.component';

const exported = [
  AppFormAssigneeSelectorComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatReduceFormsUsingMaterialModule,
  ],
  exports: [...exported],
  declarations: [...exported],
  providers: []
})
export class MatReduceFormsComposedModule {}
