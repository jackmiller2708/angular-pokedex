import { RecordOf } from 'immutable';

export interface IPokemonSprites {
  frontDefault?: string;
  frontShiny?: string;
  frontFemale?: string;
  frontShinyFemale?: string;
  backDefault?: string;
  backShiny?: string;
  backFemale?: string;
  backShinyFemale?: string;
}

export type PokemonSprites = RecordOf<IPokemonSprites>;
