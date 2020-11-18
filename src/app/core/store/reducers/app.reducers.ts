import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { appDataReducer } from './app-data.reducer';

export const appReducer: ActionReducerMap<IAppState, any> = {
  appData: appDataReducer,
};
