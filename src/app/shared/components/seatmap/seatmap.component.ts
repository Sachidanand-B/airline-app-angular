import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { seatMapConstants } from './seatmap.constants';
import { MatDialog } from '@angular/material';
import { PassengerDetailComponent } from '../modal/passenger-detail/passenger-detail.component';
import { InflightpassengerDetailComponent } from '../modal/in-flight-passenger-detail/in-flight-passenger-detail.component';

@Component({
  selector: 'app-seatmap',
  templateUrl: './seatmap.component.html',
  styleUrls: ['./seatmap.component.scss'],
})
export class SeatmapComponent implements OnInit, OnChanges {
  @Input() seatMapData;
  @Input() isInFlightCall;
  @Input() flightData;
  seatList: any;
  checkedInText = 'checked-in';
  notCheckedInText = 'not-checked-in';
  specialMealText = 'special-meal';
  normalMealText = 'normal-meal';
  seatData = seatMapConstants.seats;
  seatLabel = seatMapConstants.seatNumbers;
  selectedSeat;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.seatList = Object.assign([],
      [
        {
          row: 'A',
          seats: this.assingSeatData(),
        },
        {
          row: 'B',
          seats: this.assingSeatData(),
        },
        {
          row: 'C',
          seats: this.assingSeatData(),
        },
        {
          row: 'D',
          seats: this.assingSeatData(),
        },
        {
          row: 'E',
          seats: this.assingSeatData(),
        },
        {
          row: 'F',
          seats: this.assingSeatData(),
        },
      ]);
    if (this.seatMapData && this.seatList) {
      Object.entries(this.seatMapData).forEach((passengersData: any) => {
        const seatAssigned = passengersData[1].seatNumber.slice(1);
        const rowValue = passengersData[1].seatNumber.slice(0, 1);
        const indexOfRow = this.seatList.findIndex(
          (item: any) => item.row === rowValue
        );
        const indexOfSeat = +seatAssigned - 1;
        if (this.isInFlightCall) {
          this.createInflightSeatMapData(passengersData, indexOfRow, indexOfSeat);
        } else {
          this.createCheckInSeatMapData(passengersData, indexOfRow, indexOfSeat);
        }
      });
    }
  }

  createCheckInSeatMapData(passengersData, indexOfRow, indexOfSeat) {
    if (passengersData[1].checkedIn) {
      let index: number = this.seatList[indexOfRow].seats[
        indexOfSeat
      ].indexOf(null);
      if (index === -1) {
        index =
          this.seatList[indexOfRow].seats[indexOfSeat].indexOf(
            this.checkedInText
          ) > -1
            ? this.seatList[indexOfRow].seats[indexOfSeat].indexOf(
              this.checkedInText
            )
            : this.seatList[indexOfRow].seats[indexOfSeat].indexOf(
              this.notCheckedInText
            );
      }
      this.seatList[indexOfRow].seats[indexOfSeat].splice(index, 1);
      if (
        !this.seatList[indexOfRow].seats[indexOfSeat].includes(
          this.checkedInText
        )
      ) {
        this.seatList[indexOfRow].seats[indexOfSeat].push(
          this.checkedInText
        );
      }
    } else {
      let index: number = this.seatList[indexOfRow].seats[
        indexOfSeat
      ].indexOf(null);
      if (index === -1) {
        index =
          this.seatList[indexOfRow].seats[indexOfSeat].indexOf(
            this.checkedInText
          ) > -1
            ? this.seatList[indexOfRow].seats[indexOfSeat].indexOf(
              this.checkedInText
            )
            : this.seatList[indexOfRow].seats[indexOfSeat].indexOf(
              this.notCheckedInText
            );
      }
      this.seatList[indexOfRow].seats[indexOfSeat].splice(index, 1);
      if (
        !this.seatList[indexOfRow].seats[indexOfSeat].includes(
          this.notCheckedInText
        )
      ) {
        this.seatList[indexOfRow].seats[indexOfSeat].push(
          this.notCheckedInText
        );
      }
    }
    if (
      passengersData[1].wheelChair &&
      !this.seatList[indexOfRow].seats[indexOfSeat].includes('wheelChair')
    ) {
      this.seatList[indexOfRow].seats[indexOfSeat].push('wheelChair');
    }
    if (
      passengersData[1].infants &&
      !this.seatList[indexOfRow].seats[indexOfSeat].includes('infants')
    ) {
      this.seatList[indexOfRow].seats[indexOfSeat].push('infants');
    }
    if (
      passengersData[1].ancillaryServices &&
      !this.seatList[indexOfRow].seats[indexOfSeat].includes(
        'ancillaryServices'
      )
    ) {
      this.seatList[indexOfRow].seats[indexOfSeat].push(
        'ancillaryServices'
      );
    }
    let passengerDetailIndex;
    this.seatList[indexOfRow].seats[indexOfSeat].forEach((element, index) => {
      if (typeof element === 'object') {
        passengerDetailIndex = index;
      }
    });
    if (passengerDetailIndex) {
      this.seatList[indexOfRow].seats[indexOfSeat].splice(passengerDetailIndex, 1);
    }
    this.seatList[indexOfRow].seats[indexOfSeat].push(passengersData[1]);
  }

  createInflightSeatMapData(passengersData, indexOfRow, indexOfSeat) {
    if (passengersData[1].specialMeal) {
      let index: number = this.seatList[indexOfRow].seats[
        indexOfSeat
      ].indexOf(null);
      if (index === -1) {
        index =
          this.seatList[indexOfRow].seats[indexOfSeat].indexOf(
            this.specialMealText
          ) > -1
            ? this.seatList[indexOfRow].seats[indexOfSeat].indexOf(
              this.specialMealText
            )
            : this.seatList[indexOfRow].seats[indexOfSeat].indexOf(
              this.normalMealText
            );
      }
      this.seatList[indexOfRow].seats[indexOfSeat].splice(index, 1);
      if (
        !this.seatList[indexOfRow].seats[indexOfSeat].includes(
          this.specialMealText
        )
      ) {
        this.seatList[indexOfRow].seats[indexOfSeat].push(
          this.specialMealText
        );
      }
    } else {
      let index: number = this.seatList[indexOfRow].seats[
        indexOfSeat
      ].indexOf(null);
      if (index === -1) {
        index =
          this.seatList[indexOfRow].seats[indexOfSeat].indexOf(
            this.specialMealText
          ) > -1
            ? this.seatList[indexOfRow].seats[indexOfSeat].indexOf(
              this.specialMealText
            )
            : this.seatList[indexOfRow].seats[indexOfSeat].indexOf(
              this.normalMealText
            );
      }
      this.seatList[indexOfRow].seats[indexOfSeat].splice(index, 1);
      if (
        !this.seatList[indexOfRow].seats[indexOfSeat].includes(
          this.normalMealText
        )
      ) {
        this.seatList[indexOfRow].seats[indexOfSeat].push(
          this.normalMealText
        );
      }
    }
    this.checkAndPushKeysInSeatList(passengersData, indexOfRow, indexOfSeat, 'shopItems');
    this.checkAndPushKeysInSeatList(passengersData, indexOfRow, indexOfSeat, 'serviceList');

    let passengerDetailIndex;
    this.seatList[indexOfRow].seats[indexOfSeat].forEach((element, index) => {
      if (typeof element === 'object') {
        passengerDetailIndex = index;
      }
    });
    if (passengerDetailIndex >= 0) {
      this.seatList[indexOfRow].seats[indexOfSeat].splice(passengerDetailIndex, 1);
    }
    this.seatList[indexOfRow].seats[indexOfSeat].push(passengersData[1]);
  }

  checkAndPushKeysInSeatList(passengersData, indexOfRow, indexOfSeat, keyToCheck) {
    if (passengersData[1][keyToCheck] &&
      passengersData[1][keyToCheck].length) {
      if (!this.seatList[indexOfRow].seats[indexOfSeat].includes(
        keyToCheck
      )) {
        this.seatList[indexOfRow].seats[indexOfSeat].push(
          keyToCheck
        );
      }
    } else if (this.seatList[indexOfRow].seats[indexOfSeat].includes(keyToCheck)) {
      let isExistIndex;
      this.seatList[indexOfRow].seats[indexOfSeat].forEach((element, index) => {
        if (element === keyToCheck) {
          isExistIndex = index;
        }
      });
      if (isExistIndex >= 0) {
        this.seatList[indexOfRow].seats[indexOfSeat].splice(isExistIndex, 1);
      }
    }
  }


  clickOnseat(seat, row, seatData) {
    const indexOfRow = this.seatList.findIndex((item: any) => item.row === row);
    const passengerDetails = this.seatList[indexOfRow].seats[seat].filter(
      (element) => typeof element === 'object'
    );
    if (!seatData.includes(null)) {
      this.selectedSeat = seat + row;
      if (this.isInFlightCall) {
        this.dialog.open(InflightpassengerDetailComponent, {
          data: { ['passengerDetails']: passengerDetails[0], ['flightData']: this.flightData },
        });
      } else {
        this.dialog.open(PassengerDetailComponent, {
          data: { ['passengerDetails']: passengerDetails[0] },
        });
      }
    }
  }

  assingSeatData() {
    return new Array(20).fill(null).map(() => new Array(null));
  }

  isSeatContainspassenger(seat) {
    let isSeatContainspassengerDetails = false;
    seat.forEach((element) => {
      if (typeof element === 'object') {
        isSeatContainspassengerDetails = true;
      }
    });
    if (!isSeatContainspassengerDetails) {
      return true;
    }
    return false;
  }
}
