import { createStore } from "redux";
import { productList } from "./product-list";

const ACTION_TYPE = {
  ADD_PRODUCT_CART: "ADD_PRODUCT_CART",
  REMOVE_PRODUCT_CART: "REMOVE_PRODUCT_CART",
  INCREASE_CART_ITEM: "INCREASE_CART_ITEM",
  DECREASE_CART_ITEM: "DECREASE_CART_ITEM",
};

const initialState = {
  products: productList,
  cart: [],
  watchList: [],
};

//* reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_PRODUCT_CART:
      return { ...state, cart: [...state.cart, action.payload] };

    case ACTION_TYPE.REMOVE_PRODUCT_CART:
      return {
        ...state,
        cart: state.cart.filter((i) => i.productId != action.payload.productId),
      };

    case ACTION_TYPE.INCREASE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.map((i) => {
          if (i.productId === action.payload.productId) {
            return { ...i, quntity: i.quntity + 1 };
          } else {
            return i;
          }
        }),
      };

    case ACTION_TYPE.DECREASE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.map((i) => {
          if (i.productId === action.payload.productId && i.quntity !== 0) {
            return { ...i, quntity: i.quntity - 1 };
          } else {
            return i;
          }
        }),
      };

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//* whenever our store values change this subscribe method call
store.subscribe(() => {
  console.log("==== store ====");
  console.log(store.getState());
});

//* redux store
store.dispatch({
  type: ACTION_TYPE.ADD_PRODUCT_CART,
  payload: { productId: 3, quntity: 10 },
});

store.dispatch({
  type: ACTION_TYPE.ADD_PRODUCT_CART,
  payload: { productId: 1, quntity: 2 },
});

store.dispatch({
  type: ACTION_TYPE.ADD_PRODUCT_CART,
  payload: { productId: 2, quntity: 23 },
});

store.dispatch({
  type: ACTION_TYPE.REMOVE_PRODUCT_CART,
  payload: { productId: 1 },
});

store.dispatch({
  type: ACTION_TYPE.INCREASE_CART_ITEM,
  payload: { productId: 2 },
});

store.dispatch({
  type: ACTION_TYPE.INCREASE_CART_ITEM,
  payload: { productId: 2 },
});

store.dispatch({
  type: ACTION_TYPE.DECREASE_CART_ITEM,
  payload: { productId: 3 },
});

store.dispatch({
  type: ACTION_TYPE.DECREASE_CART_ITEM,
  payload: { productId: 3 },
});

store.dispatch({
  type: ACTION_TYPE.ADD_PRODUCT_CART,
  payload: { productId: 1, quntity: 1 },
});

store.dispatch({
  type: ACTION_TYPE.DECREASE_CART_ITEM,
  payload: { productId: 1 },
});

store.dispatch({
  type: ACTION_TYPE.DECREASE_CART_ITEM,
  payload: { productId: 1 },
});
