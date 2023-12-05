import { CanActivateFn } from '@angular/router';

export const pokedexParamGuard: CanActivateFn = (route, router) => {
  return true;
};
