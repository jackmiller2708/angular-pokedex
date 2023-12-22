import { HeaderComponent, LinkComponent, PortalComponent, SearchInputComponent } from '@components/atoms';
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
  PortalComponent,
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports,
  providers: [AppStateService],
  host: { class: 'relative w-screen h-screen flex flex-col overflow-hidden' },
  standalone: true,
})
export class AppComponent implements IObserverSafe {
  private readonly _ngDestroy$: Subject<void>;
  private _isLoading: boolean;

  get isLoading(): boolean {
    return this._isLoading;
  }

  constructor(
    // Tokens
    @Inject(LOADER_WAIT_TIME)
    private readonly _loaderWaitTime: number,

    // Services
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

  private _onLoadingChange(value: boolean): void {
    this._appStateService.setLoading(value);
  }

  private _onLoadingStateChange(value: boolean): void {
    this._isLoading = value;
  }

  private _initData(): void {
    const { rxjs: { observableRegistrarFactory }, router: { toLoading } } = this._helperService;
    const { isLoading$: loadingState$ } = this._appStateService;
    const { events } = this._router;

    const register = observableRegistrarFactory.call(this, this._ngDestroy$);
    const eventDrivenLoading$ = events.pipe(toLoading(this._loaderWaitTime));

    register(eventDrivenLoading$, this._onLoadingChange);
    register(loadingState$, this._onLoadingStateChange);
  }
}
