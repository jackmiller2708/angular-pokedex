import { RouterModule, Routes } from '@angular/router';
import { unnamedSegmentGuard } from '@app/guards';
import { HomeComponent } from './home/home.component';
import { homeResolver } from './home/resolver/home.resolver';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: { dataSource: homeResolver },
  },
  {
    path: '-',
    loadChildren: () =>
      import('./list/list-routing.module').then((m) => m.ListRoutingModule),
    canMatch: [unnamedSegmentGuard],
  },
  {
    path: 'regions',
    loadComponent: () =>
      import('./resources/resources.component').then(
        (c) => c.ResourcesComponent
      ),
  },
  {
    path: 'pokedexes',
    loadComponent: () =>
      import('./resources/resources.component').then(
        (c) => c.ResourcesComponent
      ),
  },
  {
    path: 'pokemons',
    loadComponent: () =>
      import('./resources/resources.component').then(
        (c) => c.ResourcesComponent
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
