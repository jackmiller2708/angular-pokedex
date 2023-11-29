import { IPokemonHeldItemVersion } from './IPokemonHeldItemVersion.interface';
import { INamedAPIResource } from '@interfaces/dtos/utilities';

export interface IPokemonHeldItem {
  item: INamedAPIResource;
  version_details: IPokemonHeldItemVersion;
}
