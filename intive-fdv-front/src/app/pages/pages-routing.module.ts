import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { UsersComponent } from './users/users.component';

// TODO
const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'users', component: UsersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
