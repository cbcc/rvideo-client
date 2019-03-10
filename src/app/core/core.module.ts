import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './layout/header/header.component';
import { UserButtonComponent } from './component/user-button/user-button.component';
import { httpInterceptorProviders } from './interceptor';
import { LayoutComponent } from './layout/layout/layout.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    UserButtonComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LayoutComponent,
  ],
  providers: [httpInterceptorProviders]
})
export class CoreModule {
}
