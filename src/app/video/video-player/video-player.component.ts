import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../../core/data/video';
import { FileService } from '../../core/service/file.service';
import { VideoService } from '../../core/service/video.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @Input() video: Video;

  constructor(private route: ActivatedRoute, private videoService: VideoService, private fileService: FileService) {
  }

  ngOnInit() {
  }

}
