import { ResolveFn } from '@angular/router';

export const pokemonResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
