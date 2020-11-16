import { createComponentFactory, mockProvider, Spectator } from '@ngneat/spectator';
import { of } from 'rxjs';
import { userDeviceMock2 } from 'src/app/core/mock/model-mocks';
import { UserDeviceDto } from 'src/app/core/model/UserDeviceDto';
import { DeviceApiTddService } from '../device-api-tdd.service';

import { UserDeviceListTddComponent } from './user-device-list-tdd.component';

describe('UserDeviceListTddComponent', () => {
  let spectator: Spectator<UserDeviceListTddComponent>;
  const createComponent = createComponentFactory({
    component: UserDeviceListTddComponent,
    providers: [
      mockProvider(DeviceApiTddService, {
        getDevicesForUser: jasmine.createSpy('getDevicesForUser').and.returnValue(of(new Array<UserDeviceDto>(3).fill(userDeviceMock2())))
      })
    ],
  });

  beforeEach(()=> spectator = createComponent())

  it('should show table header', () => {
    const elements = spectator.queryAll('th');
    expect(elements.length).toBe(3);
    expect(elements.map(e => e.textContent)).toContain('Price');
    expect(elements.map(e => e.textContent)).toContain('Category');
    expect(elements.map(e => e.textContent)).toContain('Device name');
  });

  it('should call api service', () =>  {
    expect(spectator.inject(DeviceApiTddService, true).getDevicesForUser).toHaveBeenCalled();
  });

  it('should show table data', () => {
    const elements = spectator.queryAll('tr.device-rows');
    expect(elements.length).toBe(3);
  });

});
