import { Observable, BehaviorSubject } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { DEFAULT_THEME } from '@constants/injection-tokens';
import { AppTheme } from '@interfaces/application';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly _selectedTheme: BehaviorSubject<AppTheme>;

  readonly selectedTheme$: Observable<AppTheme>;

  constructor(
    @Inject(DEFAULT_THEME)
    private readonly _defaultTheme: AppTheme
  ) {
    this._selectedTheme = new BehaviorSubject(this._defaultTheme);
    this.selectedTheme$ = this._selectedTheme.asObservable();
  }

  setTheme(theme: AppTheme): void {
    this._selectedTheme.next(theme);
  }
}
