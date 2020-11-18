import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { HttpInteractService } from '../core/services/http-interact.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usermode;
  constructor(
    public afAuth: AngularFireAuth,
    private cookieService: CookieService,
    private httpInteractService: HttpInteractService,
    private router: Router,
  ) { }

  doGoogleLogin(usermode) {
    this.usermode = usermode ? 'admin' : 'user';
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth.signInWithPopup(provider).then((res) => {
        const profile = res.additionalUserInfo.profile;
        this.httpInteractService.getUserRole(profile, this.usermode).subscribe((data: any) => {
          const userData = Object.values(Object.values(data)[0]);
          this.cookieService.set('role', this.usermode);
          this.cookieService.set('name', userData[1]);
          resolve(res);
        });
      });
    });
  }

  get getRole() {
    return this.cookieService.get('role');
  }

  get getName() {
    return this.cookieService.get('name');
  }

  clearCookie() {
    this.cookieService.deleteAll();
    this.router.navigateByUrl('/login');
  }
}
