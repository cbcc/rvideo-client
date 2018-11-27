import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VideoComponent} from './video/video.component';
import {VideoCardComponent} from './video-card/video-card.component';

const routes: Routes = [
  {
    path: 'video',
    component: VideoComponent,
    children: [
      {
        path: 'movie',
        component: VideoCardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule { }
