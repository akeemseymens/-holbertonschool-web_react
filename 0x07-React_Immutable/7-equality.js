/*
  * Task 7 - Equality
  * Uses is() from immutable.js to determine equality of maps
*/
import { is } from 'immutable';

// It accepts two arguments map1 and map2. Both are Immutable.js Maps
// It should return true if the Maps are equal
export default function areMapsEqual(map1, map2) {
  return (
    is(map1, map2)
  );
}

// console.log(areMapsEqual(Map({'key1': 'value1'}), Map({'key1': 'value1'})))
