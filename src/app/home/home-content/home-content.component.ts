import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataResponse } from '../../core/data/dataResponse';
import { Video } from '../../core/data/video';
import { VideoService } from '../../core/service/video.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  @Input() videos: Video[];

  constructor(private route: ActivatedRoute, private videoService: VideoService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const tag = params.tag;
      this.getVideos(tag);
    });
  }

  getVideos(tag: string) {
    this.videoService.findByTag(tag).subscribe((data: DataResponse<Video[]>) => {
      if (data.status === 200) {
        this.videos = data.data;
      }
    });
  }
}
