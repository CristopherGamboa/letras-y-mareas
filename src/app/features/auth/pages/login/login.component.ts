import { Component, inject, input, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControlErrorsComponent } from "../../../../shared/components/form-control-errors/form-control-errors.component";

/**
 * @description
 * Componente para iniciar sesión
 */
@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
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
      this.router.navigate(['auth/profile']);
    }
  }

  /**
   * @description
   * Inicia sesión
   */
  login() {
    if (this.form.valid) {

      this.message.set('¡Sesión iniciada con exito!');

      setTimeout(() => {
        this.authService.login(this.form.value.email!);
      }, 1000);
    }
  }
}
