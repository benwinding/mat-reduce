import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestTagsComponent } from './form-mocks/test-tags.component';
import { TestSelectComponent } from './form-mocks/test-select.component';
import { TestAssigneeComponent } from './form-mocks/test-assignee-selector.component';
import { MatReducedModule } from 'projects/mat-reduce/src/public-api';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestTagsComponent,
    TestSelectComponent,
    TestAssigneeComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatReducedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
