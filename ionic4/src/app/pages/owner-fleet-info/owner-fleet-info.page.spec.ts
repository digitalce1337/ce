import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerFleetInfoPage } from './owner-fleet-info.page';

describe('OwnerFleetInfoPage', () => {
  let component: OwnerFleetInfoPage;
  let fixture: ComponentFixture<OwnerFleetInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerFleetInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerFleetInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
