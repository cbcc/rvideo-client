import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../core/service/user.service';
import {MatMenuTrigger} from '@angular/material';
import {Router} from '@angular/router';
import {LocalStorageService} from '../../core/service/local-storage.service';

@Component({
  selector: 'app-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.css']
})
export class UserButtonComponent implements OnInit {
  faceUrl = 'assets/default-face.jpg';
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  timeout: number;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getFace();
  }
  isLoginIn(): boolean {
    return this.userService.isLoginIn();
  }
  getFace() {
    if (LocalStorageService.getUser() != null && LocalStorageService.getUser().face != null) {
      this.faceUrl = LocalStorageService.getUser().face;
    }
  }
  logout() {
    this.userService.logout();
  }
  toUserCenter() {
    if (this.isLoginIn()) {
      this.router.navigate(['./user']);
    }
  }
  openMenu() {
    if (!this.trigger.menuOpen) {
      this.cancelCloseMenuDelay();
      this.trigger.openMenu();
    }
  }
  closeMenuDelay() {
    if (this.timeout === undefined) {
      this.timeout = setTimeout(() => this.trigger.closeMenu(), 500);
    }
  }
  cancelCloseMenuDelay() {
    clearTimeout(this.timeout);
    this.timeout = undefined;
  }
}
