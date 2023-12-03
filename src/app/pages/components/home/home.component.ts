import { RegionCardComponent } from '@components/molecules';
import { ResourceListQuery } from '@models/application/utilities';
import { ListComponent } from '@components/atoms';
import { RegionService } from '@services/domain';
import { ResourceList } from '@interfaces/application';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { Region } from '@interfaces/domain';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, RouterModule, ListComponent, RegionCardComponent],
  standalone: true,
})
export class HomeComponent {
  private _regions: ResourceList<Region> | undefined;

  get regions(): ResourceList<Region> | undefined {
    return this._regions;
  }

  constructor(private readonly _regionService: RegionService) {}

  ngOnInit(): void {
    this._regionService
      .getResourceList(ResourceListQuery({ limit: 10 }))
      .subscribe(this._onRegionData.bind(this));
  }

  private _onRegionData(data: ResourceList<Region>): void {
    this._regions = data;
  }
}
