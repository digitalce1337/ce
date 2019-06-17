import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerJobsPage } from './owner-jobs.page';

describe('OwnerJobsPage', () => {
  let component: OwnerJobsPage;
  let fixture: ComponentFixture<OwnerJobsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerJobsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerJobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
