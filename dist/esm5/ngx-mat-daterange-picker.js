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

var DATE = new InjectionToken('date');
var RangeStoreService = /** @class */ (function () {
    function RangeStoreService(_fromDate, _toDate) {
        this._fromDate = _fromDate;
        this._toDate = _toDate;
        this.rangeUpdate$ = new Subject();
    }
    Object.defineProperty(RangeStoreService.prototype, "fromDate", {
        get: function () {
            return this._fromDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeStoreService.prototype, "toDate", {
        get: function () {
            return this._toDate;
        },
        enumerable: true,
        configurable: true
    });
    RangeStoreService.prototype.updateRange = function (fromDate, toDate) {
        if (fromDate === void 0) { fromDate = this._fromDate; }
        if (toDate === void 0) { toDate = this._toDate; }
        this._fromDate = fromDate;
        this._toDate = toDate;
        this.rangeUpdate$.next({ fromDate: this._fromDate, toDate: this._toDate });
    };
    return RangeStoreService;
}());
RangeStoreService.decorators = [
    { type: Injectable },
];
RangeStoreService.ctorParameters = function () { return [
    { type: Date, decorators: [{ type: Inject, args: [DATE,] }] },
    { type: Date, decorators: [{ type: Inject, args: [DATE,] }] }
]; };
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
        get: function () {
            return this._ngxDrpOptions;
        },
        set: function (options) {
            this._ngxDrpOptions = Object.assign({}, this.defaultOptions, options);
        },
        enumerable: true,
        configurable: true
    });
    return ConfigStoreService;
}());
ConfigStoreService.decorators = [
    { type: Injectable },
];
ConfigStoreService.ctorParameters = function () { return []; };
var pickerOverlayAnimations = {
    transformPanel: trigger('transformPickerOverlay', [
        state('void', style({ opacity: 0, transform: 'scale(1, 0)' })),
        state('enter', style({ opacity: 1, transform: 'scale(1, 1)' })),
        transition('void => enter', group([
            animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')
        ])),
        transition('* => void', animate('100ms linear', style({ opacity: 0 })))
    ])
};
var PickerOverlayComponent = /** @class */ (function () {
    function PickerOverlayComponent(rangeStoreService, configStoreService, overlayRef) {
        this.rangeStoreService = rangeStoreService;
        this.configStoreService = configStoreService;
        this.overlayRef = overlayRef;
        this.presets = [];
    }
    PickerOverlayComponent.prototype.ngOnInit = function () {
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
        var _a, _b;
    };
    PickerOverlayComponent.prototype.updateFromDate = function (date) {
        this.fromDate = date;
    };
    PickerOverlayComponent.prototype.updateToDate = function (date) {
        this.toDate = date;
    };
    PickerOverlayComponent.prototype.updateRangeByPreset = function (presetItem) {
        this.updateFromDate(presetItem.range.fromDate);
        this.updateToDate(presetItem.range.toDate);
    };
    PickerOverlayComponent.prototype.applyNewDates = function (e) {
        this.rangeStoreService.updateRange(this.fromDate, this.configStoreService.ngxDrpOptions.singleDate ? null : this.toDate);
        this.disposeOverLay();
    };
    PickerOverlayComponent.prototype.addEndDate = function (e) {
        this.configStoreService.ngxDrpOptions.singleDate = !this.configStoreService.ngxDrpOptions.singleDate;
        this.setSingleDate(this.configStoreService.ngxDrpOptions.singleDate);
    };
    PickerOverlayComponent.prototype.discardNewDates = function (e) {
        this.disposeOverLay();
    };
    PickerOverlayComponent.prototype.disposeOverLay = function () {
        this.overlayRef.dispose();
    };
    PickerOverlayComponent.prototype.setSingleDate = function (singleDate) {
        this.singleDate = singleDate;
        this.rangeLabel = this.getRangeLabel(singleDate);
    };
    PickerOverlayComponent.prototype.getRangeLabel = function (singleDate) {
        if (!!singleDate) {
            return this.configStoreService.ngxDrpOptions.addEndDateLabel || 'Add End-Date';
        }
        else {
            return this.configStoreService.ngxDrpOptions.removeEndDateLabel || 'Remove End-Date';
        }
    };
    return PickerOverlayComponent;
}());
PickerOverlayComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-mat-drp-picker-overlay',
                template: "<div [@transformPickerOverlay]=\"shouldAnimate\" class=\"ngx-mat-drp-calendar-container\">\n\n  <div class=\"ngx-mat-drp-calendar-item\">\n    <calendar-wrapper \n    [prefixLabel]=\"startDatePrefix\"\n    [selectedDate]=\"fromDate\"\n    [minDate]=\"fromMinDate\"\n    [maxDate]=\"fromMaxDate\"\n    (selectedDateChange)=\"updateFromDate($event)\">\n  </calendar-wrapper>\n  </div>\n  <div class=\"ngx-mat-drp-calendar-item\" *ngIf='!singleDate'>\n    <calendar-wrapper \n    [prefixLabel]=\"endDatePrefix\"\n    [selectedDate]=\"toDate\"\n    [minDate]=\"toMinDate\"\n    [maxDate]=\"toMaxDate\" \n    (selectedDateChange)=\"updateToDate($event)\">\n  </calendar-wrapper>\n  </div>\n  <div class=\"ngx-mat-drp-calendar-item\">\n    <div class=\"ngx-mat-drp-menu\">\n      <mat-drp-presets [presets]=\"presets\" (presetChanged)=\"updateRangeByPreset($event)\"></mat-drp-presets>\n      <div class=\"ngx-mat-drp-controls\">\n        <button mat-button (click)=\"addEndDate($event)\">{{rangeLabel}}</button>\n        <button mat-button (click)=\"discardNewDates($event)\" *ngIf=\"false\">{{cancelLabel}}</button>\n        <button mat-button color=\"primary\" (click)=\"applyNewDates($event)\">{{applyLabel}}</button>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [".ngx-mat-drp-calendar-container{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:distribute;justify-content:space-around;min-width:350px;min-height:300px}.ngx-mat-drp-calendar-item{-ms-flex-preferred-size:1;flex-basis:1;min-width:210px;padding:1em;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:400}.ngx-mat-drp-menu{-ms-flex-preferred-size:1;flex-basis:1;height:100%}.ngx-mat-drp-controls{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;margin:10% auto}.ngx-mat-drp-overlay{-webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background:#fff;border-radius:2px}.ngx-mat-drp-overlay-backdrop{background-color:rgba(0,0,0,.2);opacity:.2}"],
                animations: [pickerOverlayAnimations.transformPanel],
                encapsulation: ViewEncapsulation.None
            },] },
];
PickerOverlayComponent.ctorParameters = function () { return [
    { type: RangeStoreService },
    { type: ConfigStoreService },
    { type: OverlayRef }
]; };
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
    CalendarOverlayService.prototype.open = function (config, hostElemRef) {
        if (config === void 0) { config = {}; }
        this.hostElemRef = hostElemRef;
        var overlayConfig = Object.assign({}, DEFAULT_CONFIG, config);
        var overlayRef = this.createOverlay(overlayConfig);
        var portalInjector = this.createInjector(overlayRef);
        var calendarPortal = new ComponentPortal(PickerOverlayComponent, null, portalInjector);
        overlayRef.attach(calendarPortal);
        overlayRef
            .backdropClick()
            .pipe(takeWhile(function () { return overlayConfig.shouldCloseOnBackdropClick; }))
            .subscribe(function () { return overlayRef.dispose(); });
        return overlayRef;
    };
    CalendarOverlayService.prototype.createOverlay = function (config) {
        var overlayConfig = this.getOverlayConfig(config);
        return this.overlay.create(overlayConfig);
    };
    CalendarOverlayService.prototype.getOverlayConfig = function (config) {
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
        var overlayConfig = new OverlayConfig({
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass,
            panelClass: config.panelClass,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: positionStrategy
        });
        return overlayConfig;
    };
    CalendarOverlayService.prototype.createInjector = function (overlayRef) {
        var injectionTokens = new WeakMap();
        injectionTokens.set(OverlayRef, overlayRef);
        return new PortalInjector(this.injector, injectionTokens);
    };
    return CalendarOverlayService;
}());
CalendarOverlayService.decorators = [
    { type: Injectable },
];
CalendarOverlayService.ctorParameters = function () { return [
    { type: Overlay },
    { type: Injector }
]; };
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
    NgxMatDrpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configStoreService.ngxDrpOptions = this.options;
        this.options.placeholder = this.options.placeholder || 'Choose a date';
        this.rangeUpdate$ = this.rangeStoreService.rangeUpdate$.subscribe(function (range) {
            var from = _this.formatToDateString(range.fromDate, _this.options.format);
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
    NgxMatDrpComponent.prototype.ngOnDestroy = function () {
        if (this.rangeUpdate$) {
            this.rangeUpdate$.unsubscribe();
        }
    };
    NgxMatDrpComponent.prototype.formatToDateString = function (date, format) {
        return this.datePipe.transform(date, format);
    };
    NgxMatDrpComponent.prototype.openCalendar = function (event) {
        var overlayRef = this.calendarOverlayService.open(this.options.calendarOverlayConfig, this.calendarInput);
    };
    NgxMatDrpComponent.prototype.resetDates = function (range) {
        this.rangeStoreService.updateRange(range.fromDate, range.toDate);
    };
    return NgxMatDrpComponent;
}());
NgxMatDrpComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-mat-drp',
                template: "<div> \n  \n  <mat-form-field class=\"ngx-mat-drp-date-display\">\n    <input class=\"ngx-mat-drp-date-input\"\n          matInput [placeholder]=\"options.placeholder\"\n          [value]=\"selectedDateRange\"\n          [matTooltip]=\"selectedDateRange\"\n          (click)=\"openCalendar($event)\"\n          readonly\n          #calendarInput >\n    <div matSuffix \n          class=\"ngx-mat-drp-calendar\"\n          (click)=\"openCalendar($event)\">\n    </div>\n  </mat-form-field>\n  \n</div>    \n",
                styles: [".ngx-mat-drp-date-display{min-width:230px}.ngx-mat-drp-date-input{text-overflow:ellipsis;color:#4169e1}.ngx-mat-drp-calendar{background-image:url('data:image/svg+xml,<svg fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">    <path d=\"M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z\"/>    <path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>');width:24px;height:24px}"],
                providers: [
                    CalendarOverlayService,
                    RangeStoreService,
                    ConfigStoreService,
                    DatePipe
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
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
var CalendarWrapperComponent = /** @class */ (function () {
    function CalendarWrapperComponent(configStore) {
        this.configStore = configStore;
        this.selectedDateChange = new EventEmitter();
        this.weekendFilter = function (d) { return true; };
        this.dateFormat = configStore.ngxDrpOptions.format;
        if (configStore.ngxDrpOptions.excludeWeekends) {
            this.weekendFilter = function (d) {
                var day = d.getDay();
                return day !== 0 && day !== 6;
            };
        }
    }
    CalendarWrapperComponent.prototype.ngOnChanges = function (changes) {
        this.matCalendar.activeDate = changes["selectedDate"].currentValue;
    };
    CalendarWrapperComponent.prototype.onSelectedChange = function (date) {
        this.selectedDateChange.emit(date);
    };
    CalendarWrapperComponent.prototype.onYearSelected = function (e) { };
    CalendarWrapperComponent.prototype.onUserSelection = function (e) { };
    return CalendarWrapperComponent;
}());
CalendarWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'calendar-wrapper',
                template: "<div>\n\n  <!-- <mat-divider></mat-divider> -->\n  <span class=\"ngx-mat-drp-date-label\">\n    <label>{{prefixLabel}}</label>\n    <label class=\"ngx-mat-drp-selected-date-label\">{{selectedDate | date:dateFormat}}</label>\n  </span>\n  <!-- <mat-divider></mat-divider> -->\n\n  <mat-calendar \n    [startAt]=\"selectedDate\"\n    [selected]=\"selectedDate\"\n    [minDate]=\"minDate\"\n    [maxDate]=\"maxDate\"\n    (selectedChange)=\"onSelectedChange($event)\"\n    (yearSelected)=\"onYearSelected($event)\"\n    (_userSelection)=\"onUserSelection($event)\"\n    [dateFilter]=\"weekendFilter\">\n  </mat-calendar>\n\n</div>",
                styles: [".ngx-mat-drp-date-label{background:#fafafa;margin:15px;padding:4px 2px;width:100%;font-size:14px;font-weight:500}.ngx-mat-drp-selected-date-label{color:rgba(0,0,0,.38);padding-left:5%}"],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
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
var PresetsComponent = /** @class */ (function () {
    function PresetsComponent() {
        this.presetChanged = new EventEmitter();
    }
    PresetsComponent.prototype.ngOnInit = function () { };
    PresetsComponent.prototype.setPresetPeriod = function (event) {
        this.presetChanged.emit(event);
    };
    return PresetsComponent;
}());
PresetsComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-drp-presets',
                template: "<div>\n  <ul class=\"ngx-mat-drp-presets-list\">\n    <li *ngFor=\"let preset of presets\" (click)=\"setPresetPeriod(preset)\"> {{preset.presetLabel}} </li>\n  </ul>\n</div>",
                styles: [".ngx-mat-drp-presets-list{list-style-type:none;margin:0;padding:0}.ngx-mat-drp-presets-list li{margin:5px 0;padding:4%;cursor:pointer;background:#fafafa;color:#3f51b5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ngx-mat-drp-presets-list li:hover{background:#3f51b5;color:#fff}"],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
PresetsComponent.ctorParameters = function () { return []; };
PresetsComponent.propDecorators = {
    presets: [{ type: Input }],
    presetChanged: [{ type: Output }]
};
var ɵ0 = new Date();
var NgxMatDrpModule = /** @class */ (function () {
    function NgxMatDrpModule() {
    }
    return NgxMatDrpModule;
}());
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
            },] },
];

export { NgxMatDrpModule, NgxMatDrpComponent, PickerOverlayComponent, CalendarWrapperComponent, PresetsComponent, CalendarOverlayService, ConfigStoreService, DATE, RangeStoreService, pickerOverlayAnimations as ɵa };
//# sourceMappingURL=ngx-mat-daterange-picker.js.map
