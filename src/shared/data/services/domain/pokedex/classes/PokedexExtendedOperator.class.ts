import { UnaryFunction, Observable, catchError, of, forkJoin, pipe, tap, switchMap, map } from "rxjs";
import { Pokemon, Pokedex as TPokedex } from '@interfaces/domain';
import { PokemonService } from "@services/domain/pokemon/pokemon.service";
import { HelperService } from "@services/application";
import { PokemonEntry } from "@interfaces/domain/pokedex";
import { List, Map } from "immutable";

export class PokedexExtendedOperator {
  constructor(
    private readonly _pokemonService: PokemonService,
    private readonly _helper: HelperService
  ) {}

  extendPokemonEntries(): UnaryFunction<Observable<TPokedex>, Observable<TPokedex>> {
    let savedPokedex: TPokedex;
    let pokemonEntries = Map<string, number>();

    const savePokedex = (data: TPokedex) => {
      savedPokedex = data;
    };

    const extendToPokemon = (data: TPokedex) => {
      const entryToPokemon = ({
        pokemonSpecies,
        entryNumber,
      }: PokemonEntry): Observable<Pokemon | undefined> => {
        pokemonEntries = pokemonEntries.set(pokemonSpecies.name, entryNumber);

        return this._pokemonService
          .getResource(pokemonSpecies.name)
          .pipe(catchError(() => of(undefined)));
      };

      return forkJoin(
        (data.pokemonEntries as List<PokemonEntry>)
          .map(entryToPokemon)
          .toArray()
      );
    };

    const mapPokemonList = (mixedList: (Pokemon | undefined)[]) => {
      const pokemonList = mixedList
        .filter(this._helper.takeMeaningfulValue)
        .map((pokemon) =>
          pokemon.set('pokedexEntry', pokemonEntries.get(pokemon.name, 0))
        );

      return savedPokedex.set('pokemonEntries', List(pokemonList));
    };

    return pipe(
      tap(savePokedex),
      switchMap(extendToPokemon),
      map(mapPokemonList)
    );
  }
}