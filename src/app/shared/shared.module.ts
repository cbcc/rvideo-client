import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { UserButtonComponent } from './component/user-button/user-button.component';
import { VideoCardComponent } from './component/video-card/video-card.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { ContentPipe } from './pipe/content.pipe';

const SHARED_MODULE = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  HttpClientModule,
  BrowserModule,
  BrowserAnimationsModule,
  CustomMaterialModule,
  NgZorroAntdModule
];

const COMPONENT = [
  UserButtonComponent,
  VideoCardComponent,
  HeaderComponent,
  FooterComponent,
  LayoutComponent
];

const PIPE = [
  ContentPipe
];

@NgModule({
  declarations: [
    COMPONENT,
    PIPE
  ],
  imports: [
    SHARED_MODULE,
  ],
  exports: [
    SHARED_MODULE,
    COMPONENT,
    PIPE
  ]
})
export class SharedModule {
}
