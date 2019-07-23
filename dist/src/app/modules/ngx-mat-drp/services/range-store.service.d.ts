import { InjectionToken } from '@angular/core';
import { Range } from '../model/model';
import { Subject } from 'rxjs';
import { Moment } from 'moment';
export declare const DATE: InjectionToken<Moment>;
export declare class RangeStoreService {
    private _fromDate;
    private _toDate?;
    rangeUpdate$: Subject<Range>;
    constructor(_fromDate: Moment, _toDate?: Moment);
    readonly fromDate: Moment;
    readonly toDate: Moment;
    updateRange(fromDate?: Moment, toDate?: Moment): void;
}
