import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorJobInfoPage } from './operator-job-info.page';

describe('OperatorJobInfoPage', () => {
  let component: OperatorJobInfoPage;
  let fixture: ComponentFixture<OperatorJobInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorJobInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorJobInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
