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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdC1kcnAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdC1kYXRlcmFuZ2UtcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL25neC1tYXQtZHJwL25neC1tYXQtZHJwL25neC1tYXQtZHJwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFlBQVksRUFDWixLQUFLLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFnQnRFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7O0lBVTdCLFlBQ1Usa0JBQXFDLEVBQ3JDLHNCQUE4QyxFQUMvQyxpQkFBb0MsRUFDcEMsa0JBQXNDLEVBQ3JDLFFBQWtCO1FBSmxCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUMvQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDckMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQVhuQiw2QkFBd0IsR0FBd0IsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUluRixzQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFRcEIsQ0FBQzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksZUFBZSxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7O2tCQUNsRSxJQUFJLEdBQVcsSUFBSSxDQUFDLGtCQUFrQixDQUMxQyxLQUFLLENBQUMsUUFBUSxFQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUNwQjs7a0JBQ0ssRUFBRSxHQUFXLElBQUksQ0FBQyxrQkFBa0IsQ0FDeEMsS0FBSyxDQUFDLE1BQU0sRUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FDcEI7WUFDRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO2dCQUNwRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQzthQUNwQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxJQUFJLE1BQU0sRUFBRSxFQUFFLENBQUM7YUFDNUM7WUFDRCxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQzFCLENBQUM7UUFDRixJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7Ozs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxJQUFZLEVBQUUsTUFBYztRQUNyRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxLQUFLOztjQUNWLFVBQVUsR0FBZSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUM3RCxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUNsQyxJQUFJLENBQUMsYUFBYSxDQUNuQjtJQUNILENBQUM7Ozs7O0lBRU0sVUFBVSxDQUFDLEtBQVk7UUFDNUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FDaEMsS0FBSyxDQUFDLFFBQVEsRUFDZCxLQUFLLENBQUMsTUFBTSxDQUNiLENBQUM7SUFDSixDQUFDOzs7WUEvRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2Qix3aUJBQTJDO2dCQUUzQyxTQUFTLEVBQUU7b0JBQ1Qsc0JBQXNCO29CQUN0QixpQkFBaUI7b0JBQ2pCLGtCQUFrQjtvQkFDbEIsUUFBUTtpQkFDVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUF0QkMsaUJBQWlCO1lBSVYsc0JBQXNCO1lBQ3RCLGlCQUFpQjtZQUVqQixrQkFBa0I7WUFMbEIsUUFBUTs7OzRCQXNCZCxTQUFTLFNBQUMsZUFBZTt1Q0FFekIsTUFBTTtzQkFFTixLQUFLOzs7O0lBSk4sMkNBQ2M7O0lBQ2Qsc0RBQ21GOztJQUNuRixxQ0FDdUI7Ozs7O0lBQ3ZCLDBDQUFtQzs7SUFDbkMsK0NBQXVCOzs7OztJQUdyQixnREFBNkM7Ozs7O0lBQzdDLG9EQUFzRDs7SUFDdEQsK0NBQTJDOztJQUMzQyxnREFBNkM7Ozs7O0lBQzdDLHNDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDYWxlbmRhck92ZXJsYXlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2FsZW5kYXItb3ZlcmxheS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmFuZ2VTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9yYW5nZS1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmFuZ2UsIE5neERycE9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbC9tb2RlbCc7XHJcbmltcG9ydCB7IENvbmZpZ1N0b3JlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbmZpZy1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1vbWVudCB9IGZyb20gJ21vbWVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1tYXQtZHJwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LW1hdC1kcnAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL25neC1tYXQtZHJwLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENhbGVuZGFyT3ZlcmxheVNlcnZpY2UsXHJcbiAgICBSYW5nZVN0b3JlU2VydmljZSxcclxuICAgIENvbmZpZ1N0b3JlU2VydmljZSxcclxuICAgIERhdGVQaXBlXHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TWF0RHJwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBWaWV3Q2hpbGQoJ2NhbGVuZGFySW5wdXQnKVxyXG4gIGNhbGVuZGFySW5wdXQ7XHJcbiAgQE91dHB1dCgpXHJcbiAgcmVhZG9ubHkgc2VsZWN0ZWREYXRlUmFuZ2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8UmFuZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcjxSYW5nZT4oKTtcclxuICBASW5wdXQoKVxyXG4gIG9wdGlvbnM6IE5neERycE9wdGlvbnM7XHJcbiAgcHJpdmF0ZSByYW5nZVVwZGF0ZSQ6IFN1YnNjcmlwdGlvbjtcclxuICBzZWxlY3RlZERhdGVSYW5nZSA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgY2FsZW5kYXJPdmVybGF5U2VydmljZTogQ2FsZW5kYXJPdmVybGF5U2VydmljZSxcclxuICAgIHB1YmxpYyByYW5nZVN0b3JlU2VydmljZTogUmFuZ2VTdG9yZVNlcnZpY2UsXHJcbiAgICBwdWJsaWMgY29uZmlnU3RvcmVTZXJ2aWNlOiBDb25maWdTdG9yZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmNvbmZpZ1N0b3JlU2VydmljZS5uZ3hEcnBPcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG4gICAgdGhpcy5vcHRpb25zLnBsYWNlaG9sZGVyID0gdGhpcy5vcHRpb25zLnBsYWNlaG9sZGVyIHx8ICdDaG9vc2UgYSBkYXRlJztcclxuICAgIHRoaXMucmFuZ2VVcGRhdGUkID0gdGhpcy5yYW5nZVN0b3JlU2VydmljZS5yYW5nZVVwZGF0ZSQuc3Vic2NyaWJlKHJhbmdlID0+IHtcclxuICAgICAgY29uc3QgZnJvbTogc3RyaW5nID0gdGhpcy5mb3JtYXRUb0RhdGVTdHJpbmcoXHJcbiAgICAgICAgcmFuZ2UuZnJvbURhdGUsXHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmZvcm1hdFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB0bzogc3RyaW5nID0gdGhpcy5mb3JtYXRUb0RhdGVTdHJpbmcoXHJcbiAgICAgICAgcmFuZ2UudG9EYXRlLFxyXG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JtYXRcclxuICAgICAgKTtcclxuICAgICAgaWYgKHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMuc2luZ2xlRGF0ZSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlUmFuZ2UgPSBgJHtmcm9tfWA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGVSYW5nZSA9IGAke2Zyb219IC0gJHt0b31gO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWREYXRlUmFuZ2VDaGFuZ2VkLmVtaXQocmFuZ2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5yYW5nZVN0b3JlU2VydmljZS51cGRhdGVSYW5nZShcclxuICAgICAgdGhpcy5vcHRpb25zLnJhbmdlLmZyb21EYXRlLFxyXG4gICAgICB0aGlzLm9wdGlvbnMucmFuZ2UudG9EYXRlXHJcbiAgICApO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5yYW5nZVVwZGF0ZSQpIHtcclxuICAgICAgdGhpcy5yYW5nZVVwZGF0ZSQudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0VG9EYXRlU3RyaW5nKGRhdGU6IE1vbWVudCwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKGRhdGUsIGZvcm1hdCk7XHJcbiAgfVxyXG5cclxuICBvcGVuQ2FsZW5kYXIoZXZlbnQpIHtcclxuICAgIGNvbnN0IG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYgPSB0aGlzLmNhbGVuZGFyT3ZlcmxheVNlcnZpY2Uub3BlbihcclxuICAgICAgdGhpcy5vcHRpb25zLmNhbGVuZGFyT3ZlcmxheUNvbmZpZyxcclxuICAgICAgdGhpcy5jYWxlbmRhcklucHV0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlc2V0RGF0ZXMocmFuZ2U6IFJhbmdlKSB7XHJcbiAgICB0aGlzLnJhbmdlU3RvcmVTZXJ2aWNlLnVwZGF0ZVJhbmdlKFxyXG4gICAgICByYW5nZS5mcm9tRGF0ZSxcclxuICAgICAgcmFuZ2UudG9EYXRlXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=