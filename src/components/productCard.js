import React from "react";
import {  useDispatch } from "react-redux";
import { deleteProduct } from "../redux/actions/productAction";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const { title, imageUrl, price, id } = product;
  return (
    <div
      className="product-card border"
      style={{ width: "25%", padding: "20px", margin: "20px" }}
    >
      <img width="100%" height="380px" src={imageUrl} alt="test" />
      <div>
        <h3>{title}</h3>
        <span>{price}$</span>
        <br></br>
        <div style={{ display: "flex" }}>
          <button className="btn btn-warning">Add to cart</button>
          <button
            onClick={() => dispatch(deleteProduct(id))}
            className="btn btn-danger"
          >
            Delete product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
