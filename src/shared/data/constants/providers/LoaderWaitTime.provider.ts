import { LOADER_WAIT_TIME } from '@constants/injection-tokens';
import { Provider } from '@angular/core';

export const AppLoaderWaitTime: Provider = {
  provide: LOADER_WAIT_TIME,
  useValue: 300,
};
