import { LOADER_WAIT_TIME } from '@constants/injection-tokens';
import { Provider } from '@angular/core';

/**
 * Provides the default loader wait time value,
 * which can be injected using the `LOADER_WAIT_TIME` token.
 * 
 * The default value is `300ms`
 */
export const AppLoaderWaitTime: Provider = {
  provide: LOADER_WAIT_TIME,
  useValue: 300,
};
