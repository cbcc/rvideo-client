import { Component, OnInit, ViewChild } from '@angular/core';
import { DataResponse } from '../../../core/data/dataResponse';
import { Video } from '../../../core/data/video';
import { FileService } from '../../../core/service/file.service';
import { MessageService } from '../../../core/service/message.service';
import { VideoService } from '../../../core/service/video.service';
import { VideoDetailModalComponent } from '../../component/video-detail-modal/video-detail-modal.component';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  key: string;
  videoSet: Video[];
  @ViewChild(VideoDetailModalComponent, {static: true})
  private videoDetailModalComponent: VideoDetailModalComponent;

  constructor(public fileService: FileService, private videoService: VideoService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.videoSet = new Array<Video>();
    this.getAll();
  }

  getAll(): void {
    this.videoService.getAll().subscribe((data: DataResponse<Video[]>) => {
      if (data.status === 200) {
        this.videoSet = data.data;
      }
    });
  }

  delete(video: Video): void {
    this.videoService.delete(video.id).subscribe((data: DataResponse<null>) => {
      this.messageService.openSnackBar(data.message);
      if (data.status === 200) {
        this.getAll();
      }
    });
  }

  findLikeName(key: string): void {
    this.videoService.find(null, key).subscribe((data: DataResponse<Video[]>) => {
      if (data.status === 200) {
        this.videoSet = data.data;
      }
    });
  }

  showDetail(video: Video): void {
    this.videoDetailModalComponent.showModal(video);
  }

}
