import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorTabsPage } from './operator-tabs.page';

describe('OperatorTabsPage', () => {
  let component: OperatorTabsPage;
  let fixture: ComponentFixture<OperatorTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
