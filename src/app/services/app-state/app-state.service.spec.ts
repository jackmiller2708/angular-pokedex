import { AppStateService } from './app-state.service';
import { TestBed } from '@angular/core/testing';

describe('AppStateService', () => {
  let service: AppStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppStateService],
    });

    service = TestBed.inject(AppStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
