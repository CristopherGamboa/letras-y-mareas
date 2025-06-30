import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * @description
 * Valida que las contraseñas coincidan
 * 
 * @param {AbstractControl} control 
 * @returns {ValidationErrors | null}
 */
export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const passwordConfirmation = control.get('passwordConfirmation')?.value;

  if (password !== passwordConfirmation) {
    return { passwordmismatch: true };
  }

  return null;
};