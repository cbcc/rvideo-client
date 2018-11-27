import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video/video.component';
import { VideoContentComponent } from './video-content/video-content.component';
import { VideoSidebarComponent } from './video-sidebar/video-sidebar.component';
import {VideoRoutingModule} from './video-routing.module';
import {CustomMaterialModule} from '../shared/custom-material/custom-material.module';
import { VideoCardComponent } from './video-card/video-card.component';

@NgModule({
  declarations: [
    VideoComponent,
    VideoContentComponent,
    VideoSidebarComponent,
    VideoCardComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    VideoRoutingModule
  ]
})
export class VideoModule { }
