import { Component, OnInit, ViewChild } from '@angular/core';
import { DataResponse } from '../../../core/data/dataResponse';
import { Video } from '../../../core/data/video';
import { FileService } from '../../../core/service/file.service';
import { MessageService } from '../../../core/service/message.service';
import { VideoService } from '../../../core/service/video.service';
import { VideoDetailModalComponent } from '../../component/video-detail-modal/video-detail-modal.component';

@Component({
  selector: 'app-video-verify',
  templateUrl: './video-verify.component.html',
  styleUrls: ['./video-verify.component.css']
})
export class VideoVerifyComponent implements OnInit {
  videoSet: Video[];
  @ViewChild(VideoDetailModalComponent, {static: true})
  private videoDetailModalComponent: VideoDetailModalComponent;

  constructor(public fileService: FileService, private videoService: VideoService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.videoSet = new Array<Video>();
    this.getUnVerify();
  }

  getUnVerify(): void {
    this.videoService.findByVerify(0).subscribe((data: DataResponse<Video[]>) => {
      if (data.status === 200) {
        this.videoSet = data.data;
      }
    });
  }

  verify(video: Video): void {
    this.videoService.updateVerify(video.id, 1).subscribe((data: DataResponse<null>) => {
      this.messageService.openSnackBar(data.message);
      if (data.status === 200) {
        this.getUnVerify();
      }
    });
  }

  delete(video: Video): void {
    this.videoService.delete(video.id).subscribe((data: DataResponse<null>) => {
      this.messageService.openSnackBar(data.message);
      if (data.status === 200) {
        this.getUnVerify();
      }
    });
  }

  showDetail(video: Video): void {
    this.videoDetailModalComponent.showModal(video);
  }

}
