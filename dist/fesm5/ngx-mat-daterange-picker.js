import { DatePipe, CommonModule } from '@angular/common';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { takeWhile } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { __assign } from 'tslib';
import { animate, state, style, transition, trigger, group } from '@angular/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OverlayRef, Overlay, OverlayConfig, OverlayModule } from '@angular/cdk/overlay';
import { MatCalendar, MatDatepickerModule } from '@angular/material/datepicker';
import { Injectable, Inject, InjectionToken, Component, ViewEncapsulation, Injector, ViewChild, Output, EventEmitter, Input, ChangeDetectionStrategy, ChangeDetectorRef, NgModule } from '@angular/core';

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

//# sourceMappingURL=ngx-mat-daterange-picker.js.map