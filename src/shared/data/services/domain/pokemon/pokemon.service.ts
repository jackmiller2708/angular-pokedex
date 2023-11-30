import { ResourceList, ResourceListQuery as TResourceListQuery } from '@interfaces/application/utilities';
import { ResourceListFactory, ResourceListQuery } from '@models/application/utilities';
import { INamedAPIResource, INamedAPIResourceList } from '@interfaces/dtos';
import { IResourceService } from '@interfaces/application/services';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pokemon } from '@interfaces/domain/pokemon';
import { HelperService } from '@services/application';

@Injectable({ providedIn: 'root' })
export class PokemonService implements IResourceService<Pokemon> {
  private readonly _remoteService: string;

  constructor(private readonly _http: HttpClient, private readonly _helper: HelperService) {
    this._remoteService = `${environment.pokemonRemoteServiceBase}/pokemon`;
  }

  getResource(nameOrId: string): Observable<Pokemon> {
    return this._http.get<any>(`${this._remoteService}/${nameOrId}`);
  }

  getResourceList(query?: TResourceListQuery): Observable<ResourceList<Pokemon>> {
    const { namedResourceToResource } = this._helper.http;
    const { limit, offset } = query ?? ResourceListQuery();

    const params = { limit, offset };

    const _toPokemonReq = ({ name }: INamedAPIResource): Observable<Pokemon> => {
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
