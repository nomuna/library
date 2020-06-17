import { Route } from '@angular/router';

import { LbrMetricsMonitoringComponent } from './metrics.component';

export const metricsRoute: Route = {
  path: '',
  component: LbrMetricsMonitoringComponent,
  data: {
    pageTitle: 'metrics.title'
  }
};
