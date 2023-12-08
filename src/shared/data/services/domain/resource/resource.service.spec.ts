import { HttpClientModule } from '@angular/common/http';
import { ResourceService } from './resource.service';
import { TestBed } from '@angular/core/testing';

describe('ResourceService', () => {
  let service: ResourceService<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ResourceService],
    });

    service = TestBed.inject(ResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
