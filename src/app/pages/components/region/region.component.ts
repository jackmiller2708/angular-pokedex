import { ActivatedRoute, Data, RouterModule } from '@angular/router';
import { Breadcrumb, IObserverSafe } from '@interfaces/application';
import { BreadcrumbsComponent } from '@components/molecules';
import { HelperService } from '@services/application';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Region } from '@interfaces/domain';
import { List } from 'immutable';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrl: './region.component.scss',
  imports: [CommonModule, RouterModule, BreadcrumbsComponent],
  host: { class: 'block h-full w-full p-4' },
  standalone: true,
})
export class RegionComponent implements IObserverSafe {
  private readonly _ngDestroy$: Subject<void>;
  private _dataSource: Region | undefined;
  private _breadcrumbs: List<Breadcrumb> | undefined;

  get dataSource(): Region | undefined {
    return this._dataSource;
  }

  get breadcrumbs(): List<Breadcrumb> | undefined {
    return this._breadcrumbs;
  }

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _helper: HelperService
  ) {
    this._ngDestroy$ = new Subject();
  }

  ngOnInit(): void {
    this._initData();
  }

  ngOnDestroy(): void {
    this._ngDestroy$.next();
  }

  private _onPageData({ dataSource, breadcrumbs }: Data): void {
    this._dataSource = dataSource;
    this._breadcrumbs = breadcrumbs;
  }

  private _initData(): void {
    const { observableRegistrarFactory } = this._helper.rxjs;
    const { data } = this._route;

    const register = observableRegistrarFactory.call(this, this._ngDestroy$);

    register(data, this._onPageData);
  }
}
