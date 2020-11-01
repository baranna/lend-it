import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { DeviceApiService } from '../device-api.service';
import { OwnerDeviceDto } from '../model/OwnerDeviceDto';

@Component({
  selector: 'app-owner-device-list',
  templateUrl: './owner-device-list.component.html',
  styleUrls: ['./owner-device-list.component.scss']
})
export class OwnerDeviceListComponent implements OnInit {

  devices: OwnerDeviceDto[];

	constructor(private api: DeviceApiService) {
	}

	ngOnInit(): void {
    this.api.getDevicesForOwner().subscribe(res => this.devices = _.sortBy(res, 'status'));
	}

}