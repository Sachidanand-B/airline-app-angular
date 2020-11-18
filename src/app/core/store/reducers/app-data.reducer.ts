import { ApplicationActions , AppActionTypes} from '../actions/app-data.action';
import { initialAppData } from '../state/app.state';

export function appDataReducer(state = initialAppData, action: ApplicationActions) {
  if (action.type === AppActionTypes.SET_APP_DATA) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return { ...state };
}
