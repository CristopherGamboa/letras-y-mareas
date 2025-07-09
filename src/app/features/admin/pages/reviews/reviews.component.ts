import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { NgOptimizedImage } from '@angular/common';
import { Component, computed, inject, signal, viewChild } from '@angular/core';
import { EventService } from '@core/services/event.service';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ReviewService } from '@core/services/review.service';
import { Review } from '@core/interfaces/review';
import { rxResource } from '@angular/core/rxjs-interop';

/**
 * @description
 * Componente mantenedor de eventos
 */
@Component({
  selector: 'app-reviews',
  imports: [NgOptimizedImage, DialogModule],
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent {
  reviewService = inject(ReviewService);
  dialog = inject(Dialog);

  reviewsResource = rxResource({
    loader: () => this.reviewService.getReviews(),
    defaultValue: [] as Review[],
  })
  reviews = computed(() => this.reviewsResource.value());
  
  selectedReview = signal<Review | null>(null);

  /**
   * @description
   * Abre el formulario de eventos
   * @param {Review | null} review - Evento a editar
   */
  openForm(review: Review | null) {
    this.selectedReview.set(review);

    this.dialog.open(ReviewFormComponent, {
      minWidth: '500px',
      data: {
        review: this.selectedReview(),
      },
    });
  }
}
