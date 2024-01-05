import { HeaderComponent, LinkComponent, PortalComponent, SearchInputComponent, ThemeSwitcherComponent } from '@components/atoms';
import { HeaderBannerConfig as THeaderBannerConfig } from '@components/molecules/header-banner/interfaces';
import { HelperService, ThemeService } from '@services/application';
import { AppTheme, IObserverSafe } from '@interfaces/application';
import { HeaderBannerComponent } from '@components/molecules';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderBannerConfig } from '@components/molecules/header-banner/models';
import { Component, Inject } from '@angular/core';
import { LOADER_WAIT_TIME } from '@constants/injection-tokens';
import { LocalStorageKey } from '@constants/enums';
import { AppStateService } from './services';
import { CommonModule } from '@angular/common';
import { Animation } from '@directives/noop-animator/constants';
import { Subject } from 'rxjs';

const imports = [
  CommonModule,
  RouterOutlet,
  HeaderComponent,
  SearchInputComponent,
  LinkComponent,
  PortalComponent,
  HeaderBannerComponent,
  ThemeSwitcherComponent,
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
  private _headerBannerConfig: THeaderBannerConfig;
  private _isLoading: boolean;

  get isLoading(): boolean {
    return this._isLoading;
  }

  get headerBannerConfig(): THeaderBannerConfig {
    return this._headerBannerConfig;
  }

  get version(): string {
    return this._appStateService.appVersion;
  }

  constructor(
    // Tokens
    @Inject(LOADER_WAIT_TIME)
    private readonly _loaderWaitTime: number,

    // Services
    private readonly _appStateService: AppStateService,
    private readonly _helperService: HelperService,
    private readonly _themeService: ThemeService,
    private readonly _router: Router
  ) {
    this._ngDestroy$ = new Subject();
    this._isLoading = false;
    this._headerBannerConfig = HeaderBannerConfig({
      visible: true, 
      animation: Animation.CLOUD,
      contentClass: ['text-white'],
      content: "Hello World!!"
    });
  }

  ngOnInit(): void {
    this._setTheme();
    this._initData();
  }

  ngOnDestroy(): void {
    this._ngDestroy$.next();
  }

  private _setTheme(): void {
    const _isDarkMode = this._isDarkMode();

    if (_isDarkMode !== undefined) {
      this._themeService.setTheme(_isDarkMode ? 'dark' : 'light');
    }
  }

  private _isDarkMode(): boolean | undefined {
    return this._appStateService.isOnClient
      ? localStorage[LocalStorageKey.APP_THEME] === 'dark' ||
          (!(LocalStorageKey.APP_THEME in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
      : undefined;
  }

  private _onLoadingChange(value: boolean): void {
    this._appStateService.setLoading(value);
  }

  private _onLoadingStateChange(value: boolean): void {
    this._isLoading = value;
  }

  private _onSelectedTheme(theme: AppTheme): void {
    if (!this._appStateService.isOnClient) {
      return;
    }

    const prevTheme: AppTheme = theme === 'dark' ? 'light' : 'dark';

    document.documentElement.classList.remove(prevTheme);
    document.documentElement.classList.add(theme);
    
    localStorage.setItem(LocalStorageKey.APP_THEME, theme);
  }

  private _initData(): void {
    const { rxjs: { observableRegistrarFactory }, router: { toLoading } } = this._helperService;
    const { isLoading$: loadingState$ } = this._appStateService;
    const { selectedTheme$ } = this._themeService;
    const { events } = this._router;

    const register = observableRegistrarFactory.call(this, this._ngDestroy$);
    const eventDrivenLoading$ = events.pipe(toLoading(this._loaderWaitTime));

    register(eventDrivenLoading$, this._onLoadingChange);
    register(loadingState$, this._onLoadingStateChange);
    register(selectedTheme$, this._onSelectedTheme);
  }
}
