/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Output, EventEmitter, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CalendarOverlayService } from '../services/calendar-overlay.service';
import { RangeStoreService } from '../services/range-store.service';
import { ConfigStoreService } from '../services/config-store.service';
export class NgxMatDrpComponent {
    /**
     * @param {?} changeDetectionRef
     * @param {?} calendarOverlayService
     * @param {?} rangeStoreService
     * @param {?} configStoreService
     * @param {?} datePipe
     */
    constructor(changeDetectionRef, calendarOverlayService, rangeStoreService, configStoreService, datePipe) {
        this.changeDetectionRef = changeDetectionRef;
        this.calendarOverlayService = calendarOverlayService;
        this.rangeStoreService = rangeStoreService;
        this.configStoreService = configStoreService;
        this.datePipe = datePipe;
        this.selectedDateRangeChanged = new EventEmitter();
        this.selectedDateRange = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.configStoreService.ngxDrpOptions = this.options;
        this.options.placeholder = this.options.placeholder || 'Choose a date';
        this.rangeUpdate$ = this.rangeStoreService.rangeUpdate$.subscribe(range => {
            /** @type {?} */
            const from = this.formatToDateString(range.fromDate, this.options.format);
            /** @type {?} */
            const to = this.formatToDateString(range.toDate, this.options.format);
            if (this.configStoreService.ngxDrpOptions.singleDate) {
                this.selectedDateRange = `${from}`;
            }
            else {
                this.selectedDateRange = `${from} - ${to}`;
            }
            this.selectedDateRangeChanged.emit(range);
        });
        this.rangeStoreService.updateRange(this.options.range.fromDate, this.options.range.toDate);
        this.changeDetectionRef.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.rangeUpdate$) {
            this.rangeUpdate$.unsubscribe();
        }
    }
    /**
     * @private
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    formatToDateString(date, format) {
        return this.datePipe.transform(date, format);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    openCalendar(event) {
        /** @type {?} */
        const overlayRef = this.calendarOverlayService.open(this.options.calendarOverlayConfig, this.calendarInput);
    }
    /**
     * @param {?} range
     * @return {?}
     */
    resetDates(range) {
        this.rangeStoreService.updateRange(range.fromDate, range.toDate);
    }
}
NgxMatDrpComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-mat-drp',
                template: "<div> \r\n  \r\n  <mat-form-field class=\"ngx-mat-drp-date-display\">\r\n    <input class=\"ngx-mat-drp-date-input\"\r\n          matInput [placeholder]=\"options.placeholder\"\r\n          [value]=\"selectedDateRange\"\r\n          [matTooltip]=\"selectedDateRange\"\r\n          (click)=\"openCalendar($event)\"\r\n          readonly\r\n          #calendarInput >\r\n    <div matSuffix \r\n          class=\"ngx-mat-drp-calendar\"\r\n          (click)=\"openCalendar($event)\">\r\n    </div>\r\n  </mat-form-field>\r\n  \r\n</div>    \r\n",
                providers: [
                    CalendarOverlayService,
                    RangeStoreService,
                    ConfigStoreService,
                    DatePipe
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-mat-drp-date-display{min-width:230px}.ngx-mat-drp-date-input{text-overflow:ellipsis;color:#4169e1}.ngx-mat-drp-calendar{background-image:url('data:image/svg+xml,<svg fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">    <path d=\"M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z\"/>    <path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>');width:24px;height:24px}"]
            }] }
];
/** @nocollapse */
NgxMatDrpComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: CalendarOverlayService },
    { type: RangeStoreService },
    { type: ConfigStoreService },
    { type: DatePipe }
];
NgxMatDrpComponent.propDecorators = {
    calendarInput: [{ type: ViewChild, args: ['calendarInput',] }],
    selectedDateRangeChanged: [{ type: Output }],
    options: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NgxMatDrpComponent.prototype.calendarInput;
    /** @type {?} */
    NgxMatDrpComponent.prototype.selectedDateRangeChanged;
    /** @type {?} */
    NgxMatDrpComponent.prototype.options;
    /**
     * @type {?}
     * @private
     */
    NgxMatDrpComponent.prototype.rangeUpdate$;
    /** @type {?} */
    NgxMatDrpComponent.prototype.selectedDateRange;
    /**
     * @type {?}
     * @private
     */
    NgxMatDrpComponent.prototype.changeDetectionRef;
    /**
     * @type {?}
     * @private
     */
    NgxMatDrpComponent.prototype.calendarOverlayService;
    /** @type {?} */
    NgxMatDrpComponent.prototype.rangeStoreService;
    /** @type {?} */
    NgxMatDrpComponent.prototype.configStoreService;
    /**
     * @type {?}
     * @private
     */
    NgxMatDrpComponent.prototype.datePipe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdC1kcnAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdC1kYXRlcmFuZ2UtcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL25neC1tYXQtZHJwL25neC1tYXQtZHJwL25neC1tYXQtZHJwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFlBQVksRUFDWixLQUFLLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFldEUsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7SUFVN0IsWUFDVSxrQkFBcUMsRUFDckMsc0JBQThDLEVBQy9DLGlCQUFvQyxFQUNwQyxrQkFBc0MsRUFDckMsUUFBa0I7UUFKbEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQy9DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUNyQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBWG5CLDZCQUF3QixHQUF3QixJQUFJLFlBQVksRUFBUyxDQUFDO1FBSW5GLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztJQVFwQixDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxlQUFlLENBQUM7UUFDdkUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTs7a0JBQ2xFLElBQUksR0FBVyxJQUFJLENBQUMsa0JBQWtCLENBQzFDLEtBQUssQ0FBQyxRQUFRLEVBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQ3BCOztrQkFDSyxFQUFFLEdBQVcsSUFBSSxDQUFDLGtCQUFrQixDQUN4QyxLQUFLLENBQUMsTUFBTSxFQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUNwQjtZQUNELElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3BELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDO2FBQ3BDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLElBQUksTUFBTSxFQUFFLEVBQUUsQ0FBQzthQUM1QztZQUNELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FDMUIsQ0FBQztRQUNGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLGtCQUFrQixDQUFDLElBQVUsRUFBRSxNQUFjO1FBQ25ELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLEtBQUs7O2NBQ1YsVUFBVSxHQUFlLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQzdELElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQ2xDLElBQUksQ0FBQyxhQUFhLENBQ25CO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxVQUFVLENBQUMsS0FBWTtRQUM1QixJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUNoQyxLQUFLLENBQUMsUUFBUSxFQUNkLEtBQUssQ0FBQyxNQUFNLENBQ2IsQ0FBQztJQUNKLENBQUM7OztZQS9FRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLHdpQkFBMkM7Z0JBRTNDLFNBQVMsRUFBRTtvQkFDVCxzQkFBc0I7b0JBQ3RCLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQixRQUFRO2lCQUNUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztZQXJCQyxpQkFBaUI7WUFJVixzQkFBc0I7WUFDdEIsaUJBQWlCO1lBRWpCLGtCQUFrQjtZQUxsQixRQUFROzs7NEJBcUJkLFNBQVMsU0FBQyxlQUFlO3VDQUV6QixNQUFNO3NCQUVOLEtBQUs7Ozs7SUFKTiwyQ0FDYzs7SUFDZCxzREFDbUY7O0lBQ25GLHFDQUN1Qjs7Ozs7SUFDdkIsMENBQW1DOztJQUNuQywrQ0FBdUI7Ozs7O0lBR3JCLGdEQUE2Qzs7Ozs7SUFDN0Msb0RBQXNEOztJQUN0RCwrQ0FBMkM7O0lBQzNDLGdEQUE2Qzs7Ozs7SUFDN0Msc0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENhbGVuZGFyT3ZlcmxheVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jYWxlbmRhci1vdmVybGF5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSYW5nZVN0b3JlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3JhbmdlLXN0b3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSYW5nZSwgTmd4RHJwT3B0aW9ucyB9IGZyb20gJy4uL21vZGVsL21vZGVsJztcclxuaW1wb3J0IHsgQ29uZmlnU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY29uZmlnLXN0b3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LW1hdC1kcnAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtbWF0LWRycC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LW1hdC1kcnAuY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ2FsZW5kYXJPdmVybGF5U2VydmljZSxcclxuICAgIFJhbmdlU3RvcmVTZXJ2aWNlLFxyXG4gICAgQ29uZmlnU3RvcmVTZXJ2aWNlLFxyXG4gICAgRGF0ZVBpcGVcclxuICBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hNYXREcnBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQFZpZXdDaGlsZCgnY2FsZW5kYXJJbnB1dCcpXHJcbiAgY2FsZW5kYXJJbnB1dDtcclxuICBAT3V0cHV0KClcclxuICByZWFkb25seSBzZWxlY3RlZERhdGVSYW5nZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxSYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyPFJhbmdlPigpO1xyXG4gIEBJbnB1dCgpXHJcbiAgb3B0aW9uczogTmd4RHJwT3B0aW9ucztcclxuICBwcml2YXRlIHJhbmdlVXBkYXRlJDogU3Vic2NyaXB0aW9uO1xyXG4gIHNlbGVjdGVkRGF0ZVJhbmdlID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBjYWxlbmRhck92ZXJsYXlTZXJ2aWNlOiBDYWxlbmRhck92ZXJsYXlTZXJ2aWNlLFxyXG4gICAgcHVibGljIHJhbmdlU3RvcmVTZXJ2aWNlOiBSYW5nZVN0b3JlU2VydmljZSxcclxuICAgIHB1YmxpYyBjb25maWdTdG9yZVNlcnZpY2U6IENvbmZpZ1N0b3JlU2VydmljZSxcclxuICAgIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcbiAgICB0aGlzLm9wdGlvbnMucGxhY2Vob2xkZXIgPSB0aGlzLm9wdGlvbnMucGxhY2Vob2xkZXIgfHwgJ0Nob29zZSBhIGRhdGUnO1xyXG4gICAgdGhpcy5yYW5nZVVwZGF0ZSQgPSB0aGlzLnJhbmdlU3RvcmVTZXJ2aWNlLnJhbmdlVXBkYXRlJC5zdWJzY3JpYmUocmFuZ2UgPT4ge1xyXG4gICAgICBjb25zdCBmcm9tOiBzdHJpbmcgPSB0aGlzLmZvcm1hdFRvRGF0ZVN0cmluZyhcclxuICAgICAgICByYW5nZS5mcm9tRGF0ZSxcclxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9ybWF0XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHRvOiBzdHJpbmcgPSB0aGlzLmZvcm1hdFRvRGF0ZVN0cmluZyhcclxuICAgICAgICByYW5nZS50b0RhdGUsXHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmZvcm1hdFxyXG4gICAgICApO1xyXG4gICAgICBpZiAodGhpcy5jb25maWdTdG9yZVNlcnZpY2Uubmd4RHJwT3B0aW9ucy5zaW5nbGVEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGVSYW5nZSA9IGAke2Zyb219YDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZVJhbmdlID0gYCR7ZnJvbX0gLSAke3RvfWA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZWxlY3RlZERhdGVSYW5nZUNoYW5nZWQuZW1pdChyYW5nZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnJhbmdlU3RvcmVTZXJ2aWNlLnVwZGF0ZVJhbmdlKFxyXG4gICAgICB0aGlzLm9wdGlvbnMucmFuZ2UuZnJvbURhdGUsXHJcbiAgICAgIHRoaXMub3B0aW9ucy5yYW5nZS50b0RhdGVcclxuICAgICk7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLnJhbmdlVXBkYXRlJCkge1xyXG4gICAgICB0aGlzLnJhbmdlVXBkYXRlJC51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtYXRUb0RhdGVTdHJpbmcoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKGRhdGUsIGZvcm1hdCk7XHJcbiAgfVxyXG5cclxuICBvcGVuQ2FsZW5kYXIoZXZlbnQpIHtcclxuICAgIGNvbnN0IG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYgPSB0aGlzLmNhbGVuZGFyT3ZlcmxheVNlcnZpY2Uub3BlbihcclxuICAgICAgdGhpcy5vcHRpb25zLmNhbGVuZGFyT3ZlcmxheUNvbmZpZyxcclxuICAgICAgdGhpcy5jYWxlbmRhcklucHV0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlc2V0RGF0ZXMocmFuZ2U6IFJhbmdlKSB7XHJcbiAgICB0aGlzLnJhbmdlU3RvcmVTZXJ2aWNlLnVwZGF0ZVJhbmdlKFxyXG4gICAgICByYW5nZS5mcm9tRGF0ZSxcclxuICAgICAgcmFuZ2UudG9EYXRlXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=