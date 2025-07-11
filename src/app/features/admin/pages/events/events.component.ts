import { NgOptimizedImage } from '@angular/common';
import { Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';
import { Card } from '@core/interfaces/card';
import { EventService } from '@core/services/event.service';
import { EventFormComponent } from "./event-form/event-form.component";
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { rxResource } from '@angular/core/rxjs-interop';

/**
 * @description
 * Componente mantenedor de eventos
 */
@Component({
  selector: 'app-events',
  imports: [NgOptimizedImage, DialogModule],
  templateUrl: './events.component.html'
})
export class EventsComponent {
  eventService = inject(EventService);
  dialog = inject(Dialog);

  eventFormDialog = viewChild.required<ElementRef<HTMLDialogElement>>('eventForm');

  eventsResource = rxResource({
    loader: () => this.eventService.getEventsCards(),
    defaultValue: [] as Card[],
  });
  events = computed(() => this.eventsResource.value());
  
  selectedEvent = signal<Card | null>(null);

  /**
   * @description
   * Abre el formulario de eventos
   * @param {Card | null} event - Evento a editar
   */
  openForm(event: Card | null) {
    this.selectedEvent.set(event);

    this.dialog.open(EventFormComponent, {
      minWidth: '300px',
      data: {
        event: this.selectedEvent(),
      },
    });
  }
}
