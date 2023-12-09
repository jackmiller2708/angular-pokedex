import { TestUtilitiesService } from '@services/application';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { TestBed } from '@angular/core/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    const { createActivatedRouteSnapshot } = new TestUtilitiesService();

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: createActivatedRouteSnapshot({}),
        },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
