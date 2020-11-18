import { Injectable } from '@angular/core';
import { CachingService } from './caching.service';
import { HttpInteractService } from './http-interact.service';

@Injectable({
  providedIn: 'root',
})
export class ApplicationDataManagerService {
  constructor(private cachingService: CachingService, private httpInteractService: HttpInteractService) {}
  public saveToApplicationData(data) {
    return this.cachingService.setToCache(data);
  }

  public listenForApplicationData(data) {
    return this.cachingService.getFromCache(data);
  }

  public listenFromServer(key, requestUrl) {
    this.httpInteractService.requestData(key, requestUrl);
  }

  public sendToServer(requestUrl, body) {
    return this.httpInteractService.sendData(requestUrl, body);
  }
}
