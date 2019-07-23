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
        { type: undefined, decorators: [{ type: Inject, args: [DATE,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DATE,] }] }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2Utc3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXQtZGF0ZXJhbmdlLXBpY2tlci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZ3gtbWF0LWRycC9zZXJ2aWNlcy9yYW5nZS1zdG9yZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBSS9CLE1BQU0sS0FBTyxJQUFJLEdBQUcsSUFBSSxjQUFjLENBQVMsTUFBTSxDQUFDO0FBRXREO0lBSUUsMkJBQ3dCLFNBQWlCLEVBQ2pCLE9BQWdCO1FBRGhCLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUp4QyxpQkFBWSxHQUFtQixJQUFJLE9BQU8sRUFBUyxDQUFDO0lBS2pELENBQUM7SUFNSixzQkFBSSx1Q0FBUTtRQUpaOztZQUVJOzs7Ozs7O1FBRUo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSxxQ0FBTTtRQUpWOztZQUVJOzs7Ozs7O1FBRUo7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7Ozs7OztJQUVELHVDQUFXOzs7OztJQUFYLFVBQVksUUFBaUMsRUFBRSxNQUE2QjtRQUFoRSx5QkFBQSxFQUFBLFdBQW1CLElBQUksQ0FBQyxTQUFTO1FBQUUsdUJBQUEsRUFBQSxTQUFpQixJQUFJLENBQUMsT0FBTztRQUMxRSxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM3RSxDQUFDOztnQkE3QkYsVUFBVTs7OztnREFLTixNQUFNLFNBQUMsSUFBSTtnREFDWCxNQUFNLFNBQUMsSUFBSTs7SUF3QmhCLHdCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0E3QlksaUJBQWlCOzs7SUFDNUIseUNBQW9EOzs7OztJQUdsRCxzQ0FBdUM7Ozs7O0lBQ3ZDLG9DQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmFuZ2UgfSBmcm9tICcuLi9tb2RlbC9tb2RlbCc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnbW9tZW50JztcclxuLyogaW1wb3J0IHsgREFURSB9IGZyb20gJy4uL25neC1kcnAubW9kdWxlJzsgKi9cclxuXHJcbmV4cG9ydCBjb25zdCBEQVRFID0gbmV3IEluamVjdGlvblRva2VuPE1vbWVudD4oJ2RhdGUnKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJhbmdlU3RvcmVTZXJ2aWNlIHtcclxuICByYW5nZVVwZGF0ZSQ6IFN1YmplY3Q8UmFuZ2U+ID0gbmV3IFN1YmplY3Q8UmFuZ2U+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChEQVRFKSBwcml2YXRlIF9mcm9tRGF0ZTogTW9tZW50LFxyXG4gICAgQEluamVjdChEQVRFKSBwcml2YXRlIF90b0RhdGU/OiBNb21lbnRcclxuICApIHt9XHJcblxyXG4gIC8qIHNldCBmcm9tRGF0ZShmcm9tRGF0ZTpNb21lbnQpIHtcclxuICAgIHRoaXMuX2Zyb21EYXRlID0gZnJvbURhdGU7XHJcbiAgfSAqL1xyXG5cclxuICBnZXQgZnJvbURhdGUoKTogTW9tZW50IHtcclxuICAgIHJldHVybiB0aGlzLl9mcm9tRGF0ZTtcclxuICB9XHJcblxyXG4gIC8qIHNldCB0b0RhdGUodG9EYXRlOk1vbWVudCkge1xyXG4gICAgdGhpcy5fdG9EYXRlID0gdG9EYXRlO1xyXG4gIH0gKi9cclxuXHJcbiAgZ2V0IHRvRGF0ZSgpOiBNb21lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RvRGF0ZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVJhbmdlKGZyb21EYXRlOiBNb21lbnQgPSB0aGlzLl9mcm9tRGF0ZSwgdG9EYXRlOiBNb21lbnQgPSB0aGlzLl90b0RhdGUpIHtcclxuICAgIHRoaXMuX2Zyb21EYXRlID0gZnJvbURhdGU7XHJcbiAgICB0aGlzLl90b0RhdGUgPSB0b0RhdGU7XHJcbiAgICB0aGlzLnJhbmdlVXBkYXRlJC5uZXh0KHsgZnJvbURhdGU6IHRoaXMuX2Zyb21EYXRlLCB0b0RhdGU6IHRoaXMuX3RvRGF0ZSB9KTtcclxuICB9XHJcbn1cclxuIl19