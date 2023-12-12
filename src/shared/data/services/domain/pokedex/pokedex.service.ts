import { Observable, UnaryFunction, catchError, forkJoin, map, of, pipe, switchMap, tap } from 'rxjs';
import { IResourceService, ResourceList, ResourceListQuery as TResourceListQuery } from '@interfaces/application';
import { ResourceProvider, ResourceService } from '../resource/resource.service';
import { INamedAPIResource, IPokedex } from '@interfaces/dtos';
import { Pokemon, Pokedex as TPokedex } from '@interfaces/domain';
import { PokemonService } from '../pokemon/pokemon.service';
import { HelperService } from '@services/application';
import { PokemonEntry } from '@interfaces/domain/pokedex';
import { Injectable } from '@angular/core';
import { List, Map } from 'immutable';
import { Resource } from '@models/domain/resource';
import { Pokedex } from '@models/domain';

@Injectable({ providedIn: 'root' })
export class PokedexService implements IResourceService<TPokedex> {
  private readonly _resourceProvider: ResourceProvider<IPokedex>;

  constructor(
    private readonly _resourceService: ResourceService<IPokedex>,
    private readonly _pokemonService: PokemonService,
    private readonly _helper: HelperService
  ) {
    this._resourceProvider = this._resourceService.getProvider(
      Resource.POKEDEX
    );
  }

  getResource(nameOrId: string): Observable<TPokedex> {
    return this._resourceProvider
      .getResource(nameOrId)
      .pipe(map(Pokedex.adaptor));
  }

  getResourceList(query?: TResourceListQuery): Observable<ResourceList<TPokedex>> {
    const { namedResourceToResource } = this._helper.http;

    const _toPokedexReq = ({ name }: INamedAPIResource): Observable<TPokedex> => {
      return this.getResource(name);
    };

    return this._resourceProvider
      .getResourceList(query)
      .pipe(namedResourceToResource(_toPokedexReq));
  }

  extendPokemonEntries(): UnaryFunction<Observable<TPokedex>, Observable<TPokedex>> {
    let savedPokedex: TPokedex;
    let pokemonEntries = Map<string, number>();

    const savePokedex = (data: TPokedex) => {
      savedPokedex = data;
    };

    const extendToPokemon = (data: TPokedex) => {
      const entryToPokemon = ({ pokemonSpecies, entryNumber }: PokemonEntry): Observable<Pokemon | undefined> => {
        pokemonEntries = pokemonEntries.set(pokemonSpecies.name, entryNumber);

        return this._pokemonService
          .getResource(pokemonSpecies.name)
          .pipe(catchError(() => of(undefined)));
      };

      return forkJoin(
        (data.pokemonEntries as List<PokemonEntry>)
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

      return savedPokedex.set('pokemonEntries', List(pokemonList));
    };

    return pipe(
      tap(savePokedex),
      switchMap(extendToPokemon),
      map(mapPokemonList)
    );
  }
}
