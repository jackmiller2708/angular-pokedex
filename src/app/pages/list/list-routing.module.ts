import { pokedexParamGuard, regionParamGuard } from '@app/guards';
import { RouterModule, Routes } from '@angular/router';
import { breadcrumbsResolver } from '@app/resolvers';
import { pokemonResolver } from './pokemon/resolver/pokemon.resolver';
import { pokedexResolver } from './pokedex/resolver/pokedex.resolver';
import { regionResolver } from './region/resolver/region.resolver';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: ':region',
    loadComponent: () =>
      import('./region/region.component').then((c) => c.RegionComponent),
    resolve: {
      dataSource: regionResolver,
      breadcrumbs: breadcrumbsResolver,
    },
  },
  {
    path: ':region/:pokedex',
    loadComponent: () =>
      import('./pokedex/pokedex.component').then((c) => c.PokedexComponent),
    canActivate: [regionParamGuard],
    resolve: {
      dataSource: pokedexResolver,
      breadcrumbs: breadcrumbsResolver,
    },
  },
  {
    path: ':region/:pokedex/:pokemon',
    loadComponent: () =>
      import('./pokemon/pokemon.component').then((c) => c.PokemonComponent),
    canActivate: [regionParamGuard, pokedexParamGuard],
    resolve: {
      dataSource: pokemonResolver,
      breadcrumbs: breadcrumbsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRoutingModule {}
