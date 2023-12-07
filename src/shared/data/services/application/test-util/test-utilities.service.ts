import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TestUtilitiesService {
  constructor() {}

  createActivatedRouteSnapshot(data: any): ActivatedRouteSnapshot {
    return { data: { ...data } } as ActivatedRouteSnapshot;
  }

  createRouterStateSnapshot(): RouterStateSnapshot {
    return {} as RouterStateSnapshot;
  }
}
