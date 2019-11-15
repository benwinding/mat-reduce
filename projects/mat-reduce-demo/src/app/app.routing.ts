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
  TestDateComponent
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
    path: 'test-date',
    component: TestDateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(allRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
