import { NgModule } from '@angular/core';
import { LibrarySharedLibsModule } from './shared-libs.module';
import { FindLanguageFromKeyPipe } from './language/find-language-from-key.pipe';
import { LbrAlertComponent } from './alert/alert.component';
import { LbrAlertErrorComponent } from './alert/alert-error.component';
import { LbrLoginModalComponent } from './login/login.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';

@NgModule({
  imports: [LibrarySharedLibsModule],
  declarations: [FindLanguageFromKeyPipe, LbrAlertComponent, LbrAlertErrorComponent, LbrLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [LbrLoginModalComponent],
  exports: [
    LibrarySharedLibsModule,
    FindLanguageFromKeyPipe,
    LbrAlertComponent,
    LbrAlertErrorComponent,
    LbrLoginModalComponent,
    HasAnyAuthorityDirective
  ]
})
export class LibrarySharedModule {}
