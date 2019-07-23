/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMatDrpComponent } from './ngx-mat-drp/ngx-mat-drp.component';
import { PickerOverlayComponent } from './picker-overlay/picker-overlay.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OverlayModule } from '@angular/cdk/overlay';
import { CalendarWrapperComponent } from './calendar-wrapper/calendar-wrapper.component';
import { PresetsComponent } from './presets/presets.component';
import { DATE } from './services/range-store.service';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import * as momentImported from 'moment';
/** @type {?} */
var moment = momentImported;
var ɵ0 = moment();
var NgxMatDrpModule = /** @class */ (function () {
    function NgxMatDrpModule() {
    }
    NgxMatDrpModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatFormFieldModule,
                        MatDatepickerModule,
                        MatNativeDateModule,
                        MatInputModule,
                        MatButtonModule,
                        MatTooltipModule,
                        OverlayModule,
                        MatMomentDateModule,
                    ],
                    declarations: [
                        NgxMatDrpComponent,
                        CalendarWrapperComponent,
                        PickerOverlayComponent,
                        PresetsComponent
                    ],
                    providers: [
                        { provide: DATE, useValue: ɵ0 }
                    ],
                    entryComponents: [PickerOverlayComponent],
                    exports: [NgxMatDrpComponent]
                },] }
    ];
    return NgxMatDrpModule;
}());
export { NgxMatDrpModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdC1kcnAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdC1kYXRlcmFuZ2UtcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL25neC1tYXQtZHJwL25neC1tYXQtZHJwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFbkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFckQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDekYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRELE9BQU8sRUFBRSxtQkFBbUIsRUFBOEMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuSCxPQUFPLEtBQUssY0FBYyxNQUFNLFFBQVEsQ0FBQzs7SUFBTyxNQUFNLEdBQUcsY0FBYztTQXFCekMsTUFBTSxFQUFFO0FBbkJ0QztJQUFBO0lBd0IrQixDQUFDOztnQkF4Qi9CLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLG1CQUFtQjtxQkFDcEI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLGtCQUFrQjt3QkFDbEIsd0JBQXdCO3dCQUN4QixzQkFBc0I7d0JBQ3RCLGdCQUFnQjtxQkFDakI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLElBQVUsRUFBQztxQkFDcEM7b0JBQ0QsZUFBZSxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ3pDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO2lCQUM5Qjs7SUFDOEIsc0JBQUM7Q0FBQSxBQXhCaEMsSUF3QmdDO1NBQW5CLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ3hNYXREcnBDb21wb25lbnQgfSBmcm9tICcuL25neC1tYXQtZHJwL25neC1tYXQtZHJwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBpY2tlck92ZXJsYXlDb21wb25lbnQgfSBmcm9tICcuL3BpY2tlci1vdmVybGF5L3BpY2tlci1vdmVybGF5LmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xyXG5pbXBvcnQgeyBNYXROYXRpdmVEYXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xyXG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XHJcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcblxyXG5pbXBvcnQgeyBDYWxlbmRhcldyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLXdyYXBwZXIvY2FsZW5kYXItd3JhcHBlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcmVzZXRzQ29tcG9uZW50IH0gZnJvbSAnLi9wcmVzZXRzL3ByZXNldHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgREFURSB9IGZyb20gJy4vc2VydmljZXMvcmFuZ2Utc3RvcmUuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBNYXRNb21lbnREYXRlTW9kdWxlLCBNQVRfTU9NRU5UX0RBVEVfRk9STUFUUywgTW9tZW50RGF0ZUFkYXB0ZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1tb21lbnQtYWRhcHRlcic7XHJcbmltcG9ydCAqIGFzIG1vbWVudEltcG9ydGVkIGZyb20gJ21vbWVudCc7IGNvbnN0IG1vbWVudCA9IG1vbWVudEltcG9ydGVkO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxyXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcclxuICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcclxuICAgIE92ZXJsYXlNb2R1bGUsXHJcbiAgICBNYXRNb21lbnREYXRlTW9kdWxlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBOZ3hNYXREcnBDb21wb25lbnQsXHJcbiAgICBDYWxlbmRhcldyYXBwZXJDb21wb25lbnQsXHJcbiAgICBQaWNrZXJPdmVybGF5Q29tcG9uZW50LFxyXG4gICAgUHJlc2V0c0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7cHJvdmlkZTogREFURSwgdXNlVmFsdWU6IG1vbWVudCgpfVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbUGlja2VyT3ZlcmxheUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW05neE1hdERycENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neE1hdERycE1vZHVsZSB7IH1cclxuIl19