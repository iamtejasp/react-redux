import { ACTION_TYPE } from "../product-store";

function cartReducer(state = [], action) {
  switch (action.type) {
    case ACTION_TYPE.ADD_PRODUCT_CART:
      return [...state, action.payload];

    case ACTION_TYPE.REMOVE_PRODUCT_CART:
      return state.filter((i) => i.productId != action.payload.productId);

    case ACTION_TYPE.INCREASE_CART_ITEM:
      return state.map((i) => {
        if (i.productId === action.payload.productId) {
          return { ...i, quntity: i.quntity + 1 };
        } else {
          return i;
        }
      });

    case ACTION_TYPE.DECREASE_CART_ITEM:
      return state.cart.map((i) => {
        if (i.productId === action.payload.productId && i.quntity !== 0) {
          return { ...i, quntity: i.quntity - 1 };
        } else {
          return i;
        }
      });

    default:
      return state;
  }
}

export default cartReducer;
