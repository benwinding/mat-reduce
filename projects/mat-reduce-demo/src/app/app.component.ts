import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        <a routerLink="/">Welcome to {{ title }}!</a>
      </h1>
    </div>
    <ul *ngIf="currentUrl == '/'">
      <li>CORE
        <ul>
          <li><a routerLink="test-date">form-date</a></li>
          <li><a routerLink="test-formgroup">form-formgroup</a></li>
          <li><a routerLink="test-number">form-number</a></li>
          <li><a routerLink="test-select-object">form-select-object</a></li>
          <li><a routerLink="test-select-object-grouped">test-select-object-grouped</a></li>
          <li><a routerLink="test-select">form-select</a></li>
          <li><a routerLink="test-tags">form-tags</a></li>
          <li><a routerLink="test-text">form-text</a></li>
          <li><a routerLink="test-toggles">form-toggles</a></li>
        </ul>
      </li>
      <li>3rd Party
        <ul>
          <li><a routerLink="test-assignee">form-assignee</a></li>
          <li><a routerLink="test-color">form-color</a></li>
          <li><a routerLink="test-editor">form-editor</a></li>
          <li><a routerLink="test-phone-number">form-phone-number</a></li>
          <li><a routerLink="test-time">form-time</a></li>
        </ul>
      </li>
    </ul>
    <router-outlet> </router-outlet>
  `
})
export class AppComponent {
  title = 'mat-wrapped';
  currentUrl = '';

  constructor(private router: Router) {
    this.router.events.subscribe((e: Event) => {
      if (!(e instanceof NavigationEnd)) {
        return;
      }
      this.currentUrl = e.url;
    });
  }
}
