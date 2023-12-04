import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { responseErrorInterceptor } from '@interceptors';
import { provideClientHydration } from '@angular/platform-browser';
import { provideImageKitLoader } from '@angular/common';
import { ApplicationConfig } from '@angular/core';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    provideHttpClient(
      withFetch(),
      withInterceptors([responseErrorInterceptor])
    ),
    provideImageKitLoader('https://ik.imagekit.io/nj123u5yv/'),
  ],
};
