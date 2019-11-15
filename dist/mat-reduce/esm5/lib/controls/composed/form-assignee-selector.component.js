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
var LibFormAssigneeSelectorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LibFormAssigneeSelectorComponent, _super);
    function LibFormAssigneeSelectorComponent(fb) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.assigneeTypes = Object.keys(AssigneeType).map((/**
         * @param {?} k
         * @return {?}
         */
        function (k) { return AssigneeType[k]; }));
        _this.hideSelectContractor = true;
        _this.hideSelectStaff = true;
        _this.destroyed = new Subject();
        _this.selectImportTypeControl = _this.fb.control();
        _this.selectItemContractorControl = _this.fb.control();
        _this.selectItemStaffControl = _this.fb.control();
        return _this;
    }
    /**
     * @param {?} logString
     * @return {?}
     */
    LibFormAssigneeSelectorComponent.prototype.makeLogPipe = /**
     * @param {?} logString
     * @return {?}
     */
    function (logString) {
        return pipe(takeUntil(this.destroyed), auditTime(300), tap((/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return console.log('assignee-selector: ', logString, { val: val }); })));
    };
    /**
     * @param {?} control
     * @param {?} disabled
     * @return {?}
     */
    LibFormAssigneeSelectorComponent.prototype.checkStatus = /**
     * @param {?} control
     * @param {?} disabled
     * @return {?}
     */
    function (control, disabled) {
        if (disabled && !control.disabled) {
            control.disable();
        }
        if (!disabled && control.disabled) {
            control.enable();
        }
    };
    /**
     * @return {?}
     */
    LibFormAssigneeSelectorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var currentValue;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                // Check if main control has been disabled/enabled
                this.internalControl.statusChanges
                    .pipe(this.makeLogPipe('control.statusChanges'))
                    .subscribe((/**
                 * @param {?} newVal
                 * @return {?}
                 */
                function (newVal) {
                    /** @type {?} */
                    var disabled = newVal === 'DISABLED';
                    _this.checkStatus(_this.selectImportTypeControl, disabled);
                    _this.checkStatus(_this.selectItemStaffControl, disabled);
                    _this.checkStatus(_this.selectItemContractorControl, disabled);
                }));
                // Check if import type has changed
                this.selectImportTypeControl.valueChanges
                    .pipe(this.makeLogPipe('selectImportTypeControl.valueChanges'))
                    .subscribe((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) {
                    if (val === AssigneeType.myDetails) {
                        return _this.handleSelectedMyDetails();
                    }
                    if (val === AssigneeType.contractor) {
                        _this.hideSelectContractor = false;
                        _this.hideSelectStaff = true;
                    }
                    if (val === AssigneeType.staffMember) {
                        _this.hideSelectStaff = false;
                        _this.hideSelectContractor = true;
                    }
                }));
                // Check if selectItemContractorControl has changed
                this.selectItemContractorControl.valueChanges
                    .pipe(this.makeLogPipe('selectItemContractorControl.valueChanges'))
                    .subscribe((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    return tslib_1.__generator(this, function (_a) {
                        return [2 /*return*/, this.handleSelectedSingleContractor(val)];
                    });
                }); }));
                // Check if selectItemStaffControl has changed
                this.selectItemStaffControl.valueChanges
                    .pipe(this.makeLogPipe('selectItemStaffControl.valueChanges'))
                    .subscribe((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    return tslib_1.__generator(this, function (_a) {
                        return [2 /*return*/, this.handleSelectedSingleStaff(val)];
                    });
                }); }));
                currentValue = this.value;
                if (currentValue) {
                    this.selectImportTypeControl.patchValue(currentValue.type);
                    if (currentValue.type === AssigneeType.contractor) {
                        this.selectItemContractorControl.patchValue(currentValue.selected_tag);
                    }
                    if (currentValue.type === AssigneeType.staffMember) {
                        this.selectItemStaffControl.patchValue(currentValue.selected_tag);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * @return {?}
     */
    LibFormAssigneeSelectorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.destroyed.next();
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(LibFormAssigneeSelectorComponent.prototype, "selectedImportType", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectImportTypeControl.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} selected
     * @return {?}
     */
    LibFormAssigneeSelectorComponent.prototype.handleSelectedSingleStaff = /**
     * @param {?} selected
     * @return {?}
     */
    function (selected) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var staffMember, newAssignee;
            return tslib_1.__generator(this, function (_a) {
                if (!selected) {
                    console.warn('assignee-selector: no staff selected', { selected: selected });
                    return [2 /*return*/];
                }
                staffMember = (/** @type {?} */ (selected.obj));
                newAssignee = {
                    selected_tag: selected,
                    assignee_id: selected.id,
                    type: AssigneeType.staffMember,
                    name: staffMember.name,
                    email: staffMember.email,
                    mobile: staffMember.phone
                };
                console.log('assignee-selector: handleSelectedSingleStaff', {
                    selected: selected,
                    newAssignee: newAssignee
                });
                this.value = newAssignee;
                return [2 /*return*/];
            });
        });
    };
    /**
     * @param {?} selected
     * @return {?}
     */
    LibFormAssigneeSelectorComponent.prototype.handleSelectedSingleContractor = /**
     * @param {?} selected
     * @return {?}
     */
    function (selected) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var contractor, contact, newAssignee;
            return tslib_1.__generator(this, function (_a) {
                if (!selected) {
                    console.warn('assignee-selector: no contractor selected', { selected: selected });
                    return [2 /*return*/];
                }
                contractor = (/** @type {?} */ (selected.obj));
                contact = GetFirstContact(contractor);
                newAssignee = {
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
                    selected: selected,
                    newAssignee: newAssignee
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * @return {?}
     */
    LibFormAssigneeSelectorComponent.prototype.handleSelectedMyDetails = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user, newAssignee;
            return tslib_1.__generator(this, function (_a) {
                this.hideSelectStaff = true;
                this.hideSelectContractor = true;
                user = this.currentUser;
                console.log('assignee-selector: handleSelectedMyDetails() importing my details', {
                    user: user
                });
                newAssignee = {
                    selected_obj: user,
                    assignee_id: user.id,
                    type: AssigneeType.myDetails,
                    name: user['First Name'] + ' ' + user['Last Name'],
                    email: user.Email || '',
                    mobile: user.Phone || ''
                };
                this.value = newAssignee;
                console.log('assignee-selector: handleSelectedMyDetails() newAssignee', {
                    newAssignee: newAssignee
                });
                return [2 /*return*/];
            });
        });
    };
    LibFormAssigneeSelectorComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'form-assignee-selector',
                    template: "\n    <mat-card>\n      <div class=\"import\">\n        <form-select-string\n          [formControl]=\"this.selectImportTypeControl\"\n          [selections]=\"this.assigneeTypes\"\n          placeholder=\"Assignee Type\"\n        >\n        </form-select-string>\n        <form-tag-single\n          placeholder=\"Select Contractor\"\n          [hidden]=\"this.hideSelectContractor\"\n          [formControl]=\"this.selectItemContractorControl\"\n          [choices]=\"contractorsList\"\n          [customValues]=\"false\"\n        >\n        </form-tag-single>\n\n        <form-tag-single\n          placeholder=\"Select Staff Member\"\n          [hidden]=\"this.hideSelectStaff\"\n          [formControl]=\"this.selectItemStaffControl\"\n          [choices]=\"staffList\"\n          [customValues]=\"false\"\n        >\n        </form-tag-single>\n      </div>\n      <div *ngIf=\"!(this.value && this.value.name)\">\n        Please select an assignee\n      </div>\n      <div *ngIf=\"this.value as selectedAssignee\">\n        <h3>Selected Assignee:</h3>\n        <div class=\"assignee\">\n          <p>\n            Name: <strong>{{ selectedAssignee.name }}</strong>\n          </p>\n          <p>\n            Email: <strong>{{ selectedAssignee.email }}</strong>\n          </p>\n          <p>\n            Phone: <strong>{{ selectedAssignee.mobile }}</strong>\n          </p>\n        </div>\n      </div>\n    </mat-card>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormAssigneeSelectorComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return LibFormAssigneeSelectorComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["\n      .import {\n        display: grid;\n        grid-template-columns: 100%;\n        grid-gap: 2%;\n        margin-bottom: 10px;\n      }\n      .assignee p {\n        margin: 0;\n      }\n      .assignee h3 {\n        margin: 0;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    LibFormAssigneeSelectorComponent.ctorParameters = function () { return [
        { type: FormBuilderTypedService }
    ]; };
    LibFormAssigneeSelectorComponent.propDecorators = {
        currentUser: [{ type: Input }],
        contractorsList: [{ type: Input }],
        staffList: [{ type: Input }]
    };
    return LibFormAssigneeSelectorComponent;
}(FormBase));
export { LibFormAssigneeSelectorComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1hc3NpZ25lZS1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtcmVkdWNlLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2NvbXBvc2VkL2Zvcm0tYXNzaWduZWUtc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQWUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0UsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFFTCx1QkFBdUIsRUFDeEIsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBRUwsWUFBWSxFQUliLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRW5EO0lBOEVzRCw0REFBa0I7SUFvQnRFLDBDQUFvQixFQUEyQjtRQUEvQyxZQUNFLGlCQUFPLFNBSVI7UUFMbUIsUUFBRSxHQUFGLEVBQUUsQ0FBeUI7UUFQL0MsbUJBQWEsR0FBYSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBZixDQUFlLEVBQUMsQ0FBQztRQUU5RSwwQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDNUIscUJBQWUsR0FBRyxJQUFJLENBQUM7UUFFdkIsZUFBUyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7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Q0FBZ0MsRUFBaEMsQ0FBZ0MsRUFBQzs0QkFDL0QsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7NkJBMUJDLDBQQWFDO2lCQWNKOzs7O2dCQXhGQyx1QkFBdUI7Ozs4QkEyRnRCLEtBQUs7a0NBRUwsS0FBSzs0QkFFTCxLQUFLOztJQW1LUix1Q0FBQztDQUFBLEFBdlBELENBOEVzRCxRQUFRLEdBeUs3RDtTQXpLWSxnQ0FBZ0M7OztJQUUzQyx1REFDa0I7O0lBQ2xCLDJEQUN1Qjs7SUFDdkIscURBQ2lCOztJQUVqQixtRUFBcUQ7O0lBQ3JELHVFQUFzRDs7SUFDdEQsa0VBQWlEOztJQUVqRCx5REFBOEU7O0lBRTlFLGdFQUE0Qjs7SUFDNUIsMkRBQXVCOztJQUV2QixxREFBMEI7Ozs7O0lBRWQsOENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE5HX1ZBTFVFX0FDQ0VTU09SLCBOR19WQUxJREFUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBwaXBlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEZvcm1CYXNlIH0gZnJvbSAnLi4vZm9ybS1iYXNlLWNsYXNzJztcclxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi4vbWF0ZXJpYWwvVGFnJztcclxuaW1wb3J0IHsgdGFrZVVudGlsLCBhdWRpdFRpbWUsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtcclxuICBGb3JtQ29udHJvbFR5cGVTYWZlLFxyXG4gIEZvcm1CdWlsZGVyVHlwZWRTZXJ2aWNlXHJcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1idWlsZGVyLXR5cGVkLnNlcnZpY2UnO1xyXG5pbXBvcnQge1xyXG4gIEFzc2lnbmVlLFxyXG4gIEFzc2lnbmVlVHlwZSxcclxuICBVc2VyLFxyXG4gIFN0YWZmTWVtYmVyLFxyXG4gIENvbnRyYWN0b3JcclxufSBmcm9tICcuL2Zvcm0tYXNzaWduZWUubW9kZWxzJztcclxuaW1wb3J0IHsgR2V0Rmlyc3RDb250YWN0IH0gZnJvbSAnLi9jb250YWN0LWhlbHBlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdmb3JtLWFzc2lnbmVlLXNlbGVjdG9yJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1hdC1jYXJkPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaW1wb3J0XCI+XHJcbiAgICAgICAgPGZvcm0tc2VsZWN0LXN0cmluZ1xyXG4gICAgICAgICAgW2Zvcm1Db250cm9sXT1cInRoaXMuc2VsZWN0SW1wb3J0VHlwZUNvbnRyb2xcIlxyXG4gICAgICAgICAgW3NlbGVjdGlvbnNdPVwidGhpcy5hc3NpZ25lZVR5cGVzXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQXNzaWduZWUgVHlwZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDwvZm9ybS1zZWxlY3Qtc3RyaW5nPlxyXG4gICAgICAgIDxmb3JtLXRhZy1zaW5nbGVcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IENvbnRyYWN0b3JcIlxyXG4gICAgICAgICAgW2hpZGRlbl09XCJ0aGlzLmhpZGVTZWxlY3RDb250cmFjdG9yXCJcclxuICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJ0aGlzLnNlbGVjdEl0ZW1Db250cmFjdG9yQ29udHJvbFwiXHJcbiAgICAgICAgICBbY2hvaWNlc109XCJjb250cmFjdG9yc0xpc3RcIlxyXG4gICAgICAgICAgW2N1c3RvbVZhbHVlc109XCJmYWxzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDwvZm9ybS10YWctc2luZ2xlPlxyXG5cclxuICAgICAgICA8Zm9ybS10YWctc2luZ2xlXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBTdGFmZiBNZW1iZXJcIlxyXG4gICAgICAgICAgW2hpZGRlbl09XCJ0aGlzLmhpZGVTZWxlY3RTdGFmZlwiXHJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwidGhpcy5zZWxlY3RJdGVtU3RhZmZDb250cm9sXCJcclxuICAgICAgICAgIFtjaG9pY2VzXT1cInN0YWZmTGlzdFwiXHJcbiAgICAgICAgICBbY3VzdG9tVmFsdWVzXT1cImZhbHNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPC9mb3JtLXRhZy1zaW5nbGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwiISh0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUubmFtZSlcIj5cclxuICAgICAgICBQbGVhc2Ugc2VsZWN0IGFuIGFzc2lnbmVlXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwidGhpcy52YWx1ZSBhcyBzZWxlY3RlZEFzc2lnbmVlXCI+XHJcbiAgICAgICAgPGgzPlNlbGVjdGVkIEFzc2lnbmVlOjwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFzc2lnbmVlXCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgTmFtZTogPHN0cm9uZz57eyBzZWxlY3RlZEFzc2lnbmVlLm5hbWUgfX08L3N0cm9uZz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBFbWFpbDogPHN0cm9uZz57eyBzZWxlY3RlZEFzc2lnbmVlLmVtYWlsIH19PC9zdHJvbmc+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgUGhvbmU6IDxzdHJvbmc+e3sgc2VsZWN0ZWRBc3NpZ25lZS5tb2JpbGUgfX08L3N0cm9uZz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5pbXBvcnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgICAgIGdyaWQtZ2FwOiAyJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5hc3NpZ25lZSBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgICAgLmFzc2lnbmVlIGgzIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybUFzc2lnbmVlU2VsZWN0b3JDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGliRm9ybUFzc2lnbmVlU2VsZWN0b3JDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpYkZvcm1Bc3NpZ25lZVNlbGVjdG9yQ29tcG9uZW50IGV4dGVuZHMgRm9ybUJhc2U8QXNzaWduZWU+XHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KClcclxuICBjdXJyZW50VXNlcjogVXNlcjtcclxuICBASW5wdXQoKVxyXG4gIGNvbnRyYWN0b3JzTGlzdDogVGFnW107XHJcbiAgQElucHV0KClcclxuICBzdGFmZkxpc3Q6IFRhZ1tdO1xyXG5cclxuICBzZWxlY3RJbXBvcnRUeXBlQ29udHJvbDogRm9ybUNvbnRyb2xUeXBlU2FmZTxzdHJpbmc+O1xyXG4gIHNlbGVjdEl0ZW1Db250cmFjdG9yQ29udHJvbDogRm9ybUNvbnRyb2xUeXBlU2FmZTxUYWc+O1xyXG4gIHNlbGVjdEl0ZW1TdGFmZkNvbnRyb2w6IEZvcm1Db250cm9sVHlwZVNhZmU8VGFnPjtcclxuXHJcbiAgYXNzaWduZWVUeXBlczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyhBc3NpZ25lZVR5cGUpLm1hcChrID0+IEFzc2lnbmVlVHlwZVtrXSk7XHJcblxyXG4gIGhpZGVTZWxlY3RDb250cmFjdG9yID0gdHJ1ZTtcclxuICBoaWRlU2VsZWN0U3RhZmYgPSB0cnVlO1xyXG5cclxuICBkZXN0cm95ZWQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlclR5cGVkU2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc2VsZWN0SW1wb3J0VHlwZUNvbnRyb2wgPSB0aGlzLmZiLmNvbnRyb2w8QXNzaWduZWVUeXBlPigpO1xyXG4gICAgdGhpcy5zZWxlY3RJdGVtQ29udHJhY3RvckNvbnRyb2wgPSB0aGlzLmZiLmNvbnRyb2w8VGFnPigpO1xyXG4gICAgdGhpcy5zZWxlY3RJdGVtU3RhZmZDb250cm9sID0gdGhpcy5mYi5jb250cm9sPFRhZz4oKTtcclxuICB9XHJcblxyXG4gIG1ha2VMb2dQaXBlKGxvZ1N0cmluZzogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gcGlwZShcclxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSxcclxuICAgICAgYXVkaXRUaW1lKDMwMCksXHJcbiAgICAgIHRhcCh2YWwgPT4gY29uc29sZS5sb2coJ2Fzc2lnbmVlLXNlbGVjdG9yOiAnLCBsb2dTdHJpbmcsIHsgdmFsIH0pKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNoZWNrU3RhdHVzKGNvbnRyb2w6IEZvcm1Db250cm9sLCBkaXNhYmxlZDogYm9vbGVhbikge1xyXG4gICAgaWYgKGRpc2FibGVkICYmICFjb250cm9sLmRpc2FibGVkKSB7XHJcbiAgICAgIGNvbnRyb2wuZGlzYWJsZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFkaXNhYmxlZCAmJiBjb250cm9sLmRpc2FibGVkKSB7XHJcbiAgICAgIGNvbnRyb2wuZW5hYmxlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBuZ09uSW5pdCgpIHtcclxuICAgIC8vIENoZWNrIGlmIG1haW4gY29udHJvbCBoYXMgYmVlbiBkaXNhYmxlZC9lbmFibGVkXHJcbiAgICB0aGlzLmludGVybmFsQ29udHJvbC5zdGF0dXNDaGFuZ2VzXHJcbiAgICAgIC5waXBlKHRoaXMubWFrZUxvZ1BpcGUoJ2NvbnRyb2wuc3RhdHVzQ2hhbmdlcycpKVxyXG4gICAgICAuc3Vic2NyaWJlKG5ld1ZhbCA9PiB7XHJcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSBuZXdWYWwgPT09ICdESVNBQkxFRCc7XHJcbiAgICAgICAgdGhpcy5jaGVja1N0YXR1cyh0aGlzLnNlbGVjdEltcG9ydFR5cGVDb250cm9sLCBkaXNhYmxlZCk7XHJcbiAgICAgICAgdGhpcy5jaGVja1N0YXR1cyh0aGlzLnNlbGVjdEl0ZW1TdGFmZkNvbnRyb2wsIGRpc2FibGVkKTtcclxuICAgICAgICB0aGlzLmNoZWNrU3RhdHVzKHRoaXMuc2VsZWN0SXRlbUNvbnRyYWN0b3JDb250cm9sLCBkaXNhYmxlZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgLy8gQ2hlY2sgaWYgaW1wb3J0IHR5cGUgaGFzIGNoYW5nZWRcclxuICAgIHRoaXMuc2VsZWN0SW1wb3J0VHlwZUNvbnRyb2wudmFsdWVDaGFuZ2VzXHJcbiAgICAgIC5waXBlKHRoaXMubWFrZUxvZ1BpcGUoJ3NlbGVjdEltcG9ydFR5cGVDb250cm9sLnZhbHVlQ2hhbmdlcycpKVxyXG4gICAgICAuc3Vic2NyaWJlKHZhbCA9PiB7XHJcbiAgICAgICAgaWYgKHZhbCA9PT0gQXNzaWduZWVUeXBlLm15RGV0YWlscykge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlU2VsZWN0ZWRNeURldGFpbHMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbCA9PT0gQXNzaWduZWVUeXBlLmNvbnRyYWN0b3IpIHtcclxuICAgICAgICAgIHRoaXMuaGlkZVNlbGVjdENvbnRyYWN0b3IgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuaGlkZVNlbGVjdFN0YWZmID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbCA9PT0gQXNzaWduZWVUeXBlLnN0YWZmTWVtYmVyKSB7XHJcbiAgICAgICAgICB0aGlzLmhpZGVTZWxlY3RTdGFmZiA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5oaWRlU2VsZWN0Q29udHJhY3RvciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIC8vIENoZWNrIGlmIHNlbGVjdEl0ZW1Db250cmFjdG9yQ29udHJvbCBoYXMgY2hhbmdlZFxyXG4gICAgdGhpcy5zZWxlY3RJdGVtQ29udHJhY3RvckNvbnRyb2wudmFsdWVDaGFuZ2VzXHJcbiAgICAgIC5waXBlKHRoaXMubWFrZUxvZ1BpcGUoJ3NlbGVjdEl0ZW1Db250cmFjdG9yQ29udHJvbC52YWx1ZUNoYW5nZXMnKSlcclxuICAgICAgLnN1YnNjcmliZShhc3luYyAodmFsOiBUYWcpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVTZWxlY3RlZFNpbmdsZUNvbnRyYWN0b3IodmFsKTtcclxuICAgICAgfSk7XHJcbiAgICAvLyBDaGVjayBpZiBzZWxlY3RJdGVtU3RhZmZDb250cm9sIGhhcyBjaGFuZ2VkXHJcbiAgICB0aGlzLnNlbGVjdEl0ZW1TdGFmZkNvbnRyb2wudmFsdWVDaGFuZ2VzXHJcbiAgICAgIC5waXBlKHRoaXMubWFrZUxvZ1BpcGUoJ3NlbGVjdEl0ZW1TdGFmZkNvbnRyb2wudmFsdWVDaGFuZ2VzJykpXHJcbiAgICAgIC5zdWJzY3JpYmUoYXN5bmMgKHZhbDogVGFnKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlU2VsZWN0ZWRTaW5nbGVTdGFmZih2YWwpO1xyXG4gICAgICB9KTtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICBpZiAoY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0SW1wb3J0VHlwZUNvbnRyb2wucGF0Y2hWYWx1ZShjdXJyZW50VmFsdWUudHlwZSk7XHJcbiAgICAgIGlmIChjdXJyZW50VmFsdWUudHlwZSA9PT0gQXNzaWduZWVUeXBlLmNvbnRyYWN0b3IpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdEl0ZW1Db250cmFjdG9yQ29udHJvbC5wYXRjaFZhbHVlKGN1cnJlbnRWYWx1ZS5zZWxlY3RlZF90YWcpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjdXJyZW50VmFsdWUudHlwZSA9PT0gQXNzaWduZWVUeXBlLnN0YWZmTWVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RJdGVtU3RhZmZDb250cm9sLnBhdGNoVmFsdWUoY3VycmVudFZhbHVlLnNlbGVjdGVkX3RhZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5kZXN0cm95ZWQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGVkSW1wb3J0VHlwZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdEltcG9ydFR5cGVDb250cm9sLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgaGFuZGxlU2VsZWN0ZWRTaW5nbGVTdGFmZihzZWxlY3RlZDogVGFnKSB7XHJcbiAgICBpZiAoIXNlbGVjdGVkKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignYXNzaWduZWUtc2VsZWN0b3I6IG5vIHN0YWZmIHNlbGVjdGVkJywgeyBzZWxlY3RlZCB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3RhZmZNZW1iZXIgPSBzZWxlY3RlZC5vYmogYXMgU3RhZmZNZW1iZXI7XHJcbiAgICBjb25zdCBuZXdBc3NpZ25lZTogQXNzaWduZWUgPSB7XHJcbiAgICAgIHNlbGVjdGVkX3RhZzogc2VsZWN0ZWQsXHJcbiAgICAgIGFzc2lnbmVlX2lkOiBzZWxlY3RlZC5pZCxcclxuICAgICAgdHlwZTogQXNzaWduZWVUeXBlLnN0YWZmTWVtYmVyLFxyXG4gICAgICBuYW1lOiBzdGFmZk1lbWJlci5uYW1lLFxyXG4gICAgICBlbWFpbDogc3RhZmZNZW1iZXIuZW1haWwsXHJcbiAgICAgIG1vYmlsZTogc3RhZmZNZW1iZXIucGhvbmVcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZygnYXNzaWduZWUtc2VsZWN0b3I6IGhhbmRsZVNlbGVjdGVkU2luZ2xlU3RhZmYnLCB7XHJcbiAgICAgIHNlbGVjdGVkLFxyXG4gICAgICBuZXdBc3NpZ25lZVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnZhbHVlID0gbmV3QXNzaWduZWU7XHJcbiAgfVxyXG5cclxuICBhc3luYyBoYW5kbGVTZWxlY3RlZFNpbmdsZUNvbnRyYWN0b3Ioc2VsZWN0ZWQ6IFRhZykge1xyXG4gICAgaWYgKCFzZWxlY3RlZCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ2Fzc2lnbmVlLXNlbGVjdG9yOiBubyBjb250cmFjdG9yIHNlbGVjdGVkJywgeyBzZWxlY3RlZCB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY29udHJhY3RvciA9IHNlbGVjdGVkLm9iaiBhcyBDb250cmFjdG9yO1xyXG4gICAgY29uc3QgY29udGFjdCA9IEdldEZpcnN0Q29udGFjdChjb250cmFjdG9yKTtcclxuICAgIGNvbnN0IG5ld0Fzc2lnbmVlOiBBc3NpZ25lZSA9IHtcclxuICAgICAgc2VsZWN0ZWRfdGFnOiBzZWxlY3RlZCxcclxuICAgICAgYXNzaWduZWVfaWQ6IHNlbGVjdGVkLmlkLFxyXG4gICAgICB0eXBlOiBBc3NpZ25lZVR5cGUuY29udHJhY3RvcixcclxuICAgICAgbmFtZTogY29udGFjdC5uYW1lLFxyXG4gICAgICBlbWFpbDogY29udGFjdC5lbWFpbCxcclxuICAgICAgbW9iaWxlOiBjb250YWN0LnBob25lXHJcbiAgICB9O1xyXG4gICAgdGhpcy52YWx1ZSA9IG5ld0Fzc2lnbmVlO1xyXG4gICAgY29uc29sZS5sb2coJ2Fzc2lnbmVlLXNlbGVjdG9yOiBoYW5kbGVTZWxlY3RlZFNpbmdsZUNvbnRyYWN0b3InLCB7XHJcbiAgICAgIHRoaXNfdmFsdWU6IHRoaXMudmFsdWUsXHJcbiAgICAgIHNlbGVjdGVkLFxyXG4gICAgICBuZXdBc3NpZ25lZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBoYW5kbGVTZWxlY3RlZE15RGV0YWlscygpIHtcclxuICAgIHRoaXMuaGlkZVNlbGVjdFN0YWZmID0gdHJ1ZTtcclxuICAgIHRoaXMuaGlkZVNlbGVjdENvbnRyYWN0b3IgPSB0cnVlO1xyXG4gICAgY29uc3QgdXNlciA9IHRoaXMuY3VycmVudFVzZXI7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgJ2Fzc2lnbmVlLXNlbGVjdG9yOiBoYW5kbGVTZWxlY3RlZE15RGV0YWlscygpIGltcG9ydGluZyBteSBkZXRhaWxzJyxcclxuICAgICAge1xyXG4gICAgICAgIHVzZXJcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IG5ld0Fzc2lnbmVlOiBBc3NpZ25lZSA9IHtcclxuICAgICAgc2VsZWN0ZWRfb2JqOiB1c2VyLFxyXG4gICAgICBhc3NpZ25lZV9pZDogdXNlci5pZCxcclxuICAgICAgdHlwZTogQXNzaWduZWVUeXBlLm15RGV0YWlscyxcclxuICAgICAgbmFtZTogdXNlclsnRmlyc3QgTmFtZSddICsgJyAnICsgdXNlclsnTGFzdCBOYW1lJ10sXHJcbiAgICAgIGVtYWlsOiB1c2VyLkVtYWlsIHx8ICcnLFxyXG4gICAgICBtb2JpbGU6IHVzZXIuUGhvbmUgfHwgJydcclxuICAgIH07XHJcbiAgICB0aGlzLnZhbHVlID0gbmV3QXNzaWduZWU7XHJcbiAgICBjb25zb2xlLmxvZygnYXNzaWduZWUtc2VsZWN0b3I6IGhhbmRsZVNlbGVjdGVkTXlEZXRhaWxzKCkgbmV3QXNzaWduZWUnLCB7XHJcbiAgICAgIG5ld0Fzc2lnbmVlXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19