/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { takeWhile } from 'rxjs/operators';
import { PickerOverlayComponent } from '../picker-overlay/picker-overlay.component';
/** @type {?} */
const DEFAULT_CONFIG = {
    panelClass: 'ngx-mat-drp-overlay',
    hasBackdrop: true,
    backdropClass: 'ngx-mat-drp-overlay-backdrop',
    shouldCloseOnBackdropClick: true
};
export class CalendarOverlayService {
    /**
     * @param {?} overlay
     * @param {?} injector
     */
    constructor(overlay, injector) {
        this.overlay = overlay;
        this.injector = injector;
    }
    /**
     * @param {?=} config
     * @param {?=} hostElemRef
     * @return {?}
     */
    open(config = {}, hostElemRef) {
        this.hostElemRef = hostElemRef;
        /** @type {?} */
        const overlayConfig = Object.assign({}, DEFAULT_CONFIG, config);
        /** @type {?} */
        const overlayRef = this.createOverlay(overlayConfig);
        /** @type {?} */
        const portalInjector = this.createInjector(overlayRef);
        /** @type {?} */
        const calendarPortal = new ComponentPortal(PickerOverlayComponent, null, portalInjector);
        overlayRef.attach(calendarPortal);
        overlayRef
            .backdropClick()
            .pipe(takeWhile(() => overlayConfig.shouldCloseOnBackdropClick))
            .subscribe(() => overlayRef.dispose());
        return overlayRef;
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    createOverlay(config) {
        /** @type {?} */
        const overlayConfig = this.getOverlayConfig(config);
        return this.overlay.create(overlayConfig);
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    getOverlayConfig(config) {
        /** @type {?} */
        const positionStrategy = this.overlay
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
        const overlayConfig = new OverlayConfig({
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass,
            panelClass: config.panelClass,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy
        });
        return overlayConfig;
    }
    /**
     * @private
     * @param {?} overlayRef
     * @return {?}
     */
    createInjector(overlayRef) {
        /** @type {?} */
        const injectionTokens = new WeakMap();
        injectionTokens.set(OverlayRef, overlayRef);
        return new PortalInjector(this.injector, injectionTokens);
    }
}
CalendarOverlayService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CalendarOverlayService.ctorParameters = () => [
    { type: Overlay },
    { type: Injector }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItb3ZlcmxheS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdC1kYXRlcmFuZ2UtcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL25neC1tYXQtZHJwL3NlcnZpY2VzL2NhbGVuZGFyLW92ZXJsYXkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYyxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7O01BRTlFLGNBQWMsR0FBMEI7SUFDNUMsVUFBVSxFQUFFLHFCQUFxQjtJQUNqQyxXQUFXLEVBQUUsSUFBSTtJQUNqQixhQUFhLEVBQUUsOEJBQThCO0lBQzdDLDBCQUEwQixFQUFFLElBQUk7Q0FDakM7QUFHRCxNQUFNLE9BQU8sc0JBQXNCOzs7OztJQUdqQyxZQUFvQixPQUFnQixFQUFVLFFBQWtCO1FBQTVDLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQzs7Ozs7O0lBRXBFLElBQUksQ0FDRixTQUFnQyxFQUFFLEVBQ2xDLFdBQXVCO1FBRXZCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDOztjQUN6QixhQUFhLHFCQUFRLGNBQWMsRUFBSyxNQUFNLENBQUU7O2NBQ2hELFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQzs7Y0FDOUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDOztjQUNoRCxjQUFjLEdBQUcsSUFBSSxlQUFlLENBQ3hDLHNCQUFzQixFQUN0QixJQUFJLEVBQ0osY0FBYyxDQUNmO1FBQ0QsVUFBVSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVsQyxVQUFVO2FBQ1AsYUFBYSxFQUFFO2FBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUMsQ0FBQzthQUMvRCxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFFekMsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLE1BQTZCOztjQUMzQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztRQUNuRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7OztJQUVPLGdCQUFnQixDQUFDLE1BQTZCOztjQUM5QyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTzthQUNsQyxRQUFRLEVBQUU7YUFDVixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JDLHNCQUFzQixDQUFDLEtBQUssQ0FBQzthQUM3QixrQkFBa0IsQ0FBQyxDQUFDLENBQUM7YUFDckIsa0JBQWtCLENBQUMsRUFBRSxDQUFDO2FBQ3RCLGFBQWEsQ0FBQztZQUNiO2dCQUNFLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixPQUFPLEVBQUUsUUFBUTtnQkFDakIsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE9BQU8sRUFBRSxLQUFLO2dCQUNkLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUUsUUFBUTthQUNuQjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxLQUFLO2dCQUNkLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixRQUFRLEVBQUUsS0FBSztnQkFDZixRQUFRLEVBQUUsS0FBSzthQUNoQjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxLQUFLO2dCQUNkLE9BQU8sRUFBRSxLQUFLO2dCQUNkLFFBQVEsRUFBRSxLQUFLO2dCQUNmLFFBQVEsRUFBRSxRQUFRO2FBQ25CO1NBQ0YsQ0FBQzs7Y0FFRSxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUM7WUFDdEMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXO1lBQy9CLGFBQWEsRUFBRSxNQUFNLENBQUMsYUFBYTtZQUNuQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVU7WUFDN0IsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1lBQ3JELGdCQUFnQjtTQUNqQixDQUFDO1FBRUYsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLFVBQXNCOztjQUNyQyxlQUFlLEdBQUcsSUFBSSxPQUFPLEVBQUU7UUFDckMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFNUMsT0FBTyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQzVELENBQUM7OztZQXBGRixVQUFVOzs7O1lBYkYsT0FBTztZQURpQixRQUFROzs7Ozs7O0lBZ0J2Qyw2Q0FBZ0M7Ozs7O0lBRXBCLHlDQUF3Qjs7Ozs7SUFBRSwwQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5Q29uZmlnLCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwsIFBvcnRhbEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IE5neERycE9wdGlvbnMsIENhbGVuZGFyT3ZlcmxheUNvbmZpZyB9IGZyb20gJy4uL21vZGVsL21vZGVsJztcclxuaW1wb3J0IHsgdGFrZVdoaWxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBQaWNrZXJPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi4vcGlja2VyLW92ZXJsYXkvcGlja2VyLW92ZXJsYXkuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IERFRkFVTFRfQ09ORklHOiBDYWxlbmRhck92ZXJsYXlDb25maWcgPSB7XHJcbiAgcGFuZWxDbGFzczogJ25neC1tYXQtZHJwLW92ZXJsYXknLFxyXG4gIGhhc0JhY2tkcm9wOiB0cnVlLFxyXG4gIGJhY2tkcm9wQ2xhc3M6ICduZ3gtbWF0LWRycC1vdmVybGF5LWJhY2tkcm9wJyxcclxuICBzaG91bGRDbG9zZU9uQmFja2Ryb3BDbGljazogdHJ1ZVxyXG59O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJPdmVybGF5U2VydmljZSB7XHJcbiAgcHJpdmF0ZSBob3N0RWxlbVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LCBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge31cclxuXHJcbiAgb3BlbihcclxuICAgIGNvbmZpZzogQ2FsZW5kYXJPdmVybGF5Q29uZmlnID0ge30sXHJcbiAgICBob3N0RWxlbVJlZjogRWxlbWVudFJlZlxyXG4gICk6IE92ZXJsYXlSZWYge1xyXG4gICAgdGhpcy5ob3N0RWxlbVJlZiA9IGhvc3RFbGVtUmVmO1xyXG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IHsgLi4uREVGQVVMVF9DT05GSUcsIC4uLmNvbmZpZyB9O1xyXG4gICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMuY3JlYXRlT3ZlcmxheShvdmVybGF5Q29uZmlnKTtcclxuICAgIGNvbnN0IHBvcnRhbEluamVjdG9yID0gdGhpcy5jcmVhdGVJbmplY3RvcihvdmVybGF5UmVmKTtcclxuICAgIGNvbnN0IGNhbGVuZGFyUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChcclxuICAgICAgUGlja2VyT3ZlcmxheUNvbXBvbmVudCxcclxuICAgICAgbnVsbCxcclxuICAgICAgcG9ydGFsSW5qZWN0b3JcclxuICAgICk7XHJcbiAgICBvdmVybGF5UmVmLmF0dGFjaChjYWxlbmRhclBvcnRhbCk7XHJcblxyXG4gICAgb3ZlcmxheVJlZlxyXG4gICAgICAuYmFja2Ryb3BDbGljaygpXHJcbiAgICAgIC5waXBlKHRha2VXaGlsZSgoKSA9PiBvdmVybGF5Q29uZmlnLnNob3VsZENsb3NlT25CYWNrZHJvcENsaWNrKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiBvdmVybGF5UmVmLmRpc3Bvc2UoKSk7XHJcblxyXG4gICAgcmV0dXJuIG92ZXJsYXlSZWY7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZU92ZXJsYXkoY29uZmlnOiBDYWxlbmRhck92ZXJsYXlDb25maWcpOiBPdmVybGF5UmVmIHtcclxuICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSB0aGlzLmdldE92ZXJsYXlDb25maWcoY29uZmlnKTtcclxuICAgIHJldHVybiB0aGlzLm92ZXJsYXkuY3JlYXRlKG92ZXJsYXlDb25maWcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRPdmVybGF5Q29uZmlnKGNvbmZpZzogQ2FsZW5kYXJPdmVybGF5Q29uZmlnKTogT3ZlcmxheUNvbmZpZyB7XHJcbiAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5XHJcbiAgICAgIC5wb3NpdGlvbigpXHJcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMuaG9zdEVsZW1SZWYpXHJcbiAgICAgIC53aXRoRmxleGlibGVEaW1lbnNpb25zKGZhbHNlKVxyXG4gICAgICAud2l0aFZpZXdwb3J0TWFyZ2luKDgpXHJcbiAgICAgIC53aXRoRGVmYXVsdE9mZnNldFkoMTIpXHJcbiAgICAgIC53aXRoUG9zaXRpb25zKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBvcmlnaW5YOiAnc3RhcnQnLFxyXG4gICAgICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXHJcbiAgICAgICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcclxuICAgICAgICAgIG92ZXJsYXlZOiAndG9wJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcclxuICAgICAgICAgIG9yaWdpblk6ICd0b3AnLFxyXG4gICAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgICAgICBvdmVybGF5WTogJ2JvdHRvbSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG9yaWdpblg6ICdlbmQnLFxyXG4gICAgICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXHJcbiAgICAgICAgICBvdmVybGF5WDogJ2VuZCcsXHJcbiAgICAgICAgICBvdmVybGF5WTogJ3RvcCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG9yaWdpblg6ICdlbmQnLFxyXG4gICAgICAgICAgb3JpZ2luWTogJ3RvcCcsXHJcbiAgICAgICAgICBvdmVybGF5WDogJ2VuZCcsXHJcbiAgICAgICAgICBvdmVybGF5WTogJ2JvdHRvbSdcclxuICAgICAgICB9XHJcbiAgICAgIF0pO1xyXG5cclxuICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZyh7XHJcbiAgICAgIGhhc0JhY2tkcm9wOiBjb25maWcuaGFzQmFja2Ryb3AsXHJcbiAgICAgIGJhY2tkcm9wQ2xhc3M6IGNvbmZpZy5iYWNrZHJvcENsYXNzLFxyXG4gICAgICBwYW5lbENsYXNzOiBjb25maWcucGFuZWxDbGFzcyxcclxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCksXHJcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3lcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBvdmVybGF5Q29uZmlnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVJbmplY3RvcihvdmVybGF5UmVmOiBPdmVybGF5UmVmKTogUG9ydGFsSW5qZWN0b3Ige1xyXG4gICAgY29uc3QgaW5qZWN0aW9uVG9rZW5zID0gbmV3IFdlYWtNYXAoKTtcclxuICAgIGluamVjdGlvblRva2Vucy5zZXQoT3ZlcmxheVJlZiwgb3ZlcmxheVJlZik7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQb3J0YWxJbmplY3Rvcih0aGlzLmluamVjdG9yLCBpbmplY3Rpb25Ub2tlbnMpO1xyXG4gIH1cclxufVxyXG4iXX0=