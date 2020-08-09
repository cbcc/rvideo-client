import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Video } from '../../../core/data/video';
import { FileService } from '../../../core/service/file.service';

@Component({
  selector: 'app-video-detail-modal',
  templateUrl: './video-detail-modal.component.html',
  styleUrls: ['./video-detail-modal.component.css']
})
export class VideoDetailModalComponent implements OnInit {
  isVisible: boolean;
  video: Video;
  videoForm: FormGroup;

  constructor(public fileService: FileService) {
  }

  ngOnInit() {
    this.videoForm = new FormGroup({
      name: new FormControl({ value: '', disabled: true }, [
        Validators.required,
      ]),
      tag: new FormControl({ value: '', disabled: true }, [
        Validators.required,
      ]),
      introduction: new FormControl({ value: '', disabled: true }, [
        Validators.required,
        Validators.maxLength(200)
      ]),
      date: new FormControl({ value: '', disabled: true }, [
        Validators.required,
      ]),
    });
  }

  showModal(video: Video): void {
    this.video = video;
    this.videoForm.get('name').setValue(video.name);
    this.videoForm.get('tag').setValue(video.tag);
    this.videoForm.get('introduction').setValue(video.introduction);
    this.videoForm.get('date').setValue(video.date);
    this.isVisible = true;
  }

  handleOk(): void {
    this.video = null;
    this.videoForm.reset();
    this.isVisible = false;
  }

  handleCancel(): void {
    this.video = null;
    this.videoForm.reset();
    this.isVisible = false;
  }

}
