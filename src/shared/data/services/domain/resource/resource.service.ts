import { IResourceService, ResourceListQuery as TResourceListQuery } from '@interfaces/application';
import { INamedAPIResourceList } from '@interfaces/dtos';
import { ResourceListQuery } from '@models/application/utilities/ResourceListQuery.model';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resource } from '@models/domain/resource';

@Injectable({ providedIn: 'root' })
export class ResourceService<T> {
  constructor(private readonly _http: HttpClient) {}

  getProvider(type: Resource): ResourceProvider<T> {
    return new ResourceProvider(this._http, type);
  }
}

export class ResourceProvider<T> implements IResourceService<T> {
  private readonly _remoteService: string;

  constructor(
    private readonly _http: HttpClient,
    private readonly _type: Resource
  ) {
    this._remoteService = `${environment.pokemonRemoteServiceBase}/${this._type}`;
  }

  getResource(nameOrId: string): Observable<T> {
    return this._http.get<T>(`${this._remoteService}/${nameOrId}`);
  }

  getResourceList(query?: TResourceListQuery): Observable<INamedAPIResourceList> {
    const { limit, offset } = query ?? ResourceListQuery();

    return this._http.get<INamedAPIResourceList>(this._remoteService, {
      params: { limit, offset },
    });
  }
}
