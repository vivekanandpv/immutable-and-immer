import { produce } from 'immer';

const store = {
  _state: null,

  _invocationList: [],

  initialize: function (initialState, reducer) {
    this._state = initialState;
    this._reducer = reducer;
  },

  getState: function (section) {
    return produce(this._state, (d) => {})[section];
  },

  _reducer: null,

  dispatch: function (action) {
    this._state = this._reducer(this._state, action);
    this._notify();
  },

  register: function (subscriber) {
    this._invocationList.push(subscriber);
  },

  _notify: function () {
    this._invocationList.forEach((s) => s());
  },
};

//  initialize the store
store.initialize(
  {
    user: { firstName: 'John', lastName: 'Doe' },
    language: 'English',
  },
  function (state, action) {
    if (action.type === 'changeFirstName') {
      return produce(state, (d) => {
        d.user.firstName = action.payload;
      });
    }

    return state;
  }
);

//  consumers of the state
store.register(() => {
  console.log('subscriber 1 is notified', store.getState('user'));
});

store.register(() => {
  console.log('subscriber 2 is notified', store.getState('user'));
});

store.register(() => {
  console.log('subscriber 3 is notified', store.getState('language'));
});

const firstNameChangeActionCreator = (newFirstName) => {
  return {
    type: 'changeFirstName',
    payload: newFirstName,
  };
};

console.log('dispatching the action...Harish');
store.dispatch(firstNameChangeActionCreator('Harish'));

console.log('dispatching the action...Murali');
store.dispatch(firstNameChangeActionCreator('Murali'));
