// tslint:disable: variable-name
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  AbstractControl,
} from '@angular/forms';
import { FormBase } from '../form-base-class';
import { Tag } from './Tag';

import { v1 as uuidv1 } from 'uuid';
import { MakeLogger } from '../../utils/simple-logger';
import { take, takeUntil } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

function strings2Tags(newChoices: string[]): Tag[] {
  if (!Array.isArray(newChoices)) {
    return null;
  }
  return newChoices.map((c) => ({ name: c, id: c }));
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-tag-strings',
  template: `
    <form-tag-internal
      [choices]="$choicesAsTags | async"
      [value]="$valueAsTags | async"
      [filterStrategy]="filterStrategy"
      [controlRequired]="false"
      [controlInvalid]="internalControl.invalid"
      [appearance]="appearance"
      [placeholder]="placeholder"
      [autoCompleteObscureName]="autoCompleteObscureName"
      [autoCompleteText]="autoCompleteText"
      [disabled]="internalControl.disabled"
      [customValues]="customValues"
      [removable]="removable"
      [debug]="debug"
      (onRemovedTag)="onRemovedTag($event)"
      (onMenuItemClicked)="onMenuItemClicked($event)"
      (onBlurredTextField)="onBlurredTextField($event)"
    >
    </form-tag-internal>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LibFormTagStringsComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormTagStringsComponent),
      multi: true,
    },
  ],
})
export class LibFormTagStringsComponent
  extends FormBase<string[]>
  implements OnInit, OnDestroy {
  // EXTERNAL API
  @Input()
  set choices(newChoices: string[]) {
    this.$choicesAsTags.next(strings2Tags(newChoices));
  }
  @Input() customValues: boolean;
  @Input() disableNotification = false;
  @Input() removable = true;
  @Input() filterStrategy: 'all' | 'beginning' = 'all';
  @Output() addedNewString = new EventEmitter<string>();

  $choicesAsTags = new BehaviorSubject<Tag[]>([]);
  $valueAsTags = new BehaviorSubject<Tag[]>([]);

  logger = MakeLogger('form-tag-strings');

  constructor(private snack: MatSnackBar) {
    super();
    this.$nginit.pipe(take(1)).subscribe(() => this.init());
    this.internalControl.valueChanges
      .pipe(takeUntil(this._destroyed))
      .subscribe((currentValue) => {
        this.logger.log('updating $valueAsTags', {currentValue});
        this.$valueAsTags.next(strings2Tags(currentValue));
      });
  }

  init() {
    this.logger.SetEnabled(this.debug);
  }

  onMenuItemClicked(newTag: Tag) {
    this.logger.log('onMenuItemClicked', { newTag });
    this.addedTagToInternalValue(newTag.name);
  }
  onRemovedTag(tag: Tag) {
    this.logger.log('onRemovedTag', { tag });
    const currentValue = [...(this.value || [])];
    const indexToRemove = currentValue.findIndex((s) => s === tag.name);
    currentValue.splice(indexToRemove, 1);
    this.value = currentValue;
    this.$valueAsTags.next(strings2Tags(currentValue));
  }
  onBlurredTextField(text: string) {
    this.logger.log('onBlurredTextField', { text });
    if (!this.customValues) {
      return;
    }
    const newTag = text;
    // const newTag = this.makeNewTag(text);
    this.addedTagToInternalValue(newTag);
    this.notify(`Adding "${text}" to the global list...`);
    this.addedNewString.emit(newTag);
    if (Array.isArray(this.choices)) {
      this.choices = [newTag, ...this.choices];
    }
  }

  writeValue(newVal: string[]) {
    this.value = newVal || [];
    this.$valueAsTags.next(strings2Tags(newVal));
  }

  makeNewTag(name: string): Tag {
    const newTagId = uuidv1();
    const newTag: Tag = {
      id: newTagId,
      name: name.trim(),
    };
    return newTag;
  }

  addedTagToInternalValue(newTagString: string) {
    const currentValue = [...(this.value || [])];
    currentValue.push(newTagString);
    this.value = currentValue;
    this.$valueAsTags.next(strings2Tags(currentValue));
  }

  notify(message: string) {
    if (this.disableNotification) {
      return;
    }
    this.snack.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  CheckValueIsValid() {
    if (!this.internalControl || !this.internalControl.validator) {
      return;
    }
    const validator = this.internalControl.validator({} as AbstractControl);
    const isRequired = validator && validator.required;
    if (!isRequired) {
      return null;
    }
    if (!Array.isArray(this.value)) {
      return 'form value is not an array';
    }
    if (!this.value.length) {
      return 'form value is required but has no value';
    }
    return null;
  }
}
