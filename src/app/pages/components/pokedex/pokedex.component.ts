import { ActivatedRoute, Data } from '@angular/router';
import { IObserverSafe } from '@interfaces/application';
import { HelperService } from '@services/application';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Pokedex } from '@interfaces/domain';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss',
  imports: [CommonModule],
  standalone: true,
})
export class PokedexComponent implements IObserverSafe {
  private readonly _ngDestroy$: Subject<void>;
  private _dataSource: Pokedex | undefined;

  get dataSource(): Pokedex | undefined {
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

  private _onPokedexData(data: Data): void {
    this._dataSource = data['dataSource'];
  }

  private _initData(): void {
    const { observableRegistrarFactory } = this._helper.rxjs;
    const { data } = this._activatedRoute;

    const register = observableRegistrarFactory.call(this, this._ngDestroy$);

    register(data, this._onPokedexData);
  }
}
