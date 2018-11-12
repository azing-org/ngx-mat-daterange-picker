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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
    /**
     * @return {?}
     */
    get fromDate() {
        return this._fromDate;
    }
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
    { type: Injectable },
];
/** @nocollapse */
RangeStoreService.ctorParameters = () => [
    { type: Date, decorators: [{ type: Inject, args: [DATE,] }] },
    { type: Date, decorators: [{ type: Inject, args: [DATE,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    { type: Injectable },
];
/** @nocollapse */
ConfigStoreService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const pickerOverlayAnimations = {
    /** Transforms the height of the picker overlay content. */
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.updateFromDate(presetItem.range.fromDate);
        this.updateToDate(presetItem.range.toDate);
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
     * @return {?}
     */
    disposeOverLay() {
        this.overlayRef.dispose();
    }
    /**
     * @param {?} singleDate
     * @return {?}
     */
    setSingleDate(singleDate) {
        this.singleDate = singleDate;
        this.rangeLabel = this.getRangeLabel(singleDate);
    }
    /**
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
                template: `<div [@transformPickerOverlay]="shouldAnimate" class="ngx-mat-drp-calendar-container">

  <div class="ngx-mat-drp-calendar-item">
    <calendar-wrapper 
    [prefixLabel]="startDatePrefix"
    [selectedDate]="fromDate"
    [minDate]="fromMinDate"
    [maxDate]="fromMaxDate"
    (selectedDateChange)="updateFromDate($event)">
  </calendar-wrapper>
  </div>
  <div class="ngx-mat-drp-calendar-item" *ngIf='!singleDate'>
    <calendar-wrapper 
    [prefixLabel]="endDatePrefix"
    [selectedDate]="toDate"
    [minDate]="toMinDate"
    [maxDate]="toMaxDate" 
    (selectedDateChange)="updateToDate($event)">
  </calendar-wrapper>
  </div>
  <div class="ngx-mat-drp-calendar-item">
    <div class="ngx-mat-drp-menu">
      <mat-drp-presets [presets]="presets" (presetChanged)="updateRangeByPreset($event)"></mat-drp-presets>
      <div class="ngx-mat-drp-controls">
        <button mat-button (click)="addEndDate($event)">{{rangeLabel}}</button>
        <button mat-button (click)="discardNewDates($event)" *ngIf="false">{{cancelLabel}}</button>
        <button mat-button color="primary" (click)="applyNewDates($event)">{{applyLabel}}</button>
      </div>
    </div>
  </div>
</div>
`,
                styles: [`.ngx-mat-drp-calendar-container{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:distribute;justify-content:space-around;min-width:350px;min-height:300px}.ngx-mat-drp-calendar-item{-ms-flex-preferred-size:1;flex-basis:1;min-width:210px;padding:1em;font-family:Roboto,"Helvetica Neue",sans-serif;font-size:14px;font-weight:400}.ngx-mat-drp-menu{-ms-flex-preferred-size:1;flex-basis:1;height:100%}.ngx-mat-drp-controls{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;margin:10% auto}.ngx-mat-drp-overlay{-webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background:#fff;border-radius:2px}.ngx-mat-drp-overlay-backdrop{background-color:rgba(0,0,0,.2);opacity:.2}`],
                animations: [pickerOverlayAnimations.transformPanel],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
PickerOverlayComponent.ctorParameters = () => [
    { type: RangeStoreService },
    { type: ConfigStoreService },
    { type: OverlayRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @param {?} config
     * @return {?}
     */
    createOverlay(config) {
        /** @type {?} */
        const overlayConfig = this.getOverlayConfig(config);
        return this.overlay.create(overlayConfig);
    }
    /**
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
    { type: Injectable },
];
/** @nocollapse */
CalendarOverlayService.ctorParameters = () => [
    { type: Overlay },
    { type: Injector }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                template: `<div> 
  
  <mat-form-field class="ngx-mat-drp-date-display">
    <input class="ngx-mat-drp-date-input"
          matInput [placeholder]="options.placeholder"
          [value]="selectedDateRange"
          [matTooltip]="selectedDateRange"
          (click)="openCalendar($event)"
          readonly
          #calendarInput >
    <div matSuffix 
          class="ngx-mat-drp-calendar"
          (click)="openCalendar($event)">
    </div>
  </mat-form-field>
  
</div>    
`,
                styles: [`.ngx-mat-drp-date-display{min-width:230px}.ngx-mat-drp-date-input{text-overflow:ellipsis;color:#4169e1}.ngx-mat-drp-calendar{background-image:url('data:image/svg+xml,<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>    <path d="M0 0h24v24H0z" fill="none"/></svg>');width:24px;height:24px}`],
                providers: [
                    CalendarOverlayService,
                    RangeStoreService,
                    ConfigStoreService,
                    DatePipe
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.matCalendar.activeDate = changes["selectedDate"].currentValue;
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
                template: `<div>

  <!-- <mat-divider></mat-divider> -->
  <span class="ngx-mat-drp-date-label">
    <label>{{prefixLabel}}</label>
    <label class="ngx-mat-drp-selected-date-label">{{selectedDate | date:dateFormat}}</label>
  </span>
  <!-- <mat-divider></mat-divider> -->

  <mat-calendar 
    [startAt]="selectedDate"
    [selected]="selectedDate"
    [minDate]="minDate"
    [maxDate]="maxDate"
    (selectedChange)="onSelectedChange($event)"
    (yearSelected)="onYearSelected($event)"
    (_userSelection)="onUserSelection($event)"
    [dateFilter]="weekendFilter">
  </mat-calendar>

</div>`,
                styles: [`.ngx-mat-drp-date-label{background:#fafafa;margin:15px;padding:4px 2px;width:100%;font-size:14px;font-weight:500}.ngx-mat-drp-selected-date-label{color:rgba(0,0,0,.38);padding-left:5%}`],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                template: `<div>
  <ul class="ngx-mat-drp-presets-list">
    <li *ngFor="let preset of presets" (click)="setPresetPeriod(preset)"> {{preset.presetLabel}} </li>
  </ul>
</div>`,
                styles: [`.ngx-mat-drp-presets-list{list-style-type:none;margin:0;padding:0}.ngx-mat-drp-presets-list li{margin:5px 0;padding:4%;cursor:pointer;background:#fafafa;color:#3f51b5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ngx-mat-drp-presets-list li:hover{background:#3f51b5;color:#fff}`],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
PresetsComponent.ctorParameters = () => [];
PresetsComponent.propDecorators = {
    presets: [{ type: Input }],
    presetChanged: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { NgxMatDrpModule, NgxMatDrpComponent, PickerOverlayComponent, CalendarWrapperComponent, PresetsComponent, CalendarOverlayService, ConfigStoreService, DATE, RangeStoreService, pickerOverlayAnimations as ɵa };
//# sourceMappingURL=ngx-mat-daterange-picker.js.map
