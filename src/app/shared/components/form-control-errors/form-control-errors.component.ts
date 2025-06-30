import { KeyValuePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-form-control-errors',
  standalone: true,
  imports: [ReactiveFormsModule, KeyValuePipe],
  templateUrl: './form-control-errors.component.html'
})
export class FormControlErrorsComponent {  
  controlErrors = input.required<ValidationErrors | null | undefined>();
  isControlTouched = input.required<boolean | undefined>();
  hasErrors = computed(() => {
    if (this.isControlTouched() != null && this.isControlTouched() 
      && this.controlErrors() != null && this.controlErrors())
      return true;
    else
      return false;
  });
  
  getErrorMessage(error: string): string {
    let messages: { [key: string]: string } = {
      'required': 'Este campo es requerido',
      'minlength': 'El valor ingresado es demasiado corto',
      'maxlength': 'El valor ingresado es demasiado largo',
      'pattern': 'El valor no coincide con el patrón requerido',
      'email': 'El valor no coincide con un correo electrónico válido',
      'min': 'El valor ingresado es menor que el mínimo permitido',
      'max': 'El valor ingresado es mayor que el máximo permitido',
      'filetype': 'El archivo no tiene la extensión requerida',
      'filesize': 'El archivo es demasiado grande',
      'dateafter': 'La fecha final debe ser posterior a la inicial',
      'dateaftertoday': 'La fecha debe ser posterior a la actual',
      'passwordmismatch': 'Las contraseñas no coinciden',
      'minlengthpassword': 'La contraseña debe tener al menos 6 caracteres',
      'requiredpassword': 'La contraseña es requerida',
      'uppercasepassword': 'La contraseña debe contener al menos una mayúscula',
      'lowercasepassword': 'La contraseña debe contener al menos una minúscula',
      'digitpassword': 'La contraseña debe contener al menos un número',
      'nonalphanumericpassword': 'La contraseña debe contener al menos un caracter especial',
      'ageunder13': 'Debes ser mayor a 13 años'
    };

    return messages[error] || 'Error desconocido';
  }
}


