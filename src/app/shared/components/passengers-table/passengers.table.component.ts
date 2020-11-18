import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { NewPassengerComponent } from '../modal/new-passenger/new-passenger.component';
import { PassengerDetailComponent } from '../modal/passenger-detail/passenger-detail.component';

@Component({
  selector: 'app-passengers-table',
  templateUrl: './passengers.table.component.html',
  styleUrls: ['./passengers.table.component.scss'],
})

export class PassengersTableComponent implements OnInit, OnChanges {
  @Input() tableData;
  @Input() adminUse;
  @Input() flightData;
  displayedColumns = [
    'firstName',
    'lastName',
    'passport',
    'birthdate',
    'address',
    'flightId',
    'seatNumber',
    'checkedIn',
    'infants',
    'wheelChair',
    'ancillaryServices',
    'editDetails'
  ];
  rowData: MatTableDataSource<any>;
  filterList = [];
  checkedInFilterList = [
    { key: 'checkedIn', value: 'Checked In' },
    { key: 'notCheckedIn', value: 'Not Checked In' },
    { key: 'infants', value: 'Infants' },
    { key: 'wheelChair', value: 'Wheel Chair' }
  ];
  adminFilterList = [
    { key: 'passport', value: 'Empty passport' },
    { key: 'address', value: 'Empty address' },
    { key: 'birthdate', value: 'Empty birth date' },
  ];
  defaultFilter;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.rowData.filterPredicate = (data: any, filter: string) => {
      const filterKey = Object.keys(JSON.parse(filter))[0];
      return data[filterKey] === Object.values(JSON.parse(filter))[0];
    };
  }

  ngOnChanges() {
    if (this.tableData) {
      const tempArr = [];
      Object.entries(this.tableData).forEach((passengersData: any) => {
        tempArr.push(passengersData[1]);
      });
      this.rowData = new MatTableDataSource(tempArr);
      this.filterList = this.adminUse ? this.adminFilterList : this.checkedInFilterList;
    }
  }

  editpassengerDetails(rowData) {
    if (this.adminUse) {
      this.dialog.open(NewPassengerComponent, {
        data: { ['passengerDetails']: rowData, ['flightData']: this.flightData },
      });
    } else {
      this.dialog.open(PassengerDetailComponent, {
        data: { ['passengerDetails']: rowData, ['edit']: true },
      });
    }
  }

  filterData(event) {
    const filterValues = {};
    if (event.value === 'notCheckedIn') {
      // tslint:disable-next-line:no-string-literal
      filterValues['checkedIn'] = false;
    } else {
      filterValues[event.value] = this.adminUse ? '' : true;
    }
    this.rowData.filter = JSON.stringify(filterValues);
  }

  clearFilter(event) {
    this.defaultFilter = '';
    this.rowData.filter = '';
    event.stopPropagation();
  }
}
