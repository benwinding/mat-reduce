import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>Welcome to {{ title }}!</h1>
    </div>

    <app-test-assignee-selector>
    </app-test-assignee-selector>

    <app-test-tags>
    </app-test-tags>
  `
})
export class AppComponent {
  title = 'mat-wrapped';
}
