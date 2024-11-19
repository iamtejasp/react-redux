import { createStore } from "redux";
import { myCreateStore } from "./my-redux";

const ACTION_TYPE = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

const initialState = {
  name: "Tejas",
  count: 0,
};

//* reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + action.payload };

    case ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - action.payload };

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
console.log("Store", store);
console.log(store?.getState());

store.dispatch({ type: ACTION_TYPE.INCREMENT, payload: 10 });

store.dispatch({ type: ACTION_TYPE.DECREMENT, payload: 20 });

console.log("****************************");

//* my custome store

const myStore = myCreateStore(reducer);
//* whenever our mystore values change this subscribe method call
myStore.subscribe(() => {
  console.log("==== mystore ====");
  console.log(myStore.getState());
});

console.log("myStore", myStore);
console.log(myStore?.getState());
myStore.dispatch({ type: ACTION_TYPE.INCREMENT, payload: 10 });

myStore.dispatch({ type: ACTION_TYPE.INCREMENT, payload: 10 });
