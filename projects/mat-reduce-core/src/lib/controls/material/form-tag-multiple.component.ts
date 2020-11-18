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
import { take } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-tag-multiple',
  template: `
    <form-tag-internal
      [choices]="choices"
      [value]="value"
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
      useExisting: forwardRef(() => LibFormTagMultipleComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormTagMultipleComponent),
      multi: true,
    },
  ],
})
export class LibFormTagMultipleComponent
  extends FormBase<Tag[]>
  implements OnInit, OnDestroy {
  // EXTERNAL API
  @Input()
  choices: Tag[];
  @Input() customValues: boolean;
  @Input() removable = true;
  @Input() filterStrategy: 'all' | 'beginning' = 'all';
  @Output() addedNewTag = new EventEmitter<Tag>();

  logger = MakeLogger('form-tag-multiple');

  constructor(private snack: MatSnackBar) {
    super();
    this.$nginit.pipe(take(1)).subscribe(() => this.init())
  }

  init() {
    this.logger.SetEnabled(this.debug);
  }
  
  onMenuItemClicked(newTag: Tag) {
    this.logger.log('onMenuItemClicked', { newTag });
    this.addedTagToInternalValue(newTag);
  }
  onRemovedTag(tag: Tag) {
    this.logger.log('onRemovedTag', { tag });
    const currentValue = [...(this.value || [])];
    const indexToRemove = currentValue.findIndex(t => t.id === tag.id);
    currentValue.splice(indexToRemove, 1);
    this.value = currentValue;
  }
  onBlurredTextField(text: string) {
    this.logger.log('onBlurredTextField', { text });
    if (!this.customValues) {
      return;
    }
    const newTag = this.makeNewTag(text);
    this.addedTagToInternalValue(newTag);
    this.notify(`Adding "${newTag.name}" to the global list...`);
    this.addedNewTag.emit(newTag);
    if (Array.isArray(this.choices)) {
      this.choices = [newTag, ...this.choices];
    }
  }

  writeValue(newVal: Tag[]) {
    this.value = newVal || [];
  }

  makeNewTag(name: string): Tag {
    const newTagId = uuidv1();
    const newTag: Tag = {
      id: newTagId,
      name: name.trim(),
    };
    return newTag;
  }

  addedTagToInternalValue(newTag: Tag) {
    const currentValue = [...(this.value || [])];
    currentValue.push(newTag);
    this.value = currentValue;
  }

  notify(message: string) {
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
