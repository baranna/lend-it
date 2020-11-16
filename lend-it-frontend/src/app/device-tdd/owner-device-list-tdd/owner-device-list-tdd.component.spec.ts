import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerDeviceListTddComponent } from './owner-device-list-tdd.component';

describe('OwnerDeviceListTddComponent', () => {
  let component: OwnerDeviceListTddComponent;
  let fixture: ComponentFixture<OwnerDeviceListTddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerDeviceListTddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerDeviceListTddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
