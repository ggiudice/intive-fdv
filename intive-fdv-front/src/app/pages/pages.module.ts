import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { UsersModule } from './users/users.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    UsersModule,
    SharedModule
  ]
})
export class PagesModule { }
