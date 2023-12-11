import { HeaderComponent, LinkComponent, SearchInputComponent } from '@components/atoms';
import { Router, RouterOutlet } from '@angular/router';
import { Component, Inject } from '@angular/core';
import { LOADER_WAIT_TIME } from '@constants/injection-tokens';
import { AppStateService } from './services';
import { IObserverSafe } from '@interfaces/application';
import { HelperService } from '@services/application';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

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
    @Inject(LOADER_WAIT_TIME)
    private readonly _loaderWaitTime: number,
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
    const { rxjs: { observableRegistrarFactory }, router: { toLoaderState } } = this._helperService;
    const { isLoading$ } = this._appStateService;
    const { events } = this._router;

    const register = observableRegistrarFactory.call(this, this._ngDestroy$);
    const eventDrivenLoaderState$ = events.pipe(toLoaderState(this._loaderWaitTime));

    register(eventDrivenLoaderState$, this._onLoaderState);
    register(isLoading$, this._onLoadingStateChange);
  }

  private _onLoadingStateChange(value: boolean): void {
    this._isLoading = value;
  }

  private _onLoaderState(value: boolean) {
    this._appStateService.setLoading(value);
  }
}
