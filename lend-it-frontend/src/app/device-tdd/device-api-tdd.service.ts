import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OwnerDeviceDto } from '../core/model/OwnerDeviceDto';
import { UserDeviceDto } from '../core/model/UserDeviceDto';

@Injectable({
  providedIn: 'root'
})
export class DeviceApiTddService {

	constructor(private http: HttpClient) {
	}

	getDevicesForUser(): Observable<UserDeviceDto[]> {
		return this.http.get<UserDeviceDto[]>('/api/device/user');
	}

	getDevicesForOwner(): Observable<OwnerDeviceDto[]> {
		return this.http.get<OwnerDeviceDto[]>('/api/device/owner');
	}
}
