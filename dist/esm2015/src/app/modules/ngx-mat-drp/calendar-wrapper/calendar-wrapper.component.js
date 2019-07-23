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
        if (!!changes.selectedDate) {
            // Necessary to force view refresh.
            this.matCalendar.activeDate = changes.selectedDate.currentValue;
        }
        if (!!changes.fromDate) {
            // Force rendering.
            this.renderMatCalendarView();
        }
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
    /**
     * @return {?}
     */
    dateClass() {
        return (date) => {
            if (!this.fromDate) {
                return;
            }
            if (this.fromDate <= date) {
                return;
            }
            // console.log('stv date', date);
            // selectedDate is before fromDate
            return 'before-from-date';
        };
    }
    // force rendering
    /**
     * @private
     * @return {?}
     */
    renderMatCalendarView() {
        // Store initial value.
        /** @type {?} */
        const minDate = this.minDate;
        // Change to any date, only to force rendering.
        this.minDate = new Date('2001-01-01');
        // Wait to change-detection function has terminated to execute a new change to force rendering the rows and cells.
        setTimeout(() => {
            this.minDate = minDate; // Restore initial value.
        }, 0);
    }
}
CalendarWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'calendar-wrapper',
                template: "<div>\r\n\r\n  <!-- <mat-divider></mat-divider> -->\r\n  <span class=\"ngx-mat-drp-date-label\">\r\n    <label>{{prefixLabel}}</label>\r\n    <label class=\"ngx-mat-drp-selected-date-label\">{{selectedDate | date:dateFormat}}</label>\r\n  </span>\r\n  <!-- <mat-divider></mat-divider> -->\r\n\r\n  <mat-calendar \r\n    [startAt]=\"selectedDate\"\r\n    [selected]=\"selectedDate\"\r\n    [minDate]=\"minDate\"\r\n    [maxDate]=\"maxDate\"\r\n    [dateClass]=\"dateClass()\"\r\n    (selectedChange)=\"onSelectedChange($event)\"\r\n    (yearSelected)=\"onYearSelected($event)\"\r\n    (_userSelection)=\"onUserSelection($event)\"\r\n    [dateFilter]=\"weekendFilter\">\r\n  </mat-calendar>\r\n\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-mat-drp-date-label{background:#fafafa;margin:15px;padding:4px 2px;width:100%;font-size:14px;font-weight:500}.ngx-mat-drp-selected-date-label{color:rgba(0,0,0,.38);padding-left:5%}:host ::ng-deep.before-from-date .mat-calendar-body-selected{background-color:red}"]
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
    maxDate: [{ type: Input }],
    fromDate: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0LWRhdGVyYW5nZS1waWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbmd4LW1hdC1kcnAvY2FsZW5kYXItd3JhcHBlci9jYWxlbmRhci13cmFwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFDTCxZQUFZLEVBQ1osdUJBQXVCLEVBR3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQTZCLE1BQU0sOEJBQThCLENBQUM7QUFDdEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFRdEUsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQW1CbkMsWUFBb0IsV0FBK0I7UUFBL0IsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBZDFDLHVCQUFrQixHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBWTNFLGtCQUFhLEdBQUcsQ0FBQyxDQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQztRQUdoQyxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ25ELElBQUksV0FBVyxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUU7WUFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQU8sRUFBVyxFQUFFOztzQkFDbEMsR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3RCLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRTtZQUMxQixtQ0FBbUM7WUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUM7U0FDakU7UUFFRCxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3RCLG1CQUFtQjtZQUNuQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUM5QjtJQUNILENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsSUFBSTtRQUNuQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLENBQUMsSUFBRyxDQUFDOzs7OztJQUVwQixlQUFlLENBQUMsQ0FBQyxJQUFHLENBQUM7Ozs7SUFFckIsU0FBUztRQUNQLE9BQU8sQ0FBQyxJQUFVLEVBQTZCLEVBQUU7WUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQUUsT0FBTzthQUFFO1lBQy9CLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7Z0JBQUUsT0FBTzthQUFFO1lBQ3RDLGlDQUFpQztZQUNqQyxrQ0FBa0M7WUFDbEMsT0FBTyxrQkFBa0IsQ0FBQztRQUM1QixDQUFDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFHTyxxQkFBcUI7OztjQUVyQixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFFNUIsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFdEMsa0hBQWtIO1FBQ2xILFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLHlCQUF5QjtRQUNuRCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDOzs7WUE3RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLDBzQkFBZ0Q7Z0JBRWhELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztZQVBRLGtCQUFrQjs7OzBCQVN4QixTQUFTLFNBQUMsV0FBVztpQ0FHckIsTUFBTTsyQkFJTixLQUFLOzBCQUNMLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUtMLEtBQUs7Ozs7SUFmTiwrQ0FDK0I7O0lBRS9CLHNEQUMyRTs7SUFFM0UsOENBQW1COztJQUNuQixnREFBNEI7O0lBQzVCLCtDQUE2Qjs7SUFDN0IsMkNBQXVCOztJQUN2QiwyQ0FBdUI7Ozs7O0lBS3ZCLDRDQUF3Qjs7SUFDeEIsaURBQWtDOzs7OztJQUV0QiwrQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgT3V0cHV0LFxyXG4gIElucHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRDYWxlbmRhciwgTWF0Q2FsZW5kYXJDZWxsQ3NzQ2xhc3NlcyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xyXG5pbXBvcnQgeyBDb25maWdTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb25maWctc3RvcmUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NhbGVuZGFyLXdyYXBwZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jYWxlbmRhci13cmFwcGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jYWxlbmRhci13cmFwcGVyLmNvbXBvbmVudC5jc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJXcmFwcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBAVmlld0NoaWxkKE1hdENhbGVuZGFyKVxyXG4gIG1hdENhbGVuZGFyOiBNYXRDYWxlbmRhcjxEYXRlPjtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcmVhZG9ubHkgc2VsZWN0ZWREYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XHJcblxyXG4gIGRhdGVGb3JtYXQ6IHN0cmluZztcclxuICBASW5wdXQoKSBzZWxlY3RlZERhdGU6IERhdGU7XHJcbiAgQElucHV0KCkgcHJlZml4TGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKSBtaW5EYXRlOiBEYXRlO1xyXG4gIEBJbnB1dCgpIG1heERhdGU6IERhdGU7XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIHNlbGVjdGVkRGF0ZSBpcyBiZWZvcmUgZnJvbURhdGUsIG1hcmsgdGhlIHNlbGVjdGVkRGF0ZSBkYXRlIGluIHJlZC5cclxuICAgKi9cclxuICBASW5wdXQoKSBmcm9tRGF0ZTogRGF0ZTtcclxuICB3ZWVrZW5kRmlsdGVyID0gKGQ6IERhdGUpID0+IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlU2VydmljZSkge1xyXG4gICAgdGhpcy5kYXRlRm9ybWF0ID0gY29uZmlnU3RvcmUubmd4RHJwT3B0aW9ucy5mb3JtYXQ7XHJcbiAgICBpZiAoY29uZmlnU3RvcmUubmd4RHJwT3B0aW9ucy5leGNsdWRlV2Vla2VuZHMpIHtcclxuICAgICAgdGhpcy53ZWVrZW5kRmlsdGVyID0gKGQ6IERhdGUpOiBib29sZWFuID0+IHtcclxuICAgICAgICBjb25zdCBkYXkgPSBkLmdldERheSgpO1xyXG4gICAgICAgIHJldHVybiBkYXkgIT09IDAgJiYgZGF5ICE9PSA2O1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKCEhY2hhbmdlcy5zZWxlY3RlZERhdGUpIHtcclxuICAgICAgLy8gTmVjZXNzYXJ5IHRvIGZvcmNlIHZpZXcgcmVmcmVzaC5cclxuICAgICAgdGhpcy5tYXRDYWxlbmRhci5hY3RpdmVEYXRlID0gY2hhbmdlcy5zZWxlY3RlZERhdGUuY3VycmVudFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghIWNoYW5nZXMuZnJvbURhdGUpIHtcclxuICAgICAgLy8gRm9yY2UgcmVuZGVyaW5nLlxyXG4gICAgICB0aGlzLnJlbmRlck1hdENhbGVuZGFyVmlldygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RlZENoYW5nZShkYXRlKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZUNoYW5nZS5lbWl0KGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgb25ZZWFyU2VsZWN0ZWQoZSkge31cclxuXHJcbiAgb25Vc2VyU2VsZWN0aW9uKGUpIHt9XHJcblxyXG4gIGRhdGVDbGFzcygpIHtcclxuICAgIHJldHVybiAoZGF0ZTogRGF0ZSk6IE1hdENhbGVuZGFyQ2VsbENzc0NsYXNzZXMgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuZnJvbURhdGUpIHsgcmV0dXJuOyB9XHJcbiAgICAgIGlmICh0aGlzLmZyb21EYXRlIDw9IGRhdGUpIHsgcmV0dXJuOyB9XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdHYgZGF0ZScsIGRhdGUpO1xyXG4gICAgICAvLyBzZWxlY3RlZERhdGUgaXMgYmVmb3JlIGZyb21EYXRlXHJcbiAgICAgIHJldHVybiAnYmVmb3JlLWZyb20tZGF0ZSc7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gZm9yY2UgcmVuZGVyaW5nXHJcbiAgcHJpdmF0ZSByZW5kZXJNYXRDYWxlbmRhclZpZXcoKSB7XHJcbiAgICAvLyBTdG9yZSBpbml0aWFsIHZhbHVlLlxyXG4gICAgY29uc3QgbWluRGF0ZSA9IHRoaXMubWluRGF0ZTtcclxuXHJcbiAgICAvLyBDaGFuZ2UgdG8gYW55IGRhdGUsIG9ubHkgdG8gZm9yY2UgcmVuZGVyaW5nLlxyXG4gICAgdGhpcy5taW5EYXRlID0gbmV3IERhdGUoJzIwMDEtMDEtMDEnKTtcclxuXHJcbiAgICAvLyBXYWl0IHRvIGNoYW5nZS1kZXRlY3Rpb24gZnVuY3Rpb24gaGFzIHRlcm1pbmF0ZWQgdG8gZXhlY3V0ZSBhIG5ldyBjaGFuZ2UgdG8gZm9yY2UgcmVuZGVyaW5nIHRoZSByb3dzIGFuZCBjZWxscy5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLm1pbkRhdGUgPSBtaW5EYXRlOyAvLyBSZXN0b3JlIGluaXRpYWwgdmFsdWUuXHJcbiAgICB9LCAwKTtcclxuICB9XHJcbn1cclxuIl19