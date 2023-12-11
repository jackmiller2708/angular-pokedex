import { InjectionToken } from "@angular/core";

/**
 * The injection token that represents the loader wait time,
 * whose value can be provided by the `AppLoaderWaitTime` provider.
 */
export const LOADER_WAIT_TIME = new InjectionToken('The default wait time for screen loader')