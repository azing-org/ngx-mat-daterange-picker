/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
export class PresetsComponent {
    constructor() {
        this.presetChanged = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} event
     * @return {?}
     */
    setPresetPeriod(event) {
        this.presetChanged.emit(event);
    }
}
PresetsComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-drp-presets',
                template: "<div>\r\n  <ul class=\"ngx-mat-drp-presets-list\">\r\n    <li *ngFor=\"let preset of presets\" (click)=\"setPresetPeriod(preset)\"> {{preset.presetLabel}} </li>\r\n  </ul>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-mat-drp-presets-list{list-style-type:none;margin:0;padding:0}.ngx-mat-drp-presets-list li{margin:5px 0;padding:4%;cursor:pointer;background:#fafafa;color:#3f51b5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ngx-mat-drp-presets-list li:hover{background:#3f51b5;color:#fff}"]
            }] }
];
/** @nocollapse */
PresetsComponent.ctorParameters = () => [];
PresetsComponent.propDecorators = {
    presets: [{ type: Input }],
    presetChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    PresetsComponent.prototype.presets;
    /** @type {?} */
    PresetsComponent.prototype.presetChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2V0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0LWRhdGVyYW5nZS1waWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbmd4LW1hdC1kcnAvcHJlc2V0cy9wcmVzZXRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxNQUFNLEVBQ04sWUFBWSxFQUNaLEtBQUssRUFDTCx1QkFBdUIsRUFFeEIsTUFBTSxlQUFlLENBQUM7QUFTdkIsTUFBTSxPQUFPLGdCQUFnQjtJQU0zQjtRQUZTLGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFFckQsQ0FBQzs7OztJQUVoQixRQUFRLEtBQUksQ0FBQzs7Ozs7SUFFYixlQUFlLENBQUMsS0FBSztRQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLGlNQUF1QztnQkFFdkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7OztzQkFFRSxLQUFLOzRCQUVMLE1BQU07Ozs7SUFGUCxtQ0FDMkI7O0lBQzNCLHlDQUNvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByZXNldEl0ZW0gfSBmcm9tICcuLi9tb2RlbC9tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21hdC1kcnAtcHJlc2V0cycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3ByZXNldHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3ByZXNldHMuY29tcG9uZW50LmNzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcmVzZXRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIHByZXNldHM6IEFycmF5PFByZXNldEl0ZW0+O1xyXG4gIEBPdXRwdXQoKVxyXG4gIHJlYWRvbmx5IHByZXNldENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBzZXRQcmVzZXRQZXJpb2QoZXZlbnQpIHtcclxuICAgIHRoaXMucHJlc2V0Q2hhbmdlZC5lbWl0KGV2ZW50KTtcclxuICB9XHJcbn1cclxuIl19