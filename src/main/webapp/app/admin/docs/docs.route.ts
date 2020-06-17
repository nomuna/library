import { Route } from '@angular/router';

import { LbrDocsComponent } from './docs.component';

export const docsRoute: Route = {
  path: '',
  component: LbrDocsComponent,
  data: {
    pageTitle: 'global.menu.admin.apidocs'
  }
};
