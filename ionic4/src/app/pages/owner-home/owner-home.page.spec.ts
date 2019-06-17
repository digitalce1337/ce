import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerHomePage } from './owner-home.page';

describe('OwnerHomePage', () => {
  let component: OwnerHomePage;
  let fixture: ComponentFixture<OwnerHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
