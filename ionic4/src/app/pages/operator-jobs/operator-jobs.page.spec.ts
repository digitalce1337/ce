import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorJobsPage } from './operator-jobs.page';

describe('OperatorJobsPage', () => {
  let component: OperatorJobsPage;
  let fixture: ComponentFixture<OperatorJobsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorJobsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorJobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
