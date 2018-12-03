import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataResponse } from '../../core/data/dataResponse';
import { User } from '../../core/data/user';
import { MessageService } from '../../core/service/message.service';
import { PassportService } from '../shared/service/passport.service';

export function passwordValidator(control: FormGroup): ValidatorFn {
  return (): { [key: string]: any } | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return (password && confirmPassword && password.value !== confirmPassword.value) ? { 'passwordValidator': true } : null;
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(20)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)
    ]),
    confirmPassword: new FormControl('', [])
  });

  constructor(private passportService: PassportService, private messageService: MessageService, private router: Router) {
    this.registerForm.get('confirmPassword').setValidators([
      Validators.required,
      passwordValidator(this.registerForm)
    ]);
  }

  ngOnInit() { }

  register(): void {
    if (this.registerForm.invalid) {
      return;
    }
    const user = new User();
    user.name = this.registerForm.get('username').value;
    user.email = this.registerForm.get('email').value;
    user.password = this.registerForm.get('password').value;
    this.passportService.register(user).subscribe((data: DataResponse<null>) => {
      this.messageService.openSnackBar(data.message);
      if (data.status > 0) {
        return this.router.navigate(['/passport/login']);
      }
    });
  }
}
