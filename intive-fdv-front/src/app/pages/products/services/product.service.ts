import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';


import { StorageService } from '@cdc/shared/services';
import { Constants } from '@cdc/shared/constants';
import { Product } from '@cdc/products/models';

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
    const products: Product[] = productsStorage ? JSON.parse(productsStorage) : [];
    return of(products);
  }

  getProduct(id: number): Observable<Product> {
    const productsStorage = this.storageService.getItem(Constants.STORAGE_PRODUCTS);
    const products: Product[] = productsStorage ? JSON.parse(productsStorage) : [];
    const product = products.find(productSearch => productSearch.id === Number(id));
    return of(product);
  }

  public saveProduct(product: Product): void {
    const productsStorage = this.storageService.getItem(Constants.STORAGE_PRODUCTS);
    const productList: Product[] = productsStorage ? JSON.parse(productsStorage) : [];

    if (product.id === undefined || product.id === null) {
      product.id = Math.floor((Math.random() * 10000) + 1);
      productList.push(product);
    } else {
      for (let userIndex = 0; userIndex < productList.length; userIndex++) {
        if (productList[userIndex].id === product.id) {
          productList[userIndex] = product;
        }
      }
    }

    const productsString = JSON.stringify(productList);
    this.storageService.setItem(Constants.STORAGE_PRODUCTS, productsString);
    this.productListChanged.next(productList);
  }

  public deleteAllProducts(): void {
    this.storageService.removeItem(Constants.STORAGE_PRODUCTS);
    this.productListChanged.next([]);
  }
}
