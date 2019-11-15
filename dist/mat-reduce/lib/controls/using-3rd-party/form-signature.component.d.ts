import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { FormBase } from '../form-base-class';
export declare class LibFormSignatureComponent extends FormBase<string> implements OnInit, AfterViewInit {
    placeholder: string;
    blankImageSrc: string;
    signaturePadOptions: {
        minWidth: number;
        canvasWidth: number;
        canvasHeight: number;
    };
    signaturePad: ElementRef<SignaturePad>;
    container: ElementRef<HTMLDivElement>;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    writeValue(value: any): void;
    updateWidthToParent(): void;
    setSignatureToPad(): void;
    drawComplete(e: any): void;
}
