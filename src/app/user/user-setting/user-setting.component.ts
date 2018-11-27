import { Component, OnInit } from '@angular/core';
import {User} from '../../core/data/user';
import {UserService} from '../../core/service/user.service';
import {DataResponse} from '../../core/data/dataResponse';
import {LocalStorageService} from '../../core/service/local-storage.service';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.css']
})
export class UserSettingComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.user = LocalStorageService.getUser() != null ? LocalStorageService.getUser() : new User();
  }

  update() {
    this.userService.update(this.user).subscribe((data: DataResponse<null>) => {
      window.alert(data.message);
      if (data.status > 0) {
        this.userService.getDetail(this.user.id).subscribe((data2: DataResponse<User>) => {
          window.alert(data2.message);
        });
      }
    });
  }
}
