import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { responseErrorInterceptor } from '@interceptors';
import { provideClientHydration } from '@angular/platform-browser';
import { provideImageKitLoader } from '@angular/common';
import { environment } from '@environments/environment';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    provideHttpClient(
      withFetch(),
      withInterceptors([responseErrorInterceptor])
    ),
    provideImageKitLoader(environment.cdn.imageKit),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    ]),
  ],
};
