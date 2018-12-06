import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TopBarComponent } from './component/top-bar/top-bar.component';
import { UserButtonComponent } from './component/top-bar/user-button/user-button.component';
import { httpInterceptorProviders } from './interceptor';

@NgModule({
  declarations: [
    TopBarComponent,
    UserButtonComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
  ],
  providers: [httpInterceptorProviders]
})
export class CoreModule {
}
