import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataResponse } from '../../core/data/dataResponse';
import { Video } from '../../core/data/video';
import { FileService } from '../../core/service/file.service';
import { VideoService } from '../../core/service/video.service';

@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.css']
})
export class VideoContentComponent implements OnInit {
  video: Video;

  constructor(private route: ActivatedRoute, private videoService: VideoService, private fileService: FileService) {
  }

  ngOnInit() {
    this.getVideo();
  }

  getVideo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.videoService.get(id).subscribe((data: DataResponse<Video>) => {
      if (data.status === 200) {
        this.video = data.data;
      }
    });
  }

}
