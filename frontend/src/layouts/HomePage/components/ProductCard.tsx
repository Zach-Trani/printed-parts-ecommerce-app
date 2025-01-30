import React from "react";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}

export const ProductCard = ({ products }: { products: Product[] }) => {


  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {products.map((product: Product) => (
        <div className="col" key={product.id}>
          <div className="card h-100">
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
              <h5 className="card-title">{product.name.toString()}</h5>
              <p className="card-text">
                {product.description}
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
