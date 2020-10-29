import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { DeviceApiService } from '../device-api.service';
import { UserDeviceDto } from '../model/UserDeviceDto';

@Component({
	selector: 'app-user-device-list',
	templateUrl: './user-device-list.component.html',
	styleUrls: [ './user-device-list.component.scss' ],
})
export class UserDeviceListComponent implements OnInit {

	devices: UserDeviceDto[];

	constructor(private api: DeviceApiService) {
	}

	ngOnInit(): void {
		this.api.getDevicesForUser().subscribe(res => this.devices = _.sortBy(res, 'category'));
	}

}
