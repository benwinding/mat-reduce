import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestTagsComponent } from './form-mocks/test-tags.component';
import { TestSelectComponent } from './form-mocks/test-select.component';
import { TestAssigneeComponent } from './form-mocks/test-assignee-selector.component';
import { MatReduceModule } from 'projects/mat-reduce/src/public-api';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTabsModule, MatIconModule, MatButtonModule } from '@angular/material';
import { AppBtnBackComponent } from './extra/btn-back.component';
import { AppRoutingModule } from './app.routing';
import { TestTextComponent } from './form-mocks/test-text.component';
import { TestColorComponent } from './form-mocks/test-color.component';
import { TestFormGroupComponent } from './form-mocks/test-formgroup.component';

@NgModule({
  declarations: [
    AppComponent,
    TestTagsComponent,
    TestFormGroupComponent,
    TestSelectComponent,
    TestAssigneeComponent,
    TestTextComponent,
    TestColorComponent,

    AppBtnBackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatReduceModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
