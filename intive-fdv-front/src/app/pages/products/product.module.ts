import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingModule } from '../shopping/shopping.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

import {
  ProductFormComponent,
  ProductListComponent
} from '@cdc/products/components';
import { ProductComponent } from './product.component';



@NgModule({
  declarations: [
    ProductFormComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    PipesModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    ShoppingModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
