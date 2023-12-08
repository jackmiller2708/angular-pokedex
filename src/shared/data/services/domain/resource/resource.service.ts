import { IResourceService, ResourceListQuery as TResourceListQuery } from '@interfaces/application';
import { INamedAPIResourceList } from '@interfaces/dtos';
import { ResourceListQuery } from '@models/application/utilities/ResourceListQuery.model';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resource } from '@models/domain/resource';

@Injectable({ providedIn: 'root' })
export class ResourceService<T> implements IResourceService<T> {
  private readonly _remoteService: string;
  private _resourceType: Resource | undefined;

  private get _resourceRemote(): string {
    if (!this._resourceType) {
      throw new Error();
    }

    return `${this._remoteService}/${this._resourceType}`;
  }

  constructor(private readonly _http: HttpClient) {
    this._remoteService = environment.pokemonRemoteServiceBase;
  }

  setResourceType(type: Resource): void {
    this._resourceType = type;
  }

  getResource(nameOrId: string): Observable<T> {
    return this._http.get<T>(`${this._resourceRemote}/${nameOrId}`);
  }

  getResourceList(query?: TResourceListQuery): Observable<INamedAPIResourceList> {
    const { limit, offset } = query ?? ResourceListQuery();

    return this._http.get<INamedAPIResourceList>(this._resourceRemote, {
      params: { limit, offset },
    });
  }
}
