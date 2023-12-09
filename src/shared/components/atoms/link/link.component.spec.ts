import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestUtilitiesService } from '@services/application';
import { LinkComponent } from './link.component';
import { ActivatedRoute } from '@angular/router';

describe('LinkComponent', () => {
  let component: LinkComponent;
  let fixture: ComponentFixture<LinkComponent>;

  beforeEach(async () => {
    const { createActivatedRouteSnapshot } = new TestUtilitiesService();

    await TestBed.configureTestingModule({
      imports: [LinkComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: createActivatedRouteSnapshot({}),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
