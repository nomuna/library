import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LibrarySharedModule } from 'app/shared/shared.module';

import { LbrDocsComponent } from './docs.component';

import { docsRoute } from './docs.route';

@NgModule({
  imports: [LibrarySharedModule, RouterModule.forChild([docsRoute])],
  declarations: [LbrDocsComponent]
})
export class DocsModule {}
