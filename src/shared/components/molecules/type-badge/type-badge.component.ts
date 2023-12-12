import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeComponent } from '@components/atoms';
import { HelperService } from '@services/application';
import { TYPES_COLORS } from '@constants/enums';
import { PokemonType } from '@interfaces/domain/pokemon';
import { AssetInfo } from '@interfaces/application/assets';

@Component({
  selector: 'app-type-badge',
  templateUrl: './type-badge.component.html',
  styleUrl: './type-badge.component.scss',
  imports: [CommonModule, NgOptimizedImage, BadgeComponent],
  standalone: true,
})
export class TypeBadgeComponent {
  private _isIconVisible: boolean;
  private _typeEntry: PokemonType | undefined;
  private _typeAsset: AssetInfo | undefined;

  @Input()
  set isIconVisible(value: boolean) {
    this._isIconVisible = value;
  }

  get isIconVisible(): boolean {
    return this._isIconVisible;
  }

  @Input({ required: true })
  set entry(value: PokemonType) {
    this._typeEntry = value;
    this._typeAsset = value.assetsInfo.first()!;
  }

  get entry(): PokemonType | undefined {
    return this._typeEntry;
  }

  get typeAsset(): AssetInfo | undefined {
    return this._typeAsset;
  }

  get color(): string {
    const colorKey = (this._typeEntry?.type.name ?? '').toUpperCase();
    const enumObj = this._helper.enum.from(TYPES_COLORS);

    return !enumObj.has(colorKey) ? '#000' : enumObj.get(colorKey);
  }

  constructor(private readonly _helper: HelperService) {
    this._isIconVisible = true;
  }
}
