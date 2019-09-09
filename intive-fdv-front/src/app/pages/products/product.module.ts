import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

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
    SharedModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
