import { Component, input, signal } from '@angular/core';
import { StarComponent } from "../svgs/star/star.component";

@Component({
  selector: 'app-stars-rating',
  imports: [StarComponent],
  templateUrl: './stars-rating.component.html'
})
export class StarsRatingComponent {
  rating = input.required<number>();

  stars = signal(Array.from({ length: 5 }));
}
