import { BehaviorSubject, Observable, distinctUntilChanged, share } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AppStateService {
  private readonly _isLoading: BehaviorSubject<boolean>;

  readonly isLoading$: Observable<boolean>;

  get isLoading(): boolean {
    return this._isLoading.getValue();
  }

  constructor() {
    this._isLoading = new BehaviorSubject(false);
    this.isLoading$ = this._isLoading
      .asObservable()
      .pipe(distinctUntilChanged(), share());
  }

  setLoading(value: boolean): void {
    this._isLoading.next(value);
  }
}
