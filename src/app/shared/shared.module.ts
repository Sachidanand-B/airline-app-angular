import { NgModule } from '@angular/core';

import {
  MatExpansionModule,
  MatToolbarModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatSelectModule,
  MatDialogModule,
  MatDividerModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatSlideToggleModule,
  MatTableModule,
  MatCheckboxModule,
  MatRadioModule,
  MatChipsModule,
  MatTabsModule,
  MatDatepickerModule,
  MatNativeDateModule,
} from '@angular/material';

import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PassengerDetailComponent } from './components/modal/passenger-detail/passenger-detail.component';
import { PassengerListComponent } from './passenger-list/passenger-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SeatmapComponent } from './components/seatmap/seatmap.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PassengersTableComponent } from './components/passengers-table/passengers.table.component';
import { InflightpassengerDetailComponent } from './components/modal/in-flight-passenger-detail/in-flight-passenger-detail.component';
import { ChipListComponent } from './components/chip-list/chip-list.component';
import { NewPassengerComponent } from './components/modal/new-passenger/new-passenger.component';
import { YesNoPipe } from './pipes/yes-no.pipe';

@NgModule({
  declarations: [
    PassengerDetailComponent,
    InflightpassengerDetailComponent,
    NewPassengerComponent,
    PassengerListComponent,
    HeaderComponent,
    FooterComponent,
    SeatmapComponent,
    PassengersTableComponent,
    ChipListComponent,
    YesNoPipe,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    RouterModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatChipsModule,
    MatTabsModule,
    MatDatepickerModule,
  ],
  exports: [
    PassengerDetailComponent,
    PassengerListComponent,
    HeaderComponent,
    FooterComponent,
    SeatmapComponent,
    PassengersTableComponent,
    ChipListComponent,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatChipsModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    YesNoPipe,
  ],
  entryComponents: [
    PassengerDetailComponent,
    InflightpassengerDetailComponent,
    NewPassengerComponent,
    SeatmapComponent,
    PassengersTableComponent,
    ChipListComponent,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { hasBackdrop: true, direction: 'ltr' },
    },
  ],
})
export class SharedModule {}
