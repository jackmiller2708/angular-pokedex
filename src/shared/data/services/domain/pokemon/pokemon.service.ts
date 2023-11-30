import { ResourceList, ResourceListQuery as TResourceListQuery } from '@interfaces/application/utilities';
import { INamedAPIResource, INamedAPIResourceList, IPokemon } from '@interfaces/dtos';
import { Pokemon as TPokemon } from '@interfaces/domain';
import { ResourceListQuery } from '@models/application/utilities';
import { IResourceService } from '@interfaces/application/services';
import { Observable, map } from 'rxjs';
import { HelperService } from '@services/application';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '@models/domain';

@Injectable({ providedIn: 'root' })
export class PokemonService implements IResourceService<TPokemon> {
  private readonly _remoteService: string;

  constructor(private readonly _http: HttpClient, private readonly _helper: HelperService) {
    this._remoteService = `${environment.pokemonRemoteServiceBase}/pokemon`;
  }

  getResource(nameOrId: string): Observable<TPokemon> {
    return this._http
      .get<IPokemon>(`${this._remoteService}/${nameOrId}`)
      .pipe(map(Pokemon.adaptor));
  }

  getResourceList(query?: TResourceListQuery): Observable<ResourceList<TPokemon>> {
    const { namedResourceToResource } = this._helper.http;
    const { limit, offset } = query ?? ResourceListQuery();

    const params = { limit, offset };

    const _toPokemonReq = ({ name }: INamedAPIResource): Observable<TPokemon> => {
      return this.getResource(name);
    };

    return this._http
      .get<INamedAPIResourceList>(this._remoteService, { params })
      .pipe(namedResourceToResource(_toPokemonReq));
  }

  getEncounterAreas(nameOrId: string) {
    this._http.get(`${this._remoteService}/${nameOrId}/encounters`);
  }
}
