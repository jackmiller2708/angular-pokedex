import { ResourceListQuery as TResourceListQuery, ResourceList } from '@interfaces/application/utilities';
import { INamedAPIResource, INamedAPIResourceList, IRegion } from '@interfaces/dtos';
import { ResourceListQuery } from '@models/application/utilities';
import { Region as TRegion } from '@interfaces/domain';
import { IResourceService } from '@interfaces/application/services';
import { Observable, map } from 'rxjs';
import { HelperService } from '@services/application';
import { environment } from '@environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Region } from '@models/domain';

@Injectable({ providedIn: 'root' })
export class RegionService implements IResourceService<TRegion> {
  private readonly _remoteService: string;

  constructor(
    private readonly _http: HttpClient,
    private readonly _helper: HelperService
  ) {
    this._remoteService = `${environment.pokemonRemoteServiceBase}/region`;
  }

  getResource(nameOrId: string): Observable<TRegion> {
    return this._http
      .get<IRegion>(`${this._remoteService}/${nameOrId}`)
      .pipe(map(Region.adaptor));
  }

  getResourceList(query?: TResourceListQuery): Observable<ResourceList<TRegion>> {
    const { namedResourceToResource } = this._helper.http;
    const { limit, offset } = query ?? ResourceListQuery();

    const params = { limit, offset };

    const _toRegionReq = ({ name }: INamedAPIResource): Observable<TRegion> => {
      return this.getResource(name);
    };

    return this._http
      .get<INamedAPIResourceList>(this._remoteService, { params })
      .pipe(namedResourceToResource(_toRegionReq));
  }
}
