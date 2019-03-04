import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHistoryPage } from './user-history.page';

describe('UserHistoryPage', () => {
  let component: UserHistoryPage;
  let fixture: ComponentFixture<UserHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHistoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
