import {
  Component,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { SimpleLog, FormBase } from '../from-core';
import { debounceTime, takeUntil } from 'rxjs/operators';

// import 'quill/dist/quill.min.js';
import * as QuillNamespace from 'quill';
const Quill: any = QuillNamespace;
import Counter, { QuillCounterConfig } from './editor-modules/counter';
import { AddQuillInlineStyles } from './editor-modules/add-quill-inline-styles';

import ImageCompress from 'quill-image-compress';
import ImageResize from 'quill-image-resize-module';
import ImageRotate from 'quill-image-rotate-module';
import htmlEditButton from 'quill-html-edit-button';
import { FontStyle, FontSizeStyleText } from './editor-modules/quill-font-sizes';

import { AddQuillFonts } from './editor-modules/quill-fonts';

const fontsGoogle = [
  'Abril Fatface',
  'Cairo',
  'Concert One',
  'Courier',
  'Crimson Text',
  'Fjalla One',
  'Garamond',
  'IBM Plex Sans',
  'Nunito',
  'Poppins',
  'Roboto',
  'Rubik',
  'Tahoma',
  'Ubuntu',
  'Varela',
  'Verdana',
];
const { fontObjs, fontStyleText } = AddQuillFonts(fontsGoogle, Quill);
const fontStylesText = FontSizeStyleText + fontStyleText

AddQuillInlineStyles(Quill);

Quill.register('modules/htmlEditButton', htmlEditButton);
Quill.register('modules/counter', Counter);
Quill.register('modules/counterChars', Counter);
Quill.register('modules/counterKiloBytes', Counter);
Quill.register('modules/imageCompress', ImageCompress);
Quill.register('modules/image1Rotate', ImageRotate);
Quill.register('modules/image2Resize', ImageResize);
Quill.register(FontStyle, true);

type Config = QuillCounterConfig;

@Component({
  selector: 'form-quill-editor',
  template: `
    <link
      href="https://fonts.googleapis.com/css?family=Roboto"
      rel="stylesheet"
    />
    <div [class.ql-editor-disabled]="disabled">
      <quill-editor
        [formControl]="quillControl"
        [modules]="quillModulesUsed"
        [placeholder]="placeholder"
        [preserveWhitespace]="true"
      >
        <div quill-editor-toolbar>
          <span class="ql-formats">
            <select class="ql-font">
              <option selected>Sans Serif</option>
              <option *ngFor="let font of fontObjs" [value]="font.value">{{
                font.name
              }}</option>
            </select>
          </span>
          <span class="ql-formats">
            <select class="ql-fontsize">
              <option selected>Normal</option>
              <option value="1em">Size 6</option>
              <option value="2em">Size 5</option>
              <option value="3em">Size 4</option>
              <option value="4em">Size 3</option>
              <option value="5em">Size 2</option>
              <option value="6em">Size 1</option>
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
          <span class="ql-formats ql-font12px">
            <div id="counter"></div>
          </span>
          <span class="ql-formats ql-font12px">
            <div id="counterChars"></div>
          </span>
          <span class="ql-formats ql-font12px">
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
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormQuillEditorComponent),
      multi: true,
    },
  ],
  styleUrls: [
    './quill-themes/quill.snow.css',
    './quill-themes/quill.bubble.css',
    './form-quill-editor.css',
  ],
  encapsulation: ViewEncapsulation.None,
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

  quillControl = new FormControl();

  fontObjs: { name: string; value: string }[] = fontObjs;

  logger: SimpleLog;
  fontStylesRef: HTMLStyleElement;

  constructor() {
    super();
    this.$nginit.subscribe(() => this.onInit());
    this.$ngdestroy.subscribe(() => this.onDestroy());
  }

  onInit() {
    this.logger = new SimpleLog(this.debug);
    const quillModulesDefaults = {
      toolbar: '#toolbar',
      counter: { divId: 'counter', units: 'words' } as Config,
      counterChars: { divId: 'counterChars', units: 'chars' } as Config,
      counterKiloBytes: { divId: 'counterKiloBytes', units: 'kb' } as Config,
      imageCompress: {
        quality: 0.7,
        maxWidth: 1200,
      },
      image1Rotate: true,
      image2Resize: true,
      htmlEditButton: { debug: true },
    };
    this.quillModulesUsed = {
      ...quillModulesDefaults,
      ...this.quillModules,
    };

    this.quillControl.valueChanges
      .pipe(takeUntil(this._destroyed))
      .pipe(debounceTime(1000))
      .subscribe((newValue) => {
        this._value = this.wrapValue(newValue);
        this.onChange(this._value);
        this.onTouched();
      });

    this.fontStylesRef = document.createElement('style');
    this.fontStylesRef.id = 'quill-styles-'+ Math.random().toString(32).slice(2,10);
    this.fontStylesRef.innerHTML = fontStylesText;
    document.head.appendChild(this.fontStylesRef);
  }

  onDestroy() {
    this.fontStylesRef.remove();
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    setTimeout(() => {
      if (isDisabled) {
        this.quillControl.disable();
      } else {
        this.quillControl.enable();
      }
    });
  }

  writeValue(value: string) {
    this.value = this.wrapValue(value);
    this.quillControl.setValue(value);
    this.logger.log('form-quill-editor: writeValue', {
      value,
      thisValue: this.value,
    });
  }

  wrapValue(value: string) {
    return `<div style="white-space: pre-line; word-break: break-word;" >${value}</div>`;
  }
}
