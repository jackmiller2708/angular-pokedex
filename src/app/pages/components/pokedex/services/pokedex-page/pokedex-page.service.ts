import { UnaryFunction, Observable, forkJoin, pipe, tap, switchMap, map, catchError, of } from 'rxjs';
import { Pokedex, Pokemon } from '@interfaces/domain';
import { PokemonService } from '@services/domain';
import { PokemonEntry } from '@interfaces/domain/pokedex';
import { Injectable } from '@angular/core';
import { List, Map } from 'immutable';
import { Data } from '@angular/router';

@Injectable()
export class PokedexPageService {
  constructor(private readonly _pokemonService: PokemonService) {}

  toPageData(): UnaryFunction<Observable<Data>, Observable<Data>> {
    let savedData: Data;

    const saveData = (data: Data) => {
      savedData = data;
    };

    const mapData = (dataSource: Pokedex) => {
      return { ...savedData, dataSource };
    };

    return pipe(tap(saveData), this.toPokedex(), map(mapData));
  }

  toPokedex(): UnaryFunction<Observable<Data>, Observable<Pokedex>> {
    let pokemonEntries = Map<string, number>();
    let dataSource: Pokedex;

    const savePokedex = (data: Data) => {
      dataSource = data['dataSource'];
    };

    const extendToPokemon = (data: Data) => {
      const entryToPokemon = ({ pokemonSpecies, entryNumber }: PokemonEntry) => {
        pokemonEntries = pokemonEntries.set(pokemonSpecies.name, entryNumber);

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
      const pokemonList = mixedList
        .filter(takeMeaningfulValue)
        .map((pokemon) =>
          pokemon.set('pokedexEntry', pokemonEntries.get(pokemon.name, 0))
        );

      return dataSource.set('pokemonEntries', List(pokemonList));
    };

    return pipe(
      tap(savePokedex),
      switchMap(extendToPokemon),
      map(mapPokemonList)
    );
  }
}
