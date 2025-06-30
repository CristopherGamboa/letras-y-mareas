import { Component, inject } from '@angular/core';
import { SectionTitleComponent } from "../../shared/components/section-title/section-title.component";
import { CardsListComponent } from "../../shared/components/cards-list/cards-list.component";
import { EventService } from '@core/services/event.service';
import { ReviewService } from '@core/services/review.service';

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

  events = this.eventService.getEventsCards().slice(0, 3);
  reviews = this.reviewService.getReviewCards();
}
