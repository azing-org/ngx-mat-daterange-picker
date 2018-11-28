/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';
/* import { DATE } from '../ngx-drp.module'; */
/** @type {?} */
export const DATE = new InjectionToken('date');
export class RangeStoreService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2Utc3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXQtZGF0ZXJhbmdlLXBpY2tlci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZ3gtbWF0LWRycC9zZXJ2aWNlcy9yYW5nZS1zdG9yZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBRy9CLE1BQU0sT0FBTyxJQUFJLEdBQUcsSUFBSSxjQUFjLENBQU8sTUFBTSxDQUFDO0FBR3BELE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBRzVCLFlBQ3dCLFNBQWUsRUFDZixPQUFhO1FBRGIsY0FBUyxHQUFULFNBQVMsQ0FBTTtRQUNmLFlBQU8sR0FBUCxPQUFPLENBQU07UUFKckMsaUJBQVksR0FBbUIsSUFBSSxPQUFPLEVBQVMsQ0FBQztJQUtqRCxDQUFDOzs7Ozs7O0lBTUosSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7Ozs7SUFNRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7Ozs7O0lBRUQsV0FBVyxDQUFDLFdBQWlCLElBQUksQ0FBQyxTQUFTLEVBQUUsU0FBZSxJQUFJLENBQUMsT0FBTztRQUN0RSxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7WUE3QkYsVUFBVTs7OztZQUswQixJQUFJLHVCQUFwQyxNQUFNLFNBQUMsSUFBSTtZQUNtQixJQUFJLHVCQUFsQyxNQUFNLFNBQUMsSUFBSTs7OztJQUpkLHlDQUFvRDs7Ozs7SUFHbEQsc0NBQXFDOzs7OztJQUNyQyxvQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJhbmdlIH0gZnJvbSAnLi4vbW9kZWwvbW9kZWwnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbi8qIGltcG9ydCB7IERBVEUgfSBmcm9tICcuLi9uZ3gtZHJwLm1vZHVsZSc7ICovXHJcblxyXG5leHBvcnQgY29uc3QgREFURSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxEYXRlPignZGF0ZScpO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUmFuZ2VTdG9yZVNlcnZpY2Uge1xyXG4gIHJhbmdlVXBkYXRlJDogU3ViamVjdDxSYW5nZT4gPSBuZXcgU3ViamVjdDxSYW5nZT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KERBVEUpIHByaXZhdGUgX2Zyb21EYXRlOiBEYXRlLFxyXG4gICAgQEluamVjdChEQVRFKSBwcml2YXRlIF90b0RhdGU6IERhdGVcclxuICApIHt9XHJcblxyXG4gIC8qIHNldCBmcm9tRGF0ZShmcm9tRGF0ZTpEYXRlKSB7XHJcbiAgICB0aGlzLl9mcm9tRGF0ZSA9IGZyb21EYXRlO1xyXG4gIH0gKi9cclxuXHJcbiAgZ2V0IGZyb21EYXRlKCk6IERhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Zyb21EYXRlO1xyXG4gIH1cclxuXHJcbiAgLyogc2V0IHRvRGF0ZSh0b0RhdGU6RGF0ZSkge1xyXG4gICAgdGhpcy5fdG9EYXRlID0gdG9EYXRlO1xyXG4gIH0gKi9cclxuXHJcbiAgZ2V0IHRvRGF0ZSgpOiBEYXRlIHtcclxuICAgIHJldHVybiB0aGlzLl90b0RhdGU7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVSYW5nZShmcm9tRGF0ZTogRGF0ZSA9IHRoaXMuX2Zyb21EYXRlLCB0b0RhdGU6IERhdGUgPSB0aGlzLl90b0RhdGUpIHtcclxuICAgIHRoaXMuX2Zyb21EYXRlID0gZnJvbURhdGU7XHJcbiAgICB0aGlzLl90b0RhdGUgPSB0b0RhdGU7XHJcbiAgICB0aGlzLnJhbmdlVXBkYXRlJC5uZXh0KHsgZnJvbURhdGU6IHRoaXMuX2Zyb21EYXRlLCB0b0RhdGU6IHRoaXMuX3RvRGF0ZSB9KTtcclxuICB9XHJcbn1cclxuIl19