import { Component, OnInit } from '@angular/core';
import { OwnerDeviceDto } from 'src/app/core/model/OwnerDeviceDto';
import { DeviceApiTddService } from '../device-api-tdd.service';

@Component({
  selector: 'app-owner-device-list-tdd',
  templateUrl: './owner-device-list-tdd.component.html',
  styleUrls: ['./owner-device-list-tdd.component.scss']
})
export class OwnerDeviceListTddComponent implements OnInit {

  devices: OwnerDeviceDto[];

	constructor(private api: DeviceApiTddService) {
	}

	ngOnInit(): void {
		this.api.getDevicesForOwner().subscribe(res => this.devices = res);
	}

}