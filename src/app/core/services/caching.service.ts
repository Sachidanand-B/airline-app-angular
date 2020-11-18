import { Injectable } from '@angular/core';
import { StoresService } from '../store/stores.service';

@Injectable({
  providedIn: 'root',
})
export class CachingService {
  constructor(private storesService: StoresService) {}

  // !Get From Caching Layer
  public getFromCache(data) {
    return this.storesService.getFromStore(data);
  }

  // !Store to Caching Layer
  public setToCache(data) {
    this.storesService.setToStore(data);
  }

  // !clear all slice of store
  public clearCache() {
    this.storesService.clearStore();
  }
}
