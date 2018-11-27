import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustomMaterialModule} from './shared/custom-material/custom-material.module';
import {VideoModule} from './video/video.module';
import {UserModule} from './user/user.module';
import {PassModule} from './pass/pass.module';
import {TopBarComponent} from './top-bar/top-bar.component';
import {UserButtonComponent} from './top-bar/user-button/user-button.component';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    UserButtonComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    CoreModule,
    PassModule,
    VideoModule,
    UserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
