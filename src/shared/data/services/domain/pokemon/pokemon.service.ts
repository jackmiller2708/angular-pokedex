import { ResourceList, ResourceListQuery as TResourceListQuery } from '@interfaces/application/utilities';
import { ResourceProvider, ResourceService } from '../resource/resource.service';
import { INamedAPIResource, IPokemon } from '@interfaces/dtos';
import { Pokemon as TPokemon } from '@interfaces/domain';
import { IResourceService } from '@interfaces/application/services';
import { Observable, map } from 'rxjs';
import { HelperService } from '@services/application';
import { Injectable } from '@angular/core';
import { Resource } from '@models/domain/resource';
import { Pokemon } from '@models/domain';

@Injectable({ providedIn: 'root' })
export class PokemonService implements IResourceService<TPokemon> {
  private readonly _resourceProvider: ResourceProvider<IPokemon>;

  constructor(
    private readonly _resourceService: ResourceService<IPokemon>,
    private readonly _helper: HelperService
  ) {
    this._resourceProvider = this._resourceService.getProvider(Resource.POKEMON);
  }

  getResource(nameOrId: string): Observable<TPokemon> {
    return this._resourceProvider
      .getResource(nameOrId)
      .pipe(map(Pokemon.adaptor));
  }

  getResourceList(query?: TResourceListQuery): Observable<ResourceList<TPokemon>> {
    const { namedResourceToResource } = this._helper.http;

    const _toPokemonReq = ({ name }: INamedAPIResource): Observable<TPokemon> => {
      return this.getResource(name);
    };

    return this._resourceProvider
      .getResourceList(query)
      .pipe(namedResourceToResource(_toPokemonReq));
  }
}
