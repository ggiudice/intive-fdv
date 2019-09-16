import { Detail } from './detail.model';

export class Shopping {
    id: number;
    date: Date;
    details: Detail[];
    subtotal: number;
    subtotalIva: number;
    total: number;

    getShoppingByAny(shopping: any): Shopping {
        this.id = shopping.id;
        this.date = new Date(shopping.date);
        this.details = [];
        if (shopping.details && shopping.details.length > 0) {
            this.details = shopping.details.map(detail => new Detail().getDetailByAny(detail));
        }
        this.subtotal = shopping.subtotal;
        this.subtotalIva = shopping.subtotalIva;
        this.total = shopping.total;
        return this;
    }
}
