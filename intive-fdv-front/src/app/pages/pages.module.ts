import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersModule } from './users/users.module';
import { SharedModule } from '../shared/shared.module';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    UsersModule,
    SharedModule,
    ProductModule
  ]
})
export class PagesModule { }
