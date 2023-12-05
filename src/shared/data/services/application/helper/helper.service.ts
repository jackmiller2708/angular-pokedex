import { EnumHelper, HttpClientHelper, RxJSHelper } from './classes';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HelperService {
  private readonly _http: Readonly<HttpClientHelper>;
  private readonly _rxjs: Readonly<RxJSHelper>;
  private readonly _enum: Readonly<EnumHelper>;

  get http(): Readonly<HttpClientHelper> {
    return this._http;
  }

  get rxjs(): Readonly<RxJSHelper> {
    return this._rxjs;
  }

  get enum(): Readonly<EnumHelper> {
    return this._enum;
  }

  constructor() {
    this._http = Object.freeze(new HttpClientHelper());
    this._rxjs = Object.freeze(new RxJSHelper());
    this._enum = Object.freeze(new EnumHelper());
  }

  getNumDigits(num: number): number {
    return (Math.log(num) * Math.LOG10E + 1) | 0;
  }
}
