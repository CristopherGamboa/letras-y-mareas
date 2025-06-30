import { ApplicationConfig, ChangeDetectionStrategy, Component, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    {provide: Component, useValue: { changeDetection: ChangeDetectionStrategy.OnPush}},
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withFetch())
  ]
};
