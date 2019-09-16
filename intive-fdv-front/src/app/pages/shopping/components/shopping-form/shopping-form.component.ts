import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CustomValidators } from 'ngx-custom-validators';

import { ShoppingService, ModalService } from '@cdc/shopping/services';
import { Detail } from '@cdc/shopping/models';
import { Product } from '@cdc/products/models';

@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.scss']
})
export class ShoppingFormComponent implements OnInit, OnDestroy {

  @ViewChild('modal', {static: false}) modal;
  modalRef: BsModalRef;

  detail: Detail;
  shoppingForm: FormGroup;
  submitted = false;
  subscription: Subscription;
  subscriptionLocale: Subscription;

  constructor(
    private fb: FormBuilder,
    private bsModalService: BsModalService,
    private shoppingService: ShoppingService,
    private modalService: ModalService
  ) { }

  ngOnInit() {

    this.subscription = this.modalService.modalDetailProductChanged.subscribe((productOrDetail: any) => {
      if (productOrDetail instanceof Product) {
        this.detail = new Detail();
        this.detail.product = productOrDetail;
      }

      if (productOrDetail instanceof Detail) {
        this.detail = this.shoppingService.getDetailById(productOrDetail.id);
      }

      this.shoppingForm = this.buildForm(this.detail);

      const config = {
        keyboard: false,
        backdrop: true,
        ignoreBackdropClick: true
      };
      this.modalRef = this.bsModalService.show(this.modal, config);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.close();
  }

  save(): void {

    if (this.shoppingForm.valid === false) {
      this.submitted = true;
      return;
    }

    // TODO IMPORTANTE revisar estas firmas no tiene sentido
    if (this.detail.id) {
      this.shoppingService.updateProductAtShopping(this.shoppingForm.value.quantity,  this.detail);
    } else {
      this.shoppingService.addProductAtShopping(this.shoppingForm.value.quantity, this.detail.product);
    }

    this.shoppingForm.reset();
    this.close();
  }

  close(): void {
    if (this.modalRef) {
      this.modalRef.hide();
    }
  }

  private buildForm(detail: Detail): FormGroup {
    const shoppingForm = this.fb.group({
      quantity: [detail && detail.quantity, [Validators.required, CustomValidators.number, Validators.min(1)]]
    });

    return shoppingForm;
  }
}
