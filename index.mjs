import { produce } from 'immer';

const originalState = {
  isLoggedIn: true,
  imageUrl: 'http://localhost:3000/image.png',
  user: {
    firstName: 'Nagesh',
    lastName: 'A',
    extraInfo: {
      roles: ['user', 'manager'],
      office: {
        location: 'Gurugram',
      },
    },
  },
};

const nextState = produce(originalState, (d) => {
  d.user.extraInfo.roles.shift(); //  delete user
  d.user.extraInfo.office.location = 'Chennai';
});

//  original state is unchanged
console.log(originalState.user.extraInfo.roles);
console.log(originalState.user.extraInfo.office.location);

console.log(nextState.user.extraInfo.roles);
console.log(nextState.user.extraInfo.office.location);

console.log(originalState === nextState);

//  it is not a shallow copy!
console.log(originalState.user === nextState.user);
console.log(originalState.user.extraInfo === nextState.user.extraInfo);

//  more info: https://immerjs.github.io/immer/
