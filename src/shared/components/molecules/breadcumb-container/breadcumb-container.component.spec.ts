import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreadcumbContainerComponent } from './breadcumb-container.component';

describe('BreadcumbContainerComponent', () => {
  let component: BreadcumbContainerComponent;
  let fixture: ComponentFixture<BreadcumbContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcumbContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BreadcumbContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
