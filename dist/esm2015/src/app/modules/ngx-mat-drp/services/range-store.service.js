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
     * @param {?=} _toDate
     */
    constructor(_fromDate, _toDate) {
        this._fromDate = _fromDate;
        this._toDate = _toDate;
        this.rangeUpdate$ = new Subject();
    }
    /* set fromDate(fromDate:Moment) {
        this._fromDate = fromDate;
      } */
    /**
     * @return {?}
     */
    get fromDate() {
        return this._fromDate;
    }
    /* set toDate(toDate:Moment) {
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
    { type: undefined, decorators: [{ type: Inject, args: [DATE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DATE,] }] }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2Utc3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXQtZGF0ZXJhbmdlLXBpY2tlci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZ3gtbWF0LWRycC9zZXJ2aWNlcy9yYW5nZS1zdG9yZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBSS9CLE1BQU0sT0FBTyxJQUFJLEdBQUcsSUFBSSxjQUFjLENBQVMsTUFBTSxDQUFDO0FBR3RELE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBRzVCLFlBQ3dCLFNBQWlCLEVBQ2pCLE9BQWdCO1FBRGhCLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUp4QyxpQkFBWSxHQUFtQixJQUFJLE9BQU8sRUFBUyxDQUFDO0lBS2pELENBQUM7Ozs7Ozs7SUFNSixJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7Ozs7OztJQU1ELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7Ozs7SUFFRCxXQUFXLENBQUMsV0FBbUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFpQixJQUFJLENBQUMsT0FBTztRQUMxRSxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7WUE3QkYsVUFBVTs7Ozs0Q0FLTixNQUFNLFNBQUMsSUFBSTs0Q0FDWCxNQUFNLFNBQUMsSUFBSTs7OztJQUpkLHlDQUFvRDs7Ozs7SUFHbEQsc0NBQXVDOzs7OztJQUN2QyxvQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJhbmdlIH0gZnJvbSAnLi4vbW9kZWwvbW9kZWwnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1vbWVudCB9IGZyb20gJ21vbWVudCc7XHJcbi8qIGltcG9ydCB7IERBVEUgfSBmcm9tICcuLi9uZ3gtZHJwLm1vZHVsZSc7ICovXHJcblxyXG5leHBvcnQgY29uc3QgREFURSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxNb21lbnQ+KCdkYXRlJyk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSYW5nZVN0b3JlU2VydmljZSB7XHJcbiAgcmFuZ2VVcGRhdGUkOiBTdWJqZWN0PFJhbmdlPiA9IG5ldyBTdWJqZWN0PFJhbmdlPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoREFURSkgcHJpdmF0ZSBfZnJvbURhdGU6IE1vbWVudCxcclxuICAgIEBJbmplY3QoREFURSkgcHJpdmF0ZSBfdG9EYXRlPzogTW9tZW50XHJcbiAgKSB7fVxyXG5cclxuICAvKiBzZXQgZnJvbURhdGUoZnJvbURhdGU6TW9tZW50KSB7XHJcbiAgICB0aGlzLl9mcm9tRGF0ZSA9IGZyb21EYXRlO1xyXG4gIH0gKi9cclxuXHJcbiAgZ2V0IGZyb21EYXRlKCk6IE1vbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZnJvbURhdGU7XHJcbiAgfVxyXG5cclxuICAvKiBzZXQgdG9EYXRlKHRvRGF0ZTpNb21lbnQpIHtcclxuICAgIHRoaXMuX3RvRGF0ZSA9IHRvRGF0ZTtcclxuICB9ICovXHJcblxyXG4gIGdldCB0b0RhdGUoKTogTW9tZW50IHtcclxuICAgIHJldHVybiB0aGlzLl90b0RhdGU7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVSYW5nZShmcm9tRGF0ZTogTW9tZW50ID0gdGhpcy5fZnJvbURhdGUsIHRvRGF0ZTogTW9tZW50ID0gdGhpcy5fdG9EYXRlKSB7XHJcbiAgICB0aGlzLl9mcm9tRGF0ZSA9IGZyb21EYXRlO1xyXG4gICAgdGhpcy5fdG9EYXRlID0gdG9EYXRlO1xyXG4gICAgdGhpcy5yYW5nZVVwZGF0ZSQubmV4dCh7IGZyb21EYXRlOiB0aGlzLl9mcm9tRGF0ZSwgdG9EYXRlOiB0aGlzLl90b0RhdGUgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==