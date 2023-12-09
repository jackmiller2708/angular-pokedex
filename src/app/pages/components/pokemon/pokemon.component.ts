import { Breadcrumb, IObserverSafe } from '@interfaces/application';
import { BreadcrumbsComponent } from '@components/molecules';
import { ActivatedRoute, Data } from '@angular/router';
import { HelperService } from '@services/application';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { List } from 'immutable';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, BreadcrumbsComponent],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss',
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
