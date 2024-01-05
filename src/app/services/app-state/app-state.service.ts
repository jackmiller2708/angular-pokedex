import { BehaviorSubject, Observable, distinctUntilChanged, share } from 'rxjs';
import { Injectable } from '@angular/core';
import packageInfo from '@package';

@Injectable()
export class AppStateService {
  private readonly _isLoading: BehaviorSubject<boolean>;
  private readonly _appVersion: string;

  readonly isLoading$: Observable<boolean>;

  get isLoading(): boolean {
    return this._isLoading.getValue();
  }

  get appVersion(): string {
    return this._appVersion;
  }

  get isOnClient(): boolean {
    return typeof window !== 'undefined';
  }

  constructor() {
    this._appVersion = packageInfo.version;
    this._isLoading = new BehaviorSubject(false);
    this.isLoading$ = this._isLoading
      .asObservable()
      .pipe(distinctUntilChanged(), share());
  }

  setLoading(value: boolean): void {
    this._isLoading.next(value);
  }
}
