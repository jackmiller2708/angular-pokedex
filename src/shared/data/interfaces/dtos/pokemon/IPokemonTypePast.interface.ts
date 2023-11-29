import { INamedAPIResource } from '@interfaces/dtos/utilities';
import { IPokemonType } from './IPokemonType.interface';

export interface IPokemonTypePast {
  generation: INamedAPIResource;
  types: IPokemonType[];
}
