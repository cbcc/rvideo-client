import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { VideoListComponent } from './video-manage/video-list/video-list.component';
import { VideoVerifyComponent } from './video-manage/video-verify/video-verify.component';
import { UserDetailModalComponent } from './component/user-detail-modal/user-detail-modal.component';
import { VideoDetailModalComponent } from './component/video-detail-modal/video-detail-modal.component';

@NgModule({
  declarations: [
    AdminComponent,
    UserManageComponent,
    VideoListComponent,
    VideoVerifyComponent,
    UserDetailModalComponent,
    VideoDetailModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
