/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { AppConfirmationDialogComponent, ConfirmationService } from './dialogs/app-confirmation.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormBuilderTypedService } from './services/form-builder-typed.service';
import { MatReduceFormsUsing3rdPartyModule } from './controls/using-3rd-party/forms-3rd-party.module';
import { MatReduceFormsUsingMaterialModule } from './controls/material/forms-material.module';
import { MatReduceFormsComposedModule } from './controls/composed/forms-composed.module';
import { MatIconModule } from '@angular/material';
/** @type {?} */
var exportedModules = [
    MatReduceFormsUsing3rdPartyModule,
    MatReduceFormsUsingMaterialModule,
    MatReduceFormsComposedModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
];
var MatReduceModule = /** @class */ (function () {
    function MatReduceModule() {
    }
    MatReduceModule.decorators = [
        { type: NgModule, args: [{
                    entryComponents: [AppConfirmationDialogComponent],
                    declarations: [AppConfirmationDialogComponent],
                    exports: tslib_1.__spread(exportedModules),
                    imports: tslib_1.__spread([MatIconModule], exportedModules),
                    providers: [ConfirmationService, FormBuilderTypedService]
                },] }
    ];
    return MatReduceModule;
}());
export { MatReduceModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXJlZHVjZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtcmVkdWNlLyIsInNvdXJjZXMiOlsibGliL21hdC1yZWR1Y2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQ0wsOEJBQThCLEVBQzlCLG1CQUFtQixFQUNwQixNQUFNLHNDQUFzQyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDdEcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDOUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDekYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztJQUU1QyxlQUFlLEdBQUc7SUFDdEIsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0NBQ1o7QUFFRDtJQUFBO0lBTzhCLENBQUM7O2dCQVA5QixRQUFRLFNBQUM7b0JBQ1IsZUFBZSxFQUFFLENBQUMsOEJBQThCLENBQUM7b0JBQ2pELFlBQVksRUFBRSxDQUFDLDhCQUE4QixDQUFDO29CQUM5QyxPQUFPLG1CQUFNLGVBQWUsQ0FBQztvQkFDN0IsT0FBTyxvQkFBRyxhQUFhLEdBQUssZUFBZSxDQUFDO29CQUM1QyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSx1QkFBdUIsQ0FBQztpQkFDMUQ7O0lBQzZCLHNCQUFDO0NBQUEsQUFQL0IsSUFPK0I7U0FBbEIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQXBwQ29uZmlybWF0aW9uRGlhbG9nQ29tcG9uZW50LFxyXG4gIENvbmZpcm1hdGlvblNlcnZpY2VcclxufSBmcm9tICcuL2RpYWxvZ3MvYXBwLWNvbmZpcm1hdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyVHlwZWRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9mb3JtLWJ1aWxkZXItdHlwZWQuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdFJlZHVjZUZvcm1zVXNpbmczcmRQYXJ0eU1vZHVsZSB9IGZyb20gJy4vY29udHJvbHMvdXNpbmctM3JkLXBhcnR5L2Zvcm1zLTNyZC1wYXJ0eS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNYXRSZWR1Y2VGb3Jtc1VzaW5nTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL2NvbnRyb2xzL21hdGVyaWFsL2Zvcm1zLW1hdGVyaWFsLm1vZHVsZSc7XHJcbmltcG9ydCB7IE1hdFJlZHVjZUZvcm1zQ29tcG9zZWRNb2R1bGUgfSBmcm9tICcuL2NvbnRyb2xzL2NvbXBvc2VkL2Zvcm1zLWNvbXBvc2VkLm1vZHVsZSc7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5jb25zdCBleHBvcnRlZE1vZHVsZXMgPSBbXHJcbiAgTWF0UmVkdWNlRm9ybXNVc2luZzNyZFBhcnR5TW9kdWxlLFxyXG4gIE1hdFJlZHVjZUZvcm1zVXNpbmdNYXRlcmlhbE1vZHVsZSxcclxuICBNYXRSZWR1Y2VGb3Jtc0NvbXBvc2VkTW9kdWxlLFxyXG4gIENvbW1vbk1vZHVsZSxcclxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gIEZvcm1zTW9kdWxlXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGVudHJ5Q29tcG9uZW50czogW0FwcENvbmZpcm1hdGlvbkRpYWxvZ0NvbXBvbmVudF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQXBwQ29uZmlybWF0aW9uRGlhbG9nQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbLi4uZXhwb3J0ZWRNb2R1bGVzXSxcclxuICBpbXBvcnRzOiBbTWF0SWNvbk1vZHVsZSwgLi4uZXhwb3J0ZWRNb2R1bGVzXSxcclxuICBwcm92aWRlcnM6IFtDb25maXJtYXRpb25TZXJ2aWNlLCBGb3JtQnVpbGRlclR5cGVkU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdFJlZHVjZU1vZHVsZSB7fVxyXG4iXX0=