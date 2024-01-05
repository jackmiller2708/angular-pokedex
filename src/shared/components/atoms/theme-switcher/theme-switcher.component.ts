import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { HelperService, ThemeService } from '@services/application';
import { AppTheme, IObserverSafe } from '@interfaces/application';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
  imports: [CommonModule],
  host: { class: 'scale-50' },
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcherComponent implements IObserverSafe {
  private readonly _ngDestroy$: Subject<void>;
  private _value: boolean;

  get value(): boolean {
    return this._value;
  }

  constructor(
    private readonly _themeService: ThemeService,
    private readonly _helper: HelperService,
    private readonly _CDR: ChangeDetectorRef
  ) {
    this._ngDestroy$ = new Subject();
    this._value = true;
  }

  ngOnInit(): void {
    this._initData();
  }

  ngOnDestroy(): void {
    this._ngDestroy$.next();
  }

  @HostListener('click')
  onClick() {
    this._themeService.setTheme(this._value ? 'dark' : 'light');
  }

  private _onSelectedTheme(theme: AppTheme): void {
    this._value = theme === 'light';
    this._CDR.detectChanges();
  }

  private _initData() {
    const { observableRegistrarFactory } = this._helper.rxjs;
    const { selectedTheme$ } = this._themeService;

    const register = observableRegistrarFactory.call(this, this._ngDestroy$);

    register(selectedTheme$, this._onSelectedTheme);
  }
}
