/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Inject, Injectable, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatButton, MatDialog, MatDialogRef } from '@angular/material';
import { take } from 'rxjs/operators';
/**
 * @record
 */
function ConfirmationDialogData() { }
if (false) {
    /** @type {?} */
    ConfirmationDialogData.prototype.message;
    /** @type {?|undefined} */
    ConfirmationDialogData.prototype.okIcon;
    /** @type {?|undefined} */
    ConfirmationDialogData.prototype.okLabel;
}
export class AppConfirmationDialogComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.message = data.message;
        this.okIcon = data.okIcon ? data.okIcon : 'done';
        this.okLabel = data.okLabel ? data.okLabel : 'Ok';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.okButton && this.okButton.focus) {
            this.okButton.focus();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClickCancel(e) {
        e.preventDefault();
        this.dialogRef.close(false);
    }
    /**
     * @return {?}
     */
    onSubmitOk() {
        this.dialogRef.close(true);
    }
}
AppConfirmationDialogComponent.decorators = [
    { type: Component, args: [{
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
                styles: [`
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
    `]
            }] }
];
/** @nocollapse */
AppConfirmationDialogComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
AppConfirmationDialogComponent.propDecorators = {
    okButton: [{ type: ViewChild, args: ['okButton', (/** @type {?} */ ({})),] }]
};
if (false) {
    /** @type {?} */
    AppConfirmationDialogComponent.prototype.okButton;
    /** @type {?} */
    AppConfirmationDialogComponent.prototype.message;
    /** @type {?} */
    AppConfirmationDialogComponent.prototype.okIcon;
    /** @type {?} */
    AppConfirmationDialogComponent.prototype.okLabel;
    /** @type {?} */
    AppConfirmationDialogComponent.prototype.dialogRef;
    /** @type {?} */
    AppConfirmationDialogComponent.prototype.data;
}
export class ConfirmationService {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?} confirmationMessage
     * @param {?=} okLabel
     * @param {?=} okIcon
     * @return {?}
     */
    AskConfirm(confirmationMessage, okLabel, okIcon) {
        return tslib_1.__awaiter(this, void 0, void 0, /** @this {!ConfirmationService} */ function* () {
            /** @type {?} */
            const data = (/** @type {?} */ ({
                message: confirmationMessage,
                okIcon: okIcon,
                okLabel: okLabel
            }));
            /** @type {?} */
            const dialogRef = this.dialog.open(AppConfirmationDialogComponent, {
                width: '300px',
                hasBackdrop: true,
                disableClose: false,
                data: data
            });
            /** @type {?} */
            const result = yield dialogRef
                .afterClosed()
                .pipe(take(1))
                .toPromise();
            console.log(`Confirmation-Service: AskConfirm=${!!result}`);
            return result;
        });
    }
}
ConfirmationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfirmationService.ctorParameters = () => [
    { type: MatDialog }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfirmationService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtcmVkdWNlLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZ3MvYXBwLWNvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixVQUFVLEVBRVYsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxlQUFlLEVBQ2YsU0FBUyxFQUNULFNBQVMsRUFDVCxZQUFZLEVBQ2IsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFdEMscUNBSUM7OztJQUhDLHlDQUFnQjs7SUFDaEIsd0NBQWdCOztJQUNoQix5Q0FBaUI7O0FBMENuQixNQUFNLE9BQU8sOEJBQThCOzs7OztJQU96QyxZQUNTLFNBQXVELEVBQzlCLElBQTRCO1FBRHJELGNBQVMsR0FBVCxTQUFTLENBQThDO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQXdCO1FBRTVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNqRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTtZQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7OztZQXBFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O0dBYVQ7eUJBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FtQkM7YUFFSjs7OztZQWhEQyxZQUFZOzRDQTBEVCxNQUFNLFNBQUMsZUFBZTs7O3VCQVJ4QixTQUFTLFNBQUMsVUFBVSxFQUFFLG1CQUFBLEVBQUUsRUFBTzs7OztJQUFoQyxrREFBc0Q7O0lBRXRELGlEQUFnQjs7SUFDaEIsZ0RBQWU7O0lBQ2YsaURBQWdCOztJQUdkLG1EQUE4RDs7SUFDOUQsOENBQTREOztBQXdCaEUsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUM5QixZQUFvQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQzs7Ozs7OztJQUVuQyxVQUFVLENBQ2QsbUJBQTJCLEVBQzNCLE9BQWdCLEVBQ2hCLE1BQWU7OztrQkFFVCxJQUFJLEdBQUcsbUJBQUE7Z0JBQ1gsT0FBTyxFQUFFLG1CQUFtQjtnQkFDNUIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFLE9BQU87YUFDakIsRUFBMEI7O2tCQUNyQixTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsOEJBQThCLEVBQUU7Z0JBQ2pFLEtBQUssRUFBRSxPQUFPO2dCQUNkLFdBQVcsRUFBRSxJQUFJO2dCQUNqQixZQUFZLEVBQUUsS0FBSztnQkFDbkIsSUFBSSxFQUFFLElBQUk7YUFDWCxDQUFDOztrQkFFSSxNQUFNLEdBQVksTUFBTSxTQUFTO2lCQUNwQyxXQUFXLEVBQUU7aUJBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDYixTQUFTLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUM1RCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO0tBQUE7OztZQTNCRixVQUFVOzs7O1lBbEZULFNBQVM7Ozs7Ozs7SUFvRkcscUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5qZWN0LFxyXG4gIEluamVjdGFibGUsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIE1BVF9ESUFMT0dfREFUQSxcclxuICBNYXRCdXR0b24sXHJcbiAgTWF0RGlhbG9nLFxyXG4gIE1hdERpYWxvZ1JlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmludGVyZmFjZSBDb25maXJtYXRpb25EaWFsb2dEYXRhIHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgb2tJY29uPzogc3RyaW5nO1xyXG4gIG9rTGFiZWw/OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWNvbmZpcm1hdGlvbi1kaWFsb2cnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8cCBjbGFzcz1cInRpdGxlIGlzLWNlbnRlcmVkXCI+Q29uZmlybTwvcD5cclxuICAgIDxwIGNsYXNzPVwic3VidGl0bGUgaXMtY2VudGVyZWRcIj57eyBtZXNzYWdlIH19PC9wPlxyXG4gICAgPGZvcm0gKHN1Ym1pdCk9XCJvblN1Ym1pdE9rKClcIiBjbGFzcz1cImJ1dHRvbnNcIj5cclxuICAgICAgPGJ1dHRvbiAjb2tCdXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgIDxtYXQtaWNvbj57eyBva0ljb24gfX08L21hdC1pY29uPlxyXG4gICAgICAgIDxzcGFuPnt7IG9rTGFiZWwgfX08L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwid2hpdGVcIiAoY2xpY2spPVwib25DbGlja0NhbmNlbCgkZXZlbnQpXCI+XHJcbiAgICAgICAgPG1hdC1pY29uPmNhbmNlbDwvbWF0LWljb24+XHJcbiAgICAgICAgPHNwYW4+Q2FuY2VsPC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnN1YnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgICB9XHJcbiAgICAgIC5idXR0b25zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb25maXJtYXRpb25EaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ29rQnV0dG9uJywge30gYXMgYW55KSBva0J1dHRvbjogTWF0QnV0dG9uO1xyXG5cclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgb2tJY29uOiBzdHJpbmc7XHJcbiAgb2tMYWJlbDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBcHBDb25maXJtYXRpb25EaWFsb2dDb21wb25lbnQ+LFxyXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBDb25maXJtYXRpb25EaWFsb2dEYXRhXHJcbiAgKSB7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBkYXRhLm1lc3NhZ2U7XHJcbiAgICB0aGlzLm9rSWNvbiA9IGRhdGEub2tJY29uID8gZGF0YS5va0ljb24gOiAnZG9uZSc7XHJcbiAgICB0aGlzLm9rTGFiZWwgPSBkYXRhLm9rTGFiZWwgPyBkYXRhLm9rTGFiZWwgOiAnT2snO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5va0J1dHRvbiAmJiB0aGlzLm9rQnV0dG9uLmZvY3VzKSB7XHJcbiAgICAgIHRoaXMub2tCdXR0b24uZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xpY2tDYW5jZWwoZSk6IHZvaWQge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXRPaygpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRydWUpO1xyXG4gIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29uZmlybWF0aW9uU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZykge31cclxuXHJcbiAgYXN5bmMgQXNrQ29uZmlybShcclxuICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2U6IHN0cmluZyxcclxuICAgIG9rTGFiZWw/OiBzdHJpbmcsXHJcbiAgICBva0ljb24/OiBzdHJpbmdcclxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIG1lc3NhZ2U6IGNvbmZpcm1hdGlvbk1lc3NhZ2UsXHJcbiAgICAgIG9rSWNvbjogb2tJY29uLFxyXG4gICAgICBva0xhYmVsOiBva0xhYmVsXHJcbiAgICB9IGFzIENvbmZpcm1hdGlvbkRpYWxvZ0RhdGE7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEFwcENvbmZpcm1hdGlvbkRpYWxvZ0NvbXBvbmVudCwge1xyXG4gICAgICB3aWR0aDogJzMwMHB4JyxcclxuICAgICAgaGFzQmFja2Ryb3A6IHRydWUsXHJcbiAgICAgIGRpc2FibGVDbG9zZTogZmFsc2UsXHJcbiAgICAgIGRhdGE6IGRhdGFcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdDogYm9vbGVhbiA9IGF3YWl0IGRpYWxvZ1JlZlxyXG4gICAgICAuYWZ0ZXJDbG9zZWQoKVxyXG4gICAgICAucGlwZSh0YWtlKDEpKVxyXG4gICAgICAudG9Qcm9taXNlKCk7XHJcbiAgICBjb25zb2xlLmxvZyhgQ29uZmlybWF0aW9uLVNlcnZpY2U6IEFza0NvbmZpcm09JHshIXJlc3VsdH1gKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==