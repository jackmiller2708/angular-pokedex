import { IResourceService, ResourceList, ResourceListQuery as TResourceListQuery } from '@interfaces/application';
import { INamedAPIResource, INamedAPIResourceList, IPokedex } from '@interfaces/dtos';
import { Pokedex as TPokedex } from '@interfaces/domain';
import { ResourceListQuery } from '@models/application/utilities';
import { Observable, map } from 'rxjs';
import { HelperService } from '@services/application';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokedex } from '@models/domain';

@Injectable({ providedIn: 'root' })
export class PokedexService implements IResourceService<TPokedex> {
  private readonly _remoteService: string;

  constructor(
    private readonly _http: HttpClient,
    private readonly _helper: HelperService
  ) {
    this._remoteService = `${environment.pokemonRemoteServiceBase}/pokedex`;
  }

  getResource(nameOrId: string): Observable<TPokedex> {
    return this._http
      .get<IPokedex>(`${this._remoteService}/${nameOrId}`)
      .pipe(map(Pokedex.adaptor));
  }

  getResourceList(query?: TResourceListQuery): Observable<ResourceList<TPokedex>> {
    const { namedResourceToResource } = this._helper.http;
    const { limit, offset } = query ?? ResourceListQuery();

    const params = { limit, offset };

    const _toPokedexReq = ({ name }: INamedAPIResource): Observable<TPokedex> => {
      return this.getResource(name);
    };

    return this._http
      .get<INamedAPIResourceList>(this._remoteService, { params })
      .pipe(namedResourceToResource(_toPokedexReq));
  }
}
