import { Component, OnInit } from '@angular/core';
import { ApplicationDataManagerService } from 'src/app/core/services/app-data-manager.service';

@Component({
  selector: 'app-in-flight',
  templateUrl: './in-flight.component.html',
  styleUrls: ['./in-flight.component.scss']
})
export class InFlightComponent implements OnInit {
  constructor(private applicationDataService: ApplicationDataManagerService) {
  }

  ngOnInit() {
    this.retriveFlightList();
  }

  retriveFlightList() {
    this.applicationDataService.listenFromServer('airlineList', '/apis');
  }
}
