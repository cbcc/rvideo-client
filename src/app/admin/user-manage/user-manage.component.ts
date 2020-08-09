import { Component, OnInit, ViewChild } from '@angular/core';
import { DataResponse } from '../../core/data/dataResponse';
import { User } from '../../core/data/user';
import { FileService } from '../../core/service/file.service';
import { MessageService } from '../../core/service/message.service';
import { UserService } from '../../core/service/user.service';
import { UserDetailModalComponent } from '../component/user-detail-modal/user-detail-modal.component';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {
  key: string;
  userSet: User[];
  @ViewChild(UserDetailModalComponent, {static: true})
  private userDetailModalComponent: UserDetailModalComponent;

  constructor(public fileService: FileService, private userService: UserService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.userSet = new Array<User>();
    this.getAll();
  }

  getAll(): void {
    this.userService.getAll().subscribe((data: DataResponse<User[]>) => {
      if (data.status === 200) {
        this.userSet = data.data;
      }
    });
  }

  delete(id: number): void {
    this.userService.delete(id).subscribe((data: DataResponse<null>) => {
      this.messageService.openSnackBar(data.message);
      if (data.status === 200) {
        this.getAll();
      }
    });
  }

  findLikeName(name: string): void {
    this.userService.findLikeName(name).subscribe((data: DataResponse<User[]>) => {
      if (data.status === 200) {
        this.userSet = data.data;
      }
    });
  }

  showDetail(user: User): void {
    this.userDetailModalComponent.showModal(user);
  }

}
