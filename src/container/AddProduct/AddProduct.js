import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductAction } from "../../redux/actions/productAction";

const AddProduct = () => {
  const [product, setProduct] = useState({ title: "", imageUrl: "", price: 0 });

  // to dispatch the action we the hook useDispatch
  const dispatch = useDispatch();

  useEffect(() => {
    setProduct({ title: "", imageUrl: "", price: 0 });
  }, [dispatch]);

  // to handle change of pf input
  const handleChange = (event) => {
    const { value, name } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(addProductAction({ ...product, id: Math.random() }));
  };

  return (
    <div
      style={{ width: "40%", padding: "50px", margin: "30px" }}
      className="border"
    >
      <div className="form-group">
        <label htmlFor="exampleInputImage">Product Title</label>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          className="form-control"
          placeholder="Enter your product title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Image Url</label>
        <input
          name="imageUrl"
          onChange={handleChange}
          type="text"
          className="form-control"
          placeholder="Enter your product title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          name="price"
          onChange={handleChange}
          type="number"
          className="form-control"
          placeholder="price"
        />
      </div>

      <button type="button" className="btn btn-primary " onClick={handleSubmit}>
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
