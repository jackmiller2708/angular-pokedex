import { INamedAPIResource } from '@interfaces/dtos/utilities';

/**
 * Some Pokémon may appear in one of multiple, visually different forms.
 * These differences are purely cosmetic. For variations within a Pokémon
 * species, which do differ in more than just visuals, the `Pokémon`
 * entity is used to represent such a variety.
 */
export interface IPokemonFormType {
  /**
   * The order the Pokémon's types are listed in.
   */
  slot: number;

  /**
   * The type the referenced Form has.
   */
  type: INamedAPIResource;
}
