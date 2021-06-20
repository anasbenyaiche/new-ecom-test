import { ADD_PRODUCT, DELETE_PRODUCT } from "../actionTypes/productActionTypes";

const INITIAL_STATE = {
  productList: [
    {
      id: Math.random(),
      price: 1128,
      imageUrl:
        "https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: Math.random(),
      title: "PS5",
      price: 1000,
      imageUrl:
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
  ],
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      // modifying the state in our case adding a product {title, price , imageUrl}
      return {
        ...state,
        productList: [...state.productList, action.payload],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        productList: state.productList.filter(
          (product) => product.id !== action.payload // action payload which store id
        ),
      };

    default:
      return state;
  }
};

export default productReducer;
