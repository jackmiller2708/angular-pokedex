import { pokedexParamGuard, regionParamGuard } from '@app/guards';
import { RouterModule, Routes } from '@angular/router';
import { breadcumbResolver } from '@app/resolvers';
import { pokemonResolver } from './components/pokemon/resolver/pokemon.resolver';
import { pokedexResolver } from './components/pokedex/resolver/pokedex.resolver';
import { regionResolver } from './components/region/resolver/region.resolver';
import { HomeComponent } from './components';
import { homeResolver } from './components/home/resolver/home.resolver';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: { dataSource: homeResolver },
  },
  {
    path: ':region',
    loadComponent: () =>
      import('./components/region/region.component').then(
        (c) => c.RegionComponent
      ),
    resolve: {
      dataSource: regionResolver,
      breadcrumbs: breadcumbResolver,
    },
  },
  {
    path: ':region/:pokedex',
    loadComponent: () =>
      import('./components/pokedex/pokedex.component').then(
        (c) => c.PokedexComponent
      ),
    canActivate: [regionParamGuard],
    resolve: {
      dataSource: pokedexResolver,
      breadcrumbs: breadcumbResolver,
    },
  },
  {
    path: ':region/:pokedex/:pokemon',
    loadComponent: () =>
      import('./components/pokemon/pokemon.component').then(
        (c) => c.PokemonComponent
      ),
    canActivate: [regionParamGuard, pokedexParamGuard],
    resolve: {
      dataSource: pokemonResolver,
      breadcrumbs: breadcumbResolver,
    },
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
