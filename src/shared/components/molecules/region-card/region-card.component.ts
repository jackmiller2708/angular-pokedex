import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input, HostBinding } from '@angular/core';
import { CardComponent } from '@components/atoms';
import { AssetInfo } from '@interfaces/application';
import { Region } from '@interfaces/domain';

@Component({
  selector: 'app-region-card',
  templateUrl: './region-card.component.html',
  styleUrl: './region-card.component.scss',
  imports: [CommonModule, NgOptimizedImage, CardComponent],
  standalone: true,
})
export class RegionCardComponent {
  private _dataSource: Region | undefined;

  @HostBinding('class')
  private get _classes(): string[] {
    return [
      'flex',
      'flex-col',
      'items-center',
      'group',
      'cursor-pointer',
      'select-none',
    ];
  }

  @Input({ required: true })
  set dataSource(value: Region) {
    this._dataSource = value;
  }

  get dataSource(): Region | undefined {
    return this._dataSource;
  }

  get asset(): AssetInfo | undefined {
    return this.dataSource?.assetsInfo.first();
  }
}
