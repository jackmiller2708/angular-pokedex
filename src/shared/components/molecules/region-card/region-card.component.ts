import { Component, Input, HostBinding, EventEmitter, HostListener, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
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

  @Output()
  readonly onClick: EventEmitter<Region>;

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

  constructor() {
    this.onClick = new EventEmitter();
  }

  @HostListener('click')
  private onHostClick(): void {
    this.onClick.emit(this._dataSource);
  }
}
