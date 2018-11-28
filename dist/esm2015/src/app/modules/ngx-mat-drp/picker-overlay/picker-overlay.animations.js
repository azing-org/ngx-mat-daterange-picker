/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, state, style, transition, trigger, group } from '@angular/animations';
/** @type {?} */
export const pickerOverlayAnimations = {
    /**
     * Transforms the height of the picker overlay content.
     */
    transformPanel: trigger('transformPickerOverlay', [
        state('void', style({ opacity: 0, transform: 'scale(1, 0)' })),
        state('enter', style({ opacity: 1, transform: 'scale(1, 1)' })),
        transition('void => enter', group([
            animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')
        ])),
        transition('* => void', animate('100ms linear', style({ opacity: 0 })))
    ])
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLW92ZXJsYXkuYW5pbWF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXQtZGF0ZXJhbmdlLXBpY2tlci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZ3gtbWF0LWRycC9waWNrZXItb3ZlcmxheS9waWNrZXItb3ZlcmxheS5hbmltYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLEtBQUssRUFDTCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sRUFFUCxLQUFLLEVBQ04sTUFBTSxxQkFBcUIsQ0FBQzs7QUFFN0IsTUFBTSxPQUFPLHVCQUF1QixHQUVoQzs7OztJQUVGLGNBQWMsRUFBRSxPQUFPLENBQUMsd0JBQXdCLEVBQUU7UUFDaEQsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUMsQ0FBQyxDQUFDO1FBQzVELEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFDLENBQUMsQ0FBQztRQUM3RCxVQUFVLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQztZQUNoQyxPQUFPLENBQUMsd0NBQXdDLENBQUM7U0FDbEQsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdEUsQ0FBQztDQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBhbmltYXRlLFxyXG4gIHN0YXRlLFxyXG4gIHN0eWxlLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgdHJpZ2dlcixcclxuICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsXHJcbiAgZ3JvdXBcclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcbmV4cG9ydCBjb25zdCBwaWNrZXJPdmVybGF5QW5pbWF0aW9uczoge1xyXG4gIHJlYWRvbmx5IHRyYW5zZm9ybVBhbmVsOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGE7XHJcbn0gPSB7XHJcbiAgLyoqIFRyYW5zZm9ybXMgdGhlIGhlaWdodCBvZiB0aGUgcGlja2VyIG92ZXJsYXkgY29udGVudC4gKi9cclxuICB0cmFuc2Zvcm1QYW5lbDogdHJpZ2dlcigndHJhbnNmb3JtUGlja2VyT3ZlcmxheScsIFtcclxuICAgIHN0YXRlKCd2b2lkJywgc3R5bGUoe29wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3NjYWxlKDEsIDApJ30pKSxcclxuICAgIHN0YXRlKCdlbnRlcicsIHN0eWxlKHtvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICdzY2FsZSgxLCAxKSd9KSksXHJcbiAgICB0cmFuc2l0aW9uKCd2b2lkID0+IGVudGVyJywgZ3JvdXAoW1xyXG4gICAgICBhbmltYXRlKCc0MDBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKScpXHJcbiAgICBdKSksXHJcbiAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBhbmltYXRlKCcxMDBtcyBsaW5lYXInLCBzdHlsZSh7b3BhY2l0eTogMH0pKSlcclxuICBdKVxyXG59O1xyXG4iXX0=