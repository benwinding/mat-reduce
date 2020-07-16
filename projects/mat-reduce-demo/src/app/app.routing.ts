import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  TestTextComponent,
  TestTogglesComponent,
  TestSelectComponent,
  TestSelectObjectComponent,
  TestSelectObjectGroupedComponent,
  TestSelectObjectSelectAllComponent,
  TestSelectObjectAutocompleteComponent,
  TestTagsComponent,
  TestFormGroupComponent,
  TestAssigneeComponent,
  TestNumberComponent,
} from './test-material';
import {
  TestEditorComponent,
  TestPhoneNumberComponent,
  TestColorComponent,
  TestTimeComponent,
  TestDateComponent,
  TestSignatureComponent,
} from './test-3rd-party';

export const materialRoutes: Routes = [
  {
    path: 'form-text',
    component: TestTextComponent,
  },
  {
    path: 'form-toggle',
    component: TestTogglesComponent,
  },
  {
    path: 'form-select',
    component: TestSelectComponent,
  },
  {
    path: 'form-select-object',
    component: TestSelectObjectComponent,
  },
  {
    path: 'form-select-object-grouped',
    component: TestSelectObjectGroupedComponent,
  },
  {
    path: 'form-select-object-selectall',
    component: TestSelectObjectSelectAllComponent,
  },
  {
    path: 'form-select-object-autocomplete',
    component: TestSelectObjectAutocompleteComponent,
  },
  {
    path: 'form-tags',
    component: TestTagsComponent,
  },
  {
    path: 'form-formgroup',
    component: TestFormGroupComponent,
  },
  {
    path: 'form-assignee',
    component: TestAssigneeComponent,
  },
  {
    path: 'form-number',
    component: TestNumberComponent,
  },
  {
    path: 'form-phone-number',
    component: TestPhoneNumberComponent,
  },
];

export const thirdPartyRoutes: Routes = [
  {
    path: 'form-color',
    component: TestColorComponent,
  },
  {
    path: 'form-time',
    component: TestTimeComponent,
  },
  {
    path: 'form-date',
    component: TestDateComponent,
  },
  {
    path: 'form-editor',
    component: TestEditorComponent,
  },
  {
    path: 'form-signature',
    component: TestSignatureComponent,
  },

];

const allRoutes: Routes = [
  ...materialRoutes,
  ...thirdPartyRoutes
]

@NgModule({
  imports: [RouterModule.forRoot(allRoutes, {enableTracing: false})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
