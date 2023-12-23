import { UnaryFunction, Observable, iif, timer, map, pipe, filter, switchMap, skip } from "rxjs";
import { NavigationStart, NavigationEnd } from "@angular/router";
import { RouterEvent } from "@models/application/utilities";
import { IPathConfig } from "./interfaces";
import { Map } from "immutable";

export class RouterHelper {
  getAltPathnameMap(config: IPathConfig, mappers: Record<string, (value: string) => string>) {
    const { path, url, params } = config;

    const fullPath = '/' + path;
    const entries = Object.entries(params);

    let aliases = Map<string, string>();
    let constructedPath = '';

    for (const [key, value] of entries) {
      const slicedPath = (
        constructedPath.length ? constructedPath : fullPath
      ).slice(0, fullPath.indexOf(`:${key}`));
      
      const updatedPath = `${slicedPath === '/' ? '' : slicedPath}/${value}`;
      const urlSegmentIdx = url.indexOf(updatedPath);

      aliases = aliases.set(
        url.slice(0, urlSegmentIdx + updatedPath.length),
        key in mappers ? mappers[key](value) : value
      );

      constructedPath = updatedPath;
    }

    return aliases;
  }

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
