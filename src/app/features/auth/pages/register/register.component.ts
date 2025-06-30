import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { FormControlErrorsComponent } from "../../../../shared/components/form-control-errors/form-control-errors.component";
import { securePasswordValidator } from '@core/validators/secure-password-validator';
import { passwordMatchValidator } from '@core/validators/password-match-validator';

/**
 * @description
 * Componente para registrar un usuario
 */
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, FormControlErrorsComponent, RouterLink],
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  router = inject(Router);
  authService = inject(AuthService);
  formBuilder = inject(FormBuilder);
  
  form = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, securePasswordValidator]],
    passwordConfirmation: ['', [Validators.required]]
  }, { validators: passwordMatchValidator });

  message = signal<string>('');

  ngOnInit(): void {
    if (this.authService.isLogged()) {
      this.router.navigate(['auth/profile']);
    }
  }

  /**
   * @description
   * Registra un usuario
   */
  register() {
    if (this.form.valid) {

      this.message.set('¡Registrado con exito!');

      setTimeout(() => {
        this.authService.login(this.form.value.email!, this.form.value.name!);
      }, 1000);
    }
  }
}
