import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PresetItem, NgxDrpOptions } from '../model/model';
import { RangeStoreService } from '../services/range-store.service';
import { OverlayRef } from '@angular/cdk/overlay';
import { ConfigStoreService } from '../services/config-store.service';
import { pickerOverlayAnimations } from './picker-overlay.animations';

@Component({
  selector: 'ngx-mat-drp-picker-overlay',
  templateUrl: './picker-overlay.component.html',
  styleUrls: ['./picker-overlay.component.css'],
  animations: [pickerOverlayAnimations.transformPanel],
  encapsulation: ViewEncapsulation.None
})
export class PickerOverlayComponent implements OnInit {
  fromDate: Date;
  toDate: Date;
  fromMinDate: Date;
  fromMaxDate: Date;
  toMinDate: Date;
  toMaxDate: Date;
  presets: Array<PresetItem> = [];
  startDatePrefix: string;
  endDatePrefix: string;
  applyLabel: string;
  rangeLabel: string;
  cancelLabel: string;
  shouldAnimate: string;
  singleDate: boolean;

  constructor(
    private rangeStoreService: RangeStoreService,
    private configStoreService: ConfigStoreService,
    private overlayRef: OverlayRef
  ) {}

  ngOnInit() {
    this.fromDate = this.rangeStoreService.fromDate;
    this.toDate = this.rangeStoreService.toDate;
    this.startDatePrefix = this.configStoreService.ngxDrpOptions.startDatePrefix || 'FROM:';
    this.endDatePrefix = this.configStoreService.ngxDrpOptions.endDatePrefix || 'TO:';
    this.applyLabel = this.configStoreService.ngxDrpOptions.applyLabel || 'Apply';
    this.cancelLabel = this.configStoreService.ngxDrpOptions.cancelLabel || 'Cancel';
    this.presets = this.configStoreService.ngxDrpOptions.presets;
    this.shouldAnimate = this.configStoreService.ngxDrpOptions.animation
      ? 'enter'
      : 'noop';
    ({
      fromDate: this.fromMinDate,
      toDate: this.fromMaxDate
    } = this.configStoreService.ngxDrpOptions.fromMinMax);
    ({
      fromDate: this.toMinDate,
      toDate: this.toMaxDate
    } = this.configStoreService.ngxDrpOptions.toMinMax);
    this.setSingleDate(this.configStoreService.ngxDrpOptions.singleDate);
  }

  updateFromDate(date) {
    this.fromDate = date;
    // In single-date mode, on click a date in the calendar, the picker closes.
    if (this.singleDate) { this.applyNewDates(null); }
  }

  updateToDate(date) {
    this.toDate = date;
  }

  updateRangeByPreset(presetItem: PresetItem) {
    this.updateFromDate(new Date(presetItem.range.fromDate));

    if (!this.singleDate) { this.updateToDate(new Date(presetItem.range.toDate)); }

    // In single-date mode, on click preset button, the picker closes.
    if (this.singleDate) { this.applyNewDates(void 0); }
  }

  applyNewDates(e) {
    this.rangeStoreService.updateRange(this.fromDate, this.configStoreService.ngxDrpOptions.singleDate ? null : this.toDate);
    this.disposeOverLay();
  }

  addEndDate(e) {
    this.configStoreService.ngxDrpOptions.singleDate = !this.configStoreService.ngxDrpOptions.singleDate;
    this.setSingleDate(this.configStoreService.ngxDrpOptions.singleDate);
  }
  discardNewDates(e) {
    // this.rangeStoreService.updateRange();
    this.disposeOverLay();
  }

  private disposeOverLay() {
    this.overlayRef.dispose();
  }

  private setSingleDate(singleDate: boolean) {
    this.singleDate = singleDate;
    this.rangeLabel = this.getRangeLabel(singleDate);
  }
  private getRangeLabel(singleDate: boolean): string {
    if (!!singleDate) {
      return this.configStoreService.ngxDrpOptions.addEndDateLabel || 'Add End-Date';
    } else {
      return this.configStoreService.ngxDrpOptions.removeEndDateLabel || 'Remove End-Date';
    }
  }
}
