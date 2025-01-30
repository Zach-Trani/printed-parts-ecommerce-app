import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "./ProductCard.tsx";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const baseurl: string = "http://localhost:8080/api/products";

    const url: string = `${baseurl}`;

    const getProducts = async () => {
      const response = await axios.get(url);
      console.log(response.data._embedded.products);
      setProducts(response.data._embedded.products);
    };
    getProducts();
  }, []);

  return (
    <div>
      <ProductCard products={products} />
    </div>
  );
};
