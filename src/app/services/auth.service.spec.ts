import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpInteractService } from '../core/services/http-interact.service';
import { Router } from '@angular/router';

describe('AuthService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AngularFireAuth,
          useValue: { auth: { signInWithPopup: of() } },
        },
        { provide: CookieService, useValue: {} },
        { provide: HttpInteractService, useValue: {} },
        { provide: Router, useValue: {} },
      ],
    })
  );

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
