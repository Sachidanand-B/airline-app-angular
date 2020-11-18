import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeScreenRoutingModule } from './home-screen-routing.module';
import { CheckInComponent } from './check-in/check-in.component';
import { InFlightComponent } from './in-flight/in-flight.component';
import { AirlineListComponent } from './check-in/airline-list/airline-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeScreenComponent } from './home-screen.component';
import { SharedModule } from '../shared/shared.module';
import { InFlightAirlineListComponent } from './in-flight/in-flight-airline-list/in-flight-airline-list.component';

@NgModule({
  declarations: [
    CheckInComponent,
    InFlightComponent,
    AirlineListComponent,
    HomeScreenComponent,
    InFlightAirlineListComponent,
  ],
  imports: [CommonModule, HomeScreenRoutingModule, MatToolbarModule, SharedModule],
})
export class HomeScreenModule { }
