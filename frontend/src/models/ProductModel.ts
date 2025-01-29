class ProductModel {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number, name: string, description: string, price: number, stock: number, createdAt: Date, updatedAt: Date) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

export default ProductModel;