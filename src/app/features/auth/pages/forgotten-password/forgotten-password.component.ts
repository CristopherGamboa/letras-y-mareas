import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { FormControlErrorsComponent } from '@shared/components/form-control-errors/form-control-errors.component';

/**
 * @description
 * Componente para recuperar la contraseña
 */
@Component({
  selector: 'app-forgotten-password',
  imports: [ReactiveFormsModule, FormControlErrorsComponent, RouterLink],
  templateUrl: './forgotten-password.component.html'
})
export class ForgottenPasswordComponent implements OnInit {
  router = inject(Router);
  authService = inject(AuthService);
  formBuilder = inject(FormBuilder);
  
  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  });

  message = signal<string>('');

  ngOnInit(): void {
    if (this.authService.isLogged()) {
      this.router.navigate(['auth/profile']);
    }
  }

  /**
   * @description
   * Recupera la contraseña del usuario
   */
  recoverPassword() {
    if (this.form.valid) {

      this.message.set('¡Se te ha enviado un correo con las instrucciones para recuperar tu contraseña!');

      setTimeout(() => {
        this.router.navigate(['auth/login']);
      }, 2000);
    }
  }
}
