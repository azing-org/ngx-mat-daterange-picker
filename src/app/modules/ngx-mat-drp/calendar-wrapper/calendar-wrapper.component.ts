import {
  Component,
  ViewChild,
  Output,
  Input,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { MatCalendar, MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { ConfigStoreService } from '../services/config-store.service';

@Component({
  selector: 'calendar-wrapper',
  templateUrl: './calendar-wrapper.component.html',
  styleUrls: ['./calendar-wrapper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarWrapperComponent implements OnChanges {
  @ViewChild(MatCalendar)
  matCalendar: MatCalendar<Date>;

  @Output()
  readonly selectedDateChange: EventEmitter<Date> = new EventEmitter<Date>();

  dateFormat: string;
  @Input() selectedDate: Date;
  @Input() prefixLabel: string;
  @Input() minDate: Date;
  @Input() maxDate: Date;

  /**
   * If selectedDate is before fromDate, mark the selectedDate date in red.
   */
  @Input() fromDate: Date;
  weekendFilter = (d: Date) => true;

  constructor(private configStore: ConfigStoreService) {
    this.dateFormat = configStore.ngxDrpOptions.format;
    if (configStore.ngxDrpOptions.excludeWeekends) {
      this.weekendFilter = (d: Date): boolean => {
        const day = d.getDay();
        return day !== 0 && day !== 6;
      };
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!!changes.selectedDate) {
      // Necessary to force view refresh.
      this.matCalendar.activeDate = changes.selectedDate.currentValue;
    }

    if (!!changes.fromDate) {
      // Force rendering.
      this.renderMatCalendarView();
    }
  }

  onSelectedChange(date) {
    this.selectedDateChange.emit(date);
  }

  onYearSelected(e) {}

  onUserSelection(e) {}

  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      if (!this.fromDate) { return; }
      if (this.fromDate <= date) { return; }
      // console.log('stv date', date);
      // selectedDate is before fromDate
      return 'before-from-date';
    };
  }

  // force rendering
  private renderMatCalendarView() {
    // Store initial value.
    const minDate = this.minDate;

    // Change to any date, only to force rendering.
    this.minDate = new Date('2001-01-01');

    // Wait to change-detection function has terminated to execute a new change to force rendering the rows and cells.
    setTimeout(() => {
      this.minDate = minDate; // Restore initial value.
    }, 0);
  }
}
