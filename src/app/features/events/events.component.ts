import { Component, computed, inject } from '@angular/core';
import { SectionTitleComponent } from "../../shared/components/section-title/section-title.component";
import { CardsListComponent } from "../../shared/components/cards-list/cards-list.component";
import { EventService } from '@core/services/event.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { Card } from '@core/interfaces/card';

/**
 * @description
 * Componente de página de eventos
 */
@Component({
  selector: 'app-events',
  imports: [SectionTitleComponent, CardsListComponent],
  templateUrl: './events.component.html'
})
export class EventsComponent {
  eventService = inject(EventService);

  eventsResource = rxResource({
    loader: () => this.eventService.getEventsCards(),
    defaultValue: [] as Card[],
  });
  events = computed(() => this.eventsResource.value());
}
