import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { inject } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let service: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileComponent]
    })
    .compileComponents();

    service = TestBed.inject(AuthService);
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service.logout();
    service.login('email', 'name');
  });

  it('El componente se ha creado', () => {
    expect(component).toBeTruthy();
  });

  it('Se muestran los datos del usuario logueado en el formulario', () => {
    expect(component.form.value.email).toBe('email');
    expect(component.form.value.name).toBe('name');
  });
});
