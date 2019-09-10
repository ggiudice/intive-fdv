import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LocaleService } from '@cdc/shared/services';
import { ProductService } from '@cdc/products/services';
import { Product } from '@cdc/products/models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: Product[];
  subscription: Subscription;
  subscriptionLocale: Subscription;

  constructor(
    private localeService: LocaleService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.addSbscritions();
    this.getProducts();
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
    this.subscriptionLocale && this.subscriptionLocale.unsubscribe();
  }

  clearProducts(): void {
    this.productService.deleteAllProducts();
  }

  private getProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  private addSbscritions() {
    this.subscription = this.productService.productListChanged.subscribe(products => this.products = products);
    this.subscriptionLocale = this.localeService.localeChanged.subscribe(() => this.getProducts());
  }
}
