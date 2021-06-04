import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CustomValidators } from '../helpers/helpers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { 
    if (authService.isUserAuthorized) {
      this.router.navigate(['/dashboard'])
    }
  }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: [
        null,
        Validators.compose(
          [
            Validators.required,
            CustomValidators.patternValidator(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, {
              hasValidEmail: true,
            })
          ]
        )
      ],
      password: [
        null,
        Validators.compose([
          Validators.required,
          // check whether the entered password has a number
          CustomValidators.patternValidator(/\d/, {
            hasNumber: true
          }),
          CustomValidators.patternValidator(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {
            hasSpecialCharacter: true
          }),
          // check whether the entered password has upper case letter
          CustomValidators.patternValidator(/[A-Z]/, {
            hasCapitalCase: true
          }),
          // check whether the entered password has a lower case letter
          CustomValidators.patternValidator(/[a-z]/, {
            hasSmallCase: true
          }),
          Validators.minLength(8)
        ])
      ],
    },
      {
      }
    );
  }

  get formControls() {
    return this.loginForm.controls;
  }

  login() {
    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;

    if (this.authService.login(email, password)) {
      this.router.navigate(['/dashboard'])
    }else {
      alert('invalid Username or Password')
    }
  }
}


