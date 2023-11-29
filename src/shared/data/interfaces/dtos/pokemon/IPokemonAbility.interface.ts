import { INamedAPIResource } from '@interfaces/dtos/utilities';

export interface IPokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: INamedAPIResource;
}
