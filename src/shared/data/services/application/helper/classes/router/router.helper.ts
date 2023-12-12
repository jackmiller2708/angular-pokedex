import { UnaryFunction, Observable, iif, timer, map, pipe, filter, switchMap } from "rxjs";
import { NavigationStart, NavigationEnd } from "@angular/router";
import { RouterEvent } from "@models/application/utilities";

export class RouterHelper {
  /**
   * Transforms router events to emit the loading state
   * after a `waitTime` number of milliseconds
   */
  toLoading(waitTime: number): UnaryFunction<Observable<RouterEvent>, Observable<boolean>> {
    const _onlyNavStartOrEnd = (event: RouterEvent): event is NavigationStart | NavigationEnd => {
      return event instanceof NavigationStart || event instanceof NavigationEnd
    }

    const _toLoaderState = (event: NavigationStart | NavigationEnd): Observable<boolean> => {
      return iif(
        () => event instanceof NavigationStart,
        timer(waitTime).pipe(map(() => true)),
        timer(100).pipe(map(() => false))
      );
    }

    return pipe(filter(_onlyNavStartOrEnd), switchMap(_toLoaderState));
  }
}
