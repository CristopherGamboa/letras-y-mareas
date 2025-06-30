import { Component, inject } from '@angular/core';
import { SectionTitleComponent } from "../../shared/components/section-title/section-title.component";
import { CardsListComponent } from "../../shared/components/cards-list/cards-list.component";
import { EventService } from '@core/services/event.service';

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

  events = this.eventService.getEventsCards();
}
