import { mergeApplicationConfig, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { responseErrorInterceptor } from '@interceptors';
import { provideServerRendering } from '@angular/platform-server';
import { provideImageKitLoader } from '@angular/common';
import { environment } from '@environments/environment';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
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

export const config = mergeApplicationConfig(appConfig, serverConfig);
