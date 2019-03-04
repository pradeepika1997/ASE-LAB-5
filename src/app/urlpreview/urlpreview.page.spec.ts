import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlpreviewPage } from './urlpreview.page';

describe('UrlpreviewPage', () => {
  let component: UrlpreviewPage;
  let fixture: ComponentFixture<UrlpreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlpreviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlpreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
