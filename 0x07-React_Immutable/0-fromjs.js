/*
  *Task 0 - Converting into an Immutable object using fromJS
  *A function getImmutableObject that accepts object as a parameter &
  *converts it into an immutable Map using fromJS of the Immutable.js
*/
import { fromJS } from 'immutable';

export default function getImmutableObject(obj) {
  return (
    fromJS(obj)
  );
}

// console.log(getImmutableObject({
//   fear: true,
//   smell: -1033575916.9145899,
//   wall: false,
//   thing: -914767132
// })
// );
