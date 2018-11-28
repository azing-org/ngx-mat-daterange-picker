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
        // Necessary to force view refresh
        this.matCalendar.activeDate = changes.selectedDate.currentValue;
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
    CalendarWrapperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'calendar-wrapper',
                    template: "<div>\r\n\r\n  <!-- <mat-divider></mat-divider> -->\r\n  <span class=\"ngx-mat-drp-date-label\">\r\n    <label>{{prefixLabel}}</label>\r\n    <label class=\"ngx-mat-drp-selected-date-label\">{{selectedDate | date:dateFormat}}</label>\r\n  </span>\r\n  <!-- <mat-divider></mat-divider> -->\r\n\r\n  <mat-calendar \r\n    [startAt]=\"selectedDate\"\r\n    [selected]=\"selectedDate\"\r\n    [minDate]=\"minDate\"\r\n    [maxDate]=\"maxDate\"\r\n    (selectedChange)=\"onSelectedChange($event)\"\r\n    (yearSelected)=\"onYearSelected($event)\"\r\n    (_userSelection)=\"onUserSelection($event)\"\r\n    [dateFilter]=\"weekendFilter\">\r\n  </mat-calendar>\r\n\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".ngx-mat-drp-date-label{background:#fafafa;margin:15px;padding:4px 2px;width:100%;font-size:14px;font-weight:500}.ngx-mat-drp-selected-date-label{color:rgba(0,0,0,.38);padding-left:5%}"]
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
        maxDate: [{ type: Input }]
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
    /** @type {?} */
    CalendarWrapperComponent.prototype.weekendFilter;
    /**
     * @type {?}
     * @private
     */
    CalendarWrapperComponent.prototype.configStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0LWRhdGVyYW5nZS1waWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbmd4LW1hdC1kcnAvY2FsZW5kYXItd3JhcHBlci9jYWxlbmRhci13cmFwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFDTCxZQUFZLEVBQ1osdUJBQXVCLEVBR3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUV0RTtJQW9CRSxrQ0FBb0IsV0FBK0I7UUFBL0IsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBVDFDLHVCQUFrQixHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBTzNFLGtCQUFhLEdBQUcsVUFBQyxDQUFPLElBQUssT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDO1FBR2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDbkQsSUFBSSxXQUFXLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRTtZQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQUMsQ0FBTzs7b0JBQ3JCLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUN0QixPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUM7U0FDSDtJQUNILENBQUM7Ozs7O0lBRUQsOENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQztJQUNsRSxDQUFDOzs7OztJQUVELG1EQUFnQjs7OztJQUFoQixVQUFpQixJQUFJO1FBQ25CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCxpREFBYzs7OztJQUFkLFVBQWUsQ0FBQyxJQUFHLENBQUM7Ozs7O0lBRXBCLGtEQUFlOzs7O0lBQWYsVUFBZ0IsQ0FBQyxJQUFHLENBQUM7O2dCQXpDdEIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLHVxQkFBZ0Q7b0JBRWhELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7Z0JBUFEsa0JBQWtCOzs7OEJBU3hCLFNBQVMsU0FBQyxXQUFXO3FDQUdyQixNQUFNOytCQUlOLEtBQUs7OEJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7O0lBeUJSLCtCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0FwQ1ksd0JBQXdCOzs7SUFDbkMsK0NBQytCOztJQUUvQixzREFDMkU7O0lBRTNFLDhDQUFtQjs7SUFDbkIsZ0RBQTRCOztJQUM1QiwrQ0FBNkI7O0lBQzdCLDJDQUF1Qjs7SUFDdkIsMkNBQXVCOztJQUN2QixpREFBa0M7Ozs7O0lBRXRCLCtDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIFZpZXdDaGlsZCxcclxuICBPdXRwdXQsXHJcbiAgSW5wdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdENhbGVuZGFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XHJcbmltcG9ydCB7IENvbmZpZ1N0b3JlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbmZpZy1zdG9yZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2FsZW5kYXItd3JhcHBlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbGVuZGFyLXdyYXBwZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NhbGVuZGFyLXdyYXBwZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYWxlbmRhcldyYXBwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBWaWV3Q2hpbGQoTWF0Q2FsZW5kYXIpXHJcbiAgbWF0Q2FsZW5kYXI6IE1hdENhbGVuZGFyPERhdGU+O1xyXG5cclxuICBAT3V0cHV0KClcclxuICByZWFkb25seSBzZWxlY3RlZERhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcclxuXHJcbiAgZGF0ZUZvcm1hdDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkRGF0ZTogRGF0ZTtcclxuICBASW5wdXQoKSBwcmVmaXhMYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGU7XHJcbiAgQElucHV0KCkgbWF4RGF0ZTogRGF0ZTtcclxuICB3ZWVrZW5kRmlsdGVyID0gKGQ6IERhdGUpID0+IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlU2VydmljZSkge1xyXG4gICAgdGhpcy5kYXRlRm9ybWF0ID0gY29uZmlnU3RvcmUubmd4RHJwT3B0aW9ucy5mb3JtYXQ7XHJcbiAgICBpZiAoY29uZmlnU3RvcmUubmd4RHJwT3B0aW9ucy5leGNsdWRlV2Vla2VuZHMpIHtcclxuICAgICAgdGhpcy53ZWVrZW5kRmlsdGVyID0gKGQ6IERhdGUpOiBib29sZWFuID0+IHtcclxuICAgICAgICBjb25zdCBkYXkgPSBkLmdldERheSgpO1xyXG4gICAgICAgIHJldHVybiBkYXkgIT09IDAgJiYgZGF5ICE9PSA2O1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgLy8gTmVjZXNzYXJ5IHRvIGZvcmNlIHZpZXcgcmVmcmVzaFxyXG4gICAgdGhpcy5tYXRDYWxlbmRhci5hY3RpdmVEYXRlID0gY2hhbmdlcy5zZWxlY3RlZERhdGUuY3VycmVudFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RlZENoYW5nZShkYXRlKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZUNoYW5nZS5lbWl0KGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgb25ZZWFyU2VsZWN0ZWQoZSkge31cclxuXHJcbiAgb25Vc2VyU2VsZWN0aW9uKGUpIHt9XHJcbn1cclxuIl19