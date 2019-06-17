import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerJobInfoPage } from './owner-job-info.page';

describe('OwnerJobInfoPage', () => {
  let component: OwnerJobInfoPage;
  let fixture: ComponentFixture<OwnerJobInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerJobInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerJobInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
