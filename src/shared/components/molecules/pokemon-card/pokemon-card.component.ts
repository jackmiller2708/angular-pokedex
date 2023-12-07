import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TypeBadgeComponent } from '../type-badge/type-badge.component';
import { Component, Input } from '@angular/core';
import { CardComponent } from '@components/atoms';
import { PokeIdPipe } from '@pipes';
import { AssetInfo } from '@interfaces/application';
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
  private _pokemonAsset: AssetInfo | undefined;
  private _maxIdDigits: number | undefined;
  private _showEntryNo: boolean;

  @Input({ required: true })
  set dataSource(value: Pokemon) {
    this._dataSource = value;
    this._pokemonAsset = value.assetsInfo.first();
  }

  get dataSource(): Pokemon | undefined {
    return this._dataSource;
  }

  @Input()
  set maxIdDigits(value: number) {
    this._maxIdDigits = value;
  }

  get maxIdDigits(): number {
    return this._maxIdDigits ?? 4;
  }

  @Input()
  set showEntryNo(value: boolean) {
    this._showEntryNo = value;
  }

  get showEntryNo(): boolean {
    return this._showEntryNo;
  }

  get asset(): AssetInfo | undefined {
    return this._pokemonAsset;
  }

  constructor() {
    this._showEntryNo = false;
  }
}
