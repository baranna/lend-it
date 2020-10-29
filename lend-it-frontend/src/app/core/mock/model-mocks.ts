import { DeviceStatusType } from '../../device/model/DeviceStatusType';
import { OwnerDeviceDto } from '../../device/model/OwnerDeviceDto';
import { UserDeviceDto } from '../../device/model/UserDeviceDto';

export const userDeviceMock1 = (): UserDeviceDto => {
	return {
		id: 1,
		category: 'IT',
		name: 'Optical Mouse',
		price: 20,
	};
};

export const userDeviceMock2 = (): UserDeviceDto => {
	return {
		id: 1,
		category: 'Kitchen',
		name: 'Stove',
		price: 400,
	};
};

export const userDeviceMock3 = (): UserDeviceDto => {
	return {
		id: 1,
		category: 'Cleaning',
		name: 'Washing machine',
		price: 170,
	};
};

export const ownerDeviceMock1 = (): OwnerDeviceDto => {
	return {
		id: 1,
		category: 'Cleaning',
		name: 'Washing machine',
		status: DeviceStatusType.Lost
	};
};

export const ownerDeviceMock2 = (): OwnerDeviceDto => {
	return {
		id: 1,
		category: 'Cleaning',
		name: 'Washing machine',
		status: DeviceStatusType.NotReturned
	};
};

export const ownerDeviceMock3 = (): OwnerDeviceDto => {
	return {
		id: 1,
		category: 'Kitchen',
		name: 'Stove',
		status: DeviceStatusType.OutOfOrder
	};
};

export const ownerDeviceMock4 = (): OwnerDeviceDto => {
	return {
		id: 1,
		category: 'IT',
		name: 'Optical Mouse',
		status: DeviceStatusType.Available
	};
};
