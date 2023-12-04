import { Observable, UnaryFunction, forkJoin, map, pipe, switchMap, tap, catchError, of } from 'rxjs';
import { INamedAPIResource, INamedAPIResourceList } from '@interfaces/dtos';
import { responseErrorFactory } from '@models/application/errors/ResponseErrorFactory.model';
import { ResourceListFactory } from '@models/application/utilities';
import { HttpErrorResponse } from '@angular/common/http';
import { IResponseError } from '@interfaces/application/errors';
import { List, RecordOf } from 'immutable';
import { ResourceList } from '@interfaces/application/utilities';

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

  handleErrorResponse<T>(): UnaryFunction<Observable<T>, Observable<T>> {
    return pipe(
      catchError((error: HttpErrorResponse): never => {
        throw responseErrorFactory(error.status);
      })
    );
  }
}
