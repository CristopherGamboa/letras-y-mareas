import { TestBed } from '@angular/core/testing';
import { EventService } from './event.service';
import { environment } from '@environments/environment';
import { provideHttpClient } from '@angular/common/http';

describe('EventService', () => {
  let service: EventService;
  const API_URL = environment.API_URL;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EventService,
        provideHttpClient()
      ]
    });

    service = TestBed.inject(EventService);
  });

  it('debe crearse el servicio', () => {
    expect(service).toBeTruthy();
  });

  it('getEventsCards debe retornar un observable', () => {
    const result = service.getEventsCards();
    expect(result.subscribe).toBeDefined(); 
  });

  it('getEventsCards debe emitir datos desde el archivo real', (done) => {
    service.getEventsCards().subscribe(cards => {
      expect(cards).toBeDefined();
      expect(Array.isArray(cards)).toBeTrue();
      done(); 
    });
  });
});
