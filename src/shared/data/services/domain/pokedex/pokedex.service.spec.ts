import { HttpClientModule } from '@angular/common/http';
import { PokedexService } from './pokedex.service';
import { TestBed } from '@angular/core/testing';

describe('PokedexService', () => {
  let service: PokedexService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PokedexService],
    });

    service = TestBed.inject(PokedexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
