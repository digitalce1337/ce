import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerOperatorsPage } from './owner-operators.page';

describe('OwnerOperatorsPage', () => {
  let component: OwnerOperatorsPage;
  let fixture: ComponentFixture<OwnerOperatorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerOperatorsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerOperatorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
