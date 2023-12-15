import { UnaryFunction, Observable, iif, timer, map, pipe, filter, switchMap, skip } from "rxjs";
import { NavigationStart, NavigationEnd } from "@angular/router";
import { RouterEvent } from "@models/application/utilities";

export class RouterHelper {
  /**
   * Transforms router events to emit the `boolean` loading state
   * after a `waitTime` number of milliseconds. 
   * @param waitTime The time that the operator should wait before emitting `true`.
   * @param transitionOutTime The time that the operator should wait before emitting `false`. Default to `100ms`.
   */
  toLoading(waitTime: number, transitionOutTime: number = 100): UnaryFunction<Observable<RouterEvent>, Observable<boolean>> {
    const _onlyNavStartOrEnd = (event: RouterEvent): event is NavigationStart | NavigationEnd => {
      return event instanceof NavigationStart || event instanceof NavigationEnd
    }

    const _toLoaderState = (event: NavigationStart | NavigationEnd): Observable<boolean> => {
      return iif(
        () => event instanceof NavigationStart,
        timer(waitTime).pipe(map(() => true)),
        timer(transitionOutTime).pipe(map(() => false))
      );
    }

    return pipe(
      filter(_onlyNavStartOrEnd),
      // Skips the first router event cycle to remove
      // late loading screen on initial load.
      skip(2),
      switchMap(_toLoaderState)
    );
  }
}
