import { ActivatedRoute, Data } from '@angular/router';
import { IObserverSafe } from '@interfaces/application';
import { HelperService } from '@services/application';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Region } from '@interfaces/domain';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrl: './region.component.scss',
  imports: [CommonModule],
  standalone: true,
})
export class RegionComponent implements IObserverSafe {
  private readonly _ngDestroy$: Subject<void>;
  private _dataSource: Region | undefined;

  get dataSource(): Region | undefined {
    return this._dataSource;
  }

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _helper: HelperService
  ) {
    this._ngDestroy$ = new Subject();
  }

  ngOnInit(): void {
    this._initData();
  }

  ngOnDestroy(): void {
    this._ngDestroy$.next();
  }

  private _initData(): void {
    const { observableRegistrarFactory } = this._helper.rxjs;
    const { data } = this._activatedRoute;

    const register = observableRegistrarFactory.call(this, this._ngDestroy$);

    register(data, this._onRegionData);
  }

  private _onRegionData(data: Data): void {
    console.log(data['dataSource'])
    // this._dataSource = data['dataSource'];
  }
}
