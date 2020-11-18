import { Action } from '@ngrx/store';

export enum LogoutActionTypes {
  CLEAR_DATA_ON_LOGOUT = '[CLEAR_DATA_ON_LOGOUT] Application Logout',
}

export class LogoutAction implements Action {
  readonly type = LogoutActionTypes.CLEAR_DATA_ON_LOGOUT;
}
