import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { inject } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            queryParams: of({}),
            snapshot: { data: {} }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('El componente se ha creado', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario es inválido cuando esta vacio', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('El formulario es válido cuando se rellenan todos los campos de manera correcta', () => {
    component.form.get('name')?.setValue('name');
    component.form.get('email')?.setValue('email@email.com');
    component.form.get('password')?.setValue('Admin1.');
    component.form.get('passwordConfirmation')?.setValue('Admin1.');
    expect(component.form.valid).toBeTruthy();
  });
});
