import { RouterModule, Routes } from '@angular/router';

import {
  PortafolioComponent,
  PortfolioItemComponent,
  AboutComponent,
  SearchComponent
} from './components/index.paginas';

const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'portfolio-item/:id', component:  PortfolioItemComponent},
  { path: 'about', component: AboutComponent },
  { path: 'search/:term', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });
