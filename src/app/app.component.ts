import { Component } from "@angular/core";
import { of, Observable } from "rxjs";
import { Tag } from "./forms/Tag";

import { v1 as uuidv1 } from "uuid";
import { FormControl } from '@angular/forms';

function makeTag(name): Tag {
  return {
    name,
    id: uuidv1()
  };
}

@Component({
  selector: "app-root",
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>Welcome to {{ title }}!</h1>
    </div>
    <form-tag-single
      [selectChoices$]="selectChoices$"
      placeholder="Select form list"
      [formControl]="tagControl"
    >
    </form-tag-single>
  `
})
export class AppComponent {
  title = "mat-wrapped";

  tagControl = new FormControl();

  selectChoices$: Observable<Tag[]> = of([
    makeTag("Frank"),
    makeTag("Albert"),
    makeTag("John")
  ]);
}
