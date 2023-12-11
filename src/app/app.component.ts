import { HeaderComponent, LinkComponent, SearchInputComponent } from '@components/atoms';
import { Router, RouterOutlet } from '@angular/router';
import { AppStateService } from './services';
import { IObserverSafe } from '@interfaces/application';
import { HelperService } from '@services/application';
import { CommonModule } from '@angular/common';
import { RouterEvent } from '@models/application/utilities';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';

const imports = [
  CommonModule,
  RouterOutlet,
  HeaderComponent,
  SearchInputComponent,
  LinkComponent,
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports,
  providers: [AppStateService],
  host: {
    class: 'w-screen h-screen flex flex-col overflow-hidden',
  },
  standalone: true,
})
export class AppComponent implements IObserverSafe {
  private readonly _ngDestroy$: Subject<void>;

  constructor(
    private readonly _appStateService: AppStateService,
    private readonly _helperService: HelperService,
    private readonly _router: Router
  ) {
    this._ngDestroy$ = new Subject();
  }

  ngOnInit(): void {
    this._initData();
  }

  ngOnDestroy(): void {
    this._ngDestroy$.next();
  }

  private _initData(): void {
    const { observableRegistrarFactory } = this._helperService.rxjs;
    const { events } = this._router;

    const register = observableRegistrarFactory.call(this, this._ngDestroy$);

    register(events, this._onRouterEvents);
  }

  private _onRouterEvents(event: RouterEvent) {
    
  }
}
