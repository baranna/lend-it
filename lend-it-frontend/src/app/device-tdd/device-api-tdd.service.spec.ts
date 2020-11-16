import { createHttpFactory, HttpMethod, SpectatorHttp } from '@ngneat/spectator';
import { DeviceApiTddService } from './device-api-tdd.service';

describe('DeviceApiTddService', () => {
  let spectator: SpectatorHttp<DeviceApiTddService>;
  const createHttp = createHttpFactory(DeviceApiTddService);

  beforeEach(() => spectator = createHttp());

  it('it should get devices for users', () => {
    spectator.service.getDevicesForUser().subscribe();
    spectator.expectOne('/api/device/user', HttpMethod.GET);
  });

  it('it should get devices for owners', () => {
    spectator.service.getDevicesForOwner().subscribe();
    spectator.expectOne('/api/device/owner', HttpMethod.GET);
  });

});
