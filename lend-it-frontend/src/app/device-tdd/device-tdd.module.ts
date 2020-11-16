import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerDeviceListTddComponent } from './owner-device-list-tdd/owner-device-list-tdd.component';
import { UserDeviceListTddComponent } from './user-device-list-tdd/user-device-list-tdd.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [OwnerDeviceListTddComponent, UserDeviceListTddComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class DeviceTddModule { }
