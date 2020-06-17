import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LibrarySharedModule } from 'app/shared/shared.module';

import { LbrHealthCheckComponent } from './health.component';
import { LbrHealthModalComponent } from './health-modal.component';

import { healthRoute } from './health.route';

@NgModule({
  imports: [LibrarySharedModule, RouterModule.forChild([healthRoute])],
  declarations: [LbrHealthCheckComponent, LbrHealthModalComponent],
  entryComponents: [LbrHealthModalComponent]
})
export class HealthModule {}
