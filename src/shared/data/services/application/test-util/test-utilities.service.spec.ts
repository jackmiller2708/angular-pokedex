import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TestUtilitiesService } from './test-utilities.service';
import { TestBed } from '@angular/core/testing';

describe('TestUtilitiesService', () => {
  let service: TestUtilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(TestUtilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an empty ActivatedRoutSnapshot mock object', () => {
    expect(service.createActivatedRouteSnapshot({})).toEqual(
      { data: {} } as ActivatedRouteSnapshot
    );
  });

  it('should return an empty RouterStateSnapshot mock object', () => {
    expect(service.createRouterStateSnapshot()).toEqual(
      {} as RouterStateSnapshot
    );
  });
});
