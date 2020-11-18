import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  currentToggleValue: boolean;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.authService.doGoogleLogin(this.currentToggleValue).then(() => {
      if (this.authService.getRole === 'admin') {
        this.router.navigateByUrl('/admin');
      } else if (this.authService.getRole === 'user') {
        this.router.navigateByUrl('/home-screen');
      } else {
        this.router.navigateByUrl('/login');
      }
    })
  }

  toggleState(event) {
    this.currentToggleValue = !this.currentToggleValue;
  }

  displayToggleState(value: boolean) {
    return value ? 'Admin' : 'User';
  }
}
