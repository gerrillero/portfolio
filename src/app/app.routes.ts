import { RouterModule, Routes } from '@angular/router';

import {
  PortafolioComponent,
  PortfolioItemComponent,
  AboutComponent
} from './components/index.paginas';

const app_routes: Routes = [
  { path: '', component: PortafolioComponent },
  { path: 'portfolio-item', component:  PortfolioItemComponent},
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });