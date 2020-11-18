import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckInComponent } from './check-in/check-in.component';
import { InFlightComponent } from './in-flight/in-flight.component';
import { HomeScreenComponent } from './home-screen.component';

const routes: Routes = [
  {
    path: '',
    component: HomeScreenComponent,
    children: [
      { path: '', redirectTo: 'check-in', pathMatch: 'full' },
      { path: 'check-in', component: CheckInComponent },
      { path: 'in-flight', component: InFlightComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeScreenRoutingModule { }
