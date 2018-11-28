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
var ɵ0 = new Date();
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
                        OverlayModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdC1kcnAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdC1kYXRlcmFuZ2UtcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL25neC1tYXQtZHJwL25neC1tYXQtZHJwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFbkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFckQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDekYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO1NBb0J4QixJQUFJLElBQUksRUFBRTtBQWxCeEM7SUFBQTtJQXVCK0IsQ0FBQzs7Z0JBdkIvQixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsYUFBYTtxQkFDZDtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osa0JBQWtCO3dCQUNsQix3QkFBd0I7d0JBQ3hCLHNCQUFzQjt3QkFDdEIsZ0JBQWdCO3FCQUNqQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsSUFBWSxFQUFDO3FCQUN0QztvQkFDRCxlQUFlLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDekMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7aUJBQzlCOztJQUM4QixzQkFBQztDQUFBLEFBdkJoQyxJQXVCZ0M7U0FBbkIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5neE1hdERycENvbXBvbmVudCB9IGZyb20gJy4vbmd4LW1hdC1kcnAvbmd4LW1hdC1kcnAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGlja2VyT3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4vcGlja2VyLW92ZXJsYXkvcGlja2VyLW92ZXJsYXkuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBNYXREYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XHJcbmltcG9ydCB7IE1hdE5hdGl2ZURhdGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcclxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuXHJcbmltcG9ydCB7IENhbGVuZGFyV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItd3JhcHBlci9jYWxlbmRhci13cmFwcGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByZXNldHNDb21wb25lbnQgfSBmcm9tICcuL3ByZXNldHMvcHJlc2V0cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEQVRFIH0gZnJvbSAnLi9zZXJ2aWNlcy9yYW5nZS1zdG9yZS5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXHJcbiAgICBPdmVybGF5TW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE5neE1hdERycENvbXBvbmVudCxcclxuICAgIENhbGVuZGFyV3JhcHBlckNvbXBvbmVudCxcclxuICAgIFBpY2tlck92ZXJsYXlDb21wb25lbnQsXHJcbiAgICBQcmVzZXRzQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtwcm92aWRlOiBEQVRFLCB1c2VWYWx1ZTogbmV3IERhdGUoKX1cclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1BpY2tlck92ZXJsYXlDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtOZ3hNYXREcnBDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hNYXREcnBNb2R1bGUgeyB9XHJcbiJdfQ==