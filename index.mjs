import { List, Set } from 'immutable';

//  creating an immutable list
const immutableList = List([0, 1, 2, 3, 4]);

//  only the immutable list is confirmed
console.log(List.isList(immutableList), List.isList([0, 1, 2, 3, 4]));

//  index-based access is not supported
console.log(immutableList[3]);

//  using the get() to read
console.log(immutableList.get(3));

//  to set value, use set(), which produces the new List
const newImmutableList = immutableList.set(3, 15);

// use .toJS() for convenient string representation
console.log(newImmutableList);

//  these are different objects
console.log(newImmutableList === immutableList);

//  dynamic set
//  immutableList has still value 3 at index 3
const anotherUpdatedList = immutableList.update(3, (n) => n * n);

// use .toJS() for convenient string representation
console.log(anotherUpdatedList);

//  self study:
//  delete() = remove()
//  clear()
//  insert()
//  push()
//  pop()
//  shift()
//  unshift()
