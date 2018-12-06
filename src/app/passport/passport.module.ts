import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PassportComponent } from './passport/passport.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { PassportRoutingModule } from './passport-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    PassportComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PassportRoutingModule
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ]
})
export class PassportModule {
}
