import { Observable, takeUntil, pipe, filter, UnaryFunction } from 'rxjs';
import { ObserverNextHandler, ObservableRegistrar } from '../interfaces';

export class RxJSHelper {
  private readonly _operators: Readonly<CustomOperator>;

  get operators(): Readonly<CustomOperator> {
    return this._operators;
  }

  constructor() {
    this._operators = Object.freeze(new CustomOperator());
  }

  /**
   * This is a factory function that will generate a register function which
   * when used with an observable will automatically subscribes and then unsubscribes
   * when the component is destroyed.
   * @param this The component instance.
   * @param onDestroy$ The onDestroy$ signifier.
   * @returns A register function.
   */
  observableRegistrarFactory(this: ThisType<any>, onDestroy$: Observable<void>): ObservableRegistrar {
    if (this instanceof RxJSHelper) {
      throw 'Invalid method invocation';
    }

    return <T>(observable$: Observable<T>, handler: ObserverNextHandler<T>): void => {
      observable$.pipe(takeUntil(onDestroy$)).subscribe(handler.bind(this));
    };
  }
}

class CustomOperator {
  takeMeaningfulValue<T>(): UnaryFunction<Observable<T | undefined>, Observable<T>> {
    return pipe<Observable<T | undefined>, Observable<T>>(
      filter((value): value is T => !!value)
    );
  }
}
