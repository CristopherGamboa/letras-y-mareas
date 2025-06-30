import { NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@core/services/auth.service';

/**
 * @description
 * Componente para iniciar sesión como administrador
 */
@Component({
  selector: 'app-admin-login',
  imports: [ReactiveFormsModule, RouterLink, NgOptimizedImage],
  templateUrl: './admin-login.component.html'
})
export class AdminLoginComponent {
  router = inject(Router);
  authService = inject(AuthService);
  formBuilder = inject(FormBuilder);
  
  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  message = signal<string>('');

  ngOnInit(): void {
    if (this.authService.isLogged()) {
      this.router.navigate(['/admin']);
    }
  }

  /**
   * @description
   * Inicia sesión como administrador
   */
  login() {
    if (this.form.valid) {

      this.message.set('¡Sesión iniciada con exito!');

      setTimeout(() => {
        this.authService.login(this.form.value.email!, undefined, true);
      }, 1000);
    }
  }
}
