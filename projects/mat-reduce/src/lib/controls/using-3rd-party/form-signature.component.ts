import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  forwardRef
} from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { FormBase } from '../form-base-class';

import { v1 as uuidv1 } from 'uuid';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'form-signature',
  template: `
    <h3>{{ placeholder }}</h3>
    <div #container class="signature-container">
      <div class="signature-border" [class.disabled-border]="disabled">
        <signature-pad
          #signaturePad
          [hidden]="disabled"
          [options]="signaturePadOptions"
          (onEndEvent)="drawComplete(signaturePad)"
        ></signature-pad>
        <img [hidden]="!disabled" [src]="this.value || blankImageSrc" />
      </div>
    </div>
  `,
  styles: [
    `
      h3 {
        display: inline-block;
        margin-bottom: 0;
      }
      .signature-container {
        display: inline-block;
        width: 100%;
      }
      .signature-border {
        display: inline-block;
        border: 1px #777 solid;
        margin: 20px;
        height: 200px;
      }
      .disabled-border {
        border: 2px #aaa dotted;
      }
      img {
        height: 100%;
      }
    `
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LibFormSignatureComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormSignatureComponent),
      multi: true
    }
  ]
})
export class LibFormSignatureComponent extends FormBase<string>
  implements OnInit, AfterViewInit {
  @Input()
  placeholder = 'Sign Here';

  blankImageSrc = 'https://i.imgur.com/4StmpUT.png';

  signaturePadOptions = {
    minWidth: 2,
    canvasWidth: 400,
    canvasHeight: 200
  };
  @ViewChild('signaturePad', { static: false } as any)
  signaturePad: ElementRef<SignaturePad>;
  @ViewChild('container') container: ElementRef<HTMLDivElement>;

  ngOnInit() {
    this.autoCompleteObscureName = uuidv1();
  }

  ngAfterViewInit() {
    this.updateWidthToParent();
  }

  writeValue(value: any): void {
    this.value = value;
    this.setSignatureToPad();
  }

  updateWidthToParent() {
    const pad = this.signaturePad.nativeElement;
    if (!pad) {
      return;
    }
    const containerWidth = this.container.nativeElement.clientWidth;
    if (containerWidth < 600) {
      const marginLeftAndRight = 20 * 2;
      pad.set(
        'canvasWidth',
        containerWidth - marginLeftAndRight - 10
      );
    }
  }

  setSignatureToPad() {
    // Set current signature from control
    const currentSignature = this.value;
    if (!this.signaturePad || !currentSignature) {
      return;
    }
    const pad = this.signaturePad.nativeElement;
    pad.fromDataURL(currentSignature);
  }

  drawComplete(e) {
    if (!e) {
      return;
    }
    const imgData = e.toDataURL();
    this.value = imgData;
  }
}
