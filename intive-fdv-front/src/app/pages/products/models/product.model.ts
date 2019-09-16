export class Product {
    id: number;
    name: string;
    price: number;
    description: string;

    getProductByAny(productAny: any): Product {
        this.id = productAny.id;
        this.name = productAny.name;
        this.description = productAny.description;
        this.price = productAny.price;
        return this;
    }
}
