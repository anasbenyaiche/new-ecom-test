import { ADD_PRODUCT, DELETE_PRODUCT } from "../actionTypes/productActionTypes";

export const addProductAction = (product) => ({
  type: ADD_PRODUCT,
  payload: product, // {title, price , imageUrl}
});

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id, // id is the criteria to filter
  };
};
