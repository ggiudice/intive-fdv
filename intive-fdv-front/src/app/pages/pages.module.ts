import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { UsersModule } from './users/users.module';
import { SharedModule } from '../shared/shared.module';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ProductModule } from './products/product.module';
import { ShoppingModule } from './shopping/shopping.module';

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    PagesRoutingModule,
    UsersModule,
    SharedModule,
    ProductModule,
    ShoppingModule
  ]
})
export class PagesModule { }
