import { Observable, UnaryFunction, forkJoin, map, pipe, switchMap, tap } from 'rxjs';
import { INamedAPIResource, INamedAPIResourceList } from '@interfaces/dtos';
import { ResourceListFactory } from '@models/application/utilities';
import { ResourceList } from '@interfaces/application/utilities';
import { List } from 'immutable';

export class HttpClientHelper {
  namedResourceToResource<T>(mapper: (data: INamedAPIResource) => Observable<T>): UnaryFunction<Observable<INamedAPIResourceList>, Observable<ResourceList<T>>> {
    const _resourceMapper = ({ results }: INamedAPIResourceList): Observable<T[]> => forkJoin(results.map(mapper));
    const _resourceListMapper = (results: T[]): ResourceList<T> => ResourceListFactory<T>()({ count: _count, results: List(results) });

    let _count = 0;

    return pipe(
      tap(({ count }: INamedAPIResourceList): void => void (_count = count)),
      switchMap(_resourceMapper),
      map(_resourceListMapper)
    );
  }
}
