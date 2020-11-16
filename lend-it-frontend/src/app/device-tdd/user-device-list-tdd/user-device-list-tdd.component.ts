import { Component, OnInit } from '@angular/core';
import { UserDeviceDto } from 'src/app/core/model/UserDeviceDto';
import { DeviceApiTddService } from '../device-api-tdd.service';

@Component({
  selector: 'app-user-device-list-tdd',
  templateUrl: './user-device-list-tdd.component.html',
  styleUrls: ['./user-device-list-tdd.component.scss']
})
export class UserDeviceListTddComponent implements OnInit {

  devices: UserDeviceDto[];

	constructor(private api: DeviceApiTddService) {
	}

	ngOnInit(): void {
		this.api.getDevicesForUser().subscribe(res => this.devices = res);
	}

}
