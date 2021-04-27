import React from "react";
import ProductsListIteam from "./productsListIteam/ProductsListIteam";

const ProductsList = ({ products }) => {
  return (
    <ul className="ProductsList">
      {products.map((product) => (
        <ProductsListIteam product={product} key={product.id} />
      ))}
    </ul>
  );
};

export default ProductsList;
