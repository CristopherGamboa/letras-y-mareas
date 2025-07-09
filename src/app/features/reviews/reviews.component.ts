import { Component, computed, inject } from '@angular/core';
import { SectionTitleComponent } from "../../shared/components/section-title/section-title.component";
import { CardsListComponent } from "../../shared/components/cards-list/cards-list.component";
import { ReviewService } from '@core/services/review.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { Card } from '@core/interfaces/card';

/**
 * @description
 * Componente de página de reseñas
 */
@Component({
  selector: 'app-reviews',
  imports: [SectionTitleComponent, CardsListComponent],
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent {
  reviewService = inject(ReviewService)

  reviewsResource = rxResource({
    loader: () => this.reviewService.getReviewCards(),
    defaultValue: [] as Card[],
  })
  reviews = computed(() => this.reviewsResource.value());
}
