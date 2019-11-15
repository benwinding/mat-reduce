/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { MatDatetimepickerModule, MatNativeDatetimeModule } from '@mat-datetimepicker/core';
import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatCardModule, MatIconModule, MatDatepickerModule, MatButtonModule } from '@angular/material';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { QuillModule } from 'ngx-quill';
import { LibFormColorComponent } from './form-color.component';
import { LibFormDateComponent } from './form-date.component';
import { LibFormTimeComponent } from './form-time.component';
import { CommonModule } from '@angular/common';
import { SignaturePadModule } from 'angular2-signaturepad';
import { LibFormSignatureComponent } from './form-signature.component';
import { LibFormQuillEditorComponent } from './form-quill-editor.component';
/** @type {?} */
var exportedModules = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDatetimeModule,
    MatDatetimepickerModule
];
/** @type {?} */
var exported = [
    LibFormColorComponent,
    LibFormDateComponent,
    LibFormTimeComponent,
    LibFormSignatureComponent,
    LibFormQuillEditorComponent
];
var MatReduceFormsUsing3rdPartyModule = /** @class */ (function () {
    function MatReduceFormsUsing3rdPartyModule() {
    }
    MatReduceFormsUsing3rdPartyModule.decorators = [
        { type: NgModule, args: [{
                    imports: tslib_1.__spread(exportedModules, [
                        CommonModule,
                        SignaturePadModule,
                        ColorPickerModule,
                        QuillModule,
                        NgxMaterialTimepickerModule
                    ]),
                    exports: tslib_1.__spread(exported, exportedModules),
                    declarations: tslib_1.__spread(exported),
                    providers: []
                },] }
    ];
    return MatReduceFormsUsing3rdPartyModule;
}());
export { MatReduceFormsUsing3rdPartyModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMtM3JkLXBhcnR5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC1yZWR1Y2UvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvdXNpbmctM3JkLXBhcnR5L2Zvcm1zLTNyZC1wYXJ0eS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsdUJBQXVCLEVBQ3hCLE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFDTCxjQUFjLEVBQ2QsYUFBYSxFQUNiLGFBQWEsRUFDYixtQkFBbUIsRUFDbkIsZUFBZSxFQUNoQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFeEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDOztJQUV0RSxlQUFlLEdBQUc7SUFDdEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGFBQWE7SUFDYixhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsdUJBQXVCO0NBQ3hCOztJQUVLLFFBQVEsR0FBRztJQUNmLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QiwyQkFBMkI7Q0FDNUI7QUFFRDtJQUFBO0lBYWdELENBQUM7O2dCQWJoRCxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxtQkFDRixlQUFlO3dCQUNsQixZQUFZO3dCQUNaLGtCQUFrQjt3QkFDbEIsaUJBQWlCO3dCQUNqQixXQUFXO3dCQUNYLDJCQUEyQjtzQkFDNUI7b0JBQ0QsT0FBTyxtQkFBTSxRQUFRLEVBQUssZUFBZSxDQUFDO29CQUMxQyxZQUFZLG1CQUFNLFFBQVEsQ0FBQztvQkFDM0IsU0FBUyxFQUFFLEVBQUU7aUJBQ2Q7O0lBQytDLHdDQUFDO0NBQUEsQUFiakQsSUFhaUQ7U0FBcEMsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBNYXREYXRldGltZXBpY2tlck1vZHVsZSxcclxuICBNYXROYXRpdmVEYXRldGltZU1vZHVsZVxyXG59IGZyb20gJ0BtYXQtZGF0ZXRpbWVwaWNrZXIvY29yZSc7XHJcbmltcG9ydCB7IENvbG9yUGlja2VyTW9kdWxlIH0gZnJvbSAnbmd4LWNvbG9yLXBpY2tlcic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge1xyXG4gIE1hdElucHV0TW9kdWxlLFxyXG4gIE1hdENhcmRNb2R1bGUsXHJcbiAgTWF0SWNvbk1vZHVsZSxcclxuICBNYXREYXRlcGlja2VyTW9kdWxlLFxyXG4gIE1hdEJ1dHRvbk1vZHVsZVxyXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgTmd4TWF0ZXJpYWxUaW1lcGlja2VyTW9kdWxlIH0gZnJvbSAnbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXInO1xyXG5pbXBvcnQgeyBRdWlsbE1vZHVsZSB9IGZyb20gJ25neC1xdWlsbCc7XHJcblxyXG5pbXBvcnQgeyBMaWJGb3JtQ29sb3JDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tY29sb3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGliRm9ybURhdGVDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tZGF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaWJGb3JtVGltZUNvbXBvbmVudCB9IGZyb20gJy4vZm9ybS10aW1lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFNpZ25hdHVyZVBhZE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXNpZ25hdHVyZXBhZCc7XHJcbmltcG9ydCB7IExpYkZvcm1TaWduYXR1cmVDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tc2lnbmF0dXJlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpYkZvcm1RdWlsbEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vZm9ybS1xdWlsbC1lZGl0b3IuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IGV4cG9ydGVkTW9kdWxlcyA9IFtcclxuICBDb21tb25Nb2R1bGUsXHJcbiAgRm9ybXNNb2R1bGUsXHJcbiAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICBNYXRJbnB1dE1vZHVsZSxcclxuICBNYXRDYXJkTW9kdWxlLFxyXG4gIE1hdEljb25Nb2R1bGUsXHJcbiAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gIE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcbiAgTWF0TmF0aXZlRGF0ZXRpbWVNb2R1bGUsXHJcbiAgTWF0RGF0ZXRpbWVwaWNrZXJNb2R1bGVcclxuXTtcclxuXHJcbmNvbnN0IGV4cG9ydGVkID0gW1xyXG4gIExpYkZvcm1Db2xvckNvbXBvbmVudCxcclxuICBMaWJGb3JtRGF0ZUNvbXBvbmVudCxcclxuICBMaWJGb3JtVGltZUNvbXBvbmVudCxcclxuICBMaWJGb3JtU2lnbmF0dXJlQ29tcG9uZW50LFxyXG4gIExpYkZvcm1RdWlsbEVkaXRvckNvbXBvbmVudFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICAuLi5leHBvcnRlZE1vZHVsZXMsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBTaWduYXR1cmVQYWRNb2R1bGUsXHJcbiAgICBDb2xvclBpY2tlck1vZHVsZSxcclxuICAgIFF1aWxsTW9kdWxlLFxyXG4gICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbLi4uZXhwb3J0ZWQsIC4uLmV4cG9ydGVkTW9kdWxlc10sXHJcbiAgZGVjbGFyYXRpb25zOiBbLi4uZXhwb3J0ZWRdLFxyXG4gIHByb3ZpZGVyczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdFJlZHVjZUZvcm1zVXNpbmczcmRQYXJ0eU1vZHVsZSB7fVxyXG4iXX0=