import { EnumHelper, HttpClientHelper, RouterHelper, RxJSHelper } from './classes';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HelperService {
  private readonly _http: Readonly<HttpClientHelper>;
  private readonly _rxjs: Readonly<RxJSHelper>;
  private readonly _enum: Readonly<EnumHelper>;
  private readonly _router: Readonly<RouterHelper>;

  get http(): Readonly<HttpClientHelper> {
    return this._http;
  }

  get rxjs(): Readonly<RxJSHelper> {
    return this._rxjs;
  }

  get enum(): Readonly<EnumHelper> {
    return this._enum;
  }

  get router(): Readonly<RouterHelper> {
    return this._router;
  }

  constructor() {
    this._http = Object.freeze(new HttpClientHelper());
    this._rxjs = Object.freeze(new RxJSHelper());
    this._enum = Object.freeze(new EnumHelper());
    this._router = Object.freeze(new RouterHelper());
  }

  getNumDigits(num: number): number {
    return (Math.log(num) * Math.LOG10E + 1) | 0;
  }

  generateGUID(): string {
    const S4 = function (): string {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };

    return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
  }
}
