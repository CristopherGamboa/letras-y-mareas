import { Component, computed, inject, input, signal } from '@angular/core';
import { Review } from '@core/interfaces/review';
import { ReviewCardComponent } from "../../components/review-card/review-card.component";
import { ReviewService } from '@core/services/review.service';
import { CommentsComponent } from "../../../../shared/components/comments/comments.component";
import { rxResource } from '@angular/core/rxjs-interop';

/**
 * @description
 * Componente de detalle de reseña
 */
@Component({
  selector: 'app-review-detail',
  imports: [ReviewCardComponent, CommentsComponent],
  templateUrl: './review-detail.component.html'
})
export class ReviewDetailComponent {
  reviewService = inject(ReviewService);

  id = input.required<string>()
  
  reviewResource = rxResource({
    request: () => this.id,
    loader: () => this.reviewService.getReview(this.id())
  })
  review = computed(() => this.reviewResource.value());
}
