import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerDeviceListComponent } from './owner-device-list.component';

describe('OwnerDeviceListComponent', () => {
  let component: OwnerDeviceListComponent;
  let fixture: ComponentFixture<OwnerDeviceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerDeviceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerDeviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
