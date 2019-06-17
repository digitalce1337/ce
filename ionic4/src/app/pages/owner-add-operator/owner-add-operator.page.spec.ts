import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerAddOperatorPage } from './owner-add-operator.page';

describe('OwnerAddOperatorPage', () => {
  let component: OwnerAddOperatorPage;
  let fixture: ComponentFixture<OwnerAddOperatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerAddOperatorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerAddOperatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
