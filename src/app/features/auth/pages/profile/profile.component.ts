import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth.service';
import { FormControlErrorsComponent } from "../../../../shared/components/form-control-errors/form-control-errors.component";
import { Router } from '@angular/router';

/**
 * @description
 * Componente para editar la información de un usuario
 */
@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule, FormControlErrorsComponent],
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  authService = inject(AuthService);
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  session = this.authService.getSession();
  message = signal<string>('');

  form = this.formBuilder.group({
    name: [this.session?.name, [Validators.required]],
    email: [this.session?.email, [Validators.required, Validators.email]]
  });

  ngOnInit(): void {
    if (!this.authService.isLogged()) 
      this.router.navigate(['auth/login']);
  }

  /**
   * @description
   * Actualiza la información del usuario
   */
  update() {
    if (this.form.invalid) 
      return;

    this.message.set('¡Información modificada con exito!');
    this.authService.login(this.form.value.email!, this.form.value.name!);
  }
}
