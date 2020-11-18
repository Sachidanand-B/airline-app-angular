import { Action } from '@ngrx/store';

export enum AppActionTypes {
  SET_APP_DATA = '[SET_APP_DATA] Notification from Application',
}

// !To update cache from application action
export class SaveAppDataAction implements Action {
  readonly type = AppActionTypes.SET_APP_DATA;
  constructor(public payload: any) {}
}

export type ApplicationActions = SaveAppDataAction;
