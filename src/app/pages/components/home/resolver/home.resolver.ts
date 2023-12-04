import { ResourceListQuery } from '@models/application/utilities';
import { RegionService } from '@services/domain';
import { ResourceList } from '@interfaces/application';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Region } from '@interfaces/domain';

export const homeResolver: ResolveFn<ResourceList<Region>> = (route, state) => {
  return inject(RegionService).getResourceList(
    ResourceListQuery({ limit: 10 })
  );
};
