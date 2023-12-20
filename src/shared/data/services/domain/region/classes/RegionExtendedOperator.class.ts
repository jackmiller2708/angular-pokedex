import { UnaryFunction, Observable, catchError, of, forkJoin, pipe, tap, switchMap, map } from "rxjs";
import { Pokedex, Region as TRegion } from '@interfaces/domain';
import { PokedexService } from "@services/domain/pokedex/pokedex.service";
import { NamedResource } from "@interfaces/domain/utilities";
import { HelperService } from "@services/application";
import { List } from "immutable";

export class RegionExtendedOperator {
  constructor(
    private readonly _pokedexService: PokedexService,
    private readonly _helper: HelperService
  ) {}

  extendPokedexEntries(): UnaryFunction<Observable<TRegion>, Observable<TRegion>> {
    let savedRegion: TRegion;

    const saveRegion = (data: TRegion) => {
      savedRegion = data;
    };

    const extendToPokedex = (data: TRegion) => {
      const entryToPokedex = ({
        name,
      }: NamedResource): Observable<Pokedex | undefined> => {
        return this._pokedexService
          .getResource(name)
          .pipe(catchError(() => of(undefined)));
      };

      return forkJoin(
        (data.pokedexes as List<NamedResource>).map(entryToPokedex).toArray()
      );
    };

    const mapPokedexList = (mixedList: (Pokedex | undefined)[]) => {
      return savedRegion.set(
        'pokedexes',
        List(mixedList.filter(this._helper.takeMeaningfulValue))
      );
    };

    return pipe(
      tap(saveRegion),
      switchMap(extendToPokedex),
      map(mapPokedexList)
    );
  }
}