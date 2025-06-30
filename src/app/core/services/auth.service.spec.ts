import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('El servicio se ha creado', () => {
    expect(service).toBeTruthy();
  });

  it('El usuario ha iniciado sesión', () => {
    service.login('email', 'name');
    expect(service.isLogged()).toBeTruthy();
  });

  it('El usuario ha cerrado sesión', () => {
    service.login('email', 'name');
    service.logout();
    expect(service.isLogged()).toBeFalsy();
  })
});
