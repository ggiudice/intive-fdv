import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: PagesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        useHash: true
        //preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
