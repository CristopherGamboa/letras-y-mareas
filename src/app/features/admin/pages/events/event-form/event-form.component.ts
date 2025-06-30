import { Component, inject, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Card } from '@core/interfaces/card';
import { FormControlErrorsComponent } from "../../../../../shared/components/form-control-errors/form-control-errors.component";
import { Dialog, DIALOG_DATA } from '@angular/cdk/dialog';


/**
 * @description 
 * Componente para crear o editar un evento
 * 
 * @usageNotes
 * El componente está pensado como un formulario tipo modal que permite crear o editar un evento. Está 
 * pensado para llamarse con el CDK dialog de Angular CDK.  
 */
@Component({
  selector: 'app-event-form',
  imports: [ReactiveFormsModule, FormControlErrorsComponent],
  templateUrl: './event-form.component.html'
})
export class EventFormComponent {
  data = inject(DIALOG_DATA);
  dialog = inject(Dialog);
  formBuilder = inject(FormBuilder);

  event = signal<Card | null>(this.data.event);
  message = signal<string>('');

  form = this.formBuilder.group({
    image: ['', [Validators.required]],
    url: [this.event()?.url || '', [Validators.required, Validators.pattern(/^(https?:\/\/)?(www\.)?instagram\.com\/[A-Za-z0-9._~:/?#@!$&'()*+,;=%-]+\/?$/)]]
  });

  /**
   * @description
   * Crea un evento
   */
  createEvent() {
    if (this.form.invalid)
      return;

    this.message.set('¡Evento creado con exito!');

    setTimeout(() => {
      this.dialog.closeAll();
    }, 1000);
  }
}
