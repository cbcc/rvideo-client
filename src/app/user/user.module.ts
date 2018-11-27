import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import {CustomMaterialModule} from '../shared/custom-material/custom-material.module';
import {UserRoutingModule} from './user-routing.module';
import { UserSettingComponent } from './user-setting/user-setting.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    UserComponent,
    UserSidebarComponent,
    UserSettingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomMaterialModule,
    UserRoutingModule
  ]
})
export class UserModule { }
