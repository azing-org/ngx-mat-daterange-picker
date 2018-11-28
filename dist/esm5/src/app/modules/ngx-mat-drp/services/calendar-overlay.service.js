/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { takeWhile } from 'rxjs/operators';
import { PickerOverlayComponent } from '../picker-overlay/picker-overlay.component';
/** @type {?} */
var DEFAULT_CONFIG = {
    panelClass: 'ngx-mat-drp-overlay',
    hasBackdrop: true,
    backdropClass: 'ngx-mat-drp-overlay-backdrop',
    shouldCloseOnBackdropClick: true
};
var CalendarOverlayService = /** @class */ (function () {
    function CalendarOverlayService(overlay, injector) {
        this.overlay = overlay;
        this.injector = injector;
    }
    /**
     * @param {?=} config
     * @param {?=} hostElemRef
     * @return {?}
     */
    CalendarOverlayService.prototype.open = /**
     * @param {?=} config
     * @param {?=} hostElemRef
     * @return {?}
     */
    function (config, hostElemRef) {
        if (config === void 0) { config = {}; }
        this.hostElemRef = hostElemRef;
        /** @type {?} */
        var overlayConfig = tslib_1.__assign({}, DEFAULT_CONFIG, config);
        /** @type {?} */
        var overlayRef = this.createOverlay(overlayConfig);
        /** @type {?} */
        var portalInjector = this.createInjector(overlayRef);
        /** @type {?} */
        var calendarPortal = new ComponentPortal(PickerOverlayComponent, null, portalInjector);
        overlayRef.attach(calendarPortal);
        overlayRef
            .backdropClick()
            .pipe(takeWhile(function () { return overlayConfig.shouldCloseOnBackdropClick; }))
            .subscribe(function () { return overlayRef.dispose(); });
        return overlayRef;
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    CalendarOverlayService.prototype.createOverlay = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var overlayConfig = this.getOverlayConfig(config);
        return this.overlay.create(overlayConfig);
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    CalendarOverlayService.prototype.getOverlayConfig = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(this.hostElemRef)
            .withFlexibleDimensions(false)
            .withViewportMargin(8)
            .withDefaultOffsetY(12)
            .withPositions([
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top'
            },
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom'
            },
            {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top'
            },
            {
                originX: 'end',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'bottom'
            }
        ]);
        /** @type {?} */
        var overlayConfig = new OverlayConfig({
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass,
            panelClass: config.panelClass,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: positionStrategy
        });
        return overlayConfig;
    };
    /**
     * @private
     * @param {?} overlayRef
     * @return {?}
     */
    CalendarOverlayService.prototype.createInjector = /**
     * @private
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        /** @type {?} */
        var injectionTokens = new WeakMap();
        injectionTokens.set(OverlayRef, overlayRef);
        return new PortalInjector(this.injector, injectionTokens);
    };
    CalendarOverlayService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CalendarOverlayService.ctorParameters = function () { return [
        { type: Overlay },
        { type: Injector }
    ]; };
    return CalendarOverlayService;
}());
export { CalendarOverlayService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CalendarOverlayService.prototype.hostElemRef;
    /**
     * @type {?}
     * @private
     */
    CalendarOverlayService.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    CalendarOverlayService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItb3ZlcmxheS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdC1kYXRlcmFuZ2UtcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL25neC1tYXQtZHJwL3NlcnZpY2VzL2NhbGVuZGFyLW92ZXJsYXkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWMsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOztJQUU5RSxjQUFjLEdBQTBCO0lBQzVDLFVBQVUsRUFBRSxxQkFBcUI7SUFDakMsV0FBVyxFQUFFLElBQUk7SUFDakIsYUFBYSxFQUFFLDhCQUE4QjtJQUM3QywwQkFBMEIsRUFBRSxJQUFJO0NBQ2pDO0FBRUQ7SUFJRSxnQ0FBb0IsT0FBZ0IsRUFBVSxRQUFrQjtRQUE1QyxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7Ozs7OztJQUVwRSxxQ0FBSTs7Ozs7SUFBSixVQUNFLE1BQWtDLEVBQ2xDLFdBQXVCO1FBRHZCLHVCQUFBLEVBQUEsV0FBa0M7UUFHbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7O1lBQ3pCLGFBQWEsd0JBQVEsY0FBYyxFQUFLLE1BQU0sQ0FBRTs7WUFDaEQsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDOztZQUM5QyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7O1lBQ2hELGNBQWMsR0FBRyxJQUFJLGVBQWUsQ0FDeEMsc0JBQXNCLEVBQ3RCLElBQUksRUFDSixjQUFjLENBQ2Y7UUFDRCxVQUFVLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWxDLFVBQVU7YUFDUCxhQUFhLEVBQUU7YUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxhQUFhLENBQUMsMEJBQTBCLEVBQXhDLENBQXdDLENBQUMsQ0FBQzthQUMvRCxTQUFTLENBQUMsY0FBTSxPQUFBLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO1FBRXpDLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Ozs7OztJQUVPLDhDQUFhOzs7OztJQUFyQixVQUFzQixNQUE2Qjs7WUFDM0MsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7UUFDbkQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7SUFFTyxpREFBZ0I7Ozs7O0lBQXhCLFVBQXlCLE1BQTZCOztZQUM5QyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTzthQUNsQyxRQUFRLEVBQUU7YUFDVixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JDLHNCQUFzQixDQUFDLEtBQUssQ0FBQzthQUM3QixrQkFBa0IsQ0FBQyxDQUFDLENBQUM7YUFDckIsa0JBQWtCLENBQUMsRUFBRSxDQUFDO2FBQ3RCLGFBQWEsQ0FBQztZQUNiO2dCQUNFLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixPQUFPLEVBQUUsUUFBUTtnQkFDakIsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE9BQU8sRUFBRSxLQUFLO2dCQUNkLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUUsUUFBUTthQUNuQjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxLQUFLO2dCQUNkLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixRQUFRLEVBQUUsS0FBSztnQkFDZixRQUFRLEVBQUUsS0FBSzthQUNoQjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxLQUFLO2dCQUNkLE9BQU8sRUFBRSxLQUFLO2dCQUNkLFFBQVEsRUFBRSxLQUFLO2dCQUNmLFFBQVEsRUFBRSxRQUFRO2FBQ25CO1NBQ0YsQ0FBQzs7WUFFRSxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUM7WUFDdEMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXO1lBQy9CLGFBQWEsRUFBRSxNQUFNLENBQUMsYUFBYTtZQUNuQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVU7WUFDN0IsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1lBQ3JELGdCQUFnQixrQkFBQTtTQUNqQixDQUFDO1FBRUYsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRU8sK0NBQWM7Ozs7O0lBQXRCLFVBQXVCLFVBQXNCOztZQUNyQyxlQUFlLEdBQUcsSUFBSSxPQUFPLEVBQUU7UUFDckMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFNUMsT0FBTyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQzVELENBQUM7O2dCQXBGRixVQUFVOzs7O2dCQWJGLE9BQU87Z0JBRGlCLFFBQVE7O0lBbUd6Qyw2QkFBQztDQUFBLEFBckZELElBcUZDO1NBcEZZLHNCQUFzQjs7Ozs7O0lBQ2pDLDZDQUFnQzs7Ozs7SUFFcEIseUNBQXdCOzs7OztJQUFFLDBDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEVsZW1lbnRSZWYsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlDb25maWcsIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCwgUG9ydGFsSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgTmd4RHJwT3B0aW9ucywgQ2FsZW5kYXJPdmVybGF5Q29uZmlnIH0gZnJvbSAnLi4vbW9kZWwvbW9kZWwnO1xyXG5pbXBvcnQgeyB0YWtlV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFBpY2tlck92ZXJsYXlDb21wb25lbnQgfSBmcm9tICcuLi9waWNrZXItb3ZlcmxheS9waWNrZXItb3ZlcmxheS5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgREVGQVVMVF9DT05GSUc6IENhbGVuZGFyT3ZlcmxheUNvbmZpZyA9IHtcclxuICBwYW5lbENsYXNzOiAnbmd4LW1hdC1kcnAtb3ZlcmxheScsXHJcbiAgaGFzQmFja2Ryb3A6IHRydWUsXHJcbiAgYmFja2Ryb3BDbGFzczogJ25neC1tYXQtZHJwLW92ZXJsYXktYmFja2Ryb3AnLFxyXG4gIHNob3VsZENsb3NlT25CYWNrZHJvcENsaWNrOiB0cnVlXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYWxlbmRhck92ZXJsYXlTZXJ2aWNlIHtcclxuICBwcml2YXRlIGhvc3RFbGVtUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxyXG5cclxuICBvcGVuKFxyXG4gICAgY29uZmlnOiBDYWxlbmRhck92ZXJsYXlDb25maWcgPSB7fSxcclxuICAgIGhvc3RFbGVtUmVmOiBFbGVtZW50UmVmXHJcbiAgKTogT3ZlcmxheVJlZiB7XHJcbiAgICB0aGlzLmhvc3RFbGVtUmVmID0gaG9zdEVsZW1SZWY7XHJcbiAgICBjb25zdCBvdmVybGF5Q29uZmlnID0geyAuLi5ERUZBVUxUX0NPTkZJRywgLi4uY29uZmlnIH07XHJcbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5jcmVhdGVPdmVybGF5KG92ZXJsYXlDb25maWcpO1xyXG4gICAgY29uc3QgcG9ydGFsSW5qZWN0b3IgPSB0aGlzLmNyZWF0ZUluamVjdG9yKG92ZXJsYXlSZWYpO1xyXG4gICAgY29uc3QgY2FsZW5kYXJQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKFxyXG4gICAgICBQaWNrZXJPdmVybGF5Q29tcG9uZW50LFxyXG4gICAgICBudWxsLFxyXG4gICAgICBwb3J0YWxJbmplY3RvclxyXG4gICAgKTtcclxuICAgIG92ZXJsYXlSZWYuYXR0YWNoKGNhbGVuZGFyUG9ydGFsKTtcclxuXHJcbiAgICBvdmVybGF5UmVmXHJcbiAgICAgIC5iYWNrZHJvcENsaWNrKClcclxuICAgICAgLnBpcGUodGFrZVdoaWxlKCgpID0+IG92ZXJsYXlDb25maWcuc2hvdWxkQ2xvc2VPbkJhY2tkcm9wQ2xpY2spKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IG92ZXJsYXlSZWYuZGlzcG9zZSgpKTtcclxuXHJcbiAgICByZXR1cm4gb3ZlcmxheVJlZjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlT3ZlcmxheShjb25maWc6IENhbGVuZGFyT3ZlcmxheUNvbmZpZyk6IE92ZXJsYXlSZWYge1xyXG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IHRoaXMuZ2V0T3ZlcmxheUNvbmZpZyhjb25maWcpO1xyXG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheS5jcmVhdGUob3ZlcmxheUNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE92ZXJsYXlDb25maWcoY29uZmlnOiBDYWxlbmRhck92ZXJsYXlDb25maWcpOiBPdmVybGF5Q29uZmlnIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcclxuICAgICAgLnBvc2l0aW9uKClcclxuICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5ob3N0RWxlbVJlZilcclxuICAgICAgLndpdGhGbGV4aWJsZURpbWVuc2lvbnMoZmFsc2UpXHJcbiAgICAgIC53aXRoVmlld3BvcnRNYXJnaW4oOClcclxuICAgICAgLndpdGhEZWZhdWx0T2Zmc2V0WSgxMilcclxuICAgICAgLndpdGhQb3NpdGlvbnMoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG9yaWdpblg6ICdzdGFydCcsXHJcbiAgICAgICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcclxuICAgICAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxyXG4gICAgICAgICAgb3ZlcmxheVk6ICd0b3AnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBvcmlnaW5YOiAnc3RhcnQnLFxyXG4gICAgICAgICAgb3JpZ2luWTogJ3RvcCcsXHJcbiAgICAgICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcclxuICAgICAgICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgb3JpZ2luWDogJ2VuZCcsXHJcbiAgICAgICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcclxuICAgICAgICAgIG92ZXJsYXlYOiAnZW5kJyxcclxuICAgICAgICAgIG92ZXJsYXlZOiAndG9wJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgb3JpZ2luWDogJ2VuZCcsXHJcbiAgICAgICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgICAgIG92ZXJsYXlYOiAnZW5kJyxcclxuICAgICAgICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xyXG4gICAgICAgIH1cclxuICAgICAgXSk7XHJcblxyXG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcclxuICAgICAgaGFzQmFja2Ryb3A6IGNvbmZpZy5oYXNCYWNrZHJvcCxcclxuICAgICAgYmFja2Ryb3BDbGFzczogY29uZmlnLmJhY2tkcm9wQ2xhc3MsXHJcbiAgICAgIHBhbmVsQ2xhc3M6IGNvbmZpZy5wYW5lbENsYXNzLFxyXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKSxcclxuICAgICAgcG9zaXRpb25TdHJhdGVneVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG92ZXJsYXlDb25maWc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUluamVjdG9yKG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYpOiBQb3J0YWxJbmplY3RvciB7XHJcbiAgICBjb25zdCBpbmplY3Rpb25Ub2tlbnMgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgaW5qZWN0aW9uVG9rZW5zLnNldChPdmVybGF5UmVmLCBvdmVybGF5UmVmKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFBvcnRhbEluamVjdG9yKHRoaXMuaW5qZWN0b3IsIGluamVjdGlvblRva2Vucyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==