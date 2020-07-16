import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  forwardRef,
  AfterViewInit,
} from '@angular/core';
import { FormBase } from '../form-base-class';

import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { SimpleLog } from '../../utils';
import SignaturePad from 'signature_pad';
import { take } from 'rxjs/operators';

@Component({
  selector: 'form-signature',
  template: `
    <div #container class="signature-container">
      <h3>{{ placeholder }}</h3>
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
        margin: 15px;
        max-width: 600px;
        width: 100%;
      }
      .signature-border {
        display: inline-block;
        width: min-content;
        border: 1px #777 solid;
        width: 100%;
        height: 200px;
      }
      .disabled-border {
        border: 2px #aaa dotted;
      }
      canvas {
        border: 2px #ddd dotted;
      }
      img {
        height: 100%;
      }
    `,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LibFormSignatureComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormSignatureComponent),
      multi: true,
    },
  ],
})
export class LibFormSignatureComponent extends FormBase<string> implements AfterViewInit {
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

  constructor() {
    super();
    this.$nginit.pipe(take(1)).subscribe(() => this.init());
    this.$ngdestroy.pipe(take(1)).subscribe(() => this.destroy());
  }

  init() {
    this.logger = new SimpleLog(this.debug);
  }

  destroy() {
    this.signaturePad.nativeElement.remove();
  }

  ngAfterViewInit() {
    this.makeSignaturePad(this.signaturePad.nativeElement);
    setTimeout(() => {
      this.updateWidthToParent();
    });
  }

  makeSignaturePad(el: HTMLCanvasElement) {
    const options = {
      minWidth: 2,
      canvasWidth: 400,
      canvasHeight: 200,
    };
    this.signaturePadObj = new SignaturePad(el, options);
    this.signaturePadObj.onEnd = () => this.drawComplete();
  }

  writeValue(value: any): void {
    this.logger.log('writeValue', { value });
    this.value = value;
    this.setSignatureToPad(value);
  }

  updateWidthToParent() {
    const containerWidth = this.container.nativeElement.clientWidth;
    this.signaturePad.nativeElement.width = containerWidth;
    this.signaturePad.nativeElement.height = 200 - 4;
  }

  async setSignatureToPad(value: string) {
    await new Promise((res) => setTimeout(res, 100));
    // Set current signature from control
    const canAccessPad = !!this.signaturePadObj;
    this.logger.log('setSignatureToPad', { canAccessPad, value });
    if (!canAccessPad) {
      return;
    }
    this.signaturePadObj.fromDataURL(value);
  }

  drawComplete() {
    const imgData = this.signaturePadObj.toDataURL();
    this.logger.log('drawComplete', { imgData });
    this.value = imgData;
  }
}
