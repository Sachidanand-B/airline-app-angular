import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CachingService } from './caching.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpInteractService {
  constructor(private https: HttpClient, private cachingService: CachingService) { }
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  requestData(key, url) {
    this.https.get(environment.firebase.backendAPI + url).subscribe((data) => {
      this.cachingService.setToCache({[key] : data});
    });
  }


  getUserRole(userData, loginMode): Observable<any> {
    const profile = {
      email: userData.email,
      firstname: userData.given_name,
      lastname: userData.family_name,
      role: loginMode
    };
    return this.https.post(
      `${environment.firebase.backendAPI}/apis/user`,
      JSON.stringify(profile),
      this.options
    );
  }

  sendData(url, body) {
    return this.https.post(environment.firebase.backendAPI + url, body, this.options);
  }
}
