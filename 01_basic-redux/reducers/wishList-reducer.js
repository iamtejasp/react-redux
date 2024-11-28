import { ACTION_TYPE } from "../product-store";

function wishListReducer(state = [], action) {
  switch (action.type) {
    case ACTION_TYPE.ADD_PRODUCT_WISH_LIST:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default wishListReducer;
