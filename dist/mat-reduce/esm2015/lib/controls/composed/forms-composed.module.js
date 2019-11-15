/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatIconModule } from '@angular/material';
import { MatReduceFormsUsingMaterialModule } from '../material/forms-material.module';
import { LibFormAssigneeSelectorComponent } from './form-assignee-selector.component';
/** @type {?} */
const exportedModules = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatReduceFormsUsingMaterialModule
];
/** @type {?} */
const exported = [LibFormAssigneeSelectorComponent];
export class MatReduceFormsComposedModule {
}
MatReduceFormsComposedModule.decorators = [
    { type: NgModule, args: [{
                imports: [...exportedModules],
                exports: [...exported, ...exportedModules],
                declarations: [...exported],
                providers: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMtY29tcG9zZWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXJlZHVjZS8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9jb21wb3NlZC9mb3Jtcy1jb21wb3NlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztNQUVoRixlQUFlLEdBQUc7SUFDdEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWE7SUFDYixpQ0FBaUM7Q0FDbEM7O01BRUssUUFBUSxHQUFHLENBQUMsZ0NBQWdDLENBQUM7QUFRbkQsTUFBTSxPQUFPLDRCQUE0Qjs7O1lBTnhDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxHQUFHLGVBQWUsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsR0FBRyxlQUFlLENBQUM7Z0JBQzFDLFlBQVksRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDO2dCQUMzQixTQUFTLEVBQUUsRUFBRTthQUNkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdENhcmRNb2R1bGUsIE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmltcG9ydCB7IE1hdFJlZHVjZUZvcm1zVXNpbmdNYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4uL21hdGVyaWFsL2Zvcm1zLW1hdGVyaWFsLm1vZHVsZSc7XG5pbXBvcnQgeyBMaWJGb3JtQXNzaWduZWVTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vZm9ybS1hc3NpZ25lZS1zZWxlY3Rvci5jb21wb25lbnQnO1xuXG5jb25zdCBleHBvcnRlZE1vZHVsZXMgPSBbXG4gIENvbW1vbk1vZHVsZSxcbiAgRm9ybXNNb2R1bGUsXG4gIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIE1hdEljb25Nb2R1bGUsXG4gIE1hdENhcmRNb2R1bGUsXG4gIE1hdFJlZHVjZUZvcm1zVXNpbmdNYXRlcmlhbE1vZHVsZVxuXTtcblxuY29uc3QgZXhwb3J0ZWQgPSBbTGliRm9ybUFzc2lnbmVlU2VsZWN0b3JDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbLi4uZXhwb3J0ZWRNb2R1bGVzXSxcbiAgZXhwb3J0czogWy4uLmV4cG9ydGVkLCAuLi5leHBvcnRlZE1vZHVsZXNdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5leHBvcnRlZF0sXG4gIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgTWF0UmVkdWNlRm9ybXNDb21wb3NlZE1vZHVsZSB7fVxuIl19