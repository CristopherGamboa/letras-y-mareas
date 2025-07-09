import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CardIcon } from '@core/enums/card-icon';
import { Card } from '@core/interfaces/card';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

/**
 * @description 
 * Servicio de eventos
 */
@Injectable({
  providedIn: 'root'
})
export class EventService {
  http = inject(HttpClient);
  API_URL = environment.API_URL;

  // events: Card[] = [
  //   {
  //     description: 'Concurso de microcuentos',
  //     icon: CardIcon.Instagram,
  //     image: '/img/events/afiche-concurso-microcuentos.webp',
  //     url: 'https://www.instagram.com/p/DKiC5S0vCPo'
  //   },
  //   {
  //     description: 'Taller "Aún Recordamos"',
  //     icon: CardIcon.Instagram,
  //     image: '/img/events/afiche-taller-aun-recordamos.jpg',
  //     url: 'https://www.instagram.com/p/DJl-paeRn4s'
  //   },
  //   {
  //     description: 'Concurso libro (in)felicidad',
  //     icon: CardIcon.Instagram,
  //     image: '/img/events/afiche-concurso-infelicidad.jpg',
  //     url: 'https://www.instagram.com/p/DKStLUkPgop'
  //   },
  //   {
  //     description: 'Encuentro autores locales',
  //     icon: CardIcon.Instagram,
  //     image: '/img/events/afiche-autores-locales.jpg',
  //     url: 'https://www.instagram.com/p/DIuH5_Wv8_p'
  //   },
  //   {
  //     description: 'Concurso gana un libro',
  //     icon: CardIcon.Instagram,
  //     image: '/img/events/afiche-concurso-libros.jpg',
  //     url: 'https://www.instagram.com/p/DIfPRwjxUdD'
  //   }
  // ];

  /**
   * @description 
   * Devuelve un observable con la lista de cartas de eventos desde un archivo JSON en GitHub Pages
   * 
   * @returns {Observable<Card[]>} Observable con la lista de cartas de eventos
   */
  getEventsCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.API_URL}/event-cards.json`);
  }
}
