import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Card } from '@core/interfaces/card';
import { InstagramComponent } from "../svgs/instagram/instagram.component";
import { PenToSquareComponent } from "../svgs/pen-to-square/pen-to-square.component";

@Component({
  selector: 'app-card',
  imports: [NgOptimizedImage, RouterLink, InstagramComponent, PenToSquareComponent],
  templateUrl: './card.component.html'
})
export class CardComponent {
  card = input.required<Card>()
}
