import { InjectionToken } from '@angular/core';

/**
 * And injection token that provides the default `300ms`
 * value for the loader's wait time.
 */
export const LOADER_WAIT_TIME = new InjectionToken(
  'The default wait time for screen loader',
  { providedIn: 'root', factory: () => 300 }
);
