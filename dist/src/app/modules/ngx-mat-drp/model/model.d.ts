import { Moment } from 'moment';
export interface PresetItem {
    presetLabel: string;
    range: Range;
}
export interface Range {
    fromDate: Moment;
    toDate?: Moment;
}
export interface CalendarOverlayConfig {
    panelClass?: string;
    hasBackdrop?: boolean;
    backdropClass?: string;
    shouldCloseOnBackdropClick?: boolean;
}
export interface NgxDrpOptions {
    presets: Array<PresetItem>;
    format: string;
    range: Range;
    excludeWeekends?: boolean;
    locale?: string;
    fromMinMax?: Range;
    toMinMax?: Range;
    applyLabel?: string;
    addEndDateLabel?: string;
    removeEndDateLabel?: string;
    rangeLabel?: string;
    cancelLabel?: string;
    animation?: boolean;
    calendarOverlayConfig?: CalendarOverlayConfig;
    placeholder?: string;
    startDatePrefix?: string;
    endDatePrefix?: string;
    singleDate?: boolean;
}
