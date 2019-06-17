import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerFleetPage } from './owner-fleet.page';

describe('OwnerFleetPage', () => {
  let component: OwnerFleetPage;
  let fixture: ComponentFixture<OwnerFleetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerFleetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerFleetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
