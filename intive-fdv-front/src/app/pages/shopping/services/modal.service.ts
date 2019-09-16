import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Product } from '@cdc/products/models';
import { Detail } from '@cdc/shopping/models';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modalDetailProductChanged = new Subject<any>();

  constructor() { }

  showDetailOrProduct(productOrDetail: Product | Detail) {
    this.modalDetailProductChanged.next(productOrDetail);
  }
}
