import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PassportComponent } from './passport/passport.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'passport',
    component: PassportComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PassportRoutingModule {
}
