import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MatReduceModule } from './from-mat-reduce';
// import { MatReduceCoreModule } from './from-mat-reduce-core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
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
  TestTogglesComponent,
  TestPhoneNumberComponent
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
    TestPhoneNumberComponent,

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
    // MatReduceCoreModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
