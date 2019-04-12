import { AuthService } from './../_services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { SignUpInfo } from '../_models/sigup-info';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  positions = [
    {name: 'Manager'},
    {name: 'Team Leader'},
    {name: 'Java Developer'},
    {name: 'C# Developer'},
    {name: 'Database Administrator'},
    {name: 'Business Analyst'},
    {name: 'Quality Assurance'}
  ];

  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password,
      this.form.phone,
      this.form.position
      );

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
