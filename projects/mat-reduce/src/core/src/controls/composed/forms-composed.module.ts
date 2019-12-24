import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { MatReduceFormsUsingMaterialModule } from '../material/forms-material.module';
import { LibFormAssigneeSelectorComponent } from './form-assignee-selector.component';
import { LibFormGroupContactComponent } from './form-contact.component';

const exportedModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MatIconModule,
  MatCardModule,
  MatReduceFormsUsingMaterialModule
];

const exported = [LibFormAssigneeSelectorComponent, LibFormGroupContactComponent];

@NgModule({
  imports: [...exportedModules],
  exports: [...exported, ...exportedModules],
  declarations: [...exported],
  providers: []
})
export class MatReduceFormsComposedModule {}
