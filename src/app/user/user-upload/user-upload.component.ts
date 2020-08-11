import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataResponse } from '../../core/data/dataResponse';
import { TAGS } from '../../core/data/tag';
import { Video } from '../../core/data/video';
import { FileService } from '../../core/service/file.service';
import { LocalStorageService } from '../../core/service/local-storage.service';
import { MessageService } from '../../core/service/message.service';
import { UploadProgress } from '../../core/service/uploadProgress';
import { UserService } from '../../core/service/user.service';
import { VideoService } from '../../core/service/video.service';

@Component({
  selector: 'app-user-upload',
  templateUrl: './user-upload.component.html',
  styleUrls: ['./user-upload.component.css']
})
export class UserUploadComponent implements OnInit {
  tags = TAGS;
  video: Video;
  file: File;
  face: File;
  face_url: string;
  name: string;
  size: number;
  message: string;
  value: number;
  showProgress: boolean;
  submitForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(80)
    ]),
    tag: new FormControl('', [
      Validators.required,
    ]),
    introduction: new FormControl('', [
      Validators.maxLength(250)
    ]),
  });

  constructor(public userService: UserService, private fileService: FileService, private videoService: VideoService,
              private messageService: MessageService) {
    this.video = new Video();
  }

  ngOnInit() {
  }

  onPicked(input: HTMLInputElement) {
    this.file = input.files[0];
    if (this.file) {
      this.name = this.file.name;
      this.size = this.file.size;
      this.upload();
    }
  }

  upload() {
    this.showProgress = true;
    this.fileService.uploadVideo(this.file).subscribe((data: UploadProgress) => {
      this.message = data.message;
      this.value = data.value;
      if (data.path !== undefined) {
        this.video.file = data.path;
      }
    });
  }

  onFacePickup(input: HTMLInputElement) {
    this.face = input.files[0];
    if (this.face) {
      this.uploadFace();
    }
  }

  uploadFace() {
    this.fileService.uploadVideoFace(this.face).subscribe((data: DataResponse<string>) => {
      if (data.status === 200) {
        this.video.face = data.data;
        this.face_url = this.fileService.RESOURCE_URL + '/' + this.video.face;
        console.log(data);
      }
    });
  }

  submit() {
    if (this.video.file === undefined) {
      this.messageService.openSnackBar('请上传视频');
      return;
    }
    if (this.video.face === undefined) {
      this.messageService.openSnackBar('请上传视频封面');
      return;
    }
    if (this.submitForm.invalid) {
      return;
    }
    this.video.userId = LocalStorageService.getUser().id;
    this.video.name = this.submitForm.get('name').value;
    this.video.tag = this.submitForm.get('tag').value;
    this.video.introduction = this.submitForm.get('introduction').value;
    console.log('submit:' + this.video.introduction);
    console.log('submit:' + this.video.userId);
    this.videoService.submit(this.video).subscribe((data: DataResponse<null>) => {
      this.messageService.openSnackBar(data.message);
      if (data.status === 200) {
        window.location.reload();
      }
    });
  }
}
