import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {User} from '../../core/data/user';
import {UserService} from '../../core/service/user.service';
import {Router} from '@angular/router';
import {AuthResponse} from '../shared/data/AuthResponse';
import {LoginService} from '../shared/service/login.service';
import {JwtService} from '../../core/service/jwt.service';
import {LocalStorageService} from '../../core/service/local-storage.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  emailFormControl = new FormControl('', [
    Validators.required,
  Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
  matcher = new MyErrorStateMatcher();
  constructor(private loginService: LoginService, private userService: UserService,
              private jwtService: JwtService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.loginService.login(this.emailFormControl.value, this.passwordFormControl.value)
      .subscribe((data: AuthResponse) => {
        window.alert(data.message);
        console.log(data);
        if (data.status > 0) {
          const id = this.jwtService.getTokenId(LocalStorageService.getToken());
          console.log('id: ' + id);
          this.userService.getDetail(id).subscribe();
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          const redirect = this.loginService.redirectUrl ? this.loginService.redirectUrl : '/';
          this.router.navigate([redirect]);
        }
      });
  }
}
