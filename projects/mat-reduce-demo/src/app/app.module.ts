import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatReduceModule } from 'projects/mat-reduce/src/public-api';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatTabsModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';
import { AppBtnBackComponent } from './extra/btn-back.component';
import { AppRoutingModule } from './app.routing';
import {
  TestDateComponent,
  TestTagsComponent,
  TestFormGroupComponent,
  TestSelectObjectComponent,
  TestSelectComponent,
  TestAssigneeComponent,
  TestTextComponent,
  TestColorComponent,
  TestTimeComponent,
  TestNumberComponent,
  TestEditorComponent,
  TestTogglesComponent
} from './form-mocks';

@NgModule({
  declarations: [
    AppComponent,
    TestDateComponent,
    TestTagsComponent,
    TestFormGroupComponent,
    TestSelectObjectComponent,
    TestSelectComponent,
    TestAssigneeComponent,
    TestTextComponent,
    TestColorComponent,
    TestTimeComponent,
    TestNumberComponent,
    TestEditorComponent,
    TestTogglesComponent,

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
export class AppModule {}
