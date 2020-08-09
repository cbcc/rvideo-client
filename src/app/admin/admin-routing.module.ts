import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { VideoListComponent } from './video-manage/video-list/video-list.component';
import { VideoVerifyComponent } from './video-manage/video-verify/video-verify.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'user',
        component: UserManageComponent
      },
      {
        path: 'video/verify',
        component: VideoVerifyComponent
      },
      {
        path: 'video/list',
        component: VideoListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
