import { NamedResource } from '@interfaces/domain/utilities';
import { RecordOf } from 'immutable';

export interface IPokemonAbility {
  isHidden: boolean;
  slot: number;
  ability: NamedResource;
}

export type PokemonAbility = RecordOf<IPokemonAbility>;
