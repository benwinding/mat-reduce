/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const exportedModules = [
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
const exported = [
    LibFormColorComponent,
    LibFormDateComponent,
    LibFormTimeComponent,
    LibFormSignatureComponent,
    LibFormQuillEditorComponent
];
export class MatReduceFormsUsing3rdPartyModule {
}
MatReduceFormsUsing3rdPartyModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ...exportedModules,
                    CommonModule,
                    SignaturePadModule,
                    ColorPickerModule,
                    QuillModule,
                    NgxMaterialTimepickerModule
                ],
                exports: [...exported, ...exportedModules],
                declarations: [...exported],
                providers: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMtM3JkLXBhcnR5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC1yZWR1Y2UvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvdXNpbmctM3JkLXBhcnR5L2Zvcm1zLTNyZC1wYXJ0eS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLHVCQUF1QixFQUN2Qix1QkFBdUIsRUFDeEIsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUNMLGNBQWMsRUFDZCxhQUFhLEVBQ2IsYUFBYSxFQUNiLG1CQUFtQixFQUNuQixlQUFlLEVBQ2hCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUV4QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7O01BRXRFLGVBQWUsR0FBRztJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix1QkFBdUI7Q0FDeEI7O01BRUssUUFBUSxHQUFHO0lBQ2YscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLDJCQUEyQjtDQUM1QjtBQWVELE1BQU0sT0FBTyxpQ0FBaUM7OztZQWI3QyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLEdBQUcsZUFBZTtvQkFDbEIsWUFBWTtvQkFDWixrQkFBa0I7b0JBQ2xCLGlCQUFpQjtvQkFDakIsV0FBVztvQkFDWCwyQkFBMkI7aUJBQzVCO2dCQUNELE9BQU8sRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLEdBQUcsZUFBZSxDQUFDO2dCQUMxQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQztnQkFDM0IsU0FBUyxFQUFFLEVBQUU7YUFDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgTWF0RGF0ZXRpbWVwaWNrZXJNb2R1bGUsXHJcbiAgTWF0TmF0aXZlRGF0ZXRpbWVNb2R1bGVcclxufSBmcm9tICdAbWF0LWRhdGV0aW1lcGlja2VyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb2xvclBpY2tlck1vZHVsZSB9IGZyb20gJ25neC1jb2xvci1waWNrZXInO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtcclxuICBNYXRJbnB1dE1vZHVsZSxcclxuICBNYXRDYXJkTW9kdWxlLFxyXG4gIE1hdEljb25Nb2R1bGUsXHJcbiAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuICBNYXRCdXR0b25Nb2R1bGVcclxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IE5neE1hdGVyaWFsVGltZXBpY2tlck1vZHVsZSB9IGZyb20gJ25neC1tYXRlcmlhbC10aW1lcGlja2VyJztcclxuaW1wb3J0IHsgUXVpbGxNb2R1bGUgfSBmcm9tICduZ3gtcXVpbGwnO1xyXG5cclxuaW1wb3J0IHsgTGliRm9ybUNvbG9yQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JtLWNvbG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpYkZvcm1EYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JtLWRhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGliRm9ybVRpbWVDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tdGltZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBTaWduYXR1cmVQYWRNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi1zaWduYXR1cmVwYWQnO1xyXG5pbXBvcnQgeyBMaWJGb3JtU2lnbmF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JtLXNpZ25hdHVyZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaWJGb3JtUXVpbGxFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tcXVpbGwtZWRpdG9yLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBleHBvcnRlZE1vZHVsZXMgPSBbXHJcbiAgQ29tbW9uTW9kdWxlLFxyXG4gIEZvcm1zTW9kdWxlLFxyXG4gIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgTWF0Q2FyZE1vZHVsZSxcclxuICBNYXRJY29uTW9kdWxlLFxyXG4gIE1hdEJ1dHRvbk1vZHVsZSxcclxuICBNYXREYXRlcGlja2VyTW9kdWxlLFxyXG4gIE1hdE5hdGl2ZURhdGV0aW1lTW9kdWxlLFxyXG4gIE1hdERhdGV0aW1lcGlja2VyTW9kdWxlXHJcbl07XHJcblxyXG5jb25zdCBleHBvcnRlZCA9IFtcclxuICBMaWJGb3JtQ29sb3JDb21wb25lbnQsXHJcbiAgTGliRm9ybURhdGVDb21wb25lbnQsXHJcbiAgTGliRm9ybVRpbWVDb21wb25lbnQsXHJcbiAgTGliRm9ybVNpZ25hdHVyZUNvbXBvbmVudCxcclxuICBMaWJGb3JtUXVpbGxFZGl0b3JDb21wb25lbnRcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgLi4uZXhwb3J0ZWRNb2R1bGVzLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgU2lnbmF0dXJlUGFkTW9kdWxlLFxyXG4gICAgQ29sb3JQaWNrZXJNb2R1bGUsXHJcbiAgICBRdWlsbE1vZHVsZSxcclxuICAgIE5neE1hdGVyaWFsVGltZXBpY2tlck1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogWy4uLmV4cG9ydGVkLCAuLi5leHBvcnRlZE1vZHVsZXNdLFxyXG4gIGRlY2xhcmF0aW9uczogWy4uLmV4cG9ydGVkXSxcclxuICBwcm92aWRlcnM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRSZWR1Y2VGb3Jtc1VzaW5nM3JkUGFydHlNb2R1bGUge31cclxuIl19