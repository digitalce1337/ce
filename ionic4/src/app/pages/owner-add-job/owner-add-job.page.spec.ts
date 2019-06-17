import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerAddJobPage } from './owner-add-job.page';

describe('OwnerAddJobPage', () => {
  let component: OwnerAddJobPage;
  let fixture: ComponentFixture<OwnerAddJobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerAddJobPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerAddJobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
