import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Breadcrumb, IObserverSafe } from '@interfaces/application';
import { BreadcrumbsComponent } from '@components/molecules';
import { ActivatedRoute, Data } from '@angular/router';
import { HelperService } from '@services/application';
import { Component } from '@angular/core';
import { List } from 'immutable';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss',
  imports: [CommonModule, BreadcrumbsComponent, NgOptimizedImage],
  host: { class: 'flex flex-col h-full w-full' },
  standalone: true,
})
export class PokemonComponent implements IObserverSafe {
  private readonly _ngDestroy$: Subject<void>;
  private _breadcrumbs: List<Breadcrumb> | undefined;

  get breadcrumbs(): List<Breadcrumb> | undefined {
    return this._breadcrumbs;
  }

  constructor(
    private readonly _helper: HelperService,
    private readonly _route: ActivatedRoute
  ) {
    this._ngDestroy$ = new Subject();
  }

  ngOnInit(): void {
    this._initData();
  }

  ngOnDestroy(): void {
    this._ngDestroy$.next();
  }

  private _onPageData({ breadcrumbs }: Data): void {
    this._breadcrumbs = breadcrumbs;
  }

  private _initData(): void {
    const { observableRegistrarFactory } = this._helper.rxjs;
    const { data } = this._route;

    const register = observableRegistrarFactory.call(this, this._ngDestroy$);

    register(data, this._onPageData);
  }
}
