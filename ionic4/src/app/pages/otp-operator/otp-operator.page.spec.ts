import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpOperatorPage } from './otp-operator.page';

describe('OtpOperatorPage', () => {
  let component: OtpOperatorPage;
  let fixture: ComponentFixture<OtpOperatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpOperatorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpOperatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
