import { fromJS, Map } from 'immutable';

//  converting a regular JS object to Map, using fromJS

const car = {
  make: 'BMW',
  model: 'X5',
  year: 2021,
  owner: {
    firstName: 'Kailash',
    lastName: 'Kumar',
    address: {
      city: 'Delhi',
      state: 'Delhi',
    },
  },
};

const immutableMap = fromJS(car);

console.log(Map.isMap(immutableMap));

//  using set(k, v) to set the entries

const newMap = immutableMap.set('make', 'Kia');

//  a convenient string representation
console.log(newMap.toJS());

//  different objects
console.log(newMap === immutableMap);

//  dynamic set
const anotherMap = immutableMap.update('year', (v) => v - 2);

console.log(anotherMap.toJS());

//  deep dynamic set
const yetAnotherMap = immutableMap.update('owner', (o) =>
  o.update('address', (a) => a.update('city', (c) => 'Bengaluru'))
);

console.log(yetAnotherMap.toJS());

//  self study:
//  https://immutable-js.github.io/immutable-js/docs/#/Map
//  delete, remove, deleteAll, removeAll
//  clear
