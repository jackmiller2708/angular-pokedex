import { Observable, Subject, UnaryFunction, filter, iif, map, of, pipe, switchMap, timer } from 'rxjs';
import { HeaderComponent, LinkComponent, SearchInputComponent } from '@components/atoms';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { AppStateService } from './services';
import { IObserverSafe } from '@interfaces/application';
import { HelperService } from '@services/application';
import { CommonModule } from '@angular/common';
import { RouterEvent } from '@models/application/utilities';
import { Component } from '@angular/core';

const imports = [
  CommonModule,
  RouterOutlet,
  HeaderComponent,
  SearchInputComponent,
  LinkComponent,
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports,
  providers: [AppStateService],
  host: {
    class: 'relative w-screen h-screen flex flex-col overflow-hidden',
  },
  standalone: true,
})
export class AppComponent implements IObserverSafe {
  private readonly _ngDestroy$: Subject<void>;
  private _isLoading: boolean;

  get isLoading(): boolean {
    return this._isLoading;
  }

  constructor(
    private readonly _appStateService: AppStateService,
    private readonly _helperService: HelperService,
    private readonly _router: Router
  ) {
    this._ngDestroy$ = new Subject();
    this._isLoading = false;
  }

  ngOnInit(): void {
    this._initData();
  }

  ngOnDestroy(): void {
    this._ngDestroy$.next();
  }

  private _initData(): void {
    const { observableRegistrarFactory } = this._helperService.rxjs;
    const { isLoading$ } = this._appStateService;
    const { events } = this._router;

    const register = observableRegistrarFactory.call(this, this._ngDestroy$);
    const event$ = events.pipe(this._toLoaderState());

    register(event$, this._onLoaderState);
    register(isLoading$, this._onLoadingStateChange);
  }

  private _onLoadingStateChange(value: boolean): void {
    this._isLoading = value;
  }

  private _onLoaderState(value: boolean) {
    this._appStateService.setLoading(value);
  }

  private _toLoaderState(): UnaryFunction<Observable<RouterEvent>, Observable<boolean>> {
    return pipe(
      filter(
        (event: RouterEvent): event is NavigationStart | NavigationEnd =>
          event instanceof NavigationStart || event instanceof NavigationEnd
      ),
      switchMap((event: NavigationStart | NavigationEnd): Observable<boolean> =>
        iif(
          () => event instanceof NavigationStart,
          timer(1000).pipe(map(() => true)),
          of(false)
        )
      )
    );
  }
}
