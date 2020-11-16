import { createServer } from 'miragejs';
import { OwnerDeviceDto } from '../model/OwnerDeviceDto';
import { UserDeviceDto } from '../model/UserDeviceDto';
import {
	ownerDeviceMock1,
	ownerDeviceMock2,
	ownerDeviceMock3,
	ownerDeviceMock4,
	userDeviceMock1,
	userDeviceMock2,
	userDeviceMock3,
} from './model-mocks';

createServer({
	// tslint:disable-next-line:typedef
	routes() {
		this.get('/api/device/user', () => {
			return [
				...new Array<UserDeviceDto>(6).fill(userDeviceMock1()),
				...new Array<UserDeviceDto>(3).fill(userDeviceMock2()),
				...new Array<UserDeviceDto>(4).fill(userDeviceMock3()),
				...new Array<UserDeviceDto>(3).fill(userDeviceMock2()),
				...new Array<UserDeviceDto>(6).fill(userDeviceMock1()),
			];
		});
		this.get('/api/device/owner', () => {
			return [
				...new Array<OwnerDeviceDto>(6).fill(ownerDeviceMock1()),
				...new Array<OwnerDeviceDto>(3).fill(ownerDeviceMock2()),
				...new Array<OwnerDeviceDto>(4).fill(ownerDeviceMock3()),
				...new Array<OwnerDeviceDto>(2).fill(ownerDeviceMock4()),
			];
		});
	},
});
