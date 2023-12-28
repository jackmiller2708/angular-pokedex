import { PokedexPageService } from './pokedex-page.service';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

describe('PokedexPageService', () => {
  let service: PokedexPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PokedexPageService],
    });

    service = TestBed.inject(PokedexPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
