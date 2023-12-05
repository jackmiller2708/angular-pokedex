import { PokemonCardComponent } from '@components/molecules';
import { PokedexPageService } from './services';
import { ActivatedRoute } from '@angular/router';
import { IObserverSafe } from '@interfaces/application';
import { HelperService } from '@services/application';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pokedex } from '@interfaces/domain';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss',
  imports: [CommonModule, PokemonCardComponent],
  providers: [PokedexPageService],
  standalone: true,
})
export class PokedexComponent implements IObserverSafe {
  private readonly _ngDestroy$: Subject<void>;
  private _dataSource: Pokedex | undefined;
  private _countDigits: number;

  get dataSource(): Pokedex | undefined {
    return this._dataSource;
  }

  get countDigits(): number {
    return this._countDigits;
  }

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _pokedexPageService: PokedexPageService,
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

  private _onPokedexData(data: Pokedex): void {
    this._dataSource = data;
    this._countDigits = this._helper.getNumDigits(data.pokemonEntries.size);
  }

  private _initData(): void {
    const { observableRegistrarFactory } = this._helper.rxjs;
    const { data } = this._activatedRoute;

    const register = observableRegistrarFactory.call(this, this._ngDestroy$);
    const data$ = data.pipe(this._pokedexPageService.extendPokemonEntry());

    register(data$, this._onPokedexData);
  }
}
