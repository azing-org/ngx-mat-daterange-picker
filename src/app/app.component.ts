import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {
  Range,
  NgxDrpOptions,
  PresetItem
} from './modules/ngx-mat-drp/model/model';

@Component({
  selector: 'ngx-mat-drp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  range: Range = { fromDate: new Date(), toDate: new Date() };
  options: NgxDrpOptions;
  presets: Array<PresetItem> = [];
  @ViewChild('pickerOne') pickerOne;

  ngOnInit() {
    const today = new Date();
    const fromMin = new Date(today.getFullYear(), today.getMonth() - 2, 1);
    const fromMax = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const toMin = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const toMax = new Date(today.getFullYear(), today.getMonth() + 2, 0);

    this.setupPresets();
    this.options = {
      presets: this.presets,
      format: 'mediumDate',
      range: { fromDate: today, toDate: today },
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
    const backDate = numOfDays => {
      // tslint:disable no-shadowed-variable
      const today = new Date();
      return new Date(today.setDate(today.getDate() - numOfDays));
    };
    const getNextWeekDay = weekDay => {
      // tslint:disable no-shadowed-variable
      const today = new Date();
      return new Date(today.setDate(today.getDate() - today.getDay() + 7 + weekDay));
    };

    const tomorrow = backDate(-1);
    const today = new Date();
    const nextWeek = getNextWeekDay(1); // next Monday
    const secondWeek = getNextWeekDay(8); // second next Monday
    const nextMonthStart = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    const secondMonthStart = new Date(today.getFullYear(), today.getMonth() + 2, 1);
    const yesterday = backDate(1);
    const minus7 = backDate(7);
    const minus30 = backDate(30);
    const currMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    const currMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);

    this.presets = [
      {
        presetLabel: 'Today',
        range: { fromDate: today, toDate: today }
      },
      {
        presetLabel: 'Tomorrow',
        range: { fromDate: tomorrow, toDate: tomorrow }
      },
      {
        presetLabel: 'Next Week',
        range: { fromDate: nextWeek, toDate: nextWeek }
      },
      {
        presetLabel: 'Second Week',
        range: { fromDate: secondWeek, toDate: secondWeek }
      },
      {
        presetLabel: 'Next Month',
        range: { fromDate: nextMonthStart, toDate: nextMonthStart }
      },
      {
        presetLabel: 'Second Month',
        range: { fromDate: secondMonthStart, toDate: secondMonthStart }
      },
      // {
      //   presetLabel: 'Yesterday',
      //   range: { fromDate: yesterday, toDate: today }
      // },
      // {
      //   presetLabel: 'Last 7 Days',
      //   range: { fromDate: minus7, toDate: today }
      // },
      // {
      //   presetLabel: 'Last 30 Days',
      //   range: { fromDate: minus30, toDate: today }
      // },
      // {
      //   presetLabel: 'This Month',
      //   range: { fromDate: currMonthStart, toDate: currMonthEnd }
      // },
      // {
      //   presetLabel: 'Last Month',
      //   range: { fromDate: lastMonthStart, toDate: lastMonthEnd }
      // }
    ];
  }

  reset() {
    const today = new Date();
    const currMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    const currMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    this.pickerOne.resetDates({ fromDate: currMonthStart, toDate: currMonthEnd });
  }
}
