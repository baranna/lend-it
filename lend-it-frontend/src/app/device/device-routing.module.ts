import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerDeviceListComponent } from './owner-device-list/owner-device-list.component';
import { UserDeviceListComponent } from './user-device-list/user-device-list.component';

const routes: Routes = [
	{
		path: 'user',
		component: UserDeviceListComponent,
	},
	{
		path: 'owner',
		component: OwnerDeviceListComponent,
	},
	{
		path: '',
		redirectTo: 'user',
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ],
})
export class DeviceRoutingModule {
}
