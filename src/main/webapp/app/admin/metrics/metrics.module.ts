import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LibrarySharedModule } from 'app/shared/shared.module';

import { LbrMetricsMonitoringComponent } from './metrics.component';

import { metricsRoute } from './metrics.route';

@NgModule({
  imports: [LibrarySharedModule, RouterModule.forChild([metricsRoute])],
  declarations: [LbrMetricsMonitoringComponent]
})
export class MetricsModule {}
