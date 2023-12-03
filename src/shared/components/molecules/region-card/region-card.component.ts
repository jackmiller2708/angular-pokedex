import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
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
