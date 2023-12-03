import { BehaviorSubject, Observable } from 'rxjs';
import { HelperService } from '@services/application';
import { Injectable } from '@angular/core';
import { Region } from '@interfaces/domain';

@Injectable({ providedIn: 'root' })
export class AppStateService {
  private readonly _selectedRegion: BehaviorSubject<Region | undefined>;

  readonly selectedRegion$: Observable<Region>

  get selectedRegion(): Region | undefined {
    return this._selectedRegion.getValue();
  }

  constructor(private readonly _helper: HelperService) {
    const { takeMeaningfulValue } = this._helper.rxjs.operators;

    this._selectedRegion = new BehaviorSubject<Region | undefined>(undefined)
    this.selectedRegion$ = this._selectedRegion.asObservable().pipe(takeMeaningfulValue());
  }

  setSelectedRegion(value: Region): void {
    this._selectedRegion.next(value);
  }
}
