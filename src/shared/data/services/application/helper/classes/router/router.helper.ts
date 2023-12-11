import { UnaryFunction, Observable, iif, timer, map, of, pipe, filter, switchMap } from "rxjs";
import { NavigationStart, NavigationEnd } from "@angular/router";
import { RouterEvent } from "@models/application/utilities";

export class RouterHelper {
  /**
   * Transforms router events to emit the loader state
   * after a `waitTime` number of milliseconds
   */
  toLoaderState(waitTime: number): UnaryFunction<Observable<RouterEvent>, Observable<boolean>> {
    const _onlyNavStartOrEnd = (event: RouterEvent): event is NavigationStart | NavigationEnd => {
      return event instanceof NavigationStart || event instanceof NavigationEnd
    }

    const _toLoaderState = (event: NavigationStart | NavigationEnd): Observable<boolean> => {
      return iif(
        () => event instanceof NavigationStart,
        timer(waitTime).pipe(map(() => true)),
        of(false)
      );
    }

    return pipe(filter(_onlyNavStartOrEnd), switchMap(_toLoaderState));
  }
}
