import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { appReducer } from '../store/reducers/app.reducers';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { rootStoreReducer } from './reducers/root-store.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducer, { metaReducers: [rootStoreReducer] }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
  ],
})
export class StoresModule {}
