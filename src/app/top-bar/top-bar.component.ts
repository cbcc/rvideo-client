import { Component, OnInit } from '@angular/core';
import {UserService} from '../core/service/user.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  isLoginIn(): boolean {
    return this.userService.isLoginIn();
  }
}
