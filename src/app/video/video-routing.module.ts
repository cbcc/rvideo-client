import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoContentComponent } from './video-content/video-content.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {
    path: 'video',
    component: VideoComponent,
    children: [
      {
        path: ':id',
        component: VideoContentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule {
}
