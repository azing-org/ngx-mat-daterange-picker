import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Range } from '../model/model';
import { Subject } from 'rxjs';
import { Moment } from 'moment';
/* import { DATE } from '../ngx-drp.module'; */

export const DATE = new InjectionToken<Moment>('date');

@Injectable()
export class RangeStoreService {
  rangeUpdate$: Subject<Range> = new Subject<Range>();

  constructor(
    @Inject(DATE) private _fromDate: Moment,
    @Inject(DATE) private _toDate?: Moment
  ) {}

  /* set fromDate(fromDate:Moment) {
    this._fromDate = fromDate;
  } */

  get fromDate(): Moment {
    return this._fromDate;
  }

  /* set toDate(toDate:Moment) {
    this._toDate = toDate;
  } */

  get toDate(): Moment {
    return this._toDate;
  }

  updateRange(fromDate: Moment = this._fromDate, toDate: Moment = this._toDate) {
    this._fromDate = fromDate;
    this._toDate = toDate;
    this.rangeUpdate$.next({ fromDate: this._fromDate, toDate: this._toDate });
  }
}
