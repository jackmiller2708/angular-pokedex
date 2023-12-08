import { HttpClientModule } from '@angular/common/http';
import { RegionService } from './region.service';
import { TestBed } from '@angular/core/testing';

describe('RegionService', () => {
  let service: RegionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [RegionService],
    });

    service = TestBed.inject(RegionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
