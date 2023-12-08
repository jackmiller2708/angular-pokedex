import { ResourceListQuery as TResourceListQuery, ResourceList } from '@interfaces/application/utilities';
import { ResourceProvider, ResourceService } from '../resource/resource.service';
import { INamedAPIResource, IRegion } from '@interfaces/dtos';
import { Region as TRegion } from '@interfaces/domain';
import { IResourceService } from '@interfaces/application/services';
import { Observable, map } from 'rxjs';
import { HelperService } from '@services/application';
import { Injectable } from '@angular/core';
import { Resource } from '@models/domain/resource';
import { Region } from '@models/domain';

@Injectable({ providedIn: 'root' })
export class RegionService implements IResourceService<TRegion> {
  private readonly _resourceProvider: ResourceProvider<IRegion>;

  constructor(
    private readonly _resourceService: ResourceService<IRegion>,
    private readonly _helper: HelperService
  ) {
    this._resourceProvider = this._resourceService.getProvider(Resource.REGION);
  }

  getResource(nameOrId: string): Observable<TRegion> {
    return this._resourceProvider
      .getResource(nameOrId)
      .pipe(map(Region.adaptor));
  }

  getResourceList(query?: TResourceListQuery): Observable<ResourceList<TRegion>> {
    const { namedResourceToResource } = this._helper.http;

    const _toRegionReq = ({ name }: INamedAPIResource): Observable<TRegion> => {
      return this.getResource(name);
    };

    return this._resourceProvider
      .getResourceList(query)
      .pipe(namedResourceToResource(_toRegionReq));
  }
}
