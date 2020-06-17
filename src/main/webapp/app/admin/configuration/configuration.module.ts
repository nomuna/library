import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LibrarySharedModule } from 'app/shared/shared.module';

import { LbrConfigurationComponent } from './configuration.component';

import { configurationRoute } from './configuration.route';

@NgModule({
  imports: [LibrarySharedModule, RouterModule.forChild([configurationRoute])],
  declarations: [LbrConfigurationComponent]
})
export class ConfigurationModule {}
