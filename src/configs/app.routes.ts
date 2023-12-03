import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/pages/page-routing.module').then(
        (m) => m.PageRoutingModule
      ),
  },
];
