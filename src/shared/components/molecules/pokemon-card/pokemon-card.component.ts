import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TypeBadgeComponent } from '../type-badge/type-badge.component';
import { Component, Input } from '@angular/core';
import { CardComponent } from '@components/atoms';
import { PokeIdPipe } from '@pipes';
import { Pokemon } from '@interfaces/domain';

const imports = [
  CommonModule,
  NgOptimizedImage,
  CardComponent,
  TypeBadgeComponent,
  PokeIdPipe,
];

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
  imports,
  standalone: true,
})
export class PokemonCardComponent {
  private _dataSource: Pokemon | undefined;

  @Input({ required: true })
  set dataSource(value: Pokemon) {
    this._dataSource = value;
  }

  get dataSource(): Pokemon | undefined {
    return this._dataSource;
  }
}
