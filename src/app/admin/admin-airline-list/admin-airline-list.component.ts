import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ApplicationDataManagerService } from 'src/app/core/services/app-data-manager.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-airline-list',
  templateUrl: './admin-airline-list.component.html',
  styleUrls: ['./admin-airline-list.component.scss']
})
export class AdminAirlineListComponent implements OnInit {
  public flightListData = [];
  public passengerData = [];
  public panelOpenedIndex;
  selectedFlightId = '';
  parentGroup = new FormGroup({});

  seatList: any;
  constructor(
    private appDataManagerService: ApplicationDataManagerService,
    public dialog: MatDialog) {

  }

  ngOnInit() {
    this.retriveFlightList();
    this.appDataManagerService.listenForApplicationData('airlineList').subscribe((data) => {
      this.flightListData = data;
    });
  }

  retriveFlightList() {
    this.appDataManagerService.listenFromServer('airlineList', '/apis');
  }

  getFlightDetails(flight, index) {
    this.selectedFlightId = flight.flightnumber;
    this.panelOpenedIndex = index;
    this.appDataManagerService.listenFromServer('activePassengerData', '/apis/passengers/' + flight.flightnumber);
    this.appDataManagerService.listenForApplicationData('activePassengerData').subscribe((data) => {
      this.passengerData = data;
    });
  }

  saveServiceAndShopData() {
    if (this.parentGroup.dirty) {
      const url = environment.firebase.backendAPI + '/apis/airlinelist/editedData';
      const body = {
        flightId: this.selectedFlightId,
        data: this.parentGroup.value
      };
      this.appDataManagerService
        .sendToServer(url, body);
    }
    this.parentGroup.reset();
  }

}
