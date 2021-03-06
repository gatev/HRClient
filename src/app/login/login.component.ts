import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './../_services/auth/auth.service';
import { AuthLoginInfo } from './../_models/login-info';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/auth/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  jwtHelperService = new JwtHelperService();

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  decodedToken: any;
  email: string;
  id: string;
  private loginInfo: AuthLoginInfo;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }

    this.form.email = '';
    this.form.password = '';
    this.form.rememberMe = false;
  }

  onSubmit() {
      this.loginInfo = new AuthLoginInfo(
      this.form.email,
      this.form.password,
      this.form.rememberMe
      );

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.decodedToken = this.jwtHelperService.decodeToken(data.accessToken);
        this.tokenStorage.saveEmail(this.decodedToken.sub);
        this.tokenStorage.saveId(this.decodedToken.jti);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

}
