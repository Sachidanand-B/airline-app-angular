import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { send } from 'process';
import { ApplicationDataManagerService } from 'src/app/core/services/app-data-manager.service';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss'],
})
export class PassengerDetailComponent {
  confirmButtonText;
  passengerDetails;
  servicesModified = {};
  seatList = [];
  parentGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PassengerDetailComponent>,
    private applicationDataService: ApplicationDataManagerService
  ) {
    if (data.passengerDetails) {
      this.passengerDetails = data.passengerDetails;
    }
    if (this.passengerDetails.checkedIn) {
      this.confirmButtonText = 'Undo Checked-In';
    } else {
      this.confirmButtonText = 'Check-In';
    }
    if (data.edit) {
      this.parentGroup = new FormGroup({
        seatNumber: new FormControl(
          this.passengerDetails.seatNumber,
          Validators.pattern('[a-fA-F]{1}(20|[0-1][0-9]|[0-9])')
        ),
      });
      this.confirmButtonText = 'Submit';
    }
  }

  modifiedServices(key, value, isformcontrol?) {
    if (!isformcontrol) {
      if (value !== this.passengerDetails[key]) {
        this.servicesModified[key] = value;
      } else {
        delete this.servicesModified[key];
      }
    } else if (this.servicesModified[key]) {
      delete this.servicesModified[key];
    }
  }

  checkIsValid() {
    return this.data.edit && !Object.keys(this.servicesModified).length;
  }

  onConfirmClick(): void {
    let body;
    let url;
    if (this.data.edit) {
      body = {
        passport: this.passengerDetails.passport,
        flightId: this.passengerDetails.flightId,
        data: this.servicesModified,
      };
      url = '/apis/passengers/editedData';
    } else {
      body = {
        passport: this.passengerDetails.passport,
        flightId: this.passengerDetails.flightId,
        checkedIn: !this.passengerDetails.checkedIn,
      };
      url = '/apis/passengers/checkedIn';
    }
    this.applicationDataService.sendToServer(url, body).subscribe(() => {
      this.applicationDataService.listenFromServer(
        'activePassengerData',
        '/apis/passengers/' + this.passengerDetails.flightId
      );
    });
    this.dialogRef.close(true);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
