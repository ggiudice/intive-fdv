import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule as ModalModuleBootstrap } from 'ngx-bootstrap/modal';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './shopping.component';
import { ShoppingFormComponent, ShoppingListComponent } from '@cdc/shopping/components';

@NgModule({
  declarations: [ShoppingComponent, ShoppingFormComponent, ShoppingListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    ShoppingRoutingModule,
    ModalModuleBootstrap.forRoot()
  ],
  exports: [
    ShoppingFormComponent,
    ShoppingListComponent
  ]
})
export class ShoppingModule { }
