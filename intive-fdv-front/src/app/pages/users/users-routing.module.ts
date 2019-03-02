import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserFormComponent } from './components/user-form/user-form.component';
import { UsersComponent } from './users.component';

// TODO
const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  // TODO: esto dependera como hacemos el principal de usres. porque parece que siempre se debe
  // ver todo
  { path: 'users/:id', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
