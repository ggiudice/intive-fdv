import { Injectable } from '@angular/core';
import { Constants } from '@cdc/shared/constants';
import { isNullOrUndefined } from 'util';

import { Shopping, Detail } from '@cdc/shopping/models';
import { Product } from '@cdc/products/models';
import { StorageService } from '@cdc/shared/services';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(
    private storageService: StorageService
  ) {
    this.initDB();
  }

  public getShoppingSession(): Shopping {
    const shoppingStorage = this.storageService.getItem(Constants.STORAGE_SHOPPING);
    const shoppingAny: any = JSON.parse(shoppingStorage);
    const shopping: Shopping = new Shopping().getShoppingByAny(shoppingAny);
    return shopping;
  }

  public deleteShopping(): void {
    this.storageService.removeItem(Constants.STORAGE_SHOPPING);
  }

  public getDetailById(detailId: number): Detail {
    const shopping = this.getShoppingSession();
    const detail = shopping.details.find(detailSearch => detailSearch.id === detailId);
    return detail;
  }

  // TODO si en realidad deberia venir el parametro el producto, y se debe buscar entre los detalles ese producto y aho actualizar
  public updateProductAtShopping(quantity: number, detail: Detail): void {
    const shopping = this.getShoppingSession();
    const index = shopping.details.findIndex((detailItem) => detailItem.id === detail.id);
    detail.quantity = quantity;
    shopping.details[index] = detail;

    const shoppindCostUpdate = this.updateCostShopping(shopping);
    this.udpateShopping(shoppindCostUpdate);
  }

  public addProductAtShopping(quantity: number, product: Product): void {
    const shopping = this.getShoppingSession();

    const productFound = shopping.details.find(detailItem => detailItem.product.id === product.id);
    if (productFound) {
      return;
    }

    const detail = new Detail();
    detail.id = shopping.details.length + 1;
    detail.product = product;
    detail.quantity = quantity;
    detail.total = product.price * quantity;
    shopping.details.push(detail);

    const shoppindCostUpdate = this.updateCostShopping(shopping);
    this.udpateShopping(shoppindCostUpdate);
  }

  public removeProductAtShopping(detailId: number): void {
    const shopping = this.getShoppingSession();
    const index = shopping.details.findIndex((detailItem) => detailItem.id === detailId);

    shopping.details.splice(index, 1);

    const shoppindCostUpdate = this.updateCostShopping(shopping);
    this.udpateShopping(shoppindCostUpdate);
  }

  private updateCostShopping(shopping: Shopping): Shopping {
    const totalDetail = shopping.details.reduce((prev: number, cur: Detail) => prev + cur.total, 0);
    shopping.subtotal = totalDetail;
    shopping.subtotalIva = (totalDetail * 21 / 100);
    shopping.total = shopping.subtotal + shopping.subtotalIva;

    return shopping;
  }

  private udpateShopping(shopping: Shopping): void {
    const shoppingString = JSON.stringify(shopping);
    this.storageService.setItem(Constants.STORAGE_SHOPPING, shoppingString);
  }

  private initDB(): void {
    const shoppingStorage = this.storageService.getItem(Constants.STORAGE_SHOPPING);
    const shoppingAny: any = JSON.parse(shoppingStorage);
    const shopping: Shopping = shoppingAny ? new Shopping().getShoppingByAny(shoppingAny) : null;

    const today = new Date();
    let dateShopping = null;

    if (!isNullOrUndefined(shopping)) {
      dateShopping = new Date(shopping.date);
    }

    if (isNullOrUndefined(shopping) || dateShopping.getDate() !== today.getDate()) {
      const shoppingNew = new Shopping();
      shoppingNew.date = new Date();
      shoppingNew.subtotal = 0;
      shoppingNew.subtotalIva = 0;
      shoppingNew.total = 0;
      shoppingNew.details = new Array<Detail>();
      this.udpateShopping(shoppingNew);
    }
  }
}
