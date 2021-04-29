import { produce } from 'immer';

let state = {
  firstName: 'Vivekanand',
  city: 'Haveri',
};

function reducer(originalState, action) {
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
}

//  dispatching the action
let state2 = reducer(state, {
  type: 'UPDATE_CITY',
  payload: {
    newCity: 'Mumbai',
  },
});

console.log(state2);
