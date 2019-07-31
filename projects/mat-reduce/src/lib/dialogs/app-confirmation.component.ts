import {
  Component,
  Inject,
  Injectable,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatButton,
  MatDialog,
  MatDialogRef
} from '@angular/material';
import { take } from 'rxjs/operators';

interface ConfirmationDialogData {
  message: string;
  okIcon?: string;
  okLabel?: string;
}

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <p class="title is-centered">Confirm</p>
    <p class="subtitle is-centered">{{ message }}</p>
    <form (submit)="onSubmitOk()" class="buttons">
      <button #okButton mat-raised-button color="primary" type="submit">
        <mat-icon>{{ okIcon }}</mat-icon>
        <span>{{ okLabel }}</span>
      </button>
      <button mat-raised-button color="white" (click)="onClickCancel($event)">
        <mat-icon>cancel</mat-icon>
        <span>Cancel</span>
      </button>
    </form>
  `,
  styles: [
    `
      .title {
        font-size: 1.8em;
        margin: 0px;
      }
      .subtitle {
        color: grey;
        margin: 0px;
        font-size: 1.4em;
      }
      .buttons {
        display: flex;
        justify-content: center;
        margin-top: 10px;
      }
      button {
        margin-left: 10px;
        margin-right: 10px;
      }
    `
  ]
})
export class AppConfirmationDialogComponent implements OnInit {
  @ViewChild('okButton', {} as any) okButton: MatButton;

  message: string;
  okIcon: string;
  okLabel: string;

  constructor(
    public dialogRef: MatDialogRef<AppConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogData
  ) {
    this.message = data.message;
    this.okIcon = data.okIcon ? data.okIcon : 'done';
    this.okLabel = data.okLabel ? data.okLabel : 'Ok';
  }

  ngOnInit() {
    this.okButton.focus();
  }

  onClickCancel(e): void {
    e.preventDefault();
    this.dialogRef.close(false);
  }

  onSubmitOk(): void {
    this.dialogRef.close(true);
  }
}

@Injectable()
export class ConfirmationService {
  constructor(private dialog: MatDialog) {}

  async AskConfirm(
    confirmationMessage: string,
    okLabel?: string,
    okIcon?: string
  ): Promise<boolean> {
    const data = {
      message: confirmationMessage,
      okIcon: okIcon,
      okLabel: okLabel
    } as ConfirmationDialogData;
    const dialogRef = this.dialog.open(AppConfirmationDialogComponent, {
      width: '300px',
      hasBackdrop: true,
      disableClose: true,
      data: data
    });

    const result: boolean = await dialogRef
      .afterClosed()
      .pipe(take(1))
      .toPromise();
    console.log(`Confirmation-Service: AskConfirm=${!!result}`);
    return result;
  }
}
