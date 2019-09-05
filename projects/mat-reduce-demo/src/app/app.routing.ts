import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestSelectComponent } from './form-mocks/test-select.component';
import { TestTagsComponent } from './form-mocks/test-tags.component';
import { TestAssigneeComponent } from './form-mocks/test-assignee-selector.component';
import { TestTextComponent } from './form-mocks/test-text.component';
import { TestColorComponent } from './form-mocks/test-color.component';
import { TestFormGroupComponent } from './form-mocks/test-formgroup.component';
import { TestTimeComponent } from './form-mocks/test-time.component';


const allRoutes: Routes = [
  {
    path: 'test-text',
    component: TestTextComponent
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(allRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}