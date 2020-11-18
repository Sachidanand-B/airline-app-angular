import { Component, OnInit, Input } from '@angular/core';
import { ApplicationDataManagerService } from 'src/app/core/services/app-data-manager.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
})
export class CheckInComponent implements OnInit {
  constructor(private applicationDataService: ApplicationDataManagerService) {
  }

  ngOnInit() {
    this.retriveFlightList();
  }

  retriveFlightList() {
   this.applicationDataService.listenFromServer('airlineList', '/apis');
  }
}
