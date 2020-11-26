import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpInteractService } from '../core/services/http-interact.service';
import { Router } from '@angular/router';

describe('AuthService', () => {
  let service: AuthService;
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AngularFireAuth,
          useValue: { auth: { signInWithPopup: of() } },
        },
        {
          provide: CookieService,
          useValue: {
            get: () => '',
            deleteAll: () => '',
          },
        },
        { provide: HttpInteractService, useValue: {} },
        {
          provide: Router,
          useValue: {
            navigateByUrl: () => '',
          },
        },
      ],
    })
  );

  beforeEach(() => {
    service = TestBed.get(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the role', () => {
    const spyonCookieService = spyOn(
      TestBed.get(CookieService),
      'get'
    ).and.returnValue('user');
    const retValue = service.getRole;
    expect(spyonCookieService).toHaveBeenCalledWith('role');
    expect(retValue).toEqual('user');
  });

  it('should get the name', () => {
    const spyonCookieService = spyOn(
      TestBed.get(CookieService),
      'get'
    ).and.returnValue('name');
    const retValue = service.getName;
    expect(spyonCookieService).toHaveBeenCalledWith('name');
    expect(retValue).toEqual('name');
  });

  it('should clear cookie', () => {
    const spyonCookieService = spyOn(TestBed.get(CookieService), 'deleteAll');
    service.clearCookie();
    expect(spyonCookieService).toHaveBeenCalled();
  });
});
