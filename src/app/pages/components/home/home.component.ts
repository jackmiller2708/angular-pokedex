import { ActivatedRoute, Data, RouterModule } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { IObserverSafe, ResourceList } from '@interfaces/application';
import { Component, HostBinding } from '@angular/core';
import { RegionCardComponent } from '@components/molecules';
import { ListComponent } from '@components/atoms';
import { HelperService } from '@services/application';
import { Subject } from 'rxjs';
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
export class HomeComponent implements IObserverSafe {
  private readonly _ngDestroy$: Subject<void>;
  private _dataSource: ResourceList<Region> | undefined;

  @HostBinding('class')
  private get _classes(): string[] {
    return [
      'relative',
      'w-full',
      'h-full',
      'flex',
      'flex-col',
      'overflow-hidden',
    ];
  }

  get dataSource(): ResourceList<Region> | undefined {
    return this._dataSource;
  }

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
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

  private _onPageData({ dataSource }: Data): void {
    this._dataSource = dataSource;
  }

  private _initData(): void {
    const { observableRegistrarFactory } = this._helper.rxjs;
    const { data } = this._activatedRoute;

    const register = observableRegistrarFactory.call(this, this._ngDestroy$);

    register(data, this._onPageData);
  }
}
