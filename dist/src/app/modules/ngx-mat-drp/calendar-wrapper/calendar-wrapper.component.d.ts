import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MatCalendar, MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { ConfigStoreService } from '../services/config-store.service';
export declare class CalendarWrapperComponent implements OnChanges {
    private configStore;
    matCalendar: MatCalendar<Date>;
    readonly selectedDateChange: EventEmitter<Date>;
    dateFormat: string;
    selectedDate: Date;
    prefixLabel: string;
    minDate: Date;
    maxDate: Date;
    /**
     * If selectedDate is before fromDate, mark the selectedDate date in red.
     */
    fromDate: Date;
    weekendFilter: (d: Date) => boolean;
    constructor(configStore: ConfigStoreService);
    ngOnChanges(changes: SimpleChanges): void;
    onSelectedChange(date: any): void;
    onYearSelected(e: any): void;
    onUserSelection(e: any): void;
    dateClass(): (date: Date) => MatCalendarCellCssClasses;
    private renderMatCalendarView;
}
