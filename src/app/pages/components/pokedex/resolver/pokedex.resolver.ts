import { ResolveFn } from '@angular/router';

export const pokedexResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
