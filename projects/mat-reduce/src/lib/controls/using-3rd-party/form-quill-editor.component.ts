import {
  Component,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from '../form-base-class';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil, distinctUntilChanged } from 'rxjs/operators';

import * as QuillNamespace from 'quill';
const Quill: any = QuillNamespace;
import Counter, { QuillCounterConfig } from './editor-modules/counter';

import { ImageDrop } from 'quill-image-drop-module';
import ImageCompress from 'quill-image-compress';
import ImageResize from 'quill-image-resize-module';
import { htmlEditButton } from 'quill-html-edit-button';
import { AddQuillInlineStyles } from './editor-modules/add-quill-inline-styles';
import { SimpleLog } from '../../utils/logger';

AddQuillInlineStyles(Quill);

Quill.register('modules/htmlEditButton', htmlEditButton);
Quill.register('modules/counter', Counter);
Quill.register('modules/counterChars', Counter);
Quill.register('modules/counterKiloBytes', Counter);
Quill.register('modules/imageDrop', ImageDrop);
Quill.register('modules/imageCompress', ImageCompress);
Quill.register('modules/imageResize', ImageResize);

type conf = QuillCounterConfig;

@Component({
  selector: 'form-quill-editor',
  template: `
    <div [class.editor-disabled]="disabled">
      <quill-editor
        (onContentChanged)="onContentChanged.next($event)"
        [ngModel]="value"
        [modules]="quillModulesUsed"
        [disabled]="disabled"
        [placeholder]="placeholder"
      >
        <div quill-editor-toolbar>
          <span class="ql-formats">
            <select class="ql-font">
              <option selected></option>
              <option value="serif"></option>
              <option value="monospace"></option>
            </select>
            <select class="ql-header">
              <option value="1"></option>
              <option value="2"></option>
              <option value="3"></option>
              <option value="4"></option>
              <option value="5"></option>
              <option value="6"></option>
              <option selected></option>
            </select>
          </span>
          <span class="ql-formats">
            <button class="ql-bold"></button>
            <button class="ql-italic"></button>
            <button class="ql-underline"></button>
            <button class="ql-strike"></button>
          </span>
          <span class="ql-formats">
            <select class="ql-color"></select>
            <select class="ql-background"></select>
          </span>
          <span class="ql-formats">
            <button class="ql-list" value="ordered"></button>
            <button class="ql-list" value="bullet"></button>
            <select class="ql-align">
              <option selected></option>
              <option value="center"></option>
              <option value="right"></option>
              <option value="justify"></option>
            </select>
          </span>
          <span class="ql-formats">
            <button class="ql-link"></button>
            <button class="ql-image"></button>
          </span>
          <span class="ql-formats font12px">
            <div id="counter"></div>
          </span>
          <span class="ql-formats font12px">
            <div id="counterChars"></div>
          </span>
          <span class="ql-formats font12px">
            <div id="counterKiloBytes"></div>
          </span>
        </div>
      </quill-editor>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LibFormQuillEditorComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormQuillEditorComponent),
      multi: true
    }
  ],
  styles: [
    `
      .font12px {
        font-size: 12px;
      }
      .editor-disabled {
        filter: contrast(0.4) brightness(1.5);
      }
    `
  ],
  styleUrls: ['./quill-css/quill.snow.css', './quill-css/quill.bubble.css'],
  encapsulation: ViewEncapsulation.None
})
export class LibFormQuillEditorComponent extends FormBase<string>
  implements OnDestroy, OnInit {
  @Input()
  quillModules: any = {};
  @Input()
  maxImageWidth = 2000;
  @Input()
  placeholder = 'Input content here...';

  quillModulesUsed: any = {};

  onContentChanged = new Subject();
  destroyed = new Subject();

  logger: SimpleLog;

  ngOnInit() {
    this.logger = new SimpleLog(this.debug);
    const quillModulesDefaults = {
      toolbar: '#toolbar',
      counter: { container: '#counter', units: 'words' } as conf,
      counterChars: { container: '#counterChars', units: 'chars' } as conf,
      counterKiloBytes: { container: '#counterKiloBytes', units: 'kb' } as conf,
      imageDrop: true,
      imageCompress: {
        quality: 0.7,
        maxWidth: 1200
      },
      clipboard: {
        matchVisual: false
      },
      imageResize: true
    };
    this.quillModulesUsed = {
      ...quillModulesDefaults,
      ...this.quillModules
    };

    this.onContentChanged
      .pipe(
        debounceTime(1000),
        takeUntil(this.destroyed),
        distinctUntilChanged()
      )
      .subscribe((event: any) => {
        const htmlValue = event.html || '<p></p>';
        this.logger.log('LibFormQuillEditorComponent:', { htmlValue, event });
        this.writeValue(htmlValue);
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
  }
}
