import { Injectable, Inject, InjectionToken, Component, ViewEncapsulation, Injector, ViewChild, Output, EventEmitter, Input, ChangeDetectionStrategy, ChangeDetectorRef, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { __assign } from 'tslib';
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
var DATE = new InjectionToken('date');
var RangeStoreService = /** @class */ (function () {
    function RangeStoreService(_fromDate, _toDate) {
        this._fromDate = _fromDate;
        this._toDate = _toDate;
        this.rangeUpdate$ = new Subject();
    }
    Object.defineProperty(RangeStoreService.prototype, "fromDate", {
        /* set fromDate(fromDate:Date) {
          this._fromDate = fromDate;
        } */
        get: /* set fromDate(fromDate:Date) {
            this._fromDate = fromDate;
          } */
        /**
         * @return {?}
         */
        function () {
            return this._fromDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeStoreService.prototype, "toDate", {
        /* set toDate(toDate:Date) {
          this._toDate = toDate;
        } */
        get: /* set toDate(toDate:Date) {
            this._toDate = toDate;
          } */
        /**
         * @return {?}
         */
        function () {
            return this._toDate;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} fromDate
     * @param {?=} toDate
     * @return {?}
     */
    RangeStoreService.prototype.updateRange = /**
     * @param {?=} fromDate
     * @param {?=} toDate
     * @return {?}
     */
    function (fromDate, toDate) {
        if (fromDate === void 0) { fromDate = this._fromDate; }
        if (toDate === void 0) { toDate = this._toDate; }
        this._fromDate = fromDate;
        this._toDate = toDate;
        this.rangeUpdate$.next({ fromDate: this._fromDate, toDate: this._toDate });
    };
    RangeStoreService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    RangeStoreService.ctorParameters = function () { return [
        { type: Date, decorators: [{ type: Inject, args: [DATE,] }] },
        { type: Date, decorators: [{ type: Inject, args: [DATE,] }] }
    ]; };
    return RangeStoreService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConfigStoreService = /** @class */ (function () {
    function ConfigStoreService() {
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
    Object.defineProperty(ConfigStoreService.prototype, "ngxDrpOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ngxDrpOptions;
        },
        set: /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            this._ngxDrpOptions = __assign({}, this.defaultOptions, options);
        },
        enumerable: true,
        configurable: true
    });
    ConfigStoreService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConfigStoreService.ctorParameters = function () { return []; };
    return ConfigStoreService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var pickerOverlayAnimations = {
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
var PickerOverlayComponent = /** @class */ (function () {
    function PickerOverlayComponent(rangeStoreService, configStoreService, overlayRef) {
        this.rangeStoreService = rangeStoreService;
        this.configStoreService = configStoreService;
        this.overlayRef = overlayRef;
        this.presets = [];
    }
    /**
     * @return {?}
     */
    PickerOverlayComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _a, _b;
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
        (_a = this.configStoreService.ngxDrpOptions.fromMinMax, this.fromMinDate = _a.fromDate, this.fromMaxDate = _a.toDate);
        (_b = this.configStoreService.ngxDrpOptions.toMinMax, this.toMinDate = _b.fromDate, this.toMaxDate = _b.toDate);
        this.setSingleDate(this.configStoreService.ngxDrpOptions.singleDate);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    PickerOverlayComponent.prototype.updateFromDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.fromDate = date;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    PickerOverlayComponent.prototype.updateToDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.toDate = date;
    };
    /**
     * @param {?} presetItem
     * @return {?}
     */
    PickerOverlayComponent.prototype.updateRangeByPreset = /**
     * @param {?} presetItem
     * @return {?}
     */
    function (presetItem) {
        this.updateFromDate(new Date(presetItem.range.fromDate));
        this.updateToDate(new Date(presetItem.range.toDate));
        // if (this.applyOnPresetClick) {
        //   this.applyNewDates(null);
        // }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    PickerOverlayComponent.prototype.applyNewDates = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.rangeStoreService.updateRange(this.fromDate, this.configStoreService.ngxDrpOptions.singleDate ? null : this.toDate);
        this.disposeOverLay();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    PickerOverlayComponent.prototype.addEndDate = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.configStoreService.ngxDrpOptions.singleDate = !this.configStoreService.ngxDrpOptions.singleDate;
        this.setSingleDate(this.configStoreService.ngxDrpOptions.singleDate);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    PickerOverlayComponent.prototype.discardNewDates = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // this.rangeStoreService.updateRange();
        this.disposeOverLay();
    };
    /**
     * @private
     * @return {?}
     */
    PickerOverlayComponent.prototype.disposeOverLay = /**
     * @private
     * @return {?}
     */
    function () {
        this.overlayRef.dispose();
    };
    /**
     * @private
     * @param {?} singleDate
     * @return {?}
     */
    PickerOverlayComponent.prototype.setSingleDate = /**
     * @private
     * @param {?} singleDate
     * @return {?}
     */
    function (singleDate) {
        this.singleDate = singleDate;
        this.rangeLabel = this.getRangeLabel(singleDate);
    };
    /**
     * @private
     * @param {?} singleDate
     * @return {?}
     */
    PickerOverlayComponent.prototype.getRangeLabel = /**
     * @private
     * @param {?} singleDate
     * @return {?}
     */
    function (singleDate) {
        if (!!singleDate) {
            return this.configStoreService.ngxDrpOptions.addEndDateLabel || 'Add End-Date';
        }
        else {
            return this.configStoreService.ngxDrpOptions.removeEndDateLabel || 'Remove End-Date';
        }
    };
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
    PickerOverlayComponent.ctorParameters = function () { return [
        { type: RangeStoreService },
        { type: ConfigStoreService },
        { type: OverlayRef }
    ]; };
    return PickerOverlayComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_CONFIG = {
    panelClass: 'ngx-mat-drp-overlay',
    hasBackdrop: true,
    backdropClass: 'ngx-mat-drp-overlay-backdrop',
    shouldCloseOnBackdropClick: true
};
var CalendarOverlayService = /** @class */ (function () {
    function CalendarOverlayService(overlay, injector) {
        this.overlay = overlay;
        this.injector = injector;
    }
    /**
     * @param {?=} config
     * @param {?=} hostElemRef
     * @return {?}
     */
    CalendarOverlayService.prototype.open = /**
     * @param {?=} config
     * @param {?=} hostElemRef
     * @return {?}
     */
    function (config, hostElemRef) {
        if (config === void 0) { config = {}; }
        this.hostElemRef = hostElemRef;
        /** @type {?} */
        var overlayConfig = __assign({}, DEFAULT_CONFIG, config);
        /** @type {?} */
        var overlayRef = this.createOverlay(overlayConfig);
        /** @type {?} */
        var portalInjector = this.createInjector(overlayRef);
        /** @type {?} */
        var calendarPortal = new ComponentPortal(PickerOverlayComponent, null, portalInjector);
        overlayRef.attach(calendarPortal);
        overlayRef
            .backdropClick()
            .pipe(takeWhile(function () { return overlayConfig.shouldCloseOnBackdropClick; }))
            .subscribe(function () { return overlayRef.dispose(); });
        return overlayRef;
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    CalendarOverlayService.prototype.createOverlay = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var overlayConfig = this.getOverlayConfig(config);
        return this.overlay.create(overlayConfig);
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    CalendarOverlayService.prototype.getOverlayConfig = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var positionStrategy = this.overlay
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
        var overlayConfig = new OverlayConfig({
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass,
            panelClass: config.panelClass,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: positionStrategy
        });
        return overlayConfig;
    };
    /**
     * @private
     * @param {?} overlayRef
     * @return {?}
     */
    CalendarOverlayService.prototype.createInjector = /**
     * @private
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        /** @type {?} */
        var injectionTokens = new WeakMap();
        injectionTokens.set(OverlayRef, overlayRef);
        return new PortalInjector(this.injector, injectionTokens);
    };
    CalendarOverlayService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CalendarOverlayService.ctorParameters = function () { return [
        { type: Overlay },
        { type: Injector }
    ]; };
    return CalendarOverlayService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxMatDrpComponent = /** @class */ (function () {
    function NgxMatDrpComponent(changeDetectionRef, calendarOverlayService, rangeStoreService, configStoreService, datePipe) {
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
    NgxMatDrpComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.configStoreService.ngxDrpOptions = this.options;
        this.options.placeholder = this.options.placeholder || 'Choose a date';
        this.rangeUpdate$ = this.rangeStoreService.rangeUpdate$.subscribe(function (range) {
            /** @type {?} */
            var from = _this.formatToDateString(range.fromDate, _this.options.format);
            /** @type {?} */
            var to = _this.formatToDateString(range.toDate, _this.options.format);
            if (_this.configStoreService.ngxDrpOptions.singleDate) {
                _this.selectedDateRange = "" + from;
            }
            else {
                _this.selectedDateRange = from + " - " + to;
            }
            _this.selectedDateRangeChanged.emit(range);
        });
        this.rangeStoreService.updateRange(this.options.range.fromDate, this.options.range.toDate);
        this.changeDetectionRef.detectChanges();
    };
    /**
     * @return {?}
     */
    NgxMatDrpComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.rangeUpdate$) {
            this.rangeUpdate$.unsubscribe();
        }
    };
    /**
     * @private
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    NgxMatDrpComponent.prototype.formatToDateString = /**
     * @private
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    function (date, format) {
        return this.datePipe.transform(date, format);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxMatDrpComponent.prototype.openCalendar = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var overlayRef = this.calendarOverlayService.open(this.options.calendarOverlayConfig, this.calendarInput);
    };
    /**
     * @param {?} range
     * @return {?}
     */
    NgxMatDrpComponent.prototype.resetDates = /**
     * @param {?} range
     * @return {?}
     */
    function (range) {
        this.rangeStoreService.updateRange(range.fromDate, range.toDate);
    };
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
    NgxMatDrpComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: CalendarOverlayService },
        { type: RangeStoreService },
        { type: ConfigStoreService },
        { type: DatePipe }
    ]; };
    NgxMatDrpComponent.propDecorators = {
        calendarInput: [{ type: ViewChild, args: ['calendarInput',] }],
        selectedDateRangeChanged: [{ type: Output }],
        options: [{ type: Input }]
    };
    return NgxMatDrpComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PresetsComponent = /** @class */ (function () {
    function PresetsComponent() {
        this.presetChanged = new EventEmitter();
    }
    /**
     * @return {?}
     */
    PresetsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    PresetsComponent.prototype.setPresetPeriod = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.presetChanged.emit(event);
    };
    PresetsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mat-drp-presets',
                    template: "<div>\r\n  <ul class=\"ngx-mat-drp-presets-list\">\r\n    <li *ngFor=\"let preset of presets\" (click)=\"setPresetPeriod(preset)\"> {{preset.presetLabel}} </li>\r\n  </ul>\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".ngx-mat-drp-presets-list{list-style-type:none;margin:0;padding:0}.ngx-mat-drp-presets-list li{margin:5px 0;padding:4%;cursor:pointer;background:#fafafa;color:#3f51b5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ngx-mat-drp-presets-list li:hover{background:#3f51b5;color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    PresetsComponent.ctorParameters = function () { return []; };
    PresetsComponent.propDecorators = {
        presets: [{ type: Input }],
        presetChanged: [{ type: Output }]
    };
    return PresetsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdC1kYXRlcmFuZ2UtcGlja2VyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtbWF0LWRhdGVyYW5nZS1waWNrZXIvc3JjL2FwcC9tb2R1bGVzL25neC1tYXQtZHJwL3NlcnZpY2VzL3JhbmdlLXN0b3JlLnNlcnZpY2UudHMiLCJuZzovL25neC1tYXQtZGF0ZXJhbmdlLXBpY2tlci9zcmMvYXBwL21vZHVsZXMvbmd4LW1hdC1kcnAvc2VydmljZXMvY29uZmlnLXN0b3JlLnNlcnZpY2UudHMiLCJuZzovL25neC1tYXQtZGF0ZXJhbmdlLXBpY2tlci9zcmMvYXBwL21vZHVsZXMvbmd4LW1hdC1kcnAvcGlja2VyLW92ZXJsYXkvcGlja2VyLW92ZXJsYXkuYW5pbWF0aW9ucy50cyIsIm5nOi8vbmd4LW1hdC1kYXRlcmFuZ2UtcGlja2VyL3NyYy9hcHAvbW9kdWxlcy9uZ3gtbWF0LWRycC9waWNrZXItb3ZlcmxheS9waWNrZXItb3ZlcmxheS5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXQtZGF0ZXJhbmdlLXBpY2tlci9zcmMvYXBwL21vZHVsZXMvbmd4LW1hdC1kcnAvc2VydmljZXMvY2FsZW5kYXItb3ZlcmxheS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtbWF0LWRhdGVyYW5nZS1waWNrZXIvc3JjL2FwcC9tb2R1bGVzL25neC1tYXQtZHJwL25neC1tYXQtZHJwL25neC1tYXQtZHJwLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdC1kYXRlcmFuZ2UtcGlja2VyL3NyYy9hcHAvbW9kdWxlcy9uZ3gtbWF0LWRycC9jYWxlbmRhci13cmFwcGVyL2NhbGVuZGFyLXdyYXBwZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0LWRhdGVyYW5nZS1waWNrZXIvc3JjL2FwcC9tb2R1bGVzL25neC1tYXQtZHJwL3ByZXNldHMvcHJlc2V0cy5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXQtZGF0ZXJhbmdlLXBpY2tlci9zcmMvYXBwL21vZHVsZXMvbmd4LW1hdC1kcnAvbmd4LW1hdC1kcnAubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmFuZ2UgfSBmcm9tICcuLi9tb2RlbC9tb2RlbCc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuLyogaW1wb3J0IHsgREFURSB9IGZyb20gJy4uL25neC1kcnAubW9kdWxlJzsgKi9cclxuXHJcbmV4cG9ydCBjb25zdCBEQVRFID0gbmV3IEluamVjdGlvblRva2VuPERhdGU+KCdkYXRlJyk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSYW5nZVN0b3JlU2VydmljZSB7XHJcbiAgcmFuZ2VVcGRhdGUkOiBTdWJqZWN0PFJhbmdlPiA9IG5ldyBTdWJqZWN0PFJhbmdlPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoREFURSkgcHJpdmF0ZSBfZnJvbURhdGU6IERhdGUsXHJcbiAgICBASW5qZWN0KERBVEUpIHByaXZhdGUgX3RvRGF0ZTogRGF0ZVxyXG4gICkge31cclxuXHJcbiAgLyogc2V0IGZyb21EYXRlKGZyb21EYXRlOkRhdGUpIHtcclxuICAgIHRoaXMuX2Zyb21EYXRlID0gZnJvbURhdGU7XHJcbiAgfSAqL1xyXG5cclxuICBnZXQgZnJvbURhdGUoKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZnJvbURhdGU7XHJcbiAgfVxyXG5cclxuICAvKiBzZXQgdG9EYXRlKHRvRGF0ZTpEYXRlKSB7XHJcbiAgICB0aGlzLl90b0RhdGUgPSB0b0RhdGU7XHJcbiAgfSAqL1xyXG5cclxuICBnZXQgdG9EYXRlKCk6IERhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RvRGF0ZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVJhbmdlKGZyb21EYXRlOiBEYXRlID0gdGhpcy5fZnJvbURhdGUsIHRvRGF0ZTogRGF0ZSA9IHRoaXMuX3RvRGF0ZSkge1xyXG4gICAgdGhpcy5fZnJvbURhdGUgPSBmcm9tRGF0ZTtcclxuICAgIHRoaXMuX3RvRGF0ZSA9IHRvRGF0ZTtcclxuICAgIHRoaXMucmFuZ2VVcGRhdGUkLm5leHQoeyBmcm9tRGF0ZTogdGhpcy5fZnJvbURhdGUsIHRvRGF0ZTogdGhpcy5fdG9EYXRlIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neERycE9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbC9tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb25maWdTdG9yZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX25neERycE9wdGlvbnM6IE5neERycE9wdGlvbnM7XHJcbiAgcHJpdmF0ZSBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIGV4Y2x1ZGVXZWVrZW5kczogZmFsc2UsXHJcbiAgICBhbmltYXRpb246IHRydWUsXHJcbiAgICBsb2NhbGU6ICdlbi1VUycsXHJcbiAgICBmcm9tTWluTWF4OiB7IGZyb21EYXRlOiBudWxsLCB0b0RhdGU6IG51bGwgfSxcclxuICAgIHRvTWluTWF4OiB7IGZyb21EYXRlOiBudWxsLCB0b0RhdGU6IG51bGwgfSxcclxuICAgIHJhbmdlTGFiZWw6ICdBZGQgRW5kLURhdGUnLFxyXG4gICAgc2luZ2xlRGF0ZTogdHJ1ZSwgLy8gZmFsc2UgPSBkYXRlUmFuZ2VcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIGdldCBuZ3hEcnBPcHRpb25zKCk6IE5neERycE9wdGlvbnMge1xyXG4gICAgcmV0dXJuIHRoaXMuX25neERycE9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBzZXQgbmd4RHJwT3B0aW9ucyhvcHRpb25zOiBOZ3hEcnBPcHRpb25zKSB7XHJcbiAgICB0aGlzLl9uZ3hEcnBPcHRpb25zID0geyAuLi50aGlzLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgYW5pbWF0ZSxcclxuICBzdGF0ZSxcclxuICBzdHlsZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIHRyaWdnZXIsXHJcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxyXG4gIGdyb3VwXHJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5leHBvcnQgY29uc3QgcGlja2VyT3ZlcmxheUFuaW1hdGlvbnM6IHtcclxuICByZWFkb25seSB0cmFuc2Zvcm1QYW5lbDogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhO1xyXG59ID0ge1xyXG4gIC8qKiBUcmFuc2Zvcm1zIHRoZSBoZWlnaHQgb2YgdGhlIHBpY2tlciBvdmVybGF5IGNvbnRlbnQuICovXHJcbiAgdHJhbnNmb3JtUGFuZWw6IHRyaWdnZXIoJ3RyYW5zZm9ybVBpY2tlck92ZXJsYXknLCBbXHJcbiAgICBzdGF0ZSgndm9pZCcsIHN0eWxlKHtvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgxLCAwKSd9KSksXHJcbiAgICBzdGF0ZSgnZW50ZXInLCBzdHlsZSh7b3BhY2l0eTogMSwgdHJhbnNmb3JtOiAnc2NhbGUoMSwgMSknfSkpLFxyXG4gICAgdHJhbnNpdGlvbigndm9pZCA9PiBlbnRlcicsIGdyb3VwKFtcclxuICAgICAgYW5pbWF0ZSgnNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSknKVxyXG4gICAgXSkpLFxyXG4gICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgYW5pbWF0ZSgnMTAwbXMgbGluZWFyJywgc3R5bGUoe29wYWNpdHk6IDB9KSkpXHJcbiAgXSlcclxufTtcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByZXNldEl0ZW0sIE5neERycE9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbC9tb2RlbCc7XHJcbmltcG9ydCB7IFJhbmdlU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcmFuZ2Utc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbmZpZ1N0b3JlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbmZpZy1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgcGlja2VyT3ZlcmxheUFuaW1hdGlvbnMgfSBmcm9tICcuL3BpY2tlci1vdmVybGF5LmFuaW1hdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtbWF0LWRycC1waWNrZXItb3ZlcmxheScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BpY2tlci1vdmVybGF5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9waWNrZXItb3ZlcmxheS5jb21wb25lbnQuY3NzJ10sXHJcbiAgYW5pbWF0aW9uczogW3BpY2tlck92ZXJsYXlBbmltYXRpb25zLnRyYW5zZm9ybVBhbmVsXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaWNrZXJPdmVybGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBmcm9tRGF0ZTogRGF0ZTtcclxuICB0b0RhdGU6IERhdGU7XHJcbiAgZnJvbU1pbkRhdGU6IERhdGU7XHJcbiAgZnJvbU1heERhdGU6IERhdGU7XHJcbiAgdG9NaW5EYXRlOiBEYXRlO1xyXG4gIHRvTWF4RGF0ZTogRGF0ZTtcclxuICBwcmVzZXRzOiBBcnJheTxQcmVzZXRJdGVtPiA9IFtdO1xyXG4gIHN0YXJ0RGF0ZVByZWZpeDogc3RyaW5nO1xyXG4gIGVuZERhdGVQcmVmaXg6IHN0cmluZztcclxuICBhcHBseUxhYmVsOiBzdHJpbmc7XHJcbiAgcmFuZ2VMYWJlbDogc3RyaW5nO1xyXG4gIGNhbmNlbExhYmVsOiBzdHJpbmc7XHJcbiAgc2hvdWxkQW5pbWF0ZTogc3RyaW5nO1xyXG4gIHNpbmdsZURhdGU6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByYW5nZVN0b3JlU2VydmljZTogUmFuZ2VTdG9yZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlU2VydmljZTogQ29uZmlnU3RvcmVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZnJvbURhdGUgPSB0aGlzLnJhbmdlU3RvcmVTZXJ2aWNlLmZyb21EYXRlO1xyXG4gICAgdGhpcy50b0RhdGUgPSB0aGlzLnJhbmdlU3RvcmVTZXJ2aWNlLnRvRGF0ZTtcclxuICAgIHRoaXMuc3RhcnREYXRlUHJlZml4ID0gdGhpcy5jb25maWdTdG9yZVNlcnZpY2Uubmd4RHJwT3B0aW9ucy5zdGFydERhdGVQcmVmaXggfHwgJ0ZST006JztcclxuICAgIHRoaXMuZW5kRGF0ZVByZWZpeCA9IHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMuZW5kRGF0ZVByZWZpeCB8fCAnVE86JztcclxuICAgIHRoaXMuYXBwbHlMYWJlbCA9IHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMuYXBwbHlMYWJlbCB8fCAnQXBwbHknO1xyXG4gICAgdGhpcy5jYW5jZWxMYWJlbCA9IHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMuY2FuY2VsTGFiZWwgfHwgJ0NhbmNlbCc7XHJcbiAgICB0aGlzLnByZXNldHMgPSB0aGlzLmNvbmZpZ1N0b3JlU2VydmljZS5uZ3hEcnBPcHRpb25zLnByZXNldHM7XHJcbiAgICB0aGlzLnNob3VsZEFuaW1hdGUgPSB0aGlzLmNvbmZpZ1N0b3JlU2VydmljZS5uZ3hEcnBPcHRpb25zLmFuaW1hdGlvblxyXG4gICAgICA/ICdlbnRlcidcclxuICAgICAgOiAnbm9vcCc7XHJcbiAgICAoe1xyXG4gICAgICBmcm9tRGF0ZTogdGhpcy5mcm9tTWluRGF0ZSxcclxuICAgICAgdG9EYXRlOiB0aGlzLmZyb21NYXhEYXRlXHJcbiAgICB9ID0gdGhpcy5jb25maWdTdG9yZVNlcnZpY2Uubmd4RHJwT3B0aW9ucy5mcm9tTWluTWF4KTtcclxuICAgICh7XHJcbiAgICAgIGZyb21EYXRlOiB0aGlzLnRvTWluRGF0ZSxcclxuICAgICAgdG9EYXRlOiB0aGlzLnRvTWF4RGF0ZVxyXG4gICAgfSA9IHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMudG9NaW5NYXgpO1xyXG4gICAgdGhpcy5zZXRTaW5nbGVEYXRlKHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMuc2luZ2xlRGF0ZSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVGcm9tRGF0ZShkYXRlKSB7XHJcbiAgICB0aGlzLmZyb21EYXRlID0gZGF0ZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRvRGF0ZShkYXRlKSB7XHJcbiAgICB0aGlzLnRvRGF0ZSA9IGRhdGU7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVSYW5nZUJ5UHJlc2V0KHByZXNldEl0ZW06IFByZXNldEl0ZW0pIHtcclxuICAgIHRoaXMudXBkYXRlRnJvbURhdGUobmV3IERhdGUocHJlc2V0SXRlbS5yYW5nZS5mcm9tRGF0ZSkpO1xyXG4gICAgdGhpcy51cGRhdGVUb0RhdGUobmV3IERhdGUocHJlc2V0SXRlbS5yYW5nZS50b0RhdGUpKTtcclxuICAgIC8vIGlmICh0aGlzLmFwcGx5T25QcmVzZXRDbGljaykge1xyXG4gICAgLy8gICB0aGlzLmFwcGx5TmV3RGF0ZXMobnVsbCk7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICBhcHBseU5ld0RhdGVzKGUpIHtcclxuICAgIHRoaXMucmFuZ2VTdG9yZVNlcnZpY2UudXBkYXRlUmFuZ2UodGhpcy5mcm9tRGF0ZSwgdGhpcy5jb25maWdTdG9yZVNlcnZpY2Uubmd4RHJwT3B0aW9ucy5zaW5nbGVEYXRlID8gbnVsbCA6IHRoaXMudG9EYXRlKTtcclxuICAgIHRoaXMuZGlzcG9zZU92ZXJMYXkoKTtcclxuICB9XHJcblxyXG4gIGFkZEVuZERhdGUoZSkge1xyXG4gICAgdGhpcy5jb25maWdTdG9yZVNlcnZpY2Uubmd4RHJwT3B0aW9ucy5zaW5nbGVEYXRlID0gIXRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMuc2luZ2xlRGF0ZTtcclxuICAgIHRoaXMuc2V0U2luZ2xlRGF0ZSh0aGlzLmNvbmZpZ1N0b3JlU2VydmljZS5uZ3hEcnBPcHRpb25zLnNpbmdsZURhdGUpO1xyXG4gIH1cclxuICBkaXNjYXJkTmV3RGF0ZXMoZSkge1xyXG4gICAgLy8gdGhpcy5yYW5nZVN0b3JlU2VydmljZS51cGRhdGVSYW5nZSgpO1xyXG4gICAgdGhpcy5kaXNwb3NlT3ZlckxheSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkaXNwb3NlT3ZlckxheSgpIHtcclxuICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFNpbmdsZURhdGUoc2luZ2xlRGF0ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5zaW5nbGVEYXRlID0gc2luZ2xlRGF0ZTtcclxuICAgIHRoaXMucmFuZ2VMYWJlbCA9IHRoaXMuZ2V0UmFuZ2VMYWJlbChzaW5nbGVEYXRlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBnZXRSYW5nZUxhYmVsKHNpbmdsZURhdGU6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgaWYgKCEhc2luZ2xlRGF0ZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25maWdTdG9yZVNlcnZpY2Uubmd4RHJwT3B0aW9ucy5hZGRFbmREYXRlTGFiZWwgfHwgJ0FkZCBFbmQtRGF0ZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25maWdTdG9yZVNlcnZpY2Uubmd4RHJwT3B0aW9ucy5yZW1vdmVFbmREYXRlTGFiZWwgfHwgJ1JlbW92ZSBFbmQtRGF0ZSc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEVsZW1lbnRSZWYsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlDb25maWcsIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCwgUG9ydGFsSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgTmd4RHJwT3B0aW9ucywgQ2FsZW5kYXJPdmVybGF5Q29uZmlnIH0gZnJvbSAnLi4vbW9kZWwvbW9kZWwnO1xyXG5pbXBvcnQgeyB0YWtlV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFBpY2tlck92ZXJsYXlDb21wb25lbnQgfSBmcm9tICcuLi9waWNrZXItb3ZlcmxheS9waWNrZXItb3ZlcmxheS5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgREVGQVVMVF9DT05GSUc6IENhbGVuZGFyT3ZlcmxheUNvbmZpZyA9IHtcclxuICBwYW5lbENsYXNzOiAnbmd4LW1hdC1kcnAtb3ZlcmxheScsXHJcbiAgaGFzQmFja2Ryb3A6IHRydWUsXHJcbiAgYmFja2Ryb3BDbGFzczogJ25neC1tYXQtZHJwLW92ZXJsYXktYmFja2Ryb3AnLFxyXG4gIHNob3VsZENsb3NlT25CYWNrZHJvcENsaWNrOiB0cnVlXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYWxlbmRhck92ZXJsYXlTZXJ2aWNlIHtcclxuICBwcml2YXRlIGhvc3RFbGVtUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxyXG5cclxuICBvcGVuKFxyXG4gICAgY29uZmlnOiBDYWxlbmRhck92ZXJsYXlDb25maWcgPSB7fSxcclxuICAgIGhvc3RFbGVtUmVmOiBFbGVtZW50UmVmXHJcbiAgKTogT3ZlcmxheVJlZiB7XHJcbiAgICB0aGlzLmhvc3RFbGVtUmVmID0gaG9zdEVsZW1SZWY7XHJcbiAgICBjb25zdCBvdmVybGF5Q29uZmlnID0geyAuLi5ERUZBVUxUX0NPTkZJRywgLi4uY29uZmlnIH07XHJcbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5jcmVhdGVPdmVybGF5KG92ZXJsYXlDb25maWcpO1xyXG4gICAgY29uc3QgcG9ydGFsSW5qZWN0b3IgPSB0aGlzLmNyZWF0ZUluamVjdG9yKG92ZXJsYXlSZWYpO1xyXG4gICAgY29uc3QgY2FsZW5kYXJQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKFxyXG4gICAgICBQaWNrZXJPdmVybGF5Q29tcG9uZW50LFxyXG4gICAgICBudWxsLFxyXG4gICAgICBwb3J0YWxJbmplY3RvclxyXG4gICAgKTtcclxuICAgIG92ZXJsYXlSZWYuYXR0YWNoKGNhbGVuZGFyUG9ydGFsKTtcclxuXHJcbiAgICBvdmVybGF5UmVmXHJcbiAgICAgIC5iYWNrZHJvcENsaWNrKClcclxuICAgICAgLnBpcGUodGFrZVdoaWxlKCgpID0+IG92ZXJsYXlDb25maWcuc2hvdWxkQ2xvc2VPbkJhY2tkcm9wQ2xpY2spKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IG92ZXJsYXlSZWYuZGlzcG9zZSgpKTtcclxuXHJcbiAgICByZXR1cm4gb3ZlcmxheVJlZjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlT3ZlcmxheShjb25maWc6IENhbGVuZGFyT3ZlcmxheUNvbmZpZyk6IE92ZXJsYXlSZWYge1xyXG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IHRoaXMuZ2V0T3ZlcmxheUNvbmZpZyhjb25maWcpO1xyXG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheS5jcmVhdGUob3ZlcmxheUNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE92ZXJsYXlDb25maWcoY29uZmlnOiBDYWxlbmRhck92ZXJsYXlDb25maWcpOiBPdmVybGF5Q29uZmlnIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcclxuICAgICAgLnBvc2l0aW9uKClcclxuICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5ob3N0RWxlbVJlZilcclxuICAgICAgLndpdGhGbGV4aWJsZURpbWVuc2lvbnMoZmFsc2UpXHJcbiAgICAgIC53aXRoVmlld3BvcnRNYXJnaW4oOClcclxuICAgICAgLndpdGhEZWZhdWx0T2Zmc2V0WSgxMilcclxuICAgICAgLndpdGhQb3NpdGlvbnMoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG9yaWdpblg6ICdzdGFydCcsXHJcbiAgICAgICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcclxuICAgICAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxyXG4gICAgICAgICAgb3ZlcmxheVk6ICd0b3AnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBvcmlnaW5YOiAnc3RhcnQnLFxyXG4gICAgICAgICAgb3JpZ2luWTogJ3RvcCcsXHJcbiAgICAgICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcclxuICAgICAgICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgb3JpZ2luWDogJ2VuZCcsXHJcbiAgICAgICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcclxuICAgICAgICAgIG92ZXJsYXlYOiAnZW5kJyxcclxuICAgICAgICAgIG92ZXJsYXlZOiAndG9wJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgb3JpZ2luWDogJ2VuZCcsXHJcbiAgICAgICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgICAgIG92ZXJsYXlYOiAnZW5kJyxcclxuICAgICAgICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xyXG4gICAgICAgIH1cclxuICAgICAgXSk7XHJcblxyXG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcclxuICAgICAgaGFzQmFja2Ryb3A6IGNvbmZpZy5oYXNCYWNrZHJvcCxcclxuICAgICAgYmFja2Ryb3BDbGFzczogY29uZmlnLmJhY2tkcm9wQ2xhc3MsXHJcbiAgICAgIHBhbmVsQ2xhc3M6IGNvbmZpZy5wYW5lbENsYXNzLFxyXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKSxcclxuICAgICAgcG9zaXRpb25TdHJhdGVneVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG92ZXJsYXlDb25maWc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUluamVjdG9yKG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYpOiBQb3J0YWxJbmplY3RvciB7XHJcbiAgICBjb25zdCBpbmplY3Rpb25Ub2tlbnMgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgaW5qZWN0aW9uVG9rZW5zLnNldChPdmVybGF5UmVmLCBvdmVybGF5UmVmKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFBvcnRhbEluamVjdG9yKHRoaXMuaW5qZWN0b3IsIGluamVjdGlvblRva2Vucyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDYWxlbmRhck92ZXJsYXlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2FsZW5kYXItb3ZlcmxheS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmFuZ2VTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9yYW5nZS1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmFuZ2UsIE5neERycE9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbC9tb2RlbCc7XHJcbmltcG9ydCB7IENvbmZpZ1N0b3JlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbmZpZy1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1tYXQtZHJwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LW1hdC1kcnAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL25neC1tYXQtZHJwLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENhbGVuZGFyT3ZlcmxheVNlcnZpY2UsXHJcbiAgICBSYW5nZVN0b3JlU2VydmljZSxcclxuICAgIENvbmZpZ1N0b3JlU2VydmljZSxcclxuICAgIERhdGVQaXBlXHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TWF0RHJwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBWaWV3Q2hpbGQoJ2NhbGVuZGFySW5wdXQnKVxyXG4gIGNhbGVuZGFySW5wdXQ7XHJcbiAgQE91dHB1dCgpXHJcbiAgcmVhZG9ubHkgc2VsZWN0ZWREYXRlUmFuZ2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8UmFuZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcjxSYW5nZT4oKTtcclxuICBASW5wdXQoKVxyXG4gIG9wdGlvbnM6IE5neERycE9wdGlvbnM7XHJcbiAgcHJpdmF0ZSByYW5nZVVwZGF0ZSQ6IFN1YnNjcmlwdGlvbjtcclxuICBzZWxlY3RlZERhdGVSYW5nZSA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgY2FsZW5kYXJPdmVybGF5U2VydmljZTogQ2FsZW5kYXJPdmVybGF5U2VydmljZSxcclxuICAgIHB1YmxpYyByYW5nZVN0b3JlU2VydmljZTogUmFuZ2VTdG9yZVNlcnZpY2UsXHJcbiAgICBwdWJsaWMgY29uZmlnU3RvcmVTZXJ2aWNlOiBDb25maWdTdG9yZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmNvbmZpZ1N0b3JlU2VydmljZS5uZ3hEcnBPcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG4gICAgdGhpcy5vcHRpb25zLnBsYWNlaG9sZGVyID0gdGhpcy5vcHRpb25zLnBsYWNlaG9sZGVyIHx8ICdDaG9vc2UgYSBkYXRlJztcclxuICAgIHRoaXMucmFuZ2VVcGRhdGUkID0gdGhpcy5yYW5nZVN0b3JlU2VydmljZS5yYW5nZVVwZGF0ZSQuc3Vic2NyaWJlKHJhbmdlID0+IHtcclxuICAgICAgY29uc3QgZnJvbTogc3RyaW5nID0gdGhpcy5mb3JtYXRUb0RhdGVTdHJpbmcoXHJcbiAgICAgICAgcmFuZ2UuZnJvbURhdGUsXHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmZvcm1hdFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB0bzogc3RyaW5nID0gdGhpcy5mb3JtYXRUb0RhdGVTdHJpbmcoXHJcbiAgICAgICAgcmFuZ2UudG9EYXRlLFxyXG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JtYXRcclxuICAgICAgKTtcclxuICAgICAgaWYgKHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMuc2luZ2xlRGF0ZSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlUmFuZ2UgPSBgJHtmcm9tfWA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGVSYW5nZSA9IGAke2Zyb219IC0gJHt0b31gO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWREYXRlUmFuZ2VDaGFuZ2VkLmVtaXQocmFuZ2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5yYW5nZVN0b3JlU2VydmljZS51cGRhdGVSYW5nZShcclxuICAgICAgdGhpcy5vcHRpb25zLnJhbmdlLmZyb21EYXRlLFxyXG4gICAgICB0aGlzLm9wdGlvbnMucmFuZ2UudG9EYXRlXHJcbiAgICApO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5yYW5nZVVwZGF0ZSQpIHtcclxuICAgICAgdGhpcy5yYW5nZVVwZGF0ZSQudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0VG9EYXRlU3RyaW5nKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShkYXRlLCBmb3JtYXQpO1xyXG4gIH1cclxuXHJcbiAgb3BlbkNhbGVuZGFyKGV2ZW50KSB7XHJcbiAgICBjb25zdCBvdmVybGF5UmVmOiBPdmVybGF5UmVmID0gdGhpcy5jYWxlbmRhck92ZXJsYXlTZXJ2aWNlLm9wZW4oXHJcbiAgICAgIHRoaXMub3B0aW9ucy5jYWxlbmRhck92ZXJsYXlDb25maWcsXHJcbiAgICAgIHRoaXMuY2FsZW5kYXJJbnB1dFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXNldERhdGVzKHJhbmdlOiBSYW5nZSkge1xyXG4gICAgdGhpcy5yYW5nZVN0b3JlU2VydmljZS51cGRhdGVSYW5nZShcclxuICAgICAgcmFuZ2UuZnJvbURhdGUsXHJcbiAgICAgIHJhbmdlLnRvRGF0ZVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIE91dHB1dCxcclxuICBJbnB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0Q2FsZW5kYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcclxuaW1wb3J0IHsgQ29uZmlnU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY29uZmlnLXN0b3JlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjYWxlbmRhci13cmFwcGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2FsZW5kYXItd3JhcHBlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2FsZW5kYXItd3JhcHBlci5jb21wb25lbnQuY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIENhbGVuZGFyV3JhcHBlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQFZpZXdDaGlsZChNYXRDYWxlbmRhcilcclxuICBtYXRDYWxlbmRhcjogTWF0Q2FsZW5kYXI8RGF0ZT47XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHJlYWRvbmx5IHNlbGVjdGVkRGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xyXG5cclxuICBkYXRlRm9ybWF0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2VsZWN0ZWREYXRlOiBEYXRlO1xyXG4gIEBJbnB1dCgpIHByZWZpeExhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbWluRGF0ZTogRGF0ZTtcclxuICBASW5wdXQoKSBtYXhEYXRlOiBEYXRlO1xyXG4gIHdlZWtlbmRGaWx0ZXIgPSAoZDogRGF0ZSkgPT4gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmVTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmRhdGVGb3JtYXQgPSBjb25maWdTdG9yZS5uZ3hEcnBPcHRpb25zLmZvcm1hdDtcclxuICAgIGlmIChjb25maWdTdG9yZS5uZ3hEcnBPcHRpb25zLmV4Y2x1ZGVXZWVrZW5kcykge1xyXG4gICAgICB0aGlzLndlZWtlbmRGaWx0ZXIgPSAoZDogRGF0ZSk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIGNvbnN0IGRheSA9IGQuZ2V0RGF5KCk7XHJcbiAgICAgICAgcmV0dXJuIGRheSAhPT0gMCAmJiBkYXkgIT09IDY7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAvLyBOZWNlc3NhcnkgdG8gZm9yY2UgdmlldyByZWZyZXNoXHJcbiAgICB0aGlzLm1hdENhbGVuZGFyLmFjdGl2ZURhdGUgPSBjaGFuZ2VzLnNlbGVjdGVkRGF0ZS5jdXJyZW50VmFsdWU7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdGVkQ2hhbmdlKGRhdGUpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWREYXRlQ2hhbmdlLmVtaXQoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBvblllYXJTZWxlY3RlZChlKSB7fVxyXG5cclxuICBvblVzZXJTZWxlY3Rpb24oZSkge31cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQcmVzZXRJdGVtIH0gZnJvbSAnLi4vbW9kZWwvbW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYXQtZHJwLXByZXNldHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wcmVzZXRzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wcmVzZXRzLmNvbXBvbmVudC5jc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJlc2V0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KClcclxuICBwcmVzZXRzOiBBcnJheTxQcmVzZXRJdGVtPjtcclxuICBAT3V0cHV0KClcclxuICByZWFkb25seSBwcmVzZXRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbiAgc2V0UHJlc2V0UGVyaW9kKGV2ZW50KSB7XHJcbiAgICB0aGlzLnByZXNldENoYW5nZWQuZW1pdChldmVudCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5neE1hdERycENvbXBvbmVudCB9IGZyb20gJy4vbmd4LW1hdC1kcnAvbmd4LW1hdC1kcnAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGlja2VyT3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4vcGlja2VyLW92ZXJsYXkvcGlja2VyLW92ZXJsYXkuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBNYXREYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XHJcbmltcG9ydCB7IE1hdE5hdGl2ZURhdGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcclxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuXHJcbmltcG9ydCB7IENhbGVuZGFyV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItd3JhcHBlci9jYWxlbmRhci13cmFwcGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByZXNldHNDb21wb25lbnQgfSBmcm9tICcuL3ByZXNldHMvcHJlc2V0cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEQVRFIH0gZnJvbSAnLi9zZXJ2aWNlcy9yYW5nZS1zdG9yZS5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXHJcbiAgICBPdmVybGF5TW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE5neE1hdERycENvbXBvbmVudCxcclxuICAgIENhbGVuZGFyV3JhcHBlckNvbXBvbmVudCxcclxuICAgIFBpY2tlck92ZXJsYXlDb21wb25lbnQsXHJcbiAgICBQcmVzZXRzQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtwcm92aWRlOiBEQVRFLCB1c2VWYWx1ZTogbmV3IERhdGUoKX1cclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1BpY2tlck92ZXJsYXlDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtOZ3hNYXREcnBDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hNYXREcnBNb2R1bGUgeyB9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBS0EsSUFBYSxJQUFJLEdBQUcsSUFBSSxjQUFjLENBQU8sTUFBTSxDQUFDO0FBRXBEO0lBSUUsMkJBQ3dCLFNBQWUsRUFDZixPQUFhO1FBRGIsY0FBUyxHQUFULFNBQVMsQ0FBTTtRQUNmLFlBQU8sR0FBUCxPQUFPLENBQU07UUFKckMsaUJBQVksR0FBbUIsSUFBSSxPQUFPLEVBQVMsQ0FBQztLQUtoRDtJQU1KLHNCQUFJLHVDQUFROzs7Ozs7Ozs7O1FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7OztPQUFBO0lBTUQsc0JBQUkscUNBQU07Ozs7Ozs7Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQjs7O09BQUE7Ozs7OztJQUVELHVDQUFXOzs7OztJQUFYLFVBQVksUUFBK0IsRUFBRSxNQUEyQjtRQUE1RCx5QkFBQSxFQUFBLFdBQWlCLElBQUksQ0FBQyxTQUFTO1FBQUUsdUJBQUEs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