import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/productCard";
import "./ProductListContainer.css";

const ProductListContainer = () => {
  const productList = useSelector((state) => state.productList); // global state selector

  console.log("extracting product list from our global state ", productList);
  return (
    <div className="product-list-container">
      {productList.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductListContainer;
