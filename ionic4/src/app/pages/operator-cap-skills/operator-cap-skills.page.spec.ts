import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorCapSkillsPage } from './operator-cap-skills.page';

describe('OperatorCapSkillsPage', () => {
  let component: OperatorCapSkillsPage;
  let fixture: ComponentFixture<OperatorCapSkillsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorCapSkillsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorCapSkillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
