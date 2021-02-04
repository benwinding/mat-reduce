import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MatReduceModule } from './from-mat-reduce';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';

import { AppBtnBackComponent } from './extra/btn-back.component';
import {
  TestDateComponent,
  TestColorComponent,
  TestTimeComponent,
  TestPhoneNumberComponent,
  TestEditorComponent,
  TestSignatureComponent,
} from './test-3rd-party';
import {
  TestTagsComponent,
  TestFormGroupComponent,
  TestSelectObjectComponent,
  TestSelectObjectGroupedComponent,
  TestSelectComponent,
  TestAssigneeComponent,
  TestTextComponent,
  TestNumberComponent,
  TestTogglesComponent,
  TestSelectObjectSelectAllComponent,
  TestSelectObjectAutocompleteComponent,
  TestTagStringsComponent,
} from './test-material';
import { RouterModule } from '@angular/router';
import { TestTabsComponent } from './test-layouts';

@NgModule({
  declarations: [
    AppComponent,
    TestDateComponent,
    TestTagsComponent,
    TestFormGroupComponent,
    TestSelectObjectComponent,
    TestSelectObjectGroupedComponent,
    TestSelectComponent,
    TestAssigneeComponent,
    TestTextComponent,
    TestColorComponent,
    TestTimeComponent,
    TestNumberComponent,
    TestEditorComponent,
    TestTogglesComponent,
    TestPhoneNumberComponent,
    TestSignatureComponent,
    TestSelectObjectSelectAllComponent,
    TestSelectObjectAutocompleteComponent,
    TestTagStringsComponent,
    TestTabsComponent,

    AppBtnBackComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,

    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatReduceModule,
    MatDialogModule,
    MatButtonModule,
    // MatReduceCoreModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
