import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components';
import { regionResolver } from './components/region/resolver/region.resolver';
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
    resolve: { dataSource: regionResolver }
  },
  {
    path: ':region/:pokedex',
    loadComponent: () =>
      import('./components/pokedex/pokedex.component').then(
        (c) => c.PokedexComponent
      ),
  },
  {
    path: ':region/:pokedex/:pokemon',
    loadComponent: () =>
      import('./components/pokemon/pokemon.component').then(
        (c) => c.PokemonComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
