import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerTabsPage } from './owner-tabs.page';

describe('OwnerTabsPage', () => {
  let component: OwnerTabsPage;
  let fixture: ComponentFixture<OwnerTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
