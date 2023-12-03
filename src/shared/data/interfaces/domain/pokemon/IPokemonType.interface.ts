import { NamedResource } from '@interfaces/domain/utilities';
import { IHasAssets } from '@interfaces/application/assets';
import { RecordOf } from 'immutable';

export interface IPokemonType extends IHasAssets {
  slot: number;
  type: NamedResource;
}

export type PokemonType = RecordOf<IPokemonType>;
