import { Component, OnInit } from '@angular/core';
import { DataResponse } from '../../../../core/data/dataResponse';
import { User } from '../../../../core/data/user';
import { FileService } from '../../../../core/service/file.service';
import { LocalStorageService } from '../../../../core/service/local-storage.service';
import { MessageService } from '../../../../core/service/message.service';
import { UserService } from '../../../../core/service/user.service';

@Component({
  selector: 'app-user-face',
  templateUrl: './user-face.component.html',
  styleUrls: ['./user-face.component.css']
})
export class UserFaceComponent implements OnInit {
  static DEFAULT_FACE_URL = 'assets/default-face.jpg';
  user: User;

  constructor(private fileService: FileService, public userService: UserService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.getUser();
  }

  onPicked(input: HTMLInputElement) {
    const file = input.files[0];
    if (file) {
      this.uploadFace(file);
    }
  }

  uploadFace(file: File) {
    this.fileService.uploadFace(this.user.id, file).subscribe((data: DataResponse<null>) => {
      this.messageService.openSnackBar(data.message);
      this.userService.getDetail(this.user.id).subscribe((data2: DataResponse<User>) => {
        if (data2.status > 0) {
          console.log('getUser');
          window.location.reload();
        }
      });
    });
  }

  private getUser() {
    this.user = new User();
    const localUser = LocalStorageService.getUser();
    if (localUser != null) {
      this.user = localUser;
      this.user.face = localUser.face != null ? localUser.face : UserFaceComponent.DEFAULT_FACE_URL;
    } else {
      this.user.face = UserFaceComponent.DEFAULT_FACE_URL;
    }
  }
}
