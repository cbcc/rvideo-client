import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../../core/data/video';

@Component({
  selector: 'app-video-bottom',
  templateUrl: './video-bottom.component.html',
  styleUrls: ['./video-bottom.component.css']
})
export class VideoBottomComponent implements OnInit {
  @Input() video: Video;

  constructor() { }

  ngOnInit() {
  }

}
