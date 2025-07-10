import { TestBed } from '@angular/core/testing';
import { environment } from '@environments/environment';
import { provideHttpClient } from '@angular/common/http';
import { ReviewService } from './review.service';

describe('ReviewService', () => {
  let service: ReviewService;
  const API_URL = environment.API_URL;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ReviewService,
        provideHttpClient()
      ]
    });

    service = TestBed.inject(ReviewService);
  });

  it('debe crearse el servicio', () => {
    expect(service).toBeTruthy();
  });

  it('getReviews debe retornar un observable', () => {
    const result = service.getReviews();
    expect(result.subscribe).toBeDefined(); 
  });

  it('getReviews debe emitir datos desde el archivo real', (done) => {
    service.getReviews().subscribe(reviews => {
      expect(reviews).toBeDefined();
      expect(Array.isArray(reviews)).toBeTrue();
      done(); 
    });
  });
});
