/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class ConfigStoreService {
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
    { type: Injectable }
];
/** @nocollapse */
ConfigStoreService.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXN0b3JlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0LWRhdGVyYW5nZS1waWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbmd4LW1hdC1kcnAvc2VydmljZXMvY29uZmlnLXN0b3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsTUFBTSxPQUFPLGtCQUFrQjtJQVk3QjtRQVZRLG1CQUFjLEdBQUc7WUFDdkIsZUFBZSxFQUFFLEtBQUs7WUFDdEIsU0FBUyxFQUFFLElBQUk7WUFDZixNQUFNLEVBQUUsT0FBTztZQUNmLFVBQVUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUM1QyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDMUMsVUFBVSxFQUFFLGNBQWM7WUFDMUIsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQztJQUVhLENBQUM7Ozs7SUFFaEIsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsSUFBSSxhQUFhLENBQUMsT0FBc0I7UUFDdEMsSUFBSSxDQUFDLGNBQWMscUJBQVEsSUFBSSxDQUFDLGNBQWMsRUFBSyxPQUFPLENBQUUsQ0FBQztJQUMvRCxDQUFDOzs7WUFyQkYsVUFBVTs7Ozs7Ozs7O0lBRVQsNENBQXNDOzs7OztJQUN0Qyw0Q0FRRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmd4RHJwT3B0aW9ucyB9IGZyb20gJy4uL21vZGVsL21vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbmZpZ1N0b3JlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfbmd4RHJwT3B0aW9uczogTmd4RHJwT3B0aW9ucztcclxuICBwcml2YXRlIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgZXhjbHVkZVdlZWtlbmRzOiBmYWxzZSxcclxuICAgIGFuaW1hdGlvbjogdHJ1ZSxcclxuICAgIGxvY2FsZTogJ2VuLVVTJyxcclxuICAgIGZyb21NaW5NYXg6IHsgZnJvbURhdGU6IG51bGwsIHRvRGF0ZTogbnVsbCB9LFxyXG4gICAgdG9NaW5NYXg6IHsgZnJvbURhdGU6IG51bGwsIHRvRGF0ZTogbnVsbCB9LFxyXG4gICAgcmFuZ2VMYWJlbDogJ0FkZCBFbmQtRGF0ZScsXHJcbiAgICBzaW5nbGVEYXRlOiB0cnVlLCAvLyBmYWxzZSA9IGRhdGVSYW5nZVxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgZ2V0IG5neERycE9wdGlvbnMoKTogTmd4RHJwT3B0aW9ucyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmd4RHJwT3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNldCBuZ3hEcnBPcHRpb25zKG9wdGlvbnM6IE5neERycE9wdGlvbnMpIHtcclxuICAgIHRoaXMuX25neERycE9wdGlvbnMgPSB7IC4uLnRoaXMuZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfTtcclxuICB9XHJcbn1cclxuIl19