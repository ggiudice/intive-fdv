import { Product } from '@cdc/products/models';

export class Detail {
    id: number;
    quantity: number;
    product: Product;
    total: number;

    getDetailByAny(detail: any): Detail {
        this.id = detail.id;
        this.quantity = detail.quantity;
        this.product = new Product().getProductByAny(detail.product);
        this.total = detail.total;
        return this;
    }
}
