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
      <div class="signature-border">
        <signature-pad
          *ngIf="!disabled"
          [options]="signaturePadOptions"
          (onEndEvent)="drawComplete()"
        ></signature-pad>
        <img *ngIf="disabled" [src]="this.value" />
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
      img {
        width: 100%;
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

  signaturePadOptions = {
    minWidth: 2,
    canvasWidth: 400,
    canvasHeight: 200
  };
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  @ViewChild('container') container: ElementRef<HTMLDivElement>;

  ngOnInit() {
    this.autoCompleteObscureName = uuidv1();
  }

  ngAfterViewInit() {
    this.updateWidthToParent();
  }

  writeValue(value: any): void {
    this.value = value;
    // Set current signature from control
    if (!this.signaturePad) {
      return;
    }
    const currentSignature = this.value;
    this.signaturePad.fromDataURL(currentSignature);
  }

  updateWidthToParent() {
    const containerWidth = this.container.nativeElement.clientWidth;
    if (containerWidth < 600) {
      const marginLeftAndRight = 20 * 2;
      this.signaturePad.set(
        'canvasWidth',
        containerWidth - marginLeftAndRight - 10
      );
    }
  }

  drawComplete() {
    const imgData = this.signaturePad.toDataURL();
    this.value = imgData;
  }
}
