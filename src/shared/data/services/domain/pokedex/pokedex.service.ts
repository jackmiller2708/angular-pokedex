import { IResourceService, ResourceList, ResourceListQuery as TResourceListQuery } from '@interfaces/application';
import { ResourceProvider, ResourceService } from '../resource/resource.service';
import { INamedAPIResource, IPokedex } from '@interfaces/dtos';
import { PokedexExtendedOperator } from './classes';
import { Pokedex as TPokedex } from '@interfaces/domain';
import { Observable, map } from 'rxjs';
import { PokemonService } from '../pokemon/pokemon.service';
import { HelperService } from '@services/application';
import { Injectable } from '@angular/core';
import { Resource } from '@models/domain/resource';
import { Pokedex } from '@models/domain';

@Injectable({ providedIn: 'root' })
export class PokedexService implements IResourceService<TPokedex> {
  private readonly _resourceProvider: ResourceProvider<IPokedex>;
  private readonly _operators: Readonly<PokedexExtendedOperator>;

  get operators(): Readonly<PokedexExtendedOperator> {
    return this._operators;
  }

  constructor(
    private readonly _resourceService: ResourceService<IPokedex>,
    private readonly _helper: HelperService,
    readonly _pokemonService: PokemonService,
  ) {
    this._resourceProvider = this._resourceService.getProvider(Resource.POKEDEX);
    this._operators = Object.freeze(
      new PokedexExtendedOperator(_pokemonService, _helper)
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
}
