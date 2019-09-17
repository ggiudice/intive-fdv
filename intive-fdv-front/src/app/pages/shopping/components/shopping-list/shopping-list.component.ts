import { Component, OnInit } from '@angular/core';

import { Shopping, Detail } from '@cdc/shopping/models';
import { ShoppingService, ModalService } from '@cdc/shopping/services';

// TODO
/*
- Faltan algunos labels para internalizar
- Falta poner fontawesone
- Armar mejor el estilado del listado en la parte de totales
- falta armar mejor el estilado e internalizar en la parte de formulario de comprar

*/
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  shopping: Shopping;
  constructor(
    private modalService: ModalService,
    private shoppingService: ShoppingService
  ) { }

  ngOnInit() {
    this.shopping = this.shoppingService.getShoppingSession();
  }

  clearShopping() {
    // TODO HACER UN MODAL DE CONFIRAMCION DE DELETE
    this.shoppingService.deleteShopping();
  }

  showDetail(datail: Detail) {
    this.modalService.showDetailOrProduct(datail);
  }

  deleteDetail(detailId: number) {
    // TODO HACER UN MODAL DE CONFIRAMCION DE DELETE
    this.shoppingService.removeProductAtShopping(detailId);
  }

}
