import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CardIcon } from '@core/enums/card-icon';
import { Card } from '@core/interfaces/card';
import { Review } from '@core/interfaces/review';
import { environment } from '@environments/environment';
import { map, Observable } from 'rxjs';

/**
 * @description
 * Servicio de reseñas
 */
@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  http = inject(HttpClient);
  API_URL = environment.API_URL;

  // reviews: Review[] = [
  //   {
  //     id: '1',
  //     book: {
  //       title: 'El lobo estepario',
  //       author: 'Herman Hesse',
  //       year: 1927,
  //       image: '/img/books/lobo-estepario.webp'
  //     },
  //     rating: 4,
  //     comment: '"El lobo estepario" es una novela que explora la dualidad del ser humano, la lucha interna entre su naturaleza salvaje y su deseo de integrarse en la sociedad. A través de Harry Haller, Hermann Hesse nos invita a reflexionar sobre la soledad, la alienación y la búsqueda de sentido en un mundo fragmentado.',
  //     comments: [
  //       {
  //         user: 'Juan Pérez',
  //         comment: 'Me encantó este libro, muy profundo y reflexivo.',
  //         date: new Date('2025-02-08')
  //       },
  //       {
  //         user: 'Maria González',
  //         comment: 'La manera en que Hesse describe la soledad me llegó mucho.',
  //         date: new Date('2025-02-02')
  //       }
  //     ]
  //   },
  //   {
  //     id: '2',
  //     book: {
  //       title: 'El Aleph',
  //       author: 'Jorge Luis Borges',
  //       year: 1949,
  //       image: '/img/books/el-aleph.webp'
  //     },
  //     rating: 5,
  //     comment: '"El Aleph" es un cuento que nos introduce a un punto en el espacio que contiene todos los puntos del universo simultáneamente. A través de la mirada del protagonista, Borges explora temas como el infinito, la memoria y la percepción de la realidad.',
  //     comments: [
  //       {
  //         user: 'Pedro Rodríguez',
  //         comment: 'Este cuento de Borges me fascinó, especialmente la idea del infinito en un solo punto.',
  //         date: new Date('2025-03-11')
  //       },
  //       {
  //         user: 'Ana Morales',
  //         comment: 'Borges logra que te pierdas en la complejidad de la memoria y el universo con este relato.',
  //         date: new Date('2025-02-20')
  //       }
  //     ]
  //   },
  //   {
  //     id: '3',
  //     book: {
  //       title: 'El extranjero',
  //       author: 'Albert Camus',
  //       year: 1942,
  //       image: '/img/books/el-extranjero.webp'
  //     },
  //     rating: 4,
  //     comment: '"El Extranjero" es una novela que aborda el absurdo de la existencia y la indiferencia del mundo hacia el ser humano, a través del personaje de Meursault, quien vive y acepta la realidad sin buscarle un sentido trascendental.',
  //     comments: [
  //       {
  //         user: 'Luis Rodríguez',
  //         comment: 'Me encantó este libro, muy profundo y reflexivo.',
  //         date: new Date('2025-04-10')
  //       },
  //       {
  //         user: 'Sara González',
  //         comment: 'La manera en que Camus describe la indiferencia hacia el mundo me llegó mucho.',
  //         date: new Date('2025-03-01')
  //       }
  //     ]
  //   },
  //   {
  //     id: '4',
  //     book: {
  //       title: 'La metamorfosis',
  //       author: 'Franz Kafka',
  //       year: 1915,
  //       image: '/img/books/la-metamorfosis.webp'
  //     },
  //     rating: 4,
  //     comment: '"La metamorfosis" es una poderosa alegoría sobre la alienación, la identidad y la deshumanización. A través de la historia de Gregor Samsa, quien despierta convertido en un insecto, Kafka expone las tensiones familiares, la incomunicación y el aislamiento que sufren quienes ya no encajan en los moldes sociales.',
  //     comments: [
  //       {
  //         user: 'Felipe Torres',
  //         comment: 'La transformación de Gregor me pareció perturbadora pero profundamente simbólica.',
  //         date: new Date('2025-05-10')
  //       },
  //       {
  //         user: 'Myriam Guerra',
  //         comment: 'La manera en que Kafka describe la deshumanización me llegó mucho.',
  //         date: new Date('2025-04-01')
  //       }
  //     ]
  //   }
  // ];

  // reviewCards: Card[] = [
  //   {
  //     description: 'El lobo estepario',
  //     icon: CardIcon.PenToSquare,
  //     image: '/img/books/lobo-estepario.webp',
  //     route: '/reviews/1',
  //   },
  //   {
  //     description: 'El Aleph',
  //     icon: CardIcon.PenToSquare,
  //     image: '/img/books/el-aleph.webp',
  //     route: '/reviews/2',
  //   },
  //   {
  //     description: 'El extranjero',
  //     icon: CardIcon.PenToSquare,
  //     image: '/img/books/el-extranjero.webp',
  //     route: '/reviews/3',
  //   },
  //   {
  //     description: 'La metamorfosis',
  //     icon: CardIcon.PenToSquare,
  //     image: '/img/books/la-metamorfosis.webp',
  //     route: '/reviews/4',
  //   }
  // ];

  /**
   * @description 
   * Devuelve un observable con la lista de reseñas
   * 
   * @returns {Observable<Review[]>} Observable con la lista de reseñas
   */
  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.API_URL}/reviews.json`);
  }

  /**
   * @description 
   * Devuelve un observable con la reseña por su id
   * 
   * @param {string} reviewId - id de la reseña
   * @returns {Observable<Review | undefined>} regresa un observable con la reseña o undefined si no la encuentra
   */
  getReview(reviewId: string): Observable<Review | undefined> {
    return this.http.get<Review[]>(`${this.API_URL}/reviews.json`)
    .pipe(map(reviews => reviews.find(review => review.id === reviewId)))
  }

  /**
   * @description 
   * Devuelve un observable con la lista de cartas de reseñas
   * 
   * @returns {Observable<Card[]>} Observable con la lista de cartas de reseñas
   */
  getReviewCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.API_URL}/review-cards.json`);
  }
}
