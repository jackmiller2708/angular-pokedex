import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonCardComponent } from './pokemon-card.component';
import { Pokemon } from '@models/domain';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return default maxIdDigits as 4', () => {
    expect(component.maxIdDigits).toBe(4);
  });

  it('should set maxIdDigits to be 10', () => {
    component.maxIdDigits = 10;

    expect(component.maxIdDigits).toBe(10);
  });

  it('should return default showEntryNo to be false', () => {
    expect(component.showEntryNo).toBeFalse();
  });

  it('should set showEntryNo to be false', () => {
    component.showEntryNo = true;

    expect(component.showEntryNo).toBeTrue();
  });

  it('should return default dataSource to be falsy', () => {
    expect(component.dataSource).toBeFalsy();
  });

  it('should set dataSource to be have Pokemon data', () => {
    const pokemon = Pokemon();

    component.dataSource = pokemon;

    expect(component.dataSource).toEqual(pokemon);
  });

  it('should return default asset to be falsy', () => {
    expect(component.asset).toBeFalsy();
  });

  it('should return Pokemon asset', () => {
    const pokemon = Pokemon();

    component.dataSource = pokemon;

    expect(component.asset).toEqual(pokemon.assetsInfo.first());
  });
});
