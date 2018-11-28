/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { ConfigStoreService } from '../services/config-store.service';
export class CalendarWrapperComponent {
    /**
     * @param {?} configStore
     */
    constructor(configStore) {
        this.configStore = configStore;
        this.selectedDateChange = new EventEmitter();
        this.weekendFilter = (d) => true;
        this.dateFormat = configStore.ngxDrpOptions.format;
        if (configStore.ngxDrpOptions.excludeWeekends) {
            this.weekendFilter = (d) => {
                /** @type {?} */
                const day = d.getDay();
                return day !== 0 && day !== 6;
            };
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // Necessary to force view refresh
        this.matCalendar.activeDate = changes.selectedDate.currentValue;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onSelectedChange(date) {
        this.selectedDateChange.emit(date);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onYearSelected(e) { }
    /**
     * @param {?} e
     * @return {?}
     */
    onUserSelection(e) { }
}
CalendarWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'calendar-wrapper',
                template: "<div>\r\n\r\n  <!-- <mat-divider></mat-divider> -->\r\n  <span class=\"ngx-mat-drp-date-label\">\r\n    <label>{{prefixLabel}}</label>\r\n    <label class=\"ngx-mat-drp-selected-date-label\">{{selectedDate | date:dateFormat}}</label>\r\n  </span>\r\n  <!-- <mat-divider></mat-divider> -->\r\n\r\n  <mat-calendar \r\n    [startAt]=\"selectedDate\"\r\n    [selected]=\"selectedDate\"\r\n    [minDate]=\"minDate\"\r\n    [maxDate]=\"maxDate\"\r\n    (selectedChange)=\"onSelectedChange($event)\"\r\n    (yearSelected)=\"onYearSelected($event)\"\r\n    (_userSelection)=\"onUserSelection($event)\"\r\n    [dateFilter]=\"weekendFilter\">\r\n  </mat-calendar>\r\n\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-mat-drp-date-label{background:#fafafa;margin:15px;padding:4px 2px;width:100%;font-size:14px;font-weight:500}.ngx-mat-drp-selected-date-label{color:rgba(0,0,0,.38);padding-left:5%}"]
            }] }
];
/** @nocollapse */
CalendarWrapperComponent.ctorParameters = () => [
    { type: ConfigStoreService }
];
CalendarWrapperComponent.propDecorators = {
    matCalendar: [{ type: ViewChild, args: [MatCalendar,] }],
    selectedDateChange: [{ type: Output }],
    selectedDate: [{ type: Input }],
    prefixLabel: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CalendarWrapperComponent.prototype.matCalendar;
    /** @type {?} */
    CalendarWrapperComponent.prototype.selectedDateChange;
    /** @type {?} */
    CalendarWrapperComponent.prototype.dateFormat;
    /** @type {?} */
    CalendarWrapperComponent.prototype.selectedDate;
    /** @type {?} */
    CalendarWrapperComponent.prototype.prefixLabel;
    /** @type {?} */
    CalendarWrapperComponent.prototype.minDate;
    /** @type {?} */
    CalendarWrapperComponent.prototype.maxDate;
    /** @type {?} */
    CalendarWrapperComponent.prototype.weekendFilter;
    /**
     * @type {?}
     * @private
     */
    CalendarWrapperComponent.prototype.configStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0LWRhdGVyYW5nZS1waWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbmd4LW1hdC1kcnAvY2FsZW5kYXItd3JhcHBlci9jYWxlbmRhci13cmFwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFDTCxZQUFZLEVBQ1osdUJBQXVCLEVBR3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQVF0RSxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBY25DLFlBQW9CLFdBQStCO1FBQS9CLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQVQxQyx1QkFBa0IsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQU8zRSxrQkFBYSxHQUFHLENBQUMsQ0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFHaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUNuRCxJQUFJLFdBQVcsQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFO1lBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFPLEVBQVcsRUFBRTs7c0JBQ2xDLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUN0QixPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUM7U0FDSDtJQUNILENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQztJQUNsRSxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLElBQUk7UUFDbkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxDQUFDLElBQUcsQ0FBQzs7Ozs7SUFFcEIsZUFBZSxDQUFDLENBQUMsSUFBRyxDQUFDOzs7WUF6Q3RCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qix1cUJBQWdEO2dCQUVoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUFQUSxrQkFBa0I7OzswQkFTeEIsU0FBUyxTQUFDLFdBQVc7aUNBR3JCLE1BQU07MkJBSU4sS0FBSzswQkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSzs7OztJQVZOLCtDQUMrQjs7SUFFL0Isc0RBQzJFOztJQUUzRSw4Q0FBbUI7O0lBQ25CLGdEQUE0Qjs7SUFDNUIsK0NBQTZCOztJQUM3QiwyQ0FBdUI7O0lBQ3ZCLDJDQUF1Qjs7SUFDdkIsaURBQWtDOzs7OztJQUV0QiwrQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgT3V0cHV0LFxyXG4gIElucHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRDYWxlbmRhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xyXG5pbXBvcnQgeyBDb25maWdTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb25maWctc3RvcmUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NhbGVuZGFyLXdyYXBwZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jYWxlbmRhci13cmFwcGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jYWxlbmRhci13cmFwcGVyLmNvbXBvbmVudC5jc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJXcmFwcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBAVmlld0NoaWxkKE1hdENhbGVuZGFyKVxyXG4gIG1hdENhbGVuZGFyOiBNYXRDYWxlbmRhcjxEYXRlPjtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcmVhZG9ubHkgc2VsZWN0ZWREYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XHJcblxyXG4gIGRhdGVGb3JtYXQ6IHN0cmluZztcclxuICBASW5wdXQoKSBzZWxlY3RlZERhdGU6IERhdGU7XHJcbiAgQElucHV0KCkgcHJlZml4TGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKSBtaW5EYXRlOiBEYXRlO1xyXG4gIEBJbnB1dCgpIG1heERhdGU6IERhdGU7XHJcbiAgd2Vla2VuZEZpbHRlciA9IChkOiBEYXRlKSA9PiB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuZGF0ZUZvcm1hdCA9IGNvbmZpZ1N0b3JlLm5neERycE9wdGlvbnMuZm9ybWF0O1xyXG4gICAgaWYgKGNvbmZpZ1N0b3JlLm5neERycE9wdGlvbnMuZXhjbHVkZVdlZWtlbmRzKSB7XHJcbiAgICAgIHRoaXMud2Vla2VuZEZpbHRlciA9IChkOiBEYXRlKTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF5ID0gZC5nZXREYXkoKTtcclxuICAgICAgICByZXR1cm4gZGF5ICE9PSAwICYmIGRheSAhPT0gNjtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIC8vIE5lY2Vzc2FyeSB0byBmb3JjZSB2aWV3IHJlZnJlc2hcclxuICAgIHRoaXMubWF0Q2FsZW5kYXIuYWN0aXZlRGF0ZSA9IGNoYW5nZXMuc2VsZWN0ZWREYXRlLmN1cnJlbnRWYWx1ZTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0ZWRDaGFuZ2UoZGF0ZSkge1xyXG4gICAgdGhpcy5zZWxlY3RlZERhdGVDaGFuZ2UuZW1pdChkYXRlKTtcclxuICB9XHJcblxyXG4gIG9uWWVhclNlbGVjdGVkKGUpIHt9XHJcblxyXG4gIG9uVXNlclNlbGVjdGlvbihlKSB7fVxyXG59XHJcbiJdfQ==