import { BreadcrumbsComponent, PokemonCardComponent } from '@components/molecules';
import { LinkComponent, ListComponent } from '@components/atoms';
import { Breadcrumb, IObserverSafe } from '@interfaces/application';
import { ActivatedRoute, Data } from '@angular/router';
import { PokedexPageService } from './services';
import { HelperService } from '@services/application';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pokedex } from '@interfaces/domain';
import { Subject } from 'rxjs';
import { List } from 'immutable';

function imports(): any[] {
  return [
    CommonModule,
    PokemonCardComponent,
    BreadcrumbsComponent,
    ListComponent,
    LinkComponent,
  ];
}

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss',
  imports: imports(),
  providers: [PokedexPageService],
  host: { class: 'block h-full w-full overflow-y-auto' },
  standalone: true,
})
export class PokedexComponent implements IObserverSafe {
  private readonly _ngDestroy$: Subject<void>;
  private _dataSource: Pokedex | undefined;
  private _breadcrumbs: List<Breadcrumb> | undefined;
  private _countDigits: number;

  get dataSource(): Pokedex | undefined {
    return this._dataSource;
  }

  get countDigits(): number {
    return this._countDigits;
  }

  get breadcrumbs(): List<Breadcrumb> | undefined {
    return this._breadcrumbs;
  }

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _helper: HelperService
  ) {
    this._ngDestroy$ = new Subject();
    this._countDigits = 0;
  }

  ngOnInit(): void {
    this._initData();
  }

  ngOnDestroy(): void {
    this._ngDestroy$.next();
  }

  private _onPageData({ dataSource, breadcrumbs }: Data): void {
    const { getNumDigits } = this._helper;

    this._dataSource = dataSource;
    this._breadcrumbs = breadcrumbs;
    this._countDigits = getNumDigits(dataSource.pokemonEntries.size);
  }

  private _initData(): void {
    const { observableRegistrarFactory } = this._helper.rxjs;
    const { data } = this._route;

    const register = observableRegistrarFactory.call(this, this._ngDestroy$);

    register(data, this._onPageData);
  }
}
