/*
  *Task 1 - Converting into Immutable using Map
  *A function getImmutableObject that accepts object as a parameter &
  *converts it into an immutable Map using map() of the Immutable.js
*/
import { Map } from 'immutable';

export default function getImmutableObject(obj) {
  return (
    Map(obj)
  );
}

// console.log(getImmutableObject({
//   fear: true,
//   smell: -1033575916.9145899,
//   wall: false,
//   thing: -914767132
// })
// );
