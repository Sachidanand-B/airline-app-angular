import { Component, OnInit } from '@angular/core';
import { HEADER_CONSTS } from './header.constants';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public navList;
  public userName;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.getRole === 'admin') {
      this.navList = HEADER_CONSTS.HEADER_CONSTS_ADMIN;
    } else if (this.authService.getRole === 'user') {
      this.navList = HEADER_CONSTS.HEADER_NAV_LINKS;
    }
    this.userName = this.authService.getName;
    this.userName = this.userName.charAt(0).toUpperCase() + this.userName.slice(1);
  }
  signOut() {
    this.authService.clearCookie();
  }
}
