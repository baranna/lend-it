import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DeviceRoutingModule } from './device-routing.module';
import { OwnerDeviceListComponent } from './owner-device-list/owner-device-list.component';
import { UserDeviceListComponent } from './user-device-list/user-device-list.component';

@NgModule({
	declarations: [ UserDeviceListComponent, OwnerDeviceListComponent ],
	imports: [
		CommonModule,
		DeviceRoutingModule,
	],
})
export class DeviceModule {
}
