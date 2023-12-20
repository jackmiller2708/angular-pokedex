import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AssetInfo as TAssetInfo } from '@interfaces/application';
import { Component, Input } from '@angular/core';
import { AssetInfo } from '@models/application/assets';
import { Pokedex } from '@interfaces/domain';

@Component({
  selector: 'app-pokedex-card',
  templateUrl: './pokedex-card.component.html',
  styleUrl: './pokedex-card.component.scss',
  imports: [CommonModule, NgOptimizedImage],
  standalone: true,
})
export class PokedexCardComponent {
  private _dataSource: Pokedex | undefined;

  @Input({ required: true })
  set dataSource(value: Pokedex) {
    this._dataSource = value;
  }

  get dataSource(): Pokedex | undefined {
    return this._dataSource;
  }

  get asset(): TAssetInfo {
    return (
      this._dataSource?.assetsInfo.first() ??
      AssetInfo({
        location: 'pokedex/generic.png',
        name: 'generic-pokedex-image',
      })
    );
  }
}
