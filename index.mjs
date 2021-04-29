import { produce } from 'immer';

const originalState = {
  isLoggedIn: true,
  imageUrl: 'http://localhost:3000/image.png',
  displayName: 'Nagesh',
};

const nextState = produce(originalState, (d) => {
  //  apply the change as mutation
  //  but immer will cause immutable update
  //  originalState is unchanged
  d.displayName = 'Ravindra';
});

//  original state is unchanged
console.log(originalState);

console.log(nextState);

console.log(originalState === nextState);
