import { Injectable } from '@angular/core';
import { NgxDrpOptions } from '../model/model';

@Injectable()
export class ConfigStoreService {
  private _ngxDrpOptions: NgxDrpOptions;
  private defaultOptions = {
    excludeWeekends: false,
    animation: true,
    locale: 'en-US',
    fromMinMax: { fromDate: null, toDate: null },
    toMinMax: { fromDate: null, toDate: null },
    singleDate: true, // false = dateRange
  };

  constructor() {}

  get ngxDrpOptions(): NgxDrpOptions {
    return this._ngxDrpOptions;
  }

  set ngxDrpOptions(options: NgxDrpOptions) {
    this._ngxDrpOptions = { ...this.defaultOptions, ...options };
  }
}
