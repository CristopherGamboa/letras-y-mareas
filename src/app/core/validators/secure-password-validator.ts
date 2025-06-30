import {
    AbstractControl,
    ValidationErrors,
  } from '@angular/forms';
  
  /**
   * @description
   * Valida la seguridad de la contraseña
   * 
   * @param {AbstractControl} control
   * @returns {ValidationErrors | null} 
   */
  export function securePasswordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.value as string;
    let errors: ValidationErrors = {};
    
    if (password.length < 6) {
      errors['minlengthpassword'] = true;
      return errors;
    }
  
    if (!/[A-Z]/.test(password)) {
      errors['uppercasepassword'] = true;
    }
  
    if (!/[a-z]/.test(password)) {
      errors['lowercasepassword'] = true;
    }
  
    if (!/[0-9]/.test(password)) {
      errors['digitpassword'] = true;
    }
  
    if (!/[^a-zA-Z0-9]/.test(password)) {
      errors['nonalphanumericpassword'] = true;
    }

    if (errors)
      return errors;
  
    return null;
  }
  