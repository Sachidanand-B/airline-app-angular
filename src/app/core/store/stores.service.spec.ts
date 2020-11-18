import { inject, TestBed } from '@angular/core/testing';
import { StoresService } from './stores.service';
import { Store } from '@ngrx/store';
import { AppDataSelector } from './selectors/app-data.selector';
import { IAppState } from './state/app.state';
import { BehaviorSubject, Observable } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';


class MockSelector {
  getState() {
    return 'appData';
  }
}

let mockService;
describe('StoresService', () => {

  beforeEach(() => {
    const initialState = {
      appData: { }
    };
    TestBed.configureTestingModule({
      providers: [
        StoresService,
        provideMockStore({ initialState }),
        { provide: AppDataSelector, useClass: MockSelector},
      ] });
  });

  beforeEach(inject([StoresService, Store], (service) => {
    mockService = service;
  }));

  it('Should have storeservice service', () => {
    expect(mockService).toBeTruthy();
  });
  it('Should call getFromStore method', () => {
    mockService.setToStore({firmwareVersion: '123'});
    mockService.getFromStore('firmwareVersion').subscribe((data) => {
      expect(data).toEqual('123');
    });
  });

  it('Should call getStateSelector method', () => {
    const data = mockService.getStateSelector();
    expect(data).toEqual({});
  });

  it('Should call clearStore method', () => {
    mockService.clearStore();
  });
  it('Should call setToStore method', () => {
    mockService.setToStore({firmwareVersion: '123'});
    mockService.getFromStore('firmwareVersion').subscribe((data) => {
      expect(data).toEqual('123');
    });
  });
});
