import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user/user.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { UserRoutingModule } from './user-routing.module';
import { UserSettingComponent } from './user-setting/user-setting.component';
import { UserFaceComponent } from './shared/component/user-face/user-face.component';
import { UserHeaderComponent } from './user-header/user-header.component';

@NgModule({
  declarations: [
    UserComponent,
    UserSidebarComponent,
    UserSettingComponent,
    UserFaceComponent,
    UserHeaderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule {
}
