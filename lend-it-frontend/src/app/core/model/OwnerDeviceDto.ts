import { DeviceStatusType } from './DeviceStatusType';

export interface OwnerDeviceDto {
	id: number;
	name: string;
	category: string;
	status: DeviceStatusType;
}
