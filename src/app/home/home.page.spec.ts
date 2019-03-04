import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';
import {AuthServiceService} from '../auth-service.service';
import {StorageService} from 'ngx-webstorage-service';
import {Router} from '@angular/router';

describe('HomePage', () => {
  let component: HomePage;
  let service: AuthServiceService;
  let storage: StorageService;
  let router: Router;

  let fixture: ComponentFixture<HomePage>;

  beforeEach( () => {
    storage = null;
    router = null;

    service = new AuthServiceService(storage);
    component = new HomePage(service, router);
  });

  afterEach( () => {
    localStorage.removeItem('sample');
    service = null;
    component = null;
  });

  it('Cant Login, User is not authenticated', () => {
    localStorage.setItem('sample', '12345');
      expect(service.CheckUserCredentials('sample', '12345')).toBeTruthy();
  });

  it('Cant Login, User is not authenticated', () => {
    expect(service.CheckUserCredentials('sample', '5457425')).toBeFalsy();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
