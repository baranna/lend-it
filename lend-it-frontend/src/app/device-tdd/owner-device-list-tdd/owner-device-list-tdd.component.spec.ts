import { createComponentFactory, mockProvider, Spectator } from '@ngneat/spectator';
import { of } from 'rxjs';
import { ownerDeviceMock2 } from 'src/app/core/mock/model-mocks';
import { OwnerDeviceDto } from 'src/app/core/model/OwnerDeviceDto';
import { DeviceApiTddService } from '../device-api-tdd.service';

import { OwnerDeviceListTddComponent } from './owner-device-list-tdd.component';

describe('OwnerDeviceListTddComponent', () => {
  let spectator: Spectator<OwnerDeviceListTddComponent>;
  const createComponent = createComponentFactory({
    component: OwnerDeviceListTddComponent,
    providers: [
      mockProvider(DeviceApiTddService, {
        getDevicesForOwner: jasmine.createSpy('getDevicesForOwner').and.returnValue(of(new Array<OwnerDeviceDto>(3).fill(ownerDeviceMock2())))
      })
    ],
  });

  beforeEach(()=> spectator = createComponent())

  it('should show table header', () => {
    const elements = spectator.queryAll('th');
    expect(elements.length).toBe(4);
    expect(elements.map(e => e.textContent)).toContain('Status');
    expect(elements.map(e => e.textContent)).toContain('Category');
    expect(elements.map(e => e.textContent)).toContain('Device name');
    expect(elements.map(e => e.textContent)).toContain('ID No.');
  });

  it('should call api service', () =>  {
    expect(spectator.inject(DeviceApiTddService, true).getDevicesForOwner).toHaveBeenCalled();
  });

  it('should show table data', () => {
    const elements = spectator.queryAll('tr.device-rows');
    expect(elements.length).toBe(4);
  });

});