/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { Subject, pipe } from 'rxjs';
import { FormBase } from '../form-base-class';
import { takeUntil, auditTime, tap } from 'rxjs/operators';
import { FormBuilderTypedService } from '../../services/form-builder-typed.service';
import { AssigneeType } from './form-assignee.models';
import { GetFirstContact } from './contact-helper';
export class LibFormAssigneeSelectorComponent extends FormBase {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        super();
        this.fb = fb;
        this.assigneeTypes = Object.keys(AssigneeType).map((/**
         * @param {?} k
         * @return {?}
         */
        k => AssigneeType[k]));
        this.hideSelectContractor = true;
        this.hideSelectStaff = true;
        this.destroyed = new Subject();
        this.selectImportTypeControl = this.fb.control();
        this.selectItemContractorControl = this.fb.control();
        this.selectItemStaffControl = this.fb.control();
    }
    /**
     * @param {?} logString
     * @return {?}
     */
    makeLogPipe(logString) {
        return pipe(takeUntil(this.destroyed), auditTime(300), tap((/**
         * @param {?} val
         * @return {?}
         */
        val => console.log('assignee-selector: ', logString, { val }))));
    }
    /**
     * @param {?} control
     * @param {?} disabled
     * @return {?}
     */
    checkStatus(control, disabled) {
        if (disabled && !control.disabled) {
            control.disable();
        }
        if (!disabled && control.disabled) {
            control.enable();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, /** @this {!LibFormAssigneeSelectorComponent} */ function* () {
            // Check if main control has been disabled/enabled
            this.internalControl.statusChanges
                .pipe(this.makeLogPipe('control.statusChanges'))
                .subscribe((/**
             * @param {?} newVal
             * @return {?}
             */
            newVal => {
                /** @type {?} */
                const disabled = newVal === 'DISABLED';
                this.checkStatus(this.selectImportTypeControl, disabled);
                this.checkStatus(this.selectItemStaffControl, disabled);
                this.checkStatus(this.selectItemContractorControl, disabled);
            }));
            // Check if import type has changed
            this.selectImportTypeControl.valueChanges
                .pipe(this.makeLogPipe('selectImportTypeControl.valueChanges'))
                .subscribe((/**
             * @param {?} val
             * @return {?}
             */
            val => {
                if (val === AssigneeType.myDetails) {
                    return this.handleSelectedMyDetails();
                }
                if (val === AssigneeType.contractor) {
                    this.hideSelectContractor = false;
                    this.hideSelectStaff = true;
                }
                if (val === AssigneeType.staffMember) {
                    this.hideSelectStaff = false;
                    this.hideSelectContractor = true;
                }
            }));
            // Check if selectItemContractorControl has changed
            this.selectItemContractorControl.valueChanges
                .pipe(this.makeLogPipe('selectItemContractorControl.valueChanges'))
                .subscribe((/**
             * @param {?} val
             * @return {?}
             */
            (val) => tslib_1.__awaiter(this, void 0, void 0, /** @this {!LibFormAssigneeSelectorComponent} */ function* () {
                return this.handleSelectedSingleContractor(val);
            })));
            // Check if selectItemStaffControl has changed
            this.selectItemStaffControl.valueChanges
                .pipe(this.makeLogPipe('selectItemStaffControl.valueChanges'))
                .subscribe((/**
             * @param {?} val
             * @return {?}
             */
            (val) => tslib_1.__awaiter(this, void 0, void 0, /** @this {!LibFormAssigneeSelectorComponent} */ function* () {
                return this.handleSelectedSingleStaff(val);
            })));
            /** @type {?} */
            const currentValue = this.value;
            if (currentValue) {
                this.selectImportTypeControl.patchValue(currentValue.type);
                if (currentValue.type === AssigneeType.contractor) {
                    this.selectItemContractorControl.patchValue(currentValue.selected_tag);
                }
                if (currentValue.type === AssigneeType.staffMember) {
                    this.selectItemStaffControl.patchValue(currentValue.selected_tag);
                }
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        return tslib_1.__awaiter(this, void 0, void 0, /** @this {!LibFormAssigneeSelectorComponent} */ function* () {
            this.destroyed.next();
        });
    }
    /**
     * @return {?}
     */
    get selectedImportType() {
        return this.selectImportTypeControl.value;
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    handleSelectedSingleStaff(selected) {
        return tslib_1.__awaiter(this, void 0, void 0, /** @this {!LibFormAssigneeSelectorComponent} */ function* () {
            if (!selected) {
                console.warn('assignee-selector: no staff selected', { selected });
                return;
            }
            /** @type {?} */
            const staffMember = (/** @type {?} */ (selected.obj));
            /** @type {?} */
            const newAssignee = {
                selected_tag: selected,
                assignee_id: selected.id,
                type: AssigneeType.staffMember,
                name: staffMember.name,
                email: staffMember.email,
                mobile: staffMember.phone
            };
            console.log('assignee-selector: handleSelectedSingleStaff', {
                selected,
                newAssignee
            });
            this.value = newAssignee;
        });
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    handleSelectedSingleContractor(selected) {
        return tslib_1.__awaiter(this, void 0, void 0, /** @this {!LibFormAssigneeSelectorComponent} */ function* () {
            if (!selected) {
                console.warn('assignee-selector: no contractor selected', { selected });
                return;
            }
            /** @type {?} */
            const contractor = (/** @type {?} */ (selected.obj));
            /** @type {?} */
            const contact = GetFirstContact(contractor);
            /** @type {?} */
            const newAssignee = {
                selected_tag: selected,
                assignee_id: selected.id,
                type: AssigneeType.contractor,
                name: contact.name,
                email: contact.email,
                mobile: contact.phone
            };
            this.value = newAssignee;
            console.log('assignee-selector: handleSelectedSingleContractor', {
                this_value: this.value,
                selected,
                newAssignee
            });
        });
    }
    /**
     * @return {?}
     */
    handleSelectedMyDetails() {
        return tslib_1.__awaiter(this, void 0, void 0, /** @this {!LibFormAssigneeSelectorComponent} */ function* () {
            this.hideSelectStaff = true;
            this.hideSelectContractor = true;
            /** @type {?} */
            const user = this.currentUser;
            console.log('assignee-selector: handleSelectedMyDetails() importing my details', {
                user
            });
            /** @type {?} */
            const newAssignee = {
                selected_obj: user,
                assignee_id: user.id,
                type: AssigneeType.myDetails,
                name: user['First Name'] + ' ' + user['Last Name'],
                email: user.Email || '',
                mobile: user.Phone || ''
            };
            this.value = newAssignee;
            console.log('assignee-selector: handleSelectedMyDetails() newAssignee', {
                newAssignee
            });
        });
    }
}
LibFormAssigneeSelectorComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-assignee-selector',
                template: `
    <mat-card>
      <div class="import">
        <form-select-string
          [formControl]="this.selectImportTypeControl"
          [selections]="this.assigneeTypes"
          placeholder="Assignee Type"
        >
        </form-select-string>
        <form-tag-single
          placeholder="Select Contractor"
          [hidden]="this.hideSelectContractor"
          [formControl]="this.selectItemContractorControl"
          [choices]="contractorsList"
          [customValues]="false"
        >
        </form-tag-single>

        <form-tag-single
          placeholder="Select Staff Member"
          [hidden]="this.hideSelectStaff"
          [formControl]="this.selectItemStaffControl"
          [choices]="staffList"
          [customValues]="false"
        >
        </form-tag-single>
      </div>
      <div *ngIf="!(this.value && this.value.name)">
        Please select an assignee
      </div>
      <div *ngIf="this.value as selectedAssignee">
        <h3>Selected Assignee:</h3>
        <div class="assignee">
          <p>
            Name: <strong>{{ selectedAssignee.name }}</strong>
          </p>
          <p>
            Email: <strong>{{ selectedAssignee.email }}</strong>
          </p>
          <p>
            Phone: <strong>{{ selectedAssignee.mobile }}</strong>
          </p>
        </div>
      </div>
    </mat-card>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormAssigneeSelectorComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => LibFormAssigneeSelectorComponent)),
                        multi: true
                    }
                ],
                styles: [`
      .import {
        display: grid;
        grid-template-columns: 100%;
        grid-gap: 2%;
        margin-bottom: 10px;
      }
      .assignee p {
        margin: 0;
      }
      .assignee h3 {
        margin: 0;
      }
    `]
            }] }
];
/** @nocollapse */
LibFormAssigneeSelectorComponent.ctorParameters = () => [
    { type: FormBuilderTypedService }
];
LibFormAssigneeSelectorComponent.propDecorators = {
    currentUser: [{ type: Input }],
    contractorsList: [{ type: Input }],
    staffList: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LibFormAssigneeSelectorComponent.prototype.currentUser;
    /** @type {?} */
    LibFormAssigneeSelectorComponent.prototype.contractorsList;
    /** @type {?} */
    LibFormAssigneeSelectorComponent.prototype.staffList;
    /** @type {?} */
    LibFormAssigneeSelectorComponent.prototype.selectImportTypeControl;
    /** @type {?} */
    LibFormAssigneeSelectorComponent.prototype.selectItemContractorControl;
    /** @type {?} */
    LibFormAssigneeSelectorComponent.prototype.selectItemStaffControl;
    /** @type {?} */
    LibFormAssigneeSelectorComponent.prototype.assigneeTypes;
    /** @type {?} */
    LibFormAssigneeSelectorComponent.prototype.hideSelectContractor;
    /** @type {?} */
    LibFormAssigneeSelectorComponent.prototype.hideSelectStaff;
    /** @type {?} */
    LibFormAssigneeSelectorComponent.prototype.destroyed;
    /**
     * @type {?}
     * @private
     */
    LibFormAssigneeSelectorComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1hc3NpZ25lZS1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtcmVkdWNlLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2NvbXBvc2VkL2Zvcm0tYXNzaWduZWUtc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQWUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0UsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFFTCx1QkFBdUIsRUFDeEIsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBRUwsWUFBWSxFQUliLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBZ0ZuRCxNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsUUFBa0I7Ozs7SUFvQnRFLFlBQW9CLEVBQTJCO1FBQzdDLEtBQUssRUFBRSxDQUFDO1FBRFUsT0FBRSxHQUFGLEVBQUUsQ0FBeUI7UUFQL0Msa0JBQWEsR0FBYSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBRTlFLHlCQUFvQixHQUFHLElBQUksQ0FBQztRQUM1QixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUV2QixjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQUUs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Ozs7Ozs7Ozs7OztLQWFDO2FBY0o7Ozs7WUF4RkMsdUJBQXVCOzs7MEJBMkZ0QixLQUFLOzhCQUVMLEtBQUs7d0JBRUwsS0FBSzs7OztJQUpOLHVEQUNrQjs7SUFDbEIsMkRBQ3VCOztJQUN2QixxREFDaUI7O0lBRWpCLG1FQUFxRDs7SUFDckQsdUVBQXNEOztJQUN0RCxrRUFBaUQ7O0lBRWpELHlEQUE4RTs7SUFFOUUsZ0VBQTRCOztJQUM1QiwyREFBdUI7O0lBRXZCLHFEQUEwQjs7Ozs7SUFFZCw4Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgTkdfVkFMVUVfQUNDRVNTT1IsIE5HX1ZBTElEQVRPUlMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YmplY3QsIHBpcGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRm9ybUJhc2UgfSBmcm9tICcuLi9mb3JtLWJhc2UtY2xhc3MnO1xyXG5pbXBvcnQgeyBUYWcgfSBmcm9tICcuLi9tYXRlcmlhbC9UYWcnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwsIGF1ZGl0VGltZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge1xyXG4gIEZvcm1Db250cm9sVHlwZVNhZmUsXHJcbiAgRm9ybUJ1aWxkZXJUeXBlZFNlcnZpY2VcclxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtLWJ1aWxkZXItdHlwZWQuc2VydmljZSc7XHJcbmltcG9ydCB7XHJcbiAgQXNzaWduZWUsXHJcbiAgQXNzaWduZWVUeXBlLFxyXG4gIFVzZXIsXHJcbiAgU3RhZmZNZW1iZXIsXHJcbiAgQ29udHJhY3RvclxyXG59IGZyb20gJy4vZm9ybS1hc3NpZ25lZS5tb2RlbHMnO1xyXG5pbXBvcnQgeyBHZXRGaXJzdENvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QtaGVscGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2Zvcm0tYXNzaWduZWUtc2VsZWN0b3InLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bWF0LWNhcmQ+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpbXBvcnRcIj5cclxuICAgICAgICA8Zm9ybS1zZWxlY3Qtc3RyaW5nXHJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwidGhpcy5zZWxlY3RJbXBvcnRUeXBlQ29udHJvbFwiXHJcbiAgICAgICAgICBbc2VsZWN0aW9uc109XCJ0aGlzLmFzc2lnbmVlVHlwZXNcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBc3NpZ25lZSBUeXBlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPC9mb3JtLXNlbGVjdC1zdHJpbmc+XHJcbiAgICAgICAgPGZvcm0tdGFnLXNpbmdsZVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgQ29udHJhY3RvclwiXHJcbiAgICAgICAgICBbaGlkZGVuXT1cInRoaXMuaGlkZVNlbGVjdENvbnRyYWN0b3JcIlxyXG4gICAgICAgICAgW2Zvcm1Db250cm9sXT1cInRoaXMuc2VsZWN0SXRlbUNvbnRyYWN0b3JDb250cm9sXCJcclxuICAgICAgICAgIFtjaG9pY2VzXT1cImNvbnRyYWN0b3JzTGlzdFwiXHJcbiAgICAgICAgICBbY3VzdG9tVmFsdWVzXT1cImZhbHNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPC9mb3JtLXRhZy1zaW5nbGU+XHJcblxyXG4gICAgICAgIDxmb3JtLXRhZy1zaW5nbGVcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFN0YWZmIE1lbWJlclwiXHJcbiAgICAgICAgICBbaGlkZGVuXT1cInRoaXMuaGlkZVNlbGVjdFN0YWZmXCJcclxuICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJ0aGlzLnNlbGVjdEl0ZW1TdGFmZkNvbnRyb2xcIlxyXG4gICAgICAgICAgW2Nob2ljZXNdPVwic3RhZmZMaXN0XCJcclxuICAgICAgICAgIFtjdXN0b21WYWx1ZXNdPVwiZmFsc2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICA8L2Zvcm0tdGFnLXNpbmdsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCIhKHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5uYW1lKVwiPlxyXG4gICAgICAgIFBsZWFzZSBzZWxlY3QgYW4gYXNzaWduZWVcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCJ0aGlzLnZhbHVlIGFzIHNlbGVjdGVkQXNzaWduZWVcIj5cclxuICAgICAgICA8aDM+U2VsZWN0ZWQgQXNzaWduZWU6PC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXNzaWduZWVcIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBOYW1lOiA8c3Ryb25nPnt7IHNlbGVjdGVkQXNzaWduZWUubmFtZSB9fTwvc3Ryb25nPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIEVtYWlsOiA8c3Ryb25nPnt7IHNlbGVjdGVkQXNzaWduZWUuZW1haWwgfX08L3N0cm9uZz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBQaG9uZTogPHN0cm9uZz57eyBzZWxlY3RlZEFzc2lnbmVlLm1vYmlsZSB9fTwvc3Ryb25nPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmltcG9ydCB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICAgICAgZ3JpZC1nYXA6IDIlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmFzc2lnbmVlIHAge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgICAuYXNzaWduZWUgaDMge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMaWJGb3JtQXNzaWduZWVTZWxlY3RvckNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMaWJGb3JtQXNzaWduZWVTZWxlY3RvckNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGliRm9ybUFzc2lnbmVlU2VsZWN0b3JDb21wb25lbnQgZXh0ZW5kcyBGb3JtQmFzZTxBc3NpZ25lZT5cclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKVxyXG4gIGN1cnJlbnRVc2VyOiBVc2VyO1xyXG4gIEBJbnB1dCgpXHJcbiAgY29udHJhY3RvcnNMaXN0OiBUYWdbXTtcclxuICBASW5wdXQoKVxyXG4gIHN0YWZmTGlzdDogVGFnW107XHJcblxyXG4gIHNlbGVjdEltcG9ydFR5cGVDb250cm9sOiBGb3JtQ29udHJvbFR5cGVTYWZlPHN0cmluZz47XHJcbiAgc2VsZWN0SXRlbUNvbnRyYWN0b3JDb250cm9sOiBGb3JtQ29udHJvbFR5cGVTYWZlPFRhZz47XHJcbiAgc2VsZWN0SXRlbVN0YWZmQ29udHJvbDogRm9ybUNvbnRyb2xUeXBlU2FmZTxUYWc+O1xyXG5cclxuICBhc3NpZ25lZVR5cGVzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKEFzc2lnbmVlVHlwZSkubWFwKGsgPT4gQXNzaWduZWVUeXBlW2tdKTtcclxuXHJcbiAgaGlkZVNlbGVjdENvbnRyYWN0b3IgPSB0cnVlO1xyXG4gIGhpZGVTZWxlY3RTdGFmZiA9IHRydWU7XHJcblxyXG4gIGRlc3Ryb3llZCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyVHlwZWRTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zZWxlY3RJbXBvcnRUeXBlQ29udHJvbCA9IHRoaXMuZmIuY29udHJvbDxBc3NpZ25lZVR5cGU+KCk7XHJcbiAgICB0aGlzLnNlbGVjdEl0ZW1Db250cmFjdG9yQ29udHJvbCA9IHRoaXMuZmIuY29udHJvbDxUYWc+KCk7XHJcbiAgICB0aGlzLnNlbGVjdEl0ZW1TdGFmZkNvbnRyb2wgPSB0aGlzLmZiLmNvbnRyb2w8VGFnPigpO1xyXG4gIH1cclxuXHJcbiAgbWFrZUxvZ1BpcGUobG9nU3RyaW5nOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBwaXBlKFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpLFxyXG4gICAgICBhdWRpdFRpbWUoMzAwKSxcclxuICAgICAgdGFwKHZhbCA9PiBjb25zb2xlLmxvZygnYXNzaWduZWUtc2VsZWN0b3I6ICcsIGxvZ1N0cmluZywgeyB2YWwgfSkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tTdGF0dXMoY29udHJvbDogRm9ybUNvbnRyb2wsIGRpc2FibGVkOiBib29sZWFuKSB7XHJcbiAgICBpZiAoZGlzYWJsZWQgJiYgIWNvbnRyb2wuZGlzYWJsZWQpIHtcclxuICAgICAgY29udHJvbC5kaXNhYmxlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWRpc2FibGVkICYmIGNvbnRyb2wuZGlzYWJsZWQpIHtcclxuICAgICAgY29udHJvbC5lbmFibGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIG5nT25Jbml0KCkge1xyXG4gICAgLy8gQ2hlY2sgaWYgbWFpbiBjb250cm9sIGhhcyBiZWVuIGRpc2FibGVkL2VuYWJsZWRcclxuICAgIHRoaXMuaW50ZXJuYWxDb250cm9sLnN0YXR1c0NoYW5nZXNcclxuICAgICAgLnBpcGUodGhpcy5tYWtlTG9nUGlwZSgnY29udHJvbC5zdGF0dXNDaGFuZ2VzJykpXHJcbiAgICAgIC5zdWJzY3JpYmUobmV3VmFsID0+IHtcclxuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IG5ld1ZhbCA9PT0gJ0RJU0FCTEVEJztcclxuICAgICAgICB0aGlzLmNoZWNrU3RhdHVzKHRoaXMuc2VsZWN0SW1wb3J0VHlwZUNvbnRyb2wsIGRpc2FibGVkKTtcclxuICAgICAgICB0aGlzLmNoZWNrU3RhdHVzKHRoaXMuc2VsZWN0SXRlbVN0YWZmQ29udHJvbCwgZGlzYWJsZWQpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tTdGF0dXModGhpcy5zZWxlY3RJdGVtQ29udHJhY3RvckNvbnRyb2wsIGRpc2FibGVkKTtcclxuICAgICAgfSk7XHJcbiAgICAvLyBDaGVjayBpZiBpbXBvcnQgdHlwZSBoYXMgY2hhbmdlZFxyXG4gICAgdGhpcy5zZWxlY3RJbXBvcnRUeXBlQ29udHJvbC52YWx1ZUNoYW5nZXNcclxuICAgICAgLnBpcGUodGhpcy5tYWtlTG9nUGlwZSgnc2VsZWN0SW1wb3J0VHlwZUNvbnRyb2wudmFsdWVDaGFuZ2VzJykpXHJcbiAgICAgIC5zdWJzY3JpYmUodmFsID0+IHtcclxuICAgICAgICBpZiAodmFsID09PSBBc3NpZ25lZVR5cGUubXlEZXRhaWxzKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVTZWxlY3RlZE15RGV0YWlscygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsID09PSBBc3NpZ25lZVR5cGUuY29udHJhY3Rvcikge1xyXG4gICAgICAgICAgdGhpcy5oaWRlU2VsZWN0Q29udHJhY3RvciA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5oaWRlU2VsZWN0U3RhZmYgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsID09PSBBc3NpZ25lZVR5cGUuc3RhZmZNZW1iZXIpIHtcclxuICAgICAgICAgIHRoaXMuaGlkZVNlbGVjdFN0YWZmID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmhpZGVTZWxlY3RDb250cmFjdG9yID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgLy8gQ2hlY2sgaWYgc2VsZWN0SXRlbUNvbnRyYWN0b3JDb250cm9sIGhhcyBjaGFuZ2VkXHJcbiAgICB0aGlzLnNlbGVjdEl0ZW1Db250cmFjdG9yQ29udHJvbC52YWx1ZUNoYW5nZXNcclxuICAgICAgLnBpcGUodGhpcy5tYWtlTG9nUGlwZSgnc2VsZWN0SXRlbUNvbnRyYWN0b3JDb250cm9sLnZhbHVlQ2hhbmdlcycpKVxyXG4gICAgICAuc3Vic2NyaWJlKGFzeW5jICh2YWw6IFRhZykgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVNlbGVjdGVkU2luZ2xlQ29udHJhY3Rvcih2YWwpO1xyXG4gICAgICB9KTtcclxuICAgIC8vIENoZWNrIGlmIHNlbGVjdEl0ZW1TdGFmZkNvbnRyb2wgaGFzIGNoYW5nZWRcclxuICAgIHRoaXMuc2VsZWN0SXRlbVN0YWZmQ29udHJvbC52YWx1ZUNoYW5nZXNcclxuICAgICAgLnBpcGUodGhpcy5tYWtlTG9nUGlwZSgnc2VsZWN0SXRlbVN0YWZmQ29udHJvbC52YWx1ZUNoYW5nZXMnKSlcclxuICAgICAgLnN1YnNjcmliZShhc3luYyAodmFsOiBUYWcpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVTZWxlY3RlZFNpbmdsZVN0YWZmKHZhbCk7XHJcbiAgICAgIH0pO1xyXG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgIGlmIChjdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5zZWxlY3RJbXBvcnRUeXBlQ29udHJvbC5wYXRjaFZhbHVlKGN1cnJlbnRWYWx1ZS50eXBlKTtcclxuICAgICAgaWYgKGN1cnJlbnRWYWx1ZS50eXBlID09PSBBc3NpZ25lZVR5cGUuY29udHJhY3Rvcikge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0SXRlbUNvbnRyYWN0b3JDb250cm9sLnBhdGNoVmFsdWUoY3VycmVudFZhbHVlLnNlbGVjdGVkX3RhZyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGN1cnJlbnRWYWx1ZS50eXBlID09PSBBc3NpZ25lZVR5cGUuc3RhZmZNZW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TdGFmZkNvbnRyb2wucGF0Y2hWYWx1ZShjdXJyZW50VmFsdWUuc2VsZWN0ZWRfdGFnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3llZC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0ZWRJbXBvcnRUeXBlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0SW1wb3J0VHlwZUNvbnRyb2wudmFsdWU7XHJcbiAgfVxyXG5cclxuICBhc3luYyBoYW5kbGVTZWxlY3RlZFNpbmdsZVN0YWZmKHNlbGVjdGVkOiBUYWcpIHtcclxuICAgIGlmICghc2VsZWN0ZWQpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdhc3NpZ25lZS1zZWxlY3Rvcjogbm8gc3RhZmYgc2VsZWN0ZWQnLCB7IHNlbGVjdGVkIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBzdGFmZk1lbWJlciA9IHNlbGVjdGVkLm9iaiBhcyBTdGFmZk1lbWJlcjtcclxuICAgIGNvbnN0IG5ld0Fzc2lnbmVlOiBBc3NpZ25lZSA9IHtcclxuICAgICAgc2VsZWN0ZWRfdGFnOiBzZWxlY3RlZCxcclxuICAgICAgYXNzaWduZWVfaWQ6IHNlbGVjdGVkLmlkLFxyXG4gICAgICB0eXBlOiBBc3NpZ25lZVR5cGUuc3RhZmZNZW1iZXIsXHJcbiAgICAgIG5hbWU6IHN0YWZmTWVtYmVyLm5hbWUsXHJcbiAgICAgIGVtYWlsOiBzdGFmZk1lbWJlci5lbWFpbCxcclxuICAgICAgbW9iaWxlOiBzdGFmZk1lbWJlci5waG9uZVxyXG4gICAgfTtcclxuICAgIGNvbnNvbGUubG9nKCdhc3NpZ25lZS1zZWxlY3RvcjogaGFuZGxlU2VsZWN0ZWRTaW5nbGVTdGFmZicsIHtcclxuICAgICAgc2VsZWN0ZWQsXHJcbiAgICAgIG5ld0Fzc2lnbmVlXHJcbiAgICB9KTtcclxuICAgIHRoaXMudmFsdWUgPSBuZXdBc3NpZ25lZTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGhhbmRsZVNlbGVjdGVkU2luZ2xlQ29udHJhY3RvcihzZWxlY3RlZDogVGFnKSB7XHJcbiAgICBpZiAoIXNlbGVjdGVkKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignYXNzaWduZWUtc2VsZWN0b3I6IG5vIGNvbnRyYWN0b3Igc2VsZWN0ZWQnLCB7IHNlbGVjdGVkIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb250cmFjdG9yID0gc2VsZWN0ZWQub2JqIGFzIENvbnRyYWN0b3I7XHJcbiAgICBjb25zdCBjb250YWN0ID0gR2V0Rmlyc3RDb250YWN0KGNvbnRyYWN0b3IpO1xyXG4gICAgY29uc3QgbmV3QXNzaWduZWU6IEFzc2lnbmVlID0ge1xyXG4gICAgICBzZWxlY3RlZF90YWc6IHNlbGVjdGVkLFxyXG4gICAgICBhc3NpZ25lZV9pZDogc2VsZWN0ZWQuaWQsXHJcbiAgICAgIHR5cGU6IEFzc2lnbmVlVHlwZS5jb250cmFjdG9yLFxyXG4gICAgICBuYW1lOiBjb250YWN0Lm5hbWUsXHJcbiAgICAgIGVtYWlsOiBjb250YWN0LmVtYWlsLFxyXG4gICAgICBtb2JpbGU6IGNvbnRhY3QucGhvbmVcclxuICAgIH07XHJcbiAgICB0aGlzLnZhbHVlID0gbmV3QXNzaWduZWU7XHJcbiAgICBjb25zb2xlLmxvZygnYXNzaWduZWUtc2VsZWN0b3I6IGhhbmRsZVNlbGVjdGVkU2luZ2xlQ29udHJhY3RvcicsIHtcclxuICAgICAgdGhpc192YWx1ZTogdGhpcy52YWx1ZSxcclxuICAgICAgc2VsZWN0ZWQsXHJcbiAgICAgIG5ld0Fzc2lnbmVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGhhbmRsZVNlbGVjdGVkTXlEZXRhaWxzKCkge1xyXG4gICAgdGhpcy5oaWRlU2VsZWN0U3RhZmYgPSB0cnVlO1xyXG4gICAgdGhpcy5oaWRlU2VsZWN0Q29udHJhY3RvciA9IHRydWU7XHJcbiAgICBjb25zdCB1c2VyID0gdGhpcy5jdXJyZW50VXNlcjtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAnYXNzaWduZWUtc2VsZWN0b3I6IGhhbmRsZVNlbGVjdGVkTXlEZXRhaWxzKCkgaW1wb3J0aW5nIG15IGRldGFpbHMnLFxyXG4gICAgICB7XHJcbiAgICAgICAgdXNlclxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgbmV3QXNzaWduZWU6IEFzc2lnbmVlID0ge1xyXG4gICAgICBzZWxlY3RlZF9vYmo6IHVzZXIsXHJcbiAgICAgIGFzc2lnbmVlX2lkOiB1c2VyLmlkLFxyXG4gICAgICB0eXBlOiBBc3NpZ25lZVR5cGUubXlEZXRhaWxzLFxyXG4gICAgICBuYW1lOiB1c2VyWydGaXJzdCBOYW1lJ10gKyAnICcgKyB1c2VyWydMYXN0IE5hbWUnXSxcclxuICAgICAgZW1haWw6IHVzZXIuRW1haWwgfHwgJycsXHJcbiAgICAgIG1vYmlsZTogdXNlci5QaG9uZSB8fCAnJ1xyXG4gICAgfTtcclxuICAgIHRoaXMudmFsdWUgPSBuZXdBc3NpZ25lZTtcclxuICAgIGNvbnNvbGUubG9nKCdhc3NpZ25lZS1zZWxlY3RvcjogaGFuZGxlU2VsZWN0ZWRNeURldGFpbHMoKSBuZXdBc3NpZ25lZScsIHtcclxuICAgICAgbmV3QXNzaWduZWVcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=