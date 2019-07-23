import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {
  Range,
  NgxDrpOptions,
  PresetItem
} from './modules/ngx-mat-drp/model/model';
import * as momentImported from 'moment'; const moment = momentImported;

@Component({
  selector: 'ngx-mat-drp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  range: Range = { fromDate: moment(), toDate: moment() };
  options: NgxDrpOptions;
  presets: Array<PresetItem> = [];
  @ViewChild('pickerOne') pickerOne;

  ngOnInit() {
    // const today = moment();
    // const fromMin = moment().add(-2, 'months').startOf('month');
    // const fromMax = moment().add(1, 'months').endOf('month');
    // const toMin = moment().add(-1, 'months').startOf('month');
    // const toMax = moment().add(2, 'months').endOf('month');

    this.setupPresets();
    this.options = {
      presets: this.presets,
      format: 'mediumDate',
      range: { fromDate: moment() },
      applyLabel: 'OK',
      singleDate: true, // default = true
      // excludeWeekends:true,
      // fromMinMax: {fromDate:fromMin, toDate:fromMax},
      // toMinMax: {fromDate:toMin, toDate:toMax},
    };
  }

  updateRange(range: Range) {
    this.range = range;
  }

  setupPresets() {
    this.presets = [
      {
        presetLabel: 'Today',
        range: { fromDate: moment() }
      },
      {
        presetLabel: 'Tomorrow',
        range: { fromDate: moment().add(1, 'days') }
      },
      {
        presetLabel: 'Next Week',
        range: { fromDate: moment().day(1).add(1, 'weeks') }
      },
      {
        presetLabel: 'Second Week',
        range: { fromDate: moment().day(1).add(2, 'weeks') }
      },
      {
        presetLabel: 'Next Month',
        range: { fromDate: moment().startOf('month').add(1, 'months').add(6, 'days').day(1) }
      },
      {
        presetLabel: 'Second Month',
        range: { fromDate: moment().startOf('month').add(2, 'months').add(6, 'days').day(1) }
      },
    ];
  }

  reset() {
    const today = moment();
    const currMonthStart = moment().startOf('month');
    const currMonthEnd = moment().endOf('month');
    this.pickerOne.resetDates({ fromDate: currMonthStart, toDate: currMonthEnd });
  }
}
