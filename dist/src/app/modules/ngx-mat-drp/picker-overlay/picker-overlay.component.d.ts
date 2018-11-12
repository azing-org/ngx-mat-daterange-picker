import { OnInit } from '@angular/core';
import { PresetItem } from '../model/model';
import { RangeStoreService } from '../services/range-store.service';
import { OverlayRef } from '@angular/cdk/overlay';
import { ConfigStoreService } from '../services/config-store.service';
export declare class PickerOverlayComponent implements OnInit {
    private rangeStoreService;
    private configStoreService;
    private overlayRef;
    fromDate: Date;
    toDate: Date;
    fromMinDate: Date;
    fromMaxDate: Date;
    toMinDate: Date;
    toMaxDate: Date;
    presets: Array<PresetItem>;
    startDatePrefix: string;
    endDatePrefix: string;
    applyLabel: string;
    rangeLabel: string;
    cancelLabel: string;
    shouldAnimate: string;
    singleDate: boolean;
    constructor(rangeStoreService: RangeStoreService, configStoreService: ConfigStoreService, overlayRef: OverlayRef);
    ngOnInit(): void;
    updateFromDate(date: any): void;
    updateToDate(date: any): void;
    updateRangeByPreset(presetItem: PresetItem): void;
    applyNewDates(e: any): void;
    addEndDate(e: any): void;
    discardNewDates(e: any): void;
    private disposeOverLay();
    private setSingleDate(singleDate);
    private getRangeLabel(singleDate);
}
