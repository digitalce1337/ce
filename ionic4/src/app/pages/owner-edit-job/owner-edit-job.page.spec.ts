import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerEditJobPage } from './owner-edit-job.page';

describe('OwnerEditJobPage', () => {
  let component: OwnerEditJobPage;
  let fixture: ComponentFixture<OwnerEditJobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerEditJobPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerEditJobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
