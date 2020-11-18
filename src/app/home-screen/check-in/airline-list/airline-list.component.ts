import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StoresService } from 'src/app/core/store/stores.service';
import { ApplicationDataManagerService } from 'src/app/core/services/app-data-manager.service';

@Component({
  selector: 'app-airline-list',
  templateUrl: './airline-list.component.html',
  styleUrls: ['./airline-list.component.scss']
})
export class AirlineListComponent implements OnInit {
  public flightListData = [];
  public passengerData = [];
  public panelOpenedIndex;
  currentToggleValue;
  seatList: any;
  constructor(
    private appDataManagerService: ApplicationDataManagerService,
    public dialog: MatDialog, private storeServ: StoresService) { }

  ngOnInit() {
    this.appDataManagerService.listenForApplicationData('airlineList').subscribe((data) => {
      this.flightListData = data;
    });
  }

  getFlightDetails(flight, index) {
    this.panelOpenedIndex = index;
    this.appDataManagerService.listenFromServer('activePassengerData', '/apis/passengers/' + flight.flightnumber);
    this.appDataManagerService.listenForApplicationData('activePassengerData').subscribe((data) => {
      this.passengerData = data;
    });
  }

  toggleState(event) {
    this.currentToggleValue = !this.currentToggleValue;
  }

  displayToggleState(value: boolean) {
    return value ? 'Switch to view seat map layout' : 'Switch to view passengers list';
  }
}
