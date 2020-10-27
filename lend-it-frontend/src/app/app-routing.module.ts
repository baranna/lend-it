import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'devices',
		loadChildren: () => import('./device/device.module').then(m => m.DeviceModule),
	},
	{
		path: '',
		redirectTo: 'devices',
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
})
export class AppRoutingModule {
}
