import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private roles: string[];
  authority: string;
  info: any;

  constructor(private token: TokenStorageService, private router: Router) { }

  ngOnInit() {
    if (this.token.getToken()) {
      this.roles = this.token.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          this.router.navigate(['employees']);
          return true;
        }
        this.authority = 'user';
        this.router.navigate(['user']);
        return true;
      });
    }

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
