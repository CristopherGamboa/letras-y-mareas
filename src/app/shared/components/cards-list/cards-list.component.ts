import { Component, input } from '@angular/core';
import { Card } from '@core/interfaces/card';
import { CardComponent } from "../card/card.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cards-list',
  imports: [CardComponent],
  templateUrl: './cards-list.component.html'
})
export class CardsListComponent {
  cards = input.required<Card[]>();
  grid = input<string>('grid-cols-1 md:grid-cols-2 lg:grid-cols-3');
}
