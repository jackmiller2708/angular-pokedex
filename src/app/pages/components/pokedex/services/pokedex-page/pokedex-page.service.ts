import { UnaryFunction, Observable, forkJoin, pipe, tap, switchMap, map, catchError, of } from 'rxjs';
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

    const savePokedex = (data: Data) => {
      dataSource = data['dataSource'];
    };

    const extendToPokemon = (data: Data) => {
      const entryToPokemon = ({ pokemonSpecies }: PokemonEntry) => {
        return this._pokemonService
          .getResource(pokemonSpecies.name)
          .pipe(catchError(() => of(undefined)));
      };

      return forkJoin(
        (data['dataSource'].pokemonEntries as List<PokemonEntry>)
          .map(entryToPokemon)
          .toArray()
      );
    };

    const mapPokemonList = (mixedList: (Pokemon | undefined)[]) => {
      const takeMeaningfulValue = (item: Pokemon | undefined): item is Pokemon => !!item;
      const pokemonList = mixedList.filter(takeMeaningfulValue);

      return dataSource.set('pokemonEntries', List(pokemonList));
    };

    return pipe(
      tap(savePokedex),
      switchMap(extendToPokemon),
      map(mapPokemonList)
    );
  }
}
