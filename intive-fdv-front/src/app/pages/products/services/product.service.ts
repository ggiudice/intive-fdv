import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

import { StorageService } from '@cdc/shared/services';
import { Constants } from '@cdc/shared/constants';
import { Product } from '@cdc/products/models';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productListChanged = new Subject<Product[]>();

  constructor(
    private storageService: StorageService
  ) { }

  getProducts(): Observable<Product[]> {
    const productsStorage = this.storageService.getItem(Constants.STORAGE_PRODUCTS);
    const productsAny: [] = productsStorage ? JSON.parse(productsStorage) : [];

    const products: Product[] = productsAny.map(productAny => new Product().getProductByAny(productAny));
    return of(products);
  }

  getProduct(id: number): Observable<Product> {
    const productsStorage = this.storageService.getItem(Constants.STORAGE_PRODUCTS);
    const productsAny: [] = productsStorage ? JSON.parse(productsStorage) : [];
    const products: Product[] = productsAny.map(productAny => new Product().getProductByAny(productAny));

    const product = products.find(productSearch => productSearch.id === Number(id));
    return of(product);
  }

  public saveProduct(product: Product): void {
    const productsStorage = this.storageService.getItem(Constants.STORAGE_PRODUCTS);
    const productsAny: [] = productsStorage ? JSON.parse(productsStorage) : [];
    const products: Product[] = productsAny.map(productAny => new Product().getProductByAny(productAny));

    if (isNullOrUndefined(product.id)) {
      product.id = Math.floor((Math.random() * 10000) + 1);
      products.push(product);
    } else {
      // TODO merjorar esto en user, prouct
      for (let productIndex = 0; productIndex < products.length; productIndex++) {
        if (products[productIndex].id === product.id) {
          products[productIndex] = product;
        }
      }
    }

    const productsString = JSON.stringify(products);
    this.storageService.setItem(Constants.STORAGE_PRODUCTS, productsString);
    this.productListChanged.next(products);
  }

  public deleteAllProducts(): void {
    this.storageService.removeItem(Constants.STORAGE_PRODUCTS);
    this.productListChanged.next([]);
  }
}
