import { ObserverNextHandler } from './IObserverNextHandler.interface';
import { Observable } from 'rxjs';

export type ObservableRegistrar = <T>(
  observable$: Observable<T>,
  handler: ObserverNextHandler<T>
) => void;
