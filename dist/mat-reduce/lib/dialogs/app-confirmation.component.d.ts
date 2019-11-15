import { OnInit } from '@angular/core';
import { MatButton, MatDialog, MatDialogRef } from '@angular/material';
interface ConfirmationDialogData {
    message: string;
    okIcon?: string;
    okLabel?: string;
}
export declare class AppConfirmationDialogComponent implements OnInit {
    dialogRef: MatDialogRef<AppConfirmationDialogComponent>;
    data: ConfirmationDialogData;
    okButton: MatButton;
    message: string;
    okIcon: string;
    okLabel: string;
    constructor(dialogRef: MatDialogRef<AppConfirmationDialogComponent>, data: ConfirmationDialogData);
    ngOnInit(): void;
    onClickCancel(e: any): void;
    onSubmitOk(): void;
}
export declare class ConfirmationService {
    private dialog;
    constructor(dialog: MatDialog);
    AskConfirm(confirmationMessage: string, okLabel?: string, okIcon?: string): Promise<boolean>;
}
export {};
