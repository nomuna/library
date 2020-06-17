import { Route } from '@angular/router';

import { LbrHealthCheckComponent } from './health.component';

export const healthRoute: Route = {
  path: '',
  component: LbrHealthCheckComponent,
  data: {
    pageTitle: 'health.title'
  }
};
