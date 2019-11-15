/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatIconModule } from '@angular/material';
import { MatReduceFormsUsingMaterialModule } from '../material/forms-material.module';
import { LibFormAssigneeSelectorComponent } from './form-assignee-selector.component';
/** @type {?} */
var exportedModules = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatReduceFormsUsingMaterialModule
];
/** @type {?} */
var exported = [LibFormAssigneeSelectorComponent];
var MatReduceFormsComposedModule = /** @class */ (function () {
    function MatReduceFormsComposedModule() {
    }
    MatReduceFormsComposedModule.decorators = [
        { type: NgModule, args: [{
                    imports: tslib_1.__spread(exportedModules),
                    exports: tslib_1.__spread(exported, exportedModules),
                    declarations: tslib_1.__spread(exported),
                    providers: []
                },] }
    ];
    return MatReduceFormsComposedModule;
}());
export { MatReduceFormsComposedModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMtY29tcG9zZWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXJlZHVjZS8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9jb21wb3NlZC9mb3Jtcy1jb21wb3NlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7SUFFaEYsZUFBZSxHQUFHO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixhQUFhO0lBQ2IsaUNBQWlDO0NBQ2xDOztJQUVLLFFBQVEsR0FBRyxDQUFDLGdDQUFnQyxDQUFDO0FBRW5EO0lBQUE7SUFNMkMsQ0FBQzs7Z0JBTjNDLFFBQVEsU0FBQztvQkFDUixPQUFPLG1CQUFNLGVBQWUsQ0FBQztvQkFDN0IsT0FBTyxtQkFBTSxRQUFRLEVBQUssZUFBZSxDQUFDO29CQUMxQyxZQUFZLG1CQUFNLFFBQVEsQ0FBQztvQkFDM0IsU0FBUyxFQUFFLEVBQUU7aUJBQ2Q7O0lBQzBDLG1DQUFDO0NBQUEsQUFONUMsSUFNNEM7U0FBL0IsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdENhcmRNb2R1bGUsIE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmltcG9ydCB7IE1hdFJlZHVjZUZvcm1zVXNpbmdNYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4uL21hdGVyaWFsL2Zvcm1zLW1hdGVyaWFsLm1vZHVsZSc7XG5pbXBvcnQgeyBMaWJGb3JtQXNzaWduZWVTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vZm9ybS1hc3NpZ25lZS1zZWxlY3Rvci5jb21wb25lbnQnO1xuXG5jb25zdCBleHBvcnRlZE1vZHVsZXMgPSBbXG4gIENvbW1vbk1vZHVsZSxcbiAgRm9ybXNNb2R1bGUsXG4gIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIE1hdEljb25Nb2R1bGUsXG4gIE1hdENhcmRNb2R1bGUsXG4gIE1hdFJlZHVjZUZvcm1zVXNpbmdNYXRlcmlhbE1vZHVsZVxuXTtcblxuY29uc3QgZXhwb3J0ZWQgPSBbTGliRm9ybUFzc2lnbmVlU2VsZWN0b3JDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbLi4uZXhwb3J0ZWRNb2R1bGVzXSxcbiAgZXhwb3J0czogWy4uLmV4cG9ydGVkLCAuLi5leHBvcnRlZE1vZHVsZXNdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5leHBvcnRlZF0sXG4gIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgTWF0UmVkdWNlRm9ybXNDb21wb3NlZE1vZHVsZSB7fVxuIl19