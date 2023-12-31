export interface IPokemonSprites {
  front_default?: string;
  front_shiny?: string;
  front_female?: string;
  front_shiny_female?: string;
  back_default?: string;
  back_shiny?: string;
  back_female?: string;
  back_shiny_female?: string;
  other: IPokemonSpritesExtended;
}

interface IPokemonSpritesExtended {
  "official-artwork": Omit<IPokemonSprites, 'other'>;
}
