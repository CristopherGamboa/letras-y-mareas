import { Component, computed, inject } from '@angular/core';
import { SectionTitleComponent } from "../../shared/components/section-title/section-title.component";
import { CardsListComponent } from "../../shared/components/cards-list/cards-list.component";
import { EventService } from '@core/services/event.service';
import { ReviewService } from '@core/services/review.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { Card } from '@core/interfaces/card';

/**
 * @description
 * Componente de página de inicio
 */
@Component({
  selector: 'app-home',
  imports: [SectionTitleComponent, CardsListComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  eventService = inject(EventService);
  reviewService = inject(ReviewService);

  eventsResource = rxResource({
    loader: () => this.eventService.getEventsCards(),
    defaultValue: [] as Card[],
  });
  events = computed(() => this.eventsResource.value().slice(0, 3));

  reviewsResource = rxResource({
    loader: () => this.reviewService.getReviewCards(),
    defaultValue: [] as Card[],
  })
  reviews = computed(() => this.reviewsResource.value().slice(0, 3));
}
