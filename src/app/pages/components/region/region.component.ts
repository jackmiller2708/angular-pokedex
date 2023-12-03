import { Component, Input } from '@angular/core';
import { RegionService } from '@services/domain';
import { CommonModule } from '@angular/common';
import { Region } from '@interfaces/domain';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrl: './region.component.scss',
  imports: [CommonModule],
  standalone: true,
})
export class RegionComponent {
  private _dataSource: Region | undefined;

  @Input()
  set region(value: string) {
    this._regionService
      .getResource(value)
      .subscribe(this._onRegionData.bind(this));
  }

  get dataSource(): Region | undefined {
    return this._dataSource;
  }

  constructor(private readonly _regionService: RegionService) {}

  private _onRegionData(data: Region): void {
    this._dataSource = data;
  }
}
