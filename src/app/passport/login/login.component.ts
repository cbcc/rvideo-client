import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MessageService } from '../../core/service/message.service';
import { UserService } from '../../core/service/user.service';
import { Router } from '@angular/router';
import { AuthResponse } from '../shared/data/AuthResponse';
import { PassportService } from '../shared/service/passport.service';
import { JwtService } from '../../core/service/jwt.service';
import { LocalStorageService } from '../../core/service/local-storage.service';

/** Error when invalid control is dirty or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
  matcher = new MyErrorStateMatcher();

  constructor(private loginService: PassportService, private userService: UserService,
              private jwtService: JwtService, private messageService: MessageService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.emailFormControl.invalid || this.passwordFormControl.invalid) {
      return;
    }
    this.loginService.login(this.emailFormControl.value, this.passwordFormControl.value)
      .subscribe((data: AuthResponse) => {
        this.messageService.openSnackBar(data.message);
        if (data.status === 200) {
          const roles = this.jwtService.getTokenRoles(LocalStorageService.getToken());
          const id = this.jwtService.getTokenId(LocalStorageService.getToken());
          if (roles.includes('ADMIN')) {
            this.userService.getDetail(id, 'ADMIN').subscribe(() => window.location.reload());
            return this.router.navigate(['/admin']);
          } else {
            this.userService.getDetail(id, 'USER').subscribe(() => window.location.reload());
            // Get the redirect URL from our auth service
            // If no redirect has been set, use the default
            const redirect = this.loginService.redirectUrl ? this.loginService.redirectUrl : '/';
            return this.router.navigate([redirect]);
          }
        }
      });
  }
}
