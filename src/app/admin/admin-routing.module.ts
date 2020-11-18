import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAirlineListComponent } from './admin-airline-list/admin-airline-list.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'home-page', pathMatch: 'full' },
      { path: 'home-page', component: AdminAirlineListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
