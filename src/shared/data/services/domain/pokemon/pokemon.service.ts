import { ResourceList, ResourceListQuery as TResourceListQuery } from '@interfaces/application/utilities';
import { INamedAPIResource, IPokemon } from '@interfaces/dtos';
import { Pokemon as TPokemon } from '@interfaces/domain';
import { IResourceService } from '@interfaces/application/services';
import { ResourceService } from '../resource/resource.service';
import { Observable, map } from 'rxjs';
import { HelperService } from '@services/application';
import { Injectable } from '@angular/core';
import { Resource } from '@models/domain/resource';
import { Pokemon } from '@models/domain';

@Injectable({ providedIn: 'root' })
export class PokemonService implements IResourceService<TPokemon> {
  constructor(
    private readonly _resourceService: ResourceService<IPokemon>,
    private readonly _helper: HelperService
  ) {
    this._resourceService.setResourceType(Resource.POKEMON);
  }

  getResource(nameOrId: string): Observable<TPokemon> {
    return this._resourceService
      .getResource(nameOrId)
      .pipe(map(Pokemon.adaptor));
  }

  getResourceList(query?: TResourceListQuery): Observable<ResourceList<TPokemon>> {
    const { namedResourceToResource } = this._helper.http;

    const _toPokemonReq = ({ name }: INamedAPIResource): Observable<TPokemon> => {
      return this.getResource(name);
    };

    return this._resourceService
      .getResourceList(query)
      .pipe(namedResourceToResource(_toPokemonReq));
  }
}
