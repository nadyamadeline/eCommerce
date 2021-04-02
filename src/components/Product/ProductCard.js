import React from "react";
import data from "./data";

function ProductCard() {
  console.log(data);
  return (
    <div className="product-card">
      {data && data.products
        ? data.products.map((product, index) => (
            <div key={index}>
              <img src={product.image} alt={product.name} />
            </div>
          ))
        : null}
    </div>
  );
}

export default ProductCard;
