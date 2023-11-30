import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(), provideHttpClient(withFetch())],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
