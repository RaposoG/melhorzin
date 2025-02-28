import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'

export const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'infra',
    loadChildren: () =>
      import('./pages/infra/infra.routes').then((m) => m.INFRA_ROUTES),
  },
]
