import { inject, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppDataSelector } from './app-data.selector';
import { IAppState } from '../state/app.state';

let mockService;
describe('App data manager service', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  beforeEach(inject([AppDataSelector], (service) => {
    mockService = service;
    mockService.appSatate = (state: IAppState) => state.appData;
  }));

  it('Should have AppDataSelector service', () => {
    expect(mockService).toBeTruthy();
  });
  it('Should call getState method', () => {
    expect(mockService.getState()).toBeTruthy();
  });
});
