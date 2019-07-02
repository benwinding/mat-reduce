import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestSelectComponent } from './form-mocks/test-select.component';
import { TestTagsComponent } from './form-mocks/test-tags.component';
import { TestAssigneeComponent } from './form-mocks/test-assignee-selector.component';
import { TestTextComponent } from './form-mocks/test-text.component';


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
    path: 'test-assignee',
    component: TestAssigneeComponent
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