import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from './state/app.state';
import { SaveAppDataAction } from './actions/app-data.action';
import { AppDataSelector } from './selectors/app-data.selector';
import { LogoutAction } from './actions/root-store.action';

// !This Store Service is specific to NgRx Store Vendor (Wrapper over NgRx)
@Injectable({
  providedIn: 'root',
})
export class StoresService {
  constructor(
    private store: Store<IAppState>,
    private appDataSelector: AppDataSelector,
  ) {}

  // !Getter [Get Value from Slice of State]
  public getFromStore(data) {
    const selector = this.getStateSelector();
    const getSliceOfState = selector.getState(data);
    return this.store.pipe(select(getSliceOfState));
  }
  public getStoreData() {
    return this.store.pipe(select(data => data));
  }

  public clearStore() {
    this.store.dispatch(new LogoutAction());
  }

  // !Setter [Set Value to Specific slice in state tree]
  public setToStore(data) {
      this.store.dispatch(new SaveAppDataAction(data));
  }

  // !get the state selector from which data need to be fetch
  public getStateSelector() {
      return this.appDataSelector;
  }
}
