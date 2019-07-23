import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMatDrpComponent } from './ngx-mat-drp/ngx-mat-drp.component';
import { PickerOverlayComponent } from './picker-overlay/picker-overlay.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OverlayModule } from '@angular/cdk/overlay';

import { CalendarWrapperComponent } from './calendar-wrapper/calendar-wrapper.component';
import { PresetsComponent } from './presets/presets.component';
import { DATE } from './services/range-store.service';

import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import * as momentImported from 'moment'; const moment = momentImported;

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    OverlayModule,
    MatMomentDateModule,
  ],
  declarations: [
    NgxMatDrpComponent,
    CalendarWrapperComponent,
    PickerOverlayComponent,
    PresetsComponent
  ],
  providers: [
    {provide: DATE, useValue: moment()}
  ],
  entryComponents: [PickerOverlayComponent],
  exports: [NgxMatDrpComponent]
})
export class NgxMatDrpModule { }
