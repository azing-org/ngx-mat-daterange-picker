(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/animations'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('rxjs/operators'), require('@angular/common'), require('@angular/material/datepicker'), require('@angular/material/form-field'), require('@angular/material/core'), require('@angular/material/input'), require('@angular/material/button'), require('@angular/material/tooltip')) :
    typeof define === 'function' && define.amd ? define('ngx-mat-daterange-picker', ['exports', '@angular/core', 'rxjs', '@angular/animations', '@angular/cdk/overlay', '@angular/cdk/portal', 'rxjs/operators', '@angular/common', '@angular/material/datepicker', '@angular/material/form-field', '@angular/material/core', '@angular/material/input', '@angular/material/button', '@angular/material/tooltip'], factory) :
    (factory((global['ngx-mat-daterange-picker'] = {}),global.ng.core,global.rxjs,global.ng.animations,global.ng.cdk.overlay,global.ng.cdk.portal,global.rxjs.operators,global.ng.common,global.ng.material.datepicker,global.ng.material['form-field'],global.ng.material.core,global.ng.material.input,global.ng.material.button,global.ng.material.tooltip));
}(this, (function (exports,core,rxjs,animations,overlay,portal,operators,common,datepicker,formField,core$1,input,button,tooltip) { 'use strict';

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
    var DATE = new core.InjectionToken('date');
    var RangeStoreService = /** @class */ (function () {
        function RangeStoreService(_fromDate, _toDate) {
            this._fromDate = _fromDate;
            this._toDate = _toDate;
            this.rangeUpdate$ = new rxjs.Subject();
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        RangeStoreService.ctorParameters = function () {
            return [
                { type: Date, decorators: [{ type: core.Inject, args: [DATE,] }] },
                { type: Date, decorators: [{ type: core.Inject, args: [DATE,] }] }
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
            { type: core.Injectable }
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
            { type: core.Component, args: [{
                        selector: 'ngx-mat-drp-picker-overlay',
                        template: "<div [@transformPickerOverlay]=\"shouldAnimate\" class=\"ngx-mat-drp-calendar-container\">\r\n\r\n  <div class=\"ngx-mat-drp-calendar-item\">\r\n    <calendar-wrapper \r\n    [prefixLabel]=\"startDatePrefix\"\r\n    [selectedDate]=\"fromDate\"\r\n    [minDate]=\"fromMinDate\"\r\n    [maxDate]=\"fromMaxDate\"\r\n    (selectedDateChange)=\"updateFromDate($event)\">\r\n  </calendar-wrapper>\r\n  </div>\r\n  <div class=\"ngx-mat-drp-calendar-item\" *ngIf='!singleDate'>\r\n    <calendar-wrapper \r\n    [prefixLabel]=\"endDatePrefix\"\r\n    [selectedDate]=\"toDate\"\r\n    [minDate]=\"toMinDate\"\r\n    [maxDate]=\"toMaxDate\" \r\n    (selectedDateChange)=\"updateToDate($event)\">\r\n  </calendar-wrapper>\r\n  </div>\r\n  <div class=\"ngx-mat-drp-calendar-item\">\r\n    <div class=\"ngx-mat-drp-menu\">\r\n      <mat-drp-presets [presets]=\"presets\" (presetChanged)=\"updateRangeByPreset($event)\"></mat-drp-presets>\r\n      <div class=\"ngx-mat-drp-controls\">\r\n        <button mat-button (click)=\"addEndDate($event)\">{{rangeLabel}}</button>\r\n        <button mat-button (click)=\"discardNewDates($event)\" *ngIf=\"false\">{{cancelLabel}}</button>\r\n        <button mat-button color=\"primary\" (click)=\"applyNewDates($event)\">{{applyLabel}}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                        animations: [pickerOverlayAnimations.transformPanel],
                        encapsulation: core.ViewEncapsulation.None,
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        CalendarOverlayService.ctorParameters = function () {
            return [
                { type: overlay.Overlay },
                { type: core.Injector }
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
            this.selectedDateRangeChanged = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'ngx-mat-drp',
                        template: "<div> \r\n  \r\n  <mat-form-field class=\"ngx-mat-drp-date-display\">\r\n    <input class=\"ngx-mat-drp-date-input\"\r\n          matInput [placeholder]=\"options.placeholder\"\r\n          [value]=\"selectedDateRange\"\r\n          [matTooltip]=\"selectedDateRange\"\r\n          (click)=\"openCalendar($event)\"\r\n          readonly\r\n          #calendarInput >\r\n    <div matSuffix \r\n          class=\"ngx-mat-drp-calendar\"\r\n          (click)=\"openCalendar($event)\">\r\n    </div>\r\n  </mat-form-field>\r\n  \r\n</div>    \r\n",
                        providers: [
                            CalendarOverlayService,
                            RangeStoreService,
                            ConfigStoreService,
                            common.DatePipe
                        ],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".ngx-mat-drp-date-display{min-width:230px}.ngx-mat-drp-date-input{text-overflow:ellipsis;color:#4169e1}.ngx-mat-drp-calendar{background-image:url('data:image/svg+xml,<svg fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">    <path d=\"M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z\"/>    <path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>');width:24px;height:24px}"]
                    }] }
        ];
        /** @nocollapse */
        NgxMatDrpComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef },
                { type: CalendarOverlayService },
                { type: RangeStoreService },
                { type: ConfigStoreService },
                { type: common.DatePipe }
            ];
        };
        NgxMatDrpComponent.propDecorators = {
            calendarInput: [{ type: core.ViewChild, args: ['calendarInput',] }],
            selectedDateRangeChanged: [{ type: core.Output }],
            options: [{ type: core.Input }]
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
            this.selectedDateChange = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'calendar-wrapper',
                        template: "<div>\r\n\r\n  <!-- <mat-divider></mat-divider> -->\r\n  <span class=\"ngx-mat-drp-date-label\">\r\n    <label>{{prefixLabel}}</label>\r\n    <label class=\"ngx-mat-drp-selected-date-label\">{{selectedDate | date:dateFormat}}</label>\r\n  </span>\r\n  <!-- <mat-divider></mat-divider> -->\r\n\r\n  <mat-calendar \r\n    [startAt]=\"selectedDate\"\r\n    [selected]=\"selectedDate\"\r\n    [minDate]=\"minDate\"\r\n    [maxDate]=\"maxDate\"\r\n    (selectedChange)=\"onSelectedChange($event)\"\r\n    (yearSelected)=\"onYearSelected($event)\"\r\n    (_userSelection)=\"onUserSelection($event)\"\r\n    [dateFilter]=\"weekendFilter\">\r\n  </mat-calendar>\r\n\r\n</div>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".ngx-mat-drp-date-label{background:#fafafa;margin:15px;padding:4px 2px;width:100%;font-size:14px;font-weight:500}.ngx-mat-drp-selected-date-label{color:rgba(0,0,0,.38);padding-left:5%}"]
                    }] }
        ];
        /** @nocollapse */
        CalendarWrapperComponent.ctorParameters = function () {
            return [
                { type: ConfigStoreService }
            ];
        };
        CalendarWrapperComponent.propDecorators = {
            matCalendar: [{ type: core.ViewChild, args: [datepicker.MatCalendar,] }],
            selectedDateChange: [{ type: core.Output }],
            selectedDate: [{ type: core.Input }],
            prefixLabel: [{ type: core.Input }],
            minDate: [{ type: core.Input }],
            maxDate: [{ type: core.Input }]
        };
        return CalendarWrapperComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PresetsComponent = /** @class */ (function () {
        function PresetsComponent() {
            this.presetChanged = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'mat-drp-presets',
                        template: "<div>\r\n  <ul class=\"ngx-mat-drp-presets-list\">\r\n    <li *ngFor=\"let preset of presets\" (click)=\"setPresetPeriod(preset)\"> {{preset.presetLabel}} </li>\r\n  </ul>\r\n</div>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".ngx-mat-drp-presets-list{list-style-type:none;margin:0;padding:0}.ngx-mat-drp-presets-list li{margin:5px 0;padding:4%;cursor:pointer;background:#fafafa;color:#3f51b5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ngx-mat-drp-presets-list li:hover{background:#3f51b5;color:#fff}"]
                    }] }
        ];
        /** @nocollapse */
        PresetsComponent.ctorParameters = function () { return []; };
        PresetsComponent.propDecorators = {
            presets: [{ type: core.Input }],
            presetChanged: [{ type: core.Output }]
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            formField.MatFormFieldModule,
                            datepicker.MatDatepickerModule,
                            core$1.MatNativeDateModule,
                            input.MatInputModule,
                            button.MatButtonModule,
                            tooltip.MatTooltipModule,
                            overlay.OverlayModule
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdC1kYXRlcmFuZ2UtcGlja2VyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL25neC1tYXQtZGF0ZXJhbmdlLXBpY2tlci9zcmMvYXBwL21vZHVsZXMvbmd4LW1hdC1kcnAvc2VydmljZXMvcmFuZ2Utc3RvcmUuc2VydmljZS50cyIsIm5nOi8vbmd4LW1hdC1kYXRlcmFuZ2UtcGlja2VyL3NyYy9hcHAvbW9kdWxlcy9uZ3gtbWF0LWRycC9zZXJ2aWNlcy9jb25maWctc3RvcmUuc2VydmljZS50cyIsIm5nOi8vbmd4LW1hdC1kYXRlcmFuZ2UtcGlja2VyL3NyYy9hcHAvbW9kdWxlcy9uZ3gtbWF0LWRycC9waWNrZXItb3ZlcmxheS9waWNrZXItb3ZlcmxheS5hbmltYXRpb25zLnRzIiwibmc6Ly9uZ3gtbWF0LWRhdGVyYW5nZS1waWNrZXIvc3JjL2FwcC9tb2R1bGVzL25neC1tYXQtZHJwL3BpY2tlci1vdmVybGF5L3BpY2tlci1vdmVybGF5LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdC1kYXRlcmFuZ2UtcGlja2VyL3NyYy9hcHAvbW9kdWxlcy9uZ3gtbWF0LWRycC9zZXJ2aWNlcy9jYWxlbmRhci1vdmVybGF5LnNlcnZpY2UudHMiLCJuZzovL25neC1tYXQtZGF0ZXJhbmdlLXBpY2tlci9zcmMvYXBwL21vZHVsZXMvbmd4LW1hdC1kcnAvbmd4LW1hdC1kcnAvbmd4LW1hdC1kcnAuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0LWRhdGVyYW5nZS1waWNrZXIvc3JjL2FwcC9tb2R1bGVzL25neC1tYXQtZHJwL2NhbGVuZGFyLXdyYXBwZXIvY2FsZW5kYXItd3JhcHBlci5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXQtZGF0ZXJhbmdlLXBpY2tlci9zcmMvYXBwL21vZHVsZXMvbmd4LW1hdC1kcnAvcHJlc2V0cy9wcmVzZXRzLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdC1kYXRlcmFuZ2UtcGlja2VyL3NyYy9hcHAvbW9kdWxlcy9uZ3gtbWF0LWRycC9uZ3gtbWF0LWRycC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJhbmdlIH0gZnJvbSAnLi4vbW9kZWwvbW9kZWwnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbi8qIGltcG9ydCB7IERBVEUgfSBmcm9tICcuLi9uZ3gtZHJwLm1vZHVsZSc7ICovXHJcblxyXG5leHBvcnQgY29uc3QgREFURSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxEYXRlPignZGF0ZScpO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUmFuZ2VTdG9yZVNlcnZpY2Uge1xyXG4gIHJhbmdlVXBkYXRlJDogU3ViamVjdDxSYW5nZT4gPSBuZXcgU3ViamVjdDxSYW5nZT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KERBVEUpIHByaXZhdGUgX2Zyb21EYXRlOiBEYXRlLFxyXG4gICAgQEluamVjdChEQVRFKSBwcml2YXRlIF90b0RhdGU6IERhdGVcclxuICApIHt9XHJcblxyXG4gIC8qIHNldCBmcm9tRGF0ZShmcm9tRGF0ZTpEYXRlKSB7XHJcbiAgICB0aGlzLl9mcm9tRGF0ZSA9IGZyb21EYXRlO1xyXG4gIH0gKi9cclxuXHJcbiAgZ2V0IGZyb21EYXRlKCk6IERhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Zyb21EYXRlO1xyXG4gIH1cclxuXHJcbiAgLyogc2V0IHRvRGF0ZSh0b0RhdGU6RGF0ZSkge1xyXG4gICAgdGhpcy5fdG9EYXRlID0gdG9EYXRlO1xyXG4gIH0gKi9cclxuXHJcbiAgZ2V0IHRvRGF0ZSgpOiBEYXRlIHtcclxuICAgIHJldHVybiB0aGlzLl90b0RhdGU7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVSYW5nZShmcm9tRGF0ZTogRGF0ZSA9IHRoaXMuX2Zyb21EYXRlLCB0b0RhdGU6IERhdGUgPSB0aGlzLl90b0RhdGUpIHtcclxuICAgIHRoaXMuX2Zyb21EYXRlID0gZnJvbURhdGU7XHJcbiAgICB0aGlzLl90b0RhdGUgPSB0b0RhdGU7XHJcbiAgICB0aGlzLnJhbmdlVXBkYXRlJC5uZXh0KHsgZnJvbURhdGU6IHRoaXMuX2Zyb21EYXRlLCB0b0RhdGU6IHRoaXMuX3RvRGF0ZSB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hEcnBPcHRpb25zIH0gZnJvbSAnLi4vbW9kZWwvbW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU3RvcmVTZXJ2aWNlIHtcclxuICBwcml2YXRlIF9uZ3hEcnBPcHRpb25zOiBOZ3hEcnBPcHRpb25zO1xyXG4gIHByaXZhdGUgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBleGNsdWRlV2Vla2VuZHM6IGZhbHNlLFxyXG4gICAgYW5pbWF0aW9uOiB0cnVlLFxyXG4gICAgbG9jYWxlOiAnZW4tVVMnLFxyXG4gICAgZnJvbU1pbk1heDogeyBmcm9tRGF0ZTogbnVsbCwgdG9EYXRlOiBudWxsIH0sXHJcbiAgICB0b01pbk1heDogeyBmcm9tRGF0ZTogbnVsbCwgdG9EYXRlOiBudWxsIH0sXHJcbiAgICByYW5nZUxhYmVsOiAnQWRkIEVuZC1EYXRlJyxcclxuICAgIHNpbmdsZURhdGU6IHRydWUsIC8vIGZhbHNlID0gZGF0ZVJhbmdlXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBnZXQgbmd4RHJwT3B0aW9ucygpOiBOZ3hEcnBPcHRpb25zIHtcclxuICAgIHJldHVybiB0aGlzLl9uZ3hEcnBPcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgc2V0IG5neERycE9wdGlvbnMob3B0aW9uczogTmd4RHJwT3B0aW9ucykge1xyXG4gICAgdGhpcy5fbmd4RHJwT3B0aW9ucyA9IHsgLi4udGhpcy5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGFuaW1hdGUsXHJcbiAgc3RhdGUsXHJcbiAgc3R5bGUsXHJcbiAgdHJhbnNpdGlvbixcclxuICB0cmlnZ2VyLFxyXG4gIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSxcclxuICBncm91cFxyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBpY2tlck92ZXJsYXlBbmltYXRpb25zOiB7XHJcbiAgcmVhZG9ubHkgdHJhbnNmb3JtUGFuZWw6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YTtcclxufSA9IHtcclxuICAvKiogVHJhbnNmb3JtcyB0aGUgaGVpZ2h0IG9mIHRoZSBwaWNrZXIgb3ZlcmxheSBjb250ZW50LiAqL1xyXG4gIHRyYW5zZm9ybVBhbmVsOiB0cmlnZ2VyKCd0cmFuc2Zvcm1QaWNrZXJPdmVybGF5JywgW1xyXG4gICAgc3RhdGUoJ3ZvaWQnLCBzdHlsZSh7b3BhY2l0eTogMCwgdHJhbnNmb3JtOiAnc2NhbGUoMSwgMCknfSkpLFxyXG4gICAgc3RhdGUoJ2VudGVyJywgc3R5bGUoe29wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3NjYWxlKDEsIDEpJ30pKSxcclxuICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gZW50ZXInLCBncm91cChbXHJcbiAgICAgIGFuaW1hdGUoJzQwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpJylcclxuICAgIF0pKSxcclxuICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIGFuaW1hdGUoJzEwMG1zIGxpbmVhcicsIHN0eWxlKHtvcGFjaXR5OiAwfSkpKVxyXG4gIF0pXHJcbn07XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQcmVzZXRJdGVtLCBOZ3hEcnBPcHRpb25zIH0gZnJvbSAnLi4vbW9kZWwvbW9kZWwnO1xyXG5pbXBvcnQgeyBSYW5nZVN0b3JlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3JhbmdlLXN0b3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb25maWdTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb25maWctc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IHBpY2tlck92ZXJsYXlBbmltYXRpb25zIH0gZnJvbSAnLi9waWNrZXItb3ZlcmxheS5hbmltYXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LW1hdC1kcnAtcGlja2VyLW92ZXJsYXknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9waWNrZXItb3ZlcmxheS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGlja2VyLW92ZXJsYXkuY29tcG9uZW50LmNzcyddLFxyXG4gIGFuaW1hdGlvbnM6IFtwaWNrZXJPdmVybGF5QW5pbWF0aW9ucy50cmFuc2Zvcm1QYW5lbF0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGlja2VyT3ZlcmxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZnJvbURhdGU6IERhdGU7XHJcbiAgdG9EYXRlOiBEYXRlO1xyXG4gIGZyb21NaW5EYXRlOiBEYXRlO1xyXG4gIGZyb21NYXhEYXRlOiBEYXRlO1xyXG4gIHRvTWluRGF0ZTogRGF0ZTtcclxuICB0b01heERhdGU6IERhdGU7XHJcbiAgcHJlc2V0czogQXJyYXk8UHJlc2V0SXRlbT4gPSBbXTtcclxuICBzdGFydERhdGVQcmVmaXg6IHN0cmluZztcclxuICBlbmREYXRlUHJlZml4OiBzdHJpbmc7XHJcbiAgYXBwbHlMYWJlbDogc3RyaW5nO1xyXG4gIHJhbmdlTGFiZWw6IHN0cmluZztcclxuICBjYW5jZWxMYWJlbDogc3RyaW5nO1xyXG4gIHNob3VsZEFuaW1hdGU6IHN0cmluZztcclxuICBzaW5nbGVEYXRlOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmFuZ2VTdG9yZVNlcnZpY2U6IFJhbmdlU3RvcmVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZVNlcnZpY2U6IENvbmZpZ1N0b3JlU2VydmljZSxcclxuICAgIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZlxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmZyb21EYXRlID0gdGhpcy5yYW5nZVN0b3JlU2VydmljZS5mcm9tRGF0ZTtcclxuICAgIHRoaXMudG9EYXRlID0gdGhpcy5yYW5nZVN0b3JlU2VydmljZS50b0RhdGU7XHJcbiAgICB0aGlzLnN0YXJ0RGF0ZVByZWZpeCA9IHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMuc3RhcnREYXRlUHJlZml4IHx8ICdGUk9NOic7XHJcbiAgICB0aGlzLmVuZERhdGVQcmVmaXggPSB0aGlzLmNvbmZpZ1N0b3JlU2VydmljZS5uZ3hEcnBPcHRpb25zLmVuZERhdGVQcmVmaXggfHwgJ1RPOic7XHJcbiAgICB0aGlzLmFwcGx5TGFiZWwgPSB0aGlzLmNvbmZpZ1N0b3JlU2VydmljZS5uZ3hEcnBPcHRpb25zLmFwcGx5TGFiZWwgfHwgJ0FwcGx5JztcclxuICAgIHRoaXMuY2FuY2VsTGFiZWwgPSB0aGlzLmNvbmZpZ1N0b3JlU2VydmljZS5uZ3hEcnBPcHRpb25zLmNhbmNlbExhYmVsIHx8ICdDYW5jZWwnO1xyXG4gICAgdGhpcy5wcmVzZXRzID0gdGhpcy5jb25maWdTdG9yZVNlcnZpY2Uubmd4RHJwT3B0aW9ucy5wcmVzZXRzO1xyXG4gICAgdGhpcy5zaG91bGRBbmltYXRlID0gdGhpcy5jb25maWdTdG9yZVNlcnZpY2Uubmd4RHJwT3B0aW9ucy5hbmltYXRpb25cclxuICAgICAgPyAnZW50ZXInXHJcbiAgICAgIDogJ25vb3AnO1xyXG4gICAgKHtcclxuICAgICAgZnJvbURhdGU6IHRoaXMuZnJvbU1pbkRhdGUsXHJcbiAgICAgIHRvRGF0ZTogdGhpcy5mcm9tTWF4RGF0ZVxyXG4gICAgfSA9IHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMuZnJvbU1pbk1heCk7XHJcbiAgICAoe1xyXG4gICAgICBmcm9tRGF0ZTogdGhpcy50b01pbkRhdGUsXHJcbiAgICAgIHRvRGF0ZTogdGhpcy50b01heERhdGVcclxuICAgIH0gPSB0aGlzLmNvbmZpZ1N0b3JlU2VydmljZS5uZ3hEcnBPcHRpb25zLnRvTWluTWF4KTtcclxuICAgIHRoaXMuc2V0U2luZ2xlRGF0ZSh0aGlzLmNvbmZpZ1N0b3JlU2VydmljZS5uZ3hEcnBPcHRpb25zLnNpbmdsZURhdGUpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRnJvbURhdGUoZGF0ZSkge1xyXG4gICAgdGhpcy5mcm9tRGF0ZSA9IGRhdGU7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUb0RhdGUoZGF0ZSkge1xyXG4gICAgdGhpcy50b0RhdGUgPSBkYXRlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUmFuZ2VCeVByZXNldChwcmVzZXRJdGVtOiBQcmVzZXRJdGVtKSB7XHJcbiAgICB0aGlzLnVwZGF0ZUZyb21EYXRlKG5ldyBEYXRlKHByZXNldEl0ZW0ucmFuZ2UuZnJvbURhdGUpKTtcclxuICAgIHRoaXMudXBkYXRlVG9EYXRlKG5ldyBEYXRlKHByZXNldEl0ZW0ucmFuZ2UudG9EYXRlKSk7XHJcbiAgICAvLyBpZiAodGhpcy5hcHBseU9uUHJlc2V0Q2xpY2spIHtcclxuICAgIC8vICAgdGhpcy5hcHBseU5ld0RhdGVzKG51bGwpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgYXBwbHlOZXdEYXRlcyhlKSB7XHJcbiAgICB0aGlzLnJhbmdlU3RvcmVTZXJ2aWNlLnVwZGF0ZVJhbmdlKHRoaXMuZnJvbURhdGUsIHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMuc2luZ2xlRGF0ZSA/IG51bGwgOiB0aGlzLnRvRGF0ZSk7XHJcbiAgICB0aGlzLmRpc3Bvc2VPdmVyTGF5KCk7XHJcbiAgfVxyXG5cclxuICBhZGRFbmREYXRlKGUpIHtcclxuICAgIHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMuc2luZ2xlRGF0ZSA9ICF0aGlzLmNvbmZpZ1N0b3JlU2VydmljZS5uZ3hEcnBPcHRpb25zLnNpbmdsZURhdGU7XHJcbiAgICB0aGlzLnNldFNpbmdsZURhdGUodGhpcy5jb25maWdTdG9yZVNlcnZpY2Uubmd4RHJwT3B0aW9ucy5zaW5nbGVEYXRlKTtcclxuICB9XHJcbiAgZGlzY2FyZE5ld0RhdGVzKGUpIHtcclxuICAgIC8vIHRoaXMucmFuZ2VTdG9yZVNlcnZpY2UudXBkYXRlUmFuZ2UoKTtcclxuICAgIHRoaXMuZGlzcG9zZU92ZXJMYXkoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzcG9zZU92ZXJMYXkoKSB7XHJcbiAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTaW5nbGVEYXRlKHNpbmdsZURhdGU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuc2luZ2xlRGF0ZSA9IHNpbmdsZURhdGU7XHJcbiAgICB0aGlzLnJhbmdlTGFiZWwgPSB0aGlzLmdldFJhbmdlTGFiZWwoc2luZ2xlRGF0ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgZ2V0UmFuZ2VMYWJlbChzaW5nbGVEYXRlOiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgIGlmICghIXNpbmdsZURhdGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMuYWRkRW5kRGF0ZUxhYmVsIHx8ICdBZGQgRW5kLURhdGUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMucmVtb3ZlRW5kRGF0ZUxhYmVsIHx8ICdSZW1vdmUgRW5kLURhdGUnO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5Q29uZmlnLCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwsIFBvcnRhbEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IE5neERycE9wdGlvbnMsIENhbGVuZGFyT3ZlcmxheUNvbmZpZyB9IGZyb20gJy4uL21vZGVsL21vZGVsJztcclxuaW1wb3J0IHsgdGFrZVdoaWxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBQaWNrZXJPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi4vcGlja2VyLW92ZXJsYXkvcGlja2VyLW92ZXJsYXkuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IERFRkFVTFRfQ09ORklHOiBDYWxlbmRhck92ZXJsYXlDb25maWcgPSB7XHJcbiAgcGFuZWxDbGFzczogJ25neC1tYXQtZHJwLW92ZXJsYXknLFxyXG4gIGhhc0JhY2tkcm9wOiB0cnVlLFxyXG4gIGJhY2tkcm9wQ2xhc3M6ICduZ3gtbWF0LWRycC1vdmVybGF5LWJhY2tkcm9wJyxcclxuICBzaG91bGRDbG9zZU9uQmFja2Ryb3BDbGljazogdHJ1ZVxyXG59O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJPdmVybGF5U2VydmljZSB7XHJcbiAgcHJpdmF0ZSBob3N0RWxlbVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LCBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge31cclxuXHJcbiAgb3BlbihcclxuICAgIGNvbmZpZzogQ2FsZW5kYXJPdmVybGF5Q29uZmlnID0ge30sXHJcbiAgICBob3N0RWxlbVJlZjogRWxlbWVudFJlZlxyXG4gICk6IE92ZXJsYXlSZWYge1xyXG4gICAgdGhpcy5ob3N0RWxlbVJlZiA9IGhvc3RFbGVtUmVmO1xyXG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IHsgLi4uREVGQVVMVF9DT05GSUcsIC4uLmNvbmZpZyB9O1xyXG4gICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMuY3JlYXRlT3ZlcmxheShvdmVybGF5Q29uZmlnKTtcclxuICAgIGNvbnN0IHBvcnRhbEluamVjdG9yID0gdGhpcy5jcmVhdGVJbmplY3RvcihvdmVybGF5UmVmKTtcclxuICAgIGNvbnN0IGNhbGVuZGFyUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChcclxuICAgICAgUGlja2VyT3ZlcmxheUNvbXBvbmVudCxcclxuICAgICAgbnVsbCxcclxuICAgICAgcG9ydGFsSW5qZWN0b3JcclxuICAgICk7XHJcbiAgICBvdmVybGF5UmVmLmF0dGFjaChjYWxlbmRhclBvcnRhbCk7XHJcblxyXG4gICAgb3ZlcmxheVJlZlxyXG4gICAgICAuYmFja2Ryb3BDbGljaygpXHJcbiAgICAgIC5waXBlKHRha2VXaGlsZSgoKSA9PiBvdmVybGF5Q29uZmlnLnNob3VsZENsb3NlT25CYWNrZHJvcENsaWNrKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiBvdmVybGF5UmVmLmRpc3Bvc2UoKSk7XHJcblxyXG4gICAgcmV0dXJuIG92ZXJsYXlSZWY7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZU92ZXJsYXkoY29uZmlnOiBDYWxlbmRhck92ZXJsYXlDb25maWcpOiBPdmVybGF5UmVmIHtcclxuICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSB0aGlzLmdldE92ZXJsYXlDb25maWcoY29uZmlnKTtcclxuICAgIHJldHVybiB0aGlzLm92ZXJsYXkuY3JlYXRlKG92ZXJsYXlDb25maWcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRPdmVybGF5Q29uZmlnKGNvbmZpZzogQ2FsZW5kYXJPdmVybGF5Q29uZmlnKTogT3ZlcmxheUNvbmZpZyB7XHJcbiAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5XHJcbiAgICAgIC5wb3NpdGlvbigpXHJcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMuaG9zdEVsZW1SZWYpXHJcbiAgICAgIC53aXRoRmxleGlibGVEaW1lbnNpb25zKGZhbHNlKVxyXG4gICAgICAud2l0aFZpZXdwb3J0TWFyZ2luKDgpXHJcbiAgICAgIC53aXRoRGVmYXVsdE9mZnNldFkoMTIpXHJcbiAgICAgIC53aXRoUG9zaXRpb25zKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBvcmlnaW5YOiAnc3RhcnQnLFxyXG4gICAgICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXHJcbiAgICAgICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcclxuICAgICAgICAgIG92ZXJsYXlZOiAndG9wJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcclxuICAgICAgICAgIG9yaWdpblk6ICd0b3AnLFxyXG4gICAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgICAgICBvdmVybGF5WTogJ2JvdHRvbSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG9yaWdpblg6ICdlbmQnLFxyXG4gICAgICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXHJcbiAgICAgICAgICBvdmVybGF5WDogJ2VuZCcsXHJcbiAgICAgICAgICBvdmVybGF5WTogJ3RvcCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG9yaWdpblg6ICdlbmQnLFxyXG4gICAgICAgICAgb3JpZ2luWTogJ3RvcCcsXHJcbiAgICAgICAgICBvdmVybGF5WDogJ2VuZCcsXHJcbiAgICAgICAgICBvdmVybGF5WTogJ2JvdHRvbSdcclxuICAgICAgICB9XHJcbiAgICAgIF0pO1xyXG5cclxuICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZyh7XHJcbiAgICAgIGhhc0JhY2tkcm9wOiBjb25maWcuaGFzQmFja2Ryb3AsXHJcbiAgICAgIGJhY2tkcm9wQ2xhc3M6IGNvbmZpZy5iYWNrZHJvcENsYXNzLFxyXG4gICAgICBwYW5lbENsYXNzOiBjb25maWcucGFuZWxDbGFzcyxcclxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCksXHJcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3lcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBvdmVybGF5Q29uZmlnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVJbmplY3RvcihvdmVybGF5UmVmOiBPdmVybGF5UmVmKTogUG9ydGFsSW5qZWN0b3Ige1xyXG4gICAgY29uc3QgaW5qZWN0aW9uVG9rZW5zID0gbmV3IFdlYWtNYXAoKTtcclxuICAgIGluamVjdGlvblRva2Vucy5zZXQoT3ZlcmxheVJlZiwgb3ZlcmxheVJlZik7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQb3J0YWxJbmplY3Rvcih0aGlzLmluamVjdG9yLCBpbmplY3Rpb25Ub2tlbnMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ2FsZW5kYXJPdmVybGF5U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NhbGVuZGFyLW92ZXJsYXkuc2VydmljZSc7XHJcbmltcG9ydCB7IFJhbmdlU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcmFuZ2Utc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IFJhbmdlLCBOZ3hEcnBPcHRpb25zIH0gZnJvbSAnLi4vbW9kZWwvbW9kZWwnO1xyXG5pbXBvcnQgeyBDb25maWdTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb25maWctc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtbWF0LWRycCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1tYXQtZHJwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9uZ3gtbWF0LWRycC5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDYWxlbmRhck92ZXJsYXlTZXJ2aWNlLFxyXG4gICAgUmFuZ2VTdG9yZVNlcnZpY2UsXHJcbiAgICBDb25maWdTdG9yZVNlcnZpY2UsXHJcbiAgICBEYXRlUGlwZVxyXG4gIF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neE1hdERycENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBAVmlld0NoaWxkKCdjYWxlbmRhcklucHV0JylcclxuICBjYWxlbmRhcklucHV0O1xyXG4gIEBPdXRwdXQoKVxyXG4gIHJlYWRvbmx5IHNlbGVjdGVkRGF0ZVJhbmdlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPFJhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXI8UmFuZ2U+KCk7XHJcbiAgQElucHV0KClcclxuICBvcHRpb25zOiBOZ3hEcnBPcHRpb25zO1xyXG4gIHByaXZhdGUgcmFuZ2VVcGRhdGUkOiBTdWJzY3JpcHRpb247XHJcbiAgc2VsZWN0ZWREYXRlUmFuZ2UgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGNhbGVuZGFyT3ZlcmxheVNlcnZpY2U6IENhbGVuZGFyT3ZlcmxheVNlcnZpY2UsXHJcbiAgICBwdWJsaWMgcmFuZ2VTdG9yZVNlcnZpY2U6IFJhbmdlU3RvcmVTZXJ2aWNlLFxyXG4gICAgcHVibGljIGNvbmZpZ1N0b3JlU2VydmljZTogQ29uZmlnU3RvcmVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGVcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5jb25maWdTdG9yZVNlcnZpY2Uubmd4RHJwT3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuICAgIHRoaXMub3B0aW9ucy5wbGFjZWhvbGRlciA9IHRoaXMub3B0aW9ucy5wbGFjZWhvbGRlciB8fCAnQ2hvb3NlIGEgZGF0ZSc7XHJcbiAgICB0aGlzLnJhbmdlVXBkYXRlJCA9IHRoaXMucmFuZ2VTdG9yZVNlcnZpY2UucmFuZ2VVcGRhdGUkLnN1YnNjcmliZShyYW5nZSA9PiB7XHJcbiAgICAgIGNvbnN0IGZyb206IHN0cmluZyA9IHRoaXMuZm9ybWF0VG9EYXRlU3RyaW5nKFxyXG4gICAgICAgIHJhbmdlLmZyb21EYXRlLFxyXG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JtYXRcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgdG86IHN0cmluZyA9IHRoaXMuZm9ybWF0VG9EYXRlU3RyaW5nKFxyXG4gICAgICAgIHJhbmdlLnRvRGF0ZSxcclxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9ybWF0XHJcbiAgICAgICk7XHJcbiAgICAgIGlmICh0aGlzLmNvbmZpZ1N0b3JlU2VydmljZS5uZ3hEcnBPcHRpb25zLnNpbmdsZURhdGUpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZVJhbmdlID0gYCR7ZnJvbX1gO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlUmFuZ2UgPSBgJHtmcm9tfSAtICR7dG99YDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNlbGVjdGVkRGF0ZVJhbmdlQ2hhbmdlZC5lbWl0KHJhbmdlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucmFuZ2VTdG9yZVNlcnZpY2UudXBkYXRlUmFuZ2UoXHJcbiAgICAgIHRoaXMub3B0aW9ucy5yYW5nZS5mcm9tRGF0ZSxcclxuICAgICAgdGhpcy5vcHRpb25zLnJhbmdlLnRvRGF0ZVxyXG4gICAgKTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMucmFuZ2VVcGRhdGUkKSB7XHJcbiAgICAgIHRoaXMucmFuZ2VVcGRhdGUkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1hdFRvRGF0ZVN0cmluZyhkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oZGF0ZSwgZm9ybWF0KTtcclxuICB9XHJcblxyXG4gIG9wZW5DYWxlbmRhcihldmVudCkge1xyXG4gICAgY29uc3Qgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiA9IHRoaXMuY2FsZW5kYXJPdmVybGF5U2VydmljZS5vcGVuKFxyXG4gICAgICB0aGlzLm9wdGlvbnMuY2FsZW5kYXJPdmVybGF5Q29uZmlnLFxyXG4gICAgICB0aGlzLmNhbGVuZGFySW5wdXRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVzZXREYXRlcyhyYW5nZTogUmFuZ2UpIHtcclxuICAgIHRoaXMucmFuZ2VTdG9yZVNlcnZpY2UudXBkYXRlUmFuZ2UoXHJcbiAgICAgIHJhbmdlLmZyb21EYXRlLFxyXG4gICAgICByYW5nZS50b0RhdGVcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIFZpZXdDaGlsZCxcclxuICBPdXRwdXQsXHJcbiAgSW5wdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdENhbGVuZGFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XHJcbmltcG9ydCB7IENvbmZpZ1N0b3JlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbmZpZy1zdG9yZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2FsZW5kYXItd3JhcHBlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbGVuZGFyLXdyYXBwZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NhbGVuZGFyLXdyYXBwZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYWxlbmRhcldyYXBwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBWaWV3Q2hpbGQoTWF0Q2FsZW5kYXIpXHJcbiAgbWF0Q2FsZW5kYXI6IE1hdENhbGVuZGFyPERhdGU+O1xyXG5cclxuICBAT3V0cHV0KClcclxuICByZWFkb25seSBzZWxlY3RlZERhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcclxuXHJcbiAgZGF0ZUZvcm1hdDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkRGF0ZTogRGF0ZTtcclxuICBASW5wdXQoKSBwcmVmaXhMYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGU7XHJcbiAgQElucHV0KCkgbWF4RGF0ZTogRGF0ZTtcclxuICB3ZWVrZW5kRmlsdGVyID0gKGQ6IERhdGUpID0+IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlU2VydmljZSkge1xyXG4gICAgdGhpcy5kYXRlRm9ybWF0ID0gY29uZmlnU3RvcmUubmd4RHJwT3B0aW9ucy5mb3JtYXQ7XHJcbiAgICBpZiAoY29uZmlnU3RvcmUubmd4RHJwT3B0aW9ucy5leGNsdWRlV2Vla2VuZHMpIHtcclxuICAgICAgdGhpcy53ZWVrZW5kRmlsdGVyID0gKGQ6IERhdGUpOiBib29sZWFuID0+IHtcclxuICAgICAgICBjb25zdCBkYXkgPSBkLmdldERheSgpO1xyXG4gICAgICAgIHJldHVybiBkYXkgIT09IDAgJiYgZGF5ICE9PSA2O1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgLy8gTmVjZXNzYXJ5IHRvIGZvcmNlIHZpZXcgcmVmcmVzaFxyXG4gICAgdGhpcy5tYXRDYWxlbmRhci5hY3RpdmVEYXRlID0gY2hhbmdlcy5zZWxlY3RlZERhdGUuY3VycmVudFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RlZENoYW5nZShkYXRlKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZUNoYW5nZS5lbWl0KGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgb25ZZWFyU2VsZWN0ZWQoZSkge31cclxuXHJcbiAgb25Vc2VyU2VsZWN0aW9uKGUpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUHJlc2V0SXRlbSB9IGZyb20gJy4uL21vZGVsL21vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LWRycC1wcmVzZXRzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcHJlc2V0cy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcHJlc2V0cy5jb21wb25lbnQuY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFByZXNldHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHJlc2V0czogQXJyYXk8UHJlc2V0SXRlbT47XHJcbiAgQE91dHB1dCgpXHJcbiAgcmVhZG9ubHkgcHJlc2V0Q2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIHNldFByZXNldFBlcmlvZChldmVudCkge1xyXG4gICAgdGhpcy5wcmVzZXRDaGFuZ2VkLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ3hNYXREcnBDb21wb25lbnQgfSBmcm9tICcuL25neC1tYXQtZHJwL25neC1tYXQtZHJwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBpY2tlck92ZXJsYXlDb21wb25lbnQgfSBmcm9tICcuL3BpY2tlci1vdmVybGF5L3BpY2tlci1vdmVybGF5LmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xyXG5pbXBvcnQgeyBNYXROYXRpdmVEYXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xyXG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XHJcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcblxyXG5pbXBvcnQgeyBDYWxlbmRhcldyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLXdyYXBwZXIvY2FsZW5kYXItd3JhcHBlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcmVzZXRzQ29tcG9uZW50IH0gZnJvbSAnLi9wcmVzZXRzL3ByZXNldHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgREFURSB9IGZyb20gJy4vc2VydmljZXMvcmFuZ2Utc3RvcmUuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxyXG4gICAgT3ZlcmxheU1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBOZ3hNYXREcnBDb21wb25lbnQsXHJcbiAgICBDYWxlbmRhcldyYXBwZXJDb21wb25lbnQsXHJcbiAgICBQaWNrZXJPdmVybGF5Q29tcG9uZW50LFxyXG4gICAgUHJlc2V0c0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7cHJvdmlkZTogREFURSwgdXNlVmFsdWU6IG5ldyBEYXRlKCl9XHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtQaWNrZXJPdmVybGF5Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTmd4TWF0RHJwQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TWF0RHJwTW9kdWxlIHsgfVxyXG4iXSwibmFtZXMiOlsiSW5qZWN0aW9uVG9rZW4iLCJTdWJqZWN0IiwiSW5qZWN0YWJsZSIsIkluamVjdCIsInRyaWdnZXIiLCJzdGF0ZSIsInN0eWxlIiwidHJhbnNpdGlvbiIsImdyb3VwIiwiYW5pbWF0ZSIsIkNvbXBvbmVudCIsIlZpZXdFbmNhcHN1bGF0aW9uIiwiT3ZlcmxheVJlZiIsIm92ZXJsYXkiLCJDb21wb25lbnRQb3J0YWwiLCJ0YWtlV2hpbGUiLCJPdmVybGF5Q29uZmlnIiwiUG9ydGFsSW5qZWN0b3IiLCJPdmVybGF5IiwiSW5qZWN0b3IiLCJFdmVudEVtaXR0ZXIiLCJEYXRlUGlwZSIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJWaWV3Q2hpbGQiLCJPdXRwdXQiLCJJbnB1dCIsIk1hdENhbGVuZGFyIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJNYXRGb3JtRmllbGRNb2R1bGUiLCJNYXREYXRlcGlja2VyTW9kdWxlIiwiTWF0TmF0aXZlRGF0ZU1vZHVsZSIsIk1hdElucHV0TW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0VG9vbHRpcE1vZHVsZSIsIk92ZXJsYXlNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLElBZU8sSUFBSSxRQUFRLEdBQUc7UUFDbEIsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksU0FBUyxRQUFRLENBQUMsQ0FBQztZQUMzQyxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakQsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUFF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