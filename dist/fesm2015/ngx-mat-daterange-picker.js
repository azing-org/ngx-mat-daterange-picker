import { Injectable, Inject, InjectionToken, Component, ViewEncapsulation, Injector, ViewChild, Output, EventEmitter, Input, ChangeDetectionStrategy, ChangeDetectorRef, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { animate, state, style, transition, trigger, group } from '@angular/animations';
import { OverlayRef, Overlay, OverlayConfig, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { takeWhile } from 'rxjs/operators';
import { DatePipe, CommonModule } from '@angular/common';
import { MatCalendar, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* import { DATE } from '../ngx-drp.module'; */
/** @type {?} */
const DATE = new InjectionToken('date');
class RangeStoreService {
    /**
     * @param {?} _fromDate
     * @param {?} _toDate
     */
    constructor(_fromDate, _toDate) {
        this._fromDate = _fromDate;
        this._toDate = _toDate;
        this.rangeUpdate$ = new Subject();
    }
    /* set fromDate(fromDate:Date) {
        this._fromDate = fromDate;
      } */
    /**
     * @return {?}
     */
    get fromDate() {
        return this._fromDate;
    }
    /* set toDate(toDate:Date) {
        this._toDate = toDate;
      } */
    /**
     * @return {?}
     */
    get toDate() {
        return this._toDate;
    }
    /**
     * @param {?=} fromDate
     * @param {?=} toDate
     * @return {?}
     */
    updateRange(fromDate = this._fromDate, toDate = this._toDate) {
        this._fromDate = fromDate;
        this._toDate = toDate;
        this.rangeUpdate$.next({ fromDate: this._fromDate, toDate: this._toDate });
    }
}
RangeStoreService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RangeStoreService.ctorParameters = () => [
    { type: Date, decorators: [{ type: Inject, args: [DATE,] }] },
    { type: Date, decorators: [{ type: Inject, args: [DATE,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfigStoreService {
    constructor() {
        this.defaultOptions = {
            excludeWeekends: false,
            animation: true,
            locale: 'en-US',
            fromMinMax: { fromDate: null, toDate: null },
            toMinMax: { fromDate: null, toDate: null },
            rangeLabel: 'Add End-Date',
            singleDate: true,
        };
    }
    /**
     * @return {?}
     */
    get ngxDrpOptions() {
        return this._ngxDrpOptions;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set ngxDrpOptions(options) {
        this._ngxDrpOptions = Object.assign({}, this.defaultOptions, options);
    }
}
ConfigStoreService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfigStoreService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const pickerOverlayAnimations = {
    /**
     * Transforms the height of the picker overlay content.
     */
    transformPanel: trigger('transformPickerOverlay', [
        state('void', style({ opacity: 0, transform: 'scale(1, 0)' })),
        state('enter', style({ opacity: 1, transform: 'scale(1, 1)' })),
        transition('void => enter', group([
            animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')
        ])),
        transition('* => void', animate('100ms linear', style({ opacity: 0 })))
    ])
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PickerOverlayComponent {
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
        this.updateFromDate(new Date(presetItem.range.fromDate));
        this.updateToDate(new Date(presetItem.range.toDate));
        // if (this.applyOnPresetClick) {
        //   this.applyNewDates(null);
        // }
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
                template: "<div [@transformPickerOverlay]=\"shouldAnimate\" class=\"ngx-mat-drp-calendar-container\">\r\n\r\n  <div class=\"ngx-mat-drp-calendar-item\">\r\n    <calendar-wrapper \r\n    [prefixLabel]=\"startDatePrefix\"\r\n    [selectedDate]=\"fromDate\"\r\n    [minDate]=\"fromMinDate\"\r\n    [maxDate]=\"fromMaxDate\"\r\n    (selectedDateChange)=\"updateFromDate($event)\">\r\n  </calendar-wrapper>\r\n  </div>\r\n  <div class=\"ngx-mat-drp-calendar-item\" *ngIf='!singleDate'>\r\n    <calendar-wrapper \r\n    [prefixLabel]=\"endDatePrefix\"\r\n    [selectedDate]=\"toDate\"\r\n    [minDate]=\"toMinDate\"\r\n    [maxDate]=\"toMaxDate\" \r\n    (selectedDateChange)=\"updateToDate($event)\">\r\n  </calendar-wrapper>\r\n  </div>\r\n  <div class=\"ngx-mat-drp-calendar-item\">\r\n    <div class=\"ngx-mat-drp-menu\">\r\n      <mat-drp-presets [presets]=\"presets\" (presetChanged)=\"updateRangeByPreset($event)\"></mat-drp-presets>\r\n      <div class=\"ngx-mat-drp-controls\">\r\n        <button mat-button (click)=\"addEndDate($event)\">{{rangeLabel}}</button>\r\n        <button mat-button (click)=\"discardNewDates($event)\" *ngIf=\"false\">{{cancelLabel}}</button>\r\n        <button mat-button color=\"primary\" (click)=\"applyNewDates($event)\">{{applyLabel}}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_CONFIG = {
    panelClass: 'ngx-mat-drp-overlay',
    hasBackdrop: true,
    backdropClass: 'ngx-mat-drp-overlay-backdrop',
    shouldCloseOnBackdropClick: true
};
class CalendarOverlayService {
    /**
     * @param {?} overlay
     * @param {?} injector
     */
    constructor(overlay, injector) {
        this.overlay = overlay;
        this.injector = injector;
    }
    /**
     * @param {?=} config
     * @param {?=} hostElemRef
     * @return {?}
     */
    open(config = {}, hostElemRef) {
        this.hostElemRef = hostElemRef;
        /** @type {?} */
        const overlayConfig = Object.assign({}, DEFAULT_CONFIG, config);
        /** @type {?} */
        const overlayRef = this.createOverlay(overlayConfig);
        /** @type {?} */
        const portalInjector = this.createInjector(overlayRef);
        /** @type {?} */
        const calendarPortal = new ComponentPortal(PickerOverlayComponent, null, portalInjector);
        overlayRef.attach(calendarPortal);
        overlayRef
            .backdropClick()
            .pipe(takeWhile(() => overlayConfig.shouldCloseOnBackdropClick))
            .subscribe(() => overlayRef.dispose());
        return overlayRef;
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    createOverlay(config) {
        /** @type {?} */
        const overlayConfig = this.getOverlayConfig(config);
        return this.overlay.create(overlayConfig);
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    getOverlayConfig(config) {
        /** @type {?} */
        const positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(this.hostElemRef)
            .withFlexibleDimensions(false)
            .withViewportMargin(8)
            .withDefaultOffsetY(12)
            .withPositions([
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top'
            },
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom'
            },
            {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top'
            },
            {
                originX: 'end',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'bottom'
            }
        ]);
        /** @type {?} */
        const overlayConfig = new OverlayConfig({
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass,
            panelClass: config.panelClass,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy
        });
        return overlayConfig;
    }
    /**
     * @private
     * @param {?} overlayRef
     * @return {?}
     */
    createInjector(overlayRef) {
        /** @type {?} */
        const injectionTokens = new WeakMap();
        injectionTokens.set(OverlayRef, overlayRef);
        return new PortalInjector(this.injector, injectionTokens);
    }
}
CalendarOverlayService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CalendarOverlayService.ctorParameters = () => [
    { type: Overlay },
    { type: Injector }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxMatDrpComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarWrapperComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PresetsComponent {
    constructor() {
        this.presetChanged = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} event
     * @return {?}
     */
    setPresetPeriod(event) {
        this.presetChanged.emit(event);
    }
}
PresetsComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-drp-presets',
                template: "<div>\r\n  <ul class=\"ngx-mat-drp-presets-list\">\r\n    <li *ngFor=\"let preset of presets\" (click)=\"setPresetPeriod(preset)\"> {{preset.presetLabel}} </li>\r\n  </ul>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-mat-drp-presets-list{list-style-type:none;margin:0;padding:0}.ngx-mat-drp-presets-list li{margin:5px 0;padding:4%;cursor:pointer;background:#fafafa;color:#3f51b5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ngx-mat-drp-presets-list li:hover{background:#3f51b5;color:#fff}"]
            }] }
];
/** @nocollapse */
PresetsComponent.ctorParameters = () => [];
PresetsComponent.propDecorators = {
    presets: [{ type: Input }],
    presetChanged: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = new Date();
class NgxMatDrpModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxMatDrpModule, NgxMatDrpComponent, PickerOverlayComponent, CalendarWrapperComponent, PresetsComponent, CalendarOverlayService, ConfigStoreService, DATE, RangeStoreService, pickerOverlayAnimations as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdC1kYXRlcmFuZ2UtcGlja2VyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtbWF0LWRhdGVyYW5nZS1waWNrZXIvc3JjL2FwcC9tb2R1bGVzL25neC1tYXQtZHJwL3NlcnZpY2VzL3JhbmdlLXN0b3JlLnNlcnZpY2UudHMiLCJuZzovL25neC1tYXQtZGF0ZXJhbmdlLXBpY2tlci9zcmMvYXBwL21vZHVsZXMvbmd4LW1hdC1kcnAvc2VydmljZXMvY29uZmlnLXN0b3JlLnNlcnZpY2UudHMiLCJuZzovL25neC1tYXQtZGF0ZXJhbmdlLXBpY2tlci9zcmMvYXBwL21vZHVsZXMvbmd4LW1hdC1kcnAvcGlja2VyLW92ZXJsYXkvcGlja2VyLW92ZXJsYXkuYW5pbWF0aW9ucy50cyIsIm5nOi8vbmd4LW1hdC1kYXRlcmFuZ2UtcGlja2VyL3NyYy9hcHAvbW9kdWxlcy9uZ3gtbWF0LWRycC9waWNrZXItb3ZlcmxheS9waWNrZXItb3ZlcmxheS5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXQtZGF0ZXJhbmdlLXBpY2tlci9zcmMvYXBwL21vZHVsZXMvbmd4LW1hdC1kcnAvc2VydmljZXMvY2FsZW5kYXItb3ZlcmxheS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtbWF0LWRhdGVyYW5nZS1waWNrZXIvc3JjL2FwcC9tb2R1bGVzL25neC1tYXQtZHJwL25neC1tYXQtZHJwL25neC1tYXQtZHJwLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdC1kYXRlcmFuZ2UtcGlja2VyL3NyYy9hcHAvbW9kdWxlcy9uZ3gtbWF0LWRycC9jYWxlbmRhci13cmFwcGVyL2NhbGVuZGFyLXdyYXBwZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0LWRhdGVyYW5nZS1waWNrZXIvc3JjL2FwcC9tb2R1bGVzL25neC1tYXQtZHJwL3ByZXNldHMvcHJlc2V0cy5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXQtZGF0ZXJhbmdlLXBpY2tlci9zcmMvYXBwL21vZHVsZXMvbmd4LW1hdC1kcnAvbmd4LW1hdC1kcnAubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmFuZ2UgfSBmcm9tICcuLi9tb2RlbC9tb2RlbCc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuLyogaW1wb3J0IHsgREFURSB9IGZyb20gJy4uL25neC1kcnAubW9kdWxlJzsgKi9cclxuXHJcbmV4cG9ydCBjb25zdCBEQVRFID0gbmV3IEluamVjdGlvblRva2VuPERhdGU+KCdkYXRlJyk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSYW5nZVN0b3JlU2VydmljZSB7XHJcbiAgcmFuZ2VVcGRhdGUkOiBTdWJqZWN0PFJhbmdlPiA9IG5ldyBTdWJqZWN0PFJhbmdlPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoREFURSkgcHJpdmF0ZSBfZnJvbURhdGU6IERhdGUsXHJcbiAgICBASW5qZWN0KERBVEUpIHByaXZhdGUgX3RvRGF0ZTogRGF0ZVxyXG4gICkge31cclxuXHJcbiAgLyogc2V0IGZyb21EYXRlKGZyb21EYXRlOkRhdGUpIHtcclxuICAgIHRoaXMuX2Zyb21EYXRlID0gZnJvbURhdGU7XHJcbiAgfSAqL1xyXG5cclxuICBnZXQgZnJvbURhdGUoKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZnJvbURhdGU7XHJcbiAgfVxyXG5cclxuICAvKiBzZXQgdG9EYXRlKHRvRGF0ZTpEYXRlKSB7XHJcbiAgICB0aGlzLl90b0RhdGUgPSB0b0RhdGU7XHJcbiAgfSAqL1xyXG5cclxuICBnZXQgdG9EYXRlKCk6IERhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RvRGF0ZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVJhbmdlKGZyb21EYXRlOiBEYXRlID0gdGhpcy5fZnJvbURhdGUsIHRvRGF0ZTogRGF0ZSA9IHRoaXMuX3RvRGF0ZSkge1xyXG4gICAgdGhpcy5fZnJvbURhdGUgPSBmcm9tRGF0ZTtcclxuICAgIHRoaXMuX3RvRGF0ZSA9IHRvRGF0ZTtcclxuICAgIHRoaXMucmFuZ2VVcGRhdGUkLm5leHQoeyBmcm9tRGF0ZTogdGhpcy5fZnJvbURhdGUsIHRvRGF0ZTogdGhpcy5fdG9EYXRlIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neERycE9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbC9tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb25maWdTdG9yZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX25neERycE9wdGlvbnM6IE5neERycE9wdGlvbnM7XHJcbiAgcHJpdmF0ZSBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIGV4Y2x1ZGVXZWVrZW5kczogZmFsc2UsXHJcbiAgICBhbmltYXRpb246IHRydWUsXHJcbiAgICBsb2NhbGU6ICdlbi1VUycsXHJcbiAgICBmcm9tTWluTWF4OiB7IGZyb21EYXRlOiBudWxsLCB0b0RhdGU6IG51bGwgfSxcclxuICAgIHRvTWluTWF4OiB7IGZyb21EYXRlOiBudWxsLCB0b0RhdGU6IG51bGwgfSxcclxuICAgIHJhbmdlTGFiZWw6ICdBZGQgRW5kLURhdGUnLFxyXG4gICAgc2luZ2xlRGF0ZTogdHJ1ZSwgLy8gZmFsc2UgPSBkYXRlUmFuZ2VcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIGdldCBuZ3hEcnBPcHRpb25zKCk6IE5neERycE9wdGlvbnMge1xyXG4gICAgcmV0dXJuIHRoaXMuX25neERycE9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBzZXQgbmd4RHJwT3B0aW9ucyhvcHRpb25zOiBOZ3hEcnBPcHRpb25zKSB7XHJcbiAgICB0aGlzLl9uZ3hEcnBPcHRpb25zID0geyAuLi50aGlzLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgYW5pbWF0ZSxcclxuICBzdGF0ZSxcclxuICBzdHlsZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIHRyaWdnZXIsXHJcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxyXG4gIGdyb3VwXHJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5leHBvcnQgY29uc3QgcGlja2VyT3ZlcmxheUFuaW1hdGlvbnM6IHtcclxuICByZWFkb25seSB0cmFuc2Zvcm1QYW5lbDogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhO1xyXG59ID0ge1xyXG4gIC8qKiBUcmFuc2Zvcm1zIHRoZSBoZWlnaHQgb2YgdGhlIHBpY2tlciBvdmVybGF5IGNvbnRlbnQuICovXHJcbiAgdHJhbnNmb3JtUGFuZWw6IHRyaWdnZXIoJ3RyYW5zZm9ybVBpY2tlck92ZXJsYXknLCBbXHJcbiAgICBzdGF0ZSgndm9pZCcsIHN0eWxlKHtvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgxLCAwKSd9KSksXHJcbiAgICBzdGF0ZSgnZW50ZXInLCBzdHlsZSh7b3BhY2l0eTogMSwgdHJhbnNmb3JtOiAnc2NhbGUoMSwgMSknfSkpLFxyXG4gICAgdHJhbnNpdGlvbigndm9pZCA9PiBlbnRlcicsIGdyb3VwKFtcclxuICAgICAgYW5pbWF0ZSgnNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSknKVxyXG4gICAgXSkpLFxyXG4gICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgYW5pbWF0ZSgnMTAwbXMgbGluZWFyJywgc3R5bGUoe29wYWNpdHk6IDB9KSkpXHJcbiAgXSlcclxufTtcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByZXNldEl0ZW0sIE5neERycE9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbC9tb2RlbCc7XHJcbmltcG9ydCB7IFJhbmdlU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcmFuZ2Utc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbmZpZ1N0b3JlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbmZpZy1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgcGlja2VyT3ZlcmxheUFuaW1hdGlvbnMgfSBmcm9tICcuL3BpY2tlci1vdmVybGF5LmFuaW1hdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtbWF0LWRycC1waWNrZXItb3ZlcmxheScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BpY2tlci1vdmVybGF5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9waWNrZXItb3ZlcmxheS5jb21wb25lbnQuY3NzJ10sXHJcbiAgYW5pbWF0aW9uczogW3BpY2tlck92ZXJsYXlBbmltYXRpb25zLnRyYW5zZm9ybVBhbmVsXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaWNrZXJPdmVybGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBmcm9tRGF0ZTogRGF0ZTtcclxuICB0b0RhdGU6IERhdGU7XHJcbiAgZnJvbU1pbkRhdGU6IERhdGU7XHJcbiAgZnJvbU1heERhdGU6IERhdGU7XHJcbiAgdG9NaW5EYXRlOiBEYXRlO1xyXG4gIHRvTWF4RGF0ZTogRGF0ZTtcclxuICBwcmVzZXRzOiBBcnJheTxQcmVzZXRJdGVtPiA9IFtdO1xyXG4gIHN0YXJ0RGF0ZVByZWZpeDogc3RyaW5nO1xyXG4gIGVuZERhdGVQcmVmaXg6IHN0cmluZztcclxuICBhcHBseUxhYmVsOiBzdHJpbmc7XHJcbiAgcmFuZ2VMYWJlbDogc3RyaW5nO1xyXG4gIGNhbmNlbExhYmVsOiBzdHJpbmc7XHJcbiAgc2hvdWxkQW5pbWF0ZTogc3RyaW5nO1xyXG4gIHNpbmdsZURhdGU6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByYW5nZVN0b3JlU2VydmljZTogUmFuZ2VTdG9yZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlU2VydmljZTogQ29uZmlnU3RvcmVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZnJvbURhdGUgPSB0aGlzLnJhbmdlU3RvcmVTZXJ2aWNlLmZyb21EYXRlO1xyXG4gICAgdGhpcy50b0RhdGUgPSB0aGlzLnJhbmdlU3RvcmVTZXJ2aWNlLnRvRGF0ZTtcclxuICAgIHRoaXMuc3RhcnREYXRlUHJlZml4ID0gdGhpcy5jb25maWdTdG9yZVNlcnZpY2Uubmd4RHJwT3B0aW9ucy5zdGFydERhdGVQcmVmaXggfHwgJ0ZST006JztcclxuICAgIHRoaXMuZW5kRGF0ZVByZWZpeCA9IHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMuZW5kRGF0ZVByZWZpeCB8fCAnVE86JztcclxuICAgIHRoaXMuYXBwbHlMYWJlbCA9IHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMuYXBwbHlMYWJlbCB8fCAnQXBwbHknO1xyXG4gICAgdGhpcy5jYW5jZWxMYWJlbCA9IHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMuY2FuY2VsTGFiZWwgfHwgJ0NhbmNlbCc7XHJcbiAgICB0aGlzLnByZXNldHMgPSB0aGlzLmNvbmZpZ1N0b3JlU2VydmljZS5uZ3hEcnBPcHRpb25zLnByZXNldHM7XHJcbiAgICB0aGlzLnNob3VsZEFuaW1hdGUgPSB0aGlzLmNvbmZpZ1N0b3JlU2VydmljZS5uZ3hEcnBPcHRpb25zLmFuaW1hdGlvblxyXG4gICAgICA/ICdlbnRlcidcclxuICAgICAgOiAnbm9vcCc7XHJcbiAgICAoe1xyXG4gICAgICBmcm9tRGF0ZTogdGhpcy5mcm9tTWluRGF0ZSxcclxuICAgICAgdG9EYXRlOiB0aGlzLmZyb21NYXhEYXRlXHJcbiAgICB9ID0gdGhpcy5jb25maWdTdG9yZVNlcnZpY2Uubmd4RHJwT3B0aW9ucy5mcm9tTWluTWF4KTtcclxuICAgICh7XHJcbiAgICAgIGZyb21EYXRlOiB0aGlzLnRvTWluRGF0ZSxcclxuICAgICAgdG9EYXRlOiB0aGlzLnRvTWF4RGF0ZVxyXG4gICAgfSA9IHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMudG9NaW5NYXgpO1xyXG4gICAgdGhpcy5zZXRTaW5nbGVEYXRlKHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMuc2luZ2xlRGF0ZSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVGcm9tRGF0ZShkYXRlKSB7XHJcbiAgICB0aGlzLmZyb21EYXRlID0gZGF0ZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRvRGF0ZShkYXRlKSB7XHJcbiAgICB0aGlzLnRvRGF0ZSA9IGRhdGU7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVSYW5nZUJ5UHJlc2V0KHByZXNldEl0ZW06IFByZXNldEl0ZW0pIHtcclxuICAgIHRoaXMudXBkYXRlRnJvbURhdGUobmV3IERhdGUocHJlc2V0SXRlbS5yYW5nZS5mcm9tRGF0ZSkpO1xyXG4gICAgdGhpcy51cGRhdGVUb0RhdGUobmV3IERhdGUocHJlc2V0SXRlbS5yYW5nZS50b0RhdGUpKTtcclxuICAgIC8vIGlmICh0aGlzLmFwcGx5T25QcmVzZXRDbGljaykge1xyXG4gICAgLy8gICB0aGlzLmFwcGx5TmV3RGF0ZXMobnVsbCk7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICBhcHBseU5ld0RhdGVzKGUpIHtcclxuICAgIHRoaXMucmFuZ2VTdG9yZVNlcnZpY2UudXBkYXRlUmFuZ2UodGhpcy5mcm9tRGF0ZSwgdGhpcy5jb25maWdTdG9yZVNlcnZpY2Uubmd4RHJwT3B0aW9ucy5zaW5nbGVEYXRlID8gbnVsbCA6IHRoaXMudG9EYXRlKTtcclxuICAgIHRoaXMuZGlzcG9zZU92ZXJMYXkoKTtcclxuICB9XHJcblxyXG4gIGFkZEVuZERhdGUoZSkge1xyXG4gICAgdGhpcy5jb25maWdTdG9yZVNlcnZpY2Uubmd4RHJwT3B0aW9ucy5zaW5nbGVEYXRlID0gIXRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMuc2luZ2xlRGF0ZTtcclxuICAgIHRoaXMuc2V0U2luZ2xlRGF0ZSh0aGlzLmNvbmZpZ1N0b3JlU2VydmljZS5uZ3hEcnBPcHRpb25zLnNpbmdsZURhdGUpO1xyXG4gIH1cclxuICBkaXNjYXJkTmV3RGF0ZXMoZSkge1xyXG4gICAgLy8gdGhpcy5yYW5nZVN0b3JlU2VydmljZS51cGRhdGVSYW5nZSgpO1xyXG4gICAgdGhpcy5kaXNwb3NlT3ZlckxheSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkaXNwb3NlT3ZlckxheSgpIHtcclxuICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFNpbmdsZURhdGUoc2luZ2xlRGF0ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5zaW5nbGVEYXRlID0gc2luZ2xlRGF0ZTtcclxuICAgIHRoaXMucmFuZ2VMYWJlbCA9IHRoaXMuZ2V0UmFuZ2VMYWJlbChzaW5nbGVEYXRlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBnZXRSYW5nZUxhYmVsKHNpbmdsZURhdGU6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgaWYgKCEhc2luZ2xlRGF0ZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25maWdTdG9yZVNlcnZpY2Uubmd4RHJwT3B0aW9ucy5hZGRFbmREYXRlTGFiZWwgfHwgJ0FkZCBFbmQtRGF0ZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25maWdTdG9yZVNlcnZpY2Uubmd4RHJwT3B0aW9ucy5yZW1vdmVFbmREYXRlTGFiZWwgfHwgJ1JlbW92ZSBFbmQtRGF0ZSc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEVsZW1lbnRSZWYsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlDb25maWcsIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCwgUG9ydGFsSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgTmd4RHJwT3B0aW9ucywgQ2FsZW5kYXJPdmVybGF5Q29uZmlnIH0gZnJvbSAnLi4vbW9kZWwvbW9kZWwnO1xyXG5pbXBvcnQgeyB0YWtlV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFBpY2tlck92ZXJsYXlDb21wb25lbnQgfSBmcm9tICcuLi9waWNrZXItb3ZlcmxheS9waWNrZXItb3ZlcmxheS5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgREVGQVVMVF9DT05GSUc6IENhbGVuZGFyT3ZlcmxheUNvbmZpZyA9IHtcclxuICBwYW5lbENsYXNzOiAnbmd4LW1hdC1kcnAtb3ZlcmxheScsXHJcbiAgaGFzQmFja2Ryb3A6IHRydWUsXHJcbiAgYmFja2Ryb3BDbGFzczogJ25neC1tYXQtZHJwLW92ZXJsYXktYmFja2Ryb3AnLFxyXG4gIHNob3VsZENsb3NlT25CYWNrZHJvcENsaWNrOiB0cnVlXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYWxlbmRhck92ZXJsYXlTZXJ2aWNlIHtcclxuICBwcml2YXRlIGhvc3RFbGVtUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxyXG5cclxuICBvcGVuKFxyXG4gICAgY29uZmlnOiBDYWxlbmRhck92ZXJsYXlDb25maWcgPSB7fSxcclxuICAgIGhvc3RFbGVtUmVmOiBFbGVtZW50UmVmXHJcbiAgKTogT3ZlcmxheVJlZiB7XHJcbiAgICB0aGlzLmhvc3RFbGVtUmVmID0gaG9zdEVsZW1SZWY7XHJcbiAgICBjb25zdCBvdmVybGF5Q29uZmlnID0geyAuLi5ERUZBVUxUX0NPTkZJRywgLi4uY29uZmlnIH07XHJcbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5jcmVhdGVPdmVybGF5KG92ZXJsYXlDb25maWcpO1xyXG4gICAgY29uc3QgcG9ydGFsSW5qZWN0b3IgPSB0aGlzLmNyZWF0ZUluamVjdG9yKG92ZXJsYXlSZWYpO1xyXG4gICAgY29uc3QgY2FsZW5kYXJQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKFxyXG4gICAgICBQaWNrZXJPdmVybGF5Q29tcG9uZW50LFxyXG4gICAgICBudWxsLFxyXG4gICAgICBwb3J0YWxJbmplY3RvclxyXG4gICAgKTtcclxuICAgIG92ZXJsYXlSZWYuYXR0YWNoKGNhbGVuZGFyUG9ydGFsKTtcclxuXHJcbiAgICBvdmVybGF5UmVmXHJcbiAgICAgIC5iYWNrZHJvcENsaWNrKClcclxuICAgICAgLnBpcGUodGFrZVdoaWxlKCgpID0+IG92ZXJsYXlDb25maWcuc2hvdWxkQ2xvc2VPbkJhY2tkcm9wQ2xpY2spKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IG92ZXJsYXlSZWYuZGlzcG9zZSgpKTtcclxuXHJcbiAgICByZXR1cm4gb3ZlcmxheVJlZjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlT3ZlcmxheShjb25maWc6IENhbGVuZGFyT3ZlcmxheUNvbmZpZyk6IE92ZXJsYXlSZWYge1xyXG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IHRoaXMuZ2V0T3ZlcmxheUNvbmZpZyhjb25maWcpO1xyXG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheS5jcmVhdGUob3ZlcmxheUNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE92ZXJsYXlDb25maWcoY29uZmlnOiBDYWxlbmRhck92ZXJsYXlDb25maWcpOiBPdmVybGF5Q29uZmlnIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcclxuICAgICAgLnBvc2l0aW9uKClcclxuICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5ob3N0RWxlbVJlZilcclxuICAgICAgLndpdGhGbGV4aWJsZURpbWVuc2lvbnMoZmFsc2UpXHJcbiAgICAgIC53aXRoVmlld3BvcnRNYXJnaW4oOClcclxuICAgICAgLndpdGhEZWZhdWx0T2Zmc2V0WSgxMilcclxuICAgICAgLndpdGhQb3NpdGlvbnMoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG9yaWdpblg6ICdzdGFydCcsXHJcbiAgICAgICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcclxuICAgICAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxyXG4gICAgICAgICAgb3ZlcmxheVk6ICd0b3AnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBvcmlnaW5YOiAnc3RhcnQnLFxyXG4gICAgICAgICAgb3JpZ2luWTogJ3RvcCcsXHJcbiAgICAgICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcclxuICAgICAgICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgb3JpZ2luWDogJ2VuZCcsXHJcbiAgICAgICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcclxuICAgICAgICAgIG92ZXJsYXlYOiAnZW5kJyxcclxuICAgICAgICAgIG92ZXJsYXlZOiAndG9wJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgb3JpZ2luWDogJ2VuZCcsXHJcbiAgICAgICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgICAgIG92ZXJsYXlYOiAnZW5kJyxcclxuICAgICAgICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xyXG4gICAgICAgIH1cclxuICAgICAgXSk7XHJcblxyXG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcclxuICAgICAgaGFzQmFja2Ryb3A6IGNvbmZpZy5oYXNCYWNrZHJvcCxcclxuICAgICAgYmFja2Ryb3BDbGFzczogY29uZmlnLmJhY2tkcm9wQ2xhc3MsXHJcbiAgICAgIHBhbmVsQ2xhc3M6IGNvbmZpZy5wYW5lbENsYXNzLFxyXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKSxcclxuICAgICAgcG9zaXRpb25TdHJhdGVneVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG92ZXJsYXlDb25maWc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUluamVjdG9yKG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYpOiBQb3J0YWxJbmplY3RvciB7XHJcbiAgICBjb25zdCBpbmplY3Rpb25Ub2tlbnMgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgaW5qZWN0aW9uVG9rZW5zLnNldChPdmVybGF5UmVmLCBvdmVybGF5UmVmKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFBvcnRhbEluamVjdG9yKHRoaXMuaW5qZWN0b3IsIGluamVjdGlvblRva2Vucyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDYWxlbmRhck92ZXJsYXlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2FsZW5kYXItb3ZlcmxheS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmFuZ2VTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9yYW5nZS1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmFuZ2UsIE5neERycE9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbC9tb2RlbCc7XHJcbmltcG9ydCB7IENvbmZpZ1N0b3JlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbmZpZy1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1tYXQtZHJwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LW1hdC1kcnAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL25neC1tYXQtZHJwLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENhbGVuZGFyT3ZlcmxheVNlcnZpY2UsXHJcbiAgICBSYW5nZVN0b3JlU2VydmljZSxcclxuICAgIENvbmZpZ1N0b3JlU2VydmljZSxcclxuICAgIERhdGVQaXBlXHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TWF0RHJwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBWaWV3Q2hpbGQoJ2NhbGVuZGFySW5wdXQnKVxyXG4gIGNhbGVuZGFySW5wdXQ7XHJcbiAgQE91dHB1dCgpXHJcbiAgcmVhZG9ubHkgc2VsZWN0ZWREYXRlUmFuZ2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8UmFuZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcjxSYW5nZT4oKTtcclxuICBASW5wdXQoKVxyXG4gIG9wdGlvbnM6IE5neERycE9wdGlvbnM7XHJcbiAgcHJpdmF0ZSByYW5nZVVwZGF0ZSQ6IFN1YnNjcmlwdGlvbjtcclxuICBzZWxlY3RlZERhdGVSYW5nZSA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgY2FsZW5kYXJPdmVybGF5U2VydmljZTogQ2FsZW5kYXJPdmVybGF5U2VydmljZSxcclxuICAgIHB1YmxpYyByYW5nZVN0b3JlU2VydmljZTogUmFuZ2VTdG9yZVNlcnZpY2UsXHJcbiAgICBwdWJsaWMgY29uZmlnU3RvcmVTZXJ2aWNlOiBDb25maWdTdG9yZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmNvbmZpZ1N0b3JlU2VydmljZS5uZ3hEcnBPcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG4gICAgdGhpcy5vcHRpb25zLnBsYWNlaG9sZGVyID0gdGhpcy5vcHRpb25zLnBsYWNlaG9sZGVyIHx8ICdDaG9vc2UgYSBkYXRlJztcclxuICAgIHRoaXMucmFuZ2VVcGRhdGUkID0gdGhpcy5yYW5nZVN0b3JlU2VydmljZS5yYW5nZVVwZGF0ZSQuc3Vic2NyaWJlKHJhbmdlID0+IHtcclxuICAgICAgY29uc3QgZnJvbTogc3RyaW5nID0gdGhpcy5mb3JtYXRUb0RhdGVTdHJpbmcoXHJcbiAgICAgICAgcmFuZ2UuZnJvbURhdGUsXHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmZvcm1hdFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB0bzogc3RyaW5nID0gdGhpcy5mb3JtYXRUb0RhdGVTdHJpbmcoXHJcbiAgICAgICAgcmFuZ2UudG9EYXRlLFxyXG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JtYXRcclxuICAgICAgKTtcclxuICAgICAgaWYgKHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMuc2luZ2xlRGF0ZSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlUmFuZ2UgPSBgJHtmcm9tfWA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGVSYW5nZSA9IGAke2Zyb219IC0gJHt0b31gO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWREYXRlUmFuZ2VDaGFuZ2VkLmVtaXQocmFuZ2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5yYW5nZVN0b3JlU2VydmljZS51cGRhdGVSYW5nZShcclxuICAgICAgdGhpcy5vcHRpb25zLnJhbmdlLmZyb21EYXRlLFxyXG4gICAgICB0aGlzLm9wdGlvbnMucmFuZ2UudG9EYXRlXHJcbiAgICApO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5yYW5nZVVwZGF0ZSQpIHtcclxuICAgICAgdGhpcy5yYW5nZVVwZGF0ZSQudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0VG9EYXRlU3RyaW5nKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShkYXRlLCBmb3JtYXQpO1xyXG4gIH1cclxuXHJcbiAgb3BlbkNhbGVuZGFyKGV2ZW50KSB7XHJcbiAgICBjb25zdCBvdmVybGF5UmVmOiBPdmVybGF5UmVmID0gdGhpcy5jYWxlbmRhck92ZXJsYXlTZXJ2aWNlLm9wZW4oXHJcbiAgICAgIHRoaXMub3B0aW9ucy5jYWxlbmRhck92ZXJsYXlDb25maWcsXHJcbiAgICAgIHRoaXMuY2FsZW5kYXJJbnB1dFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXNldERhdGVzKHJhbmdlOiBSYW5nZSkge1xyXG4gICAgdGhpcy5yYW5nZVN0b3JlU2VydmljZS51cGRhdGVSYW5nZShcclxuICAgICAgcmFuZ2UuZnJvbURhdGUsXHJcbiAgICAgIHJhbmdlLnRvRGF0ZVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIE91dHB1dCxcclxuICBJbnB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0Q2FsZW5kYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcclxuaW1wb3J0IHsgQ29uZmlnU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY29uZmlnLXN0b3JlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjYWxlbmRhci13cmFwcGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2FsZW5kYXItd3JhcHBlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2FsZW5kYXItd3JhcHBlci5jb21wb25lbnQuY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIENhbGVuZGFyV3JhcHBlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQFZpZXdDaGlsZChNYXRDYWxlbmRhcilcclxuICBtYXRDYWxlbmRhcjogTWF0Q2FsZW5kYXI8RGF0ZT47XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHJlYWRvbmx5IHNlbGVjdGVkRGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xyXG5cclxuICBkYXRlRm9ybWF0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2VsZWN0ZWREYXRlOiBEYXRlO1xyXG4gIEBJbnB1dCgpIHByZWZpeExhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbWluRGF0ZTogRGF0ZTtcclxuICBASW5wdXQoKSBtYXhEYXRlOiBEYXRlO1xyXG4gIHdlZWtlbmRGaWx0ZXIgPSAoZDogRGF0ZSkgPT4gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmVTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmRhdGVGb3JtYXQgPSBjb25maWdTdG9yZS5uZ3hEcnBPcHRpb25zLmZvcm1hdDtcclxuICAgIGlmIChjb25maWdTdG9yZS5uZ3hEcnBPcHRpb25zLmV4Y2x1ZGVXZWVrZW5kcykge1xyXG4gICAgICB0aGlzLndlZWtlbmRGaWx0ZXIgPSAoZDogRGF0ZSk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIGNvbnN0IGRheSA9IGQuZ2V0RGF5KCk7XHJcbiAgICAgICAgcmV0dXJuIGRheSAhPT0gMCAmJiBkYXkgIT09IDY7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAvLyBOZWNlc3NhcnkgdG8gZm9yY2UgdmlldyByZWZyZXNoXHJcbiAgICB0aGlzLm1hdENhbGVuZGFyLmFjdGl2ZURhdGUgPSBjaGFuZ2VzLnNlbGVjdGVkRGF0ZS5jdXJyZW50VmFsdWU7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdGVkQ2hhbmdlKGRhdGUpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWREYXRlQ2hhbmdlLmVtaXQoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBvblllYXJTZWxlY3RlZChlKSB7fVxyXG5cclxuICBvblVzZXJTZWxlY3Rpb24oZSkge31cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQcmVzZXRJdGVtIH0gZnJvbSAnLi4vbW9kZWwvbW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYXQtZHJwLXByZXNldHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wcmVzZXRzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wcmVzZXRzLmNvbXBvbmVudC5jc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJlc2V0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KClcclxuICBwcmVzZXRzOiBBcnJheTxQcmVzZXRJdGVtPjtcclxuICBAT3V0cHV0KClcclxuICByZWFkb25seSBwcmVzZXRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbiAgc2V0UHJlc2V0UGVyaW9kKGV2ZW50KSB7XHJcbiAgICB0aGlzLnByZXNldENoYW5nZWQuZW1pdChldmVudCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5neE1hdERycENvbXBvbmVudCB9IGZyb20gJy4vbmd4LW1hdC1kcnAvbmd4LW1hdC1kcnAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGlja2VyT3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4vcGlja2VyLW92ZXJsYXkvcGlja2VyLW92ZXJsYXkuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBNYXREYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XHJcbmltcG9ydCB7IE1hdE5hdGl2ZURhdGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcclxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuXHJcbmltcG9ydCB7IENhbGVuZGFyV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItd3JhcHBlci9jYWxlbmRhci13cmFwcGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByZXNldHNDb21wb25lbnQgfSBmcm9tICcuL3ByZXNldHMvcHJlc2V0cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEQVRFIH0gZnJvbSAnLi9zZXJ2aWNlcy9yYW5nZS1zdG9yZS5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXHJcbiAgICBPdmVybGF5TW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE5neE1hdERycENvbXBvbmVudCxcclxuICAgIENhbGVuZGFyV3JhcHBlckNvbXBvbmVudCxcclxuICAgIFBpY2tlck92ZXJsYXlDb21wb25lbnQsXHJcbiAgICBQcmVzZXRzQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtwcm92aWRlOiBEQVRFLCB1c2VWYWx1ZTogbmV3IERhdGUoKX1cclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1BpY2tlck92ZXJsYXlDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtOZ3hNYXREcnBDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hNYXREcnBNb2R1bGUgeyB9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFLQSxNQUFhLElBQUksR0FBRyxJQUFJLGNBQWMsQ0FBTyxNQUFNLENBQUM7QUFHcEQsTUFBYSxpQkFBaUI7Ozs7O0lBRzVCLFlBQ3dCLFNBQWUsRUFDZixPQUFhO1FBRGIsY0FBUyxHQUFULFNBQVMsQ0FBTTtRQUNmLFlBQU8sR0FBUCxPQUFPLENBQU07UUFKckMsaUJBQVksR0FBbUIsSUFBSSxPQUFPLEVBQVMsQ0FBQztLQUtoRDs7Ozs7OztJQU1KLElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN2Qjs7Ozs7OztJQU1ELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNyQjs7Ozs7O0lBRUQsV0FBVyxDQUFDLFdBQWlCLElBQUksQ0FBQyxTQUFTLEVBQUUsU0FBZSxJQUFJLENBQUMsT0FBTztRQUN0RSxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENB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