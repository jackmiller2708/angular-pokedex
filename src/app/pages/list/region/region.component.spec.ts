import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RegionComponent } from './region.component';
import { RouterModule } from '@angular/router';

describe('RegionComponent', () => {
  let component: RegionComponent;
  let fixture: ComponentFixture<RegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegionComponent, RouterModule.forRoot([]), HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
