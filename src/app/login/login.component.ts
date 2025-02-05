import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { ILoginResult } from '../ilogin-result';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';
  
  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
 
  onSubmit() {
    if (this.loginForm.valid) {
      //console.log('Form Data:', this.loginForm.value);
      this.loginService.login(this.loginForm.value).subscribe(
        (response: ILoginResult) => {
          if (response.success) {
            alert('Login successful')
            console.log('Login successful:', response.message);
          } else {
            this.errorMessage = response.message;
          }
        },
        (error) => {
          this.errorMessage = 'An error occurred. Please try again later.';
          alert(this.errorMessage);
        }
      );

    } else {
      console.log('Form is invalid');
    }
  }
  ngOnInit(): void {
  }

}
