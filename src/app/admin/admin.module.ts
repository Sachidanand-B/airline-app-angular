import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminAirlineListComponent } from './admin-airline-list/admin-airline-list.component';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [AdminComponent, AdminAirlineListComponent],
  imports: [CommonModule, AdminRoutingModule, MatToolbarModule, SharedModule],
})
export class AdminModule { }
