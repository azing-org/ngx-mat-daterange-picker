(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/cdk/portal'), require('rxjs/operators'), require('rxjs'), require('@angular/animations'), require('@angular/material/form-field'), require('@angular/material/core'), require('@angular/material/input'), require('@angular/material/button'), require('@angular/material/tooltip'), require('@angular/cdk/overlay'), require('@angular/material/datepicker'), require('@angular/core'), require('@angular/material-moment-adapter'), require('moment')) :
    typeof define === 'function' && define.amd ? define('ngx-mat-daterange-picker', ['exports', '@angular/common', '@angular/cdk/portal', 'rxjs/operators', 'rxjs', '@angular/animations', '@angular/material/form-field', '@angular/material/core', '@angular/material/input', '@angular/material/button', '@angular/material/tooltip', '@angular/cdk/overlay', '@angular/material/datepicker', '@angular/core', '@angular/material-moment-adapter', 'moment'], factory) :
    (factory((global['ngx-mat-daterange-picker'] = {}),global.ng.common,global.ng.cdk.portal,global.rxjs.operators,global.rxjs,global.ng.animations,global.ng.material['form-field'],global.ng.material.core,global.ng.material.input,global.ng.material.button,global.ng.material.tooltip,global.ng.cdk.overlay,global.ng.material.datepicker,global.ng.core,global.ng['material-moment-adapter'],global.moment));
}(this, (function (exports,common,portal,operators,rxjs,animations,formField,core,input,button,tooltip,overlay,datepicker,core$1,materialMomentAdapter,momentImported) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /* import { DATE } from '../ngx-drp.module'; */
    /** @type {?} */
    var DATE = new core$1.InjectionToken('date');
    var RangeStoreService = /** @class */ (function () {
        function RangeStoreService(_fromDate, _toDate) {
            this._fromDate = _fromDate;
            this._toDate = _toDate;
            this.rangeUpdate$ = new rxjs.Subject();
        }
        Object.defineProperty(RangeStoreService.prototype, "fromDate", {
            /* set fromDate(fromDate:Moment) {
              this._fromDate = fromDate;
            } */
            get: /* set fromDate(fromDate:Moment) {
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
            /* set toDate(toDate:Moment) {
              this._toDate = toDate;
            } */
            get: /* set toDate(toDate:Moment) {
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
                if (fromDate === void 0) {
                    fromDate = this._fromDate;
                }
                if (toDate === void 0) {
                    toDate = this._toDate;
                }
                this._fromDate = fromDate;
                this._toDate = toDate;
                this.rangeUpdate$.next({ fromDate: this._fromDate, toDate: this._toDate });
            };
        RangeStoreService.decorators = [
            { type: core$1.Injectable }
        ];
        /** @nocollapse */
        RangeStoreService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core$1.Inject, args: [DATE,] }] },
                { type: undefined, decorators: [{ type: core$1.Inject, args: [DATE,] }] }
            ];
        };
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
             */ function () {
                return this._ngxDrpOptions;
            },
            set: /**
             * @param {?} options
             * @return {?}
             */ function (options) {
                this._ngxDrpOptions = __assign({}, this.defaultOptions, options);
            },
            enumerable: true,
            configurable: true
        });
        ConfigStoreService.decorators = [
            { type: core$1.Injectable }
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
        transformPanel: animations.trigger('transformPickerOverlay', [
            animations.state('void', animations.style({ opacity: 0, transform: 'scale(1, 0)' })),
            animations.state('enter', animations.style({ opacity: 1, transform: 'scale(1, 1)' })),
            animations.transition('void => enter', animations.group([
                animations.animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')
            ])),
            animations.transition('* => void', animations.animate('100ms linear', animations.style({ opacity: 0 })))
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
                // In single-date mode, on click a date in the calendar, the picker closes.
                if (this.singleDate) {
                    this.applyNewDates(null);
                }
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
                this.updateFromDate(presetItem.range.fromDate);
                // In single-date mode, on click preset button, the picker closes.
                if (this.singleDate) {
                    this.applyNewDates(void 0);
                }
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
            { type: core$1.Component, args: [{
                        selector: 'ngx-mat-drp-picker-overlay',
                        template: "<div [@transformPickerOverlay]=\"shouldAnimate\" class=\"ngx-mat-drp-calendar-container\">\r\n  <div class=\"ngx-mat-drp-calendar-item\">\r\n    <calendar-wrapper [prefixLabel]=\"startDatePrefix\" [selectedDate]=\"fromDate\" [minDate]=\"fromMinDate\"\r\n      [maxDate]=\"fromMaxDate\" (selectedDateChange)=\"updateFromDate($event)\">\r\n    </calendar-wrapper>\r\n  </div>\r\n  <div class=\"ngx-mat-drp-calendar-item\" *ngIf='!singleDate'>\r\n    <calendar-wrapper [prefixLabel]=\"endDatePrefix\" [selectedDate]=\"toDate\" [minDate]=\"toMinDate\" [maxDate]=\"toMaxDate\"\r\n      [fromDate]=\"fromDate\" (selectedDateChange)=\"updateToDate($event)\">\r\n    </calendar-wrapper>\r\n  </div>\r\n  <div class=\"ngx-mat-drp-calendar-item\">\r\n    <div class=\"ngx-mat-drp-menu\">\r\n      <mat-drp-presets [presets]=\"presets\" (presetChanged)=\"updateRangeByPreset($event)\"></mat-drp-presets>\r\n      <div class=\"ngx-mat-drp-controls\">\r\n        <button mat-button (click)=\"addEndDate($event)\">{{rangeLabel}}</button>\r\n        <button mat-button (click)=\"discardNewDates($event)\" *ngIf=\"false\">{{cancelLabel}}</button>\r\n        <button mat-button *ngIf='!singleDate' color=\"primary\" (click)=\"applyNewDates($event)\">{{applyLabel}}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                        animations: [pickerOverlayAnimations.transformPanel],
                        encapsulation: core$1.ViewEncapsulation.None,
                        styles: [".ngx-mat-drp-calendar-container{display:flex;flex-wrap:wrap;justify-content:space-around;min-width:350px;min-height:300px}.ngx-mat-drp-calendar-item{flex-basis:1;min-width:210px;padding:1em;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:400}.ngx-mat-drp-menu{flex-basis:1;height:100%}.ngx-mat-drp-controls{display:flex;justify-content:space-around;margin:10% auto}.ngx-mat-drp-overlay{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background:#fff;border-radius:2px}.ngx-mat-drp-overlay-backdrop{background-color:rgba(0,0,0,.2);opacity:.2}"]
                    }] }
        ];
        /** @nocollapse */
        PickerOverlayComponent.ctorParameters = function () {
            return [
                { type: RangeStoreService },
                { type: ConfigStoreService },
                { type: overlay.OverlayRef }
            ];
        };
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
        function CalendarOverlayService(overlay$$1, injector) {
            this.overlay = overlay$$1;
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
                if (config === void 0) {
                    config = {};
                }
                this.hostElemRef = hostElemRef;
                /** @type {?} */
                var overlayConfig = __assign({}, DEFAULT_CONFIG, config);
                /** @type {?} */
                var overlayRef = this.createOverlay(overlayConfig);
                /** @type {?} */
                var portalInjector = this.createInjector(overlayRef);
                /** @type {?} */
                var calendarPortal = new portal.ComponentPortal(PickerOverlayComponent, null, portalInjector);
                overlayRef.attach(calendarPortal);
                overlayRef
                    .backdropClick()
                    .pipe(operators.takeWhile(function () { return overlayConfig.shouldCloseOnBackdropClick; }))
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
                var overlayConfig = new overlay.OverlayConfig({
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
                injectionTokens.set(overlay.OverlayRef, overlayRef);
                return new portal.PortalInjector(this.injector, injectionTokens);
            };
        CalendarOverlayService.decorators = [
            { type: core$1.Injectable }
        ];
        /** @nocollapse */
        CalendarOverlayService.ctorParameters = function () {
            return [
                { type: overlay.Overlay },
                { type: core$1.Injector }
            ];
        };
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
            this.selectedDateRangeChanged = new core$1.EventEmitter();
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
            { type: core$1.Component, args: [{
                        selector: 'ngx-mat-drp',
                        template: "<div> \r\n  \r\n  <mat-form-field class=\"ngx-mat-drp-date-display\">\r\n    <input class=\"ngx-mat-drp-date-input\"\r\n          matInput [placeholder]=\"options.placeholder\"\r\n          [value]=\"selectedDateRange\"\r\n          [matTooltip]=\"selectedDateRange\"\r\n          (click)=\"openCalendar($event)\"\r\n          readonly\r\n          #calendarInput >\r\n    <div matSuffix \r\n          class=\"ngx-mat-drp-calendar\"\r\n          (click)=\"openCalendar($event)\">\r\n    </div>\r\n  </mat-form-field>\r\n  \r\n</div>    \r\n",
                        providers: [
                            CalendarOverlayService,
                            RangeStoreService,
                            ConfigStoreService,
                            common.DatePipe
                        ],
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: [".ngx-mat-drp-date-display{min-width:230px}.ngx-mat-drp-date-input{text-overflow:ellipsis;color:#4169e1}.ngx-mat-drp-calendar{background-image:url('data:image/svg+xml,<svg fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">    <path d=\"M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z\"/>    <path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>');width:24px;height:24px}"]
                    }] }
        ];
        /** @nocollapse */
        NgxMatDrpComponent.ctorParameters = function () {
            return [
                { type: core$1.ChangeDetectorRef },
                { type: CalendarOverlayService },
                { type: RangeStoreService },
                { type: ConfigStoreService },
                { type: common.DatePipe }
            ];
        };
        NgxMatDrpComponent.propDecorators = {
            calendarInput: [{ type: core$1.ViewChild, args: ['calendarInput',] }],
            selectedDateRangeChanged: [{ type: core$1.Output }],
            options: [{ type: core$1.Input }]
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
            this.selectedDateChange = new core$1.EventEmitter();
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
            { type: core$1.Component, args: [{
                        selector: 'calendar-wrapper',
                        template: "<div>\r\n\r\n  <!-- <mat-divider></mat-divider> -->\r\n  <span class=\"ngx-mat-drp-date-label\">\r\n    <label>{{prefixLabel}}</label>\r\n    <label class=\"ngx-mat-drp-selected-date-label\">{{selectedDate | date:dateFormat}}</label>\r\n  </span>\r\n  <!-- <mat-divider></mat-divider> -->\r\n\r\n  <mat-calendar \r\n    [startAt]=\"selectedDate\"\r\n    [selected]=\"selectedDate\"\r\n    [minDate]=\"minDate\"\r\n    [maxDate]=\"maxDate\"\r\n    [dateClass]=\"dateClass()\"\r\n    (selectedChange)=\"onSelectedChange($event)\"\r\n    (yearSelected)=\"onYearSelected($event)\"\r\n    (_userSelection)=\"onUserSelection($event)\"\r\n    [dateFilter]=\"weekendFilter\">\r\n  </mat-calendar>\r\n\r\n</div>",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: [".ngx-mat-drp-date-label{background:#fafafa;margin:15px;padding:4px 2px;width:100%;font-size:14px;font-weight:500}.ngx-mat-drp-selected-date-label{color:rgba(0,0,0,.38);padding-left:5%}:host ::ng-deep.before-from-date .mat-calendar-body-selected{background-color:red}"]
                    }] }
        ];
        /** @nocollapse */
        CalendarWrapperComponent.ctorParameters = function () {
            return [
                { type: ConfigStoreService }
            ];
        };
        CalendarWrapperComponent.propDecorators = {
            matCalendar: [{ type: core$1.ViewChild, args: [datepicker.MatCalendar,] }],
            selectedDateChange: [{ type: core$1.Output }],
            selectedDate: [{ type: core$1.Input }],
            prefixLabel: [{ type: core$1.Input }],
            minDate: [{ type: core$1.Input }],
            maxDate: [{ type: core$1.Input }],
            fromDate: [{ type: core$1.Input }]
        };
        return CalendarWrapperComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PresetsComponent = /** @class */ (function () {
        function PresetsComponent() {
            this.presetChanged = new core$1.EventEmitter();
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
            { type: core$1.Component, args: [{
                        selector: 'mat-drp-presets',
                        template: "<div>\r\n  <ul class=\"ngx-mat-drp-presets-list\">\r\n    <li *ngFor=\"let preset of presets\" (click)=\"setPresetPeriod(preset)\"> {{preset.presetLabel}} </li>\r\n  </ul>\r\n</div>",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: [".ngx-mat-drp-presets-list{list-style-type:none;margin:0;padding:0}.ngx-mat-drp-presets-list li{margin:5px 0;padding:4%;cursor:pointer;background:#fafafa;color:#3f51b5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ngx-mat-drp-presets-list li:hover{background:#3f51b5;color:#fff}"]
                    }] }
        ];
        /** @nocollapse */
        PresetsComponent.ctorParameters = function () { return []; };
        PresetsComponent.propDecorators = {
            presets: [{ type: core$1.Input }],
            presetChanged: [{ type: core$1.Output }]
        };
        return PresetsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var moment = momentImported;
    var ɵ0 = moment();
    var NgxMatDrpModule = /** @class */ (function () {
        function NgxMatDrpModule() {
        }
        NgxMatDrpModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            formField.MatFormFieldModule,
                            datepicker.MatDatepickerModule,
                            core.MatNativeDateModule,
                            input.MatInputModule,
                            button.MatButtonModule,
                            tooltip.MatTooltipModule,
                            overlay.OverlayModule,
                            materialMomentAdapter.MatMomentDateModule,
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

    exports.NgxMatDrpModule = NgxMatDrpModule;
    exports.NgxMatDrpComponent = NgxMatDrpComponent;
    exports.PickerOverlayComponent = PickerOverlayComponent;
    exports.CalendarWrapperComponent = CalendarWrapperComponent;
    exports.PresetsComponent = PresetsComponent;
    exports.CalendarOverlayService = CalendarOverlayService;
    exports.ConfigStoreService = ConfigStoreService;
    exports.DATE = DATE;
    exports.RangeStoreService = RangeStoreService;
    exports.ɵa = pickerOverlayAnimations;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-mat-daterange-picker.umd.js.map