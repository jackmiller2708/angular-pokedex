import { ActivatedRoute, Data, RouterModule } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, HostBinding, OnInit } from '@angular/core';
import { RegionCardComponent } from '@components/molecules';
import { ListComponent } from '@components/atoms';
import { ResourceList } from '@interfaces/application';
import { Region } from '@interfaces/domain';

const imports = [
  CommonModule,
  NgOptimizedImage,
  RouterModule,
  ListComponent,
  RegionCardComponent,
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports,
  standalone: true,
})
export class HomeComponent implements OnInit {
  private _regions: ResourceList<Region> | undefined;

  @HostBinding('class')
  private get _classes(): string[] {
    return ['relative', 'w-screen', 'h-screen', 'flex', 'flex-col'];
  }

  get regions(): ResourceList<Region> | undefined {
    return this._regions;
  }

  constructor(private readonly _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(this._onRegionData.bind(this));
  }

  private _onRegionData(data: Data): void {
    this._regions = data['dataSource'];
  }
}
