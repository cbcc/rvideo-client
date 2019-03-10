import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFavoriteComponent } from './user-favorite/user-favorite.component';
import { UserComponent } from './user/user.component';
import { UserSettingComponent } from './user-setting/user-setting.component';
import { UserUploadComponent } from './user-upload/user-upload.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: 'setting',
        component: UserSettingComponent
      },
      {
        path: 'upload',
        component: UserUploadComponent
      },
      {
        path: 'favorite',
        component: UserFavoriteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
