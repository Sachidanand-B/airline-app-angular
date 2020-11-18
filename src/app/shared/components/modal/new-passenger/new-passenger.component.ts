import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ApplicationDataManagerService } from 'src/app/core/services/app-data-manager.service';

@Component({
  selector: 'app-new-passenger',
  templateUrl: './new-passenger.component.html',
  styleUrls: ['./new-passenger.component.scss'],
})
export class NewPassengerComponent {
  confirmButtonText = 'Save';
  passengerDetails;
  servicesModified = {};
  seatList = [];
  parentGroup = new FormGroup({});
  flightServiceList = [];
  flightShopItemList = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<NewPassengerComponent>,
    private applicationDataService: ApplicationDataManagerService
  ) {
    if (data.passengerDetails) {
      this.passengerDetails = data.passengerDetails;
      this.parentGroup = new FormGroup({
        firstName: new FormControl(
          this.passengerDetails.firstName,
          Validators.required
        ),
        lastName: new FormControl(
          this.passengerDetails.lastName,
          Validators.required
        ),
        address: new FormControl(
          this.passengerDetails.address,
          Validators.required
        ),
        passport: new FormControl(
          this.passengerDetails.passport,
          Validators.required
        ),
        birthdate: new FormControl(
          new Date(this.passengerDetails.birthdate).toISOString(),
          Validators.required
        ),
        seatNumber: new FormControl(this.passengerDetails.seatNumber, [
          Validators.required,
          Validators.pattern('[a-fA-F]{1}(20|[0-1][0-9]|[0-9])'),
        ]),
        checkedIn: new FormControl(
          this.passengerDetails.checkedIn,
          Validators.required
        ),
        specialMeal: new FormControl(
          this.passengerDetails.specialMeal,
          Validators.required
        ),
        infants: new FormControl(
          this.passengerDetails.infants,
          Validators.required
        ),
        wheelChair: new FormControl(
          this.passengerDetails.wheelChair,
          Validators.required
        ),
        ancillaryServices: new FormControl(
          this.passengerDetails.ancillaryServices,
          Validators.required
        ),
      });
    } else {
      this.parentGroup = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        passport: new FormControl('', Validators.required),
        birthdate: new FormControl('', Validators.required),
        seatNumber: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-fA-F]{1}(20|[0-1][0-9]|[0-9])'),
        ]),
        specialMeal: new FormControl('', Validators.required),
        checkedIn: new FormControl('', Validators.required),
        infants: new FormControl('', Validators.required),
        wheelChair: new FormControl('', Validators.required),
        ancillaryServices: new FormControl('', Validators.required),
      });
    }
    this.flightServiceList = data.flightData.ancillaryServiceList;
    this.flightShopItemList = data.flightData.shopItemList;
  }

  onConfirmClick(parentGroup): void {
    if (parentGroup.dirty) {
      const url = '/apis/passengers/editedData';
      const passport = this.passengerDetails
        ? this.passengerDetails.passport
        : '';
      const dataPayload = this.parentGroup.value;

      if (!this.passengerDetails) {
        dataPayload.flightId = this.data.flightData.flightnumber;
        dataPayload.flightId_passport =
          this.data.flightData.flightnumber +
          '_' +
          this.parentGroup.get('passport').value;
      }
      dataPayload.birthdate = this.formatDate(dataPayload.birthdate);
      const body = {
        // tslint:disable-next-line:object-literal-shorthand
        passport: passport,
        flightId: this.data.flightData.flightnumber,
        data: dataPayload,
      };
      this.applicationDataService.sendToServer(url, body).subscribe(() => {
        this.applicationDataService.listenFromServer(
          'activePassengerData',
          '/apis/passengers/' + this.data.flightData.flightnumber
        );
      });
    }
    this.dialogRef.close(true);
  }

  checkIsValid() {
    return this.parentGroup.pristine || this.parentGroup.invalid;
  }

  onCancel() {
    this.dialogRef.close();
  }

  formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    return [month, day, year].join('/');
  }
}
