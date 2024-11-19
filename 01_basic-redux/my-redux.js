//* create own createStore method for create store in app

export function myCreateStore(reducer) {
  //initial state
  let state;

  //initial subcribe listeners
  const listeners = [];

  const store = {
    //getState method
    getState() {
      return state;
    },

    //dispatch method
    dispatch(action) {
      state = reducer(state, action);

      listeners.forEach((listener) => {
        listener();
      });
    },

    //subscribe method
    subscribe(listener) {
      listeners.push(listener);
    },
  };

  return store;
}
