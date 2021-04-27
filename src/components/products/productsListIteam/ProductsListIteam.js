import React from 'react';

const ProductsListIteam = ({product}) => {
    return (
      <li>
        <h2>product: {product.name}</h2>
        <p>model: {product.model}</p>
        <div>
          colors:
          <ul>
            {product.colors.map((color) => (
              <li key={color}>{color}</li>
            ))}
          </ul>
        </div>
        <p>price: {product.price}</p>
      </li>
    );
}

export default ProductsListIteam;