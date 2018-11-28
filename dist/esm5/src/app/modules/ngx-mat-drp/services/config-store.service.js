/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
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
            this._ngxDrpOptions = tslib_1.__assign({}, this.defaultOptions, options);
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
export { ConfigStoreService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigStoreService.prototype._ngxDrpOptions;
    /**
     * @type {?}
     * @private
     */
    ConfigStoreService.prototype.defaultOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXN0b3JlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0LWRhdGVyYW5nZS1waWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbmd4LW1hdC1kcnAvc2VydmljZXMvY29uZmlnLXN0b3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDO0lBYUU7UUFWUSxtQkFBYyxHQUFHO1lBQ3ZCLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsTUFBTSxFQUFFLE9BQU87WUFDZixVQUFVLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDNUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQzFDLFVBQVUsRUFBRSxjQUFjO1lBQzFCLFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUM7SUFFYSxDQUFDO0lBRWhCLHNCQUFJLDZDQUFhOzs7O1FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7Ozs7O1FBRUQsVUFBa0IsT0FBc0I7WUFDdEMsSUFBSSxDQUFDLGNBQWMsd0JBQVEsSUFBSSxDQUFDLGNBQWMsRUFBSyxPQUFPLENBQUUsQ0FBQztRQUMvRCxDQUFDOzs7T0FKQTs7Z0JBakJGLFVBQVU7Ozs7SUFzQlgseUJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQXJCWSxrQkFBa0I7Ozs7OztJQUM3Qiw0Q0FBc0M7Ozs7O0lBQ3RDLDRDQVFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hEcnBPcHRpb25zIH0gZnJvbSAnLi4vbW9kZWwvbW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU3RvcmVTZXJ2aWNlIHtcclxuICBwcml2YXRlIF9uZ3hEcnBPcHRpb25zOiBOZ3hEcnBPcHRpb25zO1xyXG4gIHByaXZhdGUgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBleGNsdWRlV2Vla2VuZHM6IGZhbHNlLFxyXG4gICAgYW5pbWF0aW9uOiB0cnVlLFxyXG4gICAgbG9jYWxlOiAnZW4tVVMnLFxyXG4gICAgZnJvbU1pbk1heDogeyBmcm9tRGF0ZTogbnVsbCwgdG9EYXRlOiBudWxsIH0sXHJcbiAgICB0b01pbk1heDogeyBmcm9tRGF0ZTogbnVsbCwgdG9EYXRlOiBudWxsIH0sXHJcbiAgICByYW5nZUxhYmVsOiAnQWRkIEVuZC1EYXRlJyxcclxuICAgIHNpbmdsZURhdGU6IHRydWUsIC8vIGZhbHNlID0gZGF0ZVJhbmdlXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBnZXQgbmd4RHJwT3B0aW9ucygpOiBOZ3hEcnBPcHRpb25zIHtcclxuICAgIHJldHVybiB0aGlzLl9uZ3hEcnBPcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgc2V0IG5neERycE9wdGlvbnMob3B0aW9uczogTmd4RHJwT3B0aW9ucykge1xyXG4gICAgdGhpcy5fbmd4RHJwT3B0aW9ucyA9IHsgLi4udGhpcy5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9O1xyXG4gIH1cclxufVxyXG4iXX0=