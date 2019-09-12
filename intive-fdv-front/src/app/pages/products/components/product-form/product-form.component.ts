import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomValidators } from 'ngx-custom-validators';

import { LocaleService } from '@cdc/shared/services';
import { ProductService } from '@cdc/products/services';
import { Product } from '@cdc/products/models';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  odyc  = 2
  productForm: FormGroup;
  submitted = false;
  idParams: number;
  isError = false;
  localeService: LocaleService;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    localeService: LocaleService
  ) {
    this.localeService = localeService;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.idParams = +paramMap.get('id');
      this.productForm = this.createForm(this.idParams);
    });
  }

  save(): void {

    if (this.productForm.valid === false) {
      this.submitted = true;
      return;
    }

    const product = this.converterFormProductToProduct();
    this.productService.saveProduct(product);
    this.clearFormProduct();
  }

  clearFormProduct() {
    this.isError = false;
    this.idParams = null;
    this.submitted = false;
    this.router.navigate(['/products']);
    this.productForm.reset();
  }

  private createForm(id: number): FormGroup {

    let product = new Product();
    if (id !== 0 && isNaN(id) === false) {
      this.productService.getProduct(id).subscribe((productFound: Product) => product = productFound);
    }

    const productForm = this.fb.group({
      name: [product && product.name, [Validators.required, Validators.maxLength(50)]],
      description: [product && product.description, [Validators.required, Validators.maxLength(50)]],
      price: [product && product.price, [Validators.required, Validators.min(0), CustomValidators.number]]
    });

    return productForm;
  }

  private converterFormProductToProduct(): Product {
    const product = new Product();
    product.id = this.idParams !== 0 ? this.idParams : null;
    product.name = this.productForm.value.name;
    product.description = this.productForm.value.description;
    product.price = Number(this.productForm.value.price);

    return product;
  }

}
