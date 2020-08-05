import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { VideoCardComponent } from './component/video-card/video-card.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';

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
  VideoCardComponent
];

@NgModule({
  declarations: [
    COMPONENT
  ],
  imports: [
    SHARED_MODULE,
  ],
  exports: [
    SHARED_MODULE,
    COMPONENT
  ]
})
export class SharedModule {
}
