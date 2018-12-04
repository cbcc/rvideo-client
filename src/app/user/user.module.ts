import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { UserRoutingModule } from './user-routing.module';
import { UserSettingComponent } from './user-setting/user-setting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    UserRoutingModule
  ]
})
export class UserModule {
}
