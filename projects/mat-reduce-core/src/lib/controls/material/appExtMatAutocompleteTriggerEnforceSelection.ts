import {
  Directive,
  Input,
  Host,
  Self,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import {
  MatAutocompleteTrigger,
  MatAutocomplete
} from '@angular/material/autocomplete';
import { NgControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Taken from this answer: https://github.com/angular/components/issues/3334#issuecomment-469718514

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[appExtMatAutocompleteTriggerEnforceSelection]'
})
export class ExtMatAutocompleteTriggerEnforceSelectionDirective
  implements AfterViewInit, OnDestroy {
  @Input()
  matAutocomplete: MatAutocomplete;

  destroyed = new Subject();

  constructor(
    @Host()
    @Self()
    private readonly autoCompleteTrigger: MatAutocompleteTrigger,
    private readonly ngControl: NgControl
  ) {}

  ngAfterViewInit() {
    this.autoCompleteTrigger.panelClosingActions
      .pipe(takeUntil(this.destroyed))
      .subscribe(e => {
        if (!e || !e.source) {
          const selected = this.matAutocomplete.options
            .map(option => option.value)
            .find(option => option === this.ngControl.value);

          if (selected == null) {
            this.ngControl.reset();
          }
        }
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
  }
}
