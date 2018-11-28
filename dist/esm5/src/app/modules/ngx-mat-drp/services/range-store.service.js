/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';
/* import { DATE } from '../ngx-drp.module'; */
/** @type {?} */
export var DATE = new InjectionToken('date');
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
export { RangeStoreService };
if (false) {
    /** @type {?} */
    RangeStoreService.prototype.rangeUpdate$;
    /**
     * @type {?}
     * @private
     */
    RangeStoreService.prototype._fromDate;
    /**
     * @type {?}
     * @private
     */
    RangeStoreService.prototype._toDate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2Utc3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXQtZGF0ZXJhbmdlLXBpY2tlci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZ3gtbWF0LWRycC9zZXJ2aWNlcy9yYW5nZS1zdG9yZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBRy9CLE1BQU0sS0FBTyxJQUFJLEdBQUcsSUFBSSxjQUFjLENBQU8sTUFBTSxDQUFDO0FBRXBEO0lBSUUsMkJBQ3dCLFNBQWUsRUFDZixPQUFhO1FBRGIsY0FBUyxHQUFULFNBQVMsQ0FBTTtRQUNmLFlBQU8sR0FBUCxPQUFPLENBQU07UUFKckMsaUJBQVksR0FBbUIsSUFBSSxPQUFPLEVBQVMsQ0FBQztJQUtqRCxDQUFDO0lBTUosc0JBQUksdUNBQVE7UUFKWjs7WUFFSTs7Ozs7OztRQUVKO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBTUQsc0JBQUkscUNBQU07UUFKVjs7WUFFSTs7Ozs7OztRQUVKO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBOzs7Ozs7SUFFRCx1Q0FBVzs7Ozs7SUFBWCxVQUFZLFFBQStCLEVBQUUsTUFBMkI7UUFBNUQseUJBQUEsRUFBQSxXQUFpQixJQUFJLENBQUMsU0FBUztRQUFFLHVCQUFBLEVBQUEsU0FBZSxJQUFJLENBQUMsT0FBTztRQUN0RSxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM3RSxDQUFDOztnQkE3QkYsVUFBVTs7OztnQkFLMEIsSUFBSSx1QkFBcEMsTUFBTSxTQUFDLElBQUk7Z0JBQ21CLElBQUksdUJBQWxDLE1BQU0sU0FBQyxJQUFJOztJQXdCaEIsd0JBQUM7Q0FBQSxBQTlCRCxJQThCQztTQTdCWSxpQkFBaUI7OztJQUM1Qix5Q0FBb0Q7Ozs7O0lBR2xELHNDQUFxQzs7Ozs7SUFDckMsb0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSYW5nZSB9IGZyb20gJy4uL21vZGVsL21vZGVsJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG4vKiBpbXBvcnQgeyBEQVRFIH0gZnJvbSAnLi4vbmd4LWRycC5tb2R1bGUnOyAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IERBVEUgPSBuZXcgSW5qZWN0aW9uVG9rZW48RGF0ZT4oJ2RhdGUnKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJhbmdlU3RvcmVTZXJ2aWNlIHtcclxuICByYW5nZVVwZGF0ZSQ6IFN1YmplY3Q8UmFuZ2U+ID0gbmV3IFN1YmplY3Q8UmFuZ2U+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChEQVRFKSBwcml2YXRlIF9mcm9tRGF0ZTogRGF0ZSxcclxuICAgIEBJbmplY3QoREFURSkgcHJpdmF0ZSBfdG9EYXRlOiBEYXRlXHJcbiAgKSB7fVxyXG5cclxuICAvKiBzZXQgZnJvbURhdGUoZnJvbURhdGU6RGF0ZSkge1xyXG4gICAgdGhpcy5fZnJvbURhdGUgPSBmcm9tRGF0ZTtcclxuICB9ICovXHJcblxyXG4gIGdldCBmcm9tRGF0ZSgpOiBEYXRlIHtcclxuICAgIHJldHVybiB0aGlzLl9mcm9tRGF0ZTtcclxuICB9XHJcblxyXG4gIC8qIHNldCB0b0RhdGUodG9EYXRlOkRhdGUpIHtcclxuICAgIHRoaXMuX3RvRGF0ZSA9IHRvRGF0ZTtcclxuICB9ICovXHJcblxyXG4gIGdldCB0b0RhdGUoKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG9EYXRlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUmFuZ2UoZnJvbURhdGU6IERhdGUgPSB0aGlzLl9mcm9tRGF0ZSwgdG9EYXRlOiBEYXRlID0gdGhpcy5fdG9EYXRlKSB7XHJcbiAgICB0aGlzLl9mcm9tRGF0ZSA9IGZyb21EYXRlO1xyXG4gICAgdGhpcy5fdG9EYXRlID0gdG9EYXRlO1xyXG4gICAgdGhpcy5yYW5nZVVwZGF0ZSQubmV4dCh7IGZyb21EYXRlOiB0aGlzLl9mcm9tRGF0ZSwgdG9EYXRlOiB0aGlzLl90b0RhdGUgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==