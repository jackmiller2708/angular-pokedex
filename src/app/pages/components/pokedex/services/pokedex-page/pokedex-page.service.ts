import { UnaryFunction, Observable, forkJoin, pipe, tap, switchMap, map, catchError, EMPTY } from 'rxjs';
import { Pokedex, Pokemon } from '@interfaces/domain';
import { PokemonService } from '@services/domain';
import { PokemonEntry } from '@interfaces/domain/pokedex';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { List } from 'immutable';

@Injectable()
export class PokedexPageService {
  constructor(private readonly _pokemonService: PokemonService) {}

  extendPokemonEntry(): UnaryFunction<Observable<Data>, Observable<Pokedex>> {
    let dataSource: Pokedex;

    const savePokedex = (data: Data) => (dataSource = data['dataSource']);

    const entryToPokemon = ({ pokemonSpecies }: PokemonEntry) => {
      return this._pokemonService
        .getResource(pokemonSpecies.name)
        .pipe(catchError(() => EMPTY));
    };

    const extendToPokemon = (data: Data) => {
      return forkJoin(
        (data['dataSource'].pokemonEntries as List<PokemonEntry>)
          .map(entryToPokemon)
          .toArray()
      );
    };

    const mapPokemonList = (pokemonList: Pokemon[]) => {
      return dataSource.set(
        'pokemonEntries',
        List(pokemonList.filter((pokemon) => !!pokemon))
      );
    };

    return pipe(
      tap(savePokedex),
      switchMap(extendToPokemon),
      map(mapPokemonList)
    );
  }
}
