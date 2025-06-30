import { Injectable } from '@angular/core';
import { CardIcon } from '@core/enums/card-icon';
import { Card } from '@core/interfaces/card';

/**
 * @description 
 * Servicio de eventos
 */
@Injectable({
  providedIn: 'root'
})
export class EventService {
  events: Card[] = [
    {
      description: 'Concurso de microcuentos',
      icon: CardIcon.Instagram,
      image: '/img/events/afiche-concurso-microcuentos.webp',
      url: 'https://www.instagram.com/p/DKiC5S0vCPo'
    },
    {
      description: 'Taller "Aún Recordamos"',
      icon: CardIcon.Instagram,
      image: '/img/events/afiche-taller-aun-recordamos.jpg',
      url: 'https://www.instagram.com/p/DJl-paeRn4s'
    },
    {
      description: 'Concurso libro (in)felicidad',
      icon: CardIcon.Instagram,
      image: '/img/events/afiche-concurso-infelicidad.jpg',
      url: 'https://www.instagram.com/p/DKStLUkPgop'
    },
    {
      description: 'Encuentro autores locales',
      icon: CardIcon.Instagram,
      image: '/img/events/afiche-autores-locales.jpg',
      url: 'https://www.instagram.com/p/DIuH5_Wv8_p'
    },
    {
      description: 'Concurso gana un libro',
      icon: CardIcon.Instagram,
      image: '/img/events/afiche-concurso-libros.jpg',
      url: 'https://www.instagram.com/p/DIfPRwjxUdD'
    }
  ];

  /**
   * @description 
   * Devuelve una lista de cartas de eventos
   * 
   * @returns {Card[]} Lista de cartas de eventos
   */
  getEventsCards(): Card[] {
    return this.events;
  }
}
