import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorHomePage } from './operator-home.page';

describe('OperatorHomePage', () => {
  let component: OperatorHomePage;
  let fixture: ComponentFixture<OperatorHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
