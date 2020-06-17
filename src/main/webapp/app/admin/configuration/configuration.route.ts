import { Route } from '@angular/router';

import { LbrConfigurationComponent } from './configuration.component';

export const configurationRoute: Route = {
  path: '',
  component: LbrConfigurationComponent,
  data: {
    pageTitle: 'configuration.title'
  }
};
