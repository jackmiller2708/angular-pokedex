import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideServerRendering } from '@angular/platform-server';
import { provideImageKitLoader } from '@angular/common';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideHttpClient(withFetch()),
    provideImageKitLoader('https://ik.imagekit.io/nj123u5yv/'),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
