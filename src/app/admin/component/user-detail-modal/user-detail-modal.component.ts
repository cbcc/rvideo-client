import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../core/data/user';

@Component({
  selector: 'app-user-detail-modal',
  templateUrl: './user-detail-modal.component.html',
  styleUrls: ['./user-detail-modal.component.css']
})
export class UserDetailModalComponent implements OnInit {
  isVisible = false;
  user: User;
  userForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.maxLength(20)
      ]),
      sex: new FormControl({value: '', disabled: true}, [
        Validators.required,
      ]),
      email: new FormControl({value: '', disabled: true}, [
        Validators.required,
        Validators.email,
      ]),
      sign: new FormControl({value: '', disabled: true}, [
        Validators.maxLength(100)
      ]),
    });
  }

  showModal(user: User): void {
    this.user = user;
    this.userForm.get('name').setValue(user.name);
    this.userForm.get('sex').setValue(user.sex.toString());
    this.userForm.get('email').setValue(user.email);
    this.userForm.get('sign').setValue(user.sign);
    this.isVisible = true;
  }

  handleOk(): void {
    this.user = null;
    this.userForm.reset();
    this.isVisible = false;
  }

  handleCancel(): void {
    this.user = null;
    this.userForm.reset();
    this.isVisible = false;
  }

}
