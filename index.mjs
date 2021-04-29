import { produce } from 'immer';

//  store:
//  1. encapsulates the state
//  2. encapsulates the reducer
//  3. provides the subscription for the consumers

function Store(nascentState, originalReducer) {
  let state = nascentState;
  let reducer = originalReducer;

  const invocationList = [];

  this.subscribe = function (cb) {
    invocationList.push(cb);
  };

  this.getState = function () {
    return produce(state, (d) => {});
  };

  this.dispatch = function (action) {
    state = reducer(state, action);
    invocationList.forEach((cb) => {
      cb();
    });
  };
}

//  reducer
const reducer = (originalState, action) => {
  //  apply the modifications to the newState
  switch (action.type) {
    case 'UPDATE_NAME':
      return produce(originalState, (d) => {
        d.firstName = action.payload.newFirstName;
      });

    case 'UPDATE_CITY':
      return produce(originalState, (d) => {
        d.city = action.payload.newCity;
      });

    default:
      return originalState;
  }
};

//  action creators
const updateName = (newFirstName) => {
  // return action object
  return {
    type: 'UPDATE_NAME',
    payload: {
      newFirstName,
    },
  };
};

const updateCity = (newCity) => {
  // return action object
  return {
    type: 'UPDATE_CITY',
    payload: {
      newCity: newCity,
    },
  };
};

//  using the store
const storeInstance = new Store(
  { firstName: 'Vivek', city: 'Haveri' },
  reducer
);

//  registering the subscribers
storeInstance.subscribe(() => {
  console.log('Subscriber 1: State changed', storeInstance.getState());
});

storeInstance.subscribe(() => {
  console.log('Subscriber 2: State changed', storeInstance.getState());
});

//  dispatch the actions with action creators
console.log('Dispatching the UPDATE_NAME action');
storeInstance.dispatch(updateName('Ranjan'));

console.log('Dispatching the UPDATE_CITY action');
storeInstance.dispatch(updateCity('Hyderabad'));
