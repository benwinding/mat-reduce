import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  TestTextComponent,
  TestEditorComponent,
  TestSelectComponent,
  TestTagsComponent,
  TestFormGroupComponent,
  TestAssigneeComponent,
  TestColorComponent,
  TestTimeComponent,
  TestNumberComponent,
  TestTogglesComponent,
  TestDateComponent,
  TestSelectObjectComponent,
  TestPhoneNumberComponent,
  TestSelectObjectGroupedComponent,
  TestSelectObjectSelectAllComponent,
  TestSelectObjectAutocompleteComponent
} from './form-mocks';

const allRoutes: Routes = [
  {
    path: 'test-text',
    component: TestTextComponent
  },
  {
    path: 'test-toggles',
    component: TestTogglesComponent
  },
  {
    path: 'test-editor',
    component: TestEditorComponent
  },
  {
    path: 'test-select',
    component: TestSelectComponent
  },
  {
    path: 'test-select-object',
    component: TestSelectObjectComponent
  },
  {
    path: 'test-select-object-grouped',
    component: TestSelectObjectGroupedComponent
  },
  {
    path: 'test-select-object-selectall',
    component: TestSelectObjectSelectAllComponent
  },
  {
    path: 'test-select-object-autocomplete',
    component: TestSelectObjectAutocompleteComponent
  },
  {
    path: 'test-tags',
    component: TestTagsComponent
  },
  {
    path: 'test-formgroup',
    component: TestFormGroupComponent
  },
  {
    path: 'test-assignee',
    component: TestAssigneeComponent
  },
  {
    path: 'test-color',
    component: TestColorComponent
  },
  {
    path: 'test-time',
    component: TestTimeComponent
  },
  {
    path: 'test-number',
    component: TestNumberComponent
  },
  {
    path: 'test-phone-number',
    component: TestPhoneNumberComponent
  },
  {
    path: 'test-date',
    component: TestDateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(allRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
