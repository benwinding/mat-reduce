import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  forwardRef
} from '@angular/core';
import { FormBase } from '../form-base-class';

import { v1 as uuidv1 } from 'uuid';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { SimpleLog } from '../../utils';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'form-signature',
  template: `
    <h3>{{ placeholder }}</h3>
    <div #container class="signature-container">
      <div class="signature-border" [class.disabled-border]="disabled">
        <canvas #signaturePad [hidden]="disabled"> </canvas>
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

  @ViewChild('signaturePad', { static: false } as any)
  signaturePad: ElementRef<HTMLCanvasElement>;
  @ViewChild('container', { static: true }) container: ElementRef<
    HTMLDivElement
  >;

  private signaturePadObj: SignaturePad;

  private logger: SimpleLog;

  ngOnInit() {
    this.logger = new SimpleLog(this.debug);
  }

  ngAfterViewInit() {
    this.makeSignaturePad(this.signaturePad.nativeElement);
    setTimeout(() => {
      this.updateWidthToParent();
    }, 100);
  }

  makeSignaturePad(el: HTMLCanvasElement) {
    const options = {
      minWidth: 2,
      canvasWidth: 400,
      canvasHeight: 200
    };
    this.signaturePadObj = new SignaturePad(el, options);
    this.signaturePadObj.onEnd = e => this.drawComplete(e);
  }

  writeValue(value: any): void {
    if (this.debug) {
      this.logger.log('writeValue', { value });
    }
    this.value = value;
    setTimeout(() => {
      this.setSignatureToPad();
    }, 100);
  }

  updateWidthToParent() {
    const pad = this.signaturePad.nativeElement;
    if (!pad) {
      return;
    }
    const containerWidth = this.container.nativeElement.clientWidth;
    if (containerWidth < 600) {
      const marginLeftAndRight = 20 * 2;
      this.signaturePad.nativeElement.width =
        containerWidth - marginLeftAndRight - 10;
    }
  }

  setSignatureToPad() {
    // Set current signature from control
    const currentSignature = this.value;
    if (!this.signaturePad || !currentSignature) {
      return;
    }
    this.signaturePadObj.fromDataURL(currentSignature);
  }

  drawComplete(e) {
    if (!e) {
      return;
    }
    const imgData = e.toDataURL();
    this.value = imgData;
  }
}
