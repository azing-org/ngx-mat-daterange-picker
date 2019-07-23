/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { RangeStoreService } from '../services/range-store.service';
import { OverlayRef } from '@angular/cdk/overlay';
import { ConfigStoreService } from '../services/config-store.service';
import { pickerOverlayAnimations } from './picker-overlay.animations';
export class PickerOverlayComponent {
    /**
     * @param {?} rangeStoreService
     * @param {?} configStoreService
     * @param {?} overlayRef
     */
    constructor(rangeStoreService, configStoreService, overlayRef) {
        this.rangeStoreService = rangeStoreService;
        this.configStoreService = configStoreService;
        this.overlayRef = overlayRef;
        this.presets = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.fromDate = this.rangeStoreService.fromDate;
        this.toDate = this.rangeStoreService.toDate;
        this.startDatePrefix = this.configStoreService.ngxDrpOptions.startDatePrefix || 'FROM:';
        this.endDatePrefix = this.configStoreService.ngxDrpOptions.endDatePrefix || 'TO:';
        this.applyLabel = this.configStoreService.ngxDrpOptions.applyLabel || 'Apply';
        this.cancelLabel = this.configStoreService.ngxDrpOptions.cancelLabel || 'Cancel';
        this.presets = this.configStoreService.ngxDrpOptions.presets;
        this.shouldAnimate = this.configStoreService.ngxDrpOptions.animation
            ? 'enter'
            : 'noop';
        ({
            fromDate: this.fromMinDate,
            toDate: this.fromMaxDate
        } = this.configStoreService.ngxDrpOptions.fromMinMax);
        ({
            fromDate: this.toMinDate,
            toDate: this.toMaxDate
        } = this.configStoreService.ngxDrpOptions.toMinMax);
        this.setSingleDate(this.configStoreService.ngxDrpOptions.singleDate);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    updateFromDate(date) {
        this.fromDate = date;
        // In single-date mode, on click a date in the calendar, the picker closes.
        if (this.singleDate) {
            this.applyNewDates(null);
        }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    updateToDate(date) {
        this.toDate = date;
    }
    /**
     * @param {?} presetItem
     * @return {?}
     */
    updateRangeByPreset(presetItem) {
        this.updateFromDate(presetItem.range.fromDate);
        // In single-date mode, on click preset button, the picker closes.
        if (this.singleDate) {
            this.applyNewDates(void 0);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    applyNewDates(e) {
        this.rangeStoreService.updateRange(this.fromDate, this.configStoreService.ngxDrpOptions.singleDate ? null : this.toDate);
        this.disposeOverLay();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    addEndDate(e) {
        this.configStoreService.ngxDrpOptions.singleDate = !this.configStoreService.ngxDrpOptions.singleDate;
        this.setSingleDate(this.configStoreService.ngxDrpOptions.singleDate);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    discardNewDates(e) {
        // this.rangeStoreService.updateRange();
        this.disposeOverLay();
    }
    /**
     * @private
     * @return {?}
     */
    disposeOverLay() {
        this.overlayRef.dispose();
    }
    /**
     * @private
     * @param {?} singleDate
     * @return {?}
     */
    setSingleDate(singleDate) {
        this.singleDate = singleDate;
        this.rangeLabel = this.getRangeLabel(singleDate);
    }
    /**
     * @private
     * @param {?} singleDate
     * @return {?}
     */
    getRangeLabel(singleDate) {
        if (!!singleDate) {
            return this.configStoreService.ngxDrpOptions.addEndDateLabel || 'Add End-Date';
        }
        else {
            return this.configStoreService.ngxDrpOptions.removeEndDateLabel || 'Remove End-Date';
        }
    }
}
PickerOverlayComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-mat-drp-picker-overlay',
                template: "<div [@transformPickerOverlay]=\"shouldAnimate\" class=\"ngx-mat-drp-calendar-container\">\r\n  <div class=\"ngx-mat-drp-calendar-item\">\r\n    <calendar-wrapper [prefixLabel]=\"startDatePrefix\" [selectedDate]=\"fromDate\" [minDate]=\"fromMinDate\"\r\n      [maxDate]=\"fromMaxDate\" (selectedDateChange)=\"updateFromDate($event)\">\r\n    </calendar-wrapper>\r\n  </div>\r\n  <div class=\"ngx-mat-drp-calendar-item\" *ngIf='!singleDate'>\r\n    <calendar-wrapper [prefixLabel]=\"endDatePrefix\" [selectedDate]=\"toDate\" [minDate]=\"toMinDate\" [maxDate]=\"toMaxDate\"\r\n      [fromDate]=\"fromDate\" (selectedDateChange)=\"updateToDate($event)\">\r\n    </calendar-wrapper>\r\n  </div>\r\n  <div class=\"ngx-mat-drp-calendar-item\">\r\n    <div class=\"ngx-mat-drp-menu\">\r\n      <mat-drp-presets [presets]=\"presets\" (presetChanged)=\"updateRangeByPreset($event)\"></mat-drp-presets>\r\n      <div class=\"ngx-mat-drp-controls\">\r\n        <button mat-button (click)=\"addEndDate($event)\">{{rangeLabel}}</button>\r\n        <button mat-button (click)=\"discardNewDates($event)\" *ngIf=\"false\">{{cancelLabel}}</button>\r\n        <button mat-button *ngIf='!singleDate' color=\"primary\" (click)=\"applyNewDates($event)\">{{applyLabel}}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                animations: [pickerOverlayAnimations.transformPanel],
                encapsulation: ViewEncapsulation.None,
                styles: [".ngx-mat-drp-calendar-container{display:flex;flex-wrap:wrap;justify-content:space-around;min-width:350px;min-height:300px}.ngx-mat-drp-calendar-item{flex-basis:1;min-width:210px;padding:1em;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:400}.ngx-mat-drp-menu{flex-basis:1;height:100%}.ngx-mat-drp-controls{display:flex;justify-content:space-around;margin:10% auto}.ngx-mat-drp-overlay{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background:#fff;border-radius:2px}.ngx-mat-drp-overlay-backdrop{background-color:rgba(0,0,0,.2);opacity:.2}"]
            }] }
];
/** @nocollapse */
PickerOverlayComponent.ctorParameters = () => [
    { type: RangeStoreService },
    { type: ConfigStoreService },
    { type: OverlayRef }
];
if (false) {
    /** @type {?} */
    PickerOverlayComponent.prototype.fromDate;
    /** @type {?} */
    PickerOverlayComponent.prototype.toDate;
    /** @type {?} */
    PickerOverlayComponent.prototype.fromMinDate;
    /** @type {?} */
    PickerOverlayComponent.prototype.fromMaxDate;
    /** @type {?} */
    PickerOverlayComponent.prototype.toMinDate;
    /** @type {?} */
    PickerOverlayComponent.prototype.toMaxDate;
    /** @type {?} */
    PickerOverlayComponent.prototype.presets;
    /** @type {?} */
    PickerOverlayComponent.prototype.startDatePrefix;
    /** @type {?} */
    PickerOverlayComponent.prototype.endDatePrefix;
    /** @type {?} */
    PickerOverlayComponent.prototype.applyLabel;
    /** @type {?} */
    PickerOverlayComponent.prototype.rangeLabel;
    /** @type {?} */
    PickerOverlayComponent.prototype.cancelLabel;
    /** @type {?} */
    PickerOverlayComponent.prototype.shouldAnimate;
    /** @type {?} */
    PickerOverlayComponent.prototype.singleDate;
    /**
     * @type {?}
     * @private
     */
    PickerOverlayComponent.prototype.rangeStoreService;
    /**
     * @type {?}
     * @private
     */
    PickerOverlayComponent.prototype.configStoreService;
    /**
     * @type {?}
     * @private
     */
    PickerOverlayComponent.prototype.overlayRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLW92ZXJsYXkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdC1kYXRlcmFuZ2UtcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL25neC1tYXQtZHJwL3BpY2tlci1vdmVybGF5L3BpY2tlci1vdmVybGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFVdEUsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7O0lBZ0JqQyxZQUNVLGlCQUFvQyxFQUNwQyxrQkFBc0MsRUFDdEMsVUFBc0I7UUFGdEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFaaEMsWUFBTyxHQUFzQixFQUFFLENBQUM7SUFhN0IsQ0FBQzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDO1FBQzVDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxlQUFlLElBQUksT0FBTyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FB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Q0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7OztJQUNPLGFBQWEsQ0FBQyxVQUFtQjtRQUN2QyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLGVBQWUsSUFBSSxjQUFjLENBQUM7U0FDaEY7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsSUFBSSxpQkFBaUIsQ0FBQztTQUN0RjtJQUNILENBQUM7OztZQWpHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsd3lDQUE4QztnQkFFOUMsVUFBVSxFQUFFLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDO2dCQUNwRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7WUFaUSxpQkFBaUI7WUFFakIsa0JBQWtCO1lBRGxCLFVBQVU7Ozs7SUFhakIsMENBQWlCOztJQUNqQix3Q0FBZTs7SUFDZiw2Q0FBb0I7O0lBQ3BCLDZDQUFvQjs7SUFDcEIsMkNBQWtCOztJQUNsQiwyQ0FBa0I7O0lBQ2xCLHlDQUFnQzs7SUFDaEMsaURBQXdCOztJQUN4QiwrQ0FBc0I7O0lBQ3RCLDRDQUFtQjs7SUFDbkIsNENBQW1COztJQUNuQiw2Q0FBb0I7O0lBQ3BCLCtDQUFzQjs7SUFDdEIsNENBQW9COzs7OztJQUdsQixtREFBNEM7Ozs7O0lBQzVDLG9EQUE4Qzs7Ozs7SUFDOUMsNENBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByZXNldEl0ZW0sIE5neERycE9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbC9tb2RlbCc7XHJcbmltcG9ydCB7IFJhbmdlU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcmFuZ2Utc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbmZpZ1N0b3JlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbmZpZy1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgcGlja2VyT3ZlcmxheUFuaW1hdGlvbnMgfSBmcm9tICcuL3BpY2tlci1vdmVybGF5LmFuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBNb21lbnQgfSBmcm9tICdtb21lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtbWF0LWRycC1waWNrZXItb3ZlcmxheScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BpY2tlci1vdmVybGF5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9waWNrZXItb3ZlcmxheS5jb21wb25lbnQuY3NzJ10sXHJcbiAgYW5pbWF0aW9uczogW3BpY2tlck92ZXJsYXlBbmltYXRpb25zLnRyYW5zZm9ybVBhbmVsXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaWNrZXJPdmVybGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBmcm9tRGF0ZTogTW9tZW50O1xyXG4gIHRvRGF0ZTogTW9tZW50O1xyXG4gIGZyb21NaW5EYXRlOiBNb21lbnQ7XHJcbiAgZnJvbU1heERhdGU6IE1vbWVudDtcclxuICB0b01pbkRhdGU6IE1vbWVudDtcclxuICB0b01heERhdGU6IE1vbWVudDtcclxuICBwcmVzZXRzOiBBcnJheTxQcmVzZXRJdGVtPiA9IFtdO1xyXG4gIHN0YXJ0RGF0ZVByZWZpeDogc3RyaW5nO1xyXG4gIGVuZERhdGVQcmVmaXg6IHN0cmluZztcclxuICBhcHBseUxhYmVsOiBzdHJpbmc7XHJcbiAgcmFuZ2VMYWJlbDogc3RyaW5nO1xyXG4gIGNhbmNlbExhYmVsOiBzdHJpbmc7XHJcbiAgc2hvdWxkQW5pbWF0ZTogc3RyaW5nO1xyXG4gIHNpbmdsZURhdGU6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByYW5nZVN0b3JlU2VydmljZTogUmFuZ2VTdG9yZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlU2VydmljZTogQ29uZmlnU3RvcmVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZnJvbURhdGUgPSB0aGlzLnJhbmdlU3RvcmVTZXJ2aWNlLmZyb21EYXRlO1xyXG4gICAgdGhpcy50b0RhdGUgPSB0aGlzLnJhbmdlU3RvcmVTZXJ2aWNlLnRvRGF0ZTtcclxuICAgIHRoaXMuc3RhcnREYXRlUHJlZml4ID0gdGhpcy5jb25maWdTdG9yZVNlcnZpY2Uubmd4RHJwT3B0aW9ucy5zdGFydERhdGVQcmVmaXggfHwgJ0ZST006JztcclxuICAgIHRoaXMuZW5kRGF0ZVByZWZpeCA9IHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMuZW5kRGF0ZVByZWZpeCB8fCAnVE86JztcclxuICAgIHRoaXMuYXBwbHlMYWJlbCA9IHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMuYXBwbHlMYWJlbCB8fCAnQXBwbHknO1xyXG4gICAgdGhpcy5jYW5jZWxMYWJlbCA9IHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMuY2FuY2VsTGFiZWwgfHwgJ0NhbmNlbCc7XHJcbiAgICB0aGlzLnByZXNldHMgPSB0aGlzLmNvbmZpZ1N0b3JlU2VydmljZS5uZ3hEcnBPcHRpb25zLnByZXNldHM7XHJcbiAgICB0aGlzLnNob3VsZEFuaW1hdGUgPSB0aGlzLmNvbmZpZ1N0b3JlU2VydmljZS5uZ3hEcnBPcHRpb25zLmFuaW1hdGlvblxyXG4gICAgICA/ICdlbnRlcidcclxuICAgICAgOiAnbm9vcCc7XHJcbiAgICAoe1xyXG4gICAgICBmcm9tRGF0ZTogdGhpcy5mcm9tTWluRGF0ZSxcclxuICAgICAgdG9EYXRlOiB0aGlzLmZyb21NYXhEYXRlXHJcbiAgICB9ID0gdGhpcy5jb25maWdTdG9yZVNlcnZpY2Uubmd4RHJwT3B0aW9ucy5mcm9tTWluTWF4KTtcclxuICAgICh7XHJcbiAgICAgIGZyb21EYXRlOiB0aGlzLnRvTWluRGF0ZSxcclxuICAgICAgdG9EYXRlOiB0aGlzLnRvTWF4RGF0ZVxyXG4gICAgfSA9IHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMudG9NaW5NYXgpO1xyXG4gICAgdGhpcy5zZXRTaW5nbGVEYXRlKHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMuc2luZ2xlRGF0ZSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVGcm9tRGF0ZShkYXRlKSB7XHJcbiAgICB0aGlzLmZyb21EYXRlID0gZGF0ZTtcclxuICAgIC8vIEluIHNpbmdsZS1kYXRlIG1vZGUsIG9uIGNsaWNrIGEgZGF0ZSBpbiB0aGUgY2FsZW5kYXIsIHRoZSBwaWNrZXIgY2xvc2VzLlxyXG4gICAgaWYgKHRoaXMuc2luZ2xlRGF0ZSkgeyB0aGlzLmFwcGx5TmV3RGF0ZXMobnVsbCk7IH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVRvRGF0ZShkYXRlKSB7XHJcbiAgICB0aGlzLnRvRGF0ZSA9IGRhdGU7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVSYW5nZUJ5UHJlc2V0KHByZXNldEl0ZW06IFByZXNldEl0ZW0pIHtcclxuICAgIHRoaXMudXBkYXRlRnJvbURhdGUocHJlc2V0SXRlbS5yYW5nZS5mcm9tRGF0ZSk7XHJcblxyXG4gICAgLy8gSW4gc2luZ2xlLWRhdGUgbW9kZSwgb24gY2xpY2sgcHJlc2V0IGJ1dHRvbiwgdGhlIHBpY2tlciBjbG9zZXMuXHJcbiAgICBpZiAodGhpcy5zaW5nbGVEYXRlKSB7IHRoaXMuYXBwbHlOZXdEYXRlcyh2b2lkIDApOyB9XHJcbiAgfVxyXG5cclxuICBhcHBseU5ld0RhdGVzKGUpIHtcclxuICAgIHRoaXMucmFuZ2VTdG9yZVNlcnZpY2UudXBkYXRlUmFuZ2UodGhpcy5mcm9tRGF0ZSwgdGhpcy5jb25maWdTdG9yZVNlcnZpY2Uubmd4RHJwT3B0aW9ucy5zaW5nbGVEYXRlID8gbnVsbCA6IHRoaXMudG9EYXRlKTtcclxuICAgIHRoaXMuZGlzcG9zZU92ZXJMYXkoKTtcclxuICB9XHJcblxyXG4gIGFkZEVuZERhdGUoZSkge1xyXG4gICAgdGhpcy5jb25maWdTdG9yZVNlcnZpY2Uubmd4RHJwT3B0aW9ucy5zaW5nbGVEYXRlID0gIXRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMuc2luZ2xlRGF0ZTtcclxuICAgIHRoaXMuc2V0U2luZ2xlRGF0ZSh0aGlzLmNvbmZpZ1N0b3JlU2VydmljZS5uZ3hEcnBPcHRpb25zLnNpbmdsZURhdGUpO1xyXG4gIH1cclxuXHJcbiAgZGlzY2FyZE5ld0RhdGVzKGUpIHtcclxuICAgIC8vIHRoaXMucmFuZ2VTdG9yZVNlcnZpY2UudXBkYXRlUmFuZ2UoKTtcclxuICAgIHRoaXMuZGlzcG9zZU92ZXJMYXkoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzcG9zZU92ZXJMYXkoKSB7XHJcbiAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTaW5nbGVEYXRlKHNpbmdsZURhdGU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuc2luZ2xlRGF0ZSA9IHNpbmdsZURhdGU7XHJcbiAgICB0aGlzLnJhbmdlTGFiZWwgPSB0aGlzLmdldFJhbmdlTGFiZWwoc2luZ2xlRGF0ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgZ2V0UmFuZ2VMYWJlbChzaW5nbGVEYXRlOiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgIGlmICghIXNpbmdsZURhdGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMuYWRkRW5kRGF0ZUxhYmVsIHx8ICdBZGQgRW5kLURhdGUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMucmVtb3ZlRW5kRGF0ZUxhYmVsIHx8ICdSZW1vdmUgRW5kLURhdGUnO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=