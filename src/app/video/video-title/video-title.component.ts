import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../../core/data/video';

@Component({
  selector: 'app-video-title',
  templateUrl: './video-title.component.html',
  styleUrls: ['./video-title.component.css']
})
export class VideoTitleComponent implements OnInit {
  @Input() video: Video;

  constructor() { }

  ngOnInit() {
  }

}
