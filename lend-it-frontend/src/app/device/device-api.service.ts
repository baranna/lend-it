import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OwnerDeviceDto } from './model/OwnerDeviceDto';
import { UserDeviceDto } from './model/UserDeviceDto';

@Injectable({
	providedIn: 'root',
})
export class DeviceApiService {

	constructor(private http: HttpClient) {
	}

	getDevicesForUser(): Observable<UserDeviceDto[]> {
		return this.http.get<UserDeviceDto[]>('/api/device/user');
	}

	getDevicesForOwner(): Observable<OwnerDeviceDto[]> {
		return this.http.get<OwnerDeviceDto[]>('/api/device/owner');
	}
}
