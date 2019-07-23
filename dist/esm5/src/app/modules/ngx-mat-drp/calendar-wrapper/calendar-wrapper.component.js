/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { ConfigStoreService } from '../services/config-store.service';
var CalendarWrapperComponent = /** @class */ (function () {
    function CalendarWrapperComponent(configStore) {
        this.configStore = configStore;
        this.selectedDateChange = new EventEmitter();
        this.weekendFilter = function (d) { return true; };
        this.dateFormat = configStore.ngxDrpOptions.format;
        if (configStore.ngxDrpOptions.excludeWeekends) {
            this.weekendFilter = function (d) {
                /** @type {?} */
                var day = d.getDay();
                return day !== 0 && day !== 6;
            };
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarWrapperComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!!changes.selectedDate) {
            // Necessary to force view refresh.
            this.matCalendar.activeDate = changes.selectedDate.currentValue;
        }
        if (!!changes.fromDate) {
            // Force rendering.
            this.renderMatCalendarView();
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarWrapperComponent.prototype.onSelectedChange = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.selectedDateChange.emit(date);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CalendarWrapperComponent.prototype.onYearSelected = /**
     * @param {?} e
     * @return {?}
     */
    function (e) { };
    /**
     * @param {?} e
     * @return {?}
     */
    CalendarWrapperComponent.prototype.onUserSelection = /**
     * @param {?} e
     * @return {?}
     */
    function (e) { };
    /**
     * @return {?}
     */
    CalendarWrapperComponent.prototype.dateClass = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return function (date) {
            if (!_this.fromDate) {
                return;
            }
            if (_this.fromDate <= date) {
                return;
            }
            // console.log('stv date', date);
            // selectedDate is before fromDate
            return 'before-from-date';
        };
    };
    // force rendering
    // force rendering
    /**
     * @private
     * @return {?}
     */
    CalendarWrapperComponent.prototype.renderMatCalendarView = 
    // force rendering
    /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // Store initial value.
        /** @type {?} */
        var minDate = this.minDate;
        // Change to any date, only to force rendering.
        this.minDate = new Date('2001-01-01');
        // Wait to change-detection function has terminated to execute a new change to force rendering the rows and cells.
        setTimeout(function () {
            _this.minDate = minDate; // Restore initial value.
        }, 0);
    };
    CalendarWrapperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'calendar-wrapper',
                    template: "<div>\r\n\r\n  <!-- <mat-divider></mat-divider> -->\r\n  <span class=\"ngx-mat-drp-date-label\">\r\n    <label>{{prefixLabel}}</label>\r\n    <label class=\"ngx-mat-drp-selected-date-label\">{{selectedDate | date:dateFormat}}</label>\r\n  </span>\r\n  <!-- <mat-divider></mat-divider> -->\r\n\r\n  <mat-calendar \r\n    [startAt]=\"selectedDate\"\r\n    [selected]=\"selectedDate\"\r\n    [minDate]=\"minDate\"\r\n    [maxDate]=\"maxDate\"\r\n    [dateClass]=\"dateClass()\"\r\n    (selectedChange)=\"onSelectedChange($event)\"\r\n    (yearSelected)=\"onYearSelected($event)\"\r\n    (_userSelection)=\"onUserSelection($event)\"\r\n    [dateFilter]=\"weekendFilter\">\r\n  </mat-calendar>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".ngx-mat-drp-date-label{background:#fafafa;margin:15px;padding:4px 2px;width:100%;font-size:14px;font-weight:500}.ngx-mat-drp-selected-date-label{color:rgba(0,0,0,.38);padding-left:5%}:host ::ng-deep.before-from-date .mat-calendar-body-selected{background-color:red}"]
                }] }
    ];
    /** @nocollapse */
    CalendarWrapperComponent.ctorParameters = function () { return [
        { type: ConfigStoreService }
    ]; };
    CalendarWrapperComponent.propDecorators = {
        matCalendar: [{ type: ViewChild, args: [MatCalendar,] }],
        selectedDateChange: [{ type: Output }],
        selectedDate: [{ type: Input }],
        prefixLabel: [{ type: Input }],
        minDate: [{ type: Input }],
        maxDate: [{ type: Input }],
        fromDate: [{ type: Input }]
    };
    return CalendarWrapperComponent;
}());
export { CalendarWrapperComponent };
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
    /**
     * If selectedDate is before fromDate, mark the selectedDate date in red.
     * @type {?}
     */
    CalendarWrapperComponent.prototype.fromDate;
    /** @type {?} */
    CalendarWrapperComponent.prototype.weekendFilter;
    /**
     * @type {?}
     * @private
     */
    CalendarWrapperComponent.prototype.configStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0LWRhdGVyYW5nZS1waWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbmd4LW1hdC1kcnAvY2FsZW5kYXItd3JhcHBlci9jYWxlbmRhci13cmFwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFDTCxZQUFZLEVBQ1osdUJBQXVCLEVBR3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQTZCLE1BQU0sOEJBQThCLENBQUM7QUFDdEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFdEU7SUF5QkUsa0NBQW9CLFdBQStCO1FBQS9CLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQWQxQyx1QkFBa0IsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQVkzRSxrQkFBYSxHQUFHLFVBQUMsQ0FBTyxJQUFLLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQztRQUdoQyxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ25ELElBQUksV0FBVyxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUU7WUFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFDLENBQU87O29CQUNyQixHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDdEIsT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7OztJQUVELDhDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQzFCLG1DQUFtQztZQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQztTQUNqRTtRQUVELElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDdEIsbUJBQW1CO1lBQ25CLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxtREFBZ0I7Ozs7SUFBaEIsVUFBaUIsSUFBSTtRQUNuQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsaURBQWM7Ozs7SUFBZCxVQUFlLENBQUMsSUFBRyxDQUFDOzs7OztJQUVwQixrREFBZTs7OztJQUFmLFVBQWdCLENBQUMsSUFBRyxDQUFDOzs7O0lBRXJCLDRDQUFTOzs7SUFBVDtRQUFBLGlCQVFDO1FBUEMsT0FBTyxVQUFDLElBQVU7WUFDaEIsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQUUsT0FBTzthQUFFO1lBQy9CLElBQUksS0FBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7Z0JBQUUsT0FBTzthQUFFO1lBQ3RDLGlDQUFpQztZQUNqQyxrQ0FBa0M7WUFDbEMsT0FBTyxrQkFBa0IsQ0FBQztRQUM1QixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsa0JBQWtCOzs7Ozs7SUFDVix3REFBcUI7Ozs7OztJQUE3QjtRQUFBLGlCQVdDOzs7WUFUTyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFFNUIsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFdEMsa0hBQWtIO1FBQ2xILFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMseUJBQXlCO1FBQ25ELENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7O2dCQTdFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsMHNCQUFnRDtvQkFFaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFQUSxrQkFBa0I7Ozs4QkFTeEIsU0FBUyxTQUFDLFdBQVc7cUNBR3JCLE1BQU07K0JBSU4sS0FBSzs4QkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFLTCxLQUFLOztJQXdEUiwrQkFBQztDQUFBLEFBOUVELElBOEVDO1NBeEVZLHdCQUF3Qjs7O0lBQ25DLCtDQUMrQjs7SUFFL0Isc0RBQzJFOztJQUUzRSw4Q0FBbUI7O0lBQ25CLGdEQUE0Qjs7SUFDNUIsK0NBQTZCOztJQUM3QiwyQ0FBdUI7O0lBQ3ZCLDJDQUF1Qjs7Ozs7SUFLdkIsNENBQXdCOztJQUN4QixpREFBa0M7Ozs7O0lBRXRCLCtDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIFZpZXdDaGlsZCxcclxuICBPdXRwdXQsXHJcbiAgSW5wdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdENhbGVuZGFyLCBNYXRDYWxlbmRhckNlbGxDc3NDbGFzc2VzIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XHJcbmltcG9ydCB7IENvbmZpZ1N0b3JlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbmZpZy1zdG9yZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2FsZW5kYXItd3JhcHBlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbGVuZGFyLXdyYXBwZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NhbGVuZGFyLXdyYXBwZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYWxlbmRhcldyYXBwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBWaWV3Q2hpbGQoTWF0Q2FsZW5kYXIpXHJcbiAgbWF0Q2FsZW5kYXI6IE1hdENhbGVuZGFyPERhdGU+O1xyXG5cclxuICBAT3V0cHV0KClcclxuICByZWFkb25seSBzZWxlY3RlZERhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcclxuXHJcbiAgZGF0ZUZvcm1hdDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkRGF0ZTogRGF0ZTtcclxuICBASW5wdXQoKSBwcmVmaXhMYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGU7XHJcbiAgQElucHV0KCkgbWF4RGF0ZTogRGF0ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogSWYgc2VsZWN0ZWREYXRlIGlzIGJlZm9yZSBmcm9tRGF0ZSwgbWFyayB0aGUgc2VsZWN0ZWREYXRlIGRhdGUgaW4gcmVkLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGZyb21EYXRlOiBEYXRlO1xyXG4gIHdlZWtlbmRGaWx0ZXIgPSAoZDogRGF0ZSkgPT4gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmVTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmRhdGVGb3JtYXQgPSBjb25maWdTdG9yZS5uZ3hEcnBPcHRpb25zLmZvcm1hdDtcclxuICAgIGlmIChjb25maWdTdG9yZS5uZ3hEcnBPcHRpb25zLmV4Y2x1ZGVXZWVrZW5kcykge1xyXG4gICAgICB0aGlzLndlZWtlbmRGaWx0ZXIgPSAoZDogRGF0ZSk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIGNvbnN0IGRheSA9IGQuZ2V0RGF5KCk7XHJcbiAgICAgICAgcmV0dXJuIGRheSAhPT0gMCAmJiBkYXkgIT09IDY7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoISFjaGFuZ2VzLnNlbGVjdGVkRGF0ZSkge1xyXG4gICAgICAvLyBOZWNlc3NhcnkgdG8gZm9yY2UgdmlldyByZWZyZXNoLlxyXG4gICAgICB0aGlzLm1hdENhbGVuZGFyLmFjdGl2ZURhdGUgPSBjaGFuZ2VzLnNlbGVjdGVkRGF0ZS5jdXJyZW50VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCEhY2hhbmdlcy5mcm9tRGF0ZSkge1xyXG4gICAgICAvLyBGb3JjZSByZW5kZXJpbmcuXHJcbiAgICAgIHRoaXMucmVuZGVyTWF0Q2FsZW5kYXJWaWV3KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdGVkQ2hhbmdlKGRhdGUpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWREYXRlQ2hhbmdlLmVtaXQoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBvblllYXJTZWxlY3RlZChlKSB7fVxyXG5cclxuICBvblVzZXJTZWxlY3Rpb24oZSkge31cclxuXHJcbiAgZGF0ZUNsYXNzKCkge1xyXG4gICAgcmV0dXJuIChkYXRlOiBEYXRlKTogTWF0Q2FsZW5kYXJDZWxsQ3NzQ2xhc3NlcyA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5mcm9tRGF0ZSkgeyByZXR1cm47IH1cclxuICAgICAgaWYgKHRoaXMuZnJvbURhdGUgPD0gZGF0ZSkgeyByZXR1cm47IH1cclxuICAgICAgLy8gY29uc29sZS5sb2coJ3N0diBkYXRlJywgZGF0ZSk7XHJcbiAgICAgIC8vIHNlbGVjdGVkRGF0ZSBpcyBiZWZvcmUgZnJvbURhdGVcclxuICAgICAgcmV0dXJuICdiZWZvcmUtZnJvbS1kYXRlJztcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyBmb3JjZSByZW5kZXJpbmdcclxuICBwcml2YXRlIHJlbmRlck1hdENhbGVuZGFyVmlldygpIHtcclxuICAgIC8vIFN0b3JlIGluaXRpYWwgdmFsdWUuXHJcbiAgICBjb25zdCBtaW5EYXRlID0gdGhpcy5taW5EYXRlO1xyXG5cclxuICAgIC8vIENoYW5nZSB0byBhbnkgZGF0ZSwgb25seSB0byBmb3JjZSByZW5kZXJpbmcuXHJcbiAgICB0aGlzLm1pbkRhdGUgPSBuZXcgRGF0ZSgnMjAwMS0wMS0wMScpO1xyXG5cclxuICAgIC8vIFdhaXQgdG8gY2hhbmdlLWRldGVjdGlvbiBmdW5jdGlvbiBoYXMgdGVybWluYXRlZCB0byBleGVjdXRlIGEgbmV3IGNoYW5nZSB0byBmb3JjZSByZW5kZXJpbmcgdGhlIHJvd3MgYW5kIGNlbGxzLlxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMubWluRGF0ZSA9IG1pbkRhdGU7IC8vIFJlc3RvcmUgaW5pdGlhbCB2YWx1ZS5cclxuICAgIH0sIDApO1xyXG4gIH1cclxufVxyXG4iXX0=