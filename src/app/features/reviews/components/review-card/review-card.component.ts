import { Component, computed, input } from '@angular/core';
import { Review } from '@core/interfaces/review';
import { StarComponent } from "../../../../shared/components/svgs/star/star.component";
import { NgOptimizedImage } from '@angular/common';
import { StarsRatingComponent } from "../../../../shared/components/stars-rating/stars-rating.component";

@Component({
  selector: 'app-review-card',
  imports: [NgOptimizedImage, StarsRatingComponent],
  templateUrl: './review-card.component.html'
})
export class ReviewCardComponent {
  review = input.required<Review>();
  book = computed(() => this.review().book);
  rating = computed(() => this.review().rating);
}
