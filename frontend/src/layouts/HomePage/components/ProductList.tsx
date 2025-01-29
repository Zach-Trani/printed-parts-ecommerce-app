import React from "react";
import { useEffect } from "react";
import axios from "axios";

export const ProductList = () => {
    
    useEffect(() => {
        const baseurl: string = "http://localhost:8080/api/products";

        const url: string = `${baseurl}`;
        
        const getProducts = async () => {
            const response = await axios.get(url);
            console.log(response.data._embedded.products[0].name);
        }
        getProducts();
    }, []);
    
    return (
        <div>

        </div>
    )
}