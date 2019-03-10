import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VideoCardComponent } from './component/video-card/video-card.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';

const SHARED_MODULE = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  CustomMaterialModule
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
