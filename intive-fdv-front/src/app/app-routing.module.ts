import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

// TODO
const routes: Routes = [
  //{ path: 'd', component: PagesComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: PagesComponent },
  //TODO: Hacer andar esto lazy
  //  { path: '', loadChildren: './pages/pages.module#PagesModule' },
  //{ path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  // TODO: ver rapido de hacer una notFound
 // { path: '**', loadChildren: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        useHash: true,
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
