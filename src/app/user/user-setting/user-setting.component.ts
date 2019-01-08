import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataResponse } from '../../core/data/dataResponse';
import { User } from '../../core/data/user';
import { LocalStorageService } from '../../core/service/local-storage.service';
import { MessageService } from '../../core/service/message.service';
import { UserService } from '../../core/service/user.service';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.css']
})
export class UserSettingComponent implements OnInit {
  user: User;
  settingForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(20)
    ]),
    sex: new FormControl('', [
      Validators.required,
    ]),
    email: new FormControl({ value: '', disabled: true }, [
      Validators.required,
      Validators.email,
    ]),
    sign: new FormControl('', [
      Validators.maxLength(100)
    ]),
  });

  constructor(private userService: UserService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.user = LocalStorageService.getUser() != null ? LocalStorageService.getUser() : new User();
    if (this.user.sex == null) {
      this.user.sex = 1;
    }
    this.settingForm.get('username').setValue(this.user.name);
    this.settingForm.get('sex').setValue(this.user.sex.toString());
    this.settingForm.get('email').setValue(this.user.email);
    this.settingForm.get('sign').setValue(this.user.sign);
  }

  update() {
    if (this.settingForm.invalid) {
      return;
    }
    const userParam = new User();
    userParam.id = this.user.id;
    userParam.name = this.settingForm.get('username').value;
    userParam.sex = parseInt(this.settingForm.get('sex').value, 10);
    userParam.sign = this.settingForm.get('sign').value;
    this.userService.update(userParam).subscribe((data: DataResponse<null>) => {
      this.messageService.openSnackBar(data.message);
      if (data.status === 200) {
        this.userService.getDetail(this.user.id).subscribe((data2: DataResponse<User>) => {
          if (data2.status === 200) {
            window.location.reload();
          }
        });
      }
    });
  }
}
