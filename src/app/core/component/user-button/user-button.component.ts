import { Component, OnInit } from '@angular/core';
import { User } from '../../data/user';
import { UserService } from '../../service/user.service';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.css']
})
export class UserButtonComponent implements OnInit {
  static DEFAULT_FACE_URL = 'assets/default-face.jpg';
  user: User;

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.getUser();
  }

  logout() {
    this.userService.logout();
    window.location.reload();
  }

  private getUser() {
    this.user = new User();
    const localUser = LocalStorageService.getUser();
    if (localUser != null) {
      this.user = localUser;
      this.user.face = localUser.face != null ? localUser.face : UserButtonComponent.DEFAULT_FACE_URL;
    } else {
      this.user.face = UserButtonComponent.DEFAULT_FACE_URL;
    }
  }
}
