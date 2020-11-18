import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppDataSelector {
  appSatate = (state: IAppState) => state.appData;

  constructor() {}

  public getState = (data: string) => {
    return createSelector(
        this.appSatate,
        state => state[data],
    );
  }
}
