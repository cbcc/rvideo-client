import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './video/video.component';
import { VideoContentComponent } from './video-content/video-content.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoTitleComponent } from './video-title/video-title.component';
import { VideoSideComponent } from './video-side/video-side.component';
import { VideoBottomComponent } from './video-bottom/video-bottom.component';

@NgModule({
  declarations: [
    VideoComponent,
    VideoContentComponent,
    VideoPlayerComponent,
    VideoTitleComponent,
    VideoSideComponent,
    VideoBottomComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VideoRoutingModule
  ]
})
export class VideoModule {
}
