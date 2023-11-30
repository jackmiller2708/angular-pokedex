import { HttpClientHelper, RxJSHelper } from './classes';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HelperService {
  private readonly _http: Readonly<HttpClientHelper>;
  private readonly _rxjs: Readonly<RxJSHelper>;

  get http(): Readonly<HttpClientHelper> {
    return this._http;
  }

  get rxjs(): Readonly<RxJSHelper> {
    return this._rxjs;
  }

  constructor() {
    this._http = Object.freeze(new HttpClientHelper());
    this._rxjs = Object.freeze(new RxJSHelper());
  }
}
