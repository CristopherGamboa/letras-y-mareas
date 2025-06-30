import { Component, inject } from '@angular/core';
import { SectionTitleComponent } from "../../shared/components/section-title/section-title.component";
import { CardsListComponent } from "../../shared/components/cards-list/cards-list.component";
import { ReviewService } from '@core/services/review.service';

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

  reviews = this.reviewService.getReviewCards();
}
