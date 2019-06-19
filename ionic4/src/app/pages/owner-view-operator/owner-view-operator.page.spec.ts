import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerViewOperatorPage } from './owner-view-operator.page';

describe('OwnerViewOperatorPage', () => {
  let component: OwnerViewOperatorPage;
  let fixture: ComponentFixture<OwnerViewOperatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerViewOperatorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerViewOperatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
